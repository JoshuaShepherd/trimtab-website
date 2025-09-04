'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ebookSKUs } from './config';
import React from 'react';
import { 
  Download, 
  BookOpen, 
  Users, 
  Zap,
  Check,
  Star,
  Gift,
  ArrowRight,
  Mail,
  CreditCard
} from 'lucide-react';

interface SKUCardProps {
  sku: typeof ebookSKUs[0];
  featured?: boolean;
  onSelect: (skuId: string) => void;
}

function SKUCard({ sku, featured, onSelect }: SKUCardProps) {
  const getIcon = () => {
    switch (sku.type) {
      case 'lite': return <Gift className="w-6 h-6" />;
      case 'standard': return <BookOpen className="w-6 h-6" />;
      case 'pro': return <Zap className="w-6 h-6" />;
      case 'deluxe': return <Star className="w-6 h-6" />;
      case 'team': return <Users className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  const getTheme = () => {
    if (featured) return 'border-2 border-blue-500 shadow-xl';
    if (sku.type === 'lite') return 'border-green-200 bg-green-50';
    return 'border-gray-200 hover:border-gray-300';
  };

  return (
    <Card className={`relative ${getTheme()} transition-all duration-300 hover:shadow-lg`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-blue-500 text-white px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
            {getIcon()}
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">
              {sku.name}
            </CardTitle>
            <CardDescription className="text-sm">
              {sku.description}
            </CardDescription>
          </div>
        </div>
        
        <div className="mt-4">
          {sku.price === 0 ? (
            <div className="text-3xl font-bold text-green-600">Free</div>
          ) : (
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold">${sku.price}</div>
              {sku.originalPrice && (
                <div className="text-lg text-gray-400 line-through">
                  ${sku.originalPrice}
                </div>
              )}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Features */}
          <div>
            <h4 className="font-medium mb-2">Features:</h4>
            <ul className="space-y-1">
              {sku.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Includes */}
          <div>
            <h4 className="font-medium mb-2">What's Included:</h4>
            <ul className="space-y-1">
              {sku.includes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Button 
            className={`w-full mt-6 ${
              featured 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : sku.type === 'lite' 
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gray-800 hover:bg-gray-900'
            }`}
            onClick={() => onSelect(sku.id)}
          >
            <div className="flex items-center gap-2">
              {sku.gating === 'email' ? <Mail className="w-4 h-4" /> : <CreditCard className="w-4 h-4" />}
              {sku.cta}
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface EmailCaptureFormProps {
  onSubmit: (email: string, firstName?: string) => void;
  isSubmitting: boolean;
}

function EmailCaptureForm({ onSubmit, isSubmitting }: EmailCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, firstName);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Get Your Free APEST Guide</CardTitle>
        <CardDescription className="text-center">
          Enter your email to download the free PDF guide and join our community.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="firstName">First Name (Optional)</Label>
            <Input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Your first name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={isSubmitting || !email}
          >
            {isSubmitting ? 'Processing...' : 'Download Free Guide'}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

export default function EbookSKUsPage() {
  const [selectedSKU, setSelectedSKU] = useState<string | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSKUSelect = (skuId: string) => {
    const sku = ebookSKUs.find(s => s.id === skuId);
    if (!sku) return;

    if (sku.gating === 'email') {
      setSelectedSKU(skuId);
      setShowEmailForm(true);
    } else {
      // Handle payment flow
      console.log('Redirect to payment for:', skuId);
      // This would integrate with your payment processor
    }
  };

  const handleEmailSubmit = async (email: string, firstName?: string) => {
    setIsSubmitting(true);
    try {
      // This would integrate with your email service (Mailchimp, etc.)
      console.log('Email capture:', { email, firstName, sku: selectedSKU });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to thank you page with tripwire offer
      window.location.href = '/ebook/thank-you?email=' + encodeURIComponent(email);
    } catch (error) {
      console.error('Email capture failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showEmailForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setShowEmailForm(false)}
              className="mb-4"
            >
              ← Back to Options
            </Button>
            <h1 className="text-3xl font-bold mb-4">
              Almost There!
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              You're one step away from getting your free APEST guide. 
              This 20-30 page summary will help you understand the current state of ministry 
              and why APEST matters more than ever.
            </p>
          </div>
          
          <EmailCaptureForm onSubmit={handleEmailSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Master Your Apostolic & Prophetic Connexus
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Choose the perfect package for your ministry journey. From a free introduction 
              to comprehensive team training, we have options for every leader.
            </p>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              🎯 Choose Your Learning Path
            </Badge>
          </div>
        </div>
      </div>

      {/* SKU Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebookSKUs.map((sku, index) => (
            <SKUCard
              key={sku.id}
              sku={sku}
              featured={sku.type === 'pro'} // Make Pro the featured option
              onSelect={handleSKUSelect}
            />
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Option Is Right?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's a quick comparison to help you choose the perfect fit for your ministry needs.
            </p>
          </div>

          {/* Quick Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left">Feature</th>
                  {ebookSKUs.map(sku => (
                    <th key={sku.id} className="border border-gray-200 px-4 py-3 text-center min-w-32">
                      {sku.name.split(' ')[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'PDF Download',
                  'EPUB Format', 
                  'Interactive WebBook',
                  'Progress Tracking',
                  'AI Helper',
                  'Quizzes',
                  'Print Book',
                  'Coaching Voucher',
                  'Team Dashboard'
                ].map(feature => (
                  <tr key={feature}>
                    <td className="border border-gray-200 px-4 py-3 font-medium">
                      {feature}
                    </td>
                    {ebookSKUs.map(sku => (
                      <td key={sku.id} className="border border-gray-200 px-4 py-3 text-center">
                        {getFeatureSupport(feature, sku.type)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What's the difference between the PDF and WebBook?",
                a: "The PDF is a traditional downloadable document, while the WebBook is an interactive online experience with progress tracking, notes, quizzes, and our AI helper."
              },
              {
                q: "Can I upgrade from one package to another?",
                a: "Yes! You can upgrade at any time. We'll credit your previous purchase toward the higher tier."
              },
              {
                q: "How does the 'Ask Tim' AI helper work?",
                a: "It's a page-aware AI trained on the book content that can answer questions, provide summaries, suggest next steps, and generate practice prompts based on where you are in the book."
              },
              {
                q: "What's included in the Team Pack?",
                a: "10 WebBook licenses, a team progress dashboard, facilitator guide, PowerPoint slides, discussion prompts, and a group video debrief session."
              }
            ].map((faq, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getFeatureSupport(feature: string, skuType: string): React.ReactElement {
  const supports: Record<string, string[]> = {
    'PDF Download': ['lite', 'standard', 'deluxe'],
    'EPUB Format': ['standard', 'deluxe'],
    'Interactive WebBook': ['pro', 'team'],
    'Progress Tracking': ['pro', 'team'],
    'AI Helper': ['pro', 'team'],
    'Quizzes': ['pro', 'team'],
    'Print Book': ['deluxe'],
    'Coaching Voucher': ['deluxe'],
    'Team Dashboard': ['team']
  };

  const supported = supports[feature]?.includes(skuType);
  
  return supported ? (
    <Check className="w-5 h-5 text-green-500 mx-auto" />
  ) : (
    <span className="text-gray-300">—</span>
  );
}
