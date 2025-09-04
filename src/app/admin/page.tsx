import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { 
  Settings, 
  Users, 
  FileText, 
  Shield,
  Bell,
  Database,
  Mail,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  UserX,
  MessageSquare,
  BarChart3,
  Globe,
  Server,
  Key,
  Palette,
  Monitor,
  Smartphone,
  Calendar,
  Clock,
  Star,
  Flag,
  Zap,
  RefreshCw,
  Archive,
  UserCheck,
  DollarSign,
  TrendingUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "Admin Dashboard - Tim Catchim APEST Platform",
  description: "Comprehensive administration panel for managing users, content, payments, and platform settings."
}

export default function Admin() {
  const adminStats = [
    {
      title: "Total Users",
      value: "25,847",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Active Subscriptions",
      value: "18,432",
      change: "+8.3%",
      icon: UserCheck,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Monthly Revenue",
      value: "$127,430",
      change: "+15.2%",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Support Tickets",
      value: "23",
      change: "-5.1%",
      icon: MessageSquare,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const recentUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      role: "Member",
      subscription: "All-Access",
      joinDate: "2 hours ago",
      status: "active",
      apest: ["Apostle", "Teacher"]
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@ministry.org",
      role: "Leader",
      subscription: "Leadership Circle",
      joinDate: "5 hours ago",
      status: "active",
      apest: ["Prophet", "Shepherd"]
    },
    {
      id: 3,
      name: "Jennifer Davis",
      email: "jen.davis@church.com",
      role: "Member",
      subscription: "Explorer",
      joinDate: "1 day ago",
      status: "active",
      apest: ["Evangelist"]
    },
    {
      id: 4,
      name: "Robert Wilson",
      email: "rob.w@email.com",
      role: "Member",
      subscription: "All-Access",
      joinDate: "2 days ago",
      status: "suspended",
      apest: ["Shepherd", "Teacher"]
    }
  ];

  const contentStats = [
    {
      type: "Courses",
      count: 47,
      published: 42,
      draft: 5,
      icon: FileText
    },
    {
      type: "Videos",
      count: 189,
      published: 156,
      draft: 33,
      icon: Monitor
    },
    {
      type: "Blog Posts",
      count: 234,
      published: 198,
      draft: 36,
      icon: Edit
    },
    {
      type: "Assessments",
      count: 12,
      published: 8,
      draft: 4,
      icon: CheckCircle
    }
  ];

  const systemAlerts = [
    {
      id: 1,
      type: "warning",
      title: "High Database Usage",
      message: "Database usage is at 85% capacity. Consider optimization.",
      time: "10 minutes ago",
      action: "View Details"
    },
    {
      id: 2,
      type: "info",
      title: "Backup Completed",
      message: "Daily backup completed successfully at 2:00 AM.",
      time: "6 hours ago",
      action: "View Logs"
    },
    {
      id: 3,
      type: "success",
      title: "Security Scan Passed",
      message: "Weekly security scan completed with no issues found.",
      time: "1 day ago",
      action: "View Report"
    }
  ];

  const quickActions = [
    {
      title: "Add New User",
      description: "Create a new user account",
      icon: UserCheck,
      action: "Create User",
      color: "bg-blue-500"
    },
    {
      title: "Create Course",
      description: "Add new APEST course content",
      icon: Plus,
      action: "New Course",
      color: "bg-green-500"
    },
    {
      title: "System Backup",
      description: "Initiate manual backup",
      icon: Database,
      action: "Start Backup",
      color: "bg-purple-500"
    },
    {
      title: "Send Newsletter",
      description: "Compose and send newsletter",
      icon: Mail,
      action: "Compose",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-trimtab-blue-4 mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl text-trimtab-gray-3">
              Manage your APEST platform, users, content, and system settings
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-trimtab-gray-2">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button className="trimtab-cta-gradient text-white">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {adminStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="border-trimtab-gray-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs border-green-300 text-green-600">
                      {stat.change}
                    </Badge>
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
          {/* Quick Actions */}
          <div>
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <CardTitle className="text-xl text-trimtab-blue-4">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-3 border border-trimtab-gray-1 rounded-lg hover:bg-trimtab-blue-0 transition-colors">
                        <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-trimtab-blue-4">{action.title}</div>
                          <div className="text-sm text-trimtab-gray-3">{action.description}</div>
                        </div>
                        <Button size="sm" variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                          {action.action}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Alerts */}
          <div>
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  System Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemAlerts.map((alert) => {
                    const alertColors = {
                      warning: "border-l-yellow-500 bg-yellow-50",
                      info: "border-l-blue-500 bg-blue-50",
                      success: "border-l-green-500 bg-green-50",
                      error: "border-l-red-500 bg-red-50"
                    };
                    return (
                      <div key={alert.id} className={`border-l-4 p-4 rounded ${alertColors[alert.type as keyof typeof alertColors]}`}>
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-trimtab-blue-4 mb-1">{alert.title}</h4>
                            <p className="text-sm text-trimtab-gray-3 mb-2">{alert.message}</p>
                            <p className="text-xs text-trimtab-gray-2">{alert.time}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-xs text-trimtab-blue-2 hover:bg-white/50 mt-2">
                          {alert.action}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Overview */}
          <div>
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <CardTitle className="text-xl text-trimtab-blue-4">Content Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentStats.map((content, index) => {
                    const IconComponent = content.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-trimtab-blue-2" />
                          <div>
                            <div className="font-medium text-trimtab-blue-4">{content.type}</div>
                            <div className="text-sm text-trimtab-gray-3">
                              {content.published} published, {content.draft} draft
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-trimtab-blue-4">{content.count}</div>
                          <div className="text-xs text-trimtab-gray-2">Total</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Users */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Recent Users
                </CardTitle>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-trimtab-gray-2" />
                    <Input 
                      placeholder="Search users..." 
                      className="pl-10 border-trimtab-gray-2 w-64"
                    />
                  </div>
                  <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button className="trimtab-cta-gradient text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-trimtab-gray-1">
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">User</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Role</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Subscription</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">APEST Profile</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Joined</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-trimtab-gray-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b border-trimtab-gray-1 hover:bg-trimtab-blue-0">
                        <td className="py-4 px-4">
                          <div>
                            <div className="font-medium text-trimtab-blue-4">{user.name}</div>
                            <div className="text-sm text-trimtab-gray-3">{user.email}</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant="outline" className="border-trimtab-blue-1 text-trimtab-blue-2">
                            {user.role}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <Badge className={`${
                            user.subscription === 'Leadership Circle' ? 'bg-purple-500' :
                            user.subscription === 'All-Access' ? 'bg-blue-500' : 'bg-gray-500'
                          } text-white`}>
                            {user.subscription}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            {user.apest.map((gift, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                                {gift}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-trimtab-gray-3">{user.joinDate}</td>
                        <td className="py-4 px-4">
                          <Badge className={`${
                            user.status === 'active' ? 'bg-green-500' :
                            user.status === 'suspended' ? 'bg-red-500' : 'bg-gray-500'
                          } text-white`}>
                            {user.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-500 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-trimtab-gray-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-2">User Management</h3>
              <p className="text-sm text-trimtab-gray-3 mb-4">Manage user accounts, permissions, and subscriptions</p>
              <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                Manage Users
              </Button>
            </CardContent>
          </Card>

          <Card className="border-trimtab-gray-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-2">Content Management</h3>
              <p className="text-sm text-trimtab-gray-3 mb-4">Create, edit, and organize courses and content</p>
              <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                Manage Content
              </Button>
            </CardContent>
          </Card>

          <Card className="border-trimtab-gray-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-2">Analytics & Reports</h3>
              <p className="text-sm text-trimtab-gray-3 mb-4">View detailed analytics and generate reports</p>
              <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="border-trimtab-gray-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Settings className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-2">System Settings</h3>
              <p className="text-sm text-trimtab-gray-3 mb-4">Configure platform settings and preferences</p>
              <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                System Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
