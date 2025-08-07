"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Brain,
  MessageSquare,
  List,
  Users,
  Heart,
  Clock,
  Settings,
  Lightbulb,
  Target,
  BookOpen,
  CheckCircle,
  Copy,
  Download,
  RefreshCw,
  Filter,
  Search,
  Zap,
  Eye,
  MapPin,
  Volume2,
  FileText,
  Palette
} from "lucide-react";

interface ScaffoldStrategy {
  category: string;
  name: string;
  description: string;
  examples: string[];
  typologyInsights: string;
  implementation: string;
  mbtiTypes: string[];
  enneagramTypes: string[];
  gardnerTypes: string[];
}

export default function ScaffoldingTool() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [learnerType, setLearnerType] = useState("");
  const [teachingGoal, setTeachingGoal] = useState("");
  const [contentTopic, setContentTopic] = useState("");
  const [generatedScaffolds, setGeneratedScaffolds] = useState<ScaffoldStrategy[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const scaffoldCategories = [
    { id: "cognitive", name: "Cognitive", icon: Brain, color: "bg-blue-100 text-blue-700", description: "Mental processing supports" },
    { id: "linguistic", name: "Linguistic", icon: MessageSquare, color: "bg-green-100 text-green-700", description: "Language and communication aids" },
    { id: "procedural", name: "Procedural", icon: List, color: "bg-orange-100 text-orange-700", description: "Step-by-step process guides" },
    { id: "social", name: "Social", icon: Users, color: "bg-purple-100 text-purple-700", description: "Collaborative learning structures" },
    { id: "affective", name: "Affective", icon: Heart, color: "bg-red-100 text-red-700", description: "Emotional and motivational supports" },
    { id: "temporal", name: "Temporal", icon: Clock, color: "bg-indigo-100 text-indigo-700", description: "Time and pacing structures" },
    { id: "environmental", name: "Environmental", icon: Settings, color: "bg-gray-100 text-gray-700", description: "Context and resource management" }
  ];

  const scaffoldingStrategies = [
    {
      category: "cognitive",
      name: "Worked Examples",
      description: "Step-by-step demonstrations that model correct process and structure.",
      examples: ["Math problems with shown steps", "Writing sample breakdowns", "Problem-solving walkthroughs"],
      typologyInsights: "Excellent for SJs (MBTI) and Type 5s (Enneagram) who value precision and structured understanding. Aligns with Logical-Mathematical intelligence.",
      implementation: "Start with a complete example, then gradually remove support in subsequent examples.",
      mbtiTypes: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
      enneagramTypes: ["5"],
      gardnerTypes: ["Logical-Mathematical"]
    },
    {
      category: "cognitive",
      name: "Graphic Organizers",
      description: "Visual tools for mapping relationships between concepts.",
      examples: ["Mind maps", "Venn diagrams", "Storyboards", "Flowcharts"],
      typologyInsights: "Ideal for INTPs/INTJs, Type 1s and 5s. Supports Visual-Spatial and Interpersonal intelligences.",
      implementation: "Provide templates first, then encourage learners to create their own organizers.",
      mbtiTypes: ["INTP", "INTJ"],
      enneagramTypes: ["1", "5"],
      gardnerTypes: ["Visual-Spatial", "Interpersonal"]
    },
    {
      category: "cognitive",
      name: "Conceptual Anchors",
      description: "Abstract or metaphorical frameworks to prime learners for upcoming ideas.",
      examples: ["Essay = hamburger metaphor", "AI = mirror or lens framing", "Church = body metaphor"],
      typologyInsights: "Effective for INFJs, INTJs, Type 4s and 5s. Favors abstract thinkers with strong Intuition.",
      implementation: "Use familiar concepts to bridge to new, complex ideas.",
      mbtiTypes: ["INFJ", "INTJ"],
      enneagramTypes: ["4", "5"],
      gardnerTypes: ["Linguistic", "Intrapersonal"]
    },
    {
      category: "cognitive",
      name: "Chunking",
      description: "Breaking complex content into smaller, manageable units.",
      examples: ["3-part models", "Bite-sized lessons", "Sectioned workflows"],
      typologyInsights: "Good for all types but especially effective for learners with low Working Memory or high Neuroticism.",
      implementation: "Organize content into logical, digestible segments with clear transitions.",
      mbtiTypes: ["All types"],
      enneagramTypes: ["All types"],
      gardnerTypes: ["All intelligences"]
    },
    {
      category: "cognitive",
      name: "Modeling Metacognition",
      description: "Showing your thought process out loud to model mental moves.",
      examples: ["Think-alouds", "Internal monologue walkthroughs", "Decision-making transparency"],
      typologyInsights: "Great for NF types and Type 4s and 9s. Helps learners strong in Intrapersonal intelligence.",
      implementation: "Verbalize your thinking process as you work through problems or concepts.",
      mbtiTypes: ["INFJ", "INFP", "ENFJ", "ENFP"],
      enneagramTypes: ["4", "9"],
      gardnerTypes: ["Intrapersonal"]
    },
    {
      category: "linguistic",
      name: "Sentence Starters/Frames",
      description: "Scaffolded language supports for structured expression.",
      examples: ["I believe ___ because ___", "A similarity I notice is ___", "The key insight here is ___"],
      typologyInsights: "Helpful for SF types, high Agreeableness, and Verbal-Linguistic intelligence learners.",
      implementation: "Provide language templates that learners can adapt and eventually internalize.",
      mbtiTypes: ["ISFJ", "ISFP", "ESFJ", "ESFP"],
      enneagramTypes: ["2", "9"],
      gardnerTypes: ["Verbal-Linguistic"]
    },
    {
      category: "linguistic",
      name: "Prompt Templates",
      description: "Structured inputs for AI or human partners to elicit quality output.",
      examples: ["Act as ___ and help me ___", "Compare X and Y using ___", "Analyze this from the perspective of ___"],
      typologyInsights: "Favored by NT types, high Openness, Type 5s. Engages strategic learners and tinkerers.",
      implementation: "Create reusable templates that can be adapted for different contexts.",
      mbtiTypes: ["INTJ", "INTP", "ENTJ", "ENTP"],
      enneagramTypes: ["5", "8"],
      gardnerTypes: ["Logical-Mathematical", "Linguistic"]
    },
    {
      category: "linguistic",
      name: "Tiered Questioning",
      description: "Questions that build from surface to depth.",
      examples: ["What → Why → How → What if?", "Factual → Analytical → Hypothetical"],
      typologyInsights: "Engaging for N types and Types 1 and 3. Fosters abstract reasoning and conceptual layering.",
      implementation: "Design question sequences that progressively deepen understanding.",
      mbtiTypes: ["INTJ", "INFJ", "ENTJ", "ENFJ"],
      enneagramTypes: ["1", "3"],
      gardnerTypes: ["Logical-Mathematical", "Interpersonal"]
    },
    {
      category: "procedural",
      name: "Checklists",
      description: "Task sequence lists to ensure step completion.",
      examples: ["Writing checklist", "Experiment protocol list", "Ministry planning checklist"],
      typologyInsights: "Best for SJ types, Type 1s, and those high in Conscientiousness. Supports sequential thinkers.",
      implementation: "Create comprehensive but flexible lists that can be customized by learners.",
      mbtiTypes: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
      enneagramTypes: ["1"],
      gardnerTypes: ["Logical-Mathematical"]
    },
    {
      category: "procedural",
      name: "Guided Notes",
      description: "Partially-filled notes for learners to complete.",
      examples: ["Lecture notes with blanks", "Scaffolded outlines", "Interactive worksheets"],
      typologyInsights: "Useful for all types but especially concrete learners like ISFJs and ESFJs. Suits Kinesthetic and Visual learners.",
      implementation: "Provide structure while leaving space for personal insight and discovery.",
      mbtiTypes: ["ISFJ", "ESFJ"],
      enneagramTypes: ["6"],
      gardnerTypes: ["Kinesthetic", "Visual-Spatial"]
    },
    {
      category: "procedural",
      name: "Process Walkthroughs",
      description: "Guided progress through a multi-step workflow.",
      examples: ["Writing process", "Coding tutorial", "Problem-solving demo"],
      typologyInsights: "Helpful for Type 6s, ISTJs, and those with high Need for Closure. Reduces anxiety through clarity.",
      implementation: "Break complex processes into clear, manageable steps with checkpoints.",
      mbtiTypes: ["ISTJ"],
      enneagramTypes: ["6"],
      gardnerTypes: ["Logical-Mathematical", "Kinesthetic"]
    },
    {
      category: "social",
      name: "Think-Pair-Share",
      description: "Moves from solitary thinking to collaborative sharing.",
      examples: ["Reflect → discuss → share out", "Individual → partner → group"],
      typologyInsights: "Perfect for ESFJs, ENFPs, and Types 2 and 9. Builds interpersonal fluency and safety.",
      implementation: "Structure interaction to build from individual reflection to group synthesis.",
      mbtiTypes: ["ESFJ", "ENFP"],
      enneagramTypes: ["2", "9"],
      gardnerTypes: ["Interpersonal"]
    },
    {
      category: "social",
      name: "Co-Construction Dialogues",
      description: "Teacher and learner build knowledge together in real-time.",
      examples: ["Live feedback", "Open-ended prompting", "Socratic method"],
      typologyInsights: "Ideal for NF types, Type 4s and 9s. Builds trust and empathy alongside cognition.",
      implementation: "Create genuine dialogue where both teacher and learner contribute to understanding.",
      mbtiTypes: ["INFJ", "INFP", "ENFJ", "ENFP"],
      enneagramTypes: ["4", "9"],
      gardnerTypes: ["Interpersonal", "Intrapersonal"]
    },
    {
      category: "social",
      name: "Peer Review/Coaching",
      description: "Students evaluate or support one another's learning.",
      examples: ["Rubric-based peer review", "Paired critique rounds", "Collaborative problem-solving"],
      typologyInsights: "Great for Types 3 and 7, ENFPs, and those with strong Interpersonal intelligence. Encourages external processing.",
      implementation: "Provide clear criteria and supportive structures for peer interaction.",
      mbtiTypes: ["ENFP", "ESFP"],
      enneagramTypes: ["3", "7"],
      gardnerTypes: ["Interpersonal"]
    },
    {
      category: "affective",
      name: "Successive Approximation",
      description: "Builds confidence with achievable first steps.",
      examples: ["Let's just get one good paragraph done", "Start with the easiest part"],
      typologyInsights: "Helpful for INFPs, ISFPs, Type 4s. Reduces perfectionism and encourages flow.",
      implementation: "Break goals into smaller, achievable milestones that build momentum.",
      mbtiTypes: ["INFP", "ISFP"],
      enneagramTypes: ["4"],
      gardnerTypes: ["Intrapersonal"]
    },
    {
      category: "affective",
      name: "Choice Architecture",
      description: "Offering controlled options to boost agency.",
      examples: ["Pick a topic from this list", "Choose video or podcast", "Select your learning path"],
      typologyInsights: "Useful for ENFPs, ENTPs, and high Openness learners. Helps counter reactance or low motivation.",
      implementation: "Provide meaningful choices within structured parameters.",
      mbtiTypes: ["ENFP", "ENTP"],
      enneagramTypes: ["7"],
      gardnerTypes: ["Intrapersonal"]
    },
    {
      category: "affective",
      name: "Reflective Pause",
      description: "Stopping for metacognitive reflection mid-process.",
      examples: ["What did you notice about how you solved that?", "How are you feeling about this so far?"],
      typologyInsights: "Powerful for INFJs, INFPs, Types 9 and 5. Boosts learning consolidation and emotional integration.",
      implementation: "Build in regular reflection points to process learning and emotions.",
      mbtiTypes: ["INFJ", "INFP"],
      enneagramTypes: ["5", "9"],
      gardnerTypes: ["Intrapersonal"]
    },
    {
      category: "temporal",
      name: "Timeboxing",
      description: "Allocating defined time for specific activities.",
      examples: ["10-minute writing sprints", "Pomodoro cycles", "Timed brainstorming sessions"],
      typologyInsights: "Highly effective for ENFPs, ENTPs, and Type 7s. Builds Executive Function and focus stamina.",
      implementation: "Use time constraints to create focus and prevent overwhelm.",
      mbtiTypes: ["ENFP", "ENTP"],
      enneagramTypes: ["7"],
      gardnerTypes: ["Kinesthetic"]
    },
    {
      category: "temporal",
      name: "Phase-Based Progressions",
      description: "Structuring learning into stages.",
      examples: ["Phase 1: Discover → Phase 2: Draft → Phase 3: Reflect", "Sequential skill building"],
      typologyInsights: "Useful for INTJs, ISTJs, and those high in Conscientiousness. Appeals to system builders.",
      implementation: "Create clear phases with distinct goals and transition points.",
      mbtiTypes: ["INTJ", "ISTJ"],
      enneagramTypes: ["1"],
      gardnerTypes: ["Logical-Mathematical"]
    },
    {
      category: "environmental",
      name: "Tool Constraints",
      description: "Limitations placed to guide creativity or depth.",
      examples: ["Only use 3 sources", "2-sentence max response", "Single-page summary"],
      typologyInsights: "Helpful for all types prone to overextension — especially high Openness or ADHD learners. Promotes intentionality.",
      implementation: "Use creative constraints to focus attention and encourage depth over breadth.",
      mbtiTypes: ["ENFP", "ENTP", "INFP"],
      enneagramTypes: ["7"],
      gardnerTypes: ["All intelligences"]
    },
    {
      category: "environmental",
      name: "Curated Resources",
      description: "Intentional narrowing of input sources.",
      examples: ["Just use these 2 case studies for now", "Selected reading list", "Focused resource bank"],
      typologyInsights: "Helpful for high Neuroticism, INTPs, Type 5s. Reduces noise and decision fatigue.",
      implementation: "Carefully select and limit resources to prevent overwhelm while maintaining quality.",
      mbtiTypes: ["INTP"],
      enneagramTypes: ["5"],
      gardnerTypes: ["Logical-Mathematical"]
    },
    {
      category: "environmental",
      name: "Learning Zones",
      description: "Physical or digital spaces designed for specific thinking states.",
      examples: ["Quiet Writing Zone", "Visual Inspiration Wall", "Collaborative Discussion Area"],
      typologyInsights: "Supports Kinesthetic, Spatial, and Intrapersonal learners. Great for ISFPs and INFJs.",
      implementation: "Design environments that support the type of thinking and learning you want to encourage.",
      mbtiTypes: ["ISFP", "INFJ"],
      enneagramTypes: ["4", "9"],
      gardnerTypes: ["Kinesthetic", "Visual-Spatial", "Intrapersonal"]
    }
  ];

  const learnerTypes = [
    { value: "visual", label: "Visual Learners", description: "Learn through seeing and visual aids" },
    { value: "auditory", label: "Auditory Learners", description: "Learn through listening and discussion" },
    { value: "kinesthetic", label: "Kinesthetic Learners", description: "Learn through movement and hands-on activities" },
    { value: "reading", label: "Reading/Writing Learners", description: "Learn through text and written materials" },
    { value: "introverted", label: "Introverted Learners", description: "Prefer individual reflection and quiet processing" },
    { value: "extroverted", label: "Extroverted Learners", description: "Learn through interaction and external processing" },
    { value: "sequential", label: "Sequential Learners", description: "Need step-by-step, logical progression" },
    { value: "global", label: "Global Learners", description: "Need to see the big picture first" }
  ];

  const filteredScaffolds = scaffoldingStrategies.filter(scaffold => {
    const matchesCategory = selectedCategory === "all" || scaffold.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      scaffold.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scaffold.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scaffold.examples.some(example => example.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const generatePersonalizedScaffolds = () => {
    setIsGenerating(true);
    
    // Simulate AI generation process
    setTimeout(() => {
      const relevantScaffolds = scaffoldingStrategies.filter(scaffold => {
        // Filter based on learner type and teaching goal
        return scaffold.typologyInsights.toLowerCase().includes(learnerType.toLowerCase()) ||
               scaffold.description.toLowerCase().includes(teachingGoal.toLowerCase());
      }).slice(0, 5);
      
      setGeneratedScaffolds(relevantScaffolds);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
              Teaching Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Scaffolding
              <span className="block trimtab-gradient bg-clip-text text-transparent">
                Teaching Tool
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Design personalized learning experiences with research-backed scaffolding strategies 
              tailored to different learning types and ministry contexts.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <Tabs defaultValue="explore" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="explore">Explore Scaffolds</TabsTrigger>
            <TabsTrigger value="personalize">Personalize</TabsTrigger>
            <TabsTrigger value="generate">Generate Plan</TabsTrigger>
          </TabsList>

          {/* Explore Scaffolds Tab */}
          <TabsContent value="explore" className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                size="sm"
              >
                All Categories
              </Button>
              {scaffoldCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search scaffolding strategies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Scaffolding Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScaffolds.map((scaffold, index) => {
                const categoryInfo = scaffoldCategories.find(cat => cat.id === scaffold.category);
                if (!categoryInfo) return null;
                
                return (
                  <Card key={index} className="trimtab-card-hover">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={categoryInfo.color}>
                          <categoryInfo.icon className="h-3 w-3 mr-1" />
                          {categoryInfo.name}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(`${scaffold.name}: ${scaffold.description}`)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardTitle className="text-lg">{scaffold.name}</CardTitle>
                      <CardDescription>{scaffold.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">Examples:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {scaffold.examples.map((example, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">Best For:</h4>
                          <p className="text-sm text-gray-600">{scaffold.typologyInsights}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">Implementation:</h4>
                          <p className="text-sm text-gray-600">{scaffold.implementation}</p>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-3">
                          {scaffold.mbtiTypes.slice(0, 3).map((type, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {type}
                            </Badge>
                          ))}
                          {scaffold.mbtiTypes.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{scaffold.mbtiTypes.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Personalize Tab */}
          <TabsContent value="personalize" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-blue-600" />
                  Learning Context Setup
                </CardTitle>
                <CardDescription>
                  Tell us about your learners and teaching goals to get personalized scaffold recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="topic">Teaching Topic</Label>
                    <Input
                      id="topic"
                      placeholder="e.g., APEST Gifts, Leadership Development, Biblical Hermeneutics"
                      value={contentTopic}
                      onChange={(e) => setContentTopic(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="goal">Teaching Goal</Label>
                    <Select value={teachingGoal} onValueChange={setTeachingGoal}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="understanding">Build Understanding</SelectItem>
                        <SelectItem value="application">Encourage Application</SelectItem>
                        <SelectItem value="reflection">Deepen Reflection</SelectItem>
                        <SelectItem value="collaboration">Foster Collaboration</SelectItem>
                        <SelectItem value="skills">Develop Skills</SelectItem>
                        <SelectItem value="transformation">Catalyze Transformation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="learnerType">Primary Learner Type</Label>
                  <Select value={learnerType} onValueChange={setLearnerType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select learner characteristics" />
                    </SelectTrigger>
                    <SelectContent>
                      {learnerTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label} - {type.description}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={generatePersonalizedScaffolds}
                  disabled={!contentTopic || !teachingGoal || !learnerType || isGenerating}
                  className="w-full trimtab-gradient text-white"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating Recommendations...
                    </>
                  ) : (
                    <>
                      <Lightbulb className="mr-2 h-4 w-4" />
                      Get Personalized Scaffolds
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Generated Recommendations */}
            {generatedScaffolds.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-blue-600" />
                    Recommended Scaffolds for "{contentTopic}"
                  </CardTitle>
                  <CardDescription>
                    Based on your teaching goal: {teachingGoal} and learner type: {learnerType}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {generatedScaffolds.map((scaffold, index) => {
                      const categoryInfo = scaffoldCategories.find(cat => cat.id === scaffold.category);
                      if (!categoryInfo) return null;
                      
                      return (
                        <Card key={index} className="border-l-4 border-l-blue-500">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  <Badge className={categoryInfo.color}>
                                    <categoryInfo.icon className="h-3 w-3 mr-1" />
                                    {categoryInfo.name}
                                  </Badge>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{scaffold.name}</h3>
                                <p className="text-gray-600 mb-3">{scaffold.description}</p>
                                <p className="text-sm text-blue-700 font-medium">{scaffold.implementation}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(`${scaffold.name}: ${scaffold.implementation}`)}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Generate Plan Tab */}
          <TabsContent value="generate" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-600" />
                  Lesson Plan Generator
                </CardTitle>
                <CardDescription>
                  Create a complete scaffolded lesson plan for your teaching context.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Session Duration</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="90">90 minutes</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="180">3 hours</SelectItem>
                        <SelectItem value="full-day">Full day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Group Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select group size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">1-on-1 Coaching</SelectItem>
                        <SelectItem value="small">Small Group (2-8)</SelectItem>
                        <SelectItem value="medium">Medium Group (9-20)</SelectItem>
                        <SelectItem value="large">Large Group (21-50)</SelectItem>
                        <SelectItem value="conference">Conference (50+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Learning Objectives</Label>
                  <Textarea
                    placeholder="What should learners be able to do/understand/feel by the end of this session?"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Anticipated Challenges</Label>
                  <Textarea
                    placeholder="What obstacles or resistance might learners face with this content?"
                    rows={2}
                  />
                </div>

                <Button className="w-full trimtab-gradient text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Generate Complete Lesson Plan
                </Button>
              </CardContent>
            </Card>

            {/* Sample Generated Plan Preview */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Eye className="h-5 w-5 mr-2" />
                  Sample Generated Plan
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Here's what a generated scaffolded lesson plan looks like:
                </CardDescription>
              </CardHeader>
              <CardContent className="text-blue-900">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-2">🎯 Opening (5 min): Conceptual Anchor</h4>
                    <p className="text-sm text-gray-700">"Today we'll explore APEST like a jazz ensemble - each gift plays a unique part, but together they create beautiful harmony."</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-2">🧠 Introduction (10 min): Graphic Organizer</h4>
                    <p className="text-sm text-gray-700">Provide a visual map showing the 5 gifts with empty boxes for learners to fill in characteristics as we explore each one.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-2">👥 Exploration (20 min): Think-Pair-Share</h4>
                    <p className="text-sm text-gray-700">Individual reflection on personal gifting → Partner discussion → Whole group sharing of insights.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-2">🎯 Application (15 min): Successive Approximation</h4>
                    <p className="text-sm text-gray-700">Start with identifying just one APEST gift they see in themselves, then gradually build to team composition insights.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-2">🤔 Closure (10 min): Reflective Pause</h4>
                    <p className="text-sm text-gray-700">"What surprised you about your gift mix? How might this change how you approach ministry?"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
