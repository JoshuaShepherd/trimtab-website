"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Headphones
} from "lucide-react";
import Footer from "@/components/Footer";

export default function WebsiteOptionCommunity() {
  const [activeTab, setActiveTab] = useState("feed");
  const [selectedGroup, setSelectedGroup] = useState("shepherding-circle");
  const [postContent, setPostContent] = useState("");
  const [showComments, setShowComments] = useState<{[key: string]: boolean}>({});

  // Community Stats
  const communityStats = {
    totalMembers: 5420,
    activeToday: 234,
    discussionsToday: 67,
    studyGroups: 187,
    mentorConnections: 892,
    liveEvents: 12
  };

  // Community Feed Posts
  const feedPosts = [
    {
      id: 1,
      author: {
        name: "Dr. Sarah Chen",
        role: "Senior Pastor",
        primaryGift: "Shepherding",
        avatar: "/api/placeholder/50/50",
        verified: true,
        level: "Expert"
      },
      content: "Just finished facilitating a breakthrough session with our leadership team using APEST principles. The clarity that comes when people understand their gifts is incredible! We identified 3 apostolic leaders we hadn't recognized before. How has APEST transformed your team dynamics?",
      timestamp: "2 hours ago",
      engagement: {
        likes: 47,
        comments: 12,
        shares: 8
      },
      tags: ["Leadership", "Team Dynamics", "Apostolic"],
      type: "insight",
      pinned: false
    },
    {
      id: 2,
      author: {
        name: "Marcus Johnson", 
        role: "Youth Pastor",
        primaryGift: "Evangelistic",
        avatar: "/api/placeholder/50/50",
        verified: false,
        level: "Advanced"
      },
      content: "Struggling with how to develop prophetic voices in our youth ministry. They have so much spiritual sensitivity, but I'm not sure how to guide them well. Any shepherds or prophetic leaders have advice?",
      timestamp: "4 hours ago",
      engagement: {
        likes: 23,
        comments: 18,
        shares: 3
      },
      tags: ["Youth Ministry", "Prophetic", "Mentoring"],
      type: "question",
      pinned: false
    },
    {
      id: 3,
      author: {
        name: "Tim Catchim",
        role: "APEST Expert & Author",
        primaryGift: "Teaching",
        avatar: "/api/placeholder/50/50",
        verified: true,
        level: "Authority"
      },
      content: "Exciting update! Just released a new assessment tool for identifying secondary gifts. Early testing shows 94% accuracy in gift combination mapping. This could revolutionize how we develop balanced ministry teams. Beta testing starts next week - who's interested?",
      timestamp: "6 hours ago",
      engagement: {
        likes: 156,
        comments: 34,
        shares: 67
      },
      tags: ["Assessment", "Innovation", "Beta Testing"],
      type: "announcement",
      pinned: true
    },
    {
      id: 4,
      author: {
        name: "Maria Santos",
        role: "Worship Director",
        primaryGift: "Prophetic",
        avatar: "/api/placeholder/50/50", 
        verified: false,
        level: "Intermediate"
      },
      content: "Beautiful worship moment this weekend when our team operated in perfect APEST harmony. Our evangelistic leader drew people in, prophetic voices brought spiritual depth, shepherds created safe space, teacher provided biblical grounding, and apostolic vision cast direction. Unity in diversity! 🙌",
      timestamp: "1 day ago",
      engagement: {
        likes: 89,
        comments: 15,
        shares: 23
      },
      tags: ["Worship", "Team Unity", "Testimony"],
      type: "celebration",
      pinned: false
    }
  ];

  // Study Groups
  const studyGroups = [
    {
      id: "shepherding-circle",
      name: "Shepherding Circle",
      description: "Caring leaders focused on pastoral excellence and emotional intelligence",
      members: 234,
      activeNow: 12,
      category: "Gift Focus",
      privacy: "Public",
      recentActivity: "Active 15 min ago",
      moderators: ["Dr. Sarah Chen", "Pastor Mike Wilson"],
      topics: ["Pastoral Care", "Emotional Intelligence", "Conflict Resolution", "Spiritual Direction"]
    },
    {
      id: "prophetic-voices",
      name: "Prophetic Voices",
      description: "Developing discernment and delivering truth with grace and timing",
      members: 156,
      activeNow: 8,
      category: "Gift Focus", 
      privacy: "Public",
      recentActivity: "Active 32 min ago",
      moderators: ["Prophet James Lee", "Dr. Maria Santos"],
      topics: ["Spiritual Discernment", "Prophetic Ministry", "Truth & Grace", "Intercession"]
    },
    {
      id: "evangelistic-edge",
      name: "Evangelistic Edge",
      description: "Passionate about reaching the lost and crossing cultural boundaries",
      members: 298,
      activeNow: 18,
      category: "Gift Focus",
      privacy: "Public", 
      recentActivity: "Active 8 min ago",
      moderators: ["Evangelist David Kim", "Pastor Lisa Chen"],
      topics: ["Cross-Cultural Ministry", "Digital Evangelism", "Apologetics", "Outreach Strategy"]
    },
    {
      id: "apostolic-pioneers",
      name: "Apostolic Pioneers",
      description: "Visionary leaders pioneering new ministries and breaking new ground",
      members: 187,
      activeNow: 15,
      category: "Gift Focus",
      privacy: "Public",
      recentActivity: "Active 22 min ago",
      moderators: ["Dr. John Miller", "Apostle Grace Wang"],
      topics: ["Church Planting", "Innovation", "Leadership Development", "Systems Thinking"]
    },
    {
      id: "teaching-masters",
      name: "Teaching Masters",
      description: "Committed to biblical accuracy and transformational education",
      members: 321,
      activeNow: 21,
      category: "Gift Focus",
      privacy: "Public",
      recentActivity: "Active 5 min ago",
      moderators: ["Dr. Tim Catchim", "Professor Sarah Johnson"],
      topics: ["Biblical Exegesis", "Curriculum Development", "Learning Theory", "Theological Education"]
    },
    {
      id: "new-leaders",
      name: "Emerging Leaders Cohort 2025",
      description: "New ministry leaders discovering their gifts and building foundations",
      members: 445,
      activeNow: 31,
      category: "Development",
      privacy: "Public",
      recentActivity: "Active 3 min ago",
      moderators: ["Coach Maria Rodriguez", "Mentor David Park"],
      topics: ["Gift Discovery", "Leadership Foundations", "Mentoring", "Career Development"]
    }
  ];

  // Live Events
  const liveEvents = [
    {
      id: 1,
      title: "Weekly APEST Q&A with Tim Catchim",
      description: "Live session answering your questions about ministry gifts and development",
      host: "Tim Catchim",
      time: "Today, 2:00 PM CST",
      duration: "60 minutes",
      attendees: 342,
      maxAttendees: 500,
      type: "Q&A Session",
      category: "Expert Session"
    },
    {
      id: 2,
      title: "Shepherding in Crisis Situations",
      description: "Practical workshop on providing pastoral care during difficult times",
      host: "Dr. Sarah Chen",
      time: "Tomorrow, 1:00 PM CST",
      duration: "90 minutes",
      attendees: 187,
      maxAttendees: 250,
      type: "Workshop",
      category: "Skill Development"
    },
    {
      id: 3,
      title: "Prophetic Ministry Panel Discussion",
      description: "Expert panel discussing contemporary prophetic ministry and discernment",
      host: "Multiple Speakers",
      time: "Friday, 7:00 PM CST",
      duration: "120 minutes",
      attendees: 234,
      maxAttendees: 400,
      type: "Panel",
      category: "Expert Session"
    }
  ];

  // Mentoring Connections
  const mentorConnections = [
    {
      id: 1,
      mentor: {
        name: "Dr. Patricia Williams",
        role: "Executive Pastor",
        primaryGift: "Apostolic",
        experience: "25+ years",
        specialties: ["Church Planting", "Leadership Development", "Organizational Change"],
        availability: "Available",
        rating: 4.9,
        sessions: 147
      },
      type: "Expert Mentor"
    },
    {
      id: 2,
      mentor: {
        name: "Pastor Michael Torres",
        role: "Senior Pastor",
        primaryGift: "Shepherding", 
        experience: "15+ years",
        specialties: ["Pastoral Care", "Team Building", "Conflict Resolution"],
        availability: "Limited",
        rating: 4.8,
        sessions: 203
      },
      type: "Pastoral Mentor"
    },
    {
      id: 3,
      mentor: {
        name: "Evangelist Rebecca Kim",
        role: "Church Planter",
        primaryGift: "Evangelistic",
        experience: "12+ years", 
        specialties: ["Cross-Cultural Ministry", "Evangelism Training", "Digital Outreach"],
        availability: "Available",
        rating: 4.9,
        sessions: 89
      },
      type: "Ministry Mentor"
    }
  ];

  const discussionTopics = [
    { topic: "Team Building", posts: 1247, trending: true },
    { topic: "Gift Development", posts: 892, trending: false },
    { topic: "Leadership Challenges", posts: 734, trending: true },
    { topic: "Ministry Innovation", posts: 567, trending: false },
    { topic: "Spiritual Formation", posts: 445, trending: true },
    { topic: "Church Planting", posts: 378, trending: false },
    { topic: "Youth Ministry", posts: 323, trending: true },
    { topic: "Worship Leadership", posts: 289, trending: false }
  ];

  const toggleComments = (postId: string) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const getGiftIcon = (gift: string) => {
    switch (gift) {
      case 'Apostolic': return Compass;
      case 'Prophetic': return Eye;
      case 'Evangelistic': return Heart;
      case 'Shepherding': return Shield;
      case 'Teaching': return BookOpen;
      default: return Users;
    }
  };

  const getGiftColor = (gift: string) => {
    switch (gift) {
      case 'Apostolic': return 'text-purple-600 bg-purple-100';
      case 'Prophetic': return 'text-red-600 bg-red-100';
      case 'Evangelistic': return 'text-pink-600 bg-pink-100';
      case 'Shepherding': return 'text-green-600 bg-green-100';
      case 'Teaching': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Authority': return 'bg-gold-100 text-gold-700 border-gold-300';
      case 'Expert': return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'Advanced': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Intermediate': return 'bg-green-100 text-green-700 border-green-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'announcement': return <Flag className="w-4 h-4 text-blue-600" />;
      case 'question': return <HelpCircle className="w-4 h-4 text-orange-600" />;
      case 'celebration': return <Star className="w-4 h-4 text-yellow-600" />;
      case 'insight': return <Lightbulb className="w-4 h-4 text-purple-600" />;
      default: return <MessageCircle className="w-4 h-4 text-gray-600" />;
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
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">APEST Community</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Feed</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Groups</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Events</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Mentoring</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium">Resources</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search community..." className="pl-10 w-64" />
              </div>
              
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </Button>
              
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Community Stats Banner */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">APEST Community</h1>
              <p className="text-gray-600">Connect, learn, and grow together in ministry</p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <UserPlus className="w-4 h-4 mr-2" />
              Invite Others
            </Button>
          </div>
          
          <div className="grid md:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{communityStats.totalMembers.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{communityStats.activeToday}</div>
              <div className="text-sm text-gray-600">Active Today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{communityStats.discussionsToday}</div>
              <div className="text-sm text-gray-600">Discussions Today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{communityStats.studyGroups}</div>
              <div className="text-sm text-gray-600">Study Groups</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{communityStats.mentorConnections}</div>
              <div className="text-sm text-gray-600">Mentor Connections</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">{communityStats.liveEvents}</div>
              <div className="text-sm text-gray-600">Live Events</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="feed">Community Feed</TabsTrigger>
                <TabsTrigger value="groups">Study Groups</TabsTrigger>
                <TabsTrigger value="events">Live Events</TabsTrigger>
                <TabsTrigger value="mentoring">Mentoring</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-8">
                {/* Create Post */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <Textarea 
                          placeholder="Share your ministry insights, questions, or celebrations with the community..."
                          value={postContent}
                          onChange={(e) => setPostContent(e.target.value)}
                          className="min-h-[100px] mb-4"
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm">
                              <Image className="w-4 h-4 mr-2" />
                              Photo
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Video className="w-4 h-4 mr-2" />
                              Video
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Hash className="w-4 h-4 mr-2" />
                              Tag
                            </Button>
                          </div>
                          <Button disabled={!postContent.trim()}>
                            <Send className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Feed Posts */}
                <div className="space-y-6">
                  {feedPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-md transition-shadow">
                      {post.pinned && (
                        <div className="bg-blue-50 px-6 py-2 border-b border-blue-200">
                          <div className="flex items-center space-x-2 text-blue-700">
                            <Pin className="w-4 h-4" />
                            <span className="text-sm font-medium">Pinned Post</span>
                          </div>
                        </div>
                      )}
                      
                      <CardContent className="p-6">
                        {/* Post Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                              <span className="text-gray-600 font-semibold">
                                {post.author.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                                {post.author.verified && (
                                  <CheckCircle className="w-4 h-4 text-blue-600" />
                                )}
                                <Badge className={`text-xs ${getLevelColor(post.author.level)}`}>
                                  {post.author.level}
                                </Badge>
                              </div>
                              <p className="text-gray-600 text-sm">{post.author.role}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getGiftColor(post.author.primaryGift)}`}>
                                  {(() => {
                                    const GiftIcon = getGiftIcon(post.author.primaryGift);
                                    return <GiftIcon className="w-3 h-3" />;
                                  })()}
                                  <span>{post.author.primaryGift}</span>
                                </div>
                                <span className="text-gray-500 text-xs">•</span>
                                <span className="text-gray-500 text-xs">{post.timestamp}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            {getPostTypeIcon(post.type)}
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Post Content */}
                        <div className="mb-4">
                          <p className="text-gray-800 leading-relaxed">{post.content}</p>
                        </div>

                        {/* Post Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Post Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center space-x-6">
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {post.engagement.likes}
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-gray-600 hover:text-blue-600"
                              onClick={() => toggleComments(post.id.toString())}
                            >
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.engagement.comments}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                              <Share2 className="w-4 h-4 mr-1" />
                              {post.engagement.shares}
                            </Button>
                          </div>
                          
                          <Button variant="ghost" size="sm">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Comments Section */}
                        {showComments[post.id.toString()] && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="space-y-3">
                              <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <span className="text-green-600 text-xs font-semibold">MP</span>
                                </div>
                                <div className="flex-1">
                                  <div className="bg-gray-50 rounded-lg p-3">
                                    <h4 className="font-medium text-gray-900 text-sm">Michael Park</h4>
                                    <p className="text-gray-700 text-sm">This is so encouraging! We've seen similar breakthroughs when teams understand their complementary gifts.</p>
                                  </div>
                                  <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                                    <span>2 hours ago</span>
                                    <button className="hover:text-blue-600">Like</button>
                                    <button className="hover:text-blue-600">Reply</button>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <User className="w-4 h-4 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                  <Input placeholder="Add a comment..." className="bg-gray-50" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="groups" className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Study Groups</h2>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Group
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {studyGroups.map((group) => (
                    <Card 
                      key={group.id}
                      className={`hover:shadow-lg transition-shadow cursor-pointer ${
                        selectedGroup === group.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedGroup(group.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-2">{group.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">{group.description}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {group.privacy}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{group.members}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Activity className="w-4 h-4" />
                              <span>{group.activeNow} active</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">{group.recentActivity}</span>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-1">Moderators</h4>
                            <div className="flex flex-wrap gap-1">
                              {group.moderators.map((moderator, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {moderator}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-1">Popular Topics</h4>
                            <div className="flex flex-wrap gap-1">
                              {group.topics.slice(0, 3).map((topic, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                              {group.topics.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{group.topics.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        <Button className="w-full">
                          <UserPlus className="w-4 h-4 mr-2" />
                          Join Group
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Live Events</h2>
                  <Button>
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Event
                  </Button>
                </div>

                <div className="space-y-6">
                  {liveEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-bold text-gray-900">{event.title}</h3>
                              <Badge variant="outline" className="text-xs">
                                {event.type}
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">{event.description}</p>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center space-x-1">
                                <User className="w-4 h-4" />
                                <span>Host: {event.host}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{event.duration}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">{event.attendees}</div>
                            <div className="text-xs text-gray-500">/ {event.maxAttendees} max</div>
                            <Progress 
                              value={(event.attendees / event.maxAttendees) * 100} 
                              className="w-20 h-2 mt-2"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge className="bg-green-100 text-green-700">
                            {event.category}
                          </Badge>
                          
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              Add to Calendar
                            </Button>
                            <Button size="sm">
                              <Video className="w-4 h-4 mr-2" />
                              Join Event
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mentoring" className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Mentoring Network</h2>
                  <Button>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Become a Mentor
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mentorConnections.map((connection) => (
                    <Card key={connection.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold">
                              {connection.mentor.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <h3 className="font-bold text-gray-900 mb-1">{connection.mentor.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{connection.mentor.role}</p>
                          
                          <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getGiftColor(connection.mentor.primaryGift)}`}>
                            {(() => {
                              const GiftIcon = getGiftIcon(connection.mentor.primaryGift);
                              return <GiftIcon className="w-3 h-3" />;
                            })()}
                            <span>{connection.mentor.primaryGift}</span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-1">Experience</h4>
                            <p className="text-sm text-gray-600">{connection.mentor.experience}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-1">Specialties</h4>
                            <div className="flex flex-wrap gap-1">
                              {connection.mentor.specialties.map((specialty, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-medium">{connection.mentor.rating}</span>
                            </div>
                            <span className="text-gray-600">{connection.mentor.sessions} sessions</span>
                          </div>
                          
                          <div className="flex items-center justify-center">
                            <Badge className={
                              connection.mentor.availability === 'Available' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }>
                              {connection.mentor.availability}
                            </Badge>
                          </div>
                        </div>

                        <Button 
                          className="w-full"
                          disabled={connection.mentor.availability !== 'Available'}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Connect
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {discussionTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Hash className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700 font-medium">{topic.topic}</span>
                        {topic.trending && (
                          <TrendingUp className="w-3 h-3 text-orange-500" />
                        )}
                      </div>
                      <span className="text-gray-500 text-sm">{topic.posts}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Find Study Partner
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Join Live Event
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ask a Question
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Resource
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Create Study Group
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* My Groups */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  My Groups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studyGroups.slice(0, 4).map((group) => (
                    <div key={group.id} className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{group.name}</h4>
                        <p className="text-gray-600 text-xs">{group.members} members</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-500">{group.activeNow}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-3">
                  View All Groups
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-600" />
                  My Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {liveEvents.slice(0, 2).map((event) => (
                    <div key={event.id} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900 text-sm">{event.title}</h4>
                      <p className="text-blue-700 text-xs">{event.time}</p>
                      <Button size="sm" className="mt-2 h-6">
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-3">
                  View Full Schedule
                </Button>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="w-5 h-5 mr-2 text-purple-600" />
                  Community Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Respect and honor all members</p>
                  <p>• Share insights that build up the body</p>
                  <p>• Ask questions with genuine curiosity</p>
                  <p>• Celebrate others' growth and achievements</p>
                  <p>• Maintain confidentiality when appropriate</p>
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-3">
                  Read Full Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
