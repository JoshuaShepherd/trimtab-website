"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  GraduationCap,
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    serviceInterest: '',
    message: '',
    preferredContact: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Add your form submission logic
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      title: "Schedule a Discovery Call",
      description: "Book a complimentary 30-minute consultation to explore how we can work together.",
      icon: Calendar,
      action: "Schedule Call",
      href: "https://calendly.com/timcatchim/discovery",
      color: "bg-blue-500"
    },
    {
      title: "Email Consultation",
      description: "Send detailed questions about your leadership development needs.",
      icon: Mail,
      action: "Send Email",
      href: "mailto:tim@trimtab.com",
      color: "bg-green-500"
    },
    {
      title: "Phone Consultation",
      description: "Speak directly about your organization's transformation goals.",
      icon: Phone,
      action: "Call Now",
      href: "tel:+15551234567",
      color: "bg-purple-500"
    }
  ];

  const faqs = [
    {
      question: "What is a discovery call?",
      answer: "A discovery call is a complimentary 30-minute conversation where we explore your leadership development needs, discuss your context, and determine if our services are a good fit for your goals."
    },
    {
      question: "How long do coaching programs typically last?",
      answer: "APEST coaching programs typically run 3-6 months, with sessions every 2-3 weeks. Leadership training programs can range from single workshops to year-long cohort experiences."
    },
    {
      question: "Do you work with individual leaders or teams?",
      answer: "Both! I offer individual coaching for personal development and team coaching for leadership teams wanting to align around their collective APEST gifts."
    },
    {
      question: "What does church consulting involve?",
      answer: "Church consulting includes strategic planning, culture assessment, leadership development, and implementation support for missional transformation initiatives."
    },
    {
      question: "Are services available internationally?",
      answer: "Yes! I work with leaders and organizations worldwide through virtual coaching, online training programs, and international speaking engagements."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Start a
              <span className="block trimtab-gradient bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discover your APEST gifts and catalyze transformation in your context? 
              I'd love to hear about your leadership journey and explore how we can work together.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="trimtab-card-hover text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center`}>
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  <Button className="w-full" asChild>
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Your Role</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        placeholder="e.g., Pastor, Executive, Team Leader"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <Select onValueChange={(value) => handleInputChange('serviceInterest', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apest-coaching">APEST Coaching</SelectItem>
                          <SelectItem value="leadership-training">Leadership Training</SelectItem>
                          <SelectItem value="church-consulting">Church Consulting</SelectItem>
                          <SelectItem value="speaking">Speaking & Events</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you want to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell me about your leadership development goals, current challenges, or questions you have..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full trimtab-gradient text-white border-0">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & FAQs */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Multiple ways to connect</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">tim@trimtab.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-gray-600">Global (Remote)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-gray-600">Within 24 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                      <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="trimtab-gradient text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Work with TrimTab?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span>500+ leaders successfully coached</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span>15+ years of proven experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span>Global perspective with local application</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3" />
                      <span>Biblical foundation with practical tools</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
