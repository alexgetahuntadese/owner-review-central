
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'om';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    appName: 'EthioQuiz',
    appDescription: 'Grade 12 Chapter-by-Chapter Preparation',
    student: 'Student',
    
    // Home page
    heroTitle: 'Master Every Chapter, One Quiz at a Time',
    heroDescription: 'Study systematically with our chapter-based quiz system. Each subject is organized into focused chapters to help you master one topic at a time for your Ethiopian Grade 12 examinations.',
    subjectsAvailable: 'Subjects Available',
    chaptersToMaster: 'Chapters to Master',
    focusedLearning: 'Focused Chapter-based Learning',
    chooseSubject: 'Choose Your Subject',
    footerText: 'Study chapter by chapter for better understanding and retention! 📚',
    
    // Subject names
    mathematics: 'Mathematics',
    physics: 'Physics',
    chemistry: 'Chemistry',
    biology: 'Biology',
    english: 'English',
    history: 'Ethiopian History',
    
    // Subject descriptions
    mathematicsDesc: 'Functions, Calculus & Analytic Geometry',
    physicsDesc: 'Mechanics, Electricity & Modern Physics',
    chemistryDesc: 'Atomic Structure, Bonding & Reactions',
    biologyDesc: 'Cell Biology, Genetics & Physiology',
    englishDesc: 'Grammar, Literature & Vocabulary',
    historyDesc: 'Ancient, Medieval & Modern Ethiopia',
    
    // Navigation
    back: 'Back',
    continue: 'Continue',
    submitAnswer: 'Submit Answer',
    finishQuiz: 'Finish Quiz',
    returnHome: 'Return Home',
    retakeQuiz: 'Retake Quiz',
    backToChapters: 'Back to Chapters',
    
    // Quiz interface
    question: 'Question',
    progress: 'Progress',
    complete: 'complete',
    explanation: 'Explanation',
    loadingQuestions: 'Loading questions...',
    
    // Difficulty levels
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    selectDifficulty: 'Select Difficulty Level',
    difficultyDescription: 'Choose your preferred difficulty level for this chapter',
    
    // Score board
    quizComplete: 'Quiz Complete!',
    yourScore: 'Your Score',
    outOf: 'out of',
    excellent: 'Excellent! Keep up the great work!',
    good: 'Good job! You\'re making progress!',
    needsPractice: 'Keep practicing! You\'ll get better!',
    
    // Chapter names
    functions: 'Functions',
    mechanics: 'Mechanics',
    atomicStructure: 'Atomic Structure',
    cellBiology: 'Cell Biology',
    grammar: 'Grammar',
    ancientEthiopia: 'Ancient Ethiopia',
    
    // Language selector
    language: 'Language',
    changeLanguage: 'Change Language'
  },
  om: {
    // Header
    appName: 'EthioQuiz',
    appDescription: 'Kutaa 12 Booda Booda Qophii',
    student: 'Barataa',
    
    // Home page
    heroTitle: 'Tokkoon Tokkoon Booda Guutuu Baruu',
    heroDescription: 'Sirna baruumsa booda booda qabu fayyadamuun baruu. Tokkoon tokkoon gosa baruumsaa booda booda qindaa\'een qophaa\'ee jira kunis yaadni tokko tokko sirriitti akka bartan isin gargaara.',
    subjectsAvailable: 'Gosa Baruumsa Jiru',
    chaptersToMaster: 'Booda Baruu Qabdan',
    focusedLearning: 'Booda Booda Irratti Xiyyeeffannoo Kennuu',
    chooseSubject: 'Gosa Baruumsa Filadhu',
    footerText: 'Hubannoo fi yaadannoof booda booda baruu! 📚',
    
    // Subject names
    mathematics: 'Herregaa',
    physics: 'Fiizikisii',
    chemistry: 'Keemistrii',
    biology: 'Bayolojii',
    english: 'Afaan Ingilizii',
    history: 'Seenaa Itoophiyaa',
    
    // Subject descriptions
    mathematicsDesc: 'Dalagaa, Shallaggii fi Joomeetrii Xiinxalaa',
    physicsDesc: 'Mekaaniksii, Elektirikii fi Fiizikisii Ammayyaa',
    chemistryDesc: 'Caasaa Atoomii, Walitti Hidhuu fi Jijjiirama',
    biologyDesc: 'Bayolojii Seelii, Jenetikisii fi Fayyoolojii',
    englishDesc: 'Caasluga, Ogbarruu fi Jecha',
    historyDesc: 'Seenaa Itoophiyaa Durii, Gidduu fi Ammayyaa',
    
    // Navigation
    back: 'Deebi\'i',
    continue: 'Itti Fufi',
    submitAnswer: 'Deebii Ergi',
    finishQuiz: 'Qormaata Xumuri',
    returnHome: 'Gara Manaatti Deebi\'i',
    retakeQuiz: 'Ammas Qormaata Fudhadhu',
    backToChapters: 'Gara Booddatti Deebi\'i',
    
    // Quiz interface
    question: 'Gaafii',
    progress: 'Adeemsa',
    complete: 'xumurame',
    explanation: 'Ibsa',
    loadingQuestions: 'Gaaffii fe\'aa jira...',
    
    // Difficulty levels
    easy: 'Salphaa',
    medium: 'Giddugaleessa',
    hard: 'Rakkisaa',
    selectDifficulty: 'Sadarkaa Rakkina Filadhu',
    difficultyDescription: 'Booda kanaaf sadarkaa rakkina barbaaddan filadhaa',
    
    // Score board
    quizComplete: 'Qormaanni Xumurame!',
    yourScore: 'Qabxiin Kee',
    outOf: 'keessaa',
    excellent: 'Gaarii! Hojii gaarii itti fufi!',
    good: 'Gaarii! Adeemsa gaarii taasifta jirta!',
    needsPractice: 'Shaakaluu itti fufi! Ni fooyya\'a!',
    
    // Chapter names
    functions: 'Dalagaalee',
    mechanics: 'Mekaaniksii',
    atomicStructure: 'Caasaa Atoomii',
    cellBiology: 'Bayolojii Seelii',
    grammar: 'Caasluga',
    ancientEthiopia: 'Itoophiyaa Durii',
    
    // Language selector
    language: 'Afaan',
    changeLanguage: 'Afaan Jijjiiri'
  }
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'om')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
