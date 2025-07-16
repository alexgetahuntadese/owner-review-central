
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, Zap, Flame } from 'lucide-react';

interface DifficultySelectorProps {
  subject: string;
  subjectName: string;
  chapterId: string;
  chapterName: string;
  onBack: () => void;
  onDifficultySelect: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

const DifficultySelector = ({ subject, subjectName, chapterId, chapterName, onBack, onDifficultySelect }: DifficultySelectorProps) => {
  const difficulties = [
    {
      level: 'easy' as const,
      title: 'Easy',
      description: 'Basic concepts and fundamental questions',
      icon: Target,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      level: 'medium' as const,
      title: 'Medium',
      description: 'Intermediate level with analytical thinking',
      icon: Zap,
      color: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600'
    },
    {
      level: 'hard' as const,
      title: 'Hard',
      description: 'Advanced questions requiring deep understanding',
      icon: Flame,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" onClick={onBack} className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Chapters</span>
          </Button>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{subjectName}</Badge>
            <Badge variant="outline">{chapterName}</Badge>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Difficulty Level
          </h1>
          <p className="text-lg text-gray-600">
            Select the difficulty level that matches your current understanding
          </p>
        </div>

        {/* Difficulty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {difficulties.map((diff) => {
            const IconComponent = diff.icon;
            return (
              <Card 
                key={diff.level} 
                className="hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:scale-105"
                onClick={() => onDifficultySelect(diff.level)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${diff.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{diff.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{diff.description}</p>
                  <Button 
                    className={`w-full ${diff.color} ${diff.hoverColor} text-white`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onDifficultySelect(diff.level);
                    }}
                  >
                    Start {diff.title} Quiz
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Questions are randomized for each quiz attempt. Choose your difficulty level wisely!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DifficultySelector;
