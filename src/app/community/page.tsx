import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { 
  Users, 
  MessageCircle, 
  Star,
  Calendar,
  MapPin,
  Globe,
  TrendingUp,
  Award,
  BookOpen,
  Video,
  Coffee,
  Heart,
  ArrowRight,
  Plus,
  Search,
  Filter,
  User,
  Clock,
  Eye,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Bell,
  Settings,
  Crown,
  Zap,
  Target,
  CheckCircle,
  UserPlus,
  Handshake
} from "lucide-react"

export const metadata: Metadata = {
  title: "APEST Community - Connect, Learn, Grow Together",
  description: "Join thousands of ministry leaders discovering their APEST giftings. Engage in discussions, find mentorship, and build kingdom-minded relationships."
}

export default function Community() {
  const communityStats = {
    totalMembers: "8,247",
    activeToday: "1,432",
    postsThisWeek: "347",
    mentorshipPairs: "156"
  };

  const featuredDiscussions = [
    {
      id: 1,
      title: "Balancing Apostolic Vision with Pastoral Care",
      author: {
        name: "Sarah Chen",
        role: "Church Planter",
        apest: ["Apostle", "Shepherd"],
        avatar: "SC",
        verified: true
      },
      category: "Leadership",
      replies: 23,
      likes: 47,
      views: 312,
      lastActivity: "2 hours ago",
      preview: "I'm struggling to maintain deep pastoral relationships while pursuing God's vision for church multiplication. How do you balance...",
      tags: ["Apostolic", "Pastoral Care", "Vision", "Leadership"],
      featured: true,
      solved: false
    },
    {
      id: 2,
      title: "Prophetic Gifting in Business Leadership?",
      author: {
        name: "Marcus Rodriguez",
        role: "CEO & Ministry Leader", 
        apest: ["Prophet", "Teacher"],
        avatar: "MR",
        verified: true
      },
      category: "Marketplace Ministry",
      replies: 18,
      likes: 31,
      views: 278,
      lastActivity: "4 hours ago",
      preview: "Can prophetic gifting operate effectively in corporate environments? Looking for practical examples and boundaries...",
      tags: ["Prophetic", "Marketplace", "Business", "Ethics"],
      featured: true,
      solved: false
    },
    {
      id: 3,
      title: "Teaching Children About Their APEST Giftings",
      author: {
        name: "Jennifer Kim",
        role: "Children's Pastor",
        apest: ["Teacher", "Shepherd"], 
        avatar: "JK",
        verified: false
      },
      category: "Children's Ministry",
      replies: 35,
      likes: 89,
      views: 567,
      lastActivity: "6 hours ago",
      preview: "What's the appropriate age to start helping children identify their giftings? Looking for age-appropriate approaches...",
      tags: ["Teaching", "Children", "Development", "Age-Appropriate"],
      featured: true,
      solved: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Evangelistic Strategies for Introverted Personalities",
      author: {
        name: "David Park",
        role: "Campus Minister",
        apest: ["Evangelist"],
        avatar: "DP"
      },
      category: "Evangelism",
      replies: 12,
      likes: 28,
      views: 156,
      lastActivity: "1 day ago",
      preview: "Being naturally introverted but called to evangelism creates unique challenges. Here's what I've learned..."
    },
    {
      id: 5,
      title: "Shepherding Leaders Who Are Also Shepherds",
      author: {
        name: "Lisa Thompson",
        role: "Regional Director",
        apest: ["Shepherd", "Apostle"],
        avatar: "LT"
      },
      category: "Leadership Development",
      replies: 19,
      likes: 42,
      views: 203,
      lastActivity: "1 day ago", 
      preview: "How do you provide pastoral care to staff members who are also shepherds? The dynamics can be complex..."
    },
    {
      id: 6,
      title: "Multi-Generational APEST Assessment Results",
      author: {
        name: "Robert Wilson",
        role: "Senior Pastor",
        apest: ["Teacher", "Shepherd"],
        avatar: "RW"
      },
      category: "Assessment",
      replies: 8,
      likes: 16,
      views: 94,
      lastActivity: "2 days ago",
      preview: "We did APEST assessments for our entire church family. The generational patterns were fascinating..."
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "APEST Leaders Virtual Coffee Chat",
      date: "September 15, 2025",
      time: "2:00 PM EST",
      type: "Virtual",
      attendees: 47,
      maxAttendees: 50,
      host: "Tim Catchim",
      description: "Monthly casual conversation for APEST practitioners to share experiences and ask questions."
    },
    {
      id: 2,
      title: "Prophetic Discernment Workshop",
      date: "September 22, 2025", 
      time: "7:00 PM EST",
      type: "Virtual",
      attendees: 23,
      maxAttendees: 30,
      host: "Dr. Sarah Martinez",
      description: "Practical training on developing and exercising prophetic gifting with biblical wisdom."
    },
    {
      id: 3,
      title: "Church Planting Network Meetup",
      date: "October 1, 2025",
      time: "6:30 PM EST", 
      type: "Hybrid",
      attendees: 31,
      maxAttendees: 40,
      host: "Marcus Chen",
      description: "For apostolic leaders involved in church planting. Share stories, challenges, and resources."
    }
  ];

  const mentorshipProgram = {
    activePairs: 156,
    waitingMentees: 23,
    availableMentors: 8,
    averageMatchTime: "2 weeks",
    satisfactionRate: "96%"
  };

  const categories = [
    { name: "All Discussions", count: 1247, icon: MessageCircle },
    { name: "Leadership", count: 234, icon: Crown },
    { name: "Assessment", count: 189, icon: Target },
    { name: "Apostolic", count: 156, icon: Zap },
    { name: "Prophetic", count: 143, icon: Eye },
    { name: "Evangelism", count: 127, icon: Heart },
    { name: "Shepherding", count: 198, icon: Users },
    { name: "Teaching", count: 167, icon: BookOpen },
    { name: "Marketplace", count: 89, icon: Globe },
    { name: "Young Leaders", count: 76, icon: Star }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-trimtab-blue-2 text-trimtab-blue-2">
            <Users className="w-4 h-4 mr-2" />
            APEST Community
          </Badge>
          <h1 className="text-5xl font-bold text-trimtab-blue-4 mb-6">
            Connect. Learn. Grow Together.
          </h1>
          <p className="text-xl text-trimtab-gray-3 max-w-4xl mx-auto mb-8">
            Join thousands of ministry leaders discovering their APEST giftings. 
            Engage in meaningful discussions, find mentorship, and build 
            kingdom-minded relationships that last.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-trimtab-gray-3 mb-8">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-trimtab-blue-2" />
              <span>{communityStats.totalMembers} Members</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-trimtab-cta" />
              <span>{communityStats.activeToday} Active Today</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-2 text-trimtab-blue-2" />
              <span>{communityStats.postsThisWeek} Posts This Week</span>
            </div>
            <div className="flex items-center">
              <Handshake className="w-4 h-4 mr-2 text-trimtab-cta" />
              <span>{communityStats.mentorshipPairs} Mentorship Pairs</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="trimtab-cta-gradient text-white">
              <UserPlus className="w-5 h-5 mr-2" />
              Join Community
            </Button>
            <Button size="lg" variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Discussion
            </Button>
          </div>
        </header>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-8">
              <Card className="border-trimtab-gray-2">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-trimtab-gray-2" />
                        <Input 
                          placeholder="Search discussions..." 
                          className="pl-10 border-trimtab-gray-2"
                        />
                      </div>
                    </div>
                    <div>
                      <select className="w-full px-3 py-2 border border-trimtab-gray-2 rounded-md focus:outline-none focus:ring-2 focus:ring-trimtab-blue-2">
                        <option value="">All Categories</option>
                        <option value="leadership">Leadership</option>
                        <option value="assessment">Assessment</option>
                        <option value="apostolic">Apostolic</option>
                        <option value="prophetic">Prophetic</option>
                        <option value="evangelism">Evangelism</option>
                        <option value="shepherding">Shepherding</option>
                        <option value="teaching">Teaching</option>
                      </select>
                    </div>
                    <div>
                      <select className="w-full px-3 py-2 border border-trimtab-gray-2 rounded-md focus:outline-none focus:ring-2 focus:ring-trimtab-blue-2">
                        <option value="recent">Most Recent</option>
                        <option value="popular">Most Popular</option>
                        <option value="answered">Recently Answered</option>
                        <option value="unanswered">Unanswered</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Featured Discussions */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-trimtab-blue-4">Featured Discussions</h2>
                <Badge variant="outline" className="border-trimtab-cta text-trimtab-cta">
                  <Star className="w-4 h-4 mr-2" />
                  Editor's Pick
                </Badge>
              </div>

              <div className="space-y-4">
                {featuredDiscussions.map((discussion) => (
                  <Card key={discussion.id} className="border-trimtab-gray-2 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-br from-trimtab-blue-2 to-trimtab-blue-3 rounded-full flex items-center justify-center text-white font-semibold">
                            {discussion.author.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-trimtab-blue-4">{discussion.author.name}</span>
                              {discussion.author.verified && (
                                <CheckCircle className="w-4 h-4 text-trimtab-cta" />
                              )}
                              <span className="text-sm text-trimtab-gray-2">•</span>
                              <span className="text-sm text-trimtab-gray-2">{discussion.author.role}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {discussion.author.apest.map((gift, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs border-trimtab-blue-1 text-trimtab-blue-2">
                                  {gift}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                            {discussion.category}
                          </Badge>
                          {discussion.solved && (
                            <Badge className="text-xs bg-green-500 text-white">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Solved
                            </Badge>
                          )}
                          {discussion.featured && (
                            <Badge className="text-xs bg-trimtab-cta text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-trimtab-blue-4 mb-3">
                        {discussion.title}
                      </h3>

                      <p className="text-trimtab-gray-3 mb-4 line-clamp-2">
                        {discussion.preview}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {discussion.tags.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-trimtab-gray-2">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            {discussion.replies} replies
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            {discussion.likes} likes
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {discussion.views} views
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>Last active {discussion.lastActivity}</span>
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="ghost" className="text-trimtab-gray-2 hover:text-trimtab-blue-2">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-trimtab-gray-2 hover:text-trimtab-blue-2">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-trimtab-blue-4">Recent Discussions</h2>
                <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="border-trimtab-gray-2 hover:shadow-sm transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-trimtab-blue-1 to-trimtab-blue-2 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {post.author.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-trimtab-blue-4">{post.author.name}</span>
                                <span className="text-sm text-trimtab-gray-2">•</span>
                                <span className="text-sm text-trimtab-gray-2">{post.author.role}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                {post.author.apest.map((gift, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs border-trimtab-blue-0 text-trimtab-blue-2">
                                    {gift}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <Badge variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                              {post.category}
                            </Badge>
                          </div>

                          <h4 className="text-lg font-semibold text-trimtab-blue-4 mb-2">
                            {post.title}
                          </h4>

                          <p className="text-trimtab-gray-3 text-sm mb-3 line-clamp-2">
                            {post.preview}
                          </p>

                          <div className="flex items-center justify-between text-xs text-trimtab-gray-2">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-3 h-3" />
                                {post.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="w-3 h-3" />
                                {post.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {post.views}
                              </span>
                            </div>
                            <span>{post.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-8">
              {/* Quick Actions */}
              <Card className="border-trimtab-gray-2">
                <CardHeader>
                  <CardTitle className="text-lg text-trimtab-blue-4">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start trimtab-cta-gradient text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Start New Discussion
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                    <Search className="w-4 h-4 mr-2" />
                    Find Mentorship
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    Join Events
                  </Button>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-trimtab-gray-2">
                <CardHeader>
                  <CardTitle className="text-lg text-trimtab-blue-4">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.slice(0, 6).map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-trimtab-gray-1 last:border-0">
                          <div className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4 text-trimtab-blue-2" />
                            <span className="text-sm text-trimtab-blue-4">{category.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                            {category.count}
                          </Badge>
                        </div>
                      );
                    })}
                    <Button variant="ghost" className="w-full text-xs text-trimtab-blue-2 hover:bg-trimtab-blue-0 mt-2">
                      View All Categories
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="border-trimtab-gray-2">
                <CardHeader>
                  <CardTitle className="text-lg text-trimtab-blue-4">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.slice(0, 2).map((event) => (
                      <div key={event.id} className="border-l-4 border-trimtab-cta pl-4">
                        <h4 className="font-semibold text-trimtab-blue-4 text-sm mb-1">
                          {event.title}
                        </h4>
                        <div className="text-xs text-trimtab-gray-2 space-y-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{event.attendees}/{event.maxAttendees} attending</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full mt-2 text-xs border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                          Join Event
                        </Button>
                      </div>
                    ))}
                    <Button variant="ghost" className="w-full text-xs text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                      View All Events
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Mentorship Program */}
              <Card className="border-trimtab-gray-2">
                <CardHeader>
                  <CardTitle className="text-lg text-trimtab-blue-4">Mentorship Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-trimtab-gray-3">Active Pairs:</span>
                      <span className="font-semibold text-trimtab-blue-4">{mentorshipProgram.activePairs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-trimtab-gray-3">Avg Match Time:</span>
                      <span className="font-semibold text-trimtab-blue-4">{mentorshipProgram.averageMatchTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-trimtab-gray-3">Satisfaction:</span>
                      <span className="font-semibold text-trimtab-cta">{mentorshipProgram.satisfactionRate}</span>
                    </div>
                    <div className="pt-2 border-t border-trimtab-gray-1">
                      <Button size="sm" className="w-full trimtab-cta-gradient text-white">
                        <Handshake className="w-4 h-4 mr-2" />
                        Find a Mentor
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
