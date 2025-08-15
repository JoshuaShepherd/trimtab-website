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
  Users,
  MessageCircle,
  Heart,
  Share2,
  Calendar,
  Video,
  Mic,
  Camera,
  Globe,
  Star,
  ArrowRight,
  ArrowUp,
  Play,
  CheckCircle,
  Clock,
  BookOpen,
  Target,
  Award,
  TrendingUp,
  Eye,
  Shield,
  Brain,
  Lightbulb,
  Zap,
  Building,
  Settings,
  Bell,
  User,
  Search,
  Filter,
  Grid,
  List,
  Download,
  Bookmark,
  Flag,
  Navigation,
  Map,
  Telescope,
  Radar,
  Activity,
  PieChart,
  LineChart,
  Layers,
  Archive,
  HelpCircle,
  Info,
  AlertCircle,
  Send,
  ThumbsUp,
  Reply,
  MoreHorizontal,
  Pin,
  Edit,
  Trash2,
  UserPlus,
  UserCheck,
  Crown,
  Shield as ShieldIcon,
  Compass,
  Hash,
  Plus,
  Minus,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  FileText,
  Image,
  Headphones,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  WifiOff,
  CloudDownload,
  Volume2,
  VolumeX,
  PlayCircle,
  PauseCircle,
  FastForward,
  SkipForward,
  SkipBack,
  Maximize,
  Minimize,
  Home,
  Library,
  MessageSquare,
  BarChart3,
  Menu,
  X,
  ChevronLeft,
  RotateCcw,
  Repeat,
  Shuffle,
  Share,
  Copy,
  Save,
  Printer,
  QrCode,
  MousePointer,
  SunMoon,
  Moon,
  Sun,
  VolumeIcon,
  ChevronsUp,
  ChevronsDown,
  MoreVertical,
  Pause,
  StopCircle,
  CirclePlay,
  Volume1,
  Volume
} from "lucide-react";
import Footer from "@/components/Footer";

