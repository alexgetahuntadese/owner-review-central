
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Star, Trophy, Zap, ArrowRight, Check } from 'lucide-react';
import PersonalizedAvatar from '@/components/PersonalizedAvatar';
import { usePersonalization } from '@/hooks/usePersonalization';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { profile, updateProfile } = usePersonalization();
  
  const steps = [
    {
      title: "Welcome to QuizPlatform!",
      subtitle: "Your personalized learning journey starts here",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl animate-bounce">🎓</div>
          <div className="space-y-2">
            <p className="text-lg text-gray-600">Master knowledge across all academic levels</p>
            <div className="flex justify-center gap-2">
              <Badge className="bg-blue-500">Interactive Quizzes</Badge>
              <Badge className="bg-green-500">Progress Tracking</Badge>
              <Badge className="bg-purple-500">Personalized Learning</Badge>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Choose Your Learning Style",
      subtitle: "We'll personalize your experience",
      content: (
        <div className="space-y-4">
          {[
            { id: 'casual', label: 'Casual Learner', desc: 'Learn at your own pace', icon: '😊', color: 'bg-blue-500' },
            { id: 'competitive', label: 'Competitive Player', desc: 'Challenge yourself with rankings', icon: '🏆', color: 'bg-red-500' },
            { id: 'academic', label: 'Academic Focused', desc: 'Structured learning for exams', icon: '📚', color: 'bg-green-500' }
          ].map((style) => (
            <Button
              key={style.id}
              variant={profile.learningStyle.type === style.id ? "default" : "outline"}
              className={`w-full justify-start h-auto p-4 ${profile.learningStyle.type === style.id ? style.color : ''}`}
              onClick={() => updateProfile({
                learningStyle: { ...profile.learningStyle, type: style.id as any }
              })}
            >
              <div className="flex items-center space-x-3 w-full">
                <span className="text-2xl">{style.icon}</span>
                <div className="text-left">
                  <div className="font-medium">{style.label}</div>
                  <div className="text-sm opacity-80">{style.desc}</div>
                </div>
                {profile.learningStyle.type === style.id && <Check className="w-5 h-5 ml-auto" />}
              </div>
            </Button>
          ))}
        </div>
      )
    },
    {
      title: "Customize Your Avatar",
      subtitle: "Make it uniquely yours",
      content: (
        <div className="space-y-6">
          <div className="flex justify-center">
            <PersonalizedAvatar profile={profile} size="xl" showMood />
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Avatar Style</label>
              <div className="grid grid-cols-2 gap-2">
                {['geometric', 'minimal', 'cartoon'].map((style) => (
                  <Button
                    key={style}
                    variant={profile.avatar.style === style ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateProfile({
                      avatar: { ...profile.avatar, style: style as any }
                    })}
                  >
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Color Theme</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'blue', colors: ['#3B82F6', '#8B5CF6'] },
                  { name: 'green', colors: ['#10B981', '#059669'] },
                  { name: 'purple', colors: ['#8B5CF6', '#EC4899'] },
                  { name: 'orange', colors: ['#F59E0B', '#EF4444'] }
                ].map((theme) => (
                  <Button
                    key={theme.name}
                    variant="outline"
                    size="sm"
                    className="h-12"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
                      color: 'white'
                    }}
                    onClick={() => updateProfile({
                      avatar: { ...profile.avatar, colors: theme.colors },
                      preferences: { ...profile.preferences, colorScheme: theme.name as any }
                    })}
                  >
                    {theme.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "You're All Set!",
      subtitle: "Ready to start your learning adventure",
      content: (
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <PersonalizedAvatar profile={profile} size="xl" showMood />
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <div className="text-sm font-medium">Multiple Subjects</div>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                <div className="text-sm font-medium">Track Progress</div>
              </div>
              <div className="text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <div className="text-sm font-medium">Earn Achievements</div>
              </div>
            </div>
            <p className="text-gray-600">Choose your grade level to begin!</p>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center space-x-2 mb-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-blue-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <CardTitle className="text-2xl font-bold animate-fade-in">
            {steps[currentStep].title}
          </CardTitle>
          <p className="text-gray-600 animate-fade-in">
            {steps[currentStep].subtitle}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="animate-scale-in">
            {steps[currentStep].content}
          </div>
          
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="hover-scale"
            >
              Previous
            </Button>
            <Button
              onClick={nextStep}
              className="hover-scale flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <span>{currentStep === steps.length - 1 ? 'Get Started' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingFlow;
