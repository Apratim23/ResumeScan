
import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = 'Analyzing your resume...' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center py-16"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 mb-6 relative"
      >
        <div className="absolute inset-0 rounded-full border-t-4 border-primary opacity-30" />
        <div className="absolute inset-0 rounded-full border-t-4 border-r-4 border-primary" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-center max-w-sm"
      >
        <h3 className="text-lg font-medium mb-2">{text}</h3>
        <p className="text-sm text-muted-foreground">
          Our AI is reviewing your resume against the job description to find the best matches
        </p>
      </motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 5 }}
        className="h-1 bg-primary/20 rounded-full mt-8 max-w-sm w-full overflow-hidden"
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          className="h-full bg-primary rounded-full w-1/3"
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
