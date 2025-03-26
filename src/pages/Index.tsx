
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Index = () => {
  const features = [
    {
      title: 'AI Resume Analysis',
      description: 'Our AI analyzes your resume against job descriptions to identify matches and gaps.',
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: 'Skill Matching',
      description: 'See which skills from the job description are present in your resume and which are missing.',
      icon: <Check className="h-5 w-5" />
    },
    {
      title: 'Improvement Suggestions',
      description: 'Get AI-powered suggestions to improve your resume for specific job applications.',
      icon: <ArrowRight className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute -top-[40%] -right-[30%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-[40%] -left-[30%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
          </div>
          
          <div className="page-container pt-20 pb-24 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                AI-Powered Resume Screening
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Optimize Your Resume for
              <br />
              <span className="text-primary">Job Success</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mb-10"
            >
              Use AI to analyze how well your resume matches job descriptions and get personalized suggestions to improve your chances of landing interviews.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="px-8">
                <Link to="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="bg-background py-20">
          <div className="page-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <p className="text-muted-foreground text-lg">
                Our AI-powered platform helps you optimize your resume for specific job applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="page-container">
            <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Resume?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                Start analyzing your resume against job descriptions today and increase your chances of landing your dream job.
              </p>
              <Button asChild size="lg" className="px-8">
                <Link to="/dashboard">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="page-container py-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FileText className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">ResumeScan</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ResumeScan. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
