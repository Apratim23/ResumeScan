
import React, { useState } from 'react';
import Header from '@/components/Header';
import ResumeUploader from '@/components/ResumeUploader';
import JobDescriptionInput from '@/components/JobDescriptionInput';
import AnalysisResults, { AnalysisResultData } from '@/components/AnalysisResults';
import Loader from '@/components/Loader';

const Dashboard = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResultData | null>(null);

  const handleResumeUpload = (file: File) => {
    setResumeFile(file);
    // Reset analysis if a new resume is uploaded
    if (analysisResult) {
      setAnalysisResult(null);
    }
  };

  const handleJobDescriptionSubmit = (description: string) => {
    setJobDescription(description);
    if (resumeFile) {
      performAnalysis();
    }
  };

  const performAnalysis = () => {
    // Start loading
    setAnalyzing(true);
    setAnalysisResult(null);

    // Simulate AI analysis with a timeout
    setTimeout(() => {
      // Mock result data
      const mockResult: AnalysisResultData = {
        score: Math.floor(Math.random() * 41) + 60, // Random score between 60-100
        matchedSkills: [
          'JavaScript',
          'React',
          'TypeScript',
          'UI/UX Design',
          'Responsive Design',
          'Frontend Development'
        ],
        missedSkills: [
          'Node.js',
          'GraphQL',
          'AWS',
          'Docker'
        ],
        suggestions: [
          'Add specific metrics to showcase the impact of your frontend development work, such as performance improvements or user engagement increases.',
          'Highlight any experience with backend technologies like Node.js, even if it was a small part of your role or a personal project.',
          "Include examples of how you've implemented responsive design principles in your projects.",
          'Add more details about your experience with state management in React applications.'
        ]
      };

      // Set the result and stop loading
      setAnalysisResult(mockResult);
      setAnalyzing(false);
    }, 3000);
  };

  const handleNewAnalysis = () => {
    setAnalysisResult(null);
    setJobDescription('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <div className="page-container">
          {!analysisResult ? (
            <div className="max-w-3xl mx-auto py-8">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-3">Resume Analysis Dashboard</h1>
                <p className="text-muted-foreground">
                  Upload your resume and paste a job description to get AI-powered insights
                </p>
              </div>
              
              {analyzing ? (
                <Loader />
              ) : (
                <div className="space-y-8">
                  <ResumeUploader onUpload={handleResumeUpload} />
                  
                  {resumeFile && (
                    <JobDescriptionInput onSubmit={handleJobDescriptionSubmit} />
                  )}
                </div>
              )}
            </div>
          ) : (
            <AnalysisResults result={analysisResult} onNewAnalysis={handleNewAnalysis} />
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            ResumeScan © {new Date().getFullYear()} - AI-powered resume optimization
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
