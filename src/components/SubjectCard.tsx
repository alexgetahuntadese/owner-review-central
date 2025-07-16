
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, FileText } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: number;
}

interface SubjectCardProps {
  subject: Subject;
  onSelect: (subjectId: string) => void;
}

const SubjectCard = ({ subject, onSelect }: SubjectCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <CardHeader className="text-center">
        <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
          <span className="text-2xl">{subject.icon}</span>
        </div>
        <CardTitle className="text-xl font-bold">{subject.name}</CardTitle>
        <CardDescription className="text-sm">{subject.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <FileText className="w-4 h-4" />
            <span>{subject.questions} Questions</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>~{Math.ceil(subject.questions * 1.5)} min</span>
          </div>
        </div>
        
        <Button 
          onClick={() => onSelect(subject.id)}
          className="w-full group-hover:bg-gray-800 transition-colors"
        >
          Start Quiz
        </Button>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
