import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your learning journey and account settings."
}

export default function MyAccount() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">My Account</h1>
      <p className="text-lg text-gray-600">
        Welcome to your account dashboard. Here you can manage your courses, 
        track your progress, and update your settings.
      </p>
    </div>
  )
}