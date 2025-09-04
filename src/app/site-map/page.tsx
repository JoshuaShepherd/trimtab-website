import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  Home,
  User,
  BookOpen,
  MessageSquare,
  FileText,
  Users,
  Settings,
  ShoppingCart,
  CreditCard,
  BarChart3,
  Crown,
  Zap,
  Target,
  Play,
  Headphones,
  Mail,
  Phone,
  Search,
  Code,
  Layers,
  Brain,
  Compass,
  Globe,
  Folder,
  ExternalLink,
  Star,
  Award,
  Shield,
  Wrench,
  Database,
  Palette,
  Layout,
  Terminal,
  GitBranch,
  Package,
  Monitor,
  Smartphone,
  Coffee,
  Book,
  GraduationCap,
  ChevronRight,
  MapPin,
  Building2,
  Heart,
  Lightbulb,
  Sparkles
} from "lucide-react"

export const metadata: Metadata = {
  title: "Site Map - Tim Catchim APEST Platform",
  description: "Complete navigation and reference for all pages and features of the APEST platform."
}

export default function SiteMap() {
  const siteStructure = [
    {
      category: "Core Platform",
      icon: Home,
      description: "Main platform pages and primary navigation",
      pages: [
        { name: "Home", path: "/", description: "Main landing page with platform overview" },
        { name: "About", path: "/about", description: "Tim's story and APEST mission" },
        { name: "Services", path: "/services", description: "Complete services overview" },
        { name: "Contact", path: "/contact", description: "Get in touch and support" }
      ]
    },
    {
      category: "APEST Learning",
      icon: BookOpen,
      description: "Educational content and course materials",
      pages: [
        { name: "Courses", path: "/courses", description: "All available APEST courses" },
        { name: "APEST Quiz", path: "/apest-quiz", description: "Discover your APEST gifts" },
        { name: "APEST Quiz Results", path: "/apest-quiz-results", description: "Detailed gift assessment results" },
        { name: "APEST Descriptions", path: "/apest-descriptions", description: "Comprehensive gift explanations" },
        { name: "Learning Management", path: "/learning-management", description: "Advanced learning platform" }
      ]
    },
    {
      category: "APEST Gift Descriptions",
      icon: Star,
      description: "Detailed exploration of each APEST gift",
      pages: [
        { name: "Apostle Description", path: "/apostle-description", description: "Understanding apostolic calling" },
        { name: "Prophet Description", path: "/prophet-description", description: "Exploring prophetic ministry" },
        { name: "Evangelist Description", path: "/evangelist-description", description: "The heart of evangelism" },
        { name: "Shepherd Description", path: "/shepherd-description", description: "Pastoral care and leadership" },
        { name: "Teacher Description", path: "/teacher-description", description: "Educational ministry gifts" }
      ]
    },
    {
      category: "APEST Course Collections",
      icon: GraduationCap,
      description: "Specialized course collections by gift",
      pages: [
        { name: "APEST Foundations", path: "/apest-foundations-courses", description: "Core APEST principles" },
        { name: "Apostle Courses", path: "/apostle-courses", description: "Apostolic leadership training" },
        { name: "Prophet Courses", path: "/prophet-courses", description: "Prophetic ministry development" },
        { name: "Evangelist Courses", path: "/evangelist-courses", description: "Evangelistic effectiveness" },
        { name: "Shepherd Courses", path: "/shepherd-courses", description: "Pastoral leadership skills" },
        { name: "Teacher Courses", path: "/teacher-courses", description: "Educational ministry training" }
      ]
    },
    {
      category: "Featured Courses",
      icon: Award,
      description: "Highlighted course offerings",
      pages: [
        { name: "The Four Apostles Course", path: "/the-four-apostles-course", description: "Deep dive into apostolic types" },
        { name: "The Four Prophets Course", path: "/the-four-prophets-course", description: "Prophetic ministry models" },
        { name: "The Four Evangelists Course", path: "/the-four-evangelists-course", description: "Evangelistic approaches" },
        { name: "The Four Shepherds Course", path: "/the-four-shepherds-course", description: "Pastoral leadership styles" },
        { name: "The Four Teachers Course", path: "/the-four-teachers-course", description: "Teaching methodologies" },
        { name: "Single Course Template", path: "/single-course-template", description: "Course page template" }
      ]
    },
    {
      category: "Blog & Content",
      icon: FileText,
      description: "Articles, insights, and written content",
      pages: [
        { name: "Blog Home", path: "/blog", description: "Latest APEST articles and insights" },
        { name: "The Definition of Apostle", path: "/blog/the-definition-of-apostle", description: "Understanding apostolic calling" },
        { name: "The Definition of Prophet", path: "/blog/the-definition-of-prophet", description: "Prophetic ministry explained" },
        { name: "The Four Apostles", path: "/blog/the-four-apostles", description: "Apostolic typologies" },
        { name: "The Four Prophets", path: "/blog/the-four-prophets", description: "Prophetic models" },
        { name: "The Four Evangelists", path: "/blog/the-four-evangelists", description: "Evangelistic types" },
        { name: "The Four Shepherds", path: "/blog/the-four-shepherds", description: "Pastoral approaches" },
        { name: "The Four Teachers", path: "/blog/the-four-teachers", description: "Teaching styles" },
        { name: "The Other Apostles", path: "/blog/the-other-apostles", description: "Lesser-known apostolic figures" },
        { name: "Embracing the Prophetic", path: "/blog/embracing-the-prophetic", description: "Prophetic ministry today" },
        { name: "APEST vs Spiritual Gifts", path: "/blog/apest-vs-spiritual-gifts-whats-the-difference", description: "Key distinctions explained" },
        { name: "APEST: The Only Gifts Given by Christ", path: "/blog/apest-the-only-gifts-given-by-christ", description: "Biblical foundation" },
        { name: "APEST: Connected with the Gospel", path: "/blog/apest-the-only-gifts-connected-with-the-gospel", description: "Gospel relationship" },
        { name: "Where is APEST in Acts?", path: "/blog/where-is-apest-in-the-book-of-acts", description: "Biblical evidence" },
        { name: "APEST Rated E - Part 1", path: "/blog/apest-rated-e-for-everyone-part-1", description: "Accessibility series" },
        { name: "APEST Rated E - Part 2", path: "/blog/apest-rated-e-for-everyone-part-2", description: "Continued exploration" },
        { name: "APEST Rated E - Part 3", path: "/blog/apest-rated-e-for-everyone-part-3", description: "Advanced concepts" },
        { name: "APEST Rated E - Part 4", path: "/blog/apest-rated-e-for-everyone-part-4", description: "Series conclusion" },
        { name: "The Backstory: Giants, Demons & APEST", path: "/blog/the-backstory-giants-demons-spiritual-warfare-and-apest", description: "Spiritual warfare perspective" }
      ]
    },
    {
      category: "Services & Coaching",
      icon: Users,
      description: "Professional services and consultation",
      pages: [
        { name: "Coaching", path: "/coaching", description: "Personal APEST coaching" },
        { name: "Consulting", path: "/consulting", description: "Organizational APEST consulting" },
        { name: "Co-Lab", path: "/co-lab", description: "Collaborative ministry projects" }
      ]
    },
    {
      category: "Community & Media",
      icon: MessageSquare,
      description: "Community engagement and media content",
      pages: [
        { name: "Community", path: "/community", description: "APEST community platform" },
        { name: "Podcast", path: "/podcast", description: "APEST Insights podcast" },
        { name: "Newsletter", path: "/newsletter", description: "Subscribe to updates" },
        { name: "AI Workspace", path: "/ai-workspace", description: "AI-powered ministry tools" }
      ]
    },
    {
      category: "E-commerce & Shop",
      icon: ShoppingCart,
      description: "Products and purchasing",
      pages: [
        { name: "Shop", path: "/shop", description: "APEST books and resources" },
        { name: "Resources", path: "/resources", description: "Free and premium resources" },
        { name: "Cart", path: "/cart", description: "Shopping cart" },
        { name: "Checkout", path: "/checkout", description: "Secure payment processing" }
      ]
    },
    {
      category: "E-book Platform",
      icon: Book,
      description: "Digital book reading experience",
      pages: [
        { name: "E-book Home", path: "/ebook", description: "Digital book platform" },
        { name: "E-book Chapter", path: "/ebook/chapter/[id]", description: "Individual chapter reading" },
        { name: "Web Book", path: "/ebook/webbook", description: "Online book format" },
        { name: "E-book SKUs", path: "/ebook/skus", description: "Product variations" },
        { name: "Store Bridge", path: "/ebook/store-bridge", description: "E-commerce integration" },
        { name: "Style Guide", path: "/ebook/style-guide", description: "E-book design system" },
        { name: "Thank You", path: "/ebook/thank-you", description: "Purchase confirmation" },
        { name: "E-book Example", path: "/ebook-example", description: "Sample book experience" },
        { name: "E-book Example Chapter", path: "/ebook-example/chapter/[id]", description: "Sample chapter" },
        { name: "E-book Example Two", path: "/ebook-example-two", description: "Alternative book format" },
        { name: "E-book Two Chapter", path: "/ebook-example-two/chapter/[id]", description: "Alternative chapter format" },
        { name: "E-book Two Quiz", path: "/ebook-example-two/apest-quiz", description: "Integrated assessment" },
        { name: "E-book Two Dashboard", path: "/ebook-example-two/dashboard", description: "Reader dashboard" }
      ]
    },
    {
      category: "User Account & Membership",
      icon: User,
      description: "User management and membership features",
      pages: [
        { name: "Sign In", path: "/signin", description: "User authentication" },
        { name: "Sign Up", path: "/signup", description: "Create new account" },
        { name: "My Account", path: "/my-account", description: "Account management" },
        { name: "My Account 2", path: "/my-account-2", description: "Alternative account page" },
        { name: "Dashboard", path: "/dashboard", description: "User dashboard" },
        { name: "Member Portal", path: "/member-portal", description: "Premium member access" },
        { name: "Membership", path: "/membership", description: "Membership plans and benefits" }
      ]
    },
    {
      category: "Admin & Management",
      icon: Settings,
      description: "Platform administration and content management",
      pages: [
        { name: "Admin Panel", path: "/admin", description: "Platform administration" },
        { name: "Analytics", path: "/analytics", description: "Platform analytics dashboard" },
        { name: "Content Management", path: "/content-management", description: "Content creation and editing" },
        { name: "Email Marketing", path: "/email-marketing", description: "Email campaign management" }
      ]
    },
    {
      category: "Development Tools",
      icon: Code,
      description: "Development utilities and examples",
      pages: [
        { name: "Showcase", path: "/showcase", description: "Platform features showcase" },
        { name: "Dashboard Example", path: "/dashboard-example", description: "Sample dashboard" },
        { name: "APEST Quiz Example", path: "/apest-quiz-example", description: "Quiz demonstration" },
        { name: "Tools Scaffolding", path: "/tools/scaffolding", description: "Development scaffolding" },
        { name: "Personal Prompting Guide", path: "/personal-prompting-guide", description: "Tim's development reference" }
      ]
    },
    {
      category: "Website Design Options",
      icon: Layout,
      description: "Alternative website layouts and designs",
      pages: [
        { name: "Mobile Option", path: "/website-option-mobile", description: "Mobile-optimized design" },
        { name: "Resource Option", path: "/website-option-resource", description: "Resource-focused layout" },
        { name: "Community Option", path: "/website-option-community", description: "Community-centered design" },
        { name: "Journey Option", path: "/website-option-journey", description: "Learning journey layout" },
        { name: "Hub Option", path: "/website-option-hub", description: "Central hub design" }
      ]
    },
    {
      category: "Skills Integration",
      icon: Target,
      description: "EMSI skills integration features",
      pages: [
        { name: "EMSI Skills", path: "/esmi-skills", description: "Skills assessment integration" },
        { name: "Skills Autocomplete", path: "/emsi-skills-autocomplete", description: "Skills search with autocomplete" },
        { name: "Skills Dropdown", path: "/emsi-skills-dropdown", description: "Skills selection dropdown" }
      ]
    }
  ];

  const totalPages = siteStructure.reduce((sum, category) => sum + category.pages.length, 0);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-trimtab-cta" />
            <h1 className="text-4xl font-bold text-trimtab-blue-4">
              Complete Site Map
            </h1>
            <Compass className="w-8 h-8 text-trimtab-cta" />
          </div>
          <p className="text-xl text-trimtab-gray-3 max-w-3xl mx-auto mb-6">
            Your complete navigation guide to the APEST platform. Every page, feature, and resource organized for easy discovery.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge className="bg-trimtab-cta text-white text-lg px-4 py-2">
              <Globe className="w-5 h-5 mr-2" />
              {totalPages} Total Pages
            </Badge>
            <Badge className="bg-green-500 text-white text-lg px-4 py-2">
              <Building2 className="w-5 h-5 mr-2" />
              {siteStructure.length} Categories
            </Badge>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-xl text-trimtab-blue-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Quick Navigation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {siteStructure.slice(0, 8).map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <Link 
                      key={index}
                      href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 p-3 bg-white border border-trimtab-gray-1 rounded-lg hover:bg-trimtab-blue-0 transition-colors"
                    >
                      <IconComponent className="w-4 h-4 text-trimtab-blue-2" />
                      <span className="text-sm font-medium text-trimtab-blue-4">{category.category}</span>
                      <ChevronRight className="w-3 h-3 text-trimtab-gray-2 ml-auto" />
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Site Structure */}
        <div className="space-y-8">
          {siteStructure.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                <Card className="border-trimtab-gray-2">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-trimtab-cta rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-trimtab-blue-4">{category.category}</CardTitle>
                        <p className="text-trimtab-gray-3">{category.description}</p>
                      </div>
                      <Badge variant="outline" className="border-trimtab-blue-1 text-trimtab-blue-2 ml-auto">
                        {category.pages.length} pages
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.pages.map((page, pageIndex) => (
                        <Link
                          key={pageIndex}
                          href={page.path}
                          className="group border border-trimtab-gray-1 rounded-lg p-4 hover:bg-trimtab-blue-0 hover:border-trimtab-blue-2 transition-all"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-trimtab-blue-4 group-hover:text-trimtab-cta transition-colors">
                              {page.name}
                            </h3>
                            <ExternalLink className="w-4 h-4 text-trimtab-gray-2 group-hover:text-trimtab-blue-2 transition-colors flex-shrink-0" />
                          </div>
                          <p className="text-sm text-trimtab-gray-3 mb-2">{page.description}</p>
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded text-trimtab-gray-2">
                            {page.path}
                          </code>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Footer Summary */}
        <div className="mt-16">
          <Card className="border-trimtab-gray-2 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-red-500" />
                <Sparkles className="w-8 h-8 text-trimtab-cta" />
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-trimtab-blue-4 mb-4">
                Complete APEST Platform Ecosystem
              </h2>
              <p className="text-lg text-trimtab-gray-3 mb-6 max-w-2xl mx-auto">
                From learning and assessment to community and commerce, this platform represents 
                a comprehensive digital ministry environment designed to advance APEST understanding 
                and application worldwide.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-trimtab-cta mb-2">{totalPages}</div>
                  <div className="text-sm text-trimtab-gray-3">Total Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-trimtab-cta mb-2">{siteStructure.length}</div>
                  <div className="text-sm text-trimtab-gray-3">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-trimtab-cta mb-2">∞</div>
                  <div className="text-sm text-trimtab-gray-3">Possibilities</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
