
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, FileText, BookOpen } from 'lucide-react';

interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: any[];
}

interface ChapterCardProps {
  chapter: Chapter;
  subjectName: string;
  onSelect: (chapterId: string) => void;
}

const ChapterCard = ({ chapter, subjectName, onSelect }: ChapterCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <BookOpen className="w-6 h-6 text-blue-500" />
          <Badge variant="outline" className="text-xs">
            {subjectName}
          </Badge>
        </div>
        <CardTitle className="text-lg font-bold">{chapter.name}</CardTitle>
        <CardDescription className="text-sm">{chapter.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <FileText className="w-4 h-4" />
            <span>{chapter.questions.length} Questions</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>~{Math.ceil(chapter.questions.length * 1.5)} min</span>
          </div>
        </div>
        
        <Button 
          onClick={() => onSelect(chapter.id)}
          className="w-full group-hover:bg-gray-800 transition-colors"
        >
          Start Chapter Quiz
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChapterCard;
