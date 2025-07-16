
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, CheckCircle, XCircle, BookOpen, Zap, Target } from 'lucide-react';
import { useAdaptiveTheme } from '@/components/AdaptiveThemeProvider';
import { usePersonalization } from '@/hooks/usePersonalization';
import PersonalizedProgressRing from '@/components/PersonalizedProgressRing';

interface EnhancedQuizInterfaceProps {
  subject: string;
  chapterId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: any[];
  onComplete: (score: number, total: number, chapterName: string, difficulty: string) => void;
  onBack: () => void;
  chapterName: string;
}

const EnhancedQuizInterface: React.FC<EnhancedQuizInterfaceProps> = ({
  subject,
  chapterId,
  difficulty,
  questions,
  onComplete,
  onBack,
  chapterName
}) => {
  const { themeClasses } = useAdaptiveTheme();
  const { profile, trackBehavior } = usePersonalization();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90);
  const [streak, setStreak] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    if (timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleFinishQuiz();
    }
  }, [timeLeft, showFeedback]);

  const handleAnswerSelect = (answer: string) => {
    if (!showFeedback) {
      setSelectedAnswer(answer);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [currentQuestionIndex]: selectedAnswer });
      setShowFeedback(true);
      
      const isCorrect = selectedAnswer === currentQuestion.correct;
      if (isCorrect) {
        setStreak(streak + 1);
      } else {
        setStreak(0);
      }
      
      trackBehavior('question_answered', { 
        correct: isCorrect, 
        subject, 
        difficulty,
        timeSpent: 90 - timeLeft 
      });
    }
  };

  const handleContinue = () => {
    setShowFeedback(false);
    setSelectedAnswer('');
    setTimeLeft(90);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        score++;
      }
    });
    onComplete(score, questions.length, chapterName, difficulty);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyIcon = (diff: string) => {
    switch (diff) {
      case 'easy': return <Target className="w-4 h-4" />;
      case 'medium': return <Zap className="w-4 h-4" />;
      case 'hard': return <BookOpen className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-pulse">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeClasses.secondary} p-4`}>
      <div className="container mx-auto max-w-4xl">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between mb-6 animate-fade-in">
          <Button 
            variant="outline" 
            onClick={onBack} 
            className="flex items-center space-x-2 hover-scale"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>{chapterName}</span>
            </Badge>
            <Badge className={`${themeClasses.accent} text-white flex items-center space-x-1`}>
              {getDifficultyIcon(difficulty)}
              <span>{difficulty.toUpperCase()}</span>
            </Badge>
            {streak > 1 && (
              <Badge className="bg-orange-500 text-white animate-pulse">
                🔥 {streak} streak!
              </Badge>
            )}
          </div>
        </div>

        {/* Enhanced Progress */}
        <div className="mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <PersonalizedProgressRing 
                progress={progress} 
                size="sm" 
                mood={profile.mood.current}
              />
              <div>
                <p className="font-medium">Question {currentQuestionIndex + 1} of {questions.length}</p>
                <p className="text-sm text-gray-600">{Math.round(progress)}% Complete</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className={`font-mono ${timeLeft < 30 ? 'text-red-500 animate-pulse' : 'text-gray-600'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Enhanced Question Card */}
        <Card className="mb-6 shadow-xl border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
          <CardHeader className={`bg-gradient-to-r ${themeClasses.primary} text-white rounded-t-lg`}>
            <CardTitle className="text-xl flex items-center justify-between">
              <span>Question {currentQuestionIndex + 1}</span>
              <Badge variant="secondary" className="bg-white/20 text-white">
                {currentQuestion.difficulty}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg mb-6 leading-relaxed font-medium">
              {currentQuestion.question}
            </p>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option: string, index: number) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQuestion.correct;
                const isWrong = showFeedback && isSelected && !isCorrect;
                const shouldShowCorrect = showFeedback && isCorrect;
                
                return (
                  <Button
                    key={index}
                    variant={isSelected ? "default" : "outline"}
                    className={`w-full text-left justify-start p-4 h-auto transition-all duration-300 hover-scale ${
                      shouldShowCorrect ? 'bg-green-500 hover:bg-green-600 text-white animate-pulse' :
                      isWrong ? 'bg-red-500 hover:bg-red-600 text-white' : 
                      isSelected ? `${themeClasses.accent} text-white` : ''
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showFeedback}
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        shouldShowCorrect || isWrong ? 'bg-white/20' : 'bg-gray-100'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="flex-1 text-left">{option}</span>
                      {showFeedback && isCorrect && <CheckCircle className="w-5 h-5 animate-bounce" />}
                      {showFeedback && isWrong && <XCircle className="w-5 h-5 animate-pulse" />}
                    </div>
                  </Button>
                );
              })}
            </div>
            
            {showFeedback && currentQuestion.explanation && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 animate-fade-in">
                <div className="flex items-start space-x-2">
                  <BookOpen className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-800 mb-1">Explanation</p>
                    <p className="text-sm text-blue-700">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Enhanced Navigation */}
        <div className="flex justify-between animate-fade-in">
          <div className="text-sm text-gray-600">
            Current Score: {Object.values(answers).filter((answer, index) => answer === questions[index]?.correct).length} / {currentQuestionIndex + (showFeedback ? 1 : 0)}
          </div>
          {!showFeedback ? (
            <Button 
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className={`px-8 hover-scale bg-gradient-to-r ${themeClasses.primary} text-white`}
            >
              Submit Answer
            </Button>
          ) : (
            <Button 
              onClick={handleContinue}
              className={`px-8 hover-scale bg-gradient-to-r ${themeClasses.primary} text-white`}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Continue'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedQuizInterface;
