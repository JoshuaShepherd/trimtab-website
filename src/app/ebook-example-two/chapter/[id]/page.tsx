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
import { useState, useEffect } from "react";
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
  Target,
  Lightbulb,
  Heart,
  Zap,
  Award,
  Brain,
  Shield,
  Eye,
  Send,
  Building,
  HelpCircle,
  Bookmark,
  Share2,
  PauseCircle,
  Settings,
  Maximize,
  RotateCcw,
  Save,
  Upload,
  Calendar,
  Bell,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Globe,
  Mic,
  Camera,
  Edit,
  Trash2,
  Plus,
  Minus
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ChapterExampleTwo() {
  const [activeTab, setActiveTab] = useState("content");
  const [showDefinition, setShowDefinition] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [notesExpanded, setNotesExpanded] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [savedNotes, setSavedNotes] = useState<Array<{id: string, content: string, timestamp: string, section: string}>>([]);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'ai', message: string, timestamp: string}>>([]);
  const [readingProgress, setReadingProgress] = useState(45);
  const [timeSpent, setTimeSpent] = useState(18);

  const chapterData = {
    id: 4,
    title: "Evangelistic Fire",
    subtitle: "Igniting Passion for the Lost",
    duration: "32 min",
    type: "video",
    scriptureRef: "Acts 8:4",
    badge: "Soul Winner",
    objectives: [
      "Understand the biblical foundation of evangelistic calling",
      "Identify personal barriers to sharing faith",
      "Develop practical evangelism strategies",
      "Create a personal action plan for outreach"
    ]
  };

  const interactiveElements = [
    {
      id: "barrier-assessment",
      title: "Personal Barrier Assessment",
      description: "Identify what holds you back from sharing your faith",
      type: "interactive",
      completed: false
    },
    {
      id: "evangelism-styles",
      title: "Evangelism Styles Inventory",
      description: "Discover your natural approach to sharing the Gospel",
      type: "assessment",
      completed: false
    },
    {
      id: "outreach-planning",
      title: "30-Day Outreach Challenge",
      description: "Create your personalized evangelism action plan",
      type: "planning",
      completed: false
    }
  ];

  const quizQuestions = [
    {
      id: 'q1',
      question: 'According to Acts 8:4, what did the scattered believers do?',
      options: [
        'They built churches in their new locations',
        'They preached the word wherever they went',
        'They organized formal evangelistic campaigns',
        'They waited for apostolic permission to minister'
      ],
      correct: 'They preached the word wherever they went',
      explanation: 'The scattered believers naturally shared the Gospel as they went about their daily lives, demonstrating that evangelism is meant to be a natural overflow of faith.'
    },
    {
      id: 'q2', 
      question: 'What is the primary motivation for evangelistic ministry?',
      options: [
        'Church growth and numerical success',
        'Personal recognition and ministry advancement',
        'Love for God and compassion for the lost',
        'Fulfilling the Great Commission as duty'
      ],
      correct: 'Love for God and compassion for the lost',
      explanation: 'True evangelistic fire comes from a heart that beats with God\'s love for people and genuine compassion for those without Christ.'
    },
    {
      id: 'q3',
      question: 'Which approach best characterizes effective personal evangelism?',
      options: [
        'Aggressive confrontation with strangers',
        'Perfect theological arguments and debates',
        'Authentic relationships and lifestyle witness',
        'Only formal preaching in church settings'
      ],
      correct: 'Authentic relationships and lifestyle witness',
      explanation: 'The most effective evangelism happens through genuine relationships where our lives demonstrate the reality of Christ\'s transforming power.'
    }
  ];

  const practicalExercises = [
    {
      title: "Faith Story Development",
      description: "Craft your personal testimony in 3 minutes or less",
      timeEstimate: "15 minutes",
      difficulty: "Beginner",
      materials: ["Worksheet template", "Audio recording option"]
    },
    {
      title: "Bridge-Building Conversations",
      description: "Practice natural ways to transition to spiritual topics",
      timeEstimate: "20 minutes",
      difficulty: "Intermediate", 
      materials: ["Conversation starters", "Role-play scenarios"]
    },
    {
      title: "Objection Response Training",
      description: "Learn to address common questions and concerns",
      timeEstimate: "25 minutes",
      difficulty: "Advanced",
      materials: ["Common objections list", "Biblical responses guide"]
    }
  ];

  const communityInsights = [
    {
      author: "Pastor David Kim",
      role: "Church Planter",
      insight: "The key breakthrough for me was realizing evangelism isn't about winning arguments—it's about winning hearts through authentic love.",
      likes: 24,
      replies: 8,
      timeAgo: "2 hours ago"
    },
    {
      author: "Maria Santos",
      role: "Youth Director",
      insight: "Starting with prayer for specific people by name transformed my evangelistic efforts. Now I see opportunities everywhere!",
      likes: 31,
      replies: 12,
      timeAgo: "1 day ago"
    }
  ];

  useEffect(() => {
    // Simulate progress tracking
    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
      if (readingProgress < 100) {
        setReadingProgress(prev => Math.min(prev + 1, 100));
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [readingProgress]);

  const toggleDefinition = (term: string) => {
    setShowDefinition(showDefinition === term ? null : term);
  };

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const submitQuiz = () => {
    setShowQuizResults(true);
  };

  const saveNote = () => {
    if (currentNote.trim()) {
      const newNote = {
        id: Date.now().toString(),
        content: currentNote,
        timestamp: new Date().toLocaleString(),
        section: "Evangelistic Fire"
      };
      setSavedNotes(prev => [newNote, ...prev]);
      setCurrentNote("");
    }
  };

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      const userMessage = {
        type: 'user' as const,
        message: chatMessage,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setChatHistory(prev => [...prev, userMessage]);
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          type: 'ai' as const,
          message: "That's a great question about evangelistic ministry! Based on this chapter's content, remember that effective evangelism flows from authentic relationships and genuine love for people. Would you like me to point you to specific resources that address this further?",
          timestamp: new Date().toLocaleTimeString()
        };
        setChatHistory(prev => [...prev, aiResponse]);
      }, 1000);
      
      setChatMessage("");
    }
  };

  const correctAnswers = quizQuestions.filter(q => quizAnswers[q.id] === q.correct).length;
  const quizScore = Math.round((correctAnswers / quizQuestions.length) * 100);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm">
                <Link href="/ebook-example-two">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Roadmap
                </Link>
              </Button>
              <div className="text-sm text-gray-600">
                Chapter {chapterData.id} of 12 • {chapterData.type.charAt(0).toUpperCase() + chapterData.type.slice(1)}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{timeSpent} min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{readingProgress}%</span>
                </div>
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

              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Chapter Progress</span>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{readingProgress}% complete</span>
                <Badge variant="outline" className="text-xs">
                  {Math.round(((chapterData.id - 1) / 12) * 100)}% course complete
                </Badge>
              </div>
            </div>
            <Progress value={readingProgress} className="h-2" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Chapter Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-700">
                      <Heart className="w-3 h-3 mr-1" />
                      Evangelistic
                    </Badge>
                    <Badge variant="outline">{chapterData.duration} content</Badge>
                    <Badge variant="outline">{chapterData.scriptureRef}</Badge>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {chapterData.title}
                  </h1>
                  <p className="text-xl text-gray-600">{chapterData.subtitle}</p>
                </div>
              </div>

              {/* Learning Objectives */}
              <Card className="mb-6 bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Learning Objectives
                  </h3>
                  <ul className="space-y-2">
                    {chapterData.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2 text-blue-800">
                        <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
                        <span className="text-sm">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Tabbed Content */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="interactive">Interactive</TabsTrigger>
                <TabsTrigger value="assessment">Assessment</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-8">
                {/* Scripture Foundation */}
                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-3">Scripture Foundation</h3>
                        <blockquote className="text-lg text-blue-800 italic mb-3 leading-relaxed">
                          "Those who had been scattered preached the word wherever they went. Philip went down to a city in Samaria and proclaimed the Messiah there."
                        </blockquote>
                        <cite className="text-blue-600 font-medium">Acts 8:4-5 (NIV)</cite>
                        <p className="text-blue-700 mt-3 text-sm">
                          This passage reveals the natural overflow of evangelistic fire - when believers are filled with passion for Christ, sharing the Gospel becomes as natural as breathing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Video Content */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Introduction: The Heart of an Evangelist</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          <Video className="w-3 h-3 mr-1" />
                          8:30
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video mb-4">
                      {!videoPlaying ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Button 
                              size="lg"
                              onClick={() => setVideoPlaying(true)}
                              className="bg-white/90 hover:bg-white text-gray-900 mb-4"
                            >
                              <Play className="w-8 h-8 mr-3" />
                              Watch Tim's Teaching
                            </Button>
                            <p className="text-sm opacity-90">HD video with interactive transcripts</p>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                          <div className="text-center text-white">
                            <PauseCircle className="w-16 h-16 mx-auto mb-4" />
                            <p className="mb-4">Video player interface would be here</p>
                            <div className="flex items-center justify-center space-x-4">
                              <Button 
                                variant="ghost" 
                                onClick={() => setVideoPlaying(false)}
                                className="text-white hover:text-gray-300"
                              >
                                Reset Demo
                              </Button>
                              <Button variant="ghost" className="text-white hover:text-gray-300">
                                <Settings className="w-4 h-4 mr-2" />
                                Settings
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Tim shares his personal journey of discovering evangelistic passion</span>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <Volume2 className="w-4 h-4 mr-1" />
                          Audio Only
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="w-4 h-4 mr-1" />
                          Transcript
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Rich Content with Interactive Elements */}
                <div className="prose prose-lg max-w-none space-y-6">
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Evangelistic DNA</h2>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        The evangelistic gift is perhaps the most misunderstood of the five APEST gifts. Many believers think evangelism is about aggressive confrontation or having all the right answers. In reality, true{" "}
                        <button 
                          onClick={() => toggleDefinition('evangelistic-fire')}
                          className="text-red-600 underline hover:text-red-800 cursor-pointer font-medium"
                        >
                          evangelistic fire
                        </button>{" "}
                        flows from a heart that beats with God's love for the lost.
                      </p>

                      {showDefinition === 'evangelistic-fire' && (
                        <Card className="mb-6 bg-yellow-50 border-yellow-200">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                              <Lightbulb className="w-4 h-4 mr-2" />
                              Evangelistic Fire
                            </h4>
                            <p className="text-yellow-700 text-sm mb-3">
                              A passionate, Spirit-driven love for people who don't know Christ, combined with the supernatural ability to communicate the Gospel in ways that pierce hearts and minds across cultural boundaries.
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-yellow-600">
                              <BookOpen className="w-3 h-3" />
                              <span>See also: Acts 4:20, 2 Corinthians 5:14-15</span>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      <p className="text-gray-700 leading-relaxed mb-6">
                        Those with strong evangelistic gifting often find themselves naturally drawn to relationships with non-believers. They don't see lost people as projects to be won, but as precious individuals created in God's image who deserve to hear the Good News with dignity, respect, and authentic love.
                      </p>

                      <h3 className="text-xl font-bold text-gray-900 mb-6">The Three Pillars of Evangelistic Excellence</h3>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-6 text-center">
                            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 mb-3">Compassionate Heart</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Genuine care for people's eternal destiny drives every conversation and relationship. This isn't manufactured emotion but Spirit-given love.
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-6 text-center">
                            <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 mb-3">Clear Communication</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              The ability to explain complex spiritual truths in simple, relatable terms that connect with people's real-life experiences and questions.
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-6 text-center">
                            <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h4 className="font-semibold text-gray-900 mb-3">Relational Authenticity</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Natural ability to build genuine friendships across cultural, social, and ideological boundaries without compromising biblical truth.
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6">
                        Evangelistic leaders also serve a crucial role within the church body. They help other believers catch God's heart for the lost, provide training and encouragement for personal evangelism, and often pioneer new ministry approaches that reach previously unreached populations.
                      </p>

                      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-l-4 border-red-500">
                        <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                          <Zap className="w-5 h-5 mr-2" />
                          Key Insight: The Multiplication Effect
                        </h4>
                        <p className="text-red-800 text-sm leading-relaxed">
                          One person with evangelistic fire can ignite an entire congregation. When churches embrace and deploy their evangelistic leaders effectively, the result is exponential kingdom growth that extends far beyond the local community.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="interactive" className="space-y-8">
                <div className="grid gap-6">
                  {interactiveElements.map((element, index) => (
                    <Card key={element.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{element.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{element.description}</p>
                            <div className="flex items-center space-x-3">
                              <Badge variant="outline" className="text-xs">
                                {element.type}
                              </Badge>
                              <span className="text-xs text-gray-500">
                                {element.completed ? 'Completed' : 'Not started'}
                              </span>
                            </div>
                          </div>
                          <Button 
                            variant={element.completed ? "outline" : "default"}
                            size="sm"
                            className={element.completed ? "text-green-600 border-green-600" : ""}
                          >
                            {element.completed ? (
                              <>
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Review
                              </>
                            ) : (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Start
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Sample Interactive Exercise */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-5 h-5 mr-2 text-purple-600" />
                      Interactive Exercise: Evangelism Readiness Assessment
                    </CardTitle>
                    <CardDescription>
                      Drag and drop the barriers that most apply to your evangelism journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-4">Common Barriers</h4>
                        <div className="space-y-2">
                          {[
                            "Fear of rejection",
                            "Lack of biblical knowledge", 
                            "No natural opportunities",
                            "Don't know how to start",
                            "Afraid of difficult questions",
                            "Past negative experiences"
                          ].map((barrier, index) => (
                            <div 
                              key={index}
                              className="p-3 bg-gray-100 rounded-lg cursor-move hover:bg-gray-200 transition-colors text-sm"
                            >
                              {barrier}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-4">My Top 3 Barriers</h4>
                        <div className="space-y-2">
                          {[1, 2, 3].map((num) => (
                            <div 
                              key={num}
                              className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500 text-sm"
                            >
                              Drop barrier #{num} here
                            </div>
                          ))}
                        </div>
                        <Button className="w-full mt-4">
                          <Save className="w-4 h-4 mr-2" />
                          Save Assessment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assessment" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2 text-blue-600" />
                      Chapter Knowledge Assessment
                    </CardTitle>
                    <CardDescription>
                      Test your understanding of evangelistic ministry principles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!showQuizResults ? (
                      <div className="space-y-8">
                        {quizQuestions.map((question, index) => (
                          <div key={question.id} className="space-y-4">
                            <h4 className="font-medium text-gray-900 text-lg">
                              {index + 1}. {question.question}
                            </h4>
                            <div className="space-y-3">
                              {question.options.map((option, optionIndex) => (
                                <Label key={optionIndex} className="flex items-start space-x-3 cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition-colors border">
                                  <input
                                    type="radio"
                                    name={question.id}
                                    value={option}
                                    onChange={(e) => handleQuizAnswer(question.id, e.target.value)}
                                    className="text-blue-600 mt-1"
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
                          className="w-full"
                          size="lg"
                        >
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Submit Assessment
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="mb-6">
                          <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
                            quizScore >= 80 ? 'bg-green-100' : quizScore >= 60 ? 'bg-yellow-100' : 'bg-red-100'
                          }`}>
                            <span className={`text-3xl font-bold ${
                              quizScore >= 80 ? 'text-green-600' : quizScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {quizScore}%
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment Complete!</h3>
                          <p className="text-gray-600 mb-4">
                            You scored {correctAnswers} out of {quizQuestions.length} questions correctly
                          </p>
                        </div>

                        {/* Detailed Feedback */}
                        <div className="space-y-4 text-left">
                          {quizQuestions.map((question, index) => (
                            <div key={question.id} className="border rounded-lg p-4">
                              <div className="flex items-start space-x-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm ${
                                  quizAnswers[question.id] === question.correct ? 'bg-green-500' : 'bg-red-500'
                                }`}>
                                  {quizAnswers[question.id] === question.correct ? '✓' : '✗'}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-900 mb-2">{question.question}</h4>
                                  <p className="text-sm text-gray-600 mb-2">
                                    <strong>Your answer:</strong> {quizAnswers[question.id]}
                                  </p>
                                  {quizAnswers[question.id] !== question.correct && (
                                    <p className="text-sm text-green-600 mb-2">
                                      <strong>Correct answer:</strong> {question.correct}
                                    </p>
                                  )}
                                  <p className="text-sm text-gray-700">{question.explanation}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {quizScore >= 80 && (
                          <div className="mt-8">
                            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                              <Award className="w-5 h-5 mr-2" />
                              "Soul Winner" Badge Earned!
                            </Badge>
                          </div>
                        )}

                        <div className="flex space-x-4 mt-8">
                          <Button variant="outline" onClick={() => setShowQuizResults(false)}>
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Retake Assessment
                          </Button>
                          <Button>
                            Continue to Next Chapter
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="practice" className="space-y-8">
                <div className="grid gap-6">
                  {practicalExercises.map((exercise, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{exercise.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{exercise.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{exercise.timeEstimate}</span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {exercise.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <Button size="sm">
                            <Play className="w-4 h-4 mr-2" />
                            Start Exercise
                          </Button>
                        </div>
                        
                        <div className="border-t pt-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Materials Included:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exercise.materials.map((material, materialIndex) => (
                              <Badge key={materialIndex} variant="secondary" className="text-xs">
                                {material}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Action Planning Worksheet */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-green-600" />
                      Personal Action Plan
                    </CardTitle>
                    <CardDescription>
                      Create your 30-day evangelism growth plan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="evangelism-goal" className="text-sm font-medium text-gray-700 mb-2 block">
                          1. What's your primary evangelism goal for the next 30 days?
                        </Label>
                        <Textarea 
                          id="evangelism-goal"
                          placeholder="e.g., Pray for 3 specific non-believing friends by name daily..."
                          className="min-h-[80px]"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="specific-people" className="text-sm font-medium text-gray-700 mb-2 block">
                          2. List 3 specific people you want to reach:
                        </Label>
                        <div className="space-y-2">
                          {[1, 2, 3].map((num) => (
                            <Input 
                              key={num}
                              placeholder={`Person ${num} (name and relationship)`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="action-steps" className="text-sm font-medium text-gray-700 mb-2 block">
                          3. What specific actions will you take this week?
                        </Label>
                        <Textarea 
                          id="action-steps"
                          placeholder="e.g., Invite John to coffee, share my testimony with Sarah, serve my neighbors..."
                          className="min-h-[100px]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF Template
                        </Button>
                        <Button>
                          <Save className="w-4 h-4 mr-2" />
                          Save Action Plan
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="community" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-purple-600" />
                      Community Insights & Discussion
                    </CardTitle>
                    <CardDescription>
                      Learn from other leaders' evangelism experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {communityInsights.map((insight, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 font-semibold text-sm">
                                {insight.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-medium text-gray-900">{insight.author}</span>
                                <span className="text-gray-500 text-sm">•</span>
                                <span className="text-gray-500 text-sm">{insight.role}</span>
                                <span className="text-gray-400 text-sm">•</span>
                                <span className="text-gray-400 text-sm">{insight.timeAgo}</span>
                              </div>
                              <p className="text-gray-700 mb-3">{insight.insight}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <button className="flex items-center space-x-1 hover:text-gray-700">
                                  <Heart className="w-4 h-4" />
                                  <span>{insight.likes}</span>
                                </button>
                                <button className="flex items-center space-x-1 hover:text-gray-700">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>{insight.replies} replies</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="border-t pt-6">
                        <h4 className="font-medium text-gray-900 mb-3">Share Your Insight</h4>
                        <Textarea 
                          placeholder="What's been your biggest breakthrough or challenge in evangelistic ministry?"
                          className="mb-3"
                        />
                        <Button>
                          <Send className="w-4 h-4 mr-2" />
                          Share with Community
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Community Events */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      Upcoming Community Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Evangelism Q&A with Tim</h4>
                          <p className="text-gray-600 text-sm">Live session addressing common evangelism challenges</p>
                          <p className="text-gray-500 text-xs">Thursday, 2:00 PM CST</p>
                        </div>
                        <Button size="sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          Join
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Monthly Co-Lab: Evangelistic Tools</h4>
                          <p className="text-gray-600 text-sm">Practical training and resource sharing</p>
                          <p className="text-gray-500 text-xs">Next Friday, 1:00 PM CST</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Bell className="w-4 h-4 mr-2" />
                          Remind Me
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Chapter Navigation */}
            <div className="flex items-center justify-between py-8 border-t border-gray-200">
              <Button asChild variant="outline" size="lg">
                <Link href="/ebook-example-two/chapter/3">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Previous: Prophetic Discernment
                </Link>
              </Button>
              
              <div className="text-center">
                <Badge variant="outline" className="mb-2">
                  Chapter {chapterData.id} of 12
                </Badge>
                <p className="text-sm text-gray-600">33% course complete</p>
              </div>
              
              <Button asChild size="lg">
                <Link href="/ebook-example-two/chapter/5">
                  Next: Shepherding Excellence
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Personal Notes */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-green-600" />
                      My Notes
                    </CardTitle>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setNotesExpanded(!notesExpanded)}
                    >
                      {notesExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Textarea 
                      value={currentNote}
                      onChange={(e) => setCurrentNote(e.target.value)}
                      placeholder="Add a note about this section..."
                      className="min-h-[80px] text-sm"
                    />
                    <Button size="sm" onClick={saveNote} disabled={!currentNote.trim()}>
                      <Save className="w-4 h-4 mr-2" />
                      Save Note
                    </Button>

                    {notesExpanded && savedNotes.length > 0 && (
                      <div className="border-t pt-3 space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Saved Notes</h4>
                        {savedNotes.slice(0, 3).map((note) => (
                          <div key={note.id} className="text-xs bg-gray-50 p-2 rounded">
                            <p className="text-gray-700 mb-1">{note.content}</p>
                            <p className="text-gray-500">{note.timestamp}</p>
                          </div>
                        ))}
                        {savedNotes.length > 3 && (
                          <Button variant="ghost" size="sm" className="text-xs">
                            View all {savedNotes.length} notes
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* AI Assistant */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                      Ask Tim (AI)
                    </CardTitle>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setAiChatOpen(!aiChatOpen)}
                    >
                      {aiChatOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                  </div>
                  <CardDescription>
                    Get instant answers about evangelistic ministry
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {aiChatOpen && (
                      <div className="space-y-3">
                        {chatHistory.length > 0 && (
                          <div className="max-h-32 overflow-y-auto space-y-2 border rounded p-2">
                            {chatHistory.map((chat, index) => (
                              <div key={index} className={`text-xs ${
                                chat.type === 'user' ? 'text-right' : 'text-left'
                              }`}>
                                <div className={`inline-block p-2 rounded ${
                                  chat.type === 'user' 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {chat.message}
                                </div>
                                <div className="text-gray-400 text-xs mt-1">{chat.timestamp}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex space-x-2">
                          <Input 
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                            placeholder="Ask about evangelism..."
                            className="text-sm"
                            onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                          />
                          <Button size="sm" onClick={sendChatMessage}>
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-gray-700">Quick Questions:</h4>
                      <button className="text-sm text-blue-600 hover:text-blue-800 block text-left">
                        How do I overcome fear of rejection?
                      </button>
                      <button className="text-sm text-blue-600 hover:text-blue-800 block text-left">
                        What if I don't feel evangelistic?
                      </button>
                      <button className="text-sm text-blue-600 hover:text-blue-800 block text-left">
                        Best conversation starters?
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
                      Chapter Summary PDF
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Evangelism Toolkit
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Video className="w-4 h-4 mr-2" />
                      Bonus: Tim's Testimony
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Headphones className="w-4 h-4 mr-2" />
                      Audio-Only Version
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Discussion Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Tracking */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Chapter Progress</span>
                        <span className="text-sm text-gray-600">{readingProgress}%</span>
                      </div>
                      <Progress value={readingProgress} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Course Progress</span>
                        <span className="text-sm text-gray-600">33%</span>
                      </div>
                      <Progress value={33} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-600">3</div>
                        <div className="text-xs text-green-700">Badges Earned</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">{timeSpent}m</div>
                        <div className="text-xs text-blue-700">Time Spent</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button asChild size="sm" className="w-full justify-start bg-yellow-500 hover:bg-yellow-600 text-black">
                      <Link href="/apest-quiz-example-two">
                        <Target className="w-4 h-4 mr-2" />
                        Retake APEST Assessment
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full justify-start">
                      <Link href="/courses/evangelism-advanced">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Advanced Evangelism
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
