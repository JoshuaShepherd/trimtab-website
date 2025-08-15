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
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  Award,
  BookOpen,
  Users,
  MessageCircle,
  Calendar,
  Bell,
  Settings,
  Download,
  Share2,
  Heart,
  Eye,
  Brain,
  Shield,
  Compass,
  Star,
  CheckCircle,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Play,
  Pause,
  RotateCcw,
  Bookmark,
  Filter,
  Search,
  Grid,
  List,
  Plus,
  Minus,
  X,
  Edit,
  Save,
  Upload,
  FileText,
  Video,
  Headphones,
  Image,
  Globe,
  Building,
  Flag,
  Zap,
  Flame,
  Lightbulb,
  Sparkles,
  Navigation,
  Map,
  Telescope,
  Radar,
  HelpCircle,
  Info,
  AlertCircle,
  CheckSquare,
  Square,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  User,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  PieChart,
  LineChart,
  Activity,
  Layers,
  Archive,
  Trash2
} from "lucide-react";
import Footer from "@/components/Footer";

export default function DashboardExampleTwo() {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("30days");
  const [viewMode, setViewMode] = useState("grid");
  const [notifications, setNotifications] = useState(3);
  const [currentStreak, setCurrentStreak] = useState(12);
  const [showGoalModal, setShowGoalModal] = useState(false);

  // Mock user data
  const userData = {
    name: "Sarah Chen",
    role: "Youth Pastor",
    church: "Grace Community Church",
    primaryGift: "Shepherding",
    secondaryGift: "Teaching",
    assessmentDate: "March 15, 2024",
    completedCourses: 8,
    totalCourses: 12,
    studyStreak: 12,
    totalStudyTime: 1847, // minutes
    badgesEarned: 15,
    avatar: "/api/placeholder/100/100"
  };

  const recentActivity = [
    {
      id: 1,
      type: "course",
      title: "Completed Chapter 4: Evangelistic Fire",
      timestamp: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      id: 2,
      type: "assessment",
      title: "Retook APEST Assessment - 95% Confidence",
      timestamp: "1 day ago", 
      icon: Target,
      color: "text-blue-600"
    },
    {
      id: 3,
      type: "community",
      title: "Posted insight in Community Discussion",
      timestamp: "2 days ago",
      icon: MessageCircle,
      color: "text-purple-600"
    },
    {
      id: 4,
      type: "practice",
      title: "Finished 30-Day Action Plan Exercise",
      timestamp: "3 days ago",
      icon: CheckSquare,
      color: "text-orange-600"
    },
    {
      id: 5,
      type: "coaching",
      title: "Scheduled coaching call with Tim",
      timestamp: "1 week ago",
      icon: Calendar,
      color: "text-indigo-600"
    }
  ];

  const learningProgress = [
    {
      id: 1,
      title: "APEST Foundations",
      progress: 100,
      status: "completed",
      chapters: 12,
      timeSpent: 480,
      badge: "Foundation Master",
      color: "green"
    },
    {
      id: 2, 
      title: "Advanced Leadership",
      progress: 67,
      status: "in-progress",
      chapters: 8,
      timeSpent: 320,
      badge: null,
      color: "blue"
    },
    {
      id: 3,
      title: "Team Dynamics",
      progress: 33,
      status: "in-progress", 
      chapters: 6,
      timeSpent: 120,
      badge: null,
      color: "purple"
    },
    {
      id: 4,
      title: "Ministry Innovation",
      progress: 0,
      status: "locked",
      chapters: 10,
      timeSpent: 0,
      badge: null,
      color: "gray"
    }
  ];

  const badges = [
    { id: 1, name: "Quick Learner", description: "Completed first course in under 2 weeks", icon: Zap, earned: true },
    { id: 2, name: "Consistent Student", description: "Maintained 30-day study streak", icon: Flame, earned: true },
    { id: 3, name: "Community Contributor", description: "Made 10+ meaningful posts", icon: Users, earned: true },
    { id: 4, name: "Assessment Master", description: "Scored 95%+ on all assessments", icon: Target, earned: true },
    { id: 5, name: "Soul Winner", description: "Completed evangelistic training", icon: Heart, earned: true },
    { id: 6, name: "Shepherd's Heart", description: "Mastered care and nurture principles", icon: Shield, earned: true },
    { id: 7, name: "Truth Speaker", description: "Completed prophetic discernment course", icon: Eye, earned: false },
    { id: 8, name: "Bridge Builder", description: "Finished cross-cultural ministry track", icon: Globe, earned: false },
    { id: 9, name: "Pioneer Spirit", description: "Completed apostolic leadership intensive", icon: Compass, earned: false },
    { id: 10, name: "Wisdom Teacher", description: "Mastered advanced teaching methods", icon: BookOpen, earned: false }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Weekly Co-Lab: Shepherding Excellence",
      date: "Today, 2:00 PM CST",
      type: "live-session",
      registrants: 67,
      description: "Interactive workshop on emotional intelligence in ministry"
    },
    {
      id: 2,
      title: "Q&A with Tim Catchim",
      date: "Tomorrow, 1:00 PM CST", 
      type: "webinar",
      registrants: 234,
      description: "Monthly session addressing APEST questions"
    },
    {
      id: 3,
      title: "Ministry Innovation Challenge",
      date: "March 25, 10:00 AM CST",
      type: "challenge",
      registrants: 89,
      description: "30-day practical ministry experiment"
    },
    {
      id: 4,
      title: "APEST Leadership Intensive",
      date: "April 2-4, All Day",
      type: "intensive",
      registrants: 45,
      description: "3-day immersive leadership development"
    }
  ];

  const personalGoals = [
    {
      id: 1,
      title: "Complete Advanced Leadership Track",
      target: "April 15, 2024",
      progress: 67,
      status: "on-track",
      description: "Finish remaining 3 chapters and final assessment"
    },
    {
      id: 2,
      title: "Mentor 3 Emerging Leaders",
      target: "June 1, 2024",
      progress: 33,
      status: "behind",
      description: "Currently mentoring 1 leader, need to connect with 2 more"
    },
    {
      id: 3,
      title: "Launch Small Group Ministry",
      target: "May 1, 2024",
      progress: 80,
      status: "ahead",
      description: "Planning complete, recruitment in progress"
    },
    {
      id: 4,
      title: "Earn Teaching Specialist Badge",
      target: "July 1, 2024",
      progress: 25,
      status: "on-track",
      description: "Complete 4 specialized teaching modules"
    }
  ];

  const insightCards = [
    {
      title: "Your Learning Velocity",
      metric: "2.3x",
      description: "faster than average completion rate",
      trend: "up",
      color: "green"
    },
    {
      title: "Engagement Score",
      metric: "94%",
      description: "based on participation and consistency",
      trend: "up", 
      color: "blue"
    },
    {
      title: "Knowledge Retention",
      metric: "89%",
      description: "average assessment score",
      trend: "steady",
      color: "purple"
    },
    {
      title: "Community Impact",
      metric: "156",
      description: "people influenced through your posts",
      trend: "up",
      color: "orange"
    }
  ];

  const recommendedActions = [
    {
      id: 1,
      title: "Schedule Your Next Coaching Call",
      description: "It's been 3 weeks since your last session with Tim",
      action: "Schedule Call",
      priority: "high",
      icon: Calendar
    },
    {
      id: 2,
      title: "Join Today's Co-Lab Session",
      description: "Perfect fit for your Shepherding gift development",
      action: "Join Now",
      priority: "medium",
      icon: Users
    },
    {
      id: 3,
      title: "Update Your Ministry Profile",
      description: "Share your recent ministry developments",
      action: "Update Profile",
      priority: "low",
      icon: User
    },
    {
      id: 4,
      title: "Connect with Study Partner",
      description: "Enhanced learning through peer collaboration",
      action: "Find Partner",
      priority: "medium",
      icon: MessageCircle
    }
  ];

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'locked': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUp className="w-4 h-4 text-green-600" />;
      case 'down': return <ArrowDown className="w-4 h-4 text-red-600" />;
      default: return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-orange-200 bg-orange-50';
      case 'low': return 'border-green-200 bg-green-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost">
                <Link href="/ebook-example-two">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Back to Hub
                </Link>
              </Button>
              <h1 className="text-xl font-semibold text-gray-900">Learning Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>{currentStreak} day streak</span>
              </div>
              
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>

              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5" />
              </Button>

              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold text-sm">SC</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {userData.name}!
              </h2>
              <p className="text-gray-600 text-lg">
                {userData.role} at {userData.church} • Primary Gift: {userData.primaryGift}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">Overall Progress</div>
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {Math.round((userData.completedCourses / userData.totalCourses) * 100)}%
              </div>
              <div className="text-sm text-gray-500">
                {userData.completedCourses} of {userData.totalCourses} courses
              </div>
            </div>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {insightCards.map((card, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">{card.title}</span>
                  {getTrendIcon(card.trend)}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{card.metric}</div>
                <div className="text-sm text-gray-600">{card.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-full max-w-3xl grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-blue-600" />
                        Recent Activity
                      </CardTitle>
                      <Button variant="ghost" size="sm">View All</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                          <activity.icon className={`w-5 h-5 ${activity.color} flex-shrink-0 mt-0.5`} />
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">{activity.title}</p>
                            <p className="text-gray-500 text-sm">{activity.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions & Recommendations */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
                      Recommended Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recommendedActions.slice(0, 3).map((action) => (
                        <div key={action.id} className={`p-3 rounded-lg border ${getPriorityColor(action.priority)}`}>
                          <div className="flex items-start space-x-2">
                            <action.icon className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 text-sm">{action.title}</h4>
                              <p className="text-gray-600 text-xs mt-1">{action.description}</p>
                              <Button size="sm" className="mt-2 h-6 text-xs">
                                {action.action}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-green-600" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {upcomingEvents.slice(0, 2).map((event) => (
                        <div key={event.id} className="p-3 border rounded-lg hover:bg-gray-50">
                          <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                          <p className="text-gray-600 text-xs mt-1">{event.date}</p>
                          <p className="text-gray-500 text-xs">{event.registrants} registered</p>
                          <Button size="sm" className="mt-2 h-6 text-xs">
                            Join Event
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Current Learning Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                  Current Learning Progress
                </CardTitle>
                <CardDescription>
                  Your active courses and completion status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {learningProgress.filter(course => course.status !== 'locked').map((course) => (
                    <div key={course.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{course.title}</h4>
                        <Badge className={getStatusColor(course.status)}>
                          {course.status === 'completed' ? 'Complete' : `${course.progress}%`}
                        </Badge>
                      </div>
                      
                      <Progress value={course.progress} className="mb-3" />
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{course.chapters} chapters</span>
                        <span>{formatTime(course.timeSpent)}</span>
                      </div>
                      
                      {course.badge && (
                        <Badge variant="outline" className="mt-2 text-xs">
                          <Award className="w-3 h-3 mr-1" />
                          {course.badge}
                        </Badge>
                      )}
                      
                      <Button size="sm" className="w-full mt-3">
                        {course.status === 'completed' ? 'Review' : 'Continue'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learning" className="space-y-8">
            {/* All Courses */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    All Learning Paths
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Search courses..." className="w-64" />
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                  {learningProgress.map((course) => (
                    <div key={course.id} className={`border rounded-lg p-4 ${viewMode === 'list' ? 'flex items-center space-x-4' : ''}`}>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">{course.title}</h4>
                          <Badge className={getStatusColor(course.status)}>
                            {course.status === 'completed' ? 'Complete' :
                             course.status === 'locked' ? 'Locked' : `${course.progress}%`}
                          </Badge>
                        </div>
                        
                        {course.status !== 'locked' && (
                          <Progress value={course.progress} className="mb-3" />
                        )}
                        
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                          <span>{course.chapters} chapters</span>
                          <span>{formatTime(course.timeSpent)}</span>
                        </div>
                        
                        {course.badge && (
                          <Badge variant="outline" className="mb-3 text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            {course.badge}
                          </Badge>
                        )}
                      </div>
                      
                      <Button 
                        size="sm" 
                        className={viewMode === 'grid' ? 'w-full' : ''}
                        disabled={course.status === 'locked'}
                      >
                        {course.status === 'completed' ? 'Review' :
                         course.status === 'locked' ? 'Coming Soon' : 'Continue'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recently Watched */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  Recently Watched
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Shepherding in Crisis", duration: "12:34", progress: 100, type: "video" },
                    { title: "Building Healthy Teams", duration: "8:45", progress: 60, type: "video" },
                    { title: "Leadership Transitions", duration: "15:20", progress: 30, type: "video" }
                  ].map((video, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="aspect-video bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                        <Play className="w-8 h-8 text-gray-500" />
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">{video.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{video.duration}</span>
                        <span>{video.progress}% watched</span>
                      </div>
                      <Progress value={video.progress} className="mt-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-8">
            {/* Learning Analytics */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                    Learning Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Total Study Time</span>
                        <span className="text-lg font-bold text-purple-600">{formatTime(userData.totalStudyTime)}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Average: {Math.round(userData.totalStudyTime / 30)} min/day over 30 days
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Courses Completed</span>
                        <span className="text-lg font-bold text-green-600">{userData.completedCourses}</span>
                      </div>
                      <Progress value={(userData.completedCourses / userData.totalCourses) * 100} className="mb-2" />
                      <div className="text-sm text-gray-600">
                        {userData.totalCourses - userData.completedCourses} remaining
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Current Streak</span>
                        <span className="text-lg font-bold text-orange-600 flex items-center">
                          <Flame className="w-5 h-5 mr-1" />
                          {userData.studyStreak} days
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Keep learning to maintain your streak!
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-600" />
                    Achievements & Badges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {badges.slice(0, 6).map((badge) => (
                      <div 
                        key={badge.id} 
                        className={`p-3 rounded-lg border text-center ${
                          badge.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <badge.icon className={`w-6 h-6 mx-auto mb-2 ${
                          badge.earned ? 'text-yellow-600' : 'text-gray-400'
                        }`} />
                        <h4 className={`font-medium text-sm ${
                          badge.earned ? 'text-yellow-800' : 'text-gray-500'
                        }`}>
                          {badge.name}
                        </h4>
                        <p className={`text-xs mt-1 ${
                          badge.earned ? 'text-yellow-700' : 'text-gray-400'
                        }`}>
                          {badge.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Badges ({badges.filter(b => b.earned).length}/{badges.length})
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* APEST Development Radar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Radar className="w-5 h-5 mr-2 text-blue-600" />
                  APEST Development Radar
                </CardTitle>
                <CardDescription>
                  Track your growth across all five ministry gifts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-6">
                  {[
                    { gift: 'Apostolic', score: 72, icon: Compass, color: 'purple' },
                    { gift: 'Prophetic', score: 68, icon: Eye, color: 'red' },
                    { gift: 'Evangelistic', score: 79, icon: Heart, color: 'pink' },
                    { gift: 'Shepherding', score: 94, icon: Shield, color: 'green' },
                    { gift: 'Teaching', score: 87, icon: BookOpen, color: 'blue' }
                  ].map((gift, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                        gift.color === 'purple' ? 'bg-purple-100' :
                        gift.color === 'red' ? 'bg-red-100' :
                        gift.color === 'pink' ? 'bg-pink-100' :
                        gift.color === 'green' ? 'bg-green-100' :
                        'bg-blue-100'
                      }`}>
                        <gift.icon className={`w-8 h-8 ${
                          gift.color === 'purple' ? 'text-purple-600' :
                          gift.color === 'red' ? 'text-red-600' :
                          gift.color === 'pink' ? 'text-pink-600' :
                          gift.color === 'green' ? 'text-green-600' :
                          'text-blue-600'
                        }`} />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{gift.gift}</h4>
                      <div className="text-2xl font-bold text-gray-900 mb-2">{gift.score}%</div>
                      <Progress value={gift.score} className="h-2" />
                      {gift.gift === 'Shepherding' && (
                        <Badge className="mt-2 bg-green-100 text-green-700 text-xs">Primary</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Community Activity */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-purple-600" />
                      Community Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          user: "David Kim",
                          action: "shared insights about evangelistic barriers",
                          time: "2 hours ago",
                          likes: 12,
                          replies: 4
                        },
                        {
                          user: "Maria Santos", 
                          action: "completed the Team Dynamics assessment",
                          time: "4 hours ago",
                          likes: 8,
                          replies: 2
                        },
                        {
                          user: "John Miller",
                          action: "posted reflection on shepherding challenges",
                          time: "1 day ago",
                          likes: 15,
                          replies: 7
                        }
                      ].map((activity, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 font-semibold text-sm">
                                {activity.user.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-900">
                                <span className="font-medium">{activity.user}</span> {activity.action}
                              </p>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                <span>{activity.time}</span>
                                <button className="flex items-center space-x-1 hover:text-gray-700">
                                  <Heart className="w-4 h-4" />
                                  <span>{activity.likes}</span>
                                </button>
                                <button className="flex items-center space-x-1 hover:text-gray-700">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>{activity.replies}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Community Stats & Events */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                      Your Community Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Posts Created</span>
                        <span className="font-semibold">23</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Likes Received</span>
                        <span className="font-semibold">156</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Replies Given</span>
                        <span className="font-semibold">89</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">People Helped</span>
                        <span className="font-semibold">34</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {upcomingEvents.slice(0, 3).map((event) => (
                        <div key={event.id} className="p-3 border rounded-lg">
                          <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                          <p className="text-gray-600 text-xs mt-1">{event.date}</p>
                          <Button size="sm" className="mt-2 h-6 text-xs w-full">
                            Join Event
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Personal Development Goals</h3>
              <Button onClick={() => setShowGoalModal(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Goal
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {personalGoals.map((goal) => (
                <Card key={goal.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">{goal.title}</h4>
                      <Badge className={
                        goal.status === 'ahead' ? 'bg-green-100 text-green-700' :
                        goal.status === 'on-track' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }>
                        {goal.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{goal.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-medium">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Target: {goal.target}</span>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Profile Information */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2 text-blue-600" />
                      Profile Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" value={userData.name} />
                        </div>
                        <div>
                          <Label htmlFor="role">Role/Title</Label>
                          <Input id="role" value={userData.role} />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="church">Church/Organization</Label>
                          <Input id="church" value={userData.church} />
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" placeholder="City, State/Country" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea 
                          id="bio" 
                          placeholder="Tell us about your ministry journey..."
                          className="min-h-[100px]"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Button variant="outline">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Photo
                        </Button>
                        <Button>
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* APEST Profile */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Compass className="w-5 h-5 mr-2 text-purple-600" />
                      APEST Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Shield className="w-8 h-8 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Primary: Shepherding</h4>
                        <p className="text-sm text-gray-600">Score: 94%</p>
                      </div>
                      
                      <div className="border-t pt-4">
                        <h5 className="font-medium text-gray-900 mb-2">Secondary Gifts</h5>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Teaching</span>
                            <span className="text-sm font-medium">87%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Evangelistic</span>
                            <span className="text-sm font-medium">79%</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/ebook-example-two/apest-quiz">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Retake Assessment
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900">Email Notifications</h5>
                          <p className="text-sm text-gray-600">Weekly progress updates</p>
                        </div>
                        <input type="checkbox" defaultChecked className="text-blue-600" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900">Community Digest</h5>
                          <p className="text-sm text-gray-600">Daily community highlights</p>
                        </div>
                        <input type="checkbox" defaultChecked className="text-blue-600" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900">Event Reminders</h5>
                          <p className="text-sm text-gray-600">Upcoming live sessions</p>
                        </div>
                        <input type="checkbox" defaultChecked className="text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
