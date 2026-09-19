from django.db import models


class Project(models.Model):
    CATEGORY_CHOICES = [
        ("analytics", "Data Analytics"),
        ("ai", "Artificial Intelligence / Machine Learning"),
        ("development", "Full-stack Development"),
        ("uiux", "UI/UX Design"),
        ("graphic", "Graphic Design"),
    ]
    title = models.CharField(max_length=160)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    year = models.CharField(max_length=20, blank=True)
    description = models.TextField()
    role = models.CharField(max_length=160, blank=True)
    technologies = models.CharField(max_length=240, blank=True)
    image = models.CharField(max_length=255, blank=True)
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    figma_url = models.URLField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.title


class Skill(models.Model):
    GROUP_CHOICES = [
        ("analytics", "Data Analytics"),
        ("development", "Development"),
        ("ai", "AI / Machine Learning"),
        ("design", "Design"),
    ]
    name = models.CharField(max_length=100)
    group = models.CharField(max_length=20, choices=GROUP_CHOICES)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["group", "order", "name"]

    def __str__(self):
        return self.name



class Certificate(models.Model):
    CATEGORY_CHOICES = [
        ("hackathon", "Hackathon"),
        ("internship", "Internship"),
        ("course", "Course"),
        ("workshop", "Workshop"),
        ("research", "Research"),
    ]
    title = models.CharField(max_length=220)
    issuer = models.CharField(max_length=180)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    date = models.CharField(max_length=80, blank=True)
    file = models.CharField(max_length=255, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.email}"
