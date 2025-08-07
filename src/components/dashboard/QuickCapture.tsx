"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Tag, Zap } from "lucide-react";

interface CaptureItem {
  id: string;
  content: string;
  tags: string[];
  timestamp: Date;
  type: 'note' | 'idea' | 'prompt' | 'task';
}

export default function QuickCapture() {
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [items, setItems] = useState<CaptureItem[]>([]);

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const captureItem = (type: CaptureItem['type']) => {
    if (content.trim()) {
      const newItem: CaptureItem = {
        id: Date.now().toString(),
        content: content.trim(),
        tags: [...tags],
        timestamp: new Date(),
        type
      };
      setItems([newItem, ...items]);
      setContent("");
      setTags([]);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-600" />
            Quick Capture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Capture your thoughts, ideas, prompts, or tasks..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="resize-none"
          />
          
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                placeholder="Add tags..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTag()}
              />
            </div>
            <Button onClick={addTag} size="sm" variant="outline">
              <Tag className="h-4 w-4" />
            </Button>
          </div>

          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => removeTag(tag)}
                >
                  {tag} ×
                </Badge>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={() => captureItem('note')} className="flex-1">
              Save Note
            </Button>
            <Button onClick={() => captureItem('idea')} variant="outline" className="flex-1">
              Save Idea
            </Button>
            <Button onClick={() => captureItem('prompt')} variant="outline" className="flex-1">
              Save Prompt
            </Button>
            <Button onClick={() => captureItem('task')} variant="outline" className="flex-1">
              Save Task
            </Button>
          </div>
        </CardContent>
      </Card>

      {items.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Captures</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {items.slice(0, 5).map((item) => (
              <div key={item.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={
                    item.type === 'note' ? 'default' :
                    item.type === 'idea' ? 'secondary' :
                    item.type === 'prompt' ? 'destructive' : 'outline'
                  }>
                    {item.type}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {item.timestamp.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{item.content}</p>
                <div className="flex gap-1">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
