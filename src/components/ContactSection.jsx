import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import React, { useState, useRef } from "react";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";
import { DecorativeFlower, SparkleStar } from "./DecorativeFlower";

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
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#FAECE3] text-[#2D283E] relative border-t border-[#E5CFC1]/40">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header Tag */}
        <div className="flex items-center space-x-3 text-xs font-bold tracking-widest text-[#2D283E]/70 uppercase mb-8">
          <span className="text-[#E47E64]">06</span>
          <span>SAY HELLO</span>
        </div>

        {/* Headline Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-[11px] font-bold tracking-widest text-[#2D283E]/60 uppercase">
              START A CONVERSATION
            </p>

            <h2 className="font-serif uppercase tracking-tight leading-[0.92] text-[#2D283E]">
              <span className="flex items-baseline gap-4 text-5xl sm:text-6xl md:text-7xl">
                <span className="font-normal">LET'S</span>
                <span className="font-normal italic text-[#E47E64]">CONNECT.</span>
              </span>
            </h2>

            <p className="font-script text-2xl text-[#E47E64] pt-2">
              Let's create something great together ✦
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end items-center space-x-4">
            <DecorativeFlower className="w-12 h-12" />
            <SparkleStar className="w-5 h-5 text-[#E47E64]" />
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky-note p-8 rounded-xs space-y-6">
              <h3 className="font-serif text-2xl text-[#2D283E]">Contact Details</h3>
              
              <div className="space-y-4 text-xs font-medium">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#F8C0AD]/40 border border-[#2D283E]/10 rounded-full">
                    <Mail className="h-5 w-5 text-[#E47E64]" />
                  </div>
                  <div>
                    <span className="text-[#2D283E]/60 uppercase block text-[10px]">Email</span>
                    <a href="mailto:zuveriyap05@gmail.com" className="text-[#2D283E] hover:text-[#E47E64] transition-colors">
                      zuveriyap05@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#F8C0AD]/40 border border-[#2D283E]/10 rounded-full">
                    <MapPin className="h-5 w-5 text-[#E47E64]" />
                  </div>
                  <div>
                    <span className="text-[#2D283E]/60 uppercase block text-[10px]">Location</span>
                    <span className="text-[#2D283E]">Gujarat, India</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[#2D283E]/10">
                <span className="text-[10px] font-bold tracking-widest text-[#2D283E]/60 uppercase block mb-4">
                  CONNECT WITH ME
                </span>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/zuveriya-khan-9a44a6319"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#2D283E] text-white rounded-full hover:bg-[#E47E64] transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://github.com/zuveriyakhan05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#2D283E] text-white rounded-full hover:bg-[#E47E64] transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Message Form */}
          <div className="lg:col-span-7">
            <div className="sticky-note-peach p-8 md:p-10 rounded-xs shadow-md">
              <h3 className="font-serif text-3xl text-[#2D283E] mb-6">Send a Message</h3>
              
              <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-[#2D283E] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#FFFBF5] border border-[#2D283E] text-xs font-sans text-[#2D283E] focus:outline-hidden focus:ring-1 focus:ring-[#2D283E]"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-[#2D283E] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[#FFFBF5] border border-[#2D283E] text-xs font-sans text-[#2D283E] focus:outline-hidden focus:ring-1 focus:ring-[#2D283E]"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-[#2D283E] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-[#FFFBF5] border border-[#2D283E] text-xs font-sans text-[#2D283E] focus:outline-hidden focus:ring-1 focus:ring-[#2D283E] resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-peach uppercase text-xs tracking-wider w-full justify-center"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};