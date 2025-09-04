import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { 
  Crown,
  Star,
  Unlock,
  Lock,
  Clock,
  CheckCircle,
  Play,
  Book,
  Users,
  Target,
  Award,
  TrendingUp,
  Calendar,
  Download,
  Share2,
  Heart,
  MessageSquare,
  Zap,
  Shield,
  Gift,
  Sparkles,
  ArrowRight,
  BookOpen,
  Video,
  Headphones,
  FileText,
  User,
  Settings,
  Bell,
  CreditCard,
  BarChart3,
  Trophy,
  Flame,
  Coffee,
  Bookmark,
  Eye,
  ThumbsUp,
  ChevronRight,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react"

export const metadata: Metadata = {
  title: "Member Portal - Tim Catchim APEST Platform",
  description: "Your personalized APEST learning dashboard with exclusive member content, progress tracking, and community access."
}

export default function MemberPortal() {
  const membershipTier = {
    name: "APEST Premium",
    level: "Pro",
    icon: Crown,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    memberSince: "March 2023",
    renewalDate: "March 2025",
    benefits: [
      "Access to all courses and assessments",
      "Exclusive member-only content",
      "Priority community support",
      "Monthly live Q&A sessions",
      "Downloadable resources",
      "Certificate programs"
    ]
  };

  const progressStats = [
    {
      title: "Courses Completed",
      value: 12,
      total: 47,
      percentage: 26,
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      title: "Learning Hours",
      value: 127,
      total: 200,
      percentage: 64,
      icon: Clock,
      color: "text-green-600"
    },
    {
      title: "Assessments Taken",
      value: 8,
      total: 12,
      percentage: 67,
      icon: Target,
      color: "text-purple-600"
    },
    {
      title: "Certificates Earned",
      value: 5,
      total: 15,
      percentage: 33,
      icon: Award,
      color: "text-orange-600"
    }
  ];

  const currentCourses = [
    {
      id: 1,
      title: "Advanced APEST Leadership Integration",
      instructor: "Tim Catchim",
      progress: 65,
      totalLessons: 12,
      completedLessons: 8,
      timeRemaining: "3.5 hours",
      nextLesson: "Balancing Multiple APEST Gifts",
      difficulty: "Advanced",
      rating: 4.9,
      enrolled: 234,
      premium: true,
      thumbnail: "/course-thumbnails/advanced-integration.jpg"
    },
    {
      id: 2,
      title: "Prophetic Discernment in Modern Context",
      instructor: "Sarah Martinez", 
      progress: 23,
      totalLessons: 8,
      completedLessons: 2,
      timeRemaining: "6.2 hours",
      nextLesson: "Understanding Prophetic Symbolism",
      difficulty: "Intermediate",
      rating: 4.7,
      enrolled: 189,
      premium: true,
      thumbnail: "/course-thumbnails/prophetic-discernment.jpg"
    },
    {
      id: 3,
      title: "Building Apostolic Communities",
      instructor: "Marcus Johnson",
      progress: 89,
      totalLessons: 10,
      completedLessons: 9,
      timeRemaining: "45 minutes",
      nextLesson: "Sustaining Apostolic Vision",
      difficulty: "Intermediate",
      rating: 4.8,
      enrolled: 167,
      premium: false,
      thumbnail: "/course-thumbnails/apostolic-communities.jpg"
    }
  ];

  const recentActivity = [
    {
      type: "course_completion",
      title: "Completed: Shepherd Leadership Foundations",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      type: "certificate",
      title: "Earned: APEST Assessment Specialist Certificate",
      time: "1 day ago",
      icon: Award,
      color: "text-yellow-600"
    },
    {
      type: "community",
      title: "Posted in APEST Leadership Discussion",
      time: "3 days ago",
      icon: MessageSquare,
      color: "text-blue-600"
    },
    {
      type: "download",
      title: "Downloaded: APEST Integration Workbook",
      time: "5 days ago",
      icon: Download,
      color: "text-purple-600"
    },
    {
      type: "assessment",
      title: "Completed: Evangelistic Gifts Assessment",
      time: "1 week ago",
      icon: Target,
      color: "text-orange-600"
    }
  ];

  const exclusiveContent = [
    {
      id: 1,
      title: "Monthly Member Q&A with Tim Catchim",
      type: "Live Session",
      date: "Next Wednesday 2:00 PM EST",
      description: "Submit your APEST questions and get direct answers",
      status: "upcoming",
      participants: 89,
      icon: Video,
      premium: true
    },
    {
      id: 2,
      title: "APEST Leadership Toolkit - Advanced Strategies",
      type: "Resource Pack",
      date: "Available Now",
      description: "Comprehensive tools for implementing APEST in organizations",
      status: "available",
      downloads: 234,
      icon: Download,
      premium: true
    },
    {
      id: 3,
      title: "Behind the Scenes: APEST Research Insights",
      type: "Podcast Series",
      date: "Weekly Episodes",
      description: "Exclusive interviews and research findings",
      status: "ongoing",
      episodes: 12,
      icon: Headphones,
      premium: true
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first APEST assessment",
      earned: true,
      earnedDate: "March 15, 2023",
      icon: Target,
      rarity: "common"
    },
    {
      id: 2,
      title: "Knowledge Seeker",
      description: "Complete 10 courses",
      earned: true,
      earnedDate: "November 3, 2023",
      icon: BookOpen,
      rarity: "uncommon"
    },
    {
      id: 3,
      title: "Community Builder",
      description: "Help 50 community members",
      earned: true,
      earnedDate: "January 12, 2024",
      icon: Users,
      rarity: "rare"
    },
    {
      id: 4,
      title: "APEST Master",
      description: "Complete all certification programs",
      earned: false,
      progress: 60,
      icon: Crown,
      rarity: "legendary"
    }
  ];

  const communityHighlights = [
    {
      id: 1,
      title: "How I Applied APEST in My Startup",
      author: "Sarah K.",
      likes: 47,
      comments: 12,
      time: "2 days ago",
      excerpt: "Implementing apostolic vision with shepherd care transformed our company culture..."
    },
    {
      id: 2,
      title: "Balancing Prophet and Teacher Gifts",
      author: "Marcus R.",
      likes: 32,
      comments: 8,
      time: "4 days ago",
      excerpt: "Finding the sweet spot between challenging and nurturing has been my biggest growth area..."
    },
    {
      id: 3,
      title: "APEST in Youth Ministry Success Story",
      author: "Jennifer L.",
      likes: 61,
      comments: 15,
      time: "1 week ago",
      excerpt: "Our youth group doubled in size after implementing APEST principles..."
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "APEST Integration Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM EST",
      type: "Workshop",
      spots: 12,
      price: "Members Free",
      instructor: "Tim Catchim"
    },
    {
      id: 2,
      title: "Prophetic Leadership Intensive",
      date: "March 22, 2024", 
      time: "7:00 PM - 9:00 PM EST",
      type: "Webinar",
      spots: "Unlimited",
      price: "Members Free",
      instructor: "Sarah Martinez"
    },
    {
      id: 3,
      title: "Member Networking Meetup",
      date: "April 5, 2024",
      time: "6:00 PM - 8:00 PM Local",
      type: "In-Person",
      spots: 25,
      price: "Members Free",
      instructor: "Local Coordinators"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with Member Info */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-trimtab-blue-4 mb-2">
                Welcome back, Sarah!
              </h1>
              <p className="text-xl text-trimtab-gray-3">
                Continue your APEST leadership journey
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-5 h-5 text-yellow-600" />
                <span className="font-semibold text-trimtab-blue-4">{membershipTier.name}</span>
              </div>
              <p className="text-sm text-trimtab-gray-3">Member since {membershipTier.memberSince}</p>
            </div>
          </div>

          {/* Membership Status */}
          <Card className="border-trimtab-gray-2 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Crown className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-trimtab-blue-4 mb-1">
                      {membershipTier.name} Member
                    </h3>
                    <p className="text-trimtab-gray-3">
                      Access to all premium content and features
                    </p>
                    <p className="text-sm text-trimtab-gray-2 mt-1">
                      Renews on {membershipTier.renewalDate}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Membership
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {progressStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="border-trimtab-gray-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    <span className="text-2xl font-bold text-trimtab-blue-4">
                      {stat.value}/{stat.total}
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm text-trimtab-gray-3 mb-1">{stat.title}</div>
                    <Progress value={stat.percentage} className="h-2" />
                  </div>
                  <div className="text-sm text-trimtab-gray-2">
                    {stat.percentage}% Complete
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-trimtab-blue-4">Continue Learning</CardTitle>
                  <Link href="/courses">
                    <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                      Browse All Courses
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {currentCourses.map((course) => (
                    <div key={course.id} className="border border-trimtab-gray-1 rounded-lg p-6 hover:bg-trimtab-blue-0 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 bg-trimtab-blue-1 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-8 h-8 text-trimtab-blue-2" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-trimtab-blue-4 mb-1">{course.title}</h3>
                              <p className="text-sm text-trimtab-gray-3">by {course.instructor}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {course.premium && (
                                <Badge className="bg-yellow-500 text-white">
                                  <Crown className="w-3 h-3 mr-1" />
                                  Premium
                                </Badge>
                              )}
                              <Badge variant="outline" className="border-trimtab-blue-1 text-trimtab-blue-2">
                                {course.difficulty}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <div className="flex items-center justify-between text-sm text-trimtab-gray-3 mb-1">
                              <span>Progress: {course.completedLessons}/{course.totalLessons} lessons</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-sm">
                              <div className="text-trimtab-gray-3">Next: {course.nextLesson}</div>
                              <div className="text-trimtab-gray-2">{course.timeRemaining} remaining</div>
                            </div>
                            <Button className="trimtab-cta-gradient text-white">
                              <Play className="w-4 h-4 mr-2" />
                              Continue
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <CardTitle className="text-xl text-trimtab-blue-4">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const IconComponent = activity.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`w-4 h-4 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-trimtab-blue-4">{activity.title}</p>
                          <p className="text-xs text-trimtab-gray-3">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Exclusive Content */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
                  Exclusive Member Content
                </CardTitle>
                <Badge className="bg-yellow-500 text-white">
                  <Crown className="w-3 h-3 mr-1" />
                  Premium Only
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {exclusiveContent.map((content) => {
                  const IconComponent = content.icon;
                  return (
                    <div key={content.id} className="border border-trimtab-gray-1 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-trimtab-blue-1 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-trimtab-blue-2" />
                        </div>
                        <div>
                          <Badge variant="outline" className="border-trimtab-blue-1 text-trimtab-blue-2 mb-1">
                            {content.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-trimtab-blue-4 mb-2">{content.title}</h3>
                      <p className="text-sm text-trimtab-gray-3 mb-3">{content.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-trimtab-gray-2 mb-4">
                        <span>{content.date}</span>
                        {content.participants && <span>{content.participants} participants</span>}
                        {content.downloads && <span>{content.downloads} downloads</span>}
                        {content.episodes && <span>{content.episodes} episodes</span>}
                      </div>

                      <Button className="w-full trimtab-cta-gradient text-white">
                        {content.status === 'upcoming' ? 'Register' : 
                         content.status === 'available' ? 'Access Now' : 'Listen Now'}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Achievements */}
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={achievement.id} className={`border rounded-lg p-4 ${
                      achievement.earned ? 'border-green-200 bg-green-50' : 'border-trimtab-gray-1'
                    }`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          achievement.earned ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            achievement.earned ? 'text-green-600' : 'text-gray-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`font-semibold ${
                              achievement.earned ? 'text-trimtab-blue-4' : 'text-gray-400'
                            }`}>
                              {achievement.title}
                            </h3>
                            <Badge className={`text-white ${
                              achievement.rarity === 'common' ? 'bg-gray-500' :
                              achievement.rarity === 'uncommon' ? 'bg-green-500' :
                              achievement.rarity === 'rare' ? 'bg-blue-500' : 'bg-purple-500'
                            }`}>
                              {achievement.rarity}
                            </Badge>
                          </div>
                          <p className={`text-sm ${
                            achievement.earned ? 'text-trimtab-gray-3' : 'text-gray-400'
                          }`}>
                            {achievement.description}
                          </p>
                          {achievement.earned && achievement.earnedDate && (
                            <p className="text-xs text-green-600 mt-1">
                              Earned on {achievement.earnedDate}
                            </p>
                          )}
                          {!achievement.earned && achievement.progress && (
                            <div className="mt-2">
                              <Progress value={achievement.progress} className="h-2" />
                              <p className="text-xs text-trimtab-gray-2 mt-1">
                                {achievement.progress}% complete
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Community Highlights */}
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Community Highlights
                </CardTitle>
                <Link href="/community">
                  <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                    Visit Community
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityHighlights.map((post) => (
                  <div key={post.id} className="border border-trimtab-gray-1 rounded-lg p-4 hover:bg-trimtab-blue-0 transition-colors">
                    <h3 className="font-medium text-trimtab-blue-4 mb-2">{post.title}</h3>
                    <p className="text-sm text-trimtab-gray-3 mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-trimtab-gray-2">
                        <span>by {post.author}</span>
                        <span>{post.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-trimtab-gray-2">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <Card className="border-trimtab-gray-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Upcoming Member Events
              </CardTitle>
              <Link href="/events">
                <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  View All Events
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-trimtab-gray-1 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <Badge className="bg-trimtab-cta text-white mb-2">
                      {event.type}
                    </Badge>
                    <h3 className="font-semibold text-trimtab-blue-4 mb-2">{event.title}</h3>
                    <p className="text-sm text-trimtab-gray-3">with {event.instructor}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm text-trimtab-gray-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {event.spots} spots
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-green-600">{event.price}</span>
                    <Button className="trimtab-cta-gradient text-white">
                      Register Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
