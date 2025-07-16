
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock, Target } from 'lucide-react';
import { getChaptersBySubject, getTotalQuestionsBySubject } from '@/data/questions';

const Grade12Subject = () => {
  // Get subject from window.location.pathname instead of useParams
  const pathParts = window.location.pathname.split('/');
  const subject = pathParts[pathParts.length - 1];

  if (!subject) {
    return <div>Subject not found</div>;
  }

  const chapters = getChaptersBySubject(subject);
  const totalQuestions = getTotalQuestionsBySubject(subject);

  // Filter for Grade 12 chapters only
  const grade12Chapters = chapters.filter(chapter => 
    chapter.id.includes('grade12') || 
    chapter.name.includes('Grade 12') ||
    chapter.id.includes('-12-') // This will catch hist-12-X format
  );

  const subjectNames: { [key: string]: string } = {
    mathematics: 'Expert Mathematics',
    physics: 'Expert Physics',
    chemistry: 'Expert Chemistry',
    biology: 'Expert Biology',
    english: 'Expert English',
    history: 'Expert History',
    geography: 'Expert Geography',
    'technical-drawing': 'Expert Technical Drawing',
    economics: 'Expert Economics',
    'general-business': 'Expert Business',
    civics: 'Expert Civics',
    'physical-education': 'Expert PE',
    'information-technology': 'Expert IT',
    'national-language': 'Expert National Language',
    agriculture: 'Agriculture'
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/grade-12">
            <Button 
              variant="outline"
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Grade 12
            </Button>
          </Link>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {subjectNames[subject] || subject}
            </h1>
            <p className="text-gray-600 mb-2">Grade 12 - Expert Level Content</p>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              <BookOpen className="w-4 h-4 mr-1" />
              {grade12Chapters.length} Chapters Available
            </Badge>
          </div>
        </div>

        <div className="grid gap-4">
          {grade12Chapters.length > 0 ? (
            grade12Chapters.map((chapter) => (
              <Card key={chapter.id} className="hover:shadow-lg transition-shadow border-2 border-purple-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{chapter.name}</CardTitle>
                      <CardDescription className="text-base">
                        {chapter.description}
                      </CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      Grade 12
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
                    <Link to={`/grade-12/${subject}/${chapter.id}/easy`} className="flex-1">
                      <Button 
                        variant="outline"
                        className="w-full"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        Easy Quiz
                      </Button>
                    </Link>
                    <Link to={`/grade-12/${subject}/${chapter.id}/medium`} className="flex-1">
                      <Button 
                        variant="outline"
                        className="w-full"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        Medium Quiz
                      </Button>
                    </Link>
                    <Link to={`/grade-12/${subject}/${chapter.id}/hard`} className="flex-1">
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        Hard Quiz
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-gray-500">No Grade 12 chapters available for this subject yet.</p>
                <Link to="/grade-12">
                  <Button 
                    variant="outline"
                    className="mt-4"
                  >
                    Back to Grade 12
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grade12Subject;
