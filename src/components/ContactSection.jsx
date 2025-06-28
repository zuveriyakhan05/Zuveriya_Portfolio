import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import React, { useState, useRef } from "react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_jcsf3ul",     
        "template_3nd2dvb",    
        form.current,
        "2xQkRQ9NdTJ2K-PLc"      
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          "Let's create something great! ✨ I'm always open to new projects and collaborations."
          🛠️ Let's connect and discuss exciting new opportunities."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>
            <div className="space-y-4 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email </h4>
                  <a href="mailto:hello@gmail.com" className="text-muted-foreground hover:text-primary transition-colors ">
                    zuveriyap05@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone </h4>
                  <a href="tel:+91 8866392184" className="text-muted-foreground hover:text-primary transition-colors ">
                    +91 8866392184
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location </h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors ">
                    Gujarat, India
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 "> Connect With Me </h4>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/zuveriya-khan-9a44a6319" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://github.com/zuveriyakhan05" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 ">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Zuveriya Khan"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 ">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 ">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};