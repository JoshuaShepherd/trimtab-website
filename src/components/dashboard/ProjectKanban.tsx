"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, MoreHorizontal } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'Ideas' | 'Active' | 'On Hold' | 'Done';
  tags: string[];
  priority: 'Low' | 'Medium' | 'High';
  dueDate?: Date;
}

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'APEST Digital Course Platform',
    description: 'Comprehensive online learning platform for APEST methodology',
    status: 'Active',
    tags: ['APEST', 'education', 'digital'],
    priority: 'High'
  },
  {
    id: '2',
    title: 'Missional Leadership Assessment Tool',
    description: 'Interactive assessment for identifying missional leadership gifts',
    status: 'Ideas',
    tags: ['assessment', 'leadership'],
    priority: 'Medium'
  },
  {
    id: '3',
    title: 'TrimTab Website Redesign',
    description: 'Modern, responsive redesign of the TrimTab website',
    status: 'On Hold',
    tags: ['website', 'design'],
    priority: 'Low'
  },
  {
    id: '4',
    title: 'Permanent Revolution Workbook',
    description: 'Companion workbook for The Permanent Revolution book',
    status: 'Done',
    tags: ['book', 'workbook'],
    priority: 'High'
  }
];

export default function ProjectKanban() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    status: 'Ideas' as Project['status'],
    tags: [] as string[],
    priority: 'Medium' as Project['priority']
  });

  const columns: { status: Project['status']; color: string; count: number }[] = [
    { status: 'Ideas', color: 'bg-blue-50 border-blue-200', count: projects.filter(p => p.status === 'Ideas').length },
    { status: 'Active', color: 'bg-green-50 border-green-200', count: projects.filter(p => p.status === 'Active').length },
    { status: 'On Hold', color: 'bg-yellow-50 border-yellow-200', count: projects.filter(p => p.status === 'On Hold').length },
    { status: 'Done', color: 'bg-gray-50 border-gray-200', count: projects.filter(p => p.status === 'Done').length }
  ];

  const addProject = () => {
    if (newProject.title.trim()) {
      const project: Project = {
        id: Date.now().toString(),
        ...newProject,
        tags: newProject.tags.filter(tag => tag.trim() !== '')
      };
      setProjects([...projects, project]);
      setNewProject({
        title: '',
        description: '',
        status: 'Ideas',
        tags: [],
        priority: 'Medium'
      });
    }
  };

  const moveProject = (projectId: string, newStatus: Project['status']) => {
    setProjects(projects.map(p => 
      p.id === projectId ? { ...p, status: newStatus } : p
    ));
  };

  const getPriorityColor = (priority: Project['priority']) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Project Board</h2>
          <p className="text-gray-600">Manage your initiatives and ideas</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Project title"
                value={newProject.title}
                onChange={(e) => setNewProject({...newProject, title: e.target.value})}
              />
              <Textarea
                placeholder="Project description"
                value={newProject.description}
                onChange={(e) => setNewProject({...newProject, description: e.target.value})}
              />
              <div className="flex gap-2">
                <select
                  value={newProject.status}
                  onChange={(e) => setNewProject({...newProject, status: e.target.value as Project['status']})}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Ideas">Ideas</option>
                  <option value="Active">Active</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Done">Done</option>
                </select>
                <select
                  value={newProject.priority}
                  onChange={(e) => setNewProject({...newProject, priority: e.target.value as Project['priority']})}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Low">Low Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="High">High Priority</option>
                </select>
              </div>
              <Button onClick={addProject} className="w-full">
                Create Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {columns.map((column) => (
          <div key={column.status} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">{column.status}</h3>
              <Badge variant="secondary">{column.count}</Badge>
            </div>
            
            <div className="space-y-3">
              {projects
                .filter(project => project.status === column.status)
                .map((project) => (
                  <Card key={project.id} className={`${column.color} trimtab-card-hover cursor-pointer`}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-sm line-clamp-2">{project.title}</h4>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Badge className={getPriorityColor(project.priority)} variant="outline">
                            {project.priority}
                          </Badge>
                        </div>
                        
                        <div className="flex gap-1 flex-wrap">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-1 pt-2">
                          {column.status !== 'Ideas' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs h-6"
                              onClick={() => moveProject(project.id, 'Ideas')}
                            >
                              Ideas
                            </Button>
                          )}
                          {column.status !== 'Active' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs h-6"
                              onClick={() => moveProject(project.id, 'Active')}
                            >
                              Active
                            </Button>
                          )}
                          {column.status !== 'On Hold' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs h-6"
                              onClick={() => moveProject(project.id, 'On Hold')}
                            >
                              Hold
                            </Button>
                          )}
                          {column.status !== 'Done' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs h-6"
                              onClick={() => moveProject(project.id, 'Done')}
                            >
                              Done
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
