import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './VideoUpload.css';

interface VideoUploadProps {
  onUploadComplete: (url: string) => void;
  onUploadError: (error: string) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onUploadComplete, onUploadError }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    setFileName(file.name);
    
    // Validate file type
    if (!file.type.startsWith('video/')) {
      onUploadError('Please upload a valid video file');
      return;
    }
    
    // Validate file size (max 500MB)
    if (file.size > 500 * 1024 * 1024) {
      onUploadError('File size exceeds 500MB limit');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 10;
        });
      }, 500);

      // In a real application, you would upload the file to a server here
      // For now, we'll simulate a successful upload after 3 seconds
      setTimeout(() => {
        clearInterval(interval);
        setUploadProgress(100);
        
        // Simulate a video URL (in a real app, this would come from your server)
        const mockVideoUrl = `https://example.com/videos/${file.name.replace(/\s+/g, '-').toLowerCase()}`;
        
        setTimeout(() => {
          setUploading(false);
          setUploadProgress(0);
          onUploadComplete(mockVideoUrl);
        }, 500);
      }, 3000);
    } catch (error) {
      setUploading(false);
      setUploadProgress(0);
      onUploadError('Upload failed. Please try again.');
    }
  }, [onUploadComplete, onUploadError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.webm']
    },
    maxFiles: 1,
    disabled: uploading
  });

  return (
    <div className="video-upload">
      <div 
        {...getRootProps()} 
        className={`dropzone ${isDragActive ? 'active' : ''} ${uploading ? 'uploading' : ''}`}
      >
        <input {...getInputProps()} />
        
        {uploading ? (
          <div className="upload-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="progress-text">
              {fileName && `Uploading ${fileName}... ${uploadProgress}%`}
            </p>
          </div>
        ) : isDragActive ? (
          <p>Drop the video file here</p>
        ) : (
          <div className="upload-prompt">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="upload-icon"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <p>Drag & drop a video file here, or click to select</p>
            <p className="upload-hint">Supported formats: MP4, MOV, AVI, WebM (max 500MB)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoUpload; 