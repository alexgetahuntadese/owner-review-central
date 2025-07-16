import { Question, Chapter } from './types';
import { mathematicsChapters } from './subjects/mathematics';
import { physicsChapters } from './subjects/physics';
import { chemistryChapters } from './subjects/chemistry';
import { biologyChapters } from './subjects/biology';
import { englishChapters } from './subjects/english';
import { historyChapters } from './subjects/history';
import { geographyChapters } from './subjects/geography';
import { technicalDrawingChapters } from './subjects/technical-drawing';
import { economicsChapters } from './subjects/economics';
import { generalBusinessChapters } from './subjects/general-business';
import { civicsChapters } from './subjects/civics';
import { physicalEducationChapters } from './subjects/physical-education';
import { informationTechnologyChapters } from './subjects/information-technology';
import { nationalLanguageChapters } from './subjects/national-language';
import { agricultureChapters } from './subjects/agriculture';

export interface QuestionsBySubject {
  mathematics: Chapter[];
  physics: Chapter[];
  chemistry: Chapter[];
  biology: Chapter[];
  'technical-drawing': Chapter[];
  english: Chapter[];
  history: Chapter[];
  geography: Chapter[];
  economics: Chapter[];
  'general-business': Chapter[];
  civics: Chapter[];
  'physical-education': Chapter[];
  'information-technology': Chapter[];
  'national-language': Chapter[];
  agriculture: Chapter[];
}

export const questionsBySubject: QuestionsBySubject = {
  mathematics: mathematicsChapters,
  physics: physicsChapters,
  chemistry: chemistryChapters,
  biology: biologyChapters,
  'technical-drawing': technicalDrawingChapters,
  english: englishChapters,
  history: historyChapters,
  geography: geographyChapters,
  economics: economicsChapters,
  'general-business': generalBusinessChapters,
  civics: civicsChapters,
  'physical-education': physicalEducationChapters,
  'information-technology': informationTechnologyChapters,
  'national-language': nationalLanguageChapters,
  agriculture: agricultureChapters
};

export const getTotalQuestionsBySubject = (subject: string): number => {
  if (!questionsBySubject[subject]) {
    return 0;
  }
  return questionsBySubject[subject].reduce((total, chapter) => total + chapter.questions.length, 0);
};

export const getChaptersBySubject = (subject: string): Chapter[] => {
    return questionsBySubject[subject] || [];
};

export const getQuestionsForQuiz = (subject: string, chapterId: string, difficulty: 'easy' | 'medium' | 'hard', numberOfQuestions: number): Question[] => {
  const chapter = questionsBySubject[subject]?.find(c => c.id === chapterId);
  if (!chapter) {
    return [];
  }

  const filteredQuestions = chapter.questions.filter(q => q.difficulty === difficulty);
  if (filteredQuestions.length <= numberOfQuestions) {
    return filteredQuestions;
  }

  const shuffledQuestions = [...filteredQuestions].sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, numberOfQuestions);
};
