import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  Mail, 
  Calendar, 
  MessageCircle, 
  Clock, 
  Users, 
  Target,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Tim Catchim",
  description: "Ready to take the next step in your APEST journey? Reach out to Tim to schedule a call or discuss your coaching and consulting needs."
}

export default function Contact() {
  const contactOptions = [
    {
      title: "Discovery Call",
      description: "Schedule a complimentary 30-minute conversation to explore your APEST journey and determine next steps.",
      icon: Calendar,
      duration: "30 minutes",
      price: "Free",
      features: [
        "APEST assessment discussion",
        "Goal setting and vision clarification",
        "Recommendations for your unique context",
        "Next steps planning"
      ],
      buttonText: "Schedule Discovery Call",
      buttonLink: "/contact"
    },
    {
      title: "Coaching Consultation",
      description: "Discuss our coaching programs and find the right track for your APEST development goals.",
      icon: Users,
      duration: "45 minutes",
      price: "Free",
      features: [
        "Coaching program overview",
        "Track selection guidance",
        "Timeline and commitment discussion",
        "Questions and answers"
      ],
      buttonText: "Book Coaching Consultation",
      buttonLink: "/coaching"
    },
    {
      title: "Consulting Discussion",
      description: "Explore how APEST organizational consulting can transform your team or organization's culture.",
      icon: Target,
      duration: "60 minutes",
      price: "Free",
      features: [
        "Organizational assessment overview",
        "Custom strategy discussion",
        "Implementation planning",
        "Investment and timeline review"
      ],
      buttonText: "Schedule Consultation",
      buttonLink: "/consulting"
    }
  ];

  const faqs = [
    {
      question: "How do I know which APEST coaching track is right for me?",
      answer: "During your discovery call, we'll discuss your current APEST understanding, leadership experience, and goals to recommend the best fit among our Elevate, Apex, or Vanguard tracks."
    },
    {
      question: "What is the time commitment for coaching programs?",
      answer: "Our programs range from 5-10 months with weekly or bi-weekly sessions. Each session is 60 minutes, plus time for application exercises between sessions."
    },
    {
      question: "Do you offer discounts for missionaries and small organizations?",
      answer: "Yes! We provide special pricing for missionaries, small churches, and nonprofit organizations. Ask about our discounts during your consultation."
    },
    {
      question: "Can you work with our organization remotely?",
      answer: "Absolutely! All our coaching and consulting services are delivered via Zoom, making them accessible regardless of your location."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contact Tim Catchim
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to take the next step in your APEST journey? Whether you're interested in coaching, 
            consulting, or just want to learn more, let's start with a conversation.
          </p>
          <div className="flex justify-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              All consultations are complimentary
            </Badge>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <option.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">{option.duration}</div>
                    <div className="font-semibold text-green-600">{option.price}</div>
                  </div>
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href={option.buttonLink}>
                    {option.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">How to Get Started</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Take the APEST Quiz</h4>
                <p className="text-sm text-gray-600">
                  Start by discovering your APEST profile to understand your unique giftings and strengths.
                </p>
                <Button variant="ghost" size="sm" asChild className="mt-2">
                  <Link href="/apest-quiz">Take Quiz</Link>
                </Button>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Schedule Your Call</h4>
                <p className="text-sm text-gray-600">
                  Book a complimentary consultation to discuss your goals and explore next steps.
                </p>
                <Button variant="ghost" size="sm" asChild className="mt-2">
                  <Link href="#contact-form">Schedule Call</Link>
                </Button>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Begin Your Journey</h4>
                <p className="text-sm text-gray-600">
                  Start your personalized APEST development through coaching, consulting, or courses.
                </p>
                <Button variant="ghost" size="sm" asChild className="mt-2">
                  <Link href="/coaching">View Options</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Connect with Tim</CardTitle>
              <p className="text-center text-gray-600">Multiple ways to reach out and start the conversation</p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Send a message with your questions or to schedule a time to talk.
                </p>
                <Button variant="outline" size="sm">
                  Send Email
                </Button>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Calendar</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Book directly on Tim's calendar for a convenient time that works for you.
                </p>
                <Button variant="outline" size="sm">
                  Book Time
                </Button>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Prefer to talk? Request a callback at a time that works for your schedule.
                </p>
                <Button variant="outline" size="sm">
                  Request Callback
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Begin Your APEST Journey?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Don't wait to discover and develop your unique calling. The Church needs what you have to offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/apest-quiz">Start with the APEST Quiz</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Discovery Call
            </Button>
          </div>
          <p className="text-sm text-blue-200">
            All initial consultations are complimentary - no obligation, just conversation.
          </p>
        </div>
      </article>
    </div>
  )
}