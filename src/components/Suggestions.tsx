
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CopyCheck, LightbulbIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

interface SuggestionsProps {
  suggestions: string[];
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success('Suggestion copied to clipboard');
    
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <LightbulbIcon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-medium">AI Improvement Suggestions</h3>
      </div>
      
      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            className="bg-secondary/50 rounded-lg p-4 flex gap-4"
          >
            <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-medium">{index + 1}</span>
            </div>
            
            <div className="flex-1">
              <p className="text-sm text-foreground/90 leading-relaxed">{suggestion}</p>
              
              <div className="flex justify-end mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs h-7 px-2.5"
                  onClick={() => handleCopy(suggestion, index)}
                >
                  {copiedIndex === index ? (
                    <>
                      <CopyCheck className="h-3.5 w-3.5 mr-1.5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <CopyCheck className="h-3.5 w-3.5 mr-1.5" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
