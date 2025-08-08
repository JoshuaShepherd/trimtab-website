"use client";

import { useState } from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw,
  Target,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  MessageCircle,
  Heart,
  Compass,
  Lightbulb
} from "lucide-react"

// All 80 quiz questions organized by category
const quizQuestions = [
  "I remember names or at least where I first met someone.",
  "I have expressed my feelings about God as pictures or analogies.",
  "My ability to present scripture clearly and accurately has been commented on.",
  "I can be counted on to contribute original ideas.",
  "I find myself talking about my faith to the people I meet.",
  "I get frustrated when I feel I'm not experiencing 'new' things as a Christian.",
  "When I communicate Biblical truths to others, I see resulting changes in knowledge, attitudes, values or conduct.",
  "I share what knowledge I have with others.",
  "I have an urge to share thoughts with people that I felt when I prayed, and I have been told they meant something or were relevant to the person's current situation.",
  "I get upset at other people's difficulties and problems even if I haven't experienced them myself.",
  "I have a strong sense of what God wants to say to people in response to a particular situation.",
  "I enjoy studying the Scriptures and find that I get fresh insights that people find interesting and helpful.",
  "When reading the Bible, I am more able to grasp the wider picture or message than the specific details.",
  "I like to share what I believe in.",
  "I have been successful in developing Christian disciplines in others.",
  "I'll try things out if it will encourage others to do the same.",
  "I am quick to help when help is needed and often do things which I see need to be done without even being asked.",
  "I have been able to spot a \"person of peace\" who is ready to receive a word from God and have seen a positive response.",
  "I have a clear vision, and others have said that they feel confident to go along with me.",
  "I try explaining things in different ways if people are finding a concept difficult to grasp or understand.",
  "I think before I speak.",
  "I really fear that people that I know will not be saved.",
  "I like to be clear and decisive when speaking about what I believe God has said to me.",
  "I am by no means an expert on Scripture, but I can grasp the point of a passage quite quickly.",
  "I get frustrated and even depressed at the lack of faith or understanding of others around me.",
  "People tell me that the things I say often help them to try new things for God.",
  "I am interested in living and working overseas or among people from a different culture.",
  "I am good at listening and taking in what people say.",
  "I have created situations so that non-Christians are prompted to ask spiritual questions.",
  "I have helped fellow believers by guiding them to relevant portions of the Bible.",
  "I get excited when I discover new understanding, insights and applications of God's word.",
  "I have reminded people of the foundations of their faith.",
  "Despite not enjoying the nitty-gritty details of leadership, I still often end up leading things.",
  "People have told me that I have helped them be restored to the Christian community.",
  "I feel that I know exactly what God wants to do in ministry at a specific point in time.",
  "I dig out information and passages to explain a concept.",
  "I mix easily with a wide variety of people without having to try to be one of them.",
  "I have a deep concern to encourage people towards spiritual growth and progress.",
  "I try to think of different ways of expressing the truth of the gospel.",
  "Friends ask me to help clarify a situation or scripture.",
  "I am quite persuasive when encouraging people to examine their spiritual motives.",
  "I empathize with those who are hurting or broken and can support them through their pain to wholeness.",
  "When in a group, I am the one others often look to for vision and direction.",
  "I enjoy being with non-believers because of my desire to win them to Christ.",
  "I will see a job through to the end so that no-one has to pick up the pieces after me.",
  "My prayers surprise me with their clarity and unexpected direction.",
  "People comment that they remember what I tell them about God.",
  "I expect opportunities for witnessing to arise rather than react in surprise when they occur.",
  "I desire the gift of healing in greater measure (That the Lord would heal others through me).",
  "The things I say in a spiritual context make people feel uncomfortable.",
  "I have enjoyed relating to a certain group of people over a period of time, sharing personally in their successes and their failures.",
  "People have told me that I have helped them learn how to do a new task or practice in a helpful way.",
  "I have led someone to a decision for salvation through faith in Christ.",
  "God has enabled me to reveal specific things which have happened or meant something at a later date.",
  "There have been times when I felt sure I knew God's specific will for the future growth of his work, even when others have not been so sure.",
  "People have told me that I have communicated timely words or pictures which must have come directly from the Lord.",
  "People call on me to help those who are less fortunate.",
  "I get great satisfaction from studying the Bible and sharing my insights with others.",
  "Others have suggested that I am a person of unusual vision.",
  "Non-Christians have noted that they feel comfortable when they are around me, and that I have a positive effect on them towards developing a faith in Christ.",
  "I am willing to challenge or confront people I know in order to help them mature.",
  "I regularly need to get space alone or long periods of time out to reflect, pray, and think.",
  "I have just suddenly known something about someone.",
  "I enjoy taking notes when someone is speaking and pay close attention to the details of what they are saying.",
  "I am faithful in providing support, care, and nurture for others over long periods of time, even when others have stopped.",
  "I enjoy mentoring individuals.",
  "I enjoy relating stories and sharing my experiences.",
  "I enjoy coming up with new and original ideas, dreaming big and thinking about visions for the future.",
  "I find non-Christians ask me questions about my faith in Christ, and my church involvement.",
  "I can accurately assess a person based on first impressions and know instinctively when something is not quite right.",
  "I like to provide a safe and comfortable environment where people feel they are welcome, that they belong, are listened to and cared for.",
  "I would like to start a church or a new ministry in an area that is not being focused on at present.",
  "I have a heart to share my faith and to pray for those in my work and neighborhood who do not attend church.",
  "When I hear about situations of need I feel burdened to pray.",
  "I like to help churches, organizations, groups and leaders become more efficient and often find myself thinking about how things function.",
  "I enjoy spending time designing ways to instruct people about a topic or task in a step by step fashion.",
  "I look for opportunities to socialize and build relationships with non-Christians.",
  "People come to me to ask me my opinions on particular parts of the Bible or to answer their queries.",
  "I find that people trust me and come to me regularly, wanting to chat and looking for my advice, prayers, and help.",
  "I can clarify goals, develop strategies, and use resources effectively to accomplish tasks."
];

// Question mapping to APEST categories (A=0, P=1, E=2, S=3, T=4)
const questionMapping = [
  3, 4, 4, 0, 2, 1, 4, 4, 1, 3, 1, 4, 2, 2, 3, 0, 3, 2, 0, 4,
  4, 2, 1, 2, 1, 2, 0, 3, 2, 4, 4, 4, 0, 3, 1, 4, 2, 3, 2, 4,
  1, 3, 0, 2, 0, 1, 4, 2, 1, 1, 3, 4, 2, 1, 0, 1, 3, 4, 0, 2,
  1, 1, 1, 4, 3, 4, 2, 0, 2, 1, 3, 0, 2, 3, 0, 4, 2, 4, 3, 0
];

interface QuizState {
  currentQuestion: number;
  answers: number[];
  isStarted: boolean;
  isCompleted: boolean;
  scores: {
    apostle: number;
    prophet: number;
    evangelist: number;
    shepherd: number;
    teacher: number;
  };
}

export default function ApestQuiz() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: new Array(80).fill(-1),
    isStarted: false,
    isCompleted: false,
    scores: {
      apostle: 0,
      prophet: 0,
      evangelist: 0,
      shepherd: 0,
      teacher: 0
    }
  });

  const startQuiz = () => {
    setQuizState({
      ...quizState,
      isStarted: true
    });
  };

  const answerQuestion = (value: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = value;
    
    setQuizState({
      ...quizState,
      answers: newAnswers
    });
  };

  const nextQuestion = () => {
    if (quizState.currentQuestion < 79) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1
      });
    } else {
      calculateResults();
    }
  };

  const previousQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion - 1
      });
    }
  };

  const calculateResults = () => {
    const scores = {
      apostle: 0,
      prophet: 0,
      evangelist: 0,
      shepherd: 0,
      teacher: 0
    };

    quizState.answers.forEach((answer, index) => {
      if (answer >= 0) {
        const category = questionMapping[index];
        const points = answer === 0 ? 3 : answer === 1 ? 2 : 1; // Often=3, Sometimes=2, Rarely=1
        
        switch (category) {
          case 0: scores.apostle += points; break;
          case 1: scores.prophet += points; break;
          case 2: scores.evangelist += points; break;
          case 3: scores.shepherd += points; break;
          case 4: scores.teacher += points; break;
        }
      }
    });

    setQuizState({
      ...quizState,
      scores,
      isCompleted: true
    });
  };

  const restartQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: new Array(80).fill(-1),
      isStarted: false,
      isCompleted: false,
      scores: {
        apostle: 0,
        prophet: 0,
        evangelist: 0,
        shepherd: 0,
        teacher: 0
      }
    });
  };

  const getSortedResults = () => {
    const results = [
      { name: 'Apostle', score: quizState.scores.apostle, icon: Compass, color: 'text-red-600' },
      { name: 'Prophet', score: quizState.scores.prophet, icon: Lightbulb, color: 'text-purple-600' },
      { name: 'Evangelist', score: quizState.scores.evangelist, icon: MessageCircle, color: 'text-green-600' },
      { name: 'Shepherd', score: quizState.scores.shepherd, icon: Heart, color: 'text-blue-600' },
      { name: 'Teacher', score: quizState.scores.teacher, icon: BookOpen, color: 'text-yellow-600' }
    ].sort((a, b) => b.score - a.score);
    
    return results;
  };

  const progress = ((quizState.currentQuestion + 1) / 80) * 100;
  const currentAnswer = quizState.answers[quizState.currentQuestion];
  const canProceed = currentAnswer >= 0;

  if (!quizState.isStarted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              APEST Discovery
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              APEST Quiz
            </h1>
            <p className="text-2xl font-semibold text-blue-600 mb-6">
              Discover Your Gifts: Take the Comprehensive APEST Quiz Today!
            </p>
            <p className="text-xl text-gray-600">
              Welcome to Your Journey of Self-Discovery and Personal Development
            </p>
          </header>

          <div className="mb-12">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Start Your Transformative Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-700">
                  Start your transformative journey with our APEST Quiz. Rooted in the principles of 
                  Ephesians 4:7-16, this quiz will help you discover your unique role in the body of 
                  Christ as an <strong>Apostle</strong>, <strong>Prophet</strong>, <strong>Evangelist</strong>, 
                  <strong>Shepherd</strong>, or <strong>Teacher</strong> (APEST).
                </p>
                
                <p className="text-gray-700">
                  <strong>Why is this important?</strong> Because the fivefold giftings of APEST flow directly 
                  out of the life and ministry of Christ. They each play a part in representing the fullness 
                  of who Christ is, and what he cares about. When you discover your APEST gifting, you not 
                  only discover the part you play in the body of Christ, you also discover the part other 
                  people can play in your own growth and development.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What You Can Expect from This 80-Question Journey:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-center">In-depth Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm text-center">
                    Each question is crafted to peel back the layers of your fivefold gifting, 
                    revealing the unique contours of your Christ-given potential.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-center">Clarity of Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm text-center">
                    By identifying your primary and secondary APEST giftings, you're uncovering 
                    your specific calling within the church and beyond.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <ArrowRight className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-center">Roadmap for Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm text-center">
                    Understanding your APEST profile is the first step. The real journey begins 
                    as you start applying these insights to your life and ministry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-xl text-center">Instructions for Taking the APEST Quiz:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    Set aside uninterrupted time to ensure thoughtful and honest responses.
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    Answer each question based on your natural preferences and not how you think others expect you to respond.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    There are no right or wrong answers, only insights into your unique gifting and makeup.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8">
              Embrace this opportunity to discover the gifts that Christ has given you, and step 
              confidently into your role as a representative of Christ's life-giving ministry. 
              Your journey of self-discovery and personal growth begins now!
            </p>
            
            <Button 
              size="lg" 
              onClick={startQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl px-8 py-4 h-auto"
            >
              Ready to Discover Your APEST Profile? Start the Quiz!
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (quizState.isCompleted) {
    const results = getSortedResults();
    const primary = results[0];
    const secondary = results[1];

    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Your APEST Quiz Results
            </h1>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Scores:</h2>
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div key={result.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-600">{index + 1}.</span>
                      <result.icon className={`w-5 h-5 ${result.color}`} />
                      <span className={`font-semibold ${index === 0 ? 'text-lg text-blue-600' : 'text-gray-900'}`}>
                        {result.name}
                      </span>
                    </div>
                    <span className={`font-bold ${index === 0 ? 'text-xl text-blue-600' : 'text-gray-900'}`}>
                      {result.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Your Primary Gift: {primary.name}</h3>
              <div className="flex items-center gap-3 mb-4">
                <primary.icon className={`w-8 h-8 ${primary.color}`} />
                <span className="text-lg font-semibold text-gray-900">Score: {primary.score}</span>
              </div>
              <p className="text-gray-700 mb-4">
                Congratulations! Your highest score indicates that your primary APEST gift is {primary.name.toLowerCase()}. 
                This means you have natural strengths and tendencies in this area of ministry.
              </p>
              <p className="text-sm text-gray-600">
                Your secondary gift is {secondary.name} with a score of {secondary.score}, which also plays 
                an important role in your ministry approach.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href={`/${primary.name.toLowerCase()}-description`}>
                  Learn About Your {primary.name} Gift
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={restartQuiz}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline">
              Question {quizState.currentQuestion + 1} of 80
            </Badge>
            <Badge variant="secondary">
              {Math.round(progress)}% Complete
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">
              {quizQuestions[quizState.currentQuestion]}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Choose how often this statement is true for you:
            </p>
            
            <div className="space-y-4">
              {[
                { value: 0, label: 'Often', description: 'This is frequently true for me' },
                { value: 1, label: 'Sometimes', description: 'This is occasionally true for me' },
                { value: 2, label: 'Rarely', description: 'This is seldom true for me' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => answerQuestion(option.value)}
                  className={`w-full p-4 text-left border rounded-lg transition-colors ${
                    currentAnswer === option.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      currentAnswer === option.value
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {currentAnswer === option.value && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={previousQuestion}
            disabled={quizState.currentQuestion === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <Button 
            onClick={nextQuestion}
            disabled={!canProceed}
          >
            {quizState.currentQuestion === 79 ? 'Complete Quiz' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
