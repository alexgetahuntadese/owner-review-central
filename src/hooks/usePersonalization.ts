
import { useState, useEffect, useCallback } from 'react';
import { UserProfile, PersonalizationSettings } from '@/types/personalization';

const defaultProfile: UserProfile = {
  id: 'user-1',
  name: 'Student',
  avatar: {
    style: 'geometric',
    colors: ['#3B82F6', '#8B5CF6'],
    accessories: ['glasses']
  },
  preferences: {
    theme: 'auto',
    colorScheme: 'blue',
    animations: 'full',
    soundEffects: true
  },
  learningStyle: {
    type: 'casual',
    preferredDifficulty: 'medium',
    sessionLength: 'medium'
  },
  stats: {
    totalQuizzes: 0,
    averageScore: 0,
    streakDays: 0,
    favoriteSubjects: [],
    bestTimeOfDay: 'afternoon',
    completionRate: 0
  },
  mood: {
    current: 'curious',
    history: []
  },
  dailyPatterns: {
    activeHours: [14, 15, 16, 19, 20],
    sessionFrequency: 3,
    preferredBreakDuration: 5
  }
};

const defaultSettings: PersonalizationSettings = {
  adaptiveThemes: true,
  behaviorTracking: true,
  moodDetection: true,
  personalizedRecommendations: true,
  accessibilityMode: false
};

export const usePersonalization = () => {
  console.log('usePersonalization hook called');
  
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [settings, setSettings] = useState<PersonalizationSettings>(defaultSettings);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    console.log('Updating profile:', updates);
    setProfile(prev => ({ ...prev, ...updates }));
  }, []);

  const trackBehavior = useCallback((action: string, context: any) => {
    if (!settings.behaviorTracking) return;
    
    console.log('Behavior tracked:', { action, context, timestamp: new Date() });
    
    setProfile(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        totalQuizzes: action === 'quiz_completed' ? prev.stats.totalQuizzes + 1 : prev.stats.totalQuizzes
      }
    }));
  }, [settings.behaviorTracking]);

  const updateMood = useCallback((mood: UserProfile['mood']['current'], context: string) => {
    if (!settings.moodDetection) return;
    
    setProfile(prev => ({
      ...prev,
      mood: {
        current: mood,
        history: [
          ...prev.mood.history.slice(-9),
          { mood, timestamp: new Date(), context }
        ]
      }
    }));
  }, [settings.moodDetection]);

  const getPersonalizedTheme = useCallback(() => {
    const hour = new Date().getHours();
    const { mood, preferences } = profile;
    
    if (!settings.adaptiveThemes) {
      return preferences.colorScheme;
    }

    if (mood.current === 'stressed' && preferences.colorScheme !== 'green') {
      return 'green';
    }
    
    if (hour >= 18 || hour <= 6) {
      return preferences.theme === 'auto' ? 'dark' : preferences.theme;
    }
    
    return preferences.colorScheme;
  }, [profile, settings.adaptiveThemes]);

  console.log('usePersonalization returning:', { profile, settings });

  return {
    profile,
    settings,
    updateProfile,
    updateSettings: setSettings,
    trackBehavior,
    updateMood,
    getPersonalizedTheme
  };
};
