
export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic?: string;
}

export interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}
