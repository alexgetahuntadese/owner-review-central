
import React from 'react';
import { useAdaptiveTheme } from '@/components/AdaptiveThemeProvider';

interface PersonalizedProgressRingProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  showPercentage?: boolean;
  animated?: boolean;
  mood?: string;
}

const PersonalizedProgressRing: React.FC<PersonalizedProgressRingProps> = ({
  progress,
  size = 'md',
  showPercentage = true,
  animated = true,
  mood = 'neutral'
}) => {
  const { themeClasses } = useAdaptiveTheme();
  
  const sizes = {
    sm: { width: 40, stroke: 3 },
    md: { width: 80, stroke: 4 },
    lg: { width: 120, stroke: 6 }
  };
  
  const { width, stroke } = sizes[size];
  const radius = (width - stroke * 2) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const getMoodAnimation = () => {
    if (!animated) return '';
    
    switch (mood) {
      case 'playful':
        return 'animate-bounce';
      case 'confident':
        return 'animate-pulse';
      case 'focused':
        return '';
      default:
        return 'animate-pulse';
    }
  };

  return (
    <div className={`relative ${getMoodAnimation()}`}>
      <svg
        width={width}
        height={width}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={width / 2}
          cy={width / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          className="text-gray-200"
        />
        
        {/* Progress circle */}
        <circle
          cx={width / 2}
          cy={width / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className={themeClasses.text} />
            <stop offset="100%" className={themeClasses.accent} />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Percentage text */}
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold ${themeClasses.text} ${size === 'lg' ? 'text-xl' : size === 'md' ? 'text-lg' : 'text-sm'}`}>
            {Math.round(progress)}%
          </span>
        </div>
      )}
    </div>
  );
};

export default PersonalizedProgressRing;
