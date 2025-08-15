"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { 
  BookOpen,
  Play,
  Download,
  Users,
  MessageCircle,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  ArrowLeft,
  Volume2,
  FileText,
  Video,
  Headphones,
  Globe,
  Target,
  Lightbulb,
  Heart,
  Zap,
  Award,
  Brain,
  Map,
  Compass,
  Shield,
  Eye,
  Mic,
  Send,
  Building,
  HelpCircle,
  Bookmark,
  Share2,
  PauseCircle,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ChapterExample() {
  const [showDefinition, setShowDefinition] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const chapterProgress = 65;
  const readingTime = 12;
  const timeRemaining = 8;

  const toggleDefinition = (term: string) => {
    setShowDefinition(showDefinition === term ? null : term);
  };

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const submitQuiz = () => {
    setShowQuizResults(true);
  };

  const quizQuestions = [
    {
      id: 'q1',
      question: 'What is the primary focus of the Evangelistic gift?',
      options: [
        'Teaching biblical doctrine',
        'Sharing the Gospel and reaching the lost',
        'Caring for church members',
        'Starting new churches'
      ],
      correct: 'Sharing the Gospel and reaching the lost'
    },
    {
      id: 'q2',
      question: 'According to the chapter, evangelistic passion is characterized by:',
      options: [
        'A desire to win arguments',
        'Compassion for those without Christ',
        'Perfect theological knowledge',
        'Aggressive confrontation'
      ],
      correct: 'Compassion for those without Christ'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm">
                <Link href="/ebook-example">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Contents
                </Link>
              </Button>
              <div className="text-sm text-gray-600">
                Chapter 4 of 8
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{timeRemaining} min remaining</span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setBookmarked(!bookmarked)}
                className={bookmarked ? "text-yellow-600" : "text-gray-600"}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
              </Button>
              
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Chapter Progress</span>
              <span className="text-sm text-gray-600">{chapterProgress}%</span>
            </div>
            <Progress value={chapterProgress} className="h-2" />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Chapter Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-8 h-8 text-red-500" />
                <Badge variant="secondary" className="bg-red-100 text-red-700">
                  <Heart className="w-3 h-3 mr-1" />
                  Evangelistic
                </Badge>
                <Badge variant="outline">{readingTime} min read</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Evangelistic Passion: Reaching the Lost with Good News
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how God's heart for the lost can become your driving passion, and learn practical ways to share the Gospel with authenticity and love.
              </p>
            </div>

            {/* Scripture Foundation */}
            <Card className="mb-8 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Scripture Foundation</h3>
                    <blockquote className="text-blue-800 italic mb-2">
                      "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."
                    </blockquote>
                    <cite className="text-blue-600 font-medium">Acts 1:8 (NIV)</cite>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Section */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Introduction: The Heart of an Evangelist</h3>
                  <Badge variant="secondary" className="bg-red-100 text-red-700">
                    <Video className="w-3 h-3 mr-1" />
                    5:30
                  </Badge>
                </div>
                
                <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                  {!videoPlaying ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-600">
                      <Button 
                        size="lg"
                        onClick={() => setVideoPlaying(true)}
                        className="bg-white/90 hover:bg-white text-gray-900"
                      >
                        <Play className="w-6 h-6 mr-2" />
                        Watch Tim's Introduction
                      </Button>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <div className="text-center text-white">
                        <PauseCircle className="w-16 h-16 mx-auto mb-4" />
                        <p>Video player would be embedded here</p>
                        <Button 
                          variant="ghost" 
                          onClick={() => setVideoPlaying(false)}
                          className="text-white hover:text-gray-300 mt-2"
                        >
                          Reset Demo
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 text-sm mt-4">
                  Tim shares his personal journey of discovering his evangelistic calling and how it transformed his ministry approach.
                </p>
              </CardContent>
            </Card>

            {/* Main Content with Interactive Elements */}
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Evangelistic DNA</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The evangelistic gift is perhaps the most misunderstood of the five APEST gifts. Many believers think evangelism is about aggressive confrontation or perfect theological arguments. In reality, true{" "}
                <button 
                  onClick={() => toggleDefinition('evangelistic-passion')}
                  className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
                >
                  evangelistic passion
                </button>{" "}
                flows from a heart that beats with God's love for the lost.
              </p>

              {showDefinition === 'evangelistic-passion' && (
                <Card className="mb-6 bg-yellow-50 border-yellow-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Evangelistic Passion</h4>
                    <p className="text-yellow-700 text-sm">
                      A deep, Spirit-driven compassion for those who don't know Christ, combined with the ability to communicate the Gospel in ways that connect with different people and cultures.
                    </p>
                  </CardContent>
                </Card>
              )}

              <p className="text-gray-700 leading-relaxed mb-6">
                Those with a strong evangelistic gifting often find themselves naturally drawn to relationships with non-believers. They don't see lost people as projects to be won, but as individuals created in God's image who deserve to hear the Good News with dignity and respect.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Characteristics of Evangelistic Leaders</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
                <Card>
                  <CardContent className="p-6">
                    <Heart className="w-8 h-8 text-red-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Compassionate Heart</h4>
                    <p className="text-gray-600 text-sm">
                      Genuine care for people's eternal destiny drives their ministry approach.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <MessageCircle className="w-8 h-8 text-blue-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Clear Communication</h4>
                    <p className="text-gray-600 text-sm">
                      Ability to explain complex spiritual truths in simple, relatable terms.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <Users className="w-8 h-8 text-green-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Relational Focus</h4>
                    <p className="text-gray-600 text-sm">
                      Natural ability to build bridges with people from all backgrounds.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <Zap className="w-8 h-8 text-yellow-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Spiritual Urgency</h4>
                    <p className="text-gray-600 text-sm">
                      Understanding that time is short and the harvest is ready.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Evangelistic leaders also serve a crucial role within the church body. They help other believers catch God's heart for the lost and provide training and encouragement for personal evangelism. They often pioneer new ministry approaches that reach previously unreached populations.
              </p>
            </div>

            {/* Interactive Quiz */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-600" />
                  Knowledge Check
                </CardTitle>
                <CardDescription>
                  Test your understanding of evangelistic passion and characteristics
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!showQuizResults ? (
                  <div className="space-y-6">
                    {quizQuestions.map((question, index) => (
                      <div key={question.id}>
                        <h4 className="font-medium text-gray-900 mb-3">
                          {index + 1}. {question.question}
                        </h4>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <Label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="radio"
                                name={question.id}
                                value={option}
                                onChange={(e) => handleQuizAnswer(question.id, e.target.value)}
                                className="text-blue-600"
                              />
                              <span className="text-gray-700">{option}</span>
                            </Label>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <Button 
                      onClick={submitQuiz}
                      disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                      className="mt-6"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submit Quiz
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quiz Complete!</h3>
                    <p className="text-gray-600 mb-4">You scored 2/2 - Excellent understanding!</p>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      <Award className="w-3 h-3 mr-1" />
                      Evangelistic Understanding Badge Earned
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Worksheet */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-600" />
                  Personal Reflection Worksheet
                </CardTitle>
                <CardDescription>
                  Apply this chapter's insights to your own ministry context
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="compassion-level" className="text-sm font-medium text-gray-700 mb-2 block">
                      1. On a scale of 1-10, how would you rate your current compassion for the lost?
                    </Label>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">1</span>
                      <Input type="range" min="1" max="10" className="flex-1" />
                      <span className="text-sm text-gray-500">10</span>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="barriers" className="text-sm font-medium text-gray-700 mb-2 block">
                      2. What barriers prevent you from sharing your faith more often?
                    </Label>
                    <Textarea 
                      id="barriers"
                      placeholder="Fear of rejection, lack of training, don't know how to start conversations..."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="action-steps" className="text-sm font-medium text-gray-700 mb-2 block">
                      3. Based on this chapter, what's one practical step you can take this week?
                    </Label>
                    <Textarea 
                      id="action-steps"
                      placeholder="Pray for specific non-believers, practice sharing my testimony, invite someone to lunch..."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF Worksheet
                    </Button>
                    <Button>
                      Save Progress
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between py-8 border-t border-gray-200">
              <Button asChild variant="outline">
                <Link href="/ebook-example/chapter/3">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous: Prophetic Discernment
                </Link>
              </Button>
              
              <Button asChild>
                <Link href="/ebook-example/chapter/5">
                  Next: Shepherding Excellence
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Ask Tim AI Assistant */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                    Ask Tim (AI)
                  </CardTitle>
                  <CardDescription>
                    Get instant answers about this chapter
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input placeholder="Ask a question about evangelism..." />
                    <Button size="sm" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Ask Question
                    </Button>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Suggested Questions:</h4>
                    <div className="space-y-1">
                      <button className="text-sm text-blue-600 hover:text-blue-800 block text-left">
                        How do I overcome fear of rejection?
                      </button>
                      <button className="text-sm text-blue-600 hover:text-blue-800 block text-left">
                        What if I don't feel evangelistic?
                      </button>
                      <button className="text-sm text-blue-600 hover:text-blue-800 block text-left">
                        How to start spiritual conversations?
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Chapter Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chapter Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Download Summary
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Evangelism Toolkit
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Video className="w-4 h-4 mr-2" />
                      Bonus Interview
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Headphones className="w-4 h-4 mr-2" />
                      Audio Version
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Tracking */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">eBook Progress</span>
                        <span className="text-sm text-gray-600">50%</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-600">3</div>
                        <div className="text-xs text-green-700">Badges Earned</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">4</div>
                        <div className="text-xs text-blue-700">Chapters Read</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recommended Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button asChild size="sm" className="w-full justify-start bg-yellow-500 hover:bg-yellow-600 text-black">
                      <Link href="/apest-quiz">
                        <Target className="w-4 h-4 mr-2" />
                        Take APEST Assessment
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full justify-start">
                      <Link href="/courses/evangelism-foundations">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Evangelism Course
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full justify-start">
                      <Link href="/coaching/individual">
                        <Users className="w-4 h-4 mr-2" />
                        Book Coaching Call
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