export default function WebsiteOptionMobile() {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

  // Mobile-optimized quick access items
  const quickAccess = [
    {
      id: "daily-lesson",
      title: "Today's Lesson",
      subtitle: "Chapter 3: Understanding Shepherding",
      icon: BookOpen,
      progress: 65,
      duration: "12 min left",
      color: "bg-blue-500"
    },
    {
      id: "quiz",
      title: "APEST Assessment",
      subtitle: "Discover your primary gift",
      icon: Target,
      progress: 0,
      duration: "15 min",
      color: "bg-purple-500"
    },
    {
      id: "community",
      title: "Community Chat",
      subtitle: "3 new messages",
      icon: MessageCircle,
      progress: null,
      duration: "Active now",
      color: "bg-green-500"
    },
    {
      id: "live-session",
      title: "Live Q&A with Tim",
      subtitle: "Starting in 2 hours",
      icon: Video,
      progress: null,
      duration: "Join event",
      color: "bg-red-500"
    }
  ];

  // Mobile learning cards
  const mobileCards = [
    {
      id: 1,
      title: "APEST Foundation Course",
      description: "Complete introduction to the five ministry gifts",
      thumbnail: "/api/placeholder/150/100",
      duration: "6 hours",
      lessons: 24,
      progress: 45,
      type: "Course",
      difficulty: "Beginner",
      downloadable: true,
      offline: true
    },
    {
      id: 2,
      title: "Leadership Essentials",
      description: "Core leadership principles for ministry development",
      thumbnail: "/api/placeholder/150/100",
      duration: "4 hours",
      lessons: 18,
      progress: 78,
      type: "Series",
      difficulty: "Intermediate",
      downloadable: true,
      offline: false
    },
    {
      id: 3,
      title: "Prophetic Ministry Guide",
      description: "Developing prophetic gifts in modern context",
      thumbnail: "/api/placeholder/150/100",
      duration: "3.5 hours",
      lessons: 15,
      progress: 23,
      type: "Workshop",
      difficulty: "Advanced",
      downloadable: false,
      offline: false
    },
    {
      id: 4,
      title: "Church Planting Toolkit",
      description: "Practical resources for starting new churches",
      thumbnail: "/api/placeholder/150/100",
      duration: "8 hours",
      lessons: 32,
      progress: 0,
      type: "Toolkit",
      difficulty: "Advanced",
      downloadable: true,
      offline: true
    }
  ];

  // Current activity/session
  const currentActivity = {
    title: "Understanding Your APEST DNA",
    chapter: "Chapter 3: The Shepherd's Heart",
    progress: 67,
    totalTime: "45:30",
    currentTime: "30:15",
    nextUp: "Chapter 4: Evangelistic Fire"
  };

  // Mobile stats
  const mobileStats = {
    hoursThisWeek: 12.5,
    lessonsCompleted: 34,
    currentStreak: 7,
    totalProgress: 56
  };

  // Navigation items
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "learn", label: "Learn", icon: BookOpen },
    { id: "community", label: "Community", icon: Users },
    { id: "progress", label: "Progress", icon: BarChart3 },
    { id: "profile", label: "Profile", icon: User }
  ];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Advanced': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Mobile Header */}
      <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-50 shadow-sm`}>
        <div className="px-4 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="p-2"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">APEST</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-2"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="sm" className="p-2 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className={`fixed left-0 top-0 h-full w-80 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl z-50`}>
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-xl">APEST Mobile</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Quick Actions</h3>
                <div className="space-y-1">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-3" />
                    Download for Offline
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-3" />
                    App Settings
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <HelpCircle className="w-4 h-4 mr-3" />
                    Help & Support
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Accessibility</h3>
                <div className="space-y-1">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Volume2 className="w-4 h-4 mr-3" />
                    Audio Controls
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Eye className="w-4 h-4 mr-3" />
                    Text Size
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Smartphone className="w-4 h-4 mr-3" />
                    Mobile Preferences
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Connection Status */}
      <div className={`px-4 py-2 ${offlineMode ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'} text-center text-sm`}>
        <div className="flex items-center justify-center space-x-2">
          {offlineMode ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
          <span>{offlineMode ? 'Offline Mode - Downloaded content available' : 'Connected - All features available'}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="home" className="p-4 space-y-6">
            {/* Quick Access */}
            <div>
              <h2 className="text-xl font-bold mb-4">Quick Access</h2>
              <div className="grid grid-cols-1 gap-3">
                {quickAccess.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                          <p className="text-gray-600 text-sm truncate">{item.subtitle}</p>
                          {item.progress !== null && (
                            <div className="mt-2">
                              <Progress value={item.progress} className="h-2" />
                              <span className="text-xs text-gray-500 mt-1">{item.progress}% complete</span>
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-gray-500">{item.duration}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 mt-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Current Activity */}
            {currentActivity && (
              <Card className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">Continue Learning</h3>
                    <Badge variant="secondary">In Progress</Badge>
                  </div>
                  
                  <h4 className="font-medium text-gray-800 mb-1">{currentActivity.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{currentActivity.chapter}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium">{currentActivity.progress}%</span>
                      </div>
                      <Progress value={currentActivity.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Button size="sm" onClick={togglePlayPause}>
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                        <span className="text-sm text-gray-600">
                          {currentActivity.currentTime} / {currentActivity.totalTime}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        Continue
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Weekly Stats */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-4">This Week</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{mobileStats.hoursThisWeek}</div>
                    <div className="text-sm text-gray-600">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{mobileStats.lessonsCompleted}</div>
                    <div className="text-sm text-gray-600">Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{mobileStats.currentStreak}</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{mobileStats.totalProgress}%</div>
                    <div className="text-sm text-gray-600">Overall</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learn" className="p-4 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Learning Library</h2>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search courses, lessons..." className="pl-10" />
            </div>

            {/* Learning Cards */}
            <div className="space-y-4">
              {mobileCards.map((card) => (
                <Card key={card.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex">
                      <img 
                        src={card.thumbnail} 
                        alt={card.title}
                        className="w-24 h-20 object-cover flex-shrink-0"
                      />
                      <div className="p-4 flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm leading-tight truncate">{card.title}</h3>
                            <p className="text-gray-600 text-xs leading-tight truncate">{card.description}</p>
                          </div>
                          <div className="flex items-center space-x-1 ml-2">
                            {card.offline && <Smartphone className="w-3 h-3 text-green-600" />}
                            {card.downloadable && <Download className="w-3 h-3 text-blue-600" />}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                          <span>{card.lessons} lessons • {card.duration}</span>
                          <Badge className={getDifficultyColor(card.difficulty)}>
                            {card.difficulty}
                          </Badge>
                        </div>
                        
                        {card.progress > 0 && (
                          <div className="mb-2">
                            <Progress value={card.progress} className="h-1" />
                            <span className="text-xs text-gray-500">{card.progress}% complete</span>
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="flex-1 h-8">
                            {card.progress > 0 ? 'Continue' : 'Start'}
                          </Button>
                          <Button variant="outline" size="sm" className="h-8">
                            <MoreVertical className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community" className="p-4 space-y-6">
            <h2 className="text-xl font-bold">Community</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-center py-8">
                    <MessageCircle className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Connect with Fellow Learners</h3>
                    <p className="text-gray-600 text-sm mb-4">Join discussions, ask questions, and share insights with the APEST community</p>
                    <Button size="sm">
                      <Users className="w-4 h-4 mr-2" />
                      Join Community
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="p-4 space-y-6">
            <h2 className="text-xl font-bold">Your Progress</h2>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Learning Analytics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Overall Progress</span>
                      <span className="text-sm font-medium">{mobileStats.totalProgress}%</span>
                    </div>
                    <Progress value={mobileStats.totalProgress} className="h-3" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">{mobileStats.hoursThisWeek}</div>
                      <div className="text-xs text-gray-600">Hours This Week</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">{mobileStats.lessonsCompleted}</div>
                      <div className="text-xs text-gray-600">Lessons Completed</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-orange-600">{mobileStats.currentStreak}</div>
                      <div className="text-xs text-gray-600">Day Streak</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="p-4 space-y-6">
            <h2 className="text-xl font-bold">Profile</h2>
            
            <Card>
              <CardContent className="p-4">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">John Student</h3>
                  <p className="text-gray-600 text-sm">Learning APEST Foundation</p>
                </div>
                
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-3" />
                    Account Settings
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-3" />
                    Downloaded Content
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Bell className="w-4 h-4 mr-3" />
                    Notifications
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <HelpCircle className="w-4 h-4 mr-3" />
                    Help & Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t z-40`}>
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center space-y-1 ${
                activeTab === item.id 
                  ? 'text-blue-600' 
                  : darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mini Player (when audio/video is playing) */}
      {isPlaying && (
        <div className={`fixed bottom-16 left-0 right-0 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t z-30 p-3`}>
          <div className="flex items-center space-x-3">
            <Button size="sm" variant="ghost" onClick={togglePlayPause} className="p-2">
              <Pause className="w-4 h-4" />
            </Button>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{currentActivity.chapter}</h4>
              <Progress value={currentActivity.progress} className="h-1 mt-1" />
            </div>
            <Button size="sm" variant="ghost" className="p-2">
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
