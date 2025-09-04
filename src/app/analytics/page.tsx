import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye,
  Clock,
  Target,
  Download,
  Share2,
  Calendar,
  Filter,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  Minus,
  Play,
  UserCheck,
  DollarSign,
  BookOpen,
  MessageCircle,
  Heart,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  MapPin,
  CheckCircle,
  AlertTriangle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Analytics Dashboard - Tim Catchim APEST Platform",
  description: "Comprehensive analytics and insights for your APEST platform performance, user engagement, and content effectiveness."
}

export default function Analytics() {
  const overviewStats = [
    {
      title: "Total Users",
      value: "25,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Monthly Revenue",
      value: "$127,430",
      change: "+8.3%", 
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Course Completions",
      value: "3,492",
      change: "+15.2%",
      trend: "up",
      icon: BookOpen,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Avg. Session Time",
      value: "24:36",
      change: "-2.1%",
      trend: "down",
      icon: Clock,
      color: "text-orange-600", 
      bgColor: "bg-orange-50"
    }
  ];

  const contentPerformance = [
    {
      title: "APEST Assessment Guide",
      type: "Course",
      views: "15,247",
      completions: "12,394",
      rating: 4.9,
      revenue: "$23,450",
      trend: "up"
    },
    {
      title: "Leadership Team Dynamics",
      type: "Video Series",
      views: "8,932",
      completions: "6,721",
      rating: 4.8,
      revenue: "$15,230",
      trend: "up"
    },
    {
      title: "Prophetic Ministry Foundations",
      type: "Course",
      views: "6,543",
      completions: "4,892",
      rating: 4.7,
      revenue: "$12,890",
      trend: "stable"
    },
    {
      title: "Church Planting Strategies",
      type: "Masterclass",
      views: "4,201",
      completions: "3,156",
      rating: 4.9,
      revenue: "$18,750",
      trend: "up"
    }
  ];

  const userEngagement = {
    dailyActiveUsers: "8,432",
    weeklyActiveUsers: "18,965",
    monthlyActiveUsers: "25,847",
    averageSessionDuration: "24:36",
    bounceRate: "23.4%",
    returnUserRate: "67.8%"
  };

  const revenueMetrics = {
    monthlyRecurringRevenue: "$127,430",
    annualRecurringRevenue: "$1,529,160",
    averageRevenuePerUser: "$47.23",
    customerLifetimeValue: "$342.80",
    churnRate: "3.2%",
    growthRate: "12.5%"
  };

  const topCountries = [
    { country: "United States", users: "12,847", percentage: "49.7%" },
    { country: "Canada", users: "3,294", percentage: "12.7%" },
    { country: "United Kingdom", users: "2,156", percentage: "8.3%" },
    { country: "Australia", users: "1,892", percentage: "7.3%" },
    { country: "Germany", users: "1,234", percentage: "4.8%" },
    { country: "Netherlands", users: "987", percentage: "3.8%" }
  ];

  const deviceBreakdown = [
    { device: "Desktop", percentage: 58.3, users: "15,068" },
    { device: "Mobile", percentage: 34.2, users: "8,840" },
    { device: "Tablet", percentage: 7.5, users: "1,939" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-trimtab-blue-4 mb-4">
              Analytics Dashboard
            </h1>
            <p className="text-xl text-trimtab-gray-3">
              Comprehensive insights into your platform performance and user engagement
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-trimtab-gray-2">
              <Calendar className="w-4 h-4 mr-2" />
              Last 30 Days
            </Button>
            <Button variant="outline" className="border-trimtab-gray-2">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="border-trimtab-gray-2">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="trimtab-cta-gradient text-white">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {overviewStats.map((stat, index) => {
            const IconComponent = stat.icon;
            const TrendIcon = stat.trend === 'up' ? ArrowUp : stat.trend === 'down' ? ArrowDown : Minus;
            return (
              <Card key={index} className="border-trimtab-gray-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${
                      stat.trend === 'up' ? 'text-green-600' : 
                      stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      <TrendIcon className="w-4 h-4" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-trimtab-blue-4 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-trimtab-gray-3">
                      {stat.title}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Revenue Trends */}
          <div className="lg:col-span-2">
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Revenue Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">${revenueMetrics.monthlyRecurringRevenue}</div>
                      <div className="text-sm text-trimtab-gray-3">Monthly Recurring Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-trimtab-blue-4">${revenueMetrics.averageRevenuePerUser}</div>
                      <div className="text-sm text-trimtab-gray-3">Average Revenue Per User</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{revenueMetrics.churnRate}</div>
                      <div className="text-sm text-trimtab-gray-3">Monthly Churn Rate</div>
                    </div>
                  </div>
                  
                  {/* Placeholder for chart */}
                  <div className="h-64 bg-gradient-to-br from-trimtab-blue-0 to-trimtab-blue-1 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-trimtab-blue-2 mx-auto mb-4" />
                      <div className="text-trimtab-blue-4 font-medium">Revenue Chart</div>
                      <div className="text-sm text-trimtab-gray-3">Interactive revenue visualization</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* User Engagement */}
          <div>
            <Card className="border-trimtab-gray-2 mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-trimtab-blue-4">User Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-trimtab-gray-3">Daily Active Users</span>
                    <span className="font-semibold text-trimtab-blue-4">{userEngagement.dailyActiveUsers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-trimtab-gray-3">Weekly Active Users</span>
                    <span className="font-semibold text-trimtab-blue-4">{userEngagement.weeklyActiveUsers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-trimtab-gray-3">Avg. Session Duration</span>
                    <span className="font-semibold text-trimtab-blue-4">{userEngagement.averageSessionDuration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-trimtab-gray-3">Bounce Rate</span>
                    <span className="font-semibold text-trimtab-blue-4">{userEngagement.bounceRate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-trimtab-gray-3">Return User Rate</span>
                    <span className="font-semibold text-green-600">{userEngagement.returnUserRate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <CardTitle className="text-lg text-trimtab-blue-4">Device Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deviceBreakdown.map((device, index) => {
                    const DeviceIcon = device.device === 'Desktop' ? Monitor : 
                                     device.device === 'Mobile' ? Smartphone : Tablet;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <DeviceIcon className="w-4 h-4 text-trimtab-blue-2" />
                          <span className="text-trimtab-gray-3">{device.device}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-trimtab-blue-4">{device.percentage}%</div>
                          <div className="text-xs text-trimtab-gray-2">{device.users}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Performance */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Top Performing Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-trimtab-gray-1">
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Content</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Views</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Completions</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Rating</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Revenue</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentPerformance.map((content, index) => (
                      <tr key={index} className="border-b border-trimtab-gray-1 hover:bg-trimtab-blue-0">
                        <td className="py-4 px-4">
                          <div className="font-medium text-trimtab-blue-4">{content.title}</div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant="outline" className="border-trimtab-blue-1 text-trimtab-blue-2">
                            {content.type}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-trimtab-gray-3">{content.views}</td>
                        <td className="py-4 px-4 text-trimtab-gray-3">{content.completions}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                            <span className="text-trimtab-blue-4 font-medium">{content.rating}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-green-600 font-medium">{content.revenue}</td>
                        <td className="py-4 px-4">
                          {content.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-600" />}
                          {content.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-600" />}
                          {content.trend === 'stable' && <Minus className="w-4 h-4 text-gray-600" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Geographic Distribution */}
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Geographic Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCountries.map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-trimtab-blue-2" />
                      <span className="text-trimtab-blue-4">{country.country}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-trimtab-blue-4">{country.users}</div>
                      <div className="text-sm text-trimtab-gray-2">{country.percentage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-trimtab-blue-4">API Response Time</span>
                  </div>
                  <span className="font-semibold text-green-600">120ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-trimtab-blue-4">Uptime</span>
                  </div>
                  <span className="font-semibold text-green-600">99.98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-trimtab-blue-4">Error Rate</span>
                  </div>
                  <span className="font-semibold text-yellow-600">0.02%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-trimtab-blue-4">Database Performance</span>
                  </div>
                  <span className="font-semibold text-green-600">Optimal</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-trimtab-blue-4">CDN Status</span>
                  </div>
                  <span className="font-semibold text-green-600">Active</span>
                </div>
                
                <div className="pt-4 border-t border-trimtab-gray-1">
                  <div className="text-sm text-trimtab-gray-3 mb-2">Last updated: 2 minutes ago</div>
                  <Button size="sm" variant="outline" className="w-full border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh Status
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
