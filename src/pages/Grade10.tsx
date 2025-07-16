
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Calculator, Atom, Leaf, Globe, History, Palette, Users, Heart, Computer, Languages, Briefcase, Flag } from 'lucide-react';

const Grade10 = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'Algebra, geometry, and basic calculus concepts',
      icon: Calculator,
      color: 'bg-blue-500',
      questions: 120
    },
    {
      id: 'physics',
      name: 'Physics',
      description: 'Mechanics, waves, and energy fundamentals',
      icon: Atom,
      color: 'bg-purple-500',
      questions: 100
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      description: 'Atomic structure, bonding, and reactions',
      icon: Atom,
      color: 'bg-green-500',
      questions: 95
    },
    {
      id: 'biology',
      name: 'Biology',
      description: 'Cell biology, genetics, and ecology basics',
      icon: Leaf,
      color: 'bg-emerald-500',
      questions: 110
    },
    {
      id: 'english',
      name: 'English',
      description: 'Literature, grammar, and writing skills',
      icon: BookOpen,
      color: 'bg-red-500',
      questions: 85
    },
    {
      id: 'history',
      name: 'History',
      description: 'World history and Ethiopian heritage',
      icon: History,
      color: 'bg-amber-500',
      questions: 90
    },
    {
      id: 'geography',
      name: 'Geography',
      description: 'Physical and human geography fundamentals',
      icon: Globe,
      color: 'bg-cyan-500',
      questions: 80
    },
    {
      id: 'civics',
      name: 'Civics and Ethics',
      description: 'Citizenship, rights, and ethical principles',
      icon: Flag,
      color: 'bg-indigo-500',
      questions: 75
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Grade 10 Subjects</h1>
            <p className="text-xl text-gray-600">Foundation level courses to build strong academic basics</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject) => {
            const IconComponent = subject.icon;
            return (
              <Card 
                key={subject.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-blue-200"
                onClick={() => navigate(`/subject/${subject.id}`)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">{subject.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-gray-700">{subject.questions} Questions</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-2 rounded-lg transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/subject/${subject.id}`);
                    }}
                  >
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grade10;
