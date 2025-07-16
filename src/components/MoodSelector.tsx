
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MoodSelectorProps {
  currentMood: string;
  onMoodChange: (mood: string, context: string) => void;
  isVisible: boolean;
  onClose: () => void;
}

const moods = [
  { id: 'focused', emoji: '🎯', label: 'Focused', description: 'Ready to concentrate' },
  { id: 'playful', emoji: '😄', label: 'Playful', description: 'Feeling energetic' },
  { id: 'stressed', emoji: '😰', label: 'Stressed', description: 'Need some calm' },
  { id: 'confident', emoji: '😎', label: 'Confident', description: 'Bring on the challenge' },
  { id: 'curious', emoji: '🤔', label: 'Curious', description: 'Want to explore' }
];

const MoodSelector: React.FC<MoodSelectorProps> = ({
  currentMood,
  onMoodChange,
  isVisible,
  onClose
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">How are you feeling?</h3>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {moods.map((mood) => (
              <Button
                key={mood.id}
                variant={currentMood === mood.id ? "default" : "outline"}
                className="justify-start h-auto p-4"
                onClick={() => {
                  onMoodChange(mood.id, 'user_selected');
                  onClose();
                }}
              >
                <div className="flex items-center space-x-3 w-full">
                  <span className="text-2xl">{mood.emoji}</span>
                  <div className="text-left">
                    <div className="font-medium">{mood.label}</div>
                    <div className="text-sm text-gray-500">{mood.description}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
          <Button variant="ghost" onClick={onClose} className="w-full">
            Maybe later
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodSelector;
