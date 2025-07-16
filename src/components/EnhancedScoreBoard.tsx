
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, RotateCcw, Home, Star, BookOpen, Award, Target, Zap, TrendingUp, Medal } from 'lucide-react';
import { useAdaptiveTheme } from '@/components/AdaptiveThemeProvider';
import { usePersonalization } from '@/hooks/usePersonalization';
import PersonalizedAvatar from '@/components/PersonalizedAvatar';
import PersonalizedProgressRing from '@/components/PersonalizedProgressRing';

interface EnhancedScoreBoardProps {
  score: number;
  total: number;
  subject: string;
  chapterName?: string;
  difficulty: string;
  onReturnHome: () => void;
  onRetakeQuiz: () => void;
  onBackToChapters: () => void;
}

const EnhancedScoreBoard: React.FC<EnhancedScoreBoardProps> = ({
  score,
  total,
  subject,
  chapterName,
  difficulty,
  onReturnHome,
  onRetakeQuiz,
  onBackToChapters
}) => {
  const { themeClasses } = useAdaptiveTheme();
  const { profile, updateProfile, trackBehavior } = usePersonalization();
  const [showConfetti, setShowConfetti] = useState(false);
  const percentage = Math.round((score / total) * 100);

  useEffect(() => {
    // Track quiz completion
    trackBehavior('quiz_completed', { 
      score, 
      total, 
      percentage, 
      subject, 
      difficulty,
      chapterName 
    });

    // Show confetti for good scores
    if (percentage >= 80) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }

    // Update user stats
    updateProfile({
      stats: {
        ...profile.stats,
        totalQuizzes: profile.stats.totalQuizzes + 1,
        averageScore: Math.round((profile.stats.averageScore * profile.stats.totalQuizzes + percentage) / (profile.stats.totalQuizzes + 1))
      }
    });
  }, []);

  const getPerformanceData = (percentage: number) => {
    if (percentage >= 90) return { 
      grade: 'A+', 
      color: 'text-emerald-600', 
      bgColor: 'bg-emerald-50 border-emerald-200',
      emoji: '🏆', 
      title: 'Outstanding!',
      message: "Perfect performance! You've truly mastered this chapter! 🎉",
      achievement: 'Master Scholar'
    };
    if (percentage >= 80) return { 
      grade: 'A', 
      color: 'text-green-600', 
      bgColor: 'bg-green-50 border-green-200',
      emoji: '🌟', 
      title: 'Excellent!',
      message: "Great work! Your dedication is paying off! 👏",
      achievement: 'Knowledge Champion'
    };
    if (percentage >= 70) return { 
      grade: 'B+', 
      color: 'text-blue-600', 
      bgColor: 'bg-blue-50 border-blue-200',
      emoji: '👍', 
      title: 'Good Job!',
      message: "Solid performance! A little more practice and you'll excel! 💪",
      achievement: 'Rising Star'
    };
    if (percentage >= 60) return { 
      grade: 'B', 
      color: 'text-blue-500', 
      bgColor: 'bg-blue-50 border-blue-200',
      emoji: '👌', 
      title: 'Not Bad!',
      message: "You're getting there! Focus on reviewing the missed topics. 📚",
      achievement: 'Steady Learner'
    };
    if (percentage >= 50) return { 
      grade: 'C', 
      color: 'text-yellow-600', 
      bgColor: 'bg-yellow-50 border-yellow-200',
      emoji: '📚', 
      title: 'Keep Going!',
      message: "You're on the right track! More practice will help. 🎯",
      achievement: 'Determined Student'
    };
    return { 
      grade: 'F', 
      color: 'text-red-500', 
      bgColor: 'bg-red-50 border-red-200',
      emoji: '📖', 
      title: 'Don\'t Give Up!',
      message: "Every expert was once a beginner. Review and try again! 💪",
      achievement: 'Future Champion'
    };
  };

  const { grade, color, bgColor, emoji, title, message, achievement } = getPerformanceData(percentage);

  const getStars = (percentage: number) => Math.ceil(percentage / 20);

  const getDifficultyBonus = (diff: string) => {
    switch (diff) {
      case 'hard': return { points: 50, label: 'Hard Mode Bonus!' };
      case 'medium': return { points: 25, label: 'Medium Challenge!' };
      case 'easy': return { points: 10, label: 'Good Start!' };
      default: return { points: 0, label: '' };
    }
  };

  const difficultyBonus = getDifficultyBonus(difficulty);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeClasses.secondary} flex items-center justify-center p-4 relative`}>
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {['🎉', '🎊', '⭐', '🏆', '💫'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
          <CardHeader className={`text-center space-y-6 bg-gradient-to-r ${themeClasses.primary} text-white rounded-t-lg`}>
            <div className="flex justify-center">
              <div className="relative">
                <PersonalizedAvatar profile={profile} size="xl" showMood />
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-yellow-500 text-white animate-pulse">
                    {achievement}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-6xl mb-4 animate-bounce">{emoji}</div>
              <CardTitle className="text-3xl font-bold mb-2">{title}</CardTitle>
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </Badge>
                {chapterName && (
                  <div className="flex items-center justify-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-medium">{chapterName}</span>
                  </div>
                )}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8 p-8">
            {/* Score Display */}
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <PersonalizedProgressRing 
                  progress={percentage} 
                  size="lg" 
                  mood={profile.mood.current}
                />
                <div className="space-y-2">
                  <div className="text-6xl font-bold">
                    <span className={color}>{score}</span>
                    <span className="text-gray-400">/{total}</span>
                  </div>
                  <div className={`text-4xl font-bold ${color}`}>
                    {percentage}%
                  </div>
                  <div className={`text-2xl font-semibold ${color}`}>
                    Grade: {grade}
                  </div>
                </div>
              </div>

              {/* Stars Rating */}
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-8 h-8 transition-all duration-300 ${
                      star <= getStars(percentage)
                        ? 'text-yellow-400 fill-current animate-pulse'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <Award className="w-4 h-4 mr-1" />
                  Correct
                </div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="text-2xl font-bold text-red-500">{total - score}</div>
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <Target className="w-4 h-4 mr-1" />
                  Incorrect
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-500">{total}</div>
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  Total
                </div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-500">+{difficultyBonus.points}</div>
                <div className="text-sm text-gray-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 mr-1" />
                  Bonus
                </div>
              </div>
            </div>

            {/* Message */}
            <div className={`${bgColor} rounded-lg p-6 border-2`}>
              <div className="flex items-start space-x-3">
                <Medal className={`w-6 h-6 ${color} mt-1`} />
                <div>
                  <p className={`text-lg font-medium ${color} mb-2`}>{title}</p>
                  <p className="text-gray-700 leading-relaxed">{message}</p>
                  {difficultyBonus.label && (
                    <Badge className="mt-2 bg-purple-500 text-white">
                      {difficultyBonus.label}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onRetakeQuiz}
                variant="outline"
                className="flex items-center space-x-2 hover-scale"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </Button>
              
              <Button 
                onClick={onBackToChapters}
                variant="outline"
                className="flex items-center space-x-2 hover-scale"
              >
                <BookOpen className="w-4 h-4" />
                <span>Other Chapters</span>
              </Button>
              
              <Button 
                onClick={onReturnHome}
                className={`flex items-center space-x-2 hover-scale bg-gradient-to-r ${themeClasses.primary} text-white`}
              >
                <Home className="w-4 h-4" />
                <span>Continue Learning</span>
              </Button>
            </div>

            {/* Progress Encouragement */}
            <div className="text-center pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Keep up the momentum!</span>
              </div>
              <p className="text-sm text-gray-600">
                Complete all chapters to master {subject}! 🌟
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedScoreBoard;
