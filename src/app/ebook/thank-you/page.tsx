'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { 
  Download, 
  BookOpen, 
  Check,
  Star,
  Zap,
  ArrowRight,
  Timer,
  Gift,
  Mail
} from 'lucide-react';

export default function ThankYouPage() {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [showOrderBump, setShowOrderBump] = useState(true);

  useEffect(() => {
    // Get email from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTripwireSelect = () => {
    console.log('Tripwire selected: Standard ebook');
    // This would redirect to payment
    window.location.href = '/checkout?sku=standard&source=tripwire';
  };

  const handleUpsell = () => {
    console.log('Upsell selected: Pro WebBook');
    // This would redirect to payment
    window.location.href = '/checkout?sku=pro&source=upsell';
  };

  const handleOrderBump = () => {
    console.log('Order bump selected: Workbook');
    setShowOrderBump(false);
    // Add to cart logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <div className="bg-green-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            Success! Your Free APEST Guide is Ready
          </h1>
          <p className="text-green-100 text-lg">
            Check your email ({email}) for the download link and next steps.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Main Tripwire Offer */}
          <Card className="border-2 border-blue-500 shadow-xl">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center justify-between">
                <Badge className="bg-red-500 text-white">
                  Limited Time Offer
                </Badge>
                <div className="flex items-center gap-2 text-red-600">
                  <Timer className="w-4 h-4" />
                  <span className="font-mono font-bold">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
              <CardTitle className="text-2xl text-blue-800 mt-4">
                Get the Complete Ebook for Just $9
              </CardTitle>
              <CardDescription className="text-lg">
                Normally $19 - Save $10 Today Only
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Complete 7-chapter ebook (200+ pages)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>EPUB + Tagged PDF formats</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Mobile-optimized reading</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Lifetime access & updates</span>
                </div>
                
                <Separator className="my-6" />
                
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    <span className="text-gray-400 line-through">$19</span>
                    <span className="text-green-600 ml-2">$9</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    One-time payment • Instant access
                  </p>
                  
                  <Button 
                    onClick={handleTripwireSelect}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                    size="lg"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Get Complete Ebook - $9
                  </Button>
                </div>

                {/* Order Bump */}
                {showOrderBump && (
                  <Card className="border-orange-200 bg-orange-50 mt-6">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <input 
                          type="checkbox" 
                          id="order-bump"
                          className="mt-1"
                          onChange={handleOrderBump}
                        />
                        <div className="flex-1">
                          <label htmlFor="order-bump" className="cursor-pointer">
                            <div className="flex items-center gap-2 mb-1">
                              <Gift className="w-4 h-4 text-orange-600" />
                              <span className="font-semibold text-orange-800">
                                Add Bonus Workbook (+$9)
                              </span>
                            </div>
                            <p className="text-sm text-orange-700">
                              Fillable PDF workbook with exercises and reflection prompts 
                              for each chapter. Perfect for personal study or small groups.
                            </p>
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CardContent>
          </Card>

          {/* One-Click Upsell */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-50">
              <Badge className="bg-purple-500 text-white w-fit">
                Upgrade Offer
              </Badge>
              <CardTitle className="text-xl text-purple-800 mt-4">
                Or Get the Full Interactive Experience
              </CardTitle>
              <CardDescription>
                WebBook + AI Helper + Quizzes + Videos
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-purple-500" />
                  <span>Interactive WebBook with progress tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-purple-500" />
                  <span>"Ask Tim" AI helper (page-aware)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-purple-500" />
                  <span>End-of-chapter quizzes with scoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-purple-500" />
                  <span>Highlight & notes system</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-purple-500" />
                  <span>3 exclusive videos + workbook</span>
                </div>

                <div className="text-center pt-4">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    $39 
                    <span className="text-sm font-normal text-gray-500">
                      (normally $59)
                    </span>
                  </div>
                  
                  <Button 
                    onClick={handleUpsell}
                    variant="outline"
                    className="w-full border-purple-500 text-purple-600 hover:bg-purple-50"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Upgrade to Pro Experience
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Happens Next */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">
              What Happens Next?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">1. Check Your Email</h3>
                <p className="text-sm text-gray-600">
                  Your free PDF guide is waiting in your inbox with instant download.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">2. Start Learning</h3>
                <p className="text-sm text-gray-600">
                  Dive into the 3 core exercises and discover your APEST foundation.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">3. Go Deeper</h3>
                <p className="text-sm text-gray-600">
                  Take the full assessment and consider booking a coaching debrief.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Want to explore more of our resources?
          </p>
          <div className="space-x-4">
            <Button asChild variant="outline">
              <Link href="/ebook">
                Back to eBook Hub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/apest-quiz">
                Take Full Assessment
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/coaching">
                Book Coaching Session
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
