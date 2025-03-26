
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, FileText, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CompatibilityScore from './CompatibilityScore';
import Suggestions from './Suggestions';

export interface AnalysisResultData {
  score: number;
  matchedSkills: string[];
  missedSkills: string[];
  suggestions: string[];
}

interface AnalysisResultsProps {
  result: AnalysisResultData;
  onNewAnalysis: () => void;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ result, onNewAnalysis }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full space-y-8 py-4"
    >
      <div className="text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-2xl font-semibold mb-3"
        >
          Resume Analysis Complete
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-muted-foreground"
        >
          Here's how your resume compares to the job description
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <CompatibilityScore score={result.score} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="glass-card rounded-xl p-6 h-full">
            <h3 className="text-lg font-medium mb-4">Skills Analysis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-green-500">
                  <CheckCircle className="h-4 w-4" />
                  <span>Matched Skills</span>
                </div>
                
                <ul className="space-y-2">
                  {result.matchedSkills.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                      className="text-sm bg-green-500/10 text-green-700 px-3 py-1.5 rounded-md flex items-center"
                    >
                      <CheckCircle className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-red-500">
                  <XCircle className="h-4 w-4" />
                  <span>Missing Skills</span>
                </div>
                
                <ul className="space-y-2">
                  {result.missedSkills.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                      className="text-sm bg-red-500/10 text-red-700 px-3 py-1.5 rounded-md flex items-center"
                    >
                      <XCircle className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button variant="outline" size="sm" onClick={onNewAnalysis} className="text-xs">
                <FileText className="h-3.5 w-3.5 mr-1.5" />
                New Analysis
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Suggestions suggestions={result.suggestions} />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="flex justify-center mt-8"
      >
        <Button size="lg" onClick={onNewAnalysis}>
          Start New Analysis
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default AnalysisResults;
