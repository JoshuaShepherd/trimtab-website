import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  CreditCard, 
  Lock, 
  Shield, 
  CheckCircle,
  ArrowLeft,
  MessageCircle,
  Crown
} from "lucide-react"

export const metadata: Metadata = {
  title: "Secure Checkout - Tim Catchim APEST Platform",
  description: "Complete your subscription and unlock your personalized APEST journey with exclusive content and community access."
}

export default function Checkout() {
  const selectedPlan = {
    name: "All-Access Membership",
    price: 47,
    description: "Complete access to courses, community, and Tim's guidance",
    features: [
      "All APEST courses and assessments",
      "Premium community access", 
      "Monthly live Q&A with Tim",
      "Downloadable resources library",
      "AI-powered content tools",
      "Priority support"
    ]
  };

  const orderSummary = {
    subtotal: 47.00,
    tax: 3.76,
    total: 50.76
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-trimtab-blue-0 via-white to-trimtab-blue-1 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/membership" className="inline-flex items-center text-trimtab-blue-2 hover:text-trimtab-blue-3 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to membership options
            </Link>
            <h1 className="text-4xl font-bold text-trimtab-blue-4 mb-4">
              Complete Your Subscription
            </h1>
            <p className="text-xl text-trimtab-gray-3 max-w-2xl mx-auto">
              You're one step away from unlocking your personalized APEST journey
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-3">
              <Card className="border-trimtab-gray-2 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-trimtab-blue-4 flex items-center">
                    <Lock className="w-6 h-6 mr-3 text-green-500" />
                    Secure Payment Information
                  </CardTitle>
                  <p className="text-trimtab-gray-3">
                    Your payment information is encrypted and secure
                  </p>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Account Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-4">Account Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-trimtab-blue-4 font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Enter first name"
                          className="border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-trimtab-blue-4 font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Enter last name"
                          className="border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <Label htmlFor="email" className="text-trimtab-blue-4 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                        required
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="text-lg font-semibold text-trimtab-blue-4 mb-4">Payment Method</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="text-trimtab-blue-4 font-medium">
                          Card Number *
                        </Label>
                        <div className="relative">
                          <Input
                            id="cardNumber"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="pl-10 border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                            required
                          />
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-trimtab-gray-2" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="text-trimtab-blue-4 font-medium">
                            Expiry Date *
                          </Label>
                          <Input
                            id="expiry"
                            type="text"
                            placeholder="MM/YY"
                            className="border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc" className="text-trimtab-blue-4 font-medium">
                            CVC *
                          </Label>
                          <Input
                            id="cvc"
                            type="text"
                            placeholder="123"
                            className="border-trimtab-gray-2 focus:ring-trimtab-blue-2 focus:border-trimtab-blue-2"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Complete Payment Button */}
                  <Button 
                    size="lg"
                    className="w-full trimtab-cta-gradient text-white text-lg py-4"
                  >
                    <Lock className="w-5 h-5 mr-3" />
                    Complete Payment - ${orderSummary.total}
                  </Button>

                  {/* Security Notice */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-trimtab-gray-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Protected by 256-bit SSL encryption</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="space-y-6 sticky top-8">
                <Card className="border-trimtab-gray-2">
                  <CardHeader>
                    <CardTitle className="text-xl text-trimtab-blue-4">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-trimtab-blue-4">{selectedPlan.name}</h3>
                          <p className="text-sm text-trimtab-gray-3">{selectedPlan.description}</p>
                          <Badge className="mt-2 bg-trimtab-cta text-white">
                            <Crown className="w-3 h-3 mr-1" />
                            Most Popular
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-trimtab-blue-4">${selectedPlan.price}</div>
                          <div className="text-sm text-trimtab-gray-2">per month</div>
                        </div>
                      </div>

                      <div className="border-t border-trimtab-gray-1 pt-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-trimtab-gray-3">Subtotal:</span>
                            <span className="text-trimtab-blue-4">${orderSummary.subtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-trimtab-gray-3">Tax:</span>
                            <span className="text-trimtab-blue-4">${orderSummary.tax.toFixed(2)}</span>
                          </div>
                          <div className="border-t border-trimtab-gray-1 pt-2 flex justify-between font-semibold">
                            <span className="text-trimtab-blue-4">Total:</span>
                            <span className="text-trimtab-blue-4">${orderSummary.total.toFixed(2)} USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-trimtab-gray-2">
                  <CardHeader>
                    <CardTitle className="text-lg text-trimtab-blue-4">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedPlan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-trimtab-blue-4">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}