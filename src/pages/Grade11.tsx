
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calculator, Atom, Leaf, Globe, History, Palette, Users, Heart, Computer, Languages, Briefcase, Flag, Wrench } from 'lucide-react';

const Grade11 = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      id: 'mathematics',
      name: 'Advanced Mathematics',
      description: 'Advanced algebra, trigonometry, and pre-calculus',
      icon: Calculator,
      color: 'bg-blue-600',
      questions: 150
    },
    {
      id: 'physics',
      name: 'Advanced Physics',
      description: 'Thermodynamics, electricity, and modern physics',
      icon: Atom,
      color: 'bg-purple-600',
      questions: 130
    },
    {
      id: 'chemistry',
      name: 'Advanced Chemistry',
      description: 'Organic chemistry, chemical equilibrium, and kinetics',
      icon: Atom,
      color: 'bg-green-600',
      questions: 125
    },
    {
      id: 'biology',
      name: 'Advanced Biology',
      description: 'Human anatomy, molecular biology, and evolution',
      icon: Leaf,
      color: 'bg-emerald-600',
      questions: 140
    },
    {
      id: 'english',
      name: 'Advanced English',
      description: 'Advanced literature analysis and composition',
      icon: Languages,
      color: 'bg-red-600',
      questions: 115
    },
    {
      id: 'history',
      name: 'Advanced History',
      description: 'Modern world history and Ethiopian studies',
      icon: History,
      color: 'bg-amber-600',
      questions: 120
    },
    {
      id: 'geography',
      name: 'Advanced Geography',
      description: 'Regional geography and environmental studies',
      icon: Globe,
      color: 'bg-cyan-600',
      questions: 110
    },
    {
      id: 'economics',
      name: 'Economics',
      description: 'Microeconomics and macroeconomics principles',
      icon: Briefcase,
      color: 'bg-orange-600',
      questions: 105
    },
    {
      id: 'general-business',
      name: 'General Business',
      description: 'Business fundamentals and entrepreneurship',
      icon: Users,
      color: 'bg-slate-600',
      questions: 95
    },
    {
      id: 'technical-drawing',
      name: 'Technical Drawing',
      description: 'Engineering drawing and design principles',
      icon: Wrench,
      color: 'bg-gray-600',
      questions: 80
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Grade 11 Subjects</h1>
            <p className="text-xl text-gray-600">Advanced topics preparing for final examinations</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject) => {
            const IconComponent = subject.icon;
            return (
              <Card 
                key={subject.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-amber-200"
                onClick={() => navigate(`/grade11/${subject.id}`)}
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
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-2 rounded-lg transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/grade11/${subject.id}`);
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

export default Grade11;
