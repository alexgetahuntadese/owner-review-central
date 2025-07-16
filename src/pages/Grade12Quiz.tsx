
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getQuestionsForQuiz } from '@/data/questions';
import { Question } from '@/data/types';
import EnhancedQuizInterface from '@/components/EnhancedQuizInterface';
import EnhancedScoreBoard from '@/components/EnhancedScoreBoard';
import { AdaptiveThemeProvider } from '@/components/AdaptiveThemeProvider';

const Grade12Quiz = () => {
  const { subject, chapter, difficulty } = useParams<{ 
    subject: string; 
    chapter: string; 
    difficulty: 'easy' | 'medium' | 'hard' 
  }>();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState({ score: 0, total: 0, chapterName: '' });

  useEffect(() => {
    if (subject && chapter && difficulty) {
      const quizQuestions = getQuestionsForQuiz(subject, chapter, difficulty, 10);
      setQuestions(quizQuestions);
    }
  }, [subject, chapter, difficulty]);

  const handleQuizComplete = (score: number, total: number, chapterName: string, diff: string) => {
    setFinalScore({ score, total, chapterName });
    setQuizCompleted(true);
  };

  const handleRetakeQuiz = () => {
    setQuizCompleted(false);
    setFinalScore({ score: 0, total: 0, chapterName: '' });
  };

  const handleBackToChapters = () => {
    navigate(`/grade-12/${subject}`);
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  if (questions.length === 0) {
    return (
      <AdaptiveThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
          <div className="text-center animate-pulse">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Grade 12 questions...</p>
          </div>
        </div>
      </AdaptiveThemeProvider>
    );
  }

  if (quizCompleted) {
    return (
      <AdaptiveThemeProvider>
        <EnhancedScoreBoard
          score={finalScore.score}
          total={finalScore.total}
          subject={subject || 'Mathematics'}
          chapterName={finalScore.chapterName}
          difficulty={difficulty || 'medium'}
          onReturnHome={handleReturnHome}
          onRetakeQuiz={handleRetakeQuiz}
          onBackToChapters={handleBackToChapters}
        />
      </AdaptiveThemeProvider>
    );
  }

  return (
    <AdaptiveThemeProvider>
      <EnhancedQuizInterface
        subject={subject || 'Mathematics'}
        chapterId={chapter || 'unit1'}
        difficulty={difficulty || 'medium'}
        questions={questions}
        onComplete={handleQuizComplete}
        onBack={handleBackToChapters}
        chapterName={chapter?.replace(/_/g, ' ').replace(/g12|math|unit/gi, '').trim() || 'Chapter'}
      />
    </AdaptiveThemeProvider>
  );
};

export default Grade12Quiz;
