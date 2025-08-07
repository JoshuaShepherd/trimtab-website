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
  Award,
  Globe,
  Heart,
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle
} from "lucide-react";

export default function AboutPage() {
  const timeline = [
    {
      year: "2008",
      title: "Ministry Beginnings",
      description: "Started pastoral ministry with a passion for equipping leaders and building healthy church communities."
    },
    {
      year: "2012",
      title: "APEST Discovery",
      description: "Encountered the five-fold ministry framework and saw its transformational potential for church leadership."
    },
    {
      year: "2015",
      title: "Global Consulting",
      description: "Began consulting with churches and organizations worldwide on missional transformation strategies."
    },
    {
      year: "2018",
      title: "TrimTab Founded",
      description: "Established TrimTab to systematically develop missional leaders through APEST-based coaching and training."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Pioneered online coaching methodologies and digital tools for leadership development during the pandemic."
    },
    {
      year: "2024",
      title: "Global Impact",
      description: "Reached 500+ leaders across 25+ countries, with proven frameworks for missional transformation."
    }
  ];

  const values = [
    {
      title: "Missional Focus",
      description: "Everything we do is oriented toward God's mission in the world and empowering others to join that mission.",
      icon: Target
    },
    {
      title: "Biblical Foundation",
      description: "Our frameworks and methodologies are grounded in Scripture, particularly the APEST gifts of Ephesians 4.",
      icon: BookOpen
    },
    {
      title: "Leadership Development",
      description: "We believe in the multiplication effect of developing leaders who develop other leaders.",
      icon: Users
    },
    {
      title: "Transformational Change",
      description: "We pursue deep, lasting transformation rather than superficial adjustments or quick fixes.",
      icon: TrendingUp
    },
    {
      title: "Global Perspective",
      description: "Our approach honors diverse cultural contexts while maintaining core biblical principles.",
      icon: Globe
    },
    {
      title: "Practical Application",
      description: "We provide concrete tools and frameworks that leaders can immediately implement in their contexts.",
      icon: Lightbulb
    }
  ];

  const qualifications = [
    "M.Div. in Pastoral Leadership",
    "20+ Years Ministry Experience",
    "Certified APEST Coach",
    "International Speaking Experience",
    "Published Author & Researcher",
    "Cross-Cultural Ministry Background"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
                About Tim Catchim
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Catalyzing the 
                <span className="block trimtab-gradient bg-clip-text text-transparent">
                  Missional Movement
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm passionate about helping leaders discover their APEST gifts and develop 
                the skills needed to catalyze missional transformation in their communities. 
                Through proven frameworks and personalized coaching, I equip leaders to multiply 
                their impact for the kingdom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="trimtab-gradient text-white border-0">
                    Work Together
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" size="lg">
                    Explore Resources
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-6xl">👨‍💼</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-yellow-500" />
                    <span className="font-semibold text-sm">500+ Leaders Trained</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission Statement</h2>
          <blockquote className="text-2xl text-gray-700 italic leading-relaxed">
            "To develop missional leaders who understand their APEST gifts and can 
            effectively deploy them to catalyze transformation in their churches, 
            communities, and spheres of influence."
          </blockquote>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and inform how we approach 
              leadership development and missional transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="trimtab-card-hover">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 trimtab-gradient rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From local ministry to global impact - the evolution of a passion 
              for developing missional leaders.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="trimtab-card-hover">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Qualifications & Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Two decades of ministry experience combined with academic training 
                and practical expertise in leadership development and organizational transformation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="trimtab-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold">Education</h3>
                      <p className="text-gray-600">Master of Divinity, Fuller Seminary</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Specialized in missional theology, leadership development, 
                    and organizational transformation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="trimtab-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold">Global Experience</h3>
                      <p className="text-gray-600">25+ Countries Served</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Cross-cultural ministry experience across diverse contexts 
                    and denominational backgrounds.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="trimtab-card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold">Publications</h3>
                      <p className="text-gray-600">Author & Researcher</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Published works on APEST framework, missional leadership, 
                    and church transformation strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 trimtab-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discover Your Leadership Potential?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's explore how your unique APEST gifts can catalyze transformation 
            in your ministry context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white">
                Schedule a Call
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

      <Footer />
    </div>
  );
}
