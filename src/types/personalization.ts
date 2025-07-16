
export interface UserProfile {
  id: string;
  name: string;
  avatar: {
    style: 'geometric' | 'realistic' | 'cartoon' | 'minimal';
    colors: string[];
    accessories: string[];
  };
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    colorScheme: 'blue' | 'green' | 'purple' | 'orange' | 'pink';
    animations: 'full' | 'reduced' | 'none';
    soundEffects: boolean;
  };
  learningStyle: {
    type: 'casual' | 'competitive' | 'academic';
    preferredDifficulty: 'easy' | 'medium' | 'hard';
    sessionLength: 'short' | 'medium' | 'long';
  };
  stats: {
    totalQuizzes: number;
    averageScore: number;
    streakDays: number;
    favoriteSubjects: string[];
    bestTimeOfDay: 'morning' | 'afternoon' | 'evening';
    completionRate: number;
  };
  mood: {
    current: 'focused' | 'playful' | 'stressed' | 'confident' | 'curious';
    history: Array<{ mood: string; timestamp: Date; context: string }>;
  };
  dailyPatterns: {
    activeHours: number[];
    sessionFrequency: number;
    preferredBreakDuration: number;
  };
}

export interface PersonalizationSettings {
  adaptiveThemes: boolean;
  behaviorTracking: boolean;
  moodDetection: boolean;
  personalizedRecommendations: boolean;
  accessibilityMode: boolean;
}
