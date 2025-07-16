import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, CheckCircle, XCircle, BookOpen } from 'lucide-react';
import { getQuestionsForQuiz, getChaptersBySubject } from '@/data/questions';
import { useTranslation } from '@/contexts/TranslationContext';
import LanguageSelector from '@/components/LanguageSelector';

interface QuizInterfaceProps {
  subject: string;
  chapterId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  onComplete: (score: number, total: number, chapterName: string, difficulty: string) => void;
  onBack: () => void;
}

const QuizInterface = ({ subject, chapterId, difficulty, onComplete, onBack }: QuizInterfaceProps) => {
  const { t } = useTranslation();
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90);
  const [chapterName, setChapterName] = useState('');

  useEffect(() => {
    // Get questions using the existing function
    const quizQuestions = getQuestionsForQuiz(subject, chapterId, difficulty, 10);
    
    const chapters = getChaptersBySubject(subject);
    const chapter = chapters.find(ch => ch.id === chapterId);
    
    setQuestions(quizQuestions);
    setChapterName(chapter?.name || '');
    setTimeLeft(quizQuestions.length * 90);
    
    console.log(`Generated ${quizQuestions.length} questions for ${subject}/${chapterId}/${difficulty}`);
  }, [subject, chapterId, difficulty]);

  useEffect(() => {
    if (timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleFinishQuiz();
    }
  }, [timeLeft, showFeedback]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [currentQuestionIndex]: selectedAnswer });
      setShowFeedback(true);
    }
  };

  const handleContinue = () => {
    setShowFeedback(false);
    setSelectedAnswer('');
    
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

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>{t('loadingQuestions')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={onBack} className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('back')}</span>
          </Button>
          
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Badge variant="secondary" className="flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>{chapterName}</span>
            </Badge>
            <Badge className={`${getDifficultyColor(difficulty)} text-white`}>
              {t(difficulty).toUpperCase()}
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeLeft)}</span>
            </Badge>
            <Badge variant="outline">
              {currentQuestionIndex + 1} of {questions.length}
            </Badge>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-gray-600 mt-2">
            {t('progress')}: {Math.round(progress)}% {t('complete')}
          </p>
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">
              {t('question')} {currentQuestionIndex + 1}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6 leading-relaxed">{currentQuestion.question}</p>
            
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
                    className={`w-full text-left justify-start p-4 h-auto ${
                      shouldShowCorrect ? 'bg-green-500 hover:bg-green-600 text-white' :
                      isWrong ? 'bg-red-500 hover:bg-red-600 text-white' : ''
                    }`}
                    onClick={() => !showFeedback && handleAnswerSelect(option)}
                    disabled={showFeedback}
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <span className="font-medium">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span className="flex-1">{option}</span>
                      {showFeedback && isCorrect && <CheckCircle className="w-5 h-5" />}
                      {showFeedback && isWrong && <XCircle className="w-5 h-5" />}
                    </div>
                  </Button>
                );
              })}
            </div>
            
            {showFeedback && currentQuestion.explanation && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800">
                  <strong>{t('explanation')}:</strong> {currentQuestion.explanation}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <div></div>
          {!showFeedback ? (
            <Button 
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className="px-8"
            >
              {t('submitAnswer')}
            </Button>
          ) : (
            <Button 
              onClick={handleContinue}
              className="px-8"
            >
              {currentQuestionIndex === questions.length - 1 ? t('finishQuiz') : t('continue')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
