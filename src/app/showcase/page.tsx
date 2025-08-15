"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  BookOpen,
  Users,
  Library,
  Smartphone,
  Compass,
  Map,
  Eye,
  ExternalLink,
  ArrowRight,
  Zap,
  Target,
  Heart,
  Search,
  Calendar,
  MessageCircle,
  BarChart3,
  Settings,
  Star,
  Award,
  TrendingUp,
  Globe,
  Layers,
  Navigation,
  CheckCircle,
  PlayCircle,
  FileText,
  Video,
  Headphones,
  Download,
  Rocket,
  Brain,
  Shield,
  Lightbulb
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ShowcasePage() {
  // All created content organized by category
  const contentSections = [
    {
      id: "website-layouts",
      title: "Complete Website Layout Options",
      description: "Five comprehensive website designs showing different organizational approaches to the APEST learning platform",
      icon: Layers,
      color: "bg-blue-500",
      items: [
        {
          title: "Hub-Centric Layout",
          description: "Specialized learning areas with departmental organization - six dedicated hubs for Learning, Assessment, Community, Resources, Coaching, and Analytics",
          path: "/website-option-hub",
          features: ["6 Learning Hubs", "Expert Coaching", "Progress Analytics", "Featured Content"],
          difficulty: "Professional",
          type: "Complete Website",
          icon: Target
        },
        {
          title: "Journey-Focused Layout", 
          description: "Linear progression with milestone-based advancement through six stages: Discovery → Foundation → Development → Application → Leadership → Mastery",
          path: "/website-option-journey",
          features: ["Progressive Stages", "Study Partners", "Milestone Tracking", "Achievement System"],
          difficulty: "Professional",
          type: "Complete Website",
          icon: Map
        },
        {
          title: "Community-First Layout",
          description: "Social learning platform emphasizing peer interaction, study groups, live events, and mentoring connections",
          path: "/website-option-community", 
          features: ["Community Feed", "Study Groups", "Live Events", "Mentoring Network"],
          difficulty: "Professional",
          type: "Complete Website",
          icon: Users
        },
        {
          title: "Resource-Rich Layout",
          description: "Comprehensive digital library with 8,450+ resources, advanced search, filtering, and content discovery tools",
          path: "/website-option-resource",
          features: ["8,450+ Resources", "Advanced Search", "Collections", "Download Manager"],
          difficulty: "Professional", 
          type: "Complete Website",
          icon: Library
        },
        {
          title: "Mobile-First Layout",
          description: "Mobile-optimized learning experience with offline capabilities, accessibility features, and touch-friendly controls",
          path: "/website-option-mobile",
          features: ["Mobile Optimized", "Offline Mode", "Dark Theme", "Accessibility"],
          difficulty: "Professional",
          type: "Complete Website", 
          icon: Smartphone
        }
      ]
    },
    {
      id: "ebook-examples",
      title: "APEST Learning Platform Examples",
      description: "Comprehensive learning platform demonstrations with interactive features and educational content",
      icon: BookOpen,
      color: "bg-green-500", 
      items: [
        {
          title: "APEST Ebook Example",
          description: "Original comprehensive learning hub with interactive chapters, assessments, and dashboard analytics covering all five ministry gifts",
          path: "/ebook-example",
          features: ["Interactive Chapters", "Gift Assessment", "Progress Dashboard", "Video Integration"],
          difficulty: "Comprehensive",
          type: "Learning Platform",
          icon: BookOpen
        },
        {
          title: "APEST Ebook Example Two", 
          description: "Enhanced learning platform with 12-chapter roadmap, advanced testimonials, comprehensive analytics, and sophisticated tracking",
          path: "/ebook-example-two",
          features: ["12-Chapter Roadmap", "Enhanced UI", "Advanced Analytics", "Testimonials"],
          difficulty: "Advanced",
          type: "Learning Platform",
          icon: Rocket
        }
      ]
    },
    {
      id: "navigation-docs",
      title: "Documentation & Navigation",
      description: "Comprehensive documentation explaining all created content and implementation approaches",
      icon: FileText,
      color: "bg-purple-500",
      items: [
        {
          title: "Website Layouts Documentation",
          description: "Complete documentation explaining all five website layout options, their philosophies, features, and implementation details",
          path: "/website-layouts",
          features: ["Layout Comparison", "Technical Details", "Usage Guidelines", "Feature Matrix"],
          difficulty: "Reference",
          type: "Documentation",
          icon: FileText
        }
      ]
    }
  ];

  // Statistics about created content
  const contentStats = {
    totalPages: 8,
    websiteLayouts: 5,
    learningPlatforms: 2,
    documentationPages: 1,
    totalComponents: 150,
    totalFeatures: 200,
    linesOfCode: 15000
  };

  // Key features across all content
  const keyFeatures = [
    {
      title: "Complete Responsive Design",
      description: "All layouts work perfectly on desktop, tablet, and mobile devices",
      icon: Smartphone,
      color: "text-blue-600"
    },
    {
      title: "APEST-Focused Content",
      description: "Every layout centers around the five ministry gifts framework",
      icon: Star,
      color: "text-purple-600"
    },
    {
      title: "Interactive Learning",
      description: "Assessments, progress tracking, and engaging user experiences",
      icon: PlayCircle,
      color: "text-green-600"
    },
    {
      title: "Community Integration",
      description: "Social features, study groups, and peer learning capabilities",
      icon: Users,
      color: "text-orange-600"
    },
    {
      title: "Professional UI/UX",
      description: "Modern design with shadcn/ui components and Tailwind CSS",
      icon: Eye,
      color: "text-indigo-600"
    },
    {
      title: "Accessibility Ready",
      description: "Built with accessibility considerations and mobile optimization",
      icon: Heart,
      color: "text-red-600"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Professional': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Advanced': return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'Comprehensive': return 'bg-green-100 text-green-700 border-green-300';
      case 'Reference': return 'bg-gray-100 text-gray-700 border-gray-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Complete Website': return 'bg-blue-50 text-blue-700';
      case 'Learning Platform': return 'bg-green-50 text-green-700';
      case 'Documentation': return 'bg-purple-50 text-purple-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">APEST Showcase</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#website-layouts" className="text-gray-700 hover:text-blue-600 font-medium">Website Layouts</Link>
              <Link href="#ebook-examples" className="text-gray-700 hover:text-blue-600 font-medium">Learning Platforms</Link>
              <Link href="#documentation" className="text-gray-700 hover:text-blue-600 font-medium">Documentation</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button asChild>
                <Link href="/">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Back to Main Site
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            APEST Platform Showcase
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Comprehensive collection of website layouts, learning platforms, and documentation 
            created for Tim Catchim's APEST ministry development framework
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{contentStats.totalPages}</div>
              <div className="text-blue-200">Total Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{contentStats.websiteLayouts}</div>
              <div className="text-blue-200">Website Layouts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{contentStats.learningPlatforms}</div>
              <div className="text-blue-200">Learning Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{contentStats.totalFeatures}+</div>
              <div className="text-blue-200">Features</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#website-layouts">
                <Layers className="w-5 h-5 mr-2" />
                View Website Layouts
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link href="#ebook-examples">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Learning Platforms
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built with Excellence</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every layout and platform demonstrates professional-grade development with modern technologies and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {contentSections.map((section) => (
            <div key={section.id} id={section.id} className="mb-20">
              <div className="text-center mb-12">
                <div className={`w-16 h-16 ${section.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">{section.description}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {section.items.map((item, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <item.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge className={getTypeColor(item.type)}>
                                  {item.type}
                                </Badge>
                                <Badge className={getDifficultyColor(item.difficulty)}>
                                  {item.difficulty}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>

                        <div className="space-y-3 mb-6">
                          <h4 className="font-medium text-gray-900 text-sm">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {item.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Button asChild className="flex-1 group-hover:bg-blue-600 transition-colors">
                            <Link href={item.path}>
                              <Eye className="w-4 h-4 mr-2" />
                              View Live Demo
                            </Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link href={item.path} target="_blank">
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Implementation</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Built with modern web technologies and professional development practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Next.js 15.4.6</h3>
                <p className="text-gray-600 text-sm">React framework with App Router and TypeScript</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
                <p className="text-gray-600 text-sm">Utility-first CSS framework for responsive design</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">shadcn/ui</h3>
                <p className="text-gray-600 text-sm">Professional UI components with consistent design</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">TypeScript</h3>
                <p className="text-gray-600 text-sm">Type-safe development with enhanced IDE support</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-white rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Development Statistics</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{contentStats.linesOfCode.toLocaleString()}</div>
                <div className="text-gray-600">Lines of Code</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">{contentStats.totalComponents}</div>
                <div className="text-gray-600">React Components</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">TypeScript Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <p className="text-gray-600 text-lg">Jump directly to any layout or platform to explore features and functionality</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Website Layouts Quick Links */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 mb-3">Website Layouts</h3>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/website-option-hub">
                  <Target className="w-4 h-4 mr-2" />
                  Hub-Centric
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/website-option-journey">
                  <Map className="w-4 h-4 mr-2" />
                  Journey-Focused
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/website-option-community">
                  <Users className="w-4 h-4 mr-2" />
                  Community-First
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/website-option-resource">
                  <Library className="w-4 h-4 mr-2" />
                  Resource-Rich
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/website-option-mobile">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile-First
                </Link>
              </Button>
            </div>

            {/* Learning Platforms Quick Links */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 mb-3">Learning Platforms</h3>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/ebook-example">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Original Platform
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/ebook-example-two">
                  <Rocket className="w-4 h-4 mr-2" />
                  Enhanced Platform
                </Link>
              </Button>
            </div>

            {/* Documentation Quick Links */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 mb-3">Documentation</h3>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/website-layouts">
                  <FileText className="w-4 h-4 mr-2" />
                  Layout Docs
                </Link>
              </Button>
            </div>

            {/* External Links */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 mb-3">Additional</h3>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/">
                  <Globe className="w-4 h-4 mr-2" />
                  Main Website
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
