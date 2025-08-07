import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Users,
  BookOpen,
  GraduationCap,
  Calendar,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  TrendingUp,
  Award,
  Lightbulb,
  Heart
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "APEST Coaching",
      description: "Discover and develop your five-fold ministry gifts through personalized one-on-one coaching sessions.",
      icon: Users,
      color: "bg-blue-500",
      duration: "3-6 months",
      format: "Individual",
      price: "Starting at $500/month",
      features: [
        "Comprehensive APEST assessment",
        "Personalized gift development plan",
        "Bi-weekly coaching sessions",
        "Action-oriented homework",
        "Team integration strategies",
        "Ongoing support and accountability"
      ],
      outcomes: [
        "Clear understanding of your primary and secondary APEST gifts",
        "Practical strategies for leveraging your gifts in ministry",
        "Improved team dynamics and collaboration",
        "Increased leadership effectiveness and confidence"
      ],
      testimonial: {
        text: "Tim's APEST coaching transformed how I understand my leadership gifts and gave me practical tools to multiply my impact.",
        author: "Rev. Sarah Johnson",
        role: "Senior Pastor"
      }
    },
    {
      title: "Leadership Training",
      description: "Comprehensive programs designed to develop missional leaders at every level of your organization.",
      icon: GraduationCap,
      color: "bg-green-500",
      duration: "6-12 months",
      format: "Cohort",
      price: "Custom pricing",
      features: [
        "Missional leadership frameworks",
        "Practical leadership tools",
        "Cohort-based learning",
        "Peer collaboration",
        "Mentorship opportunities",
        "Implementation support"
      ],
      outcomes: [
        "Developed pipeline of emerging leaders",
        "Shared leadership language and frameworks",
        "Improved organizational culture",
        "Multiplied leadership capacity"
      ],
      testimonial: {
        text: "The leadership training program equipped our entire team with tools we use daily. It's transformed our organizational culture.",
        author: "Marcus Chen",
        role: "Executive Director"
      }
    },
    {
      title: "Church Consulting",
      description: "Strategic guidance to help churches transition toward greater missional engagement and effectiveness.",
      icon: BookOpen,
      color: "bg-purple-500",
      duration: "6-18 months",
      format: "Organization",
      price: "Contact for quote",
      features: [
        "Comprehensive organizational assessment",
        "Strategic planning facilitation",
        "Culture transformation strategy",
        "Leadership team development",
        "Implementation roadmap",
        "Ongoing consulting support"
      ],
      outcomes: [
        "Clear missional strategy and vision",
        "Aligned leadership team",
        "Improved organizational health",
        "Sustainable transformation processes"
      ],
      testimonial: {
        text: "Tim's consulting helped us develop a clear missional strategy that transformed our entire approach to ministry.",
        author: "Rev. Amanda Foster",
        role: "Denominational Leader"
      }
    },
    {
      title: "Speaking & Events",
      description: "Dynamic keynotes and workshops that inspire and equip leaders for personal and organizational transformation.",
      icon: Calendar,
      color: "bg-orange-500",
      duration: "Half-day to multi-day",
      format: "Group",
      price: "Contact for quote",
      features: [
        "Customized keynote presentations",
        "Interactive workshops",
        "Panel discussions",
        "Q&A sessions",
        "Resource materials",
        "Follow-up support"
      ],
      outcomes: [
        "Inspired and motivated teams",
        "Practical tools for immediate implementation",
        "Shared vision and language",
        "Momentum for transformation"
      ],
      testimonial: {
        text: "Tim's keynote at our conference was the catalyst for a movement of transformation across our network.",
        author: "Dr. Michael Thompson",
        role: "Conference Director"
      }
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery Call",
      description: "We start with a complimentary 30-minute call to understand your needs and explore fit.",
      icon: Calendar
    },
    {
      step: "2", 
      title: "Assessment",
      description: "I conduct a thorough assessment of your current situation and development goals.",
      icon: Target
    },
    {
      step: "3",
      title: "Custom Plan",
      description: "Together we create a personalized development plan aligned with your context and timeline.",
      icon: Lightbulb
    },
    {
      step: "4",
      title: "Implementation",
      description: "We execute the plan with regular check-ins, adjustments, and ongoing support.",
      icon: TrendingUp
    },
    {
      step: "5",
      title: "Integration",
      description: "You integrate new skills and frameworks into your daily leadership practice.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              Transform Your Leadership
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Services for
              <span className="block trimtab-gradient bg-clip-text text-transparent">
                Missional Leaders
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual coaching to organizational transformation, discover how 
              our proven APEST-based approach can unlock your potential and catalyze 
              lasting change in your ministry context.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration}
                        </span>
                        <span>{service.format}</span>
                        <span className="font-semibold text-blue-600">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Expected Outcomes:</h3>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-center text-gray-600">
                            <Target className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link href="/contact">
                      <Button size="lg" className="trimtab-gradient text-white border-0">
                        Get Started
                      </Button>
                    </Link>
                    <Link href={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                      <Button variant="outline" size="lg" className="flow-arrow">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="trimtab-card-hover">
                    <CardContent className="p-8">
                      <blockquote className="text-lg text-gray-700 italic mb-6">
                        "{service.testimonial.text}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                          <Users className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{service.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{service.testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures you get maximum value from our time together, 
              with clear milestones and tangible outcomes at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 trimtab-gradient rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="mb-4">
                  <step.icon className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-blue-300 mx-auto" />
                  </div>
                )}
              </div>
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
            Take the first step toward discovering your APEST gifts and catalyzing 
            transformation in your ministry context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white">
                Schedule Discovery Call
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                Learn About Tim
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
