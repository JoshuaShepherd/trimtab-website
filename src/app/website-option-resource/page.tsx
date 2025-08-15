"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Library,
  Database,
  FolderOpen,
  Tag,
  SortAsc,
  SortDesc,
  RefreshCw,
  Shuffle,
  MonitorPlay,
  FileAudio,
  FileImage,
  FileVideo,
  Link2,
  ExternalLink as ExternalLinkIcon,
  Quote,
  Rss,
  Newspaper,
  BookmarkX,
  Wifi,
  WifiOff,
  CloudDownload,
  HardDrive,
  Smartphone,
  Tablet,
  Monitor,
  Tv,
  Volume2,
  VolumeX,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Repeat,
  FastForward,
  Rewind,
  Maximize,
  Minimize,
  RotateCcw,
  Share,
  Copy,
  Scissors,
  Clipboard,
  Save,
  Printer,
  QrCode,
  Scan,
  MousePointer,
  Keyboard,
  Mic2,
  Camera as CameraIcon,
  Webcam,
  ScreenShare,
  Upload
} from "lucide-react";
import Footer from "@/components/Footer";

export default function WebsiteOptionResource() {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [activeTab, setActiveTab] = useState("library");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Resource Library Stats
  const libraryStats = {
    totalResources: 8450,
    videosCount: 2340,
    articlesCount: 3120,
    booksCount: 890,
    assessmentsCount: 450,
    podcastsCount: 980,
    toolsCount: 670,
    downloadableResources: 1890,
    hoursOfContent: 2340,
    newThisWeek: 47
  };

  // Featured Collections
  const featuredCollections = [
    {
      id: "apest-fundamentals",
      title: "APEST Fundamentals",
      description: "Complete foundation course covering all five ministry gifts with interactive assessments",
      resourceCount: 127,
      completionTime: "12 hours",
      difficulty: "Beginner",
      category: "Course Collection",
      thumbnail: "/api/placeholder/300/200",
      author: "Tim Catchim",
      rating: 4.9,
      enrolled: 3420,
      tags: ["Foundation", "Assessment", "Interactive"]
    },
    {
      id: "leadership-development",
      title: "Leadership Development Masterclass",
      description: "Advanced leadership training focused on ministry excellence and team building",
      resourceCount: 89,
      completionTime: "18 hours",
      difficulty: "Advanced",
      category: "Masterclass",
      thumbnail: "/api/placeholder/300/200",
      author: "Multiple Experts",
      rating: 4.8,
      enrolled: 1890,
      tags: ["Leadership", "Teams", "Advanced"]
    },
    {
      id: "church-planting-toolkit",
      title: "Church Planting Toolkit",
      description: "Comprehensive resources for apostolic leaders starting new ministry ventures",
      resourceCount: 156,
      completionTime: "25 hours",
      difficulty: "Intermediate",
      category: "Toolkit",
      thumbnail: "/api/placeholder/300/200",
      author: "Apostolic Network",
      rating: 4.7,
      enrolled: 1230,
      tags: ["Church Planting", "Apostolic", "Practical"]
    },
    {
      id: "prophetic-ministry-guide",
      title: "Prophetic Ministry Guide",
      description: "Essential resources for developing and exercising prophetic gifts in ministry context",
      resourceCount: 93,
      completionTime: "14 hours", 
      difficulty: "Intermediate",
      category: "Specialized Guide",
      thumbnail: "/api/placeholder/300/200",
      author: "Prophetic Council",
      rating: 4.8,
      enrolled: 980,
      tags: ["Prophetic", "Discernment", "Ministry"]
    }
  ];

  // Resource Categories
  const resourceCategories = [
    {
      id: "videos",
      name: "Video Library",
      icon: Video,
      count: 2340,
      description: "Teaching videos, webinars, and conference sessions",
      subcategories: ["Teachings", "Webinars", "Conferences", "Testimonials"]
    },
    {
      id: "articles",
      name: "Articles & Blogs",
      icon: FileText,
      count: 3120,
      description: "In-depth articles and thought leadership pieces",
      subcategories: ["Theology", "Practical", "Research", "Opinion"]
    },
    {
      id: "books",
      name: "Digital Books",
      icon: BookOpen,
      count: 890,
      description: "Complete books and extensive study materials",
      subcategories: ["Textbooks", "Devotionals", "Biographies", "Reference"]
    },
    {
      id: "assessments",
      name: "Assessments", 
      icon: Target,
      count: 450,
      description: "Gift assessments and development tools",
      subcategories: ["APEST Tests", "Personality", "Leadership", "Spiritual"]
    },
    {
      id: "podcasts",
      name: "Podcast Library",
      icon: Headphones,
      count: 980,
      description: "Audio content for learning on the go",
      subcategories: ["Interviews", "Teachings", "Discussions", "Stories"]
    },
    {
      id: "tools",
      name: "Practical Tools",
      icon: Settings,
      count: 670,
      description: "Templates, worksheets, and implementation guides",
      subcategories: ["Templates", "Worksheets", "Checklists", "Plans"]
    }
  ];

  // Popular Resources
  const popularResources = [
    {
      id: 1,
      title: "Understanding Your APEST DNA",
      type: "Video Series",
      duration: "2 hours 45 minutes",
      author: "Tim Catchim",
      thumbnail: "/api/placeholder/200/120",
      rating: 4.9,
      views: 45200,
      downloads: 8900,
      description: "Comprehensive video series breaking down each ministry gift with practical application examples",
      tags: ["Foundation", "Video", "Assessment"],
      category: "Education",
      difficulty: "Beginner",
      lastUpdated: "2 weeks ago",
      format: "HD Video",
      size: "1.2 GB"
    },
    {
      id: 2,
      title: "The Shepherd's Heart: Pastoral Excellence in Modern Ministry",
      type: "Digital Book",
      duration: "6 hour read",
      author: "Dr. Sarah Chen",
      thumbnail: "/api/placeholder/200/120",
      rating: 4.8,
      views: 23400,
      downloads: 12300,
      description: "Deep dive into shepherding ministry with case studies and practical wisdom for pastoral leaders",
      tags: ["Shepherding", "Book", "Pastoral"],
      category: "Literature",
      difficulty: "Intermediate",
      lastUpdated: "1 month ago",
      format: "PDF/ePub",
      size: "45 MB"
    },
    {
      id: 3,
      title: "Prophetic Discernment Assessment Tool",
      type: "Interactive Assessment",
      duration: "45 minutes",
      author: "Prophetic Institute",
      thumbnail: "/api/placeholder/200/120",
      rating: 4.7,
      views: 18900,
      downloads: 15600,
      description: "Advanced assessment tool for measuring and developing prophetic sensitivity and discernment",
      tags: ["Prophetic", "Assessment", "Interactive"],
      category: "Assessment",
      difficulty: "Intermediate",
      lastUpdated: "1 week ago",
      format: "Web App",
      size: "Online Tool"
    },
    {
      id: 4,
      title: "Evangelistic Strategy Podcast Series",
      type: "Podcast Collection",
      duration: "8 hours 30 minutes",
      author: "Evangelism Network",
      thumbnail: "/api/placeholder/200/120",
      rating: 4.6,
      views: 31200,
      downloads: 19800,
      description: "12-part podcast series featuring successful evangelists sharing strategies and testimonies",
      tags: ["Evangelistic", "Podcast", "Strategy"],
      category: "Audio",
      difficulty: "All Levels",
      lastUpdated: "3 days ago",
      format: "MP3",
      size: "480 MB"
    },
    {
      id: 5,
      title: "Apostolic Leadership Framework Toolkit",
      type: "Resource Kit",
      duration: "Self-paced",
      author: "Leadership Institute",
      thumbnail: "/api/placeholder/200/120",
      rating: 4.8,
      views: 15600,
      downloads: 8700,
      description: "Complete toolkit with templates, assessments, and guides for apostolic leadership development",
      tags: ["Apostolic", "Leadership", "Toolkit"],
      category: "Tools",
      difficulty: "Advanced",
      lastUpdated: "2 weeks ago",
      format: "Multiple Files",
      size: "234 MB"
    },
    {
      id: 6,
      title: "Teaching Excellence Masterclass",
      type: "Video Course",
      duration: "4 hours 15 minutes",
      author: "Education Experts",
      thumbnail: "/api/placeholder/200/120",
      rating: 4.9,
      views: 27800,
      downloads: 11200,
      description: "Masterclass on effective teaching methods, curriculum design, and transformational education",
      tags: ["Teaching", "Education", "Masterclass"],
      category: "Education", 
      difficulty: "Advanced",
      lastUpdated: "1 month ago",
      format: "HD Video",
      size: "2.1 GB"
    }
  ];

  // Recent Updates
  const recentUpdates = [
    {
      id: 1,
      title: "New APEST Assessment 3.0 Released",
      type: "Assessment Update",
      date: "2 days ago",
      description: "Enhanced assessment with improved accuracy and detailed gift combination analysis",
      icon: Target,
      badge: "New"
    },
    {
      id: 2,
      title: "Leadership Development Video Series Added",
      type: "Content Addition",
      date: "5 days ago", 
      description: "12 new videos covering advanced leadership principles and team dynamics",
      icon: Video,
      badge: "Updated"
    },
    {
      id: 3,
      title: "Mobile App Resources Now Available",
      type: "Platform Update",
      date: "1 week ago",
      description: "All resources now optimized for mobile access and offline downloading",
      icon: Smartphone,
      badge: "Enhanced"
    }
  ];

  // Quick Filters
  const quickFilters = [
    { id: "newest", label: "Newest First", icon: Clock },
    { id: "popular", label: "Most Popular", icon: TrendingUp },
    { id: "rating", label: "Highest Rated", icon: Star },
    { id: "duration", label: "Shortest First", icon: PlayCircle },
    { id: "downloads", label: "Most Downloaded", icon: Download }
  ];

  // Available Tags
  const availableTags = [
    "Foundation", "Advanced", "Leadership", "Assessment", "Video", "Audio", "Book", 
    "Interactive", "Practical", "Theological", "Pastoral", "Evangelistic", "Prophetic", 
    "Apostolic", "Teaching", "Shepherding", "Team Building", "Church Planting", 
    "Spiritual Formation", "Ministry Development", "Coaching", "Mentoring"
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education': return BookOpen;
      case 'Literature': return FileText;
      case 'Assessment': return Target;
      case 'Audio': return Headphones;
      case 'Tools': return Settings;
      case 'Video': return Video;
      default: return FileText;
    }
  };

  const getTypeIcon = (type: string) => {
    if (type.includes('Video')) return Video;
    if (type.includes('Book')) return BookOpen;
    if (type.includes('Assessment')) return Target;
    if (type.includes('Podcast')) return Headphones;
    if (type.includes('Tool')) return Settings;
    return FileText;
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
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
                  <Library className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">APEST Resources</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Library</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Collections</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Tools</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Community</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">My Library</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search resources..." 
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Button variant="ghost" size="sm">
                <Bookmark className="w-5 h-5" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Library Stats Banner */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">APEST Resource Library</h1>
              <p className="text-gray-600">Comprehensive collection of ministry development resources</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Upload Resource
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Plus className="w-4 h-4 mr-2" />
                Create Collection
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{libraryStats.totalResources.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{libraryStats.hoursOfContent.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Hours of Content</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{libraryStats.downloadableResources.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Downloadable</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{libraryStats.newThisWeek}</div>
              <div className="text-sm text-gray-600">Added This Week</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">6</div>
              <div className="text-sm text-gray-600">Resource Categories</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="library">Resource Library</TabsTrigger>
            <TabsTrigger value="collections">Featured Collections</TabsTrigger>
            <TabsTrigger value="categories">Browse Categories</TabsTrigger>
            <TabsTrigger value="tools">Search & Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="space-y-8">
            {/* Search and Filter Controls */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex-1 min-w-[300px]">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input 
                        placeholder="Search by title, author, content, or tags..." 
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="videos">Videos</SelectItem>
                      <SelectItem value="articles">Articles</SelectItem>
                      <SelectItem value="books">Books</SelectItem>
                      <SelectItem value="assessments">Assessments</SelectItem>
                      <SelectItem value="podcasts">Podcasts</SelectItem>
                      <SelectItem value="tools">Tools</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="duration">Shortest First</SelectItem>
                      <SelectItem value="downloads">Most Downloaded</SelectItem>
                    </SelectContent>
                  </Select>
                  
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

                {/* Quick Filters */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium text-gray-700 py-1">Quick Filters:</span>
                  {quickFilters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant={sortBy === filter.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy(filter.id)}
                      className="text-xs"
                    >
                      <filter.icon className="w-3 h-3 mr-1" />
                      {filter.label}
                    </Button>
                  ))}
                </div>

                {/* Tag Filters */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Filter by Tags:</span>
                    {selectedTags.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedTags([])}
                        className="text-xs text-red-600"
                      >
                        Clear All
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {availableTags.map((tag) => (
                      <Button
                        key={tag}
                        variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggleTag(tag)}
                        className="text-xs h-6"
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resource Grid/List */}
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {popularResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow group">
                  {viewMode === 'grid' ? (
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={resource.thumbnail} 
                          alt={resource.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className={getDifficultyColor(resource.difficulty)}>
                            {resource.difficulty}
                          </Badge>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {resource.duration}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {(() => {
                              const TypeIcon = getTypeIcon(resource.type);
                              return <TypeIcon className="w-4 h-4 text-blue-600" />;
                            })()}
                            <span className="text-sm text-gray-600">{resource.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{resource.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{resource.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">{resource.description}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {resource.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <span>By {resource.author}</span>
                          <span>{resource.views.toLocaleString()} views</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="flex-1">
                            <Play className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  ) : (
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={resource.thumbnail} 
                          alt={resource.title}
                          className="w-24 h-16 object-cover rounded flex-shrink-0"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                {(() => {
                                  const TypeIcon = getTypeIcon(resource.type);
                                  return <TypeIcon className="w-4 h-4 text-blue-600" />;
                                })()}
                                <span className="text-sm text-gray-600">{resource.type}</span>
                                <Badge className={getDifficultyColor(resource.difficulty)}>
                                  {resource.difficulty}
                                </Badge>
                              </div>
                              <h3 className="font-bold text-gray-900 mb-1">{resource.title}</h3>
                              <p className="text-gray-600 text-sm">{resource.description}</p>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span>{resource.rating}</span>
                              </div>
                              <span>{resource.views.toLocaleString()} views</span>
                              <span>{resource.duration}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>By {resource.author}</span>
                              <span>Updated {resource.lastUpdated}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Button size="sm">
                                <Play className="w-4 h-4 mr-2" />
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="collections" className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Featured Collections</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Collection
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredCollections.map((collection) => (
                <Card key={collection.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={collection.thumbnail} 
                      alt={collection.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900">
                        {collection.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-sm">{collection.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{collection.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-3">{collection.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">Resources:</span>
                        <span className="font-medium ml-1">{collection.resourceCount}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium ml-1">{collection.completionTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Level:</span>
                        <Badge className={`ml-1 ${getDifficultyColor(collection.difficulty)}`}>
                          {collection.difficulty}
                        </Badge>
                      </div>
                      <div>
                        <span className="text-gray-600">Enrolled:</span>
                        <span className="font-medium ml-1">{collection.enrolled.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {collection.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">By {collection.author}</span>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button size="sm">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Start Collection
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <category.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-gray-900">{category.name}</h3>
                          <span className="text-xl font-bold text-blue-600">{category.count.toLocaleString()}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{category.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-700">Subcategories:</h4>
                          <div className="flex flex-wrap gap-1">
                            {category.subcategories.map((sub, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {sub}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4 group-hover:bg-blue-600 transition-colors">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Explore {category.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Advanced Search & Tools</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Advanced Search */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Search className="w-5 h-5 mr-2" />
                      Advanced Search
                    </CardTitle>
                    <CardDescription>Find exactly what you're looking for with detailed filters</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Content Type</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="All Types" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="video">Video Content</SelectItem>
                            <SelectItem value="text">Text Content</SelectItem>
                            <SelectItem value="audio">Audio Content</SelectItem>
                            <SelectItem value="interactive">Interactive Tools</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Difficulty Level</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="All Levels" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Levels</SelectItem>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Duration Range</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Any Duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Any Duration</SelectItem>
                            <SelectItem value="short">Under 30 minutes</SelectItem>
                            <SelectItem value="medium">30 minutes - 2 hours</SelectItem>
                            <SelectItem value="long">Over 2 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">APEST Focus</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="All Gifts" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Gifts</SelectItem>
                            <SelectItem value="apostolic">Apostolic</SelectItem>
                            <SelectItem value="prophetic">Prophetic</SelectItem>
                            <SelectItem value="evangelistic">Evangelistic</SelectItem>
                            <SelectItem value="shepherding">Shepherding</SelectItem>
                            <SelectItem value="teaching">Teaching</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Publication Date</label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input type="date" placeholder="From" />
                        <Input type="date" placeholder="To" />
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      <Search className="w-4 h-4 mr-2" />
                      Apply Advanced Search
                    </Button>
                  </CardContent>
                </Card>

                {/* Resource Comparison Tool */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Archive className="w-5 h-5 mr-2" />
                      Resource Comparison
                    </CardTitle>
                    <CardDescription>Compare up to 3 resources side by side</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-gray-500">
                      <Archive className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Select resources from the library to compare their features, ratings, and content</p>
                      <Button variant="outline" className="mt-4">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Resource to Compare
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Recent Updates */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Recent Updates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUpdates.map((update) => (
                        <div key={update.id} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <update.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-medium text-gray-900 text-sm">{update.title}</h4>
                              <Badge variant="secondary" className="text-xs">
                                {update.badge}
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-xs">{update.description}</p>
                            <span className="text-gray-500 text-xs">{update.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Download Manager */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Manager
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Queue Status:</span>
                        <span className="font-medium">2 items pending</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <div className="text-xs text-gray-500 text-center">
                        Downloading: Leadership Toolkit.zip (65%)
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        View All Downloads
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChart className="w-5 h-5 mr-2" />
                      Your Library Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Resources Accessed:</span>
                        <span className="font-medium">247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Watch Time:</span>
                        <span className="font-medium">42 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Favorites:</span>
                        <span className="font-medium">18</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Downloads:</span>
                        <span className="font-medium">89</span>
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
