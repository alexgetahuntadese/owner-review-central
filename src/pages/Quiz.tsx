
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { getQuestionsForQuiz } from '@/data/questions';
import { Question } from '@/data/types';

const Quiz = () => {
  const { subject, chapter, difficulty } = useParams<{ 
    subject: string; 
    chapter: string; 
    difficulty: 'easy' | 'medium' | 'hard' 
  }>();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (subject && chapter && difficulty) {
      // Always load new quiz
      const quizQuestions = getQuestionsForQuiz(subject, chapter, difficulty, 10);
      setQuestions(quizQuestions);
    }
  }, [subject, chapter, difficulty]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (!showResult) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      setShowResult(true);
    }
  };

  const handleNextQuestion = () => {
    const newAnswers = { ...answers, [currentQuestionIndex]: selectedAnswer };
    setAnswers(newAnswers);

    if (selectedAnswer === currentQuestion.correct) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setAnswers({});
    setQuizCompleted(false);
    setShowResult(false);
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-gray-500">No questions available for this chapter and difficulty level.</p>
              <Button 
                onClick={() => navigate(`/subject/${subject}`)} 
                variant="outline"
                className="mt-4"
              >
                Back to Subject
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">Quiz Completed!</CardTitle>
              <CardDescription>
                Your final score: {score} out of {questions.length}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold mb-4">
                {Math.round((score / questions.length) * 100)}%
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={restartQuiz} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button onClick={() => navigate(`/subject/${subject}`)}>
                  Back to Subject
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button 
            onClick={() => navigate(`/subject/${subject}`)} 
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Subject
          </Button>
          
          <div className="flex justify-between items-center mb-4">
            <Badge variant="secondary">
              {difficulty?.toUpperCase()}
            </Badge>
            <div className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{currentQuestion?.question}</CardTitle>
              <Badge className={`${getDifficultyColor(currentQuestion?.difficulty)} text-white`}>
                {currentQuestion?.difficulty}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              {currentQuestion?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === option
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${showResult ? 'cursor-not-allowed' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showResult && (
              <div className={`p-4 rounded-lg mb-4 ${
                selectedAnswer === currentQuestion.correct 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center mb-2">
                  {selectedAnswer === currentQuestion.correct ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 mr-2" />
                  )}
                  <span className="font-medium">
                    {selectedAnswer === currentQuestion.correct ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                {selectedAnswer !== currentQuestion.correct && (
                  <p className="text-sm mb-2">
                    <strong>Correct answer:</strong> {currentQuestion.correct}
                  </p>
                )}
                {currentQuestion.explanation && (
                  <p className="text-sm">{currentQuestion.explanation}</p>
                )}
              </div>
            )}

            <div className="flex gap-2">
              {!showResult ? (
                <Button 
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="flex-1"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button 
                  onClick={handleNextQuestion}
                  className="flex-1"
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-sm text-gray-600">
          Current Score: {score} / {currentQuestionIndex + (showResult ? 1 : 0)}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
