
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, Target } from 'lucide-react';
import { getChaptersBySubject, getTotalQuestionsBySubject } from '@/data/questions';

const Subject = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();

  if (!subject) {
    return <div>Subject not found</div>;
  }

  const chapters = getChaptersBySubject(subject);
  const totalQuestions = getTotalQuestionsBySubject(subject);

  // Filter for regular chapters (exclude Grade 11)
  const regularChapters = chapters.filter(chapter => 
    !chapter.id.includes('grade11') && !chapter.name.includes('Grade 11')
  );

  const subjectNames: { [key: string]: string } = {
    mathematics: 'Mathematics',
    physics: 'Physics',
    chemistry: 'Chemistry',
    biology: 'Biology',
    english: 'English',
    history: 'History',
    geography: 'Geography',
    'technical-drawing': 'Technical Drawing',
    economics: 'Economics',
    'general-business': 'General Business',
    civics: 'Civics',
    'physical-education': 'Physical Education',
    'information-technology': 'Information Technology',
    'national-language': 'National Language'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {subjectNames[subject] || subject}
            </h1>
            <p className="text-gray-600 mb-2">Regular Level Content</p>
            <Badge variant="secondary">
              <BookOpen className="w-4 h-4 mr-1" />
              {regularChapters.length} Chapters Available
            </Badge>
          </div>
        </div>

        <div className="grid gap-4">
          {regularChapters.length > 0 ? (
            regularChapters.map((chapter) => (
              <Card key={chapter.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{chapter.name}</CardTitle>
                      <CardDescription className="text-base">
                        {chapter.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">
                      Regular
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
                      onClick={() => navigate(`/quiz/${subject}/${chapter.id}/easy`)}
                      variant="outline"
                      className="flex-1"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Easy Quiz
                    </Button>
                    <Button 
                      onClick={() => navigate(`/quiz/${subject}/${chapter.id}/medium`)}
                      variant="outline"
                      className="flex-1"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Medium Quiz
                    </Button>
                    <Button 
                      onClick={() => navigate(`/quiz/${subject}/${chapter.id}/hard`)}
                      className="flex-1"
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
                <p className="text-gray-500">No regular chapters available for this subject yet.</p>
                <Button 
                  onClick={() => navigate('/')} 
                  variant="outline"
                  className="mt-4"
                >
                  Back to Home
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subject;
