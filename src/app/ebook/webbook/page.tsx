'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  MessageCircle,
  Highlighter,
  StickyNote,
  Download,
  Share2,
  Search,
  Settings,
  ChevronLeft,
  ChevronRight,
  Brain,
  Lightbulb,
  CheckCircle,
  Menu,
  X,
  Play,
  Pause
} from 'lucide-react';

interface WebBookChapter {
  id: number;
  title: string;
  content: string;
  audioUrl?: string;
  quiz?: {
    questions: Array<{
      question: string;
      options: string[];
      correct: number;
      explanation: string;
    }>;
  };
}

interface UserProgress {
  currentChapter: number;
  completedChapters: number[];
  highlights: Array<{
    chapterId: number;
    text: string;
    note?: string;
    timestamp: Date;
  }>;
  notes: Array<{
    chapterId: number;
    content: string;
    timestamp: Date;
  }>;
  quizScores: Record<number, number>;
}

interface AskTimMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  context?: {
    chapter: number;
    page?: string;
    citations?: string[];
  };
}

const sampleChapters: WebBookChapter[] = [
  {
    id: 1,
    title: "The Current State of Ministry",
    content: `
# The Current State of Ministry: Why APEST Matters More Than Ever

In today's rapidly changing world, ministry leaders face unprecedented challenges. The traditional models that worked for previous generations are no longer sufficient for the complexities of modern church leadership.

## The Shifting Landscape

The church is experiencing a fundamental shift. Where once we could rely on established patterns of leadership, we now find ourselves navigating:

- **Cultural Disconnection**: Many churches struggle to connect with younger generations
- **Leadership Burnout**: Pastors are leaving ministry at alarming rates
- **Diminishing Impact**: Despite good intentions, many ministries see declining influence
- **Resource Constraints**: Doing more with less has become the norm

## The APEST Solution Framework

The answer lies not in abandoning biblical principles, but in returning to the complete biblical model of leadership outlined in Ephesians 4:11-13. The five-fold ministry gifts (Apostle, Prophet, Evangelist, Shepherd, Teacher) were designed to:

1. **Equip the saints** for works of service
2. **Build up the body** of Christ  
3. **Bring unity** in faith and knowledge
4. **Promote maturity** in Christ-likeness
5. **Enable growth** in love and truth

## Foundation Focus: Christ as Cornerstone

Before we can understand how apostolic and prophetic gifts work together, we must first understand their common foundation: **Christ as the chief cornerstone** (Ephesians 2:20).

This isn't merely a theological concept—it's the practical foundation for all healthy ministry relationships. When apostolic and prophetic ministries are both grounded in Christ's work of reconciliation, they complement rather than compete.

## Reflection Questions

1. **Personal Assessment**: Which of the current ministry challenges resonates most with your experience?

2. **Foundation Check**: How solid is Christ as the cornerstone in your ministry context? 

3. **Readiness Evaluation**: Are you ready to explore how apostolic and prophetic gifts can work together rather than in tension?

---

*Continue to Chapter 2 to explore how Christ as the Chief Cornerstone provides the foundation for all ministry gifts to work in harmony.*
    `,
    audioUrl: "/audio/chapter-1.mp3",
    quiz: {
      questions: [
        {
          question: "According to the text, what is the primary reason traditional ministry models are struggling?",
          options: [
            "Lack of biblical foundation",
            "Cultural disconnection and changing landscape", 
            "Insufficient training",
            "Poor leadership skills"
          ],
          correct: 1,
          explanation: "The text emphasizes that traditional models are no longer sufficient for the complexities of modern church leadership due to cultural shifts and changing challenges."
        },
        {
          question: "The APEST framework is designed to accomplish all EXCEPT:",
          options: [
            "Equip the saints for works of service",
            "Build up the body of Christ",
            "Replace pastoral leadership entirely",
            "Bring unity in faith and knowledge"
          ],
          correct: 2,
          explanation: "APEST is designed to complement and complete biblical leadership, not replace pastoral ministry but work alongside it."
        }
      ]
    }
  },
  {
    id: 2,
    title: "Christ as the Chief Cornerstone", 
    content: `
# Christ as the Chief Cornerstone: The Foundation for All Ministry Gifts

Understanding apostolic and prophetic connexus begins with understanding their shared foundation: Christ as the chief cornerstone. This isn't theological decoration—it's the architectural principle that makes all ministry relationships stable and productive.

## Ancient Cornerstone Architecture

In biblical times, the cornerstone was the most critical element of any significant building:

- **Orientation**: It determined the alignment of the entire structure
- **Stability**: It bore the primary load and stress points
- **Unity**: It connected and stabilized adjoining walls
- **Standard**: It set the measurement for all other stones

## Christ's Horizontal Work: Overcoming Hostility

Ephesians 2:14-16 reveals Christ's horizontal work among people:

> "For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility, by setting aside in his flesh the law with its commands and regulations. His purpose was to create in himself one new humanity out of the two, thus making peace, and in one body to reconcile both of them to God through the cross, by which he put to death their hostility."

### Key Principles:
1. **Hostility Destruction**: Christ actively destroys barriers between people
2. **Unity Creation**: He creates "one new humanity" from diverse groups  
3. **Peace Making**: His work results in genuine peace, not mere coexistence
4. **Cross-Centered**: This reconciliation happened through sacrificial love

## Christ's Vertical Work: Access to the Father

The passage continues with Christ's vertical work in verse 18:

> "For through him we both have access to the Father by one Spirit."

### The Vertical Dimension:
- **Access Granted**: Direct relationship with the Father
- **Spirit Empowered**: Enabled by the Holy Spirit's presence
- **Unity in Purpose**: Both groups now share the same spiritual access
- **Foundation Established**: Creates basis for all ministry relationships

## Implications for Apostolic-Prophetic Relationships

When both apostolic and prophetic ministries are grounded in Christ's cornerstone work:

1. **Shared Foundation**: Both build on the same Christ-centered base
2. **Complementary Function**: Like adjoining walls supported by the same cornerstone
3. **Mutual Accountability**: Both answer to the same ultimate authority
4. **Common Purpose**: Both serve the same goal of building God's kingdom

## Practical Application

### For Apostolic Leaders:
- Ground all entrepreneurial vision in Christ's reconciling work
- Ensure expansion efforts promote unity, not division
- Test new initiatives against the cornerstone standard

### For Prophetic Leaders:  
- Anchor all revelatory insight in Christ's completed work
- Let prophetic words promote peace and access to God
- Measure prophetic accuracy against the cornerstone truth

## Reflection Questions

1. **Foundation Assessment**: In your ministry relationships, is Christ truly functioning as the cornerstone, or are other foundations competing for that role?

2. **Hostility Check**: Are there barriers or "dividing walls of hostility" in your ministry context that need Christ's reconciling work?

3. **Unity vs. Division**: Do your ministry efforts promote the "one new humanity" that Christ created, or do they inadvertently create new divisions?

---

*In Chapter 3, we'll explore how apostolic and prophetic ministries, when properly grounded in Christ the cornerstone, create a powerful connexus that neither can achieve alone.*
    `,
    audioUrl: "/audio/chapter-2.mp3",
    quiz: {
      questions: [
        {
          question: "In ancient architecture, what was the primary function of a cornerstone?",
          options: [
            "Decoration and beauty",
            "Orientation, stability, unity, and standard-setting",
            "Protection from weather",
            "Entrance and exit point"
          ],
          correct: 1,
          explanation: "The cornerstone served multiple critical functions: determining alignment, bearing primary load, connecting walls, and setting the standard for all other stones."
        },
        {
          question: "According to Ephesians 2:14-16, Christ's horizontal work accomplished:",
          options: [
            "Individual salvation only",
            "Destroying hostility and creating one new humanity",
            "Establishing religious traditions",
            "Organizing church leadership"
          ],
          correct: 1,
          explanation: "Christ's horizontal work specifically destroyed barriers and hostility between people groups, creating 'one new humanity' and making peace."
        }
      ]
    }
  }
];

