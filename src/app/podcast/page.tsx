import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { 
  Play, 
  Clock, 
  Calendar, 
  Download,
  Headphones,
  Video,
  Users,
  BookOpen,
  Star,
  Search,
  Filter,
  ArrowRight,
  Mic,
  Eye,
  Volume2,
  FileText,
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
  CheckCircle,
  Rss
} from "lucide-react"

export const metadata: Metadata = {
  title: "APEST Podcast & Video Library - Tim Catchim",
  description: "Watch and listen to Tim Catchim's insights on APEST development, ministry leadership, and spiritual formation. New episodes weekly."
}

export default function Podcast() {
  const featuredEpisodes = [
    {
      id: 1,
      title: "Building APEST-Balanced Leadership Teams",
      description: "Discover how to identify and develop the five-fold giftings within your existing team structure for maximum kingdom impact.",
      type: "video",
      duration: "45:32",
      publishDate: "September 1, 2025",
      category: "Leadership",
      season: 3,
      episode: 15,
      views: "12,847",
      likes: 892,
      featured: true,
      transcript: true,
      showNotes: true,
      tags: ["Team Building", "Leadership", "Apostolic", "Prophetic"],
      guests: ["Dr. Sarah Martinez", "Pastor Mike Johnson"]
    },
    {
      id: 2,
      title: "The Prophetic Voice in Modern Ministry",
      description: "Understanding how prophetic gifting operates in today's church context without compromising biblical truth or causing division.",
      type: "audio",
      duration: "38:15",
      publishDate: "August 25, 2025", 
      category: "Prophetic",
      season: 3,
      episode: 14,
      views: "8,632",
      likes: 647,
      featured: true,
      transcript: true,
      showNotes: true,
      tags: ["Prophetic", "Ministry", "Discernment", "Church"],
      guests: ["Lisa Chen", "Dr. David Rodriguez"]
    },
    {
      id: 3,
      title: "Evangelistic Heart vs. Evangelistic Gifting",
      description: "Every believer should have an evangelistic heart, but not everyone has the evangelistic gift. Learn the crucial difference.",
      type: "video",
      duration: "32:28",
      publishDate: "August 18, 2025",
      category: "Evangelism",
      season: 3,
      episode: 13,
      views: "15,203",
      likes: 1247,
      featured: true,
      transcript: true,
      showNotes: true,
      tags: ["Evangelism", "Gifts", "Calling", "Mission"],
      guests: []
    }
  ];

  const recentEpisodes = [
    {
      id: 4,
      title: "Shepherding in the Digital Age",
      description: "How pastoral care and community building adapt to online and hybrid ministry models.",
      type: "audio",
      duration: "41:17",
      publishDate: "August 11, 2025",
      category: "Shepherding", 
      season: 3,
      episode: 12,
      views: "6,894",
      likes: 423,
      transcript: true,
      tags: ["Shepherding", "Digital Ministry", "Pastoral Care"]
    },
    {
      id: 5, 
      title: "Teaching with APEST Awareness",
      description: "How teachers can incorporate APEST understanding to reach all learning styles and giftings.",
      type: "video",
      duration: "36:45",
      publishDate: "August 4, 2025",
      category: "Teaching",
      season: 3,
      episode: 11,
      views: "9,156",
      likes: 678,
      transcript: true,
      tags: ["Teaching", "Education", "Learning Styles"]
    },
    {
      id: 6,
      title: "Apostolic Pioneering: When to Plant vs. Revitalize",
      description: "Strategic guidance for apostolic leaders deciding between church planting and church revitalization.",
      type: "audio",
      duration: "43:52",
      publishDate: "July 28, 2025",
      category: "Apostolic",
      season: 3,
      episode: 10,
      views: "7,431",
      likes: 534,
      transcript: true,
      tags: ["Apostolic", "Church Planting", "Revitalization"]
    },
    {
      id: 7,
      title: "APEST Assessment Deep Dive",
      description: "Complete walkthrough of the APEST assessment process and how to interpret your results.",
      type: "video", 
      duration: "52:18",
      publishDate: "July 21, 2025",
      category: "Assessment",
      season: 3,
      episode: 9,
      views: "18,763",
      likes: 1456,
      transcript: true,
      tags: ["Assessment", "Self-Discovery", "Results"]
    },
    {
      id: 8,
      title: "Building Prophetic-Apostolic Partnerships",
      description: "The essential dynamics for healthy collaboration between prophetic and apostolic leaders.",
      type: "audio",
      duration: "39:24",
      publishDate: "July 14, 2025",
      category: "Partnership",
      season: 3,
      episode: 8,
      views: "11,287", 
      likes: 823,
      transcript: true,
      tags: ["Prophetic", "Apostolic", "Partnership", "Collaboration"]
    }
  ];

  const categories = [
    { name: "All Episodes", count: 127, active: true },
    { name: "Leadership", count: 23, active: false },
    { name: "Apostolic", count: 18, active: false },
    { name: "Prophetic", count: 16, active: false },
    { name: "Evangelism", count: 14, active: false },
    { name: "Shepherding", count: 12, active: false },
    { name: "Teaching", count: 11, active: false },
    { name: "Assessment", count: 8, active: false },
    { name: "Ministry", count: 25, active: false }
  ];

  const podcastStats = {
    totalEpisodes: 127,
    totalHours: 98,
    monthlyListeners: "25,000+",
    countries: 47,
    averageRating: 4.8,
    totalDownloads: "450,000+"
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-trimtab-blue-2 text-trimtab-blue-2">
            <Mic className="w-4 h-4 mr-2" />
            Podcast & Video Library
          </Badge>
          <h1 className="text-5xl font-bold text-trimtab-blue-4 mb-6">
            APEST Insights Podcast
          </h1>
          <p className="text-xl text-trimtab-gray-3 max-w-4xl mx-auto mb-8">
            Practical wisdom for developing APEST giftings in yourself and others. 
            New episodes weekly featuring real ministry stories, expert interviews, 
            and actionable strategies for kingdom impact.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-trimtab-gray-3 mb-8">
            <div className="flex items-center">
              <Play className="w-4 h-4 mr-2 text-trimtab-blue-2" />
              <span>{podcastStats.totalEpisodes} Episodes</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-trimtab-blue-2" />
              <span>{podcastStats.totalHours}+ Hours of Content</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-trimtab-cta" />
              <span>{podcastStats.monthlyListeners} Monthly Listeners</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-trimtab-cta" />
              <span>{podcastStats.averageRating}/5 Rating</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="trimtab-cta-gradient text-white">
              <Rss className="w-5 h-5 mr-2" />
              Subscribe to Podcast
            </Button>
            <Button size="lg" variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
              <Download className="w-5 h-5 mr-2" />
              Get Podcast App
            </Button>
          </div>
        </header>

        {/* Featured Episodes */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-trimtab-blue-4">Featured Episodes</h2>
            <Badge variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2">
              <Star className="w-4 h-4 mr-2" />
              Editor's Choice
            </Badge>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredEpisodes.map((episode, index) => (
              <Card key={episode.id} className={`border-trimtab-gray-2 hover:shadow-lg transition-shadow ${index === 0 ? 'lg:col-span-2' : ''}`}>
                <div className="relative">
                  <div className={`${index === 0 ? 'aspect-video' : 'aspect-video'} bg-gradient-to-br from-trimtab-blue-1 to-trimtab-blue-3 rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                    {episode.type === 'video' ? (
                      <Video className="w-16 h-16 text-white opacity-80" />
                    ) : (
                      <Headphones className="w-16 h-16 text-white opacity-80" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-trimtab-cta text-white">
                      S{episode.season}E{episode.episode}
                    </Badge>
                    <Badge className="absolute top-3 right-3 bg-black/50 text-white">
                      {episode.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs border-trimtab-blue-1 text-trimtab-blue-2">
                      {episode.category}
                    </Badge>
                    {episode.type === 'video' ? (
                      <Eye className="w-4 h-4 text-trimtab-gray-2" />
                    ) : (
                      <Headphones className="w-4 h-4 text-trimtab-gray-2" />
                    )}
                    <span className="text-sm text-trimtab-gray-2 capitalize">{episode.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-trimtab-blue-4 mb-3 leading-tight">
                    {episode.title}
                  </h3>
                  
                  <p className="text-trimtab-gray-3 mb-4 line-clamp-3">
                    {episode.description}
                  </p>
                  
                  {episode.guests && episode.guests.length > 0 && (
                    <div className="mb-4">
                      <div className="text-sm font-medium text-trimtab-blue-4 mb-1">Guests:</div>
                      <div className="text-sm text-trimtab-gray-3">
                        {episode.guests.join(", ")}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-trimtab-gray-2 mb-4">
                    <time>{episode.publishDate}</time>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {episode.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {episode.likes}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {episode.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-trimtab-gray-2">
                      {episode.transcript && (
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          Transcript
                        </span>
                      )}
                      {episode.showNotes && (
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          Notes
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="text-trimtab-gray-2 hover:text-trimtab-blue-2">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-trimtab-gray-2 hover:text-trimtab-blue-2">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <Card className="border-trimtab-gray-2">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-trimtab-gray-2" />
                    <Input 
                      placeholder="Search episodes, topics, or guests..." 
                      className="pl-10 border-trimtab-gray-2"
                    />
                  </div>
                </div>
                <div>
                  <select className="w-full px-3 py-2 border border-trimtab-gray-2 rounded-md focus:outline-none focus:ring-2 focus:ring-trimtab-blue-2">
                    <option value="">All Categories</option>
                    <option value="leadership">Leadership</option>
                    <option value="apostolic">Apostolic</option>
                    <option value="prophetic">Prophetic</option>
                    <option value="evangelism">Evangelism</option>
                    <option value="shepherding">Shepherding</option>
                    <option value="teaching">Teaching</option>
                  </select>
                </div>
                <div>
                  <select className="w-full px-3 py-2 border border-trimtab-gray-2 rounded-md focus:outline-none focus:ring-2 focus:ring-trimtab-blue-2">
                    <option value="">All Types</option>
                    <option value="video">Video Only</option>
                    <option value="audio">Audio Only</option>
                    <option value="transcript">With Transcript</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={category.active ? "trimtab-cta-gradient text-white" : "border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0"}
                size="sm"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Recent Episodes */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-trimtab-blue-4">Recent Episodes</h2>
            <Button variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
              View All Episodes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="space-y-6">
            {recentEpisodes.map((episode) => (
              <Card key={episode.id} className="border-trimtab-gray-2 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-trimtab-blue-1 to-trimtab-blue-3 rounded-lg flex items-center justify-center relative overflow-hidden">
                        {episode.type === 'video' ? (
                          <Video className="w-8 h-8 text-white opacity-80" />
                        ) : (
                          <Headphones className="w-8 h-8 text-white opacity-80" />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                            <Play className="w-4 h-4" />
                          </Button>
                        </div>
                        <Badge className="absolute top-2 left-2 bg-black/50 text-white text-xs">
                          {episode.duration}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs border-trimtab-blue-1 text-trimtab-blue-2">
                          S{episode.season}E{episode.episode}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                          {episode.category}
                        </Badge>
                        {episode.type === 'video' ? (
                          <Eye className="w-4 h-4 text-trimtab-gray-2" />
                        ) : (
                          <Headphones className="w-4 h-4 text-trimtab-gray-2" />
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-trimtab-blue-4 mb-2">
                        {episode.title}
                      </h3>
                      
                      <p className="text-trimtab-gray-3 mb-3">
                        {episode.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-trimtab-gray-2 mb-3">
                        <time>{episode.publishDate}</time>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Play className="w-4 h-4" />
                            {episode.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {episode.likes}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {episode.tags.slice(0, 2).map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-trimtab-gray-1 text-trimtab-gray-2">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {episode.transcript && (
                            <Button size="sm" variant="ghost" className="text-xs text-trimtab-gray-2 hover:text-trimtab-blue-2">
                              <FileText className="w-3 h-3 mr-1" />
                              Transcript
                            </Button>
                          )}
                          <Button size="sm" variant="ghost" className="text-trimtab-gray-2 hover:text-trimtab-blue-2">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-trimtab-gray-2 hover:text-trimtab-blue-2">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-trimtab-blue-0 to-trimtab-blue-1 border-trimtab-blue-2 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-trimtab-blue-4 mb-6">
                Never Miss an Episode
              </h3>
              <p className="text-xl text-trimtab-gray-4 mb-8 max-w-2xl mx-auto">
                Subscribe to get new episodes delivered automatically. Available on all major 
                podcast platforms including Apple Podcasts, Spotify, and Google Podcasts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" className="trimtab-cta-gradient text-white">
                  <Rss className="w-5 h-5 mr-2" />
                  Subscribe Now
                </Button>
                <Button size="lg" variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  <Download className="w-5 h-5 mr-2" />
                  Download Episodes
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-trimtab-gray-3">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-trimtab-cta" />
                  <span>Free Forever</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-trimtab-blue-2" />
                  <span>New Episodes Weekly</span>
                </div>
                <div className="flex items-center">
                  <Volume2 className="w-4 h-4 mr-2 text-trimtab-blue-2" />
                  <span>Available Offline</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
