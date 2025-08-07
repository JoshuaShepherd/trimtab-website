import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Zap,
  ArrowRight,
  Users,
  Target,
  BookOpen,
  GraduationCap,
  Calendar,
  MessageCircle,
  ChevronRight,
  Star,
  TrendingUp,
  Award,
  Globe,
  CheckCircle,
  Lightbulb,
  Heart,
  Compass
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      title: "APEST Coaching",
      description: "Discover and develop your five-fold ministry gifts through personalized coaching sessions.",
      icon: Users,
      color: "bg-blue-500",
      features: ["Personal Assessment", "Gift Development", "Team Alignment", "Ongoing Support"]
    },
    {
      title: "Leadership Training",
      description: "Comprehensive programs designed to develop missional leaders at every level.",
      icon: GraduationCap,
      color: "bg-green-500",
      features: ["Leadership Frameworks", "Practical Tools", "Cohort Learning", "Mentorship"]
    },
    {
      title: "Church Consulting",
      description: "Strategic guidance to help churches transition toward missional engagement.",
      icon: BookOpen,
      color: "bg-purple-500",
      features: ["Strategic Planning", "Culture Assessment", "Change Management", "Implementation Support"]
    },
    {
      title: "Speaking & Events",
      description: "Dynamic keynotes and workshops that inspire and equip leaders for transformation.",
      icon: Calendar,
      color: "bg-orange-500",
      features: ["Keynote Presentations", "Interactive Workshops", "Panel Discussions", "Q&A Sessions"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Senior Pastor, Grace Community Church",
      content: "Tim's APEST coaching transformed our leadership team. We finally understand how to leverage our unique gifts for maximum kingdom impact.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Church Planting Director",
      content: "The leadership training program gave me practical tools I use every day. Tim's approach is both biblically grounded and strategically sound.",
      rating: 5
    },
    {
      name: "Rev. Amanda Foster",
      role: "Denominational Leader",
      content: "Tim's consulting helped our denomination develop a clear missional strategy. The results have been transformational across our network.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Leaders Trained", icon: Users },
    { number: "50+", label: "Churches Transformed", icon: BookOpen },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "25+", label: "Countries Reached", icon: Globe }
  ];

  const apestGifts = [
    {
      name: "Apostolic",
      description: "Pioneers who establish new missional territories",
      icon: Compass,
      color: "text-red-600"
    },
    {
      name: "Prophetic",
      description: "Voices that call people back to God's heart",
      icon: Lightbulb,
      color: "text-orange-600"
    },
    {
      name: "Evangelistic",
      description: "Connectors who share the good news naturally",
      icon: Heart,
      color: "text-green-600"
    },
    {
      name: "Shepherding",
      description: "Caregivers who nurture and protect the community",
      icon: Users,
      color: "text-blue-600"
    },
    {
      name: "Teaching",
      description: "Educators who help others understand truth",
      icon: BookOpen,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2">
                Transforming Leaders • Catalyzing Movement
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Unlock Your
              <span className="block trimtab-gradient bg-clip-text text-transparent">
                Missional Potential
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover your APEST gifts, develop missional leadership, and catalyze transformation 
              in your church and community through proven frameworks and personalized coaching.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="trimtab-gradient text-white border-0 px-8 py-4 text-lg flow-arrow">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Free Discovery Call
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Proven Methodology
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Global Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 trimtab-gradient rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APEST Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The APEST Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on Ephesians 4:11-16, APEST represents the five-fold ministry gifts 
              given to equip and mobilize the entire body of Christ for mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {apestGifts.map((gift, index) => (
              <Card key={index} className="trimtab-card-hover text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <gift.icon className={`h-8 w-8 ${gift.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{gift.name}</h3>
                  <p className="text-sm text-gray-600">{gift.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/resources/apest-framework">
              <Button className="trimtab-gradient text-white border-0 flow-arrow">
                Explore APEST Framework
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to unlock your potential and catalyze 
              missional transformation in your context.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                    <Button variant="outline" className="w-full flow-arrow">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Leaders Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Real transformation stories from leaders worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 trimtab-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of leaders who have discovered their APEST gifts and 
            are catalyzing missional transformation in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white px-8 py-4 text-lg">
                Schedule Discovery Call
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600 px-8 py-4 text-lg flow-arrow">
                Access Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
