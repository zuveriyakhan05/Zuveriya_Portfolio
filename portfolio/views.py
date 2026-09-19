from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import redirect, render
from django.urls import reverse

from .models import Certificate, ContactMessage, Project, Skill


def home(request):
    skills = {label: Skill.objects.filter(group=key) for key, label in Skill.GROUP_CHOICES}
    context = {
        "projects": Project.objects.all(),
        "category_choices": Project.CATEGORY_CHOICES,
        "skills": skills,
        "certificates": Certificate.objects.all(),
    }
    return render(request, "home.html", context)


def contact(request):
    if request.method != "POST":
        return redirect("portfolio:home")

    name = request.POST.get("name", "").strip()
    email = request.POST.get("email", "").strip()
    message = request.POST.get("message", "").strip()

    if not name or not email or not message:
        messages.error(request, "Please complete every field before sending your message.")
        return redirect(f"{reverse('portfolio:home')}#contact")

    contact_message = ContactMessage.objects.create(name=name, email=email, message=message)
    send_mail(
        subject=f"Portfolio message from {contact_message.name}",
        message=f"Reply to: {contact_message.email}\n\n{contact_message.message}",
        from_email=None,
        recipient_list=[settings.CONTACT_RECIPIENT],
        fail_silently=True,
    )
    messages.success(request, "Thank you. Your message has been sent.")
    return redirect(f"{reverse('portfolio:home')}#contact")
