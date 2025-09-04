import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { 
  Mail, 
  Send, 
  Users, 
  TrendingUp,
  Eye,
  MousePointer,
  UserX,
  Calendar,
  Clock,
  Edit,
  Copy,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  BarChart3,
  Target,
  Zap,
  CheckCircle,
  AlertCircle,
  Pause,
  Play,
  Settings,
  FileText,
  Image,
  Link as LinkIcon,
  Star,
  Heart,
  MessageSquare,
  Share2,
  RefreshCw,
  Globe,
  Smartphone,
  Monitor,
  ArrowRight,
  ArrowUp,
  ArrowDown
} from "lucide-react"

export const metadata: Metadata = {
  title: "Email Marketing Dashboard - Tim Catchim APEST Platform",
  description: "Manage email campaigns, automation sequences, and subscriber engagement for your APEST community."
}

export default function EmailMarketing() {
  const emailStats = [
    {
      title: "Total Subscribers",
      value: "28,492",
      change: "+15.3%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Monthly Opens",
      value: "142,387",
      change: "+8.7%",
      icon: Eye,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Click Rate",
      value: "12.4%",
      change: "+2.1%",
      icon: MousePointer,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Revenue Generated",
      value: "$47,230",
      change: "+18.5%",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const recentCampaigns = [
    {
      id: 1,
      name: "APEST Leadership Assessment - New Results Available",
      type: "Newsletter",
      status: "sent",
      sentDate: "September 3, 2025",
      recipients: 28492,
      opens: 18734,
      clicks: 3521,
      openRate: "65.7%",
      clickRate: "12.4%",
      revenue: "$8,450"
    },
    {
      id: 2,
      name: "Welcome Series - Part 3: Discovering Your Prophetic Voice",
      type: "Automation",
      status: "active",
      sentDate: "Ongoing",
      recipients: 2847,
      opens: 1823,
      clicks: 467,
      openRate: "64.0%",
      clickRate: "16.4%",
      revenue: "$2,340"
    },
    {
      id: 3,
      name: "Flash Sale: APEST Foundations Course 50% Off",
      type: "Promotion",
      status: "scheduled",
      sentDate: "September 6, 2025",
      recipients: 25634,
      opens: 0,
      clicks: 0,
      openRate: "0%",
      clickRate: "0%",
      revenue: "$0"
    },
    {
      id: 4,
      name: "Monthly Community Digest - August Highlights",
      type: "Newsletter",
      status: "sent",
      sentDate: "August 31, 2025",
      recipients: 27891,
      opens: 17234,
      clicks: 2891,
      openRate: "61.8%",
      clickRate: "10.4%",
      revenue: "$3,890"
    }
  ];

  const automationSequences = [
    {
      id: 1,
      name: "Welcome Series",
      description: "7-email sequence introducing new subscribers to APEST concepts",
      status: "active",
      emails: 7,
      subscribers: 2847,
      completionRate: "78.3%",
      avgOpenRate: "64.2%",
      revenue: "$12,450"
    },
    {
      id: 2,
      name: "Course Completion Follow-up",
      description: "3-email sequence for users who complete APEST assessment",
      status: "active",
      emails: 3,
      subscribers: 1234,
      completionRate: "89.1%",
      avgOpenRate: "71.5%",
      revenue: "$5,680"
    },
    {
      id: 3,
      name: "Re-engagement Campaign",
      description: "5-email sequence for inactive subscribers",
      status: "paused",
      emails: 5,
      subscribers: 0,
      completionRate: "45.7%",
      avgOpenRate: "32.1%",
      revenue: "$890"
    },
    {
      id: 4,
      name: "Leadership Circle Nurture",
      description: "Monthly high-value content for premium subscribers",
      status: "active",
      emails: 12,
      subscribers: 892,
      completionRate: "92.4%",
      avgOpenRate: "78.9%",
      revenue: "$18,340"
    }
  ];

  const subscriberSegments = [
    {
      name: "New Subscribers (0-30 days)",
      count: 3247,
      percentage: 11.4,
      avgOpenRate: "68.3%",
      growth: "+23.1%"
    },
    {
      name: "APEST Assessment Takers",
      count: 18934,
      percentage: 66.5,
      avgOpenRate: "72.1%",
      growth: "+12.8%"
    },
    {
      name: "Course Purchasers",
      count: 8943,
      percentage: 31.4,
      avgOpenRate: "78.9%",
      growth: "+18.5%"
    },
    {
      name: "Leadership Circle Members",
      count: 892,
      percentage: 3.1,
      avgOpenRate: "84.2%",
      growth: "+25.7%"
    },
    {
      name: "Inactive (90+ days)",
      count: 2134,
      percentage: 7.5,
      avgOpenRate: "12.3%",
      growth: "-8.9%"
    }
  ];

  const emailTemplates = [
    {
      id: 1,
      name: "APEST Weekly Insight",
      description: "Weekly newsletter template with APEST insights",
      category: "Newsletter",
      usageCount: 47,
      lastUsed: "2 days ago"
    },
    {
      id: 2,
      name: "Course Launch Announcement",
      description: "Template for announcing new course releases",
      category: "Promotion",
      usageCount: 12,
      lastUsed: "1 week ago"
    },
    {
      id: 3,
      name: "Welcome to APEST Journey",
      description: "Welcome email for new subscribers",
      category: "Welcome",
      usageCount: 234,
      lastUsed: "1 hour ago"
    },
    {
      id: 4,
      name: "Assessment Results Follow-up",
      description: "Follow-up email after completing APEST assessment",
      category: "Follow-up",
      usageCount: 89,
      lastUsed: "3 hours ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-trimtab-blue-4 mb-4">
              Email Marketing Dashboard
            </h1>
            <p className="text-xl text-trimtab-gray-3">
              Manage campaigns, automation, and subscriber engagement for your APEST community
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-trimtab-gray-2">
              <Upload className="w-4 h-4 mr-2" />
              Import Contacts
            </Button>
            <Button variant="outline" className="border-trimtab-gray-2">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Button className="trimtab-cta-gradient text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Campaign
            </Button>
          </div>
        </div>

        {/* Email Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {emailStats.map((stat, index) => {
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
          {/* Recent Campaigns */}
          <div className="lg:col-span-2">
            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Recent Campaigns
                  </CardTitle>
                  <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCampaigns.map((campaign) => (
                    <div key={campaign.id} className="border border-trimtab-gray-1 rounded-lg p-4 hover:bg-trimtab-blue-0 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-trimtab-blue-4 mb-1">{campaign.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-trimtab-gray-3">
                            <Badge variant="outline" className="border-trimtab-blue-1 text-trimtab-blue-2">
                              {campaign.type}
                            </Badge>
                            <span>•</span>
                            <span>{campaign.sentDate}</span>
                          </div>
                        </div>
                        <Badge className={`${
                          campaign.status === 'sent' ? 'bg-green-500' :
                          campaign.status === 'active' ? 'bg-blue-500' :
                          campaign.status === 'scheduled' ? 'bg-yellow-500' : 'bg-gray-500'
                        } text-white`}>
                          {campaign.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-trimtab-gray-3">Recipients</div>
                          <div className="font-semibold text-trimtab-blue-4">{campaign.recipients.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-trimtab-gray-3">Open Rate</div>
                          <div className="font-semibold text-trimtab-blue-4">{campaign.openRate}</div>
                        </div>
                        <div>
                          <div className="text-trimtab-gray-3">Click Rate</div>
                          <div className="font-semibold text-trimtab-blue-4">{campaign.clickRate}</div>
                        </div>
                        <div>
                          <div className="text-trimtab-gray-3">Revenue</div>
                          <div className="font-semibold text-green-600">{campaign.revenue}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 text-xs text-trimtab-gray-2">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {campaign.opens.toLocaleString()} opens
                          </span>
                          <span className="flex items-center gap-1">
                            <MousePointer className="w-3 h-3" />
                            {campaign.clicks.toLocaleString()} clicks
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="border-trimtab-gray-2 mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-trimtab-blue-4">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start trimtab-cta-gradient text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Campaign
                </Button>
                <Button variant="outline" className="w-full justify-start border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  <Zap className="w-4 h-4 mr-2" />
                  Setup Automation
                </Button>
                <Button variant="outline" className="w-full justify-start border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  <Target className="w-4 h-4 mr-2" />
                  Manage Segments
                </Button>
                <Button variant="outline" className="w-full justify-start border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  <FileText className="w-4 h-4 mr-2" />
                  Email Templates
                </Button>
              </CardContent>
            </Card>

            <Card className="border-trimtab-gray-2">
              <CardHeader>
                <CardTitle className="text-lg text-trimtab-blue-4">Subscriber Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-trimtab-blue-4">+1,247</div>
                    <div className="text-sm text-trimtab-gray-3">New subscribers this month</div>
                  </div>
                  
                  {/* Placeholder for chart */}
                  <div className="h-32 bg-gradient-to-br from-trimtab-blue-0 to-trimtab-blue-1 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-trimtab-blue-2 mx-auto mb-2" />
                      <div className="text-xs text-trimtab-gray-3">Growth Chart</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-green-600">+15.3%</div>
                      <div className="text-trimtab-gray-3">Growth Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-red-600">2.1%</div>
                      <div className="text-trimtab-gray-3">Unsubscribe Rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Automation Sequences */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Automation Sequences
                </CardTitle>
                <Button className="trimtab-cta-gradient text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  New Automation
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {automationSequences.map((sequence) => (
                  <div key={sequence.id} className="border border-trimtab-gray-1 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-trimtab-blue-4 mb-2">{sequence.name}</h3>
                        <p className="text-sm text-trimtab-gray-3 mb-3">{sequence.description}</p>
                      </div>
                      <Badge className={`${
                        sequence.status === 'active' ? 'bg-green-500' :
                        sequence.status === 'paused' ? 'bg-yellow-500' : 'bg-gray-500'
                      } text-white`}>
                        {sequence.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <div className="text-trimtab-gray-3">Emails</div>
                        <div className="font-semibold text-trimtab-blue-4">{sequence.emails}</div>
                      </div>
                      <div>
                        <div className="text-trimtab-gray-3">Subscribers</div>
                        <div className="font-semibold text-trimtab-blue-4">{sequence.subscribers.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-trimtab-gray-3">Completion Rate</div>
                        <div className="font-semibold text-trimtab-blue-4">{sequence.completionRate}</div>
                      </div>
                      <div>
                        <div className="text-trimtab-gray-3">Avg Open Rate</div>
                        <div className="font-semibold text-trimtab-blue-4">{sequence.avgOpenRate}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-trimtab-gray-3">Revenue: </span>
                        <span className="font-semibold text-green-600">{sequence.revenue}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                          {sequence.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Subscriber Segments */}
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Subscriber Segments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subscriberSegments.map((segment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-trimtab-gray-1 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-trimtab-blue-4">{segment.name}</div>
                      <div className="text-sm text-trimtab-gray-3">
                        {segment.count.toLocaleString()} subscribers ({segment.percentage}%)
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-trimtab-blue-4">{segment.avgOpenRate}</div>
                      <div className={`text-xs flex items-center gap-1 ${
                        segment.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {segment.growth.startsWith('+') ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                        {segment.growth}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Email Templates */}
          <Card className="border-trimtab-gray-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Email Templates
                </CardTitle>
                <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  <Plus className="w-4 h-4 mr-2" />
                  New Template
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emailTemplates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between p-3 border border-trimtab-gray-1 rounded-lg hover:bg-trimtab-blue-0 transition-colors">
                    <div className="flex-1">
                      <div className="font-medium text-trimtab-blue-4">{template.name}</div>
                      <div className="text-sm text-trimtab-gray-3">{template.description}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs border-trimtab-blue-1 text-trimtab-blue-2">
                          {template.category}
                        </Badge>
                        <span className="text-xs text-trimtab-gray-2">Used {template.usageCount} times</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-trimtab-gray-2 mb-2">Last used {template.lastUsed}</div>
                      <div className="flex items-center gap-1">
                        <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                          <Edit className="w-4 h-4" />
                        </Button>
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
  )
}
