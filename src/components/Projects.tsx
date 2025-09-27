import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Mic, FileText, BookOpen, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ResumeBuilder Website',
      description: 'A comprehensive web application that helps users create professional resumes with customizable templates, real-time preview, and PDF export functionality.',
      icon: FileText,
      technologies: ['React', 'JavaScript', 'CSS3', 'PDF.js'],
      features: ['Template Selection', 'Real-time Preview', 'PDF Export', 'Responsive Design'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Commit-Keeper',
      description: 'An innovative commitment tracking application that helps users stay accountable to their goals with voice reminder features and progress monitoring.',
      icon: Mic,
      technologies: ['React', 'Web Audio API', 'LocalStorage', 'TailwindCSS'],
      features: ['Voice Reminders', 'Goal Tracking', 'Progress Analytics', 'Notification System'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Blog Website',
      description: 'A modern, responsive blog platform with clean typography, category filtering, and an intuitive content management interface.',
      icon: BookOpen,
      technologies: ['React', 'JavaScript', 'CSS Grid', 'Responsive Design'],
      features: ['Category Filtering', 'Search Functionality', 'Clean Typography', 'Mobile Optimized'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Midas System',
      description: 'A sophisticated business management system designed for tracking performance metrics, analytics, and operational efficiency.',
      icon: TrendingUp,
      technologies: ['React', 'JavaScript', 'Data Visualization', 'UI/UX'],
      features: ['Analytics Dashboard', 'Performance Metrics', 'Data Export', 'User Management'],
      color: 'from-orange-500 to-orange-600'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's a showcase of some projects I've worked on, demonstrating my skills in frontend development, 
            UI/UX design, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-hover shadow-custom overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex items-center space-x-2 bg-primary hover:bg-primary-dark"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button 
            className="btn-hero px-8 py-3 font-semibold"
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;