"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { 
  Target,
  ArrowRight,
  CheckCircle,
  Clock,
  Send,
  Building,
  Heart,
  Eye,
  Shield,
  Brain,
  Users,
  BookOpen,
  Award,
  Star,
  Download,
  Calendar,
  Mail
} from "lucide-react";
import Footer from "@/components/Footer";

export default function APESTQuizExample() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedFlow, setSelectedFlow] = useState<'A' | 'B' | null>(null);

  const questions = [
    {
      id: 1,
      text: "I am naturally drawn to pioneering new ministries or church plants",
      category: "apostolic"
    },
    {
      id: 2,
      text: "I often sense God's direction for situations before others do",
      category: "prophetic"
    },
    {
      id: 3,
      text: "I feel energized when sharing the Gospel with non-believers",
      category: "evangelistic"
    },
    {
      id: 4,
      text: "I find deep satisfaction in caring for people's spiritual needs",
      category: "shepherding"
    },
    {
      id: 5,
      text: "I love explaining biblical concepts in ways people can understand",
      category: "teaching"
    },
    {
      id: 6,
      text: "I'm comfortable taking risks to advance God's kingdom",
      category: "apostolic"
    },
    {
      id: 7,
      text: "I can discern spiritual atmospheres and underlying issues",
      category: "prophetic"
    },
    {
      id: 8,
      text: "I build relationships easily with people who don't know Christ",
      category: "evangelistic"
    },
    {
      id: 9,
      text: "I naturally notice when someone is struggling emotionally",
      category: "shepherding"
    },
    {
      id: 10,
      text: "I enjoy researching and studying Scripture in depth",
      category: "teaching"
    }
  ];

  const scaleLabels = [
    "Strongly Disagree",
    "Disagree", 
    "Neutral",
    "Agree",
    "Strongly Agree"
  ];

  const handleAnswer = (questionIndex: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: score }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const scores = {
      apostolic: 0,
      prophetic: 0,
      evangelistic: 0,
      shepherding: 0,
      teaching: 0
    };

    questions.forEach((question, index) => {
      const answer = answers[index] || 0;
      scores[question.category as keyof typeof scores] += answer;
    });

    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const percentages = Object.entries(scores).map(([gift, score]) => ({
      gift,
      score,
      percentage: total > 0 ? Math.round((score / total) * 100) : 0
    })).sort((a, b) => b.percentage - a.percentage);

    return percentages;
  };

  const results = calculateResults();
  const primaryGift = results[0];
  const secondaryGift = results[1];

  const giftIcons = {
    apostolic: <Send className="w-8 h-8 text-blue-600" />,
    prophetic: <Eye className="w-8 h-8 text-purple-600" />,
    evangelistic: <Heart className="w-8 h-8 text-red-600" />,
    shepherding: <Shield className="w-8 h-8 text-green-600" />,
    teaching: <Brain className="w-8 h-8 text-orange-600" />
  };

  const giftDescriptions = {
    apostolic: "You're called to pioneer new works and multiply kingdom impact",
    prophetic: "You discern God's heart and direction for people and situations", 
    evangelistic: "You're passionate about reaching the lost with the Gospel",
    shepherding: "You care deeply for people's spiritual growth and wellbeing",
    teaching: "You communicate God's truth with clarity and understanding"
  };

  const progress = showResults ? 100 : Math.round(((currentQuestion + 1) / questions.length) * 100);

  if (showResults && !selectedFlow) {
    // Show flow selection for demo purposes
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Assessment Complete! 
            </h1>
            <p className="text-xl text-gray-600">
              Choose how you'd like to receive your detailed results (A/B Test Demo)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedFlow('A')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Flow A: Learning Hub Account
                </CardTitle>
                <CardDescription>
                  Create a free account to unlock your full APEST report and track your growth journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Detailed 12-page personalized report
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Saved in your personal dashboard
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Personalized course recommendations
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Progress tracking and reassessment
                  </div>
                </div>
                <Button className="w-full mt-4">
                  Create Free Account
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedFlow('B')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-600" />
                  Flow B: Personal Results Call
                </CardTitle>
                <CardDescription>
                  Get your report via email plus book a free 15-minute results call with Tim
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Instant email delivery of results
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Free 15-minute coaching call
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Personalized next steps discussion
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Direct access to Tim's insights
                  </div>
                </div>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Book Results Call
                  <Calendar className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Results Header */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <Award className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Your APEST Profile Results
              </h1>
              <p className="text-xl text-gray-600">
                Discover how God has uniquely gifted you for ministry impact
              </p>
            </div>
          </div>

          {/* Quick Results */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Primary APEST Gifts</h2>
                <p className="text-gray-600">Based on your assessment responses</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="mb-4">
                    {giftIcons[primaryGift.gift as keyof typeof giftIcons]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize">
                    Primary: {primaryGift.gift}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {primaryGift.percentage}%
                  </div>
                  <p className="text-gray-600 text-sm">
                    {giftDescriptions[primaryGift.gift as keyof typeof giftDescriptions]}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    {giftIcons[secondaryGift.gift as keyof typeof giftIcons]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize">
                    Secondary: {secondaryGift.gift}
                  </h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {secondaryGift.percentage}%
                  </div>
                  <p className="text-gray-600 text-sm">
                    {giftDescriptions[secondaryGift.gift as keyof typeof giftDescriptions]}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Breakdown */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Complete APEST Breakdown</CardTitle>
              <CardDescription>
                See how you scored across all five ministry gifts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results.map((result) => (
                  <div key={result.gift} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {giftIcons[result.gift as keyof typeof giftIcons]}
                      <span className="font-medium capitalize">{result.gift}</span>
                    </div>
                    <div className="flex items-center space-x-4 flex-1 ml-6">
                      <Progress value={result.percentage} className="flex-1" />
                      <span className="font-semibold text-gray-900 w-12 text-right">
                        {result.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Scripture Encouragement */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">God's Word for You</h3>
                  <blockquote className="text-blue-800 italic mb-2">
                    "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."
                  </blockquote>
                  <cite className="text-blue-600 font-medium">Ephesians 2:10 (NIV)</cite>
                  <p className="text-blue-700 mt-3 text-sm">
                    Your {primaryGift.gift} gifting is not an accident - it's God's intentional design for your unique ministry calling.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps based on selected flow */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Personalized Next Steps</CardTitle>
              <CardDescription>
                Recommended actions based on your {primaryGift.gift} primary gifting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Immediate Actions</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Read the {primaryGift.gift} chapter in the APEST eBook
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Join the {primaryGift.gift} community group
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Download the {primaryGift.gift} action toolkit
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Growth Opportunities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      Enroll in {primaryGift.gift} Foundations Course
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      Consider 1:1 coaching for gift development
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      Explore team leadership opportunities
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Button asChild className="h-16">
              <Link href="/ebook-example">
                <BookOpen className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Read Your Chapter</div>
                  <div className="text-xs opacity-90">Interactive {primaryGift.gift} guide</div>
                </div>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-16">
              <Link href="/courses">
                <Target className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">View Courses</div>
                  <div className="text-xs opacity-90">Personalized recommendations</div>
                </div>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-16">
              <Link href="/coaching">
                <Users className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="font-semibold">Book Coaching</div>
                  <div className="text-xs opacity-90">1:1 gift development</div>
                </div>
              </Link>
            </Button>
          </div>

          {/* Download/Email Options */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Full Report (PDF)
              </Button>
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email Results to Me
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Want to retake this assessment? We recommend waiting 90 days to see meaningful growth.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Target className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Free APEST Assessment</h1>
                <p className="text-sm text-gray-600">Discover your God-given ministry gifts</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          <div className="pb-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-blue-600">{currentQuestion + 1}</span>
            </div>
            <CardTitle className="text-xl">
              {questions[currentQuestion].text}
            </CardTitle>
            <CardDescription>
              Rate how strongly you agree with this statement
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {scaleLabels.map((label, index) => (
                <Label key={index} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={index + 1}
                    onChange={() => handleAnswer(currentQuestion, index + 1)}
                    checked={answers[currentQuestion] === index + 1}
                    className="text-blue-600"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{label}</div>
                    <div className="text-sm text-gray-600">
                      {index === 0 && "This doesn't describe me at all"}
                      {index === 1 && "This rarely describes me"}
                      {index === 2 && "I'm neutral about this"}
                      {index === 3 && "This often describes me"}
                      {index === 4 && "This describes me perfectly"}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {index + 1}
                  </Badge>
                </Label>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              
              <Button
                onClick={nextQuestion}
                disabled={!answers[currentQuestion]}
                className="min-w-[120px]"
              >
                {currentQuestion === questions.length - 1 ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Finish
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progress Encouragement */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            You're {Math.round(progress)}% complete! Keep going to discover your unique APEST profile.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
