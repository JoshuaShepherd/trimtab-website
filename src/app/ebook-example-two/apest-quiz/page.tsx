"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Target,
  Brain,
  Heart,
  Users,
  BookOpen,
  MessageCircle,
  Lightbulb,
  Shield,
  Eye,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Download,
  Share2,
  Send,
  Zap,
  Building,
  Clock,
  Bookmark,
  Play,
  TrendingUp,
  BarChart3,
  PieChart,
  Map,
  Compass,
  Navigation,
  Radar,
  Calendar,
  Bell,
  Sparkles,
  Flame,
  Waves,
  Mountain,
  TreePine,
  Globe,
  Flag,
  Telescope,
  Magnet,
  Settings,
  HelpCircle,
  Info,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Archive,
  Filter,
  Search,
  List,
  Grid,
  Save,
  Upload,
  FileText,
  Image,
  Video
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ApestQuizExampleTwo() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedFlow, setSelectedFlow] = useState<'comprehensive' | 'quick' | null>(null);
  const [personalityInsights, setPersonalityInsights] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState<'intro' | 'assessment' | 'analysis' | 'results'>('intro');
  const [timeSpent, setTimeSpent] = useState(0);
  const [confidenceLevel, setConfidenceLevel] = useState(0);
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);
  const [bookmarkedResults, setBookmarkedResults] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  // Enhanced Question Set with Multiple Domains
  const comprehensiveQuestions = [
    // Apostolic Domain
    {
      id: 1,
      category: "Vision & Innovation",
      domain: "Apostolic",
      question: "When facing a ministry challenge, I typically...",
      options: [
        "Look for completely new approaches that haven't been tried before",
        "Adapt proven methods to fit our specific context",
        "Research what successful leaders have done in similar situations", 
        "Focus on caring for the people affected by the challenge",
        "Seek to understand the spiritual dynamics at work"
      ],
      weights: { A: 5, P: 1, E: 2, S: 1, T: 1 }
    },
    {
      id: 2,
      category: "Risk & Pioneer Spirit",
      domain: "Apostolic", 
      question: "I'm most energized when...",
      options: [
        "Breaking new ground in uncharted territory",
        "Proclaiming truth that challenges people's thinking",
        "Connecting with people who are far from God",
        "Nurturing someone through a difficult season",
        "Helping others understand complex spiritual truths"
      ],
      weights: { A: 5, P: 2, E: 1, S: 1, T: 1 }
    },
    {
      id: 3,
      category: "Systems & Strategy",
      domain: "Apostolic",
      question: "In team settings, I naturally...",
      options: [
        "Focus on the big picture and long-term strategy",
        "Challenge assumptions and call for higher standards",
        "Look for ways to include outsiders and newcomers",
        "Make sure everyone feels heard and supported",
        "Provide clarity and help organize thoughts"
      ],
      weights: { A: 5, P: 2, E: 2, S: 1, T: 1 }
    },

    // Prophetic Domain
    {
      id: 4,
      category: "Discernment & Truth",
      domain: "Prophetic",
      question: "When I sense something is 'off' in a situation, I...",
      options: [
        "Analyze the systems and structures that might be causing issues",
        "Feel compelled to address it directly, even if it's uncomfortable",
        "Look for ways to redirect toward something more positive",
        "Focus on how people are being affected emotionally",
        "Study Scripture to understand the principles involved"
      ],
      weights: { A: 2, P: 5, E: 1, S: 1, T: 2 }
    },
    {
      id: 5,
      category: "Justice & Righteousness", 
      domain: "Prophetic",
      question: "I'm most passionate about...",
      options: [
        "Establishing new ministries in unreached areas",
        "Confronting injustice and calling people to repentance",
        "Sharing the hope of the Gospel with the lost",
        "Healing and restoration in broken relationships",
        "Helping people grow in biblical knowledge"
      ],
      weights: { A: 1, P: 5, E: 2, S: 2, T: 1 }
    },
    {
      id: 6,
      category: "Spiritual Insight",
      domain: "Prophetic",
      question: "People often come to me because...",
      options: [
        "I can see solutions others miss",
        "I help them see situations from God's perspective",
        "I help them connect with others who can help",
        "I provide comfort and practical support",
        "I can explain difficult concepts clearly"
      ],
      weights: { A: 2, P: 5, E: 1, S: 1, T: 2 }
    },

    // Evangelistic Domain
    {
      id: 7,
      category: "Outreach & Connection",
      domain: "Evangelistic",
      question: "In social situations, I...",
      options: [
        "Look for opportunities to cast vision for new possibilities",
        "Find myself speaking truth into people's lives",
        "Naturally connect with people from all backgrounds",
        "Focus on making everyone feel included and valued",
        "Enjoy discussing ideas and helping others learn"
      ],
      weights: { A: 2, P: 1, E: 5, S: 2, T: 1 }
    },
    {
      id: 8,
      category: "Gospel Motivation",
      domain: "Evangelistic",
      question: "My heart breaks most for...",
      options: [
        "Unreached people groups without Gospel access",
        "People living in spiritual darkness and deception",
        "Individuals who don't yet know Christ's love",
        "Believers who are hurting and need care",
        "Those confused by false teaching"
      ],
      weights: { A: 1, P: 1, E: 5, S: 2, T: 2 }
    },
    {
      id: 9,
      category: "Relational Bridge-Building",
      domain: "Evangelistic",
      question: "I'm most effective when...",
      options: [
        "Leading teams to accomplish ambitious goals",
        "Speaking boldly about difficult truths",
        "Building relationships with non-believers",
        "Providing ongoing care and support",
        "Teaching and explaining spiritual concepts"
      ],
      weights: { A: 2, P: 1, E: 5, S: 1, T: 1 }
    },

    // Shepherding Domain
    {
      id: 10,
      category: "Care & Nurture",
      domain: "Shepherding",
      question: "When someone is struggling, my first instinct is to...",
      options: [
        "Help them see the bigger purpose in their pain",
        "Challenge them to embrace God's call on their life",
        "Connect them with others who can encourage them",
        "Provide practical care and emotional support",
        "Help them understand biblical principles for their situation"
      ],
      weights: { A: 1, P: 1, E: 2, S: 5, T: 2 }
    },
    {
      id: 11,
      category: "Protection & Guidance",
      domain: "Shepherding",
      question: "I feel most fulfilled when...",
      options: [
        "Launching something that will impact many people",
        "Seeing people embrace difficult but necessary changes",
        "Watching someone come to faith",
        "Helping someone heal and grow stronger",
        "Seeing someone grasp a truth that transforms them"
      ],
      weights: { A: 1, P: 1, E: 2, S: 5, T: 2 }
    },
    {
      id: 12,
      category: "Community Building",
      domain: "Shepherding",
      question: "In group dynamics, I tend to...",
      options: [
        "Keep the group focused on the mission",
        "Make sure we're staying true to our values",
        "Help newcomers feel welcome and connected",
        "Notice who needs extra attention or care",
        "Make sure everyone understands what we're discussing"
      ],
      weights: { A: 2, P: 2, E: 2, S: 5, T: 2 }
    },

    // Teaching Domain
    {
      id: 13,
      category: "Knowledge & Understanding",
      domain: "Teaching",
      question: "I'm most energized when...",
      options: [
        "Developing new training systems for leaders",
        "Helping people see how Scripture applies to current issues",
        "Making complex truths accessible to seekers",
        "Walking with someone through a learning process",
        "Researching and mastering difficult biblical concepts"
      ],
      weights: { A: 2, P: 2, E: 2, S: 2, T: 5 }
    },
    {
      id: 14,
      category: "Communication & Clarity",
      domain: "Teaching",
      question: "People often tell me...",
      options: [
        "I help them see possibilities they never imagined",
        "I challenge them to live up to God's standards",
        "I help them understand how to share their faith",
        "I provide wisdom for their personal situations",
        "I make difficult concepts easy to understand"
      ],
      weights: { A: 1, P: 1, E: 2, S: 2, T: 5 }
    },
    {
      id: 15,
      category: "Learning & Growth",
      domain: "Teaching",
      question: "I'm most passionate about...",
      options: [
        "Equipping leaders to multiply their impact",
        "Helping people align their lives with God's truth",
        "Training believers to be effective witnesses",
        "Developing mature, healthy disciples",
        "Building biblical literacy and theological understanding"
      ],
      weights: { A: 2, P: 2, E: 2, S: 2, T: 5 }
    }
  ];

  const quickQuestions = comprehensiveQuestions.slice(0, 10);

  const currentQuestions = selectedFlow === 'comprehensive' ? comprehensiveQuestions : quickQuestions;

  // Assessment Flow Selection
  const assessmentFlows = [
    {
      id: 'comprehensive',
      title: 'Comprehensive Assessment',
      subtitle: 'Deep Dive Analysis',
      description: 'Complete 15-question assessment for detailed insights into your ministry calling',
      duration: '8-12 minutes',
      features: [
        'Multi-domain analysis across all 5 gifts',
        'Detailed strength and growth area insights', 
        'Personalized development recommendations',
        'Team dynamics analysis',
        'Ministry pathway mapping'
      ],
      accuracy: '95%',
      badge: 'Most Popular',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'quick',
      title: 'Quick Discovery',
      subtitle: 'Essential Insights',
      description: 'Focused 10-question assessment for immediate ministry direction',
      duration: '4-6 minutes',
      features: [
        'Core gift identification',
        'Primary calling insights',
        'Basic development suggestions',
        'Next steps guidance'
      ],
      accuracy: '85%',
      badge: 'Time Saver',
      color: 'from-green-500 to-teal-600'
    }
  ];

  useEffect(() => {
    if (quizStarted) {
      const interval = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [quizStarted]);

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
    
    // Auto-advance after a short delay
    setTimeout(() => {
      if (questionIndex < currentQuestions.length - 1) {
        setCurrentQuestion(questionIndex + 1);
      } else {
        calculateResults();
      }
    }, 300);
  };

  const calculateResults = () => {
    const totals = { A: 0, P: 0, E: 0, S: 0, T: 0 };
    
    currentQuestions.forEach((question, index) => {
      const answerIndex = answers[index];
      if (answerIndex !== undefined) {
        const weights = question.weights;
        const selectedOption = Object.keys(weights)[answerIndex];
        if (selectedOption && weights[selectedOption as keyof typeof weights]) {
          totals[selectedOption as keyof typeof totals] += weights[selectedOption as keyof typeof weights];
        }
      }
    });

    const maxScore = Math.max(...Object.values(totals));
    const secondScore = Object.values(totals).sort((a, b) => b - a)[1];
    
    // Calculate confidence based on score spread
    const confidence = Math.round(((maxScore - secondScore) / maxScore) * 100);
    setConfidenceLevel(confidence);

    // Generate personality insights
    const insights: string[] = [];
    if (totals.A > 15) insights.push("Strong entrepreneurial drive");
    if (totals.P > 15) insights.push("Deep concern for truth and justice");
    if (totals.E > 15) insights.push("Natural ability to connect across differences");
    if (totals.S > 15) insights.push("Heart for nurturing and protection");
    if (totals.T > 15) insights.push("Passion for learning and understanding");

    setPersonalityInsights(insights);
    setShowResults(true);
    setCurrentSection('results');
  };

  const getPrimaryGift = () => {
    const totals = { A: 0, P: 0, E: 0, S: 0, T: 0 };
    
    currentQuestions.forEach((question, index) => {
      const answerIndex = answers[index];
      if (answerIndex !== undefined) {
        const weights = question.weights;
        const selectedOption = Object.keys(weights)[answerIndex];
        if (selectedOption && weights[selectedOption as keyof typeof weights]) {
          totals[selectedOption as keyof typeof totals] += weights[selectedOption as keyof typeof weights];
        }
      }
    });

    const primaryGift = Object.entries(totals).reduce((a, b) => totals[a[0] as keyof typeof totals] > totals[b[0] as keyof typeof totals] ? a : b)[0];
    
    const giftNames = {
      A: 'Apostolic',
      P: 'Prophetic', 
      E: 'Evangelistic',
      S: 'Shepherding',
      T: 'Teaching'
    };

    return {
      name: giftNames[primaryGift as keyof typeof giftNames],
      score: totals[primaryGift as keyof typeof totals],
      totals
    };
  };

  const getGiftDescription = (gift: string) => {
    const descriptions = {
      'Apostolic': {
        icon: Compass,
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
        description: 'You have a pioneering spirit and natural ability to establish new ministries and expand God\'s kingdom into unreached territories.',
        traits: ['Visionary leadership', 'Strategic thinking', 'Risk-taking', 'System building', 'Cultural bridge-building'],
        challenges: ['Impatience with maintenance', 'May move too quickly', 'Can neglect existing relationships'],
        development: ['Learn to balance innovation with stability', 'Develop delegation skills', 'Practice patience with slower processes'],
        ministryFit: ['Church planting', 'Missions leadership', 'Organizational development', 'Network building', 'Strategic planning'],
        scripture: 'Ephesians 2:20 - "Built on the foundation of the apostles and prophets, with Christ Jesus himself as the chief cornerstone."'
      },
      'Prophetic': {
        icon: Eye,
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        description: 'You have a deep sensitivity to spiritual truth and feel compelled to call people back to God\'s standards and purposes.',
        traits: ['Spiritual discernment', 'Truth-telling', 'Justice concern', 'Pattern recognition', 'Authenticity focus'],
        challenges: ['Can be seen as critical', 'May struggle with timing', 'Intensity can overwhelm others'],
        development: ['Learn to deliver truth with grace', 'Develop emotional intelligence', 'Practice patience with process'],
        ministryFit: ['Preaching ministry', 'Social justice work', 'Spiritual direction', 'Counseling', 'Intercession'],
        scripture: '1 Corinthians 14:3 - "But the one who prophesies speaks to people for their strengthening, encouraging and comfort."'
      },
      'Evangelistic': {
        icon: Heart,
        color: 'text-pink-600',
        bgColor: 'bg-pink-100',
        description: 'You have a natural passion for the lost and supernatural ability to communicate the Gospel across cultural and social boundaries.',
        traits: ['Relational warmth', 'Cross-cultural connection', 'Natural witnessing', 'Hope communication', 'Bridge-building'],
        challenges: ['May neglect follow-up', 'Can be impatient with slow growth', 'Risk of shallow relationships'],
        development: ['Learn discipleship skills', 'Develop cultural intelligence', 'Practice sustained relationships'],
        ministryFit: ['Personal evangelism', 'Outreach ministry', 'Missions work', 'Community engagement', 'Seeker ministry'],
        scripture: 'Acts 8:4 - "Those who had been scattered preached the word wherever they went."'
      },
      'Shepherding': {
        icon: Shield,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        description: 'You have a natural heart for caring, protecting, and nurturing people through their spiritual journey and life challenges.',
        traits: ['Protective instincts', 'Nurturing care', 'Emotional intelligence', 'Loyalty', 'Patient guidance'],
        challenges: ['Can be overprotective', 'May avoid necessary conflict', 'Risk of enabling dependence'],
        development: ['Learn to balance care with growth', 'Develop healthy boundaries', 'Practice tough love'],
        ministryFit: ['Pastoral care', 'Small group leadership', 'Counseling ministry', 'Recovery ministry', 'Family ministry'],
        scripture: 'John 10:11 - "I am the good shepherd. The good shepherd lays down his life for the sheep."'
      },
      'Teaching': {
        icon: BookOpen,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        description: 'You have a passion for understanding and communicating truth, helping others grow in knowledge and biblical literacy.',
        traits: ['Love of learning', 'Clear communication', 'Research skills', 'Systematic thinking', 'Patient instruction'],
        challenges: ['Can get lost in details', 'May prioritize knowledge over application', 'Risk of academic isolation'],
        development: ['Focus on practical application', 'Develop relational skills', 'Practice accessible communication'],
        ministryFit: ['Bible teaching', 'Educational ministry', 'Curriculum development', 'Mentoring', 'Seminary education'],
        scripture: '2 Timothy 2:2 - "And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others."'
      }
    };

    return descriptions[gift as keyof typeof descriptions];
  };

  const progress = (currentQuestion / currentQuestions.length) * 100;

  if (!quizStarted && currentSection === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Button asChild variant="ghost">
                <Link href="/ebook-example-two">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Learning Hub
                </Link>
              </Button>
              <div className="text-sm text-gray-600">APEST Assessment 2.0</div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Compass className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Your Ministry DNA
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take Tim Catchim's enhanced APEST assessment to uncover your unique calling and receive personalized insights for ministry development.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50,000+</div>
                <div className="text-sm text-gray-600">Leaders Assessed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4.9/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>

          {/* Assessment Flow Selection */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Choose Your Assessment Experience</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {assessmentFlows.map((flow) => (
                <Card 
                  key={flow.id}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
                    selectedFlow === flow.id ? 'ring-2 ring-purple-500 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedFlow(flow.id as 'comprehensive' | 'quick')}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${flow.color}`} />
                  
                  {flow.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                        {flow.badge}
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{flow.title}</h3>
                      <p className="text-purple-600 font-medium mb-3">{flow.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{flow.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{flow.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="w-4 h-4" />
                          <span>{flow.accuracy} accurate</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {flow.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full ${selectedFlow === flow.id ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                      variant={selectedFlow === flow.id ? 'default' : 'outline'}
                    >
                      {selectedFlow === flow.id ? 'Selected' : 'Choose This Option'}
                      {selectedFlow === flow.id && <CheckCircle className="w-4 h-4 ml-2" />}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">AI-Enhanced Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Advanced algorithms provide deeper insights into your ministry calling and team dynamics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Dashboard</h3>
                <p className="text-gray-600 text-sm">
                  Track your growth journey with customized development plans and progress monitoring.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibent text-gray-900 mb-2">Team Integration</h3>
                <p className="text-gray-600 text-sm">
                  Compare results with team members and discover optimal collaboration patterns.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Start Assessment */}
          {selectedFlow && (
            <div className="text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Begin?</h3>
                  <p className="text-gray-600 mb-6">
                    You've selected the <strong>{assessmentFlows.find(f => f.id === selectedFlow)?.title}</strong>. 
                    This assessment will take approximately{' '}
                    <strong>{assessmentFlows.find(f => f.id === selectedFlow)?.duration}</strong>.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      onClick={() => {
                        setQuizStarted(true);
                        setCurrentSection('assessment');
                      }}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Assessment
                    </Button>
                    
                    <p className="text-xs text-gray-500">
                      Your responses are private and secure. Results can be downloaded or shared at your discretion.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        <Footer />
      </div>
    );
  }

  if (showResults) {
    const primaryGift = getPrimaryGift();
    const giftInfo = getGiftDescription(primaryGift.name);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Button asChild variant="ghost">
                <Link href="/ebook-example-two">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Learning Hub
                </Link>
              </Button>
              
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setBookmarkedResults(!bookmarkedResults)}
                  className={bookmarkedResults ? "text-yellow-600" : "text-gray-600"}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarkedResults ? "fill-current" : ""}`} />
                </Button>
                
                <Button variant="ghost" size="sm" onClick={() => setShareModalOpen(true)}>
                  <Share2 className="w-4 h-4" />
                </Button>
                
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Results Header */}
          <div className="text-center mb-12">
            <div className={`w-24 h-24 ${giftInfo?.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
              {giftInfo?.icon && <giftInfo.icon className={`w-12 h-12 ${giftInfo.color}`} />}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              You Are {primaryGift.name}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              {giftInfo?.description}
            </p>

            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{Math.round(timeSpent / 60)}m {timeSpent % 60}s</div>
                <div className="text-sm text-gray-600">Time Taken</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{confidenceLevel}%</div>
                <div className="text-sm text-gray-600">Confidence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{Object.keys(answers).length}/{currentQuestions.length}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </div>

            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 text-lg px-4 py-2">
              <Award className="w-5 h-5 mr-2" />
              Assessment Complete!
            </Badge>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="team">Team Dynamics</TabsTrigger>
              <TabsTrigger value="action">Action Plan</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Score Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                    Your APEST Profile
                  </CardTitle>
                  <CardDescription>
                    Here's how you scored across all five ministry gifts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(primaryGift.totals).map(([gift, score]) => {
                      const giftNames = { A: 'Apostolic', P: 'Prophetic', E: 'Evangelistic', S: 'Shepherding', T: 'Teaching' };
                      const giftName = giftNames[gift as keyof typeof giftNames];
                      const percentage = Math.round((score / Math.max(...Object.values(primaryGift.totals))) * 100);
                      const isPrimary = score === Math.max(...Object.values(primaryGift.totals));
                      
                      return (
                        <div key={gift} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className={`font-medium ${isPrimary ? 'text-purple-600' : 'text-gray-700'}`}>
                              {giftName}
                              {isPrimary && <Badge className="ml-2 bg-purple-100 text-purple-700 text-xs">Primary</Badge>}
                            </span>
                            <span className="text-sm text-gray-600">{score} points</span>
                          </div>
                          <Progress 
                            value={percentage} 
                            className={`h-3 ${isPrimary ? '[&>div]:bg-purple-600' : '[&>div]:bg-gray-400'}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Key Strengths */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-600" />
                      Key Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {giftInfo?.traits.map((trait, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{trait}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                      Growth Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {giftInfo?.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-orange-500" />
                          <span className="text-gray-700">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Ministry Fit */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="w-5 h-5 mr-2 text-blue-600" />
                    Ideal Ministry Roles
                  </CardTitle>
                  <CardDescription>
                    Based on your {primaryGift.name} gifting, these ministry areas align with your strengths
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {giftInfo?.ministryFit.map((role, index) => (
                      <div key={index} className="p-4 bg-blue-50 rounded-lg text-center">
                        <span className="text-blue-800 font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Scripture Foundation */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-3">Biblical Foundation</h3>
                      <p className="text-blue-800 italic mb-3 leading-relaxed">
                        {giftInfo?.scripture}
                      </p>
                      <p className="text-blue-700 text-sm">
                        This verse captures the heart of {primaryGift.name} ministry and your calling to serve God's people.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="detailed" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-purple-600" />
                    Detailed Analysis
                  </CardTitle>
                  <CardDescription>
                    Deep dive into your responses and ministry patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Domain Analysis */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Domain Breakdown</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {['Vision & Innovation', 'Relational Bridge-Building', 'Care & Nurture', 'Knowledge & Understanding'].map((domain, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-gray-700">{domain}</span>
                              <Badge variant="outline">{Math.floor(Math.random() * 20) + 70}%</Badge>
                            </div>
                            <p className="text-sm text-gray-600">
                              Strong alignment with your {primaryGift.name} gifting
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Personality Insights */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Personality Insights</h4>
                      <div className="space-y-2">
                        {personalityInsights.map((insight, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Lightbulb className="w-4 h-4 text-yellow-500" />
                            <span className="text-gray-700">{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Response Patterns */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Response Patterns</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">95%</div>
                          <div className="text-sm text-green-700">Consistency Score</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">8.7</div>
                          <div className="text-sm text-blue-700">Confidence Level</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">Strong</div>
                          <div className="text-sm text-purple-700">Gift Clarity</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="development" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Development Recommendations
                  </CardTitle>
                  <CardDescription>
                    Personalized growth plan based on your {primaryGift.name} gifting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {giftInfo?.development.map((recommendation, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 mb-2">{recommendation}</p>
                            <Button size="sm" variant="outline">
                              <BookOpen className="w-4 h-4 mr-2" />
                              View Resources
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Learning Pathway */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Map className="w-5 h-5 mr-2 text-blue-600" />
                    Recommended Learning Pathway
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: 'Foundations Course', status: 'available', duration: '4 weeks' },
                      { title: 'Advanced Training', status: 'locked', duration: '6 weeks' },
                      { title: 'Leadership Intensive', status: 'locked', duration: '8 weeks' },
                      { title: 'Certification Program', status: 'locked', duration: '12 weeks' }
                    ].map((course, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            course.status === 'available' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                          }`}>
                            {course.status === 'available' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{course.title}</h4>
                            <p className="text-sm text-gray-600">{course.duration}</p>
                          </div>
                        </div>
                        <Button size="sm" disabled={course.status === 'locked'}>
                          {course.status === 'available' ? 'Start Course' : 'Coming Soon'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    Team Dynamics
                  </CardTitle>
                  <CardDescription>
                    How your {primaryGift.name} gifting complements other APEST gifts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Collaboration Matrix */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Collaboration Strengths</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h5 className="font-medium text-green-800 mb-2">Natural Partners</h5>
                          <p className="text-sm text-green-700">
                            Works exceptionally well with Teaching and Shepherding gifts
                          </p>
                        </div>
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <h5 className="font-medium text-yellow-800 mb-2">Growth Opportunities</h5>
                          <p className="text-sm text-yellow-700">
                            Can develop stronger connections with Prophetic gifts
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Team Building Suggestions */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Team Building Suggestions</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-gray-700 font-medium">Balance innovation with stability</p>
                            <p className="text-sm text-gray-600">Partner with Shepherding gifts to ground visionary ideas</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-gray-700 font-medium">Seek prophetic input</p>
                            <p className="text-sm text-gray-600">Include Prophetic voices for spiritual discernment</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-gray-700 font-medium">Leverage teaching strengths</p>
                            <p className="text-sm text-gray-600">Work with Teachers to develop training systems</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="action" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    30-Day Action Plan
                  </CardTitle>
                  <CardDescription>
                    Immediate steps to develop your {primaryGift.name} gifting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Week by Week Plan */}
                    {[
                      {
                        week: 1,
                        title: 'Assessment & Foundation',
                        tasks: [
                          'Complete additional gift assessments',
                          'Read recommended {primaryGift.name} resources',
                          'Identify current ministry opportunities'
                        ]
                      },
                      {
                        week: 2,
                        title: 'Practical Application',
                        tasks: [
                          'Shadow a leader with similar gifting',
                          'Start a small ministry experiment',
                          'Connect with your mentor/coach'
                        ]
                      },
                      {
                        week: 3,
                        title: 'Skill Development',
                        tasks: [
                          'Attend relevant training workshop',
                          'Practice new ministry skills',
                          'Gather feedback from trusted leaders'
                        ]
                      },
                      {
                        week: 4,
                        title: 'Integration & Planning',
                        tasks: [
                          'Evaluate progress and learnings',
                          'Plan next phase of development',
                          'Schedule regular check-ins'
                        ]
                      }
                    ].map((week, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                            {week.week}
                          </div>
                          <h4 className="font-semibold text-gray-900">{week.title}</h4>
                        </div>
                        <div className="space-y-2 ml-11">
                          {week.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-center space-x-2">
                              <input type="checkbox" className="text-blue-600" />
                              <span className="text-gray-700">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="flex space-x-4">
                      <Button>
                        <Download className="w-4 h-4 mr-2" />
                        Download Action Plan
                      </Button>
                      <Button variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Next Steps */}
          <div className="flex items-center justify-between py-8 border-t border-gray-200">
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard-example-two">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Dashboard
              </Link>
            </Button>
            
            <div className="text-center">
              <Badge variant="outline" className="mb-2">
                Results Saved
              </Badge>
              <p className="text-sm text-gray-600">Access anytime in your dashboard</p>
            </div>
            
            <Button asChild size="lg">
              <Link href="/ebook-example-two">
                Continue Learning Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Assessment Questions View
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="ghost"
              onClick={() => setQuizStarted(false)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Exit Assessment
            </Button>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {currentQuestions.length}
              </div>
              <div className="text-sm text-gray-600">
                {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
              </div>
            </div>
          </div>
          
          <div className="pb-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardContent className="p-8">
            {/* Domain Badge */}
            <div className="mb-6">
              <Badge variant="outline" className="mb-4">
                {currentQuestions[currentQuestion]?.domain} Domain
              </Badge>
              <div className="text-sm text-gray-600 mb-2">
                {currentQuestions[currentQuestion]?.category}
              </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
              {currentQuestions[currentQuestion]?.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-4">
              {currentQuestions[currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion, index)}
                  className="w-full p-6 text-left border-2 border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-100 group-hover:bg-purple-100 rounded-full flex items-center justify-center text-gray-600 group-hover:text-purple-600 font-semibold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-gray-800 group-hover:text-gray-900 leading-relaxed">
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <div className="text-sm text-gray-600">
                {Math.round(progress)}% complete
              </div>
              
              <Button
                onClick={() => {
                  if (currentQuestion < currentQuestions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                  } else {
                    calculateResults();
                  }
                }}
                disabled={!(currentQuestion in answers)}
              >
                {currentQuestion === currentQuestions.length - 1 ? 'View Results' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Tips */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Assessment Tips</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Choose the response that most naturally reflects how you think and act</li>
                  <li>• Don't overthink - go with your first instinct</li>
                  <li>• Consider how others would describe your typical approach</li>
                  <li>• Think about what energizes you most in ministry settings</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
