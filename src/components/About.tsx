import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TailwindCSS'] },
    { category: 'Languages', items: ['Java', 'JavaScript', 'TypeScript'] },
    { category: 'Tools & Others', items: ['Git', 'Figma', 'Responsive Design', 'UI/UX'] },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces with attention to user experience.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and modern web standards.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using modern development workflows and tools.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer who loves creating digital experiences that are both 
            beautiful and functional. With a strong foundation in modern web technologies, I focus on 
            building responsive, accessible, and user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Skills & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={skillGroup.category} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h4 className="text-lg font-medium text-primary mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What I Bring */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">What I Bring</h3>
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <Card key={highlight.title} className="card-hover shadow-custom">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <highlight.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to bring your ideas to life? Let's collaborate and build something amazing together.
          </p>
          <div className="inline-flex items-center space-x-2 text-primary font-medium">
            <span>Scroll down to see my projects</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;