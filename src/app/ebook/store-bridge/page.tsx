'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Gift,
  BookOpen,
  Video,
  FileText,
  Award,
  MessageCircle,
  ExternalLink,
  Key,
  Check,
  Star,
  Download,
  Play
} from 'lucide-react';

interface StoreSource {
  name: string;
  icon: string;
  color: string;
}

const storeSources: Record<string, StoreSource> = {
  amazon: { name: 'Amazon Kindle', icon: '📚', color: 'orange' },
  apple: { name: 'Apple Books', icon: '🍎', color: 'gray' },
  kobo: { name: 'Kobo', icon: '📖', color: 'blue' },
  google: { name: 'Google Play Books', icon: '📗', color: 'green' },
  print: { name: 'Print Book', icon: '📕', color: 'red' }
};

const bonusItems = [
  {
    id: 'workbook',
    name: 'Companion Workbook',
    description: 'Fillable PDF workbook with exercises and reflection prompts for each chapter',
    icon: FileText,
    value: '$19'
  },
  {
    id: 'videos',
    name: 'Private Video Series', 
    description: '3 exclusive videos (5-8 minutes each) diving deeper into key concepts',
    icon: Video,
    value: '$29'
  },
  {
    id: 'assessment',
    name: 'APEST Assessment Coupon',
    description: 'Free access to our comprehensive APEST assessment tool',
    icon: Award,
    value: '$15'
  },
  {
    id: 'coaching',
    name: 'Coaching Debrief Voucher',
    description: '30-minute one-on-one coaching session to discuss your results',
    icon: MessageCircle,
    value: '$49'
  }
];

