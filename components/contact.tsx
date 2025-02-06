"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, message: "", error: false });

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  interface Status {
    loading: boolean;
    message: string;
    error: boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    try {
      const response: Response = await fetch(
        "https://jjbxifcmkptyvljmdyic.supabase.co/functions/v1/contact", // Replace with your actual Supabase function URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result: { error?: string } = await response.json();

      if (response.ok) {
        setStatus({ loading: false, message: "Message sent successfully!", error: false });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        throw new Error(result.error || "Failed to send message.");
      }
    } catch (error: any) {
      setStatus({ loading: false, message: error.message, error: true });
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="container">
        <Card className="border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Get in Touch</CardTitle>
            <CardDescription>
              Looking to collaborate on a project? Let's discuss how we can work together.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Message</label>
                <Textarea id="message" placeholder="Your message" rows={6} value={formData.message} onChange={handleChange} required />
              </div>
              <Button className="w-full" size="lg" type="submit" disabled={status.loading}>
                {status.loading ? "Sending..." : "Send Message"}
              </Button>

              {status.message && (
                <p className={`text-center mt-2 ${status.error ? "text-red-500" : "text-green-500"}`}>
                  {status.message}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}