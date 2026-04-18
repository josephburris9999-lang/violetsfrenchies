
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-20">
      <section className="bg-secondary/30 py-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Have questions about our puppies or our process? We&apos;re here to help.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">Contact Information</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We respond to all inquiries within 24-48 hours. If you are interested in a specific puppy, please mention their name in your message!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm border group-hover:bg-primary transition-colors group-hover:text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-muted-foreground">hello@violetsfrenchies.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm border group-hover:bg-primary transition-colors group-hover:text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone</h4>
                  <p className="text-muted-foreground">(503) 555-0198</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm border group-hover:bg-primary transition-colors group-hover:text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Location</h4>
                  <p className="text-muted-foreground">Portland, Oregon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border relative overflow-hidden">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in zoom-in duration-500">
                <div className="p-6 bg-secondary rounded-full">
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Message Received!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. One of our family members will contact you shortly to discuss your new puppy journey.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Jane" required className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required className="rounded-xl h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" required className="rounded-xl h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Interest Level</Label>
                  <select 
                    id="interest" 
                    className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option>General Inquiry</option>
                    <option>Ready to Adopt Now</option>
                    <option>Waitlist Inquiry</option>
                    <option>Breeding Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" placeholder="Tell us about yourself and the puppy you're looking for..." className="min-h-[150px] rounded-2xl" required />
                </div>

                <Button type="submit" className="w-full bg-primary py-6 text-lg rounded-2xl shadow-lg hover:shadow-primary/20">
                  <Send className="h-5 w-5 mr-2" /> Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
