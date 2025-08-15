"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useState } from "react";
import { 
  Target,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  BookOpen,
  Play,
  Calendar,
  Users,
  Award,
  TrendingUp,
  MessageCircle,
  Download,
  Video,
  FileText,
  Headphones,
  Heart,
  Eye,
  Shield,
  Brain,
  Send,
  Building,
  Zap,
  Gift,
  MapPin,
  Compass,
  Trophy,
  Bell,
  Settings
} from "lucide-react";
import Footer from "@/components/Footer";

export default function LearningDashboardExample() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data based on Tim's vision
  const userData = {
    name: "Sarah Johnson",
    joinDate: "March 2024",
    primaryGift: "evangelistic",
    secondaryGift: "shepherding",
    completedCourses: 3,
    totalCourses: 12,
    badgesEarned: 8,
    streak: 12,
    lastActivity: "2 hours ago"
  };

  const giftIcons = {
    apostolic: <Send className="w-5 h-5 text-blue-600" />,
    prophetic: <Eye className="w-5 h-5 text-purple-600" />,
    evangelistic: <Heart className="w-5 h-5 text-red-600" />,
    shepherding: <Shield className="w-5 h-5 text-green-600" />,
    teaching: <Brain className="w-5 h-5 text-orange-600" />
  };

  const assessmentHistory = [
    {
      date: "March 15, 2024",
      type: "Initial APEST Assessment",
      status: "completed",
      primaryGift: "evangelistic",
      score: 87
    },
    {
      date: "Available in 45 days",
      type: "90-Day Growth Assessment",
      status: "locked",
      primaryGift: null,
      score: null
    }
  ];

  const currentCourses = [
    {
      id: 1,
      title: "Evangelistic Foundations",
      instructor: "Tim Catchim",
      progress: 65,
      nextLesson: "Overcoming Fear of Rejection",
      timeLeft: "15 min",
      type: "video",
      dueDate: "Tomorrow"
    },
    {
      id: 2,
      title: "Team Leadership Essentials",
      instructor: "Tim Catchim",
      progress: 30,
      nextLesson: "Building APEST-Balanced Teams",
      timeLeft: "22 min", 
      type: "interactive",
      dueDate: "Next week"
    }
  ];

  const recommendedCourses = [
    {
      id: 3,
      title: "Advanced Evangelism Strategies",
      level: "Intermediate",
      duration: "4 weeks",
      rating: 4.8,
      students: 1247,
      price: "Included in All-Access"
    },
    {
      id: 4,
      title: "Shepherding Heart Development",
      level: "Beginner",
      duration: "3 weeks", 
      rating: 4.9,
      students: 892,
      price: "$47"
    }
  ];

  const recentBadges = [
    {
      name: "Evangelistic Understanding",
      earnedDate: "Yesterday",
      icon: <Heart className="w-8 h-8 text-red-500" />
    },
    {
      name: "Video Learner",
      earnedDate: "3 days ago",
      icon: <Video className="w-8 h-8 text-blue-500" />
    },
    {
      name: "Consistent Learner",
      earnedDate: "1 week ago",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    }
  ];

  const upcomingEvents = [
    {
      type: "Live Coaching Session",
      title: "Developing Your Evangelistic Voice",
      date: "Tomorrow, 2:00 PM CST",
      instructor: "Tim Catchim",
      spots: "3 spots left"
    },
    {
      type: "Co-Lab Session",
      title: "Monthly APEST Community Call",
      date: "Friday, 1:00 PM CST",
      instructor: "Tim Catchim",
      spots: "Open to all"
    }
  ];

  const activityFeed = [
    {
      type: "course_progress",
      message: "Completed 'Understanding Your Calling' in Evangelistic Foundations",
      time: "2 hours ago",
      icon: <CheckCircle className="w-4 h-4 text-green-500" />
    },
    {
      type: "badge_earned",
      message: "Earned 'Evangelistic Understanding' badge",
      time: "1 day ago",
      icon: <Award className="w-4 h-4 text-yellow-500" />
    },
    {
      type: "assessment_reminder",
      message: "Reminder: Your 90-day reassessment is available in 45 days",
      time: "3 days ago",
      icon: <Target className="w-4 h-4 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">SJ</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Welcome back, {userData.name}!</h1>
                <p className="text-sm text-gray-600">Continue your APEST journey</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-900">{userData.streak}</div>
                  <p className="text-sm text-gray-600">Day Learning Streak</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold text-gray-900">{userData.completedCourses}/{userData.totalCourses}</div>
                  <p className="text-sm text-gray-600">Courses Completed</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                  <div className="text-2xl font-bold text-gray-900">{userData.badgesEarned}</div>
                  <p className="text-sm text-gray-600">Badges Earned</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  {giftIcons[userData.primaryGift as keyof typeof giftIcons]}
                  <div className="text-sm font-bold text-gray-900 mt-2 capitalize">{userData.primaryGift}</div>
                  <p className="text-xs text-gray-600">Primary Gift</p>
                </CardContent>
              </Card>
            </div>

            {/* Next Best Step */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Compass className="w-5 h-5 mr-2" />
                  Your Next Best Step
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Personalized recommendation based on your {userData.primaryGift} gifting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-900 mb-2">Continue "Evangelistic Foundations"</h3>
                    <p className="text-blue-700 text-sm mb-3">
                      You're 65% through this course. Complete the next lesson to maintain your learning momentum.
                    </p>
                    <div className="flex items-center text-sm text-blue-600">
                      <Clock className="w-4 h-4 mr-1" />
                      15 minutes remaining
                    </div>
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/courses/evangelistic-foundations/lesson/6">
                      Continue Learning
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Current Courses */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Current Courses</h2>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#courses">View All</Link>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {currentCourses.map((course) => (
                    <Card key={course.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">with {course.instructor}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                {course.type === 'video' ? (
                                  <Video className="w-4 h-4 mr-1" />
                                ) : (
                                  <Zap className="w-4 h-4 mr-1" />
                                )}
                                {course.type}
                              </span>
                              <span>Due: {course.dueDate}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {course.progress}% Complete
                          </Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-gray-600">Progress</span>
                              <span className="text-gray-900">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">Next: {course.nextLesson}</p>
                              <p className="text-xs text-gray-600">{course.timeLeft} estimated</p>
                            </div>
                            <Button size="sm">
                              <Play className="w-4 h-4 mr-2" />
                              Continue
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Recent Badges */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentBadges.map((badge, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            {badge.icon}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">{badge.name}</p>
                            <p className="text-xs text-gray-600">{badge.earnedDate}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="border-l-4 border-blue-200 pl-4">
                          <div className="flex items-center justify-between mb-1">
                            <Badge variant="outline" className="text-xs">
                              {event.type}
                            </Badge>
                            <span className="text-xs text-gray-600">{event.spots}</span>
                          </div>
                          <h4 className="font-medium text-gray-900 text-sm mb-1">{event.title}</h4>
                          <p className="text-xs text-gray-600 mb-2">{event.date}</p>
                          <Button size="sm" variant="outline" className="text-xs h-7">
                            <Calendar className="w-3 h-3 mr-1" />
                            Join Event
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Activity Feed */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {activityFeed.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            {activity.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{activity.message}</p>
                            <p className="text-xs text-gray-600">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recommended Courses */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
                <Button asChild variant="outline" size="sm">
                  <Link href="/courses">Browse All Courses</Link>
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {recommendedCourses.map((course) => (
                  <Card key={course.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <Badge variant="outline">{course.level}</Badge>
                            <span>{course.duration}</span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              <span>{course.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">{course.students} students enrolled</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">{course.price}</span>
                        <Button size="sm">
                          Enroll Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="assessments" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My APEST Assessments</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Track your growth journey with regular assessments. We recommend retaking every 90 days to see your development.
              </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {assessmentHistory.map((assessment, index) => (
                <Card key={index} className={assessment.status === 'locked' ? 'opacity-60' : ''}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          assessment.status === 'completed' ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          {assessment.status === 'completed' ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : (
                            <Target className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-gray-900">{assessment.type}</h3>
                          <p className="text-sm text-gray-600">{assessment.date}</p>
                          {assessment.primaryGift && (
                            <div className="flex items-center mt-1">
                              {giftIcons[assessment.primaryGift as keyof typeof giftIcons]}
                              <span className="text-sm font-medium text-gray-700 ml-2 capitalize">
                                Primary: {assessment.primaryGift}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        {assessment.status === 'completed' ? (
                          <div className="space-y-2">
                            <Badge className="bg-green-100 text-green-800">Completed</Badge>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4 mr-2" />
                                Download Report
                              </Button>
                              <Button size="sm">
                                View Results
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Badge variant="outline">Available Soon</Badge>
                            <p className="text-xs text-gray-600">
                              Growth tracking available<br />after 90 days
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
                <CardContent className="p-8 text-center">
                  <Target className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Ready to See Your Growth?
                  </h3>
                  <p className="text-blue-700 mb-4">
                    Your next assessment will show how you've developed since March. 
                    We'll compare your results and celebrate your growth!
                  </p>
                  <Button disabled className="bg-gray-300 text-gray-500 cursor-not-allowed">
                    Available in 45 days
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other tabs would continue with similar detailed implementations */}
          <TabsContent value="courses">
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Learning Library</h2>
              <p className="text-gray-600 mb-8">Your personalized course dashboard would be here</p>
              <Button asChild>
                <Link href="/courses">Browse Available Courses</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="text-center py-20">
              <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">APEST Community</h2>
              <p className="text-gray-600 mb-8">Connect with other leaders on their journey</p>
              <Button asChild>
                <Link href="/community">Join the Community</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="text-center py-20">
              <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Resource Library</h2>
              <p className="text-gray-600 mb-8">Download tools, worksheets, and bonus content</p>
              <Button asChild>
                <Link href="/resources">Browse Resources</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
