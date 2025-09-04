import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { 
  UserPlus, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  User,
  Shield,
  CheckCircle,
  ArrowRight,
  Loader2,
  AlertCircle,
  Star,
  Users,
  BookOpen,
  Video,
  Clock,
  Globe
} from "lucide-react"

export const metadata: Metadata = {
  title: "Create Account - Tim Catchim APEST Platform",
  description: "Start your APEST journey today. Join thousands of ministry leaders discovering their five-fold giftings."
}

export default function SignUp() {
  const benefits = [
    {
      icon: Star,
      title: "Free APEST Assessment",
      description: "Discover your unique five-fold ministry gifts with our comprehensive assessment tool."
    },
    {
      icon: BookOpen,
      title: "Personalized Learning Path",
      description: "Access curated content and courses designed specifically for your APEST profile."
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Join discussions, find mentorship, and connect with like-minded ministry leaders."
    },
    {
      icon: Video,
      title: "Exclusive Content",
      description: "Member-only videos, live sessions with Tim, and early access to new resources."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-trimtab-blue-0 via-white to-trimtab-blue-1 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-7xl grid lg:grid-cols-5 gap-12 items-center">
        {/* Left Column - Benefits */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-trimtab-blue-4 mb-4">
              Begin Your APEST Journey Today
            </h1>
            <p className="text-xl text-trimtab-gray-3 leading-relaxed">
              Join thousands of ministry leaders who are discovering, developing, 
              and deploying their five-fold giftings for greater kingdom impact.
            </p>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-trimtab-cta to-trimtab-blue-2 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-trimtab-blue-4 mb-2">{benefit.title}</h3>
                    <p className="text-trimtab-gray-3">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-8 border-t border-trimtab-gray-1">
            <div className="text-sm text-trimtab-gray-2 mb-4">Trusted by ministry leaders worldwide</div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-trimtab-blue-4">25,000+</div>
                <div className="text-xs text-trimtab-gray-2">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-trimtab-blue-4">150+</div>
                <div className="text-xs text-trimtab-gray-2">Countries Represented</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-trimtab-blue-4">4.9/5</div>
                <div className="text-xs text-trimtab-gray-2">Platform Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-trimtab-blue-4">500+</div>
                <div className="text-xs text-trimtab-gray-2">Hours of Content</div>
              </div>
            </div>
          </div>

          <div className="bg-trimtab-blue-0 p-6 rounded-lg border border-trimtab-blue-1">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-trimtab-cta rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-trimtab-blue-4 mb-1">Limited Time Offer</h4>
                <p className="text-sm text-trimtab-gray-3 mb-3">
                  Sign up now and get free access to Tim's "APEST Leadership Foundations" course (normally $97).
                </p>
                <div className="text-xs text-trimtab-cta font-medium">
                  Offer expires September 30, 2025
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sign Up Form */}
        <div className="lg:col-span-3 w-full max-w-lg mx-auto">
          <Card className="border-trimtab-gray-2 shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-trimtab-cta to-trimtab-blue-3 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-trimtab-blue-4">
                Create Your Account
              </CardTitle>
              <p className="text-trimtab-gray-3 mt-2">
                Start your personalized APEST development journey
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Social Sign Up */}
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-trimtab-gray-2 hover:bg-trimtab-blue-0"
                  size="lg"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Sign up with Google
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="border-trimtab-gray-2 hover:bg-trimtab-blue-0"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-trimtab-gray-2 hover:bg-trimtab-blue-0"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                    </svg>
                    Apple
                  </Button>
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-trimtab-gray-2"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-3 text-trimtab-gray-2">Or sign up with email</span>
                </div>
              </div>

              {/* Email Sign Up Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-trimtab-blue-4 font-medium">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-trimtab-gray-2" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        className="pl-10 border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-trimtab-blue-4 font-medium">
                      Last Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-trimtab-gray-2" />
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Last name"
                        className="pl-10 border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-trimtab-blue-4 font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-trimtab-gray-2" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-trimtab-blue-4 font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-trimtab-gray-2" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      className="pl-10 pr-10 border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-trimtab-gray-2 hover:text-trimtab-blue-2"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-xs text-trimtab-gray-2 mt-1">
                    Password must be at least 8 characters with letters and numbers
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-trimtab-blue-4 font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-trimtab-gray-2" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10 pr-10 border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-trimtab-gray-2 hover:text-trimtab-blue-2"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Ministry Role */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-trimtab-blue-4 font-medium">
                    Ministry Role (Optional)
                  </Label>
                  <select 
                    id="role"
                    className="w-full px-3 py-2 border border-trimtab-gray-2 rounded-md focus:outline-none focus:ring-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                  >
                    <option value="">Select your primary role</option>
                    <option value="pastor">Pastor / Minister</option>
                    <option value="leader">Ministry Leader</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="student">Student / Seminarian</option>
                    <option value="marketplace">Marketplace Leader</option>
                    <option value="missionary">Missionary</option>
                    <option value="coach">Coach / Consultant</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 rounded border-trimtab-gray-2 text-trimtab-blue-2 focus:ring-trimtab-blue-2"
                    required
                  />
                  <div className="text-sm text-trimtab-gray-3">
                    <Label htmlFor="terms" className="cursor-pointer">
                      I agree to the{' '}
                      <Link href="/terms" className="text-trimtab-blue-2 hover:text-trimtab-blue-3 font-medium">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-trimtab-blue-2 hover:text-trimtab-blue-3 font-medium">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </div>

                {/* Email preferences */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="marketing"
                    className="mt-1 rounded border-trimtab-gray-2 text-trimtab-blue-2 focus:ring-trimtab-blue-2"
                    defaultChecked
                  />
                  <div className="text-sm text-trimtab-gray-3">
                    <Label htmlFor="marketing" className="cursor-pointer">
                      Send me occasional updates about new content, courses, and APEST insights
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full trimtab-cta-gradient text-white"
                >
                  Create Account & Start Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Error Message */}
                <div className="hidden p-3 bg-red-50 border border-red-200 rounded-md">
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-sm text-red-700">
                      Email already exists. Please try signing in instead.
                    </span>
                  </div>
                </div>
              </form>

              {/* Sign In Link */}
              <div className="text-center pt-4 border-t border-trimtab-gray-2">
                <p className="text-sm text-trimtab-gray-3">
                  Already have an account?{' '}
                  <Link 
                    href="/signin" 
                    className="font-medium text-trimtab-blue-2 hover:text-trimtab-blue-3"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-trimtab-gray-1">
                <div className="flex items-center justify-center gap-6 text-xs text-trimtab-gray-2">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    <span>Available Worldwide</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>No Spam Promise</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
