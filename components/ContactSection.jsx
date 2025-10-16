"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube, Info, Zap, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="relative min-h-screen bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-green-950 bg-top bg-no-repeat">
      {/* Animated background dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-slate-900/80 pointer-events-none" />

      <div className="relative z-0 flex flex-col items-center max-md:px-2 text-black dark:text-white text-sm pb-28 pt-8">
        <div className="w-full max-w-7xl mx-auto px-4 mt-16">
          {/* Header with animation */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-semibold mb-4 bg-gradient-to-r from-black dark:from-white to-[#37ac6e] dark:to-green-400 text-transparent bg-clip-text">
              Get in Touch
            </h1>
            <p className="text-zinc-800 dark:text-slate-300 md:text-lg max-w-2xl mx-auto">
              Let's discuss how we can help grow your business with our proven solutions
            </p>
          </div>

          {/* Top Row: Form and Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
            {/* Contact Form with floating effect */}
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />

              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl h-full flex flex-col">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-black dark:text-white">
                  <Send className="size-6 text-green-600 dark:text-green-400" />
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                  {/* Name Input */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={cn(
                        "absolute left-4 transition-all duration-200 text-zinc-600 dark:text-slate-400 pointer-events-none",
                        focusedField === "name" || formData.name
                          ? "-top-2.5 text-xs bg-white dark:bg-slate-800 px-2 text-green-600 dark:text-green-400 font-medium"
                          : "top-3 text-sm"
                      )}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all duration-200 bg-white dark:bg-slate-700 text-black dark:text-white"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={cn(
                        "absolute left-4 transition-all duration-200 text-zinc-600 dark:text-slate-400 pointer-events-none",
                        focusedField === "email" || formData.email
                          ? "-top-2.5 text-xs bg-white dark:bg-slate-800 px-2 text-green-600 dark:text-green-400 font-medium"
                          : "top-3 text-sm"
                      )}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all duration-200 bg-white dark:bg-slate-700 text-black dark:text-white"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className={cn(
                        "absolute left-4 transition-all duration-200 text-zinc-600 dark:text-slate-400 pointer-events-none",
                        focusedField === "phone" || formData.phone
                          ? "-top-2.5 text-xs bg-white dark:bg-slate-800 px-2 text-green-600 dark:text-green-400 font-medium"
                          : "top-3 text-sm"
                      )}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all duration-200 bg-white dark:bg-slate-700 text-black dark:text-white"
                    />
                  </div>

                  {/* Company Input */}
                  <div className="relative">
                    <label
                      htmlFor="company"
                      className={cn(
                        "absolute left-4 transition-all duration-200 text-zinc-600 dark:text-slate-400 pointer-events-none",
                        focusedField === "company" || formData.company
                          ? "-top-2.5 text-xs bg-white dark:bg-slate-800 px-2 text-green-600 dark:text-green-400 font-medium"
                          : "top-3 text-sm"
                      )}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all duration-200 bg-white dark:bg-slate-700 text-black dark:text-white"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={cn(
                        "absolute left-4 transition-all duration-200 text-zinc-600 dark:text-slate-400 pointer-events-none",
                        focusedField === "message" || formData.message
                          ? "-top-2.5 text-xs bg-white dark:bg-slate-800 px-2 text-green-600 dark:text-green-400 font-medium"
                          : "top-3 text-sm"
                      )}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all duration-200 bg-white dark:bg-slate-700 text-black dark:text-white resize-none"
                    />
                  </div>

                  {/* Submit Button with hover effect */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] mt-auto"
                  >
                    Send Message
                    <Send className="size-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="relative group">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-black dark:text-white">
                  <Info className="size-6 text-green-600 dark:text-green-400" />
                  Contact Information
                </h2>

                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-200">
                      <Mail className="size-5 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-zinc-600 dark:text-slate-400 mb-1">Email</h3>
                      <a href="mailto:Muzaffar@haidmcc.com" className="text-base text-black dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        Muzaffar@haidmcc.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-200">
                      <Phone className="size-5 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-zinc-600 dark:text-slate-400 mb-1">Phone</h3>
                      <a href="tel:+97145754755" className="text-base text-black dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors block">
                        +971 4 575 4755
                      </a>
                      <a href="tel:+971505013725" className="text-base text-black dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors block">
                        +971 50 501 3725
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-200">
                      <MapPin className="size-5 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-zinc-600 dark:text-slate-400 mb-1">Address</h3>
                      <p className="text-base text-black dark:text-white">Office number 1406</p>
                      <p className="text-base text-black dark:text-white">Gold Crest Executive Tower</p>
                      <p className="text-base text-black dark:text-white">Cluster C JLT Dubai</p>
                      <p className="text-base text-black dark:text-white">United Arab Emirates</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-200">
                      <Clock className="size-5 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-zinc-600 dark:text-slate-400 mb-1">Business Hours</h3>
                      <p className="text-base text-black dark:text-white">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-base text-black dark:text-white">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Connect With Us and Quick Response */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Social Media Card */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-black dark:text-white">
                  <Share2 className="size-6 text-green-600 dark:text-green-400" />
                  Connect With Us
                </h3>
                <p className="text-zinc-600 dark:text-slate-400 mb-6">Follow us on social media for updates and news</p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="size-5 text-zinc-700 dark:text-slate-300 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-sky-500 transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="size-5 text-zinc-700 dark:text-slate-300 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5 text-zinc-700 dark:text-slate-300 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="size-5 text-zinc-700 dark:text-slate-300 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="size-5 text-zinc-700 dark:text-slate-300 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

            {/* Quick Response Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-2xl shadow-xl">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Zap className="size-6 text-white" />
                    Quick Response
                  </h3>
                  <p className="text-green-50 mb-6">
                    We typically respond within 24 hours during business days. For urgent matters, please call us directly.
                  </p>
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Online now</span>
                  </div>
                </div>
              </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <div className="w-full rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.653525408037!2d55.137902330009446!3d25.070924793279378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6cafb98a0725%3A0x6a2dec1aef8cd997!2sJumeirah%20Lake%20Towers%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1662708189532!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg dark:opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
