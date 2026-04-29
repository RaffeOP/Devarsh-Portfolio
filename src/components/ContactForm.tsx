import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // In a real Vite app, you'd send this to a backend API or a service like Formspree
    // For this portfolio migration, we'll simulate a successful send
    console.log('Form submission:', data);

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! I will get back to you soon.');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input 
          id="name" 
          name="name" 
          placeholder="Your Name" 
          required 
          className="bg-background/50 backdrop-blur-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="your@email.com" 
          required 
          className="bg-background/50 backdrop-blur-sm"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="What's on your mind?" 
          required 
          className="min-h-[150px] bg-background/50 backdrop-blur-sm"
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
