import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Download, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajpalritesh482@gmail.com',
      href: 'mailto:rajpalritesh482@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 93194 55874',
      href: 'tel:+919319455874',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View My Code',
      href: 'https://github.com',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with Me',
      href: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-700'
    },
  ];

  const handleResumeDownload = () => {
    // In a real application, this would trigger a download of the resume PDF
    alert('Resume download functionality would be implemented here!');
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your next project to life? I'd love to hear about your ideas and discuss how we can work together. 
            Feel free to reach out through any of the methods below!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.label} 
                className="card-hover shadow-custom animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <a 
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {method.label}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {method.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resume Download Section */}
          <Card className="shadow-custom-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-foreground">Resume</CardTitle>
              <CardDescription>
                Download my resume to learn more about my experience, education, and technical skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <Button 
                onClick={handleResumeDownload}
                className="btn-hero px-8 py-3 text-lg font-semibold inline-flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                PDF format • Updated recently • 2 pages
              </p>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="text-center mt-12 p-6 bg-primary/5 rounded-lg border border-primary/10">
            <div className="flex items-center justify-center space-x-2 text-primary mb-3">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Based in India</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Available for remote work and open to discussing exciting opportunities. 
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;