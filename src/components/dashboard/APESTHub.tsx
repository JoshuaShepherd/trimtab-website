"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  FileText, 
  Target, 
  Lightbulb,
  Download,
  ExternalLink,
  Play,
  Clock,
  Star
} from "lucide-react";

interface APESTResource {
  id: string;
  title: string;
  description: string;
  type: 'assessment' | 'framework' | 'training' | 'article' | 'tool';
  category: 'Apostolic' | 'Prophetic' | 'Evangelistic' | 'Shepherding' | 'Teaching' | 'General';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  url?: string;
  isNew?: boolean;
  isFavorite?: boolean;
}

const apestResources: APESTResource[] = [
  {
    id: '1',
    title: 'Complete APEST Assessment Tool',
    description: 'Comprehensive 50-question assessment to identify primary and secondary APEST gifts',
    type: 'assessment',
    category: 'General',
    difficulty: 'Beginner',
    estimatedTime: '15 min',
    isNew: true
  },
  {
    id: '2',
    title: 'Apostolic Leadership Framework',
    description: 'Deep dive into apostolic gifting and its application in modern ministry',
    type: 'framework',
    category: 'Apostolic',
    difficulty: 'Intermediate',
    estimatedTime: '45 min'
  },
  {
    id: '3',
    title: 'Prophetic Voice Development Workshop',
    description: 'Training materials for developing and exercising prophetic gifts',
    type: 'training',
    category: 'Prophetic',
    difficulty: 'Advanced',
    estimatedTime: '2 hours',
    isFavorite: true
  },
  {
    id: '4',
    title: 'Evangelistic Strategies in Digital Age',
    description: 'Modern approaches to evangelism using digital platforms and tools',
    type: 'article',
    category: 'Evangelistic',
    difficulty: 'Intermediate',
    estimatedTime: '20 min',
    isNew: true
  },
  {
    id: '5',
    title: 'Shepherding Care Model',
    description: 'Framework for pastoral care and shepherding in contemporary contexts',
    type: 'framework',
    category: 'Shepherding',
    difficulty: 'Intermediate',
    estimatedTime: '30 min'
  },
  {
    id: '6',
    title: 'Teaching Gift Development Guide',
    description: 'Practical guide for developing teaching abilities and creating effective curricula',
    type: 'tool',
    category: 'Teaching',
    difficulty: 'Beginner',
    estimatedTime: '25 min',
    isFavorite: true
  }
];

export default function APESTHub() {
  const getTypeIcon = (type: APESTResource['type']) => {
    switch (type) {
      case 'assessment': return Target;
      case 'framework': return BookOpen;
      case 'training': return Play;
      case 'article': return FileText;
      case 'tool': return Lightbulb;
    }
  };

  const getCategoryColor = (category: APESTResource['category']) => {
    switch (category) {
      case 'Apostolic': return 'bg-red-100 text-red-800';
      case 'Prophetic': return 'bg-purple-100 text-purple-800';
      case 'Evangelistic': return 'bg-blue-100 text-blue-800';
      case 'Shepherding': return 'bg-green-100 text-green-800';
      case 'Teaching': return 'bg-yellow-100 text-yellow-800';
      case 'General': return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: APESTResource['difficulty']) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">APEST Resource Hub</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive resources for understanding, assessing, and developing APEST gifts in yourself and others.
          Build stronger, more balanced ministry teams through the five-fold ministry framework.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { label: 'Assessments', count: apestResources.filter(r => r.type === 'assessment').length, color: 'text-blue-600' },
          { label: 'Frameworks', count: apestResources.filter(r => r.type === 'framework').length, color: 'text-green-600' },
          { label: 'Training', count: apestResources.filter(r => r.type === 'training').length, color: 'text-purple-600' },
          { label: 'Articles', count: apestResources.filter(r => r.type === 'article').length, color: 'text-orange-600' },
          { label: 'Tools', count: apestResources.filter(r => r.type === 'tool').length, color: 'text-indigo-600' }
        ].map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 text-center">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-600" />
            Featured Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {apestResources.filter(r => r.isFavorite).map((resource) => {
              const IconComponent = getTypeIcon(resource.type);
              return (
                <Card key={resource.id} className="trimtab-card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{resource.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                        <div className="flex gap-2 mb-3">
                          <Badge className={getCategoryColor(resource.category)}>
                            {resource.category}
                          </Badge>
                          <Badge className={getDifficultyColor(resource.difficulty)}>
                            {resource.difficulty}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock className="h-3 w-3" />
                            {resource.estimatedTime}
                          </div>
                          <Button size="sm" className="flow-arrow">
                            Access
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* All Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            All APEST Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {apestResources.map((resource) => {
              const IconComponent = getTypeIcon(resource.type);
              return (
                <Card key={resource.id} className="trimtab-card-hover">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <IconComponent className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="flex gap-1">
                        {resource.isNew && (
                          <Badge variant="secondary" className="text-xs">New</Badge>
                        )}
                        {resource.isFavorite && (
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        )}
                      </div>
                    </div>
                    
                    <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      {resource.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Badge className={getCategoryColor(resource.category)} variant="outline">
                          {resource.category}
                        </Badge>
                        <Badge className={getDifficultyColor(resource.difficulty)} variant="outline">
                          {resource.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          {resource.estimatedTime}
                        </div>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* APEST Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-600" />
            APEST Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                gift: 'Apostolic',
                description: 'Pioneer new territories, plant churches, establish foundations',
                color: 'bg-red-50 border-red-200 text-red-700'
              },
              {
                gift: 'Prophetic',
                description: 'Speak God\'s word, provide vision, call to righteousness',
                color: 'bg-purple-50 border-purple-200 text-purple-700'
              },
              {
                gift: 'Evangelistic',
                description: 'Share the gospel, win souls, make disciples',
                color: 'bg-blue-50 border-blue-200 text-blue-700'
              },
              {
                gift: 'Shepherding',
                description: 'Care for people, provide pastoral guidance, nurture growth',
                color: 'bg-green-50 border-green-200 text-green-700'
              },
              {
                gift: 'Teaching',
                description: 'Explain truth, develop understanding, impart knowledge',
                color: 'bg-yellow-50 border-yellow-200 text-yellow-700'
              }
            ].map((gift, index) => (
              <Card key={index} className={`${gift.color} border-2`}>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold mb-2">{gift.gift}</h4>
                  <p className="text-xs">{gift.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