export default function StoreBridgePage() {
  const [source, setSource] = useState<string>('');
  const [accessCode, setAccessCode] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [claimComplete, setClaimComplete] = useState(false);
  const [selectedBonuses, setSelectedBonuses] = useState<string[]>([]);

  useEffect(() => {
    // Detect source from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const sourceParam = urlParams.get('source');
    const codeParam = urlParams.get('code');
    
    if (sourceParam && storeSources[sourceParam]) {
      setSource(sourceParam);
    }
    if (codeParam) {
      setAccessCode(codeParam);
    }
  }, []);

  const handleClaimBonuses = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This would integrate with your backend
      console.log('Store bridge claim:', {
        source,
        accessCode,
        email,
        firstName,
        bonuses: selectedBonuses
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setClaimComplete(true);
      
      // Track conversion
      console.log('Analytics: store_claim_completed', {
        source,
        bonuses: selectedBonuses.length,
        email
      });
    } catch (error) {
      console.error('Claim failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleBonus = (bonusId: string) => {
    setSelectedBonuses(prev => 
      prev.includes(bonusId) 
        ? prev.filter(id => id !== bonusId)
        : [...prev, bonusId]
    );
  };

  const totalValue = selectedBonuses.reduce((acc, bonusId) => {
    const bonus = bonusItems.find(b => b.id === bonusId);
    return acc + parseInt(bonus?.value.replace('$', '') || '0');
  }, 0);

  if (claimComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-green-800">
                Welcome to Your Companion Hub!
              </CardTitle>
              <CardDescription className="text-green-700">
                Your bonus materials are ready. Check your email for access details.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* What's Next */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Check Your Email</h4>
                  <p className="text-sm text-gray-600">Download links for all your bonus materials</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Explore the Interactive WebBook</h4>
                  <p className="text-sm text-gray-600">Enhanced reading experience with AI helper</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Take the Assessment</h4>
                  <p className="text-sm text-gray-600">Discover your APEST profile and next steps</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="/ebook/webbook">
                <BookOpen className="w-4 h-4 mr-2" />
                Open WebBook
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/apest-quiz">
                <Award className="w-4 h-4 mr-2" />
                Take Assessment
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/coaching">
                <MessageCircle className="w-4 h-4 mr-2" />
                Schedule Coaching
              </a>
            </Button>
          </div>

          {/* Upgrade Offer */}
          <Card className="mt-8 border-purple-200">
            <CardHeader>
              <Badge className="bg-purple-500 text-white w-fit">
                Special Upgrade Offer
              </Badge>
              <CardTitle className="text-purple-800">
                Unlock the Full Interactive Experience
              </CardTitle>
              <CardDescription>
                Since you loved the book, get 25% off our Pro WebBook Bundle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-purple-600">
                    $44 
                    <span className="text-lg text-gray-400 line-through ml-2">$59</span>
                  </div>
                  <p className="text-sm text-gray-600">Limited time for store customers</p>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Upgrade Now
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Includes progress tracking, quizzes, AI helper, and exclusive videos
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome, Book Reader! 📚
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thanks for purchasing our book! As promised, you have access to exclusive 
            bonus materials worth over $100. Let's get you set up.
          </p>
          {source && (
            <Badge className="mt-4 text-lg px-4 py-2">
              {storeSources[source].icon} From {storeSources[source].name}
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bonus Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-6 h-6 text-green-600" />
                Your Exclusive Bonuses
              </CardTitle>
              <CardDescription>
                Select the materials you'd like to claim (all free for book buyers)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {bonusItems.map(bonus => {
                const Icon = bonus.icon;
                const isSelected = selectedBonuses.includes(bonus.id);
                
                return (
                  <div
                    key={bonus.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => toggleBonus(bonus.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        isSelected ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{bonus.name}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-green-600">
                              {bonus.value} Value
                            </Badge>
                            {isSelected && (
                              <Check className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {bonus.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <span className="font-medium">Total Value Selected:</span>
                <span className="text-2xl font-bold text-green-600">
                  ${totalValue}
                </span>
              </div>
              
              <Button
                onClick={() => setSelectedBonuses(bonusItems.map(b => b.id))}
                variant="outline"
                className="w-full"
              >
                Select All Bonuses
              </Button>
            </CardContent>
          </Card>

          {/* Claim Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-6 h-6 text-blue-600" />
                Claim Your Bonuses
              </CardTitle>
              <CardDescription>
                Create your free companion hub account to access materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleClaimBonuses} className="space-y-4">
                {!source && (
                  <div>
                    <Label htmlFor="source">Where did you buy the book?</Label>
                    <select
                      id="source"
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      required
                    >
                      <option value="">Select store...</option>
                      {Object.entries(storeSources).map(([key, store]) => (
                        <option key={key} value={key}>
                          {store.icon} {store.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <Label htmlFor="accessCode">
                    Access Code 
                    <span className="text-sm text-gray-500 ml-1">
                      (found in your book)
                    </span>
                  </Label>
                  <Input
                    id="accessCode"
                    type="text"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                    placeholder="Enter code from book"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Look for the companion site access code in your book's final pages
                  </p>
                </div>

                <Separator />

                <div>
                  <Label htmlFor="firstName">First Name</Label>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    We'll send download links and access details here
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !accessCode || !email || selectedBonuses.length === 0}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? (
                    'Creating Account...'
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Claim {selectedBonuses.length} Bonuses (${totalValue} Value)
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By claiming bonuses, you agree to receive emails with access details. 
                  You can unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Why This Matters */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">
              Why We Created This Companion Hub
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Reading about APEST is just the beginning. Real transformation happens when you 
              can practice the concepts, track your progress, and get personalized guidance. 
              That's why we created these exclusive materials—to help you move from knowledge to application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Enhanced Learning</h3>
                <p className="text-sm text-gray-600">
                  Interactive elements make concepts stick better than reading alone
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Personal Assessment</h3>
                <p className="text-sm text-gray-600">
                  Discover your unique APEST profile and development opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Ongoing Support</h3>
                <p className="text-sm text-gray-600">
                  Access to coaching and community to support your growth journey
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
