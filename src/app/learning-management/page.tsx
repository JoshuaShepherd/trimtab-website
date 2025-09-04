import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { 
  BookOpen, 
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Settings,
  Download,
  Share2,
  Bookmark,
  CheckCircle,
  Clock,
  Star,
  Eye,
  Users,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Edit,
  Save,
  Send,
  FileText,
  Video,
  Headphones,
  Image,
  Link as LinkIcon,
  Award,
  Target,
  TrendingUp,
  BarChart3,
  Calendar,
  Filter,
  Search,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Minimize2,
  RotateCcw,
  FastForward,
  Rewind,
  PlusCircle,
  MinusCircle,
  Info,
  HelpCircle,
  Lightbulb,
  Brain,
  Zap,
  Trophy,
  Flame,
  Heart,
  Coffee
} from "lucide-react"

export const metadata: Metadata = {
  title: "Learning Management System - Tim Catchim APEST Platform",
  description: "Comprehensive learning management system for APEST courses with interactive content, progress tracking, and advanced learning tools."
}

export default function LearningManagement() {
  const currentCourse = {
    id: 1,
    title: "Advanced APEST Leadership Integration",
    instructor: "Tim Catchim",
    totalLessons: 12,
    completedLessons: 7,
    currentLesson: 8,
    progress: 58,
    totalDuration: "8h 45m",
    remainingTime: "3h 42m",
    difficulty: "Advanced",
    rating: 4.9,
    enrolled: 234,
    lastAccessed: "2 hours ago"
  };

  const currentLesson = {
    id: 8,
    title: "Balancing Multiple APEST Gifts in Leadership",
    duration: "24:32",
    type: "video",
    completed: false,
    currentTime: "12:45",
    progress: 52,
    transcript: true,
    notes: 3,
    bookmarks: 1,
    resources: [
      { name: "APEST Balance Assessment.pdf", size: "2.4 MB", type: "pdf" },
      { name: "Leadership Integration Worksheet.docx", size: "1.2 MB", type: "doc" },
      { name: "Case Study Examples.pdf", size: "3.1 MB", type: "pdf" }
    ]
  };

  const courseModules = [
    {
      id: 1,
      title: "APEST Foundations",
      lessons: 3,
      duration: "1h 15m",
      completed: true,
      lessons_list: [
        { id: 1, title: "Introduction to APEST", duration: "18:24", completed: true, type: "video" },
        { id: 2, title: "Historical Context", duration: "22:15", completed: true, type: "video" },
        { id: 3, title: "Modern Applications", duration: "34:21", completed: true, type: "video" }
      ]
    },
    {
      id: 2,
      title: "Individual Gift Discovery",
      lessons: 4,
      duration: "2h 10m",
      completed: true,
      lessons_list: [
        { id: 4, title: "APEST Assessment Tools", duration: "28:45", completed: true, type: "assessment" },
        { id: 5, title: "Interpreting Your Results", duration: "31:20", completed: true, type: "video" },
        { id: 6, title: "Gift Combinations", duration: "25:30", completed: true, type: "video" },
        { id: 7, title: "Personal Development Plan", duration: "44:25", completed: true, type: "worksheet" }
      ]
    },
    {
      id: 3,
      title: "Leadership Integration",
      lessons: 5,
      duration: "3h 20m",
      completed: false,
      current: true,
      lessons_list: [
        { id: 8, title: "Balancing Multiple APEST Gifts in Leadership", duration: "24:32", completed: false, current: true, type: "video" },
        { id: 9, title: "Team Dynamics and APEST", duration: "36:15", completed: false, type: "video" },
        { id: 10, title: "Organizational Implementation", duration: "42:18", completed: false, type: "video" },
        { id: 11, title: "Case Study Analysis", duration: "38:45", completed: false, type: "case_study" },
        { id: 12, title: "Integration Capstone Project", duration: "58:10", completed: false, type: "project" }
      ]
    }
  ];

  const learningProgress = {
    totalTimeSpent: "127h 32m",
    averageSessionTime: "1h 15m",
    streakDays: 23,
    completionRate: 87,
    totalCertificates: 5,
    skillPoints: 1247
  };

  const studentNotes = [
    {
      id: 1,
      timestamp: "08:23",
      note: "Key insight: Apostolic vision must be balanced with shepherd care to avoid overwhelming team members",
      created: "2 hours ago",
      lesson: "Balancing Multiple APEST Gifts in Leadership"
    },
    {
      id: 2,
      timestamp: "15:47",
      note: "Important distinction between prophetic correction and pastoral guidance - timing is crucial",
      created: "1 day ago",
      lesson: "Prophetic Leadership in Practice"
    },
    {
      id: 3,
      timestamp: "22:10",
      note: "Teacher gift helps create systems, but evangelist gift provides motivation for adoption",
      created: "3 days ago",
      lesson: "Gift Combinations in Action"
    }
  ];

  const discussionPosts = [
    {
      id: 1,
      author: "Sarah K.",
      avatar: "SK",
      time: "3 hours ago",
      content: "This lesson really helped me understand why I've been struggling with team leadership. I have strong apostolic and teacher gifts, but I've been neglecting the shepherd aspect.",
      likes: 12,
      replies: 3
    },
    {
      id: 2,
      author: "Marcus R.",
      avatar: "MR", 
      time: "1 day ago",
      content: "The framework Tim presents here aligns perfectly with what I've observed in successful ministry teams. The key is intentional development of secondary gifts.",
      likes: 8,
      replies: 5
    },
    {
      id: 3,
      author: "Jennifer L.",
      avatar: "JL",
      time: "2 days ago",
      content: "Question: How do you handle situations where your primary gift conflicts with what the situation requires? For example, I'm primarily prophet, but sometimes need to lead with shepherd care.",
      likes: 15,
      replies: 7
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "Which APEST gifts are most important for organizational vision casting?",
      type: "multiple_choice",
      options: [
        "Apostle and Prophet",
        "Evangelist and Teacher", 
        "Shepherd and Teacher",
        "All gifts equally"
      ],
      correct: 0,
      explanation: "Apostolic gifts provide the foundational vision while prophetic gifts ensure alignment with divine purpose."
    },
    {
      id: 2,
      question: "True or False: A leader should only operate in their primary APEST gift.",
      type: "true_false",
      correct: false,
      explanation: "Effective leaders develop competency in multiple APEST areas while leading from their primary gifting."
    },
    {
      id: 3,
      question: "Describe a situation where you would need to balance apostolic vision with shepherd care.",
      type: "essay",
      wordLimit: 200
    }
  ];

  const learningTools = [
    {
      id: 1,
      name: "Speed Control",
      description: "Adjust playback speed",
      icon: Settings,
      active: true
    },
    {
      id: 2,
      name: "Transcripts",
      description: "Read along with video",
      icon: FileText,
      active: true
    },
    {
      id: 3,
      name: "Note Taking",
      description: "Capture key insights",
      icon: Edit,
      active: true
    },
    {
      id: 4,
      name: "Bookmarks",
      description: "Mark important moments",
      icon: Bookmark,
      active: true
    },
    {
      id: 5,
      name: "Discussion",
      description: "Engage with peers",
      icon: MessageSquare,
      active: true
    },
    {
      id: 6,
      name: "Assessments",
      description: "Test your knowledge",
      icon: Target,
      active: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-trimtab-gray-3 mb-2">
            <Link href="/courses" className="hover:text-trimtab-blue-2">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{currentCourse.title}</span>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-trimtab-blue-4 mb-2">
                {currentCourse.title}
              </h1>
              <p className="text-lg text-trimtab-gray-3">with {currentCourse.instructor}</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-trimtab-gray-2">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" className="border-trimtab-gray-2">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" className="border-trimtab-gray-2">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-trimtab-gray-3">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {currentCourse.totalDuration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {currentCourse.totalLessons} lessons
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {currentCourse.enrolled} students
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {currentCourse.rating} rating
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Video Player */}
            <Card className="border-trimtab-gray-2 mb-8">
              <CardContent className="p-0">
                <div className="aspect-video bg-black rounded-t-lg relative">
                  {/* Video Player Interface */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-semibold mb-2">{currentLesson.title}</h3>
                      <p className="text-gray-300">Duration: {currentLesson.duration}</p>
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="mb-3">
                      <Progress value={currentLesson.progress} className="h-1 bg-white/20" />
                    </div>
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <SkipBack className="w-5 h-5" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Play className="w-6 h-6" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <SkipForward className="w-5 h-5" />
                        </Button>
                        <span className="text-sm">{currentLesson.currentTime} / {currentLesson.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Volume2 className="w-5 h-5" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Bookmark className="w-5 h-5" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Settings className="w-5 h-5" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Maximize2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lesson Content Tabs */}
            <div className="mb-8">
              <div className="flex border-b border-trimtab-gray-1 mb-6">
                <button className="px-4 py-2 border-b-2 border-trimtab-cta text-trimtab-cta font-medium">
                  Overview
                </button>
                <button className="px-4 py-2 text-trimtab-gray-3 hover:text-trimtab-blue-2">
                  Transcript
                </button>
                <button className="px-4 py-2 text-trimtab-gray-3 hover:text-trimtab-blue-2">
                  Resources
                </button>
                <button className="px-4 py-2 text-trimtab-gray-3 hover:text-trimtab-blue-2">
                  Discussion
                </button>
                <button className="px-4 py-2 text-trimtab-gray-3 hover:text-trimtab-blue-2">
                  Quiz
                </button>
              </div>

              {/* Overview Tab Content */}
              <Card className="border-trimtab-gray-2">
                <CardHeader>
                  <CardTitle className="text-xl text-trimtab-blue-4">{currentLesson.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none text-trimtab-gray-3">
                    <p className="text-lg mb-4">
                      In this lesson, we explore the critical balance required when leading with multiple APEST gifts. 
                      You'll learn practical strategies for integrating different leadership approaches while maintaining 
                      authenticity and effectiveness.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-3">Learning Objectives</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li>Understand the challenges of multi-gifted leadership</li>
                      <li>Learn when to emphasize different APEST gifts</li>
                      <li>Develop strategies for gift integration</li>
                      <li>Practice balancing vision with care</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-3">Key Concepts</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-trimtab-gray-1 rounded-lg p-4">
                        <h4 className="font-medium text-trimtab-blue-4 mb-2">Gift Switching</h4>
                        <p className="text-sm">The ability to consciously shift between different APEST gifts based on situational needs.</p>
                      </div>
                      <div className="border border-trimtab-gray-1 rounded-lg p-4">
                        <h4 className="font-medium text-trimtab-blue-4 mb-2">Contextual Leadership</h4>
                        <p className="text-sm">Adapting your leadership approach to match the current needs of your team or organization.</p>
                      </div>
                      <div className="border border-trimtab-gray-1 rounded-lg p-4">
                        <h4 className="font-medium text-trimtab-blue-4 mb-2">Integration Tension</h4>
                        <p className="text-sm">The creative tension that arises when holding multiple gifts in balance.</p>
                      </div>
                      <div className="border border-trimtab-gray-1 rounded-lg p-4">
                        <h4 className="font-medium text-trimtab-blue-4 mb-2">Authentic Expression</h4>
                        <p className="text-sm">Leading from your core gifts while developing competency in others.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Learning Tools */}
            <Card className="border-trimtab-gray-2 mb-8">
              <CardHeader>
                <CardTitle className="text-lg text-trimtab-blue-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Learning Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {learningTools.map((tool) => {
                    const IconComponent = tool.icon;
                    return (
                      <div key={tool.id} className={`border rounded-lg p-4 transition-colors ${
                        tool.active ? 'border-trimtab-cta bg-trimtab-cta/5' : 'border-trimtab-gray-1'
                      }`}>
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className={`w-5 h-5 ${
                            tool.active ? 'text-trimtab-cta' : 'text-trimtab-gray-2'
                          }`} />
                          <h3 className={`font-medium ${
                            tool.active ? 'text-trimtab-blue-4' : 'text-trimtab-gray-3'
                          }`}>
                            {tool.name}
                          </h3>
                        </div>
                        <p className="text-sm text-trimtab-gray-3">{tool.description}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* My Notes */}
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-trimtab-blue-4 flex items-center">
                    <Edit className="w-5 h-5 mr-2" />
                    My Notes
                  </CardTitle>
                  <Button className="trimtab-cta-gradient text-white">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Note
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentNotes.map((note) => (
                    <div key={note.id} className="border border-trimtab-gray-1 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-trimtab-blue-1 text-trimtab-blue-2">
                            {note.timestamp}
                          </Badge>
                          <span className="text-sm text-trimtab-gray-3">{note.lesson}</span>
                        </div>
                        <span className="text-sm text-trimtab-gray-2">{note.created}</span>
                      </div>
                      <p className="text-trimtab-gray-3 mb-3">{note.note}</p>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Progress */}
            <Card className="border-trimtab-gray-2 mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-trimtab-blue-4">Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-trimtab-gray-3 mb-2">
                    <span>Lessons Completed</span>
                    <span>{currentCourse.completedLessons}/{currentCourse.totalLessons}</span>
                  </div>
                  <Progress value={currentCourse.progress} className="h-3" />
                  <div className="text-center text-sm text-trimtab-gray-2 mt-1">
                    {currentCourse.progress}% Complete
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-trimtab-gray-3">Time Spent</div>
                    <div className="font-semibold text-trimtab-blue-4">{learningProgress.totalTimeSpent}</div>
                  </div>
                  <div>
                    <div className="text-trimtab-gray-3">Remaining</div>
                    <div className="font-semibold text-trimtab-blue-4">{currentCourse.remainingTime}</div>
                  </div>
                  <div>
                    <div className="text-trimtab-gray-3">Streak</div>
                    <div className="font-semibold text-orange-500 flex items-center">
                      <Flame className="w-4 h-4 mr-1" />
                      {learningProgress.streakDays} days
                    </div>
                  </div>
                  <div>
                    <div className="text-trimtab-gray-3">Skill Points</div>
                    <div className="font-semibold text-purple-500">{learningProgress.skillPoints}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Modules */}
            <Card className="border-trimtab-gray-2 mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-trimtab-blue-4">Course Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courseModules.map((module) => (
                    <div key={module.id} className={`border rounded-lg p-3 ${
                      module.current ? 'border-trimtab-cta bg-trimtab-cta/5' : 
                      module.completed ? 'border-green-200 bg-green-50' : 'border-trimtab-gray-1'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-medium ${
                          module.current ? 'text-trimtab-cta' :
                          module.completed ? 'text-green-700' : 'text-trimtab-blue-4'
                        }`}>
                          {module.title}
                        </h3>
                        {module.completed && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                      
                      <div className="text-sm text-trimtab-gray-3 mb-3">
                        {module.lessons} lessons • {module.duration}
                      </div>

                      <div className="space-y-2">
                        {module.lessons_list.map((lesson) => (
                          <div key={lesson.id} className={`flex items-center gap-2 p-2 rounded text-sm ${
                            'current' in lesson && lesson.current ? 'bg-trimtab-cta/10 text-trimtab-cta' :
                            lesson.completed ? 'text-green-600' : 'text-trimtab-gray-3'
                          }`}>
                            {lesson.completed ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : 'current' in lesson && lesson.current ? (
                              <Play className="w-4 h-4 text-trimtab-cta" />
                            ) : (
                              <div className="w-4 h-4 border-2 border-trimtab-gray-1 rounded-full" />
                            )}
                            <span className="flex-1">{lesson.title}</span>
                            <span className="text-xs">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Discussion Preview */}
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-trimtab-blue-4 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Discussion
                  </CardTitle>
                  <Button size="sm" variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {discussionPosts.slice(0, 2).map((post) => (
                    <div key={post.id} className="border-b border-trimtab-gray-1 pb-3 last:border-b-0">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-trimtab-blue-1 rounded-full flex items-center justify-center text-xs font-medium text-trimtab-blue-2">
                          {post.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-trimtab-blue-4">{post.author}</span>
                            <span className="text-xs text-trimtab-gray-2">{post.time}</span>
                          </div>
                          <p className="text-sm text-trimtab-gray-3 mb-2">{post.content}</p>
                          <div className="flex items-center gap-3 text-xs text-trimtab-gray-2">
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="w-3 h-3" />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              {post.replies}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
