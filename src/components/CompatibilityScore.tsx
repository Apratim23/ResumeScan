
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CompatibilityScoreProps {
  score: number;
}

const CompatibilityScore: React.FC<CompatibilityScoreProps> = ({ score }) => {
  // Determine color based on score
  const getScoreColor = () => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBackgroundColor = () => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getScoreMessage = () => {
    if (score >= 80) return 'Excellent Match';
    if (score >= 60) return 'Good Match';
    if (score >= 40) return 'Average Match';
    return 'Poor Match';
  };

  return (
    <div className="glass-card rounded-xl p-6 h-full">
      <h3 className="text-lg font-medium mb-6">Compatibility Score</h3>
      
      <div className="flex flex-col items-center justify-center py-4">
        <div className="relative mb-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.2 }}
            className="w-40 h-40 rounded-full border-[12px] border-secondary flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className={cn("text-4xl font-bold", getScoreColor())}
            >
              {score}%
            </motion.div>
          </motion.div>
          
          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              strokeDasharray={`${(score * 2.76).toFixed(2)} 276`}
              strokeDashoffset="69"
              strokeLinecap="round"
              className={getScoreBackgroundColor()}
              transform="rotate(-90 50 50)"
            />
          </motion.svg>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-center space-y-2"
        >
          <div className={cn("text-lg font-medium", getScoreColor())}>
            {getScoreMessage()}
          </div>
          <p className="text-sm text-muted-foreground">
            {score >= 70 
              ? "Your resume is well-aligned with this job description." 
              : "Consider adding the missing skills to improve your match."}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CompatibilityScore;
