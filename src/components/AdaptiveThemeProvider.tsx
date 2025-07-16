
import React, { createContext, useContext, useEffect } from 'react';
import { usePersonalization } from '@/hooks/usePersonalization';

interface ThemeContextType {
  currentTheme: string;
  themeClasses: Record<string, string>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useAdaptiveTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAdaptiveTheme must be used within AdaptiveThemeProvider');
  }
  return context;
};

interface AdaptiveThemeProviderProps {
  children: React.ReactNode;
}

export const AdaptiveThemeProvider: React.FC<AdaptiveThemeProviderProps> = ({ children }) => {
  const { profile, getPersonalizedTheme } = usePersonalization();
  const currentTheme = getPersonalizedTheme();

  const themeClasses = {
    blue: {
      primary: 'from-blue-500 to-cyan-500',
      secondary: 'from-blue-50 to-cyan-100',
      accent: 'bg-blue-500',
      text: 'text-blue-600'
    },
    green: {
      primary: 'from-green-500 to-emerald-500',
      secondary: 'from-green-50 to-emerald-100',
      accent: 'bg-green-500',
      text: 'text-green-600'
    },
    purple: {
      primary: 'from-purple-500 to-pink-500',
      secondary: 'from-purple-50 to-pink-100',
      accent: 'bg-purple-500',
      text: 'text-purple-600'
    },
    orange: {
      primary: 'from-amber-500 to-orange-500',
      secondary: 'from-amber-50 to-orange-100',
      accent: 'bg-amber-500',
      text: 'text-amber-600'
    },
    pink: {
      primary: 'from-pink-500 to-rose-500',
      secondary: 'from-pink-50 to-rose-100',
      accent: 'bg-pink-500',
      text: 'text-pink-600'
    }
  };

  useEffect(() => {
    // Apply theme to root element
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.setAttribute('data-mood', profile.mood.current);
  }, [currentTheme, profile.mood.current]);

  const value = {
    currentTheme,
    themeClasses: themeClasses[currentTheme as keyof typeof themeClasses] || themeClasses.blue
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
