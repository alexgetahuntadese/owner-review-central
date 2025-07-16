
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, RotateCcw, Home, Star, BookOpen } from 'lucide-react';

interface ScoreBoardProps {
  score: number;
  total: number;
  subject: string;
  chapterName?: string;
  onReturnHome: () => void;
  onRetakeQuiz: () => void;
  onBackToChapters: () => void;
}

const ScoreBoard = ({ score, total, subject, chapterName, onReturnHome, onRetakeQuiz, onBackToChapters }: ScoreBoardProps) => {
  const percentage = Math.round((score / total) * 100);
  
  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', emoji: '🏆' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-500', emoji: '🌟' };
    if (percentage >= 70) return { grade: 'B+', color: 'text-blue-500', emoji: '👍' };
    if (percentage >= 60) return { grade: 'B', color: 'text-blue-400', emoji: '👌' };
    if (percentage >= 50) return { grade: 'C', color: 'text-yellow-500', emoji: '📚' };
    return { grade: 'F', color: 'text-red-500', emoji: '📖' };
  };

  const { grade, color, emoji } = getGrade(percentage);

  const getMessage = (percentage: number) => {
    if (percentage >= 90) return "Outstanding performance! You've mastered this chapter! 🎉";
    if (percentage >= 80) return "Excellent work! Keep up the great study habits! 👏";
    if (percentage >= 70) return "Good job! A little more practice and you'll excel! 💪";
    if (percentage >= 60) return "Not bad! Focus on reviewing the missed topics. 📚";
    if (percentage >= 50) return "You're on the right track! More practice needed. 🎯";
    return "Don't give up! Review the material and try again. 💪";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="text-center shadow-2xl">
          <CardHeader className="space-y-4">
            <div className="text-6xl mx-auto">{emoji}</div>
            <CardTitle className="text-3xl font-bold">Chapter Complete!</CardTitle>
            <div className="space-y-2">
              <Badge variant="outline" className="mx-auto text-lg px-4 py-2">
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </Badge>
              {chapterName && (
                <div className="flex items-center justify-center space-x-2">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span className="text-blue-600 font-medium">{chapterName}</span>
                </div>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Score Display */}
            <div className="space-y-4">
              <div className="text-6xl font-bold">
                <span className={color}>{score}</span>
                <span className="text-gray-400">/{total}</span>
              </div>
              
              <div className="space-y-2">
                <div className={`text-4xl font-bold ${color}`}>
                  {percentage}%
                </div>
                <div className={`text-2xl font-semibold ${color}`}>
                  Grade: {grade}
                </div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-gray-600">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">{total - score}</div>
                <div className="text-sm text-gray-600">Incorrect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">{total}</div>
                <div className="text-sm text-gray-600">Total</div>
              </div>
            </div>

            {/* Stars Rating */}
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 ${
                    star <= Math.ceil(percentage / 20)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Message */}
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {getMessage(percentage)}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onRetakeQuiz}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Chapter</span>
              </Button>
              
              <Button 
                onClick={onBackToChapters}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Other Chapters</span>
              </Button>
              
              <Button 
                onClick={onReturnHome}
                className="flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>All Subjects</span>
              </Button>
            </div>

            {/* Encouragement */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Complete all chapters to master the subject! 🌟
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScoreBoard;
