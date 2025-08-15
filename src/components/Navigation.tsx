"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Menu, 
  X, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Calendar, 
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Target,
  Heart,
  Compass,
  Lightbulb,
  ShoppingCart,
  FileText,
  Award,
  Mail
} from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Main navigation items for desktop - streamlined
  const mainNavigation = [
    { name: 'About', href: '/about' },
    {
      name: 'APEST',
      href: '#',
      dropdown: [
        { 
          name: 'APEST Quiz', 
          href: '/apest-quiz',
          description: 'Discover your ministry calling',
          icon: Target
        },
        { 
          name: 'APEST Descriptions', 
          href: '/apest-descriptions',
          description: 'Understanding the five-fold ministry gifts',
          icon: Users
        },
        { 
          name: 'Quiz Results', 
          href: '/apest-quiz-results',
          description: 'Understanding your results',
          icon: Award
        }
      ]
    },
    {
      name: 'Courses',
      href: '/courses',
      dropdown: [
        { 
          name: 'All Courses', 
          href: '/courses',
          description: 'Browse all APEST development courses',
          icon: GraduationCap
        },
        { 
          name: 'APEST Foundations', 
          href: '/apest-foundations-courses',
          description: 'Core APEST training courses',
          icon: BookOpen
        },
        { 
          name: 'Teacher Courses', 
          href: '/teacher-courses',
          description: 'Teaching ministry development',
          icon: BookOpen
        },
        { 
          name: 'Shepherd Courses', 
          href: '/shepherd-courses',
          description: 'Pastoral care training',
          icon: Heart
        },
        { 
          name: 'Evangelist Courses', 
          href: '/evangelist-courses',
          description: 'Evangelism training',
          icon: MessageCircle
        },
        { 
          name: 'Prophet Courses', 
          href: '/prophet-courses',
          description: 'Prophetic ministry development',
          icon: Lightbulb
        },
        { 
          name: 'Apostle Courses', 
          href: '/apostle-courses',
          description: 'Apostolic leadership training',
          icon: Compass
        }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { 
          name: 'Coaching', 
          href: '/coaching',
          description: 'Personal APEST coaching sessions',
          icon: Users
        },
        { 
          name: 'Consulting', 
          href: '/consulting',
          description: 'Organizational transformation',
          icon: Target
        }
      ]
    },
    { name: 'Resources', href: '/resources' },
    {
      name: 'Examples',
      href: '/ebook-example',
      dropdown: [
        { 
          name: 'Interactive eBook', 
          href: '/ebook-example',
          description: 'Multi-modal APEST learning experience',
          icon: BookOpen
        },
        { 
          name: 'APEST Assessment', 
          href: '/apest-quiz-example',
          description: 'Interactive assessment demo',
          icon: Target
        },
        { 
          name: 'Learning Dashboard', 
          href: '/dashboard-example',
          description: 'Personalized learning hub',
          icon: GraduationCap
        }
      ]
    }
  ];

  // Full navigation for mobile menu
  const fullNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'APEST',
      dropdown: [
        { name: 'APEST Quiz', href: '/apest-quiz', icon: Target },
        { name: 'APEST Descriptions', href: '/apest-descriptions', icon: Users },
        { name: 'Quiz Results', href: '/apest-quiz-results', icon: Award },
        { name: 'Teacher Description', href: '/teacher-description', icon: BookOpen },
        { name: 'Shepherd Description', href: '/shepherd-description', icon: Heart },
        { name: 'Evangelist Description', href: '/evangelist-description', icon: MessageCircle },
        { name: 'Prophet Description', href: '/prophet-description', icon: Lightbulb },
        { name: 'Apostle Description', href: '/apostle-description', icon: Compass }
      ]
    },
    {
      name: 'Courses',
      dropdown: [
        { name: 'All Courses', href: '/courses', icon: GraduationCap },
        { name: 'APEST Foundations', href: '/apest-foundations-courses', icon: BookOpen },
        { name: 'Teacher Courses', href: '/teacher-courses', icon: BookOpen },
        { name: 'Shepherd Courses', href: '/shepherd-courses', icon: Heart },
        { name: 'Evangelist Courses', href: '/evangelist-courses', icon: MessageCircle },
        { name: 'Prophet Courses', href: '/prophet-courses', icon: Lightbulb },
        { name: 'Apostle Courses', href: '/apostle-courses', icon: Compass }
      ]
    },
    {
      name: 'Services',
      dropdown: [
        { name: 'Coaching', href: '/coaching', icon: Users },
        { name: 'Consulting', href: '/consulting', icon: Target },
        { name: 'Co-Lab', href: '/co-lab', icon: Calendar }
      ]
    },
    { name: 'Resources', href: '/resources' },
    {
      name: 'Examples',
      dropdown: [
        { name: 'Interactive eBook', href: '/ebook-example', icon: BookOpen },
        { name: 'APEST Assessment', href: '/apest-quiz-example', icon: Target },
        { name: 'Learning Dashboard', href: '/dashboard-example', icon: GraduationCap }
      ]
    },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 trimtab-gradient rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">TrimTab</div>
              <div className="text-xs text-gray-600 hidden sm:block">Missional Leadership</div>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on smaller screens, shown on large screens */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-50">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-start p-2 rounded-md hover:bg-gray-50 transition-colors group"
                            >
                              <subItem.icon className="h-4 w-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">
                                  {subItem.name}
                                </div>
                                {subItem.description && (
                                  <div className="text-xs text-gray-500 mt-1">
                                    {subItem.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Hidden on mobile, shown on tablet and up */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <Link href="/apest-quiz">
              <Button variant="outline" size="sm" className="flex items-center text-xs">
                <Target className="h-3 w-3 mr-1" />
                Quiz
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="trimtab-gradient text-white border-0 text-xs">
                <Mail className="h-3 w-3 mr-1" />
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button - Hidden on large screens */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md hover:bg-gray-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full height overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {fullNavigation.map((item, index) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-gray-900 font-semibold px-3 py-2 text-lg border-b border-gray-100">
                        {item.name}
                      </div>
                      <div className="ml-2 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 text-base transition-colors rounded-lg"
                            onClick={() => setIsOpen(false)}
                          >
                            <subItem.icon className="h-5 w-5 mr-3 text-blue-600" />
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-3 text-lg font-medium transition-colors rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="border-t border-gray-200 pt-6 mt-6 space-y-3">
                <Link href="/apest-quiz" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full h-12 flex items-center justify-center text-base">
                    <Target className="h-5 w-5 mr-2" />
                    Take APEST Quiz
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full h-12 trimtab-gradient text-white border-0 flex items-center justify-center text-base">
                    <Mail className="h-5 w-5 mr-2" />
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
