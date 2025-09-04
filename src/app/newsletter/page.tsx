import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { 
  Mail, 
  Clock, 
  Users, 
  BookOpen, 
  Download,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Gift,
  Lightbulb,
  Target,
  Heart
} from "lucide-react"

export const metadata: Metadata = {
  title: "APEST Insights Newsletter - Stay Connected with Tim Catchim",
  description: "Get weekly insights, exclusive content, and practical tools for developing APEST giftings. Plus get your free APEST Leadership Guide when you subscribe."
}

export default function Newsletter() {
  const newsletterBenefits = [
    {
      title: "Weekly APEST Insights",
      description: "Practical applications of APEST principles in real ministry contexts",
      icon: Lightbulb,
      frequency: "Every Tuesday"
    },
    {
      title: "Exclusive Content",
      description: "Subscriber-only articles, videos, and resources not available elsewhere",
      icon: Gift,
      frequency: "Monthly"
    },
    {
      title: "Ministry Case Studies",
      description: "Real stories of transformation using APEST frameworks",
      icon: Target,
      frequency: "Bi-weekly"
    },
    {
      title: "Early Access",
      description: "First to know about new courses, workshops, and coaching opportunities",
      icon: Clock,
      frequency: "As available"
    }
  ];

  const recentIssues = [
    {
      title: "Building APEST-Balanced Teams: A Practical Guide",
      date: "September 1, 2025",
      excerpt: "How to identify and develop the five-fold giftings within your existing team structure...",
      readTime: "8 min read",
      topics: ["Team Building", "Leadership", "Apostolic"]
    },
    {
      title: "The Prophetic Voice in Modern Ministry",
      date: "August 25, 2025", 
      excerpt: "Understanding how prophetic gifting operates in today's church context without compromising truth...",
      readTime: "6 min read",
      topics: ["Prophetic", "Ministry", "Discernment"]
    },
    {
      title: "Evangelistic Heart vs. Evangelistic Gifting",
      date: "August 18, 2025",
      excerpt: "Every believer should have an evangelistic heart, but not everyone has the evangelistic gift...",
      readTime: "5 min read", 
      topics: ["Evangelism", "Gifts", "Calling"]
    },
    {
      title: "Shepherding in the Digital Age",
      date: "August 11, 2025",
      excerpt: "How pastoral care and community building adapt to online and hybrid ministry models...",
      readTime: "7 min read",
      topics: ["Shepherding", "Digital Ministry", "Care"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Martinez",
      role: "Senior Pastor",
      church: "Community Life Church",
      quote: "Tim's newsletter has become essential reading for our leadership team. The practical insights help us apply APEST principles in real ministry situations.",
      apestProfile: "Apostolic/Teaching"
    },
    {
      name: "Pastor Mike Johnson",
      role: "Church Planter", 
      church: "New Hope Community",
      quote: "Every week I get actionable wisdom that directly applies to building our church plant. The case studies are especially helpful.",
      apestProfile: "Apostolic/Evangelistic"
    },
    {
      name: "Lisa Chen",
      role: "Ministry Leader",
      church: "Grace Fellowship",
      quote: "The prophetic insights help me understand my role better and work more effectively with our senior leadership.",
      apestProfile: "Prophetic/Shepherding"
    }
  ];

  const leadMagnet = {
    title: "The APEST Leadership Assessment & Development Guide",
    subtitle: "Free 25-Page Digital Guide",
    description: "A comprehensive toolkit for identifying APEST giftings in yourself and others, plus practical development exercises for each gifting.",
    includes: [
      "Complete APEST assessment questionnaire",
      "Detailed scoring and interpretation guide", 
      "Development exercises for each of the five giftings",
      "Team dynamics worksheet",
      "Scripture study guide with key passages",
      "90-day development planning template"
    ],
    value: "$47",
    downloadCount: "12,847"
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-trimtab-blue-2 text-trimtab-blue-2">
            <Mail className="w-4 h-4 mr-2" />
            Weekly Newsletter
          </Badge>
          <h1 className="text-5xl font-bold text-trimtab-blue-4 mb-6">
            APEST Insights Newsletter
          </h1>
          <p className="text-xl text-trimtab-gray-3 max-w-3xl mx-auto mb-8">
            Stay connected with practical wisdom, exclusive content, and transformative insights 
            for developing APEST giftings in yourself and others.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-trimtab-gray-3">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-trimtab-blue-2" />
              <span>8,500+ Subscribers</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-trimtab-cta" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-trimtab-blue-2" />
              <span>3 Years Publishing</span>
            </div>
          </div>
        </header>

        {/* Lead Magnet CTA Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-trimtab-blue-0 to-trimtab-blue-1 border-trimtab-blue-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left side - Lead Magnet Info */}
                <div className="p-8 lg:p-12">
                  <Badge className="bg-trimtab-cta text-white mb-4">
                    <Download className="w-4 h-4 mr-2" />
                    Free Download
                  </Badge>
                  <h2 className="text-2xl font-bold text-trimtab-blue-4 mb-4">
                    {leadMagnet.title}
                  </h2>
                  <p className="text-trimtab-gray-4 mb-6">
                    {leadMagnet.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {leadMagnet.includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-trimtab-cta mt-0.5 flex-shrink-0" />
                        <span className="text-trimtab-gray-4">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-trimtab-gray-3">
                    <span className="line-through">Value: {leadMagnet.value}</span>
                    <Badge variant="outline" className="border-trimtab-cta text-trimtab-cta">
                      FREE Today
                    </Badge>
                    <span>{leadMagnet.downloadCount} downloads</span>
                  </div>
                </div>

                {/* Right side - Signup Form */}
                <div className="bg-white p-8 lg:p-12 border-l border-trimtab-blue-2">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-trimtab-blue-4 mb-2">
                        Get Your Free Guide + Weekly Insights
                      </h3>
                      <p className="text-trimtab-gray-3">
                        Join 8,500+ ministry leaders receiving practical APEST wisdom every week.
                      </p>
                    </div>
                    
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="email" className="text-trimtab-blue-4">Email Address</Label>
                        <Input 
                          id="email"
                          type="email" 
                          placeholder="your.email@church.com"
                          className="border-trimtab-gray-2"
                          required 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="name" className="text-trimtab-blue-4">First Name</Label>
                        <Input 
                          id="name"
                          type="text" 
                          placeholder="Your first name"
                          className="border-trimtab-gray-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="role" className="text-trimtab-blue-4">Ministry Role (Optional)</Label>
                        <select 
                          id="role"
                          className="w-full px-3 py-2 border border-trimtab-gray-2 rounded-md focus:outline-none focus:ring-2 focus:ring-trimtab-blue-2"
                        >
                          <option value="">Select your role...</option>
                          <option value="senior-pastor">Senior Pastor</option>
                          <option value="associate-pastor">Associate Pastor</option>
                          <option value="youth-pastor">Youth Pastor</option>
                          <option value="worship-leader">Worship Leader</option>
                          <option value="ministry-leader">Ministry Leader</option>
                          <option value="church-planter">Church Planter</option>
                          <option value="missionary">Missionary</option>
                          <option value="lay-leader">Lay Leader</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full trimtab-cta-gradient text-white text-lg py-6"
                        size="lg"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Get Free Guide + Subscribe
                      </Button>
                      
                      <p className="text-xs text-trimtab-gray-2 text-center">
                        Free guide sent instantly. Unsubscribe anytime. 
                        <Link href="/privacy" className="text-trimtab-blue-2 hover:underline ml-1">
                          Privacy Policy
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-8 text-center">
            What You'll Receive
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {newsletterBenefits.map((benefit, index) => (
              <Card key={index} className="border-trimtab-gray-2 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-trimtab-blue-0 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-trimtab-blue-2" />
                    </div>
                    <div>
                      <CardTitle className="text-trimtab-blue-4">{benefit.title}</CardTitle>
                      <Badge variant="outline" className="text-xs border-trimtab-gray-2 text-trimtab-gray-2">
                        <Clock className="w-3 h-3 mr-1" />
                        {benefit.frequency}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-trimtab-gray-3">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Issues */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-trimtab-blue-4">Recent Issues</h2>
            <Badge variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2">
              <Calendar className="w-4 h-4 mr-2" />
              Published Weekly
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentIssues.map((issue, index) => (
              <Card key={index} className="border-trimtab-gray-2 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <time className="text-sm text-trimtab-gray-2">{issue.date}</time>
                    <Badge variant="outline" className="text-xs border-trimtab-gray-2 text-trimtab-gray-2">
                      {issue.readTime}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-trimtab-blue-4 leading-tight">
                    {issue.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trimtab-gray-3 mb-4">{issue.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {issue.topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-trimtab-blue-1 text-trimtab-blue-2">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-trimtab-gray-3 mb-4">
              Want to see more? Subscribe to get full access to our newsletter archive.
            </p>
            <Button variant="outline" size="lg" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
              View Newsletter Archive
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-8 text-center">
            What Subscribers Are Saying
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-trimtab-gray-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-trimtab-cta fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-trimtab-gray-4 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-trimtab-gray-1 pt-4">
                    <div className="font-semibold text-trimtab-blue-4">{testimonial.name}</div>
                    <div className="text-sm text-trimtab-gray-3">{testimonial.role}</div>
                    <div className="text-sm text-trimtab-gray-3">{testimonial.church}</div>
                    <Badge variant="outline" className="text-xs border-trimtab-blue-1 text-trimtab-blue-2 mt-2">
                      <Heart className="w-3 h-3 mr-1" />
                      {testimonial.apestProfile}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="bg-trimtab-waypoint border-trimtab-waypoint-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-trimtab-blue-4 mb-4">
                Ready to Grow in Your APEST Journey?
              </h3>
              <p className="text-trimtab-gray-4 mb-6">
                Join thousands of ministry leaders who start their week with practical APEST insights. 
                Plus get your free leadership assessment guide instantly.
              </p>
              <Button size="lg" className="trimtab-cta-gradient text-white">
                <Mail className="w-5 h-5 mr-2" />
                Subscribe Now & Get Free Guide
              </Button>
              <p className="text-xs text-trimtab-gray-2 mt-3">
                No spam, ever. Unsubscribe with one click.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
