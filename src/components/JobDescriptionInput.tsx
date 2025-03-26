
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface JobDescriptionInputProps {
  onSubmit: (description: string) => void;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (description.trim().length > 0) {
      onSubmit(description);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="w-full"
    >
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-medium">Job Description</h3>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="job-description">Paste the job description here</Label>
            <div 
              className={`relative transition-all duration-300 ${
                isFocused ? 'ring-2 ring-primary/20 border-primary' : ''
              }`}
            >
              <Textarea
                id="job-description"
                placeholder="Paste the job description you want to apply for..."
                className="min-h-[140px] resize-none input-focus-ring"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isFocused ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-0.5 bg-primary origin-left"
                style={{ width: '100%' }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Our AI will analyze this job description to determine how well your resume matches the requirements
            </p>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={handleSubmit}
              disabled={description.trim().length === 0}
            >
              Analyze Match
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDescriptionInput;
