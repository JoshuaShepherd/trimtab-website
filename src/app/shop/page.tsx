import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  BookOpen, 
  Video, 
  Download, 
  ShoppingCart, 
  Star,
  Clock,
  Users,
  Award,
  FileText,
  Headphones
} from "lucide-react"

export const metadata: Metadata = {
  title: "Shop - APEST Resources & Training Materials",
  description: "Discover books, courses, assessments, and resources to develop your APEST gifts and grow in Christ-like maturity."
}

export default function Shop() {
  const products = [
    {
      title: "The Permanent Revolution",
      subtitle: "Apostolic Imagination and Practice for the 21st Century Church",
      type: "Book",
      author: "Alan Hirsch & Tim Catchim",
      price: "$16.99",
      originalPrice: "$24.99",
      rating: 4.8,
      reviews: 124,
      image: "/api/placeholder/300/400",
      description: "Essential reading for understanding the five-fold ministry and its application in modern church contexts.",
      features: ["Paperback & Kindle", "288 pages", "Study guide included"],
      icon: BookOpen,
      badge: "Bestseller"
    },
    {
      title: "APEST Assessment Tool",
      subtitle: "Comprehensive Five-Fold Ministry Gifts Assessment",
      type: "Assessment",
      author: "Tim Catchim",
      price: "$29.99",
      rating: 4.9,
      reviews: 89,
      image: "/api/placeholder/300/400",
      description: "Professional-grade assessment to identify your primary and secondary APEST gifts with detailed reporting.",
      features: ["Digital download", "Detailed report", "Development guide"],
      icon: FileText,
      badge: "New"
    },
    {
      title: "APEST Foundations Course",
      subtitle: "Biblical Foundations of Five-Fold Ministry",
      type: "Online Course",
      author: "Tim Catchim",
      price: "$149.99",
      rating: 4.7,
      reviews: 67,
      image: "/api/placeholder/300/400",
      description: "8-week comprehensive course covering the biblical and theological foundations of APEST ministry.",
      features: ["8 video modules", "Workbook included", "Community access"],
      icon: Video,
      badge: "Popular"
    },
    {
      title: "Leadership Development Toolkit",
      subtitle: "Practical Tools for APEST-Based Leadership",
      type: "Digital Toolkit",
      author: "Tim Catchim",
      price: "$79.99",
      rating: 4.6,
      reviews: 45,
      image: "/api/placeholder/300/400",
      description: "Collection of practical tools, templates, and guides for developing APEST-based leadership.",
      features: ["20+ templates", "Implementation guides", "Team exercises"],
      icon: Download,
      badge: null
    },
    {
      title: "APEST Podcast Series",
      subtitle: "Deep Dives into Five-Fold Ministry",
      type: "Audio Series",
      author: "Tim Catchim & Guests",
      price: "$19.99",
      rating: 4.5,
      reviews: 78,
      image: "/api/placeholder/300/400",
      description: "12-episode podcast series featuring conversations with APEST practitioners and theologians.",
      features: ["12 episodes", "MP3 download", "Transcripts included"],
      icon: Headphones,
      badge: null
    },
    {
      title: "Team APEST Workshop",
      subtitle: "Building High-Performance Ministry Teams",
      type: "Workshop",
      author: "Tim Catchim",
      price: "$199.99",
      rating: 4.9,
      reviews: 23,
      image: "/api/placeholder/300/400",
      description: "Interactive workshop for teams wanting to leverage APEST gifts for better collaboration and effectiveness.",
      features: ["4-hour workshop", "Team assessment", "Action plan template"],
      icon: Users,
      badge: "Premium"
    }
  ];

  const categories = [
    { name: "All Products", count: products.length },
    { name: "Books", count: 1 },
    { name: "Courses", count: 2 },
    { name: "Assessments", count: 1 },
    { name: "Toolkits", count: 1 },
    { name: "Audio", count: 1 }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
            APEST Shop
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Resources for APEST Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover books, courses, assessments, and tools to help you develop your 
            APEST gifts and grow in Christ-like maturity. All resources are created 
            or curated by Tim Catchim and trusted ministry partners.
          </p>
        </header>

        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category, index) => (
            <Button 
              key={index} 
              variant={index === 0 ? "default" : "outline"} 
              className="gap-2"
            >
              {category.name}
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="relative">
                <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <product.icon className="w-16 h-16 text-gray-400" />
                </div>
                {product.badge && (
                  <Badge 
                    className="absolute top-2 right-2"
                    variant={product.badge === 'New' ? 'default' : 'secondary'}
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              <CardHeader className="flex-grow">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.type}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                
                <CardTitle className="text-lg leading-tight mb-2">
                  {product.title}
                </CardTitle>
                <p className="text-sm text-gray-600 mb-2">{product.subtitle}</p>
                <p className="text-xs text-gray-500 mb-3">by {product.author}</p>
                
                <p className="text-sm text-gray-700 mb-4">{product.description}</p>
                
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm">
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Choose Our Resources?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Expert Created</h3>
                  <p className="text-gray-700 text-sm">
                    All resources are created by Tim Catchim, a leading expert in APEST and five-fold ministry
                  </p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Community Tested</h3>
                  <p className="text-gray-700 text-sm">
                    Every resource has been tested and refined through real ministry contexts and feedback
                  </p>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Lifetime Access</h3>
                  <p className="text-gray-700 text-sm">
                    Most digital resources include lifetime access with free updates and community support
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Begin your APEST journey with our foundational assessment and course bundle, 
            or contact us for personalized recommendations based on your ministry context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apest-quiz">Take Free Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/contact">Get Recommendations</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}