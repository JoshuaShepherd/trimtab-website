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

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      description: 'Learn about our mission and approach'
    },
    {
      name: 'APEST',
      href: '#',
      dropdown: [
        { 
          name: 'APEST Descriptions', 
          href: '/apest-descriptions',
          description: 'Understanding the five-fold ministry gifts',
          icon: Users
        },
        { 
          name: 'APEST Quiz', 
          href: '/apest-quiz',
          description: 'Discover your ministry calling',
          icon: Target
        },
        { 
          name: 'Quiz Results', 
          href: '/apest-quiz-results',
          description: 'Understanding your results',
          icon: Award
        },
        { 
          name: 'Teacher Description', 
          href: '/teacher-description',
          description: 'The Teaching ministry',
          icon: BookOpen
        },
        { 
          name: 'Shepherd Description', 
          href: '/shepherd-description',
          description: 'The Pastoral ministry',
          icon: Heart
        },
        { 
          name: 'Evangelist Description', 
          href: '/evangelist-description',
          description: 'The Evangelistic ministry',
          icon: MessageCircle
        },
        { 
          name: 'Prophet Description', 
          href: '/prophet-description',
          description: 'The Prophetic ministry',
          icon: Lightbulb
        },
        { 
          name: 'Apostle Description', 
          href: '/apostle-description',
          description: 'The Apostolic ministry',
          icon: Compass
        }
      ]
    },
    {
      name: 'Courses',
      href: '/courses',
      dropdown: [
        { 
          name: 'APEST Foundations', 
          href: '/apest-foundations-courses',
          description: 'Core APEST training courses',
          icon: GraduationCap
        },
        { 
          name: 'The Four Teachers', 
          href: '/the-four-teachers-course',
          description: 'Deep dive into teaching ministry',
          icon: BookOpen
        },
        { 
          name: 'The Four Shepherds', 
          href: '/the-four-shepherds-course',
          description: 'Understanding pastoral care',
          icon: Heart
        },
        { 
          name: 'The Four Evangelists', 
          href: '/the-four-evangelists-course',
          description: 'Evangelism and outreach training',
          icon: MessageCircle
        },
        { 
          name: 'The Four Prophets', 
          href: '/the-four-prophets-course',
          description: 'Prophetic ministry development',
          icon: Lightbulb
        },
        { 
          name: 'The Four Apostles', 
          href: '/the-four-apostles-course',
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
        },
        { 
          name: 'Co-Lab', 
          href: '/co-lab',
          description: 'Collaborative learning experiences',
          icon: Calendar
        }
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources',
      description: 'Tools, frameworks, and learning materials'
    },
    {
      name: 'Tools',
      href: '#',
      dropdown: [
        { 
          name: 'Scaffolding Tool', 
          href: '/tools/scaffolding',
          description: 'Design personalized learning experiences',
          icon: FileText
        },
        { 
          name: 'eBook', 
          href: '/ebook',
          description: 'Digital learning resources',
          icon: BookOpen
        },
        { 
          name: 'Dashboard', 
          href: '/dashboard',
          description: 'Personal learning dashboard',
          icon: Target
        }
      ]
    },
    { 
      name: 'Blog', 
      href: '/blog',
      description: 'Insights on missional leadership and APEST'
    },
    { 
      name: 'Contact', 
      href: '/contact',
      description: 'Get in touch for coaching or consulting'
    }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 trimtab-gradient rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">TrimTab</div>
              <div className="text-xs text-gray-600 hidden sm:block">Missional Leadership</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div 
                        className="nav-dropdown absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="grid gap-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <subItem.icon className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {subItem.description}
                                </div>
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
                    className="nav-item-hover text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/apest-quiz">
              <Button variant="outline" size="sm" className="flex items-center">
                <Target className="h-4 w-4 mr-2" />
                Take Quiz
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="trimtab-gradient text-white border-0">
                <Mail className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-gray-900 font-medium px-3 py-2 text-base">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 text-sm transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <subItem.icon className="h-4 w-4 mr-2" />
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <Link href="/apest-quiz" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <Target className="h-4 w-4 mr-2" />
                    Take APEST Quiz
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full trimtab-gradient text-white border-0 flex items-center justify-center">
                    <Mail className="h-4 w-4 mr-2" />
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
