import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  CheckCircle, 
  Crown, 
  Users, 
  BookOpen, 
  Video,
  MessageCircle,
  Calendar,
  Download,
  Star,
  Lock,
  Infinity,
  Target,
  Heart,
  Zap,
  Award,
  Headphones,
  FileText,
  Shield,
  ArrowRight,
  Gift,
  Clock
} from "lucide-react"

export const metadata: Metadata = {
  title: "APEST All-Access Membership - Unlimited Learning & Community",
  description: "Join our premium membership community for unlimited access to courses, live coaching, exclusive content, and direct access to Tim Catchim."
}

export default function Membership() {
  const membershipTiers = [
    {
      name: "Explorer",
      price: "Free",
      monthlyPrice: "$0",
      description: "Perfect for getting started with APEST basics",
      features: [
        "APEST Assessment & Basic Results",
        "Access to 3 foundation articles",
        "Monthly newsletter",
        "Community forum access",
        "Basic resource downloads"
      ],
      limitations: [
        "Limited course access",
        "No live coaching sessions",
        "No premium content"
      ],
      cta: "Start Free",
      popular: false,
      color: "border-trimtab-gray-2"
    },
    {
      name: "All-Access",
      price: "$47/month",
      yearlyPrice: "$470/year",
      monthlyPrice: "$47",
      description: "Complete APEST development with premium features",
      features: [
        "Everything in Explorer, plus:",
        "Unlimited access to ALL courses & content",
        "Detailed APEST assessment with personalized report", 
        "Monthly live coaching sessions with Tim",
        "Premium video content library (50+ hours)",
        "Advanced worksheets & planning tools",
        "Priority community forum support",
        "Early access to new courses",
        "Downloadable audio content for offline learning",
        "Certificate of completion for courses",
        "Guest expert sessions & masterclasses"
      ],
      limitations: [],
      cta: "Start All-Access Membership",
      popular: true,
      color: "border-trimtab-blue-2"
    },
    {
      name: "Leadership Circle",
      price: "$97/month", 
      yearlyPrice: "$970/year",
      monthlyPrice: "$97",
      description: "For senior leaders building APEST-centered organizations",
      features: [
        "Everything in All-Access, plus:",
        "Bi-weekly small group coaching calls",
        "Leadership assessment tools for teams",
        "Organizational APEST culture audit",
        "Private Leadership Circle community",
        "Direct messaging access to Tim",
        "Custom APEST implementation planning",
        "Quarterly strategic planning sessions",
        "Leadership Circle annual retreat invite",
        "Team licensing discounts",
        "Co-lab partnership opportunities"
      ],
      limitations: [],
      cta: "Join Leadership Circle",
      popular: false,
      color: "border-trimtab-cta"
    }
  ];

  const memberBenefits = [
    {
      title: "Unlimited Course Access",
      description: "Complete library of APEST courses, workshops, and masterclasses",
      icon: BookOpen,
      value: "$1,200+ value"
    },
    {
      title: "Live Coaching Sessions",
      description: "Monthly group coaching calls with Tim Catchim",
      icon: Video,
      value: "$200/month value"
    },
    {
      title: "Exclusive Content Library", 
      description: "Premium articles, videos, and resources not available elsewhere",
      icon: Lock,
      value: "$500+ value"
    },
    {
      title: "Community Access",
      description: "Connect with like-minded leaders in our private community",
      icon: Users,
      value: "Priceless"
    },
    {
      title: "Direct Access to Tim",
      description: "Ask questions and get personalized guidance",
      icon: MessageCircle,
      value: "$150/session value"
    },
    {
      title: "Implementation Tools",
      description: "Worksheets, assessments, and planning templates",
      icon: Target,
      value: "$300+ value"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Jennifer Martinez",
      role: "Senior Pastor",
      church: "Hope Community Church",
      membershipLength: "18 months",
      quote: "The All-Access membership transformed not just my understanding of APEST, but how our entire leadership team functions. The monthly coaching calls alone are worth the investment.",
      results: "Grew from 200 to 450 members using APEST principles",
      apestProfile: "Apostolic/Shepherding"
    },
    {
      name: "Pastor David Kim",
      role: "Church Planter", 
      church: "New Life Fellowship",
      membershipLength: "12 months",
      quote: "Tim's coaching helped me understand my prophetic gifting and how to partner with apostolic leaders. We planted our church using APEST from day one.",
      results: "Successfully launched church plant with 125 founding members", 
      apestProfile: "Prophetic/Teaching"
    },
    {
      name: "Sarah Chen",
      role: "Missions Director",
      church: "Grace International",
      membershipLength: "24 months",
      quote: "The Leadership Circle has been transformational for our missions strategy. Understanding APEST helped us build stronger, more effective teams on the field.",
      results: "Deployed 15 new missionary families with APEST-based team formation",
      apestProfile: "Evangelistic/Apostolic"
    }
  ];

  const faq = [
    {
      question: "What's included in the All-Access membership?",
      answer: "You get unlimited access to all courses, monthly live coaching with Tim, the complete content library, community forum access, downloadable resources, and early access to new content. See the full feature list above."
    },
    {
      question: "Can I cancel my membership anytime?",
      answer: "Yes, you can cancel anytime with no cancellation fees. Your access continues through the end of your current billing period."
    },
    {
      question: "Is there a discount for annual payment?",
      answer: "Yes! Annual members save 2 months compared to monthly billing. All-Access annual is $470 (vs $564 monthly) and Leadership Circle annual is $970 (vs $1,164 monthly)."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied within your first 30 days, we'll refund your membership fee in full."
    },
    {
      question: "Do you offer discounts for missionaries or small churches?",
      answer: "Yes! We provide 40% discounts for missionaries and churches under 100 members. Contact us during signup to apply your discount code."
    },
    {
      question: "How do the live coaching sessions work?",
      answer: "All-Access members join monthly 90-minute group coaching calls via Zoom. Leadership Circle members also get bi-weekly small group calls. All sessions are recorded if you can't attend live."
    }
  ];

  const bonuses = [
    {
      title: "APEST Team Assessment Tool",
      value: "$97 value",
      description: "Professional team assessment for identifying and developing APEST balance in your organization"
    },
    {
      title: "Ministry Planning Templates",
      value: "$67 value", 
      description: "Proven templates for strategic planning, team development, and APEST implementation"
    },
    {
      title: "Exclusive Interview Series",
      value: "$147 value",
      description: "Interviews with leading APEST practitioners sharing real-world success stories"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-trimtab-blue-2 text-trimtab-blue-2">
            <Crown className="w-4 h-4 mr-2" />
            Premium Membership
          </Badge>
          <h1 className="text-5xl font-bold text-trimtab-blue-4 mb-6">
            APEST All-Access Membership
          </h1>
          <p className="text-xl text-trimtab-gray-3 max-w-4xl mx-auto mb-8">
            Join our premium community of ministry leaders committed to developing Christ-like maturity 
            through the fivefold giftings. Get unlimited access to courses, live coaching with Tim, 
            exclusive content, and a supportive community.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-trimtab-gray-3">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-trimtab-blue-2" />
              <span>1,200+ Active Members</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-trimtab-cta" />
              <span>4.9/5 Member Satisfaction</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-trimtab-blue-2" />
              <span>95% Completion Rate</span>
            </div>
          </div>
        </header>

        {/* Membership Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-12 text-center">
            Choose Your Membership Level
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className={`${tier.color} ${tier.popular ? 'ring-2 ring-trimtab-blue-2 relative' : ''} hover:shadow-lg transition-shadow`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-trimtab-cta text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-trimtab-blue-4">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-trimtab-blue-4">{tier.monthlyPrice}</div>
                    {tier.yearlyPrice && (
                      <div className="text-sm text-trimtab-gray-3 mt-1">
                        or {tier.yearlyPrice} annually (save 17%)
                      </div>
                    )}
                  </div>
                  <p className="text-trimtab-gray-3 mt-4">{tier.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-trimtab-cta mt-0.5 flex-shrink-0" />
                        <span className="text-trimtab-gray-4">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${tier.popular ? 'trimtab-cta-gradient text-white' : 'border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0'}`}
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Member Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-12 text-center">
            What Members Get Access To
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberBenefits.map((benefit, index) => (
              <Card key={index} className="border-trimtab-gray-2 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-trimtab-blue-0 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-trimtab-blue-2" />
                  </div>
                  <CardTitle className="text-xl text-trimtab-blue-4">{benefit.title}</CardTitle>
                  <Badge variant="outline" className="border-trimtab-cta text-trimtab-cta mt-2">
                    {benefit.value}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-trimtab-gray-3">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bonus Section */}
        <div className="mb-20">
          <Card className="bg-trimtab-waypoint border-trimtab-waypoint-border">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Badge className="bg-trimtab-cta text-white mb-4">
                  <Gift className="w-4 h-4 mr-2" />
                  Limited Time Bonuses
                </Badge>
                <h3 className="text-2xl font-bold text-trimtab-blue-4 mb-2">
                  Join Now & Get These Bonuses Free
                </h3>
                <p className="text-trimtab-gray-4">
                  Available for new All-Access and Leadership Circle members
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-lg p-6 border border-trimtab-blue-1">
                      <h4 className="font-semibold text-trimtab-blue-4 mb-2">{bonus.title}</h4>
                      <Badge variant="outline" className="border-trimtab-cta text-trimtab-cta mb-3">
                        {bonus.value}
                      </Badge>
                      <p className="text-sm text-trimtab-gray-3">{bonus.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-trimtab-gray-4 mb-4">
                  Total bonus value: <span className="font-bold text-trimtab-blue-4">$311</span> - 
                  Yours free when you join by September 30th
                </p>
                <Button size="lg" className="trimtab-cta-gradient text-white">
                  <Crown className="w-5 h-5 mr-2" />
                  Claim Your Bonuses - Join Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-12 text-center">
            Success Stories from Members
          </h2>
          
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-trimtab-gray-2">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-trimtab-cta fill-current" />
                        ))}
                        <Badge variant="outline" className="ml-4 border-trimtab-blue-1 text-trimtab-blue-2">
                          Member for {testimonial.membershipLength}
                        </Badge>
                      </div>
                      <blockquote className="text-lg text-trimtab-gray-4 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="bg-trimtab-blue-0 rounded-lg p-4 border border-trimtab-blue-1">
                        <div className="text-sm font-medium text-trimtab-blue-4 mb-1">Results:</div>
                        <div className="text-trimtab-gray-4">{testimonial.results}</div>
                      </div>
                    </div>
                    
                    <div className="text-center lg:text-left">
                      <div className="w-24 h-24 bg-gradient-to-br from-trimtab-blue-1 to-trimtab-blue-2 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                        <span className="text-2xl font-bold text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="font-semibold text-trimtab-blue-4">{testimonial.name}</div>
                      <div className="text-sm text-trimtab-gray-3">{testimonial.role}</div>
                      <div className="text-sm text-trimtab-gray-3">{testimonial.church}</div>
                      <Badge variant="outline" className="text-xs border-trimtab-blue-1 text-trimtab-blue-2 mt-2">
                        <Heart className="w-3 h-3 mr-1" />
                        {testimonial.apestProfile}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-trimtab-blue-4 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="border-trimtab-gray-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-trimtab-blue-4 mb-3">{item.question}</h3>
                  <p className="text-trimtab-gray-4">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-trimtab-blue-0 to-trimtab-blue-1 border-trimtab-blue-2 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-trimtab-blue-4 mb-6">
                Ready to Accelerate Your APEST Journey?
              </h3>
              <p className="text-xl text-trimtab-gray-4 mb-8 max-w-2xl mx-auto">
                Join over 1,200 ministry leaders who are transforming their leadership and organizations 
                through APEST development. Start your membership today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" className="trimtab-cta-gradient text-white">
                  <Crown className="w-5 h-5 mr-2" />
                  Start All-Access Membership
                </Button>
                <Button size="lg" variant="outline" className="border-trimtab-blue-2 text-trimtab-blue-2 hover:bg-trimtab-blue-0">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Consultation Call
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-trimtab-gray-3">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-trimtab-cta" />
                  <span>30-Day Money Back Guarantee</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-trimtab-blue-2" />
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
