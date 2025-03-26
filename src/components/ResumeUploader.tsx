
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { Upload, File, X, Check } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ResumeUploaderProps {
  onUpload: (file: File) => void;
}

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onUpload }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      
      // Check if file is PDF or DOCX
      if (
        file.type === 'application/pdf' || 
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        setIsUploading(true);
        
        // Simulate upload process
        setTimeout(() => {
          setUploadedFile(file);
          setIsUploading(false);
          onUpload(file);
          toast.success('Resume uploaded successfully');
        }, 1500);
      } else {
        toast.error('Please upload a PDF or DOCX file');
      }
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    multiple: false
  });

  const removeFile = () => {
    setUploadedFile(null);
    toast.info('Resume removed');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {!uploadedFile ? (
        <div
          {...getRootProps()}
          className={cn(
            "glass-card rounded-xl p-8 text-center cursor-pointer transition-all duration-300",
            "border-2 border-dashed hover:border-primary/50",
            isDragActive ? "border-primary bg-primary/5" : "border-border"
          )}
        >
          <input {...getInputProps()} />
          
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: isDragActive ? 1.05 : 1 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-1">Upload your resume</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Drag and drop your resume file here, or click to browse. We support PDF and DOCX formats.
              </p>
            </div>
            
            <Button variant="outline" size="sm" className="mt-2">
              Select File
            </Button>
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-xl p-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <File className="h-6 w-6 text-primary" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-medium truncate max-w-xs">
                {uploadedFile.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {(uploadedFile.size / 1024).toFixed(1)} KB · {uploadedFile.type === 'application/pdf' ? 'PDF' : 'DOCX'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={removeFile}
              className="h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
              <Check className="h-3 w-3 mr-1" />
              <span>Uploaded</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ResumeUploader;
