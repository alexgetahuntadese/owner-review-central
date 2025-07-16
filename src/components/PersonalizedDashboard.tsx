
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { usePersonalization } from '@/hooks/usePersonalization';
import { useAdaptiveTheme } from '@/components/AdaptiveThemeProvider';
import PersonalizedAvatar from '@/components/PersonalizedAvatar';
import PersonalizedProgressRing from '@/components/PersonalizedProgressRing';
import MoodSelector from '@/components/MoodSelector';
import { TrendingUp, Target, Clock, Star, Settings } from 'lucide-react';

const PersonalizedDashboard: React.FC = () => {
  const { profile, updateMood, trackBehavior } = usePersonalization();
  const { themeClasses } = useAdaptiveTheme();
  const [showMoodSelector, setShowMoodSelector] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    const name = profile.name;
    
    if (hour < 12) return `Good morning, ${name}!`;
    if (hour < 17) return `Good afternoon, ${name}!`;
    return `Good evening, ${name}!`;
  };

  const getPersonalizedRecommendation = () => {
    const { learningStyle, stats, mood } = profile;
    
    if (mood.current === 'stressed') {
      return "Try some easy questions to build confidence 🌱";
    }
    
    if (learningStyle.type === 'competitive' && stats.averageScore > 80) {
      return "Challenge yourself with hard questions! 🏆";
    }
    
    if (stats.streakDays > 0) {
      return `Keep your ${stats.streakDays}-day streak going! 🔥`;
    }
    
    return "Ready for your next learning adventure? 📚";
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header with Avatar and Greeting */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <PersonalizedAvatar 
            profile={profile}
            size="lg"
            showMood={true}
            onClick={() => setShowMoodSelector(true)}
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{getGreeting()}</h1>
            <p className="text-gray-600">{getPersonalizedRecommendation()}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="flex flex-col items-center space-y-2">
              <PersonalizedProgressRing 
                progress={(profile.stats.averageScore / 100) * 100}
                size="sm"
                mood={profile.mood.current}
              />
              <div>
                <div className="font-bold text-lg">{profile.stats.averageScore}%</div>
                <div className="text-xs text-gray-500">Average Score</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <div className="flex flex-col items-center space-y-2">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${themeClasses.primary} flex items-center justify-center`}>
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">{profile.stats.streakDays}</div>
                <div className="text-xs text-gray-500">Day Streak</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <div className="flex flex-col items-center space-y-2">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${themeClasses.primary} flex items-center justify-center`}>
                <Target className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">{profile.stats.totalQuizzes}</div>
                <div className="text-xs text-gray-500">Quizzes Taken</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-4">
            <div className="flex flex-col items-center space-y-2">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${themeClasses.primary} flex items-center justify-center`}>
                <Star className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">{Math.round(profile.stats.completionRate)}%</div>
                <div className="text-xs text-gray-500">Completion</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Style Badge */}
      <div className="flex items-center justify-center space-x-2">
        <Badge className={`bg-gradient-to-r ${themeClasses.primary} text-white`}>
          {profile.learningStyle.type.charAt(0).toUpperCase() + profile.learningStyle.type.slice(1)} Learner
        </Badge>
        <Badge variant="outline">
          Best at {profile.stats.bestTimeOfDay}
        </Badge>
      </div>

      {/* Mood Selector Modal */}
      <MoodSelector
        currentMood={profile.mood.current}
        onMoodChange={updateMood}
        isVisible={showMoodSelector}
        onClose={() => setShowMoodSelector(false)}
      />
    </div>
  );
};

export default PersonalizedDashboard;
