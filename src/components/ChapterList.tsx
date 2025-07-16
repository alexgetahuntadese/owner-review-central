
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen } from 'lucide-react';
import ChapterCard from './ChapterCard';
import { getChaptersBySubject } from '@/data/questions';

interface ChapterListProps {
  subject: string;
  subjectName: string;
  onBack: () => void;
  onChapterSelect: (chapterId: string) => void;
}

const ChapterList = ({ subject, subjectName, onBack, onChapterSelect }: ChapterListProps) => {
  const chapters = getChaptersBySubject(subject);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" onClick={onBack} className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Subjects</span>
          </Button>
          
          <Badge variant="secondary" className="flex items-center space-x-2 text-lg px-4 py-2">
            <BookOpen className="w-5 h-5" />
            <span>{subjectName}</span>
          </Badge>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Choose a Chapter
          </h2>
          <p className="text-lg text-gray-600">
            Select a chapter from {subjectName} to start your quiz
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              subjectName={subjectName}
              onSelect={onChapterSelect}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            Complete all chapters to master {subjectName}! 📚
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChapterList;
