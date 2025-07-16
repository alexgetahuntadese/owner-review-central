
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, Target } from 'lucide-react';
import { getChaptersBySubject, getTotalQuestionsBySubject } from '@/data/questions';

const Grade11Subject = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();

  if (!subject) {
    return <div>Subject not found</div>;
  }

  const chapters = getChaptersBySubject(subject);
  const totalQuestions = getTotalQuestionsBySubject(subject);

  // Filter for Grade 11 chapters - look for chapters with IDs containing '11'
  const grade11Chapters = chapters.filter(chapter => 
    chapter.id.includes('-11-') || chapter.id.includes('11')
  );

  const subjectNames: { [key: string]: string } = {
    mathematics: 'Advanced Mathematics',
    physics: 'Advanced Physics',
    chemistry: 'Advanced Chemistry',
    biology: 'Advanced Biology',
    english: 'Advanced English',
    history: 'Advanced History',
    geography: 'Advanced Geography',
    'technical-drawing': 'Advanced Technical Drawing',
    economics: 'Advanced Economics',
    'general-business': 'Advanced Business',
    civics: 'Advanced Civics',
    'physical-education': 'Advanced PE',
    'information-technology': 'Advanced IT',
    'national-language': 'Advanced National Language'
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getQuestionCountByDifficulty = (questions: any[], difficulty: string) => {
    return questions.filter(q => q.difficulty === difficulty).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button 
            onClick={() => navigate('/grade11')} 
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grade 11
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {subjectNames[subject] || subject}
            </h1>
            <p className="text-gray-600 mb-2">Grade 11 - Advanced Level Content</p>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">
              <BookOpen className="w-4 h-4 mr-1" />
              {grade11Chapters.length} Chapters Available
            </Badge>
          </div>
        </div>

        <div className="grid gap-4">
          {grade11Chapters.length > 0 ? (
            grade11Chapters.map((chapter) => (
              <Card key={chapter.id} className="hover:shadow-lg transition-shadow border-2 border-amber-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{chapter.name}</CardTitle>
                      <CardDescription className="text-base">
                        {chapter.description}
                      </CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                      Grade 11
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className={`p-2 rounded-lg ${getDifficultyColor('easy')}`}>
                        <Target className="w-4 h-4 mx-auto mb-1" />
                        <div className="text-sm font-medium">Easy</div>
                        <div className="text-xs">{getQuestionCountByDifficulty(chapter.questions, 'easy')} questions</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`p-2 rounded-lg ${getDifficultyColor('medium')}`}>
                        <Target className="w-4 h-4 mx-auto mb-1" />
                        <div className="text-sm font-medium">Medium</div>
                        <div className="text-xs">{getQuestionCountByDifficulty(chapter.questions, 'medium')} questions</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className={`p-2 rounded-lg ${getDifficultyColor('hard')}`}>
                        <Target className="w-4 h-4 mx-auto mb-1" />
                        <div className="text-sm font-medium">Hard</div>
                        <div className="text-xs">{getQuestionCountByDifficulty(chapter.questions, 'hard')} questions</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => navigate(`/grade11/${subject}/${chapter.id}/easy`)}
                      variant="outline"
                      className="flex-1"
                      disabled={getQuestionCountByDifficulty(chapter.questions, 'easy') === 0}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Easy Quiz
                    </Button>
                    <Button 
                      onClick={() => navigate(`/grade11/${subject}/${chapter.id}/medium`)}
                      variant="outline"
                      className="flex-1"
                      disabled={getQuestionCountByDifficulty(chapter.questions, 'medium') === 0}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Medium Quiz
                    </Button>
                    <Button 
                      onClick={() => navigate(`/grade11/${subject}/${chapter.id}/hard`)}
                      className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                      disabled={getQuestionCountByDifficulty(chapter.questions, 'hard') === 0}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Hard Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-gray-500">No Grade 11 chapters available for this subject yet.</p>
                <Button 
                  onClick={() => navigate('/grade11')} 
                  variant="outline"
                  className="mt-4"
                >
                  Back to Grade 11
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grade11Subject;
