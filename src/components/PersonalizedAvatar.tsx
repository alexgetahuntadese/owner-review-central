
import React from 'react';
import { UserProfile } from '@/types/personalization';

interface PersonalizedAvatarProps {
  profile: UserProfile;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showMood?: boolean;
  onClick?: () => void;
}

const PersonalizedAvatar: React.FC<PersonalizedAvatarProps> = ({
  profile,
  size = 'md',
  showMood = false,
  onClick
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const getMoodEmoji = (mood: string) => {
    const moodEmojis = {
      focused: '🎯',
      playful: '😄',
      stressed: '😰',
      confident: '😎',
      curious: '🤔'
    };
    return moodEmojis[mood as keyof typeof moodEmojis] || '😊';
  };

  const avatarStyle = profile.avatar.style;
  const colors = profile.avatar.colors;
  const gradient = `linear-gradient(135deg, ${colors[0]}, ${colors[1] || colors[0]})`;

  return (
    <div className="relative">
      <div
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg`}
        style={{ background: gradient }}
        onClick={onClick}
      >
        {/* Avatar content based on style */}
        {avatarStyle === 'geometric' && (
          <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-white/20 rounded-full"></div>
          </div>
        )}
        
        {avatarStyle === 'minimal' && (
          <div className="text-white font-bold text-lg">
            {profile.name.charAt(0).toUpperCase()}
          </div>
        )}
        
        {avatarStyle === 'cartoon' && (
          <div className="text-2xl">👤</div>
        )}
      </div>
      
      {/* Mood indicator */}
      {showMood && (
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-xs">{getMoodEmoji(profile.mood.current)}</span>
        </div>
      )}
    </div>
  );
};

export default PersonalizedAvatar;
