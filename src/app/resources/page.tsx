import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  BookOpen,
  Download,
  Video,
  FileText,
  Users,
  Target,
  Lightbulb,
  GraduationCap,
  CheckCircle,
  ExternalLink,
  Clock,
  Star,
  Award,
  Play,
  Calendar
} from "lucide-react";

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "APEST Framework",
      description: "Comprehensive resources for understanding and implementing the five-fold ministry gifts",
      icon: Users,
      color: "bg-blue-500",
      resources: [
        {
          title: "APEST Assessment Tool",
          type: "Assessment",
          description: "Comprehensive tool to identify your primary and secondary APEST gifts",
          format: "PDF",
          downloadable: true,
          premium: false
        },
        {
          title: "Five-Fold Ministry Guide",
          type: "Guide",
          description: "In-depth exploration of each APEST gift with practical applications",
          format: "PDF",
          downloadable: true,
          premium: true
        },
        {
          title: "APEST Team Dynamics Workshop",
          type: "Video",
          description: "How to leverage APEST gifts for better team collaboration",
          format: "Video Series",
          downloadable: false,
          premium: true
        }
      ]
    },
    {
      title: "Leadership Development",
      description: "Tools and frameworks for developing missional leaders at every level",
      icon: GraduationCap,
      color: "bg-green-500",
      resources: [
        {
          title: "Missional Leadership Framework",
          type: "Framework",
          description: "Complete framework for developing leaders who can catalyze transformation",
          format: "PDF",
          downloadable: true,
          premium: false
        },
        {
          title: "Leadership Development Toolkit",
          type: "Toolkit",
          description: "Practical tools for mentoring and developing emerging leaders",
          format: "PDF",
          downloadable: true,
          premium: true
        },
        {
          title: "Coaching Conversation Templates",
          type: "Templates",
          description: "Proven conversation templates for effective leadership coaching",
          format: "Word/PDF",
          downloadable: true,
          premium: true
        }
      ]
    },
    {
      title: "Organizational Transformation",
      description: "Resources for leading change and transformation in churches and organizations",
      icon: Target,
      color: "bg-purple-500",
      resources: [
        {
          title: "Church Health Assessment",
          type: "Assessment",
          description: "Comprehensive tool to assess organizational health and missional readiness",
          format: "PDF",
          downloadable: true,
          premium: false
        },
        {
          title: "Transformation Roadmap",
          type: "Roadmap",
          description: "Step-by-step guide for leading organizational transformation",
          format: "PDF",
          downloadable: true,
          premium: true
        },
        {
          title: "Culture Change Playbook",
          type: "Playbook",
          description: "Practical strategies for shifting organizational culture",
          format: "PDF",
          downloadable: true,
          premium: true
        }
      ]
    },
    {
      title: "Training Materials",
      description: "Ready-to-use materials for workshops, seminars, and training events",
      icon: Lightbulb,
      color: "bg-orange-500",
      resources: [
        {
          title: "APEST Workshop Curriculum",
          type: "Curriculum",
          description: "Complete curriculum for running APEST discovery workshops",
          format: "PowerPoint/PDF",
          downloadable: true,
          premium: true
        },
        {
          title: "Leadership Training Modules",
          type: "Modules",
          description: "Modular training content for leadership development programs",
          format: "PowerPoint/PDF",
          downloadable: true,
          premium: true
        },
        {
          title: "Facilitator Guides",
          type: "Guides",
          description: "Detailed guides for facilitating leadership development sessions",
          format: "PDF",
          downloadable: true,
          premium: true
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "The APEST Revolution",
      description: "Tim's comprehensive guide to understanding and implementing the five-fold ministry gifts in modern church contexts.",
      type: "E-Book",
      image: "📚",
      rating: 5,
      downloads: "2.5K",
      premium: true
    },
    {
      title: "Missional Leadership Masterclass",
      description: "6-hour video series covering the essential frameworks for developing missional leaders.",
      type: "Video Series",
      image: "🎥",
      rating: 5,
      downloads: "1.8K",
      premium: true
    },
    {
      title: "Quick APEST Assessment",
      description: "Free 10-minute assessment to get initial insights into your APEST gift mix.",
      type: "Assessment",
      image: "📋",
      rating: 4,
      downloads: "12K",
      premium: false
    }
  ];

  const webinars = [
    {
      title: "Discovering Your APEST Gifts",
      date: "February 15, 2024",
      time: "2:00 PM EST",
      description: "Introduction to the five-fold ministry gifts and how to identify yours",
      status: "upcoming",
      registrations: 234
    },
    {
      title: "Building APEST-Based Teams",
      date: "January 18, 2024",
      time: "2:00 PM EST", 
      description: "How to leverage APEST diversity for high-performing ministry teams",
      status: "recording",
      registrations: 456
    },
    {
      title: "Leading Transformation",
      date: "December 14, 2023",
      time: "2:00 PM EST",
      description: "Strategies for leading lasting change in your organization",
      status: "recording",
      registrations: 378
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              Leadership Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tools to Transform
              <span className="block trimtab-gradient bg-clip-text text-transparent">
                Your Leadership
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access proven frameworks, assessments, and training materials designed 
              to help you discover your APEST gifts and develop missional leadership 
              in your context.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular and impactful leadership development resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{resource.image}</div>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Badge variant="outline">{resource.type}</Badge>
                      {resource.premium && <Badge className="bg-yellow-100 text-yellow-800">Premium</Badge>}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      {[...Array(resource.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                  </div>
                  
                  <Button className="w-full trimtab-gradient text-white border-0">
                    {resource.premium ? 'Get Premium Access' : 'Download Free'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resource Library
            </h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive collection of leadership development resources
            </p>
          </div>
          
          <div className="space-y-12">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card key={resourceIndex} className="trimtab-card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="outline">{resource.type}</Badge>
                          <div className="flex space-x-2">
                            {resource.premium && (
                              <Badge className="bg-yellow-100 text-yellow-800">Premium</Badge>
                            )}
                            {resource.downloadable && (
                              <Download className="h-4 w-4 text-green-600" />
                            )}
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {resource.title}
                        </h4>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{resource.format}</span>
                          <Button size="sm" variant="outline">
                            {resource.premium ? 'Get Access' : 'Download'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-600">
              Join live sessions for deeper insights and Q&A with Tim
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={webinar.status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                      {webinar.status === 'upcoming' ? 'Upcoming' : 'Recording Available'}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {webinar.registrations}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    {webinar.date} • {webinar.time}
                  </div>
                  
                  <Button className="w-full" variant={webinar.status === 'upcoming' ? 'default' : 'outline'}>
                    {webinar.status === 'upcoming' ? 'Register Now' : 'Watch Recording'}
                  </Button>
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
            Need Personalized Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            While these resources provide a great foundation, sometimes you need 
            personalized guidance to maximize your leadership impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white">
                Schedule Coaching Call
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
