
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calculator, Atom, Leaf, Globe, History, Languages, Briefcase, Flag, Computer, Heart, Wrench, Wheat } from 'lucide-react';

const Grade12 = () => {

  const subjects = [
    {
      id: 'mathematics',
      name: 'Expert Mathematics',
      description: 'Calculus, statistics, and advanced problem solving',
      icon: Calculator,
      color: 'bg-blue-700',
      questions: 180
    },
    {
      id: 'physics',
      name: 'Expert Physics',
      description: 'Quantum physics, relativity, and advanced mechanics',
      icon: Atom,
      color: 'bg-purple-700',
      questions: 160
    },
    {
      id: 'chemistry',
      name: 'Expert Chemistry',
      description: 'Advanced organic chemistry and biochemistry',
      icon: Atom,
      color: 'bg-green-700',
      questions: 155
    },
    {
      id: 'biology',
      name: 'Expert Biology',
      description: 'Advanced genetics, biotechnology, and ecology',
      icon: Leaf,
      color: 'bg-emerald-700',
      questions: 170
    },
    {
      id: 'english',
      name: 'Expert English',
      description: 'Advanced literary criticism and academic writing',
      icon: Languages,
      color: 'bg-red-700',
      questions: 145
    },
    {
      id: 'history',
      name: 'Expert History',
      description: 'Contemporary history and historiography',
      icon: History,
      color: 'bg-amber-700',
      questions: 150
    },
    {
      id: 'geography',
      name: 'Expert Geography',
      description: 'Advanced physical and human geography',
      icon: Globe,
      color: 'bg-cyan-700',
      questions: 140
    },
    {
      id: 'economics',
      name: 'Expert Economics',
      description: 'Advanced economic theory and policy analysis',
      icon: Briefcase,
      color: 'bg-orange-700',
      questions: 135
    },
    {
      id: 'general-business',
      name: 'Expert Business',
      description: 'Advanced business strategy and management',
      icon: Briefcase,
      color: 'bg-slate-700',
      questions: 125
    },
    {
      id: 'civics',
      name: 'Expert Civics',
      description: 'Advanced political science and governance',
      icon: Flag,
      color: 'bg-indigo-700',
      questions: 120
    },
    {
      id: 'information-technology',
      name: 'Information Technology',
      description: 'Programming, databases, and system design',
      icon: Computer,
      color: 'bg-violet-700',
      questions: 130
    },
    {
      id: 'agriculture',
      name: 'Agriculture',
      description: 'Crop science, animal husbandry, and agribusiness',
      icon: Wheat,
      color: 'bg-lime-700',
      questions: 110
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button 
              variant="outline"
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Grade 12 Subjects</h1>
            <p className="text-xl text-gray-600">University entrance preparation and advanced concepts</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject) => {
            const IconComponent = subject.icon;
            return (
              <Link 
                key={subject.id}
                to={`/grade-12/${subject.id}`}
                className="block"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-purple-200">
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
                    
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 rounded-lg transition-all duration-300">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grade12;