export default function WebBookReader() {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progress, setProgress] = useState<UserProgress>({
    currentChapter: 1,
    completedChapters: [],
    highlights: [],
    notes: [],
    quizScores: {}
  });
  const [askTimOpen, setAskTimOpen] = useState(false);
  const [askTimMessages, setAskTimMessages] = useState<AskTimMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm Tim's AI helper. I can help you understand concepts from the book, summarize chapters, suggest next steps, or generate practice prompts based on where you are. What would you like to explore?",
      timestamp: new Date(),
      context: { chapter: 1 }
    }
  ]);
  const [askTimInput, setAskTimInput] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const currentChapterData = sampleChapters.find(ch => ch.id === currentChapter);
  const totalChapters = 7;
  const overallProgress = ((progress.completedChapters.length + (progress.currentChapter / totalChapters)) / totalChapters) * 100;

  useEffect(() => {
    // Track chapter view
    console.log('Analytics: chapter_viewed', { chapter: currentChapter });
  }, [currentChapter]);

  const handleAskTim = async (question: string) => {
    if (!question.trim()) return;

    // Add user message
    const userMessage: AskTimMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date(),
      context: { chapter: currentChapter }
    };

    setAskTimMessages(prev => [...prev, userMessage]);
    setAskTimInput('');

    // Simulate AI response (in real app, this would call your AI service)
    setTimeout(() => {
      const aiResponse: AskTimMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai', 
        content: generateAIResponse(question, currentChapter),
        timestamp: new Date(),
        context: { 
          chapter: currentChapter,
          citations: [`Chapter ${currentChapter}`, "Ephesians 2:14-18"]
        }
      };

      setAskTimMessages(prev => [...prev, aiResponse]);
      
      // Track AI interaction
      console.log('Analytics: ai_query', { 
        chapter: currentChapter, 
        question: question.length,
        response: aiResponse.content.length
      });
    }, 1000);
  };

  const generateAIResponse = (question: string, chapter: number): string => {
    // This would be replaced with actual AI integration
    const responses = {
      1: {
        summary: "Chapter 1 explores why traditional ministry models are struggling in today's changing world. The key insight is that APEST (five-fold ministry) provides the complete biblical framework needed, with Christ as the cornerstone foundation.",
        concepts: "The main concepts are: cultural disconnection, leadership burnout, the APEST solution framework, and the critical importance of Christ as the foundation for all ministry relationships.",
        application: "Start by assessing which current ministry challenges resonate with your experience. Then evaluate how solid Christ is as the cornerstone in your ministry context before exploring APEST implementation."
      },
      2: {
        summary: "Chapter 2 establishes Christ as the chief cornerstone, explaining both His horizontal work (destroying hostility between people) and vertical work (providing access to the Father). This foundation enables healthy apostolic-prophetic relationships.",
        concepts: "Key concepts include: cornerstone architecture principles, Christ's horizontal reconciliation work, His vertical access-granting work, and how this creates the foundation for ministry unity rather than competition.",
        application: "Evaluate whether Christ is truly functioning as the cornerstone in your ministry relationships, check for 'dividing walls of hostility' that need His reconciling work, and ensure your efforts promote unity."
      }
    };

    const chapterResponses = responses[chapter as keyof typeof responses] || responses[1];
    
    if (question.toLowerCase().includes('summary') || question.toLowerCase().includes('summarize')) {
      return chapterResponses.summary;
    } else if (question.toLowerCase().includes('concept') || question.toLowerCase().includes('key')) {
      return chapterResponses.concepts;
    } else if (question.toLowerCase().includes('apply') || question.toLowerCase().includes('practice')) {
      return chapterResponses.application;
    } else {
      return `Great question! Based on Chapter ${chapter}, ${chapterResponses.summary} Would you like me to elaborate on any specific aspect or suggest some practice steps?`;
    }
  };

  const handleQuizSubmit = () => {
    if (!currentChapterData?.quiz) return;
    
    const score = quizAnswers.reduce((acc, answer, idx) => {
      return acc + (answer === currentChapterData.quiz!.questions[idx].correct ? 1 : 0);
    }, 0);
    
    const percentage = Math.round((score / currentChapterData.quiz.questions.length) * 100);
    
    setProgress(prev => ({
      ...prev,
      quizScores: { ...prev.quizScores, [currentChapter]: percentage }
    }));
    
    setQuizSubmitted(true);
    console.log('Analytics: quiz_completed', { chapter: currentChapter, score: percentage });
  };

  const addHighlight = (text: string) => {
    const highlight = {
      chapterId: currentChapter,
      text,
      timestamp: new Date()
    };
    setProgress(prev => ({
      ...prev,
      highlights: [...prev.highlights, highlight]
    }));
    console.log('Analytics: highlight_created', { chapter: currentChapter });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white border-r transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">APEST WebBook</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Overall Progress</span>
            <span className="text-sm font-medium">{Math.round(overallProgress)}%</span>
          </div>
          <Progress value={overallProgress} className="mb-2" />
          <p className="text-xs text-gray-500">
            {progress.completedChapters.length} of {totalChapters} chapters completed
          </p>
        </div>

        {/* Chapter Navigation */}
        <div className="p-4">
          <h3 className="font-medium mb-3">Chapters</h3>
          <div className="space-y-2">
            {Array.from({ length: totalChapters }, (_, i) => i + 1).map(chapterNum => {
              const isCompleted = progress.completedChapters.includes(chapterNum);
              const isCurrent = chapterNum === currentChapter;
              const chapterData = sampleChapters.find(ch => ch.id === chapterNum);
              
              return (
                <Button
                  key={chapterNum}
                  variant={isCurrent ? "default" : "ghost"}
                  className={`w-full justify-start text-left p-2 h-auto ${
                    isCompleted ? 'bg-green-50 hover:bg-green-100' : ''
                  }`}
                  onClick={() => {
                    setCurrentChapter(chapterNum);
                    setSidebarOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isCurrent 
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-3 h-3" /> : chapterNum}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">
                        {chapterData?.title || `Chapter ${chapterNum}`}
                      </div>
                      {progress.quizScores[chapterNum] && (
                        <div className="text-xs text-green-600">
                          Quiz: {progress.quizScores[chapterNum]}%
                        </div>
                      )}
                    </div>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-lg font-semibold">
                  Chapter {currentChapter}: {currentChapterData?.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Progress: {Math.round((currentChapter / totalChapters) * 100)}%</span>
                  {currentChapterData?.audioUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      Audio
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAskTimOpen(!askTimOpen)}
              >
                <Brain className="w-4 h-4 mr-2" />
                Ask Tim
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Reading Area */}
          <div className="flex-1 overflow-auto">
            <div className="max-w-4xl mx-auto p-8">
              {/* Chapter Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <div dangerouslySetInnerHTML={{ 
                  __html: currentChapterData?.content?.replace(/\n/g, '<br>') || 'Chapter content not available yet.'
                }} />
              </div>

              {/* Chapter Quiz */}
              {currentChapterData?.quiz && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Chapter {currentChapter} Quiz
                    </CardTitle>
                    <CardDescription>
                      Test your understanding of the key concepts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!showQuiz ? (
                      <Button onClick={() => setShowQuiz(true)}>
                        Take Quiz
                      </Button>
                    ) : (
                      <div className="space-y-6">
                        {currentChapterData.quiz.questions.map((q, qIdx) => (
                          <div key={qIdx}>
                            <h4 className="font-medium mb-3">
                              {qIdx + 1}. {q.question}
                            </h4>
                            <div className="space-y-2">
                              {q.options.map((option, oIdx) => (
                                <label key={oIdx} className="flex items-center gap-3 cursor-pointer">
                                  <input
                                    type="radio"
                                    name={`question-${qIdx}`}
                                    value={oIdx}
                                    onChange={() => {
                                      const newAnswers = [...quizAnswers];
                                      newAnswers[qIdx] = oIdx;
                                      setQuizAnswers(newAnswers);
                                    }}
                                    disabled={quizSubmitted}
                                  />
                                  <span className={`${
                                    quizSubmitted 
                                      ? oIdx === q.correct 
                                        ? 'text-green-600 font-medium'
                                        : quizAnswers[qIdx] === oIdx && oIdx !== q.correct
                                          ? 'text-red-600'
                                          : ''
                                      : ''
                                  }`}>
                                    {option}
                                  </span>
                                </label>
                              ))}
                            </div>
                            {quizSubmitted && (
                              <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-800">
                                  <strong>Explanation:</strong> {q.explanation}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                        
                        {!quizSubmitted ? (
                          <Button 
                            onClick={handleQuizSubmit}
                            disabled={quizAnswers.length !== currentChapterData.quiz.questions.length}
                          >
                            Submit Quiz
                          </Button>
                        ) : (
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <h4 className="font-semibold text-green-800">
                              Quiz Complete! Score: {progress.quizScores[currentChapter]}%
                            </h4>
                            <p className="text-sm text-green-600 mt-1">
                              Great job! Ready for the next chapter?
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-8 border-t">
                <Button
                  variant="outline"
                  onClick={() => currentChapter > 1 && setCurrentChapter(currentChapter - 1)}
                  disabled={currentChapter <= 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <Badge variant="outline">
                  Chapter {currentChapter} of {totalChapters}
                </Badge>

                <Button
                  onClick={() => {
                    if (currentChapter < totalChapters) {
                      setCurrentChapter(currentChapter + 1);
                    }
                    // Mark current chapter as completed
                    if (!progress.completedChapters.includes(currentChapter)) {
                      setProgress(prev => ({
                        ...prev,
                        completedChapters: [...prev.completedChapters, currentChapter]
                      }));
                    }
                  }}
                  disabled={currentChapter >= totalChapters}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Ask Tim AI Sidebar */}
          {askTimOpen && (
            <div className="w-80 bg-white border-l flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-600" />
                  Ask Tim
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setAskTimOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-auto p-4 space-y-4">
                {askTimMessages.map(message => (
                  <div key={message.id} className={`${
                    message.type === 'user' ? 'ml-4' : 'mr-4'
                  }`}>
                    <div className={`p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-blue-500 text-white ml-auto' 
                        : 'bg-gray-100'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      {message.context?.citations && (
                        <div className="text-xs opacity-75 mt-2">
                          Sources: {message.context.citations.join(', ')}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={askTimInput}
                    onChange={(e) => setAskTimInput(e.target.value)}
                    placeholder="Ask about this chapter..."
                    onKeyPress={(e) => e.key === 'Enter' && handleAskTim(askTimInput)}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleAskTim(askTimInput)}
                    size="sm"
                    disabled={!askTimInput.trim()}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex gap-1 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAskTim('Summarize this chapter')}
                  >
                    Summarize
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAskTim('What are the key concepts?')}
                  >
                    Key Ideas
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAskTim('How can I apply this?')}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
