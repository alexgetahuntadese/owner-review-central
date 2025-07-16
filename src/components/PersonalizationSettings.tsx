
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Palette, User, Bell, Eye, Volume2, Zap } from 'lucide-react';
import { usePersonalization } from '@/hooks/usePersonalization';
import PersonalizedAvatar from '@/components/PersonalizedAvatar';
import MoodSelector from '@/components/MoodSelector';

const PersonalizationSettings: React.FC = () => {
  const { profile, settings, updateProfile, updateSettings, updateMood } = usePersonalization();
  const [showMoodSelector, setShowMoodSelector] = useState(false);

  const colorSchemes = [
    { id: 'blue', name: 'Ocean Blue', colors: ['#3B82F6', '#1E40AF'], gradient: 'from-blue-500 to-blue-600' },
    { id: 'green', name: 'Forest Green', colors: ['#10B981', '#059669'], gradient: 'from-green-500 to-green-600' },
    { id: 'purple', name: 'Royal Purple', colors: ['#8B5CF6', '#7C3AED'], gradient: 'from-purple-500 to-purple-600' },
    { id: 'orange', name: 'Sunset Orange', colors: ['#F59E0B', '#D97706'], gradient: 'from-orange-500 to-orange-600' },
    { id: 'pink', name: 'Rose Pink', colors: ['#EC4899', '#DB2777'], gradient: 'from-pink-500 to-pink-600' }
  ];

  const avatarStyles = [
    { id: 'geometric', name: 'Geometric', description: 'Clean shapes and patterns' },
    { id: 'minimal', name: 'Minimal', description: 'Simple and elegant' },
    { id: 'cartoon', name: 'Cartoon', description: 'Fun and playful' },
    { id: 'realistic', name: 'Realistic', description: 'Detailed and lifelike' }
  ];

  const learningStyles = [
    { id: 'casual', name: 'Casual', icon: '😊', description: 'Learn at your own pace' },
    { id: 'competitive', name: 'Competitive', icon: '🏆', description: 'Challenge-focused with rankings' },
    { id: 'academic', name: 'Academic', icon: '📚', description: 'Structured for exam preparation' }
  ];

  return (
    <div className="space-y-6">
      {/* Avatar Customization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Avatar & Profile</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <PersonalizedAvatar profile={profile} size="lg" showMood />
            <div className="space-y-2">
              <p className="font-medium">Hello, {profile.name}!</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowMoodSelector(true)}
              >
                Update Mood: {profile.mood.current}
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Avatar Style</label>
            <div className="grid grid-cols-2 gap-3">
              {avatarStyles.map((style) => (
                <Button
                  key={style.id}
                  variant={profile.avatar.style === style.id ? "default" : "outline"}
                  className="h-auto p-3 justify-start"
                  onClick={() => updateProfile({
                    avatar: { ...profile.avatar, style: style.id as any }
                  })}
                >
                  <div className="text-left">
                    <div className="font-medium">{style.name}</div>
                    <div className="text-xs opacity-70">{style.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Theme Customization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Palette className="w-5 h-5" />
            <span>Theme & Colors</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {colorSchemes.map((scheme) => (
              <Button
                key={scheme.id}
                variant="outline"
                className={`h-20 relative overflow-hidden ${
                  profile.preferences.colorScheme === scheme.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => updateProfile({
                  preferences: { ...profile.preferences, colorScheme: scheme.id as any },
                  avatar: { ...profile.avatar, colors: scheme.colors }
                })}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${scheme.gradient} opacity-80`} />
                <div className="relative z-10 text-white font-medium text-center">
                  <div>{scheme.name}</div>
                  {profile.preferences.colorScheme === scheme.id && (
                    <Badge className="mt-1 bg-white/20">Active</Badge>
                  )}
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Style */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Learning Style</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {learningStyles.map((style) => (
              <Button
                key={style.id}
                variant={profile.learningStyle.type === style.id ? "default" : "outline"}
                className="w-full justify-start h-auto p-4"
                onClick={() => updateProfile({
                  learningStyle: { ...profile.learningStyle, type: style.id as any }
                })}
              >
                <div className="flex items-center space-x-3 w-full">
                  <span className="text-2xl">{style.icon}</span>
                  <div className="text-left">
                    <div className="font-medium">{style.name}</div>
                    <div className="text-sm opacity-70">{style.description}</div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="w-5 h-5" />
            <span>Preferences</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">Adaptive Themes</p>
                <p className="text-sm text-gray-500">Theme changes based on mood and time</p>
              </div>
            </div>
            <Switch
              checked={settings.adaptiveThemes}
              onCheckedChange={(checked) => updateSettings({
                ...settings,
                adaptiveThemes: checked
              })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Volume2 className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">Sound Effects</p>
                <p className="text-sm text-gray-500">Audio feedback for interactions</p>
              </div>
            </div>
            <Switch
              checked={profile.preferences.soundEffects}
              onCheckedChange={(checked) => updateProfile({
                preferences: { ...profile.preferences, soundEffects: checked }
              })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">Animations</p>
                <p className="text-sm text-gray-500">Motion effects and transitions</p>
              </div>
            </div>
            <select
              value={profile.preferences.animations}
              onChange={(e) => updateProfile({
                preferences: { ...profile.preferences, animations: e.target.value as any }
              })}
              className="px-3 py-1 border rounded-md text-sm"
            >
              <option value="full">Full</option>
              <option value="reduced">Reduced</option>
              <option value="none">None</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <MoodSelector
        currentMood={profile.mood.current}
        onMoodChange={updateMood}
        isVisible={showMoodSelector}
        onClose={() => setShowMoodSelector(false)}
      />
    </div>
  );
};

export default PersonalizationSettings;
