"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { 
  Map,
  Navigation,
  Compass,
  Flag,
  Star,
  ArrowRight,
  ArrowLeft,
  Play,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Target,
  Award,
  TrendingUp,
  Heart,
  Eye,
  Shield,
  Brain,
  Lightbulb,
  Zap,
  Globe,
  Building,
  Settings,
  Bell,
  User,
  Search,
  Filter,
  Grid,
  List,
  Calendar,
  Download,
  Share2,
  Bookmark,
  MessageCircle,
  Video,
  Headphones,
  FileText,
  Image,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Edit,
  Lock,
  Unlock,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Archive,
  HelpCircle,
  Info,
  AlertCircle
} from "lucide-react";
import Footer from "@/components/Footer";

export default function WebsiteOptionJourney() {
  const [currentStage, setCurrentStage] = useState(2);
  const [selectedPath, setSelectedPath] = useState("foundation");
  const [viewMode, setViewMode] = useState("pathway");

  // Journey Stages
  const journeyStages = [
    {
      id: 1,
      title: "Discovery",
      subtitle: "Find Your Calling",
      description: "Discover your primary APEST gifts through comprehensive assessment and reflection",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      status: "completed",
      duration: "1-2 weeks",
      modules: 3,
      assessments: 2
    },
    {
      id: 2,
      title: "Foundation",
      subtitle: "Build Core Understanding", 
      description: "Develop foundational knowledge of APEST principles and biblical foundations",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      status: "current",
      duration: "4-6 weeks",
      modules: 8,
      assessments: 4
    },
    {
      id: 3,
      title: "Development",
      subtitle: "Grow Your Gifts",
      description: "Deepen your understanding and develop practical skills in your primary gifts",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
      status: "locked",
      duration: "8-10 weeks",
      modules: 12,
      assessments: 6
    },
    {
      id: 4,
      title: "Application",
      subtitle: "Practice & Implement",
      description: "Apply your gifts in real ministry contexts with guidance and feedback",
      icon: Zap,
      color: "from-orange-500 to-orange-600",
      status: "locked",
      duration: "6-8 weeks",
      modules: 10,
      assessments: 5
    },
    {
      id: 5,
      title: "Leadership",
      subtitle: "Lead Others",
      description: "Develop leadership skills and learn to identify and develop others' gifts",
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      status: "locked",
      duration: "10-12 weeks",
      modules: 15,
      assessments: 8
    },
    {
      id: 6,
      title: "Mastery",
      subtitle: "Transform Organizations",
      description: "Master the art of organizational transformation using APEST principles",
      icon: Building,
      color: "from-teal-500 to-teal-600",
      status: "locked",
      duration: "12-16 weeks",
      modules: 18,
      assessments: 10
    }
  ];

  // Learning Paths
  const learningPaths = [
    {
      id: "foundation",
      title: "Foundation Path",
      subtitle: "Essential APEST Principles",
      description: "Perfect for beginners wanting to understand their gifts and biblical foundations",
      duration: "12 weeks",
      difficulty: "Beginner",
      participants: 2847,
      rating: 4.9,
      stages: [1, 2],
      color: "blue"
    },
    {
      id: "accelerated",
      title: "Accelerated Path", 
      subtitle: "Fast-Track Development",
      description: "Intensive program for experienced leaders ready to advance quickly",
      duration: "8 weeks",
      difficulty: "Intermediate",
      participants: 1256,
      rating: 4.8,
      stages: [1, 2, 3],
      color: "purple"
    },
    {
      id: "leadership",
      title: "Leadership Path",
      subtitle: "Comprehensive Leadership Development",
      description: "Complete journey from discovery to organizational transformation",
      duration: "24 weeks",
      difficulty: "Advanced",
      participants: 892,
      rating: 4.9,
      stages: [1, 2, 3, 4, 5],
      color: "green"
    },
    {
      id: "mastery",
      title: "Mastery Path",
      subtitle: "Expert-Level Certification",
      description: "Ultimate program for those seeking expertise and certification",
      duration: "36 weeks", 
      difficulty: "Expert",
      participants: 234,
      rating: 5.0,
      stages: [1, 2, 3, 4, 5, 6],
      color: "orange"
    }
  ];

  // Current Stage Modules
  const currentStageModules = [
    {
      id: 1,
      title: "Biblical Foundations of APEST",
      description: "Explore the scriptural basis for the five-fold ministry gifts",
      type: "video",
      duration: "45 min",
      status: "completed",
      progress: 100,
      lessons: 6
    },
    {
      id: 2,
      title: "Understanding Your Primary Gift",
      description: "Deep dive into the characteristics and calling of your dominant gift",
      type: "interactive",
      duration: "60 min",
      status: "current",
      progress: 67,
      lessons: 8
    },
    {
      id: 3,
      title: "Secondary Gifts and Combinations",
      description: "Learn how your secondary gifts complement your primary calling",
      type: "workshop",
      duration: "90 min",
      status: "locked",
      progress: 0,
      lessons: 10
    },
    {
      id: 4,
      title: "APEST in Team Dynamics",
      description: "Understand how different gifts work together in ministry teams",
      type: "case-study",
      duration: "75 min",
      status: "locked",
      progress: 0,
      lessons: 7
    },
    {
      id: 5,
      title: "Practical Gift Development",
      description: "Exercises and practices to strengthen your natural gifting",
      type: "practical",
      duration: "120 min",
      status: "locked",
      progress: 0,
      lessons: 12
    },
    {
      id: 6,
      title: "Overcoming Gift Limitations",
      description: "Address common challenges and shadows of your gift",
      type: "reflection",
      duration: "45 min",
      status: "locked",
      progress: 0,
      lessons: 5
    },
    {
      id: 7,
      title: "Ministry Context Application",
      description: "Apply your gifts effectively in various ministry contexts",
      type: "application",
      duration: "90 min",
      status: "locked",
      progress: 0,
      lessons: 9
    },
    {
      id: 8,
      title: "Foundation Assessment",
      description: "Comprehensive evaluation of foundational knowledge and application",
      type: "assessment",
      duration: "60 min",
      status: "locked",
      progress: 0,
      lessons: 1
    }
  ];

  const milestones = [
    {
      id: 1,
      title: "APEST Assessment Completed",
      description: "Discovered your primary and secondary gifts",
      date: "July 15, 2025",
      status: "completed",
      badge: "Gift Discovery"
    },
    {
      id: 2,
      title: "Biblical Foundations Mastered",
      description: "Demonstrated understanding of scriptural basis for APEST",
      date: "July 28, 2025",
      status: "completed", 
      badge: "Biblical Scholar"
    },
    {
      id: 3,
      title: "Foundation Stage Certification",
      description: "Complete all foundation modules with 85%+ scores",
      date: "August 25, 2025",
      status: "in-progress",
      badge: "Foundation Expert"
    },
    {
      id: 4,
      title: "Practical Application Demonstrated",
      description: "Successfully apply gifts in ministry context",
      date: "September 15, 2025",
      status: "upcoming",
      badge: "Applied Practitioner"
    }
  ];

  const studyPartners = [
    {
      id: 1,
      name: "David Chen",
      role: "Youth Pastor",
      primaryGift: "Evangelistic",
      progress: 78,
      lastActive: "2 hours ago",
      studyStreak: 15
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Worship Leader", 
      primaryGift: "Prophetic",
      progress: 82,
      lastActive: "1 day ago",
      studyStreak: 23
    },
    {
      id: 3,
      name: "John Miller",
      role: "Senior Pastor",
      primaryGift: "Shepherding",
      progress: 91,
      lastActive: "3 hours ago",
      studyStreak: 31
    }
  ];

  const getStageIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'current': return <Play className="w-6 h-6 text-blue-600" />;
      case 'locked': return <Lock className="w-6 h-6 text-gray-400" />;
      default: return <Clock className="w-6 h-6 text-gray-400" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'interactive': return <Target className="w-4 h-4" />;
      case 'workshop': return <Users className="w-4 h-4" />;
      case 'case-study': return <FileText className="w-4 h-4" />;
      case 'practical': return <Zap className="w-4 h-4" />;
      case 'reflection': return <Brain className="w-4 h-4" />;
      case 'application': return <Building className="w-4 h-4" />;
      case 'assessment': return <Award className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getPathColor = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      case 'green': return 'from-green-500 to-green-600';
      case 'orange': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Map className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">APEST Journey</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">My Journey</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Pathways</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Progress</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Community</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Journey Progress Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Learning Journey</h1>
              <p className="text-gray-600">Foundation Path • Stage 2 of 6 • 67% Complete</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">67%</div>
              <div className="text-sm text-gray-600">Overall Progress</div>
            </div>
          </div>
          
          <Progress value={67} className="h-3 mb-4" />
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Started July 10, 2025</span>
            <span>Expected completion: September 25, 2025</span>
          </div>
        </div>
      </section>

      {/* Learning Paths Selection */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-gray-600">Different journey options designed for your experience level and goals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {learningPaths.map((path) => (
              <Card 
                key={path.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedPath === path.id ? 'ring-2 ring-blue-500 shadow-md' : ''
                }`}
                onClick={() => setSelectedPath(path.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${getPathColor(path.color)}`} />
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-gray-900 mb-1">{path.title}</h3>
                    <p className="text-blue-600 text-sm font-medium">{path.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{path.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">{path.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Difficulty</span>
                      <Badge variant="outline" className="text-xs">{path.difficulty}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Learners</span>
                      <span className="font-medium">{path.participants.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-sm">{path.rating}</span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className={`w-full ${selectedPath === path.id ? 'bg-blue-600' : ''}`}
                    variant={selectedPath === path.id ? 'default' : 'outline'}
                  >
                    {selectedPath === path.id ? 'Selected' : 'Select Path'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Stages Map */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Journey Map</h2>
            <p className="text-xl text-gray-600">Six progressive stages designed to transform your ministry</p>
          </div>

          {/* Desktop Journey Map */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Journey Path Line */}
              <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-purple-300 via-green-300 via-orange-300 via-indigo-300 to-teal-300" />
              
              <div className="grid grid-cols-6 gap-4">
                {journeyStages.map((stage, index) => (
                  <div key={stage.id} className="relative">
                    {/* Stage Node */}
                    <div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full border-4 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        stage.status === 'completed' ? 'bg-green-100 border-green-500' :
                        stage.status === 'current' ? 'bg-blue-100 border-blue-500 animate-pulse' :
                        'bg-gray-100 border-gray-300'
                      }`}
                      onClick={() => setCurrentStage(stage.id)}
                    >
                      {getStageIcon(stage.status)}
                    </div>
                    
                    {/* Stage Info Card */}
                    <Card className={`hover:shadow-lg transition-shadow cursor-pointer ${
                      currentStage === stage.id ? 'ring-2 ring-blue-500' : ''
                    }`}>
                      <CardContent className="p-4 text-center">
                        <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r ${stage.color} flex items-center justify-center`}>
                          <stage.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">{stage.title}</h3>
                        <p className="text-blue-600 text-xs font-medium mb-2">{stage.subtitle}</p>
                        <p className="text-gray-600 text-xs leading-relaxed mb-3">{stage.description}</p>
                        
                        <div className="space-y-1 text-xs text-gray-500">
                          <div>{stage.duration}</div>
                          <div>{stage.modules} modules</div>
                          <div>{stage.assessments} assessments</div>
                        </div>
                        
                        <Button 
                          size="sm" 
                          className="w-full mt-3"
                          disabled={stage.status === 'locked'}
                          variant={currentStage === stage.id ? 'default' : 'outline'}
                        >
                          {stage.status === 'completed' ? 'Review' :
                           stage.status === 'current' ? 'Continue' :
                           stage.status === 'locked' ? 'Locked' : 'Start'}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Journey Map */}
          <div className="lg:hidden space-y-4">
            {journeyStages.map((stage, index) => (
              <Card 
                key={stage.id}
                className={`transition-all duration-300 ${
                  currentStage === stage.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center flex-shrink-0 ${
                      stage.status === 'completed' ? 'bg-green-100 border-green-500' :
                      stage.status === 'current' ? 'bg-blue-100 border-blue-500' :
                      'bg-gray-100 border-gray-300'
                    }`}>
                      {getStageIcon(stage.status)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold text-gray-900">{stage.title}</h3>
                        <Badge variant="outline" className="text-xs">{stage.status}</Badge>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{stage.subtitle}</p>
                      <p className="text-gray-600 text-sm mb-3">{stage.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{stage.duration}</span>
                        <span>{stage.modules} modules</span>
                        <span>{stage.assessments} assessments</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm"
                      disabled={stage.status === 'locked'}
                      onClick={() => setCurrentStage(stage.id)}
                    >
                      {stage.status === 'completed' ? 'Review' :
                       stage.status === 'current' ? 'Continue' :
                       stage.status === 'locked' ? 'Locked' : 'Start'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Stage Detail */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                        Foundation Stage Modules
                      </CardTitle>
                      <CardDescription>
                        Build your understanding of APEST principles and discover your calling
                      </CardDescription>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">
                      Stage 2 of 6
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentStageModules.map((module, index) => (
                      <Card 
                        key={module.id}
                        className={`transition-shadow hover:shadow-md ${
                          module.status === 'current' ? 'ring-1 ring-blue-300' : ''
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start space-x-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                module.status === 'completed' ? 'bg-green-100 text-green-600' :
                                module.status === 'current' ? 'bg-blue-100 text-blue-600' :
                                'bg-gray-100 text-gray-400'
                              }`}>
                                {getTypeIcon(module.type)}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-1">{module.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <Badge variant="outline" className="mb-2 text-xs">
                                {module.type}
                              </Badge>
                              <div className="text-sm text-gray-600">
                                {module.duration} • {module.lessons} lessons
                              </div>
                            </div>
                          </div>
                          
                          {module.progress > 0 && (
                            <div className="mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-600">Progress</span>
                                <span className="text-sm font-medium">{module.progress}%</span>
                              </div>
                              <Progress value={module.progress} />
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {module.status === 'completed' && (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              )}
                              <span className={`text-sm font-medium ${
                                module.status === 'completed' ? 'text-green-600' :
                                module.status === 'current' ? 'text-blue-600' :
                                'text-gray-400'
                              }`}>
                                {module.status === 'completed' ? 'Completed' :
                                 module.status === 'current' ? 'In Progress' :
                                 'Locked'}
                              </span>
                            </div>
                            
                            <Button 
                              size="sm"
                              disabled={module.status === 'locked'}
                              variant={module.status === 'current' ? 'default' : 'outline'}
                            >
                              {module.status === 'completed' ? 'Review' :
                               module.status === 'current' ? 'Continue' :
                               'Start'}
                              {module.status !== 'locked' && <ArrowRight className="w-4 h-4 ml-2" />}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                    Progress Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Current Stage</span>
                        <span className="text-lg font-bold text-blue-600">67%</span>
                      </div>
                      <Progress value={67} className="mb-1" />
                      <div className="text-xs text-gray-600">2 of 8 modules completed</div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Overall Journey</span>
                        <span className="text-lg font-bold text-purple-600">33%</span>
                      </div>
                      <Progress value={33} className="mb-1" />
                      <div className="text-xs text-gray-600">Stage 2 of 6</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">28</div>
                        <div className="text-xs text-gray-600">Days Active</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">47h</div>
                        <div className="text-xs text-gray-600">Study Time</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Milestones */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Flag className="w-5 h-5 mr-2 text-orange-600" />
                    Milestones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {milestones.map((milestone) => (
                      <div key={milestone.id} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          milestone.status === 'completed' ? 'bg-green-100 text-green-600' :
                          milestone.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                          'bg-gray-100 text-gray-400'
                        }`}>
                          {milestone.status === 'completed' ? '✓' :
                           milestone.status === 'in-progress' ? '•' : '○'}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{milestone.title}</h4>
                          <p className="text-gray-600 text-xs mb-1">{milestone.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{milestone.date}</span>
                            {milestone.badge && (
                              <Badge variant="outline" className="text-xs">
                                {milestone.badge}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Study Partners */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    Study Partners
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {studyPartners.map((partner) => (
                      <div key={partner.id} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-xs">
                            {partner.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{partner.name}</h4>
                          <p className="text-gray-600 text-xs">{partner.role} • {partner.primaryGift}</p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{partner.progress}% complete</span>
                            <span>•</span>
                            <span>{partner.studyStreak} day streak</span>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <Plus className="w-4 h-4 mr-2" />
                    Find Study Partner
                  </Button>
                </CardContent>
              </Card>

              {/* Next Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
                    Recommended Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900 text-sm">Continue Current Module</h4>
                      <p className="text-blue-700 text-xs">Complete "Understanding Your Primary Gift"</p>
                      <Button size="sm" className="mt-2 h-6">
                        Continue Learning
                      </Button>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-900 text-sm">Schedule Study Time</h4>
                      <p className="text-green-700 text-xs">Block calendar for focused learning</p>
                      <Button size="sm" variant="outline" className="mt-2 h-6">
                        Schedule
                      </Button>
                    </div>
                    
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-medium text-purple-900 text-sm">Join Study Group</h4>
                      <p className="text-purple-700 text-xs">Connect with others in Foundation stage</p>
                      <Button size="sm" variant="outline" className="mt-2 h-6">
                        Join Group
                      </Button>
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
