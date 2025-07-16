
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowLeft } from 'lucide-react';

const Grade9 = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'Algebra, geometry, and basic mathematical concepts',
      color: 'from-blue-500 to-cyan-500',
      totalQuestions: 150,
      chapters: 8
    },
    {
      id: 'english',
      name: 'English',
      description: 'Grammar, literature, and language skills',
      color: 'from-purple-500 to-indigo-500',
      totalQuestions: 120,
      chapters: 6
    },
    {
      id: 'science',
      name: 'Science',
      description: 'Basic physics, chemistry, and biology concepts',
      color: 'from-green-500 to-teal-500',
      totalQuestions: 180,
      chapters: 10
    },
    {
      id: 'social-studies',
      name: 'Social Studies',
      description: 'History, geography, and civic education',
      color: 'from-amber-500 to-orange-500',
      totalQuestions: 100,
      chapters: 7
    },
    {
      id: 'amharic',
      name: 'Amharic',
      description: 'Ethiopian national language and literature',
      color: 'from-rose-500 to-pink-500',
      totalQuestions: 90,
      chapters: 5
    },
    {
      id: 'physical-education',
      name: 'Physical Education',
      description: 'Health, fitness, and sports knowledge',
      color: 'from-violet-500 to-purple-500',
      totalQuestions: 60,
      chapters: 4
    }
  ];

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/subject/${subjectId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-7 h-7 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">Grade 9</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Grade 9 Subjects
          </h1>
          <p className="text-lg text-gray-600">Choose a subject to start your learning journey</p>
        </div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {subjects.map((subject) => (
            <Card 
              key={subject.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 bg-white/80 backdrop-blur-sm"
              onClick={() => handleSubjectClick(subject.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${subject.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{subject.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {subject.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{subject.chapters} Chapters</span>
                  <span>{subject.totalQuestions} Questions</span>
                </div>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${subject.color} hover:shadow-lg text-white font-medium transition-all duration-300 group-hover:scale-105`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubjectClick(subject.id);
                  }}
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-500">Select any subject above to access chapters and start practicing!</p>
        </div>
      </div>
    </div>
  );
};

export default Grade9;
