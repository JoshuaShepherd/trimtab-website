import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  TrendingUp,
  Calendar,
  Gift,
  Bookmark,
  Share2,
  Search,
  Filter,
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin
} from "lucide-react";
import Footer from "@/components/Footer";

export default function EBookExampleTwo() {
  const userProgress = {
    currentChapter: 4,
    totalChapters: 12,
    overallProgress: 33,
    timeSpent: "4.5 hours",
    badgesEarned: 3,
    nextMilestone: "Chapter 6 Assessment"
  };

  const chapters = [
    {
      id: 1,
      title: "The Foundation of APEST",
      subtitle: "Understanding God's Design for Ministry",
      duration: "25 min",
      type: "video",
      status: "completed",
      locked: false,
      hasQuiz: true,
      hasWorksheet: true,
      scriptureRef: "Ephesians 4:11-13",
      badge: "Foundation Builder"
    },
    {
      id: 2,
      title: "Apostolic DNA Unveiled",
      subtitle: "Pioneering and Church Multiplication",
      duration: "30 min",
      type: "interactive",
      status: "completed",
      locked: false,
      hasQuiz: true,
      hasWorksheet: true,
      scriptureRef: "1 Corinthians 9:2",
      badge: "Pioneer Spirit"
    },
    {
      id: 3,
      title: "Prophetic Discernment in Action",
      subtitle: "Hearing God's Voice for Direction",
      duration: "28 min",
      type: "audio",
      status: "completed",
      locked: false,
      hasQuiz: true,
      hasWorksheet: false,
      scriptureRef: "1 Corinthians 14:3",
      badge: "Discerner"
    },
    {
      id: 4,
      title: "Evangelistic Fire",
      subtitle: "Igniting Passion for the Lost",
      duration: "32 min",
      type: "video",
      status: "current",
      locked: false,
      hasQuiz: true,
      hasWorksheet: true,
      scriptureRef: "Acts 8:4",
      badge: "Soul Winner"
    },
    {
      id: 5,
      title: "Shepherding Excellence",
      subtitle: "Caring for God's Flock",
      duration: "35 min",
      type: "interactive",
      status: "locked",
      locked: true,
      hasQuiz: true,
      hasWorksheet: true,
      scriptureRef: "John 10:11",
      badge: "Faithful Shepherd"
    },
    {
      id: 6,
      title: "Teaching with Authority",
      subtitle: "Communicating Biblical Truth",
      duration: "29 min",
      type: "video",
      status: "locked",
      locked: true,
      hasQuiz: true,
      hasWorksheet: true,
      scriptureRef: "2 Timothy 2:15",
      badge: "Truth Communicator"
    },
    {
      id: 7,
      title: "Integration Assessment",
      subtitle: "Measuring Your APEST Growth",
      duration: "20 min",
      type: "assessment",
      status: "locked",
      locked: true,
      hasQuiz: false,
      hasWorksheet: false,
      scriptureRef: "1 Corinthians 11:28",
      badge: "Self-Aware Leader"
    },
    {
      id: 8,
      title: "Team Dynamics",
      subtitle: "Building APEST-Balanced Teams",
      duration: "40 min",
      type: "interactive",
      status: "locked",
      locked: true,
      hasQuiz: true,
      hasWorksheet: true,
      scriptureRef: "1 Corinthians 12:12",
      badge: "Team Builder"
    },
    {
      id: 9,
      title: "Organizational Transformation",
      subtitle: "Creating APEST-Aligned Churches",
      duration: "45 min",
      type: "video",
      status: "locked",
      locked: true,
      hasQuiz: true,
      hasWorksheet: true,
      scriptureRef: "Ephesians 2:20",
      badge: "Change Agent"
    },
    {
      id: 10,
      title: "Leadership Development",
      subtitle: "Multiplying APEST Leaders",
      duration: "38 min",
      type: "interactive",
      status: "locked",
      locked: true,
      hasQuiz: true,
      hasWorksheet: true,
      scriptureRef: "2 Timothy 2:2",
      badge: "Leader Multiplier"
    },
    {
      id: 11,
      title: "Cultural Intelligence",
      subtitle: "APEST in Global Context",
      duration: "33 min",
      type: "video",
      status: "locked",
      locked: true,
      hasQuiz: true,
      hasWorksheet: true,
      scriptureRef: "Acts 17:22-23",
      badge: "Cultural Bridge"
    },
    {
      id: 12,
      title: "Your APEST Legacy",
      subtitle: "Living Out Your Calling",
      duration: "30 min",
      type: "capstone",
      status: "locked",
      locked: true,
      hasQuiz: false,
      hasWorksheet: true,
      scriptureRef: "2 Timothy 4:7",
      badge: "Legacy Leader"
    }
  ];

  const learningFeatures = [
    {
      icon: <Video className="w-6 h-6 text-blue-600" />,
      title: "HD Video Content",
      description: "Watch Tim teach with crystal-clear video and audio"
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Interactive Exercises",
      description: "Engage with drag-and-drop activities and simulations"
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "Downloadable Workbooks",
      description: "Print-friendly resources for offline study"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-orange-600" />,
      title: "AI Learning Assistant",
      description: "Get instant answers with our 'Ask Tim' chatbot"
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Community Integration",
      description: "Connect with fellow learners and share insights"
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      title: "Digital Badges",
      description: "Earn recognition for completed milestones"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-600" />,
      title: "Progress Analytics",
      description: "Track your growth with detailed insights"
    },
    {
      icon: <Calendar className="w-6 h-6 text-teal-600" />,
      title: "Live Coaching",
      description: "Join monthly Co-Lab sessions with Tim"
    }
  ];

  const testimonials = [
    {
      quote: "This comprehensive eBook series transformed not just my understanding of APEST, but my entire approach to ministry leadership. The sequential learning model helped me build real competency.",
      author: "Rev. Michael Chen",
      role: "Senior Pastor, Grace Community Church",
      location: "Portland, OR",
      image: "/api/placeholder/60/60",
      rating: 5,
      apestProfile: "Apostolic-Teacher"
    },
    {
      quote: "The interactive elements and personal assessments made complex theological concepts practical and actionable. I can clearly see my growth journey mapped out.",
      author: "Sarah Martinez",
      role: "Worship & Arts Director",
      location: "Austin, TX", 
      image: "/api/placeholder/60/60",
      rating: 5,
      apestProfile: "Evangelistic-Shepherd"
    },
    {
      quote: "As a team leader, the organizational transformation section gave me the tools I needed to align our entire leadership structure with APEST principles.",
      author: "Dr. James Okoye",
      role: "Executive Pastor",
      location: "Atlanta, GA",
      image: "/api/placeholder/60/60",
      rating: 5,
      apestProfile: "Shepherd-Apostolic"
    }
  ];

  const pathwaySteps = [
    {
      step: 1,
      title: "Discover Your Gifts",
      description: "Take the free APEST assessment",
      icon: <Target className="w-8 h-8" />,
      color: "bg-blue-500",
      completed: true
    },
    {
      step: 2,
      title: "Learn Your Profile",
      description: "Study your personalized chapters",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-green-500",
      completed: true
    },
    {
      step: 3,
      title: "Practice Application",
      description: "Complete interactive exercises",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-yellow-500",
      completed: false
    },
    {
      step: 4,
      title: "Join Community",
      description: "Connect with other leaders",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-500",
      completed: false
    },
    {
      step: 5,
      title: "Live Your Calling",
      description: "Transform your ministry",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-red-500",
      completed: false
    }
  ];

  const recentActivity = [
    {
      type: "achievement",
      message: "Earned 'Discerner' badge for completing Prophetic chapter",
      time: "2 hours ago",
      icon: <Award className="w-4 h-4 text-yellow-500" />
    },
    {
      type: "progress",
      message: "Completed interactive exercise: 'Prophetic Listening Practice'",
      time: "3 hours ago",
      icon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      type: "community",
      message: "New comment on your reflection: 'Evangelistic Breakthrough'",
      time: "1 day ago",
      icon: <MessageCircle className="w-4 h-4 text-blue-500" />
    },
    {
      type: "coaching",
      message: "Upcoming Co-Lab session: 'Advanced Prophetic Training'",
      time: "2 days ago",
      icon: <Calendar className="w-4 h-4 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center mix-blend-soft-light opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-500 text-black font-semibold px-4 py-2">
                  🔥 Interactive Learning Experience
                </Badge>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Master Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    APEST Calling
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-xl">
                  A transformational 12-chapter journey designed to activate your God-given ministry gifts and multiply your kingdom impact.
                </p>
              </div>

              {/* Scripture Foundation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <blockquote className="text-lg italic text-blue-100 mb-3">
                  "So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service..."
                </blockquote>
                <cite className="text-yellow-400 font-semibold">— Ephesians 4:11-12</cite>
              </div>

              {/* Progress Overview */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Your Learning Journey</h3>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    {userProgress.overallProgress}% Complete
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <Progress value={userProgress.overallProgress} className="h-3" />
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-blue-300" />
                      <span>{userProgress.currentChapter} of {userProgress.totalChapters} chapters</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-blue-300" />
                      <span>{userProgress.timeSpent} studied</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span>{userProgress.badgesEarned} badges earned</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-green-400" />
                      <span>Next: {userProgress.nextMilestone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
                  <Link href="/ebook-example-two/chapter/4">
                    <Play className="w-5 h-5 mr-2" />
                    Continue Chapter 4
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                  <Link href="#chapters">
                    <Map className="w-5 h-5 mr-2" />
                    View Full Roadmap
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-blue-200">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>15,000+ Leaders</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>94% Completion</span>
                </div>
              </div>
            </div>

            {/* Feature Showcase */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-2xl font-bold mb-2">Comprehensive Learning Features</h3>
                  <p className="text-blue-200">Everything you need for transformational growth</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {learningFeatures.slice(0, 4).map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-xl flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-xs text-blue-200">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                    <Gift className="w-4 h-4 mr-2" />
                    Explore All Features
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Pathway Visualization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Transformational Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow a proven, Scripture-based pathway designed to activate your APEST gifts and multiply your ministry impact
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {pathwaySteps.map((step, index) => (
                <div key={step.step} className="relative text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${step.color} ${step.completed ? '' : 'opacity-50'} flex items-center justify-center text-white relative z-10`}>
                    {step.completed ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-500">Step {step.step}</div>
                    <h3 className={`font-bold ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                      {step.description}
                    </p>
                  </div>
                  
                  {step.completed && (
                    <Badge className="mt-2 bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Overview */}
      <section id="chapters" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Chapter Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each chapter builds upon the previous, ensuring deep understanding and practical application of APEST principles
            </p>
          </div>

          <div className="grid gap-6">
            {chapters.map((chapter, index) => (
              <Card key={chapter.id} className={`transition-all duration-300 hover:shadow-xl ${
                chapter.status === 'completed' ? 'border-green-200 bg-green-50/50' :
                chapter.status === 'current' ? 'border-blue-200 bg-blue-50/50 ring-2 ring-blue-200' :
                'border-gray-200 bg-gray-50/50 opacity-75'
              }`}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-6 flex-1">
                      {/* Chapter Number & Status */}
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                        chapter.status === 'completed' ? 'bg-green-500' :
                        chapter.status === 'current' ? 'bg-blue-500' :
                        'bg-gray-400'
                      }`}>
                        {chapter.status === 'completed' ? (
                          <CheckCircle className="w-8 h-8" />
                        ) : (
                          chapter.id
                        )}
                      </div>
                      
                      {/* Chapter Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {chapter.title}
                            </h3>
                            <div className="flex items-center space-x-2">
                              {chapter.type === 'video' && (
                                <Badge variant="secondary" className="bg-red-100 text-red-700">
                                  <Video className="w-3 h-3 mr-1" />
                                  Video
                                </Badge>
                              )}
                              {chapter.type === 'audio' && (
                                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                                  <Headphones className="w-3 h-3 mr-1" />
                                  Audio
                                </Badge>
                              )}
                              {chapter.type === 'interactive' && (
                                <Badge variant="secondary" className="bg-green-100 text-green-700">
                                  <Zap className="w-3 h-3 mr-1" />
                                  Interactive
                                </Badge>
                              )}
                              {chapter.type === 'assessment' && (
                                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                                  <Target className="w-3 h-3 mr-1" />
                                  Assessment
                                </Badge>
                              )}
                              {chapter.type === 'capstone' && (
                                <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                                  <Award className="w-3 h-3 mr-1" />
                                  Capstone
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-lg text-gray-600 mb-3">{chapter.subtitle}</p>
                          
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {chapter.duration}
                            </span>
                            {chapter.hasQuiz && (
                              <span className="flex items-center">
                                <Brain className="w-4 h-4 mr-1" />
                                Knowledge Quiz
                              </span>
                            )}
                            {chapter.hasWorksheet && (
                              <span className="flex items-center">
                                <FileText className="w-4 h-4 mr-1" />
                                Reflection Worksheet
                              </span>
                            )}
                            <span className="flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {chapter.scriptureRef}
                            </span>
                          </div>
                        </div>

                        {/* Badge Preview */}
                        {chapter.badge && (
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium text-gray-700">
                              Earn "{chapter.badge}" Badge
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col items-end space-y-3">
                      {chapter.status === 'completed' && (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                      
                      <Button 
                        asChild={!chapter.locked}
                        variant={chapter.status === 'current' ? 'default' : 'outline'}
                        disabled={chapter.locked}
                        className={`min-w-[120px] ${
                          chapter.status === 'current' ? 'bg-blue-600 hover:bg-blue-700' : ''
                        }`}
                      >
                        {!chapter.locked ? (
                          <Link href={`/ebook-example-two/chapter/${chapter.id}`}>
                            {chapter.status === 'completed' ? (
                              <>
                                <Eye className="w-4 h-4 mr-2" />
                                Review
                              </>
                            ) : chapter.status === 'current' ? (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Continue
                              </>
                            ) : (
                              <>
                                <ArrowRight className="w-4 h-4 mr-2" />
                                Start
                              </>
                            )}
                          </Link>
                        ) : (
                          <span className="cursor-not-allowed flex items-center">
                            <Shield className="w-4 h-4 mr-2" />
                            Locked
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Features Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Learning Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every element designed to facilitate transformation, not just information transfer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Dashboard Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Your Personal Learning Hub
              </h2>
              <p className="text-xl text-gray-600">
                Track your progress, earn achievements, and stay connected with your learning community—all in one personalized dashboard.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Progress Analytics</h4>
                    <p className="text-gray-600 text-sm">Detailed insights into your learning journey and growth patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Achievement System</h4>
                    <p className="text-gray-600 text-sm">Earn badges and certificates as you complete milestones</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Integration</h4>
                    <p className="text-gray-600 text-sm">Share insights and learn from other ministry leaders</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Live Coaching Access</h4>
                    <p className="text-gray-600 text-sm">Join monthly Co-Lab sessions and book personal coaching</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/dashboard-example-two">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Dashboard Demo
                </Link>
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Recent Activity</h3>
                  <Badge variant="outline">Live Updates</Badge>
                </div>
                
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                      <div className="flex-shrink-0 mt-1">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    View All Activity
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transformation Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how this comprehensive learning experience is changing lives and ministries worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-gray-600">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <cite className="font-semibold text-gray-900 not-italic">{testimonial.author}</cite>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <Badge variant="outline" className="text-xs">
                      APEST Profile: {testimonial.apestProfile}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Activate Your APEST Calling?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Join thousands of ministry leaders who are discovering, developing, and deploying their God-given gifts for kingdom impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
              <Link href="/apest-quiz-example-two">
                <Target className="w-6 h-6 mr-3" />
                Take Free APEST Assessment
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              <Link href="/ebook-example-two/chapter/1">
                <BookOpen className="w-6 h-6 mr-3" />
                Start Learning Journey
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15,000+</div>
              <p className="text-blue-100">Leaders Equipped</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">94%</div>
              <p className="text-blue-100">Completion Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <p className="text-blue-100">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-blue-100">Countries Reached</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 text-sm">
              💰 30-day money-back guarantee • 🔒 Secure payment • 📱 Mobile & desktop access
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
