
import { Chapter } from '../../types';

export const grade10HistoryChapters: Chapter[] = [
  {
    id: 'hist-10-1',
    name: 'The Dawn of Human Civilization',
    description: 'Explore the earliest human societies and the development of civilization',
    questions: [
      {
        id: 'hist-10-1-1',
        question: 'What is considered the most significant development in early human history?',
        options: ['The discovery of fire', 'The development of agriculture', 'The invention of the wheel', 'The creation of art'],
        correct: 'The development of agriculture',
        explanation: 'The development of agriculture allowed humans to settle in one place and develop complex societies.',
        difficulty: 'easy'
      },
      {
        id: 'hist-10-1-2',
        question: 'Which river valley civilization is considered one of the earliest?',
        options: ['Nile Valley', 'Mesopotamia', 'Indus Valley', 'All of the above'],
        correct: 'All of the above',
        explanation: 'The Nile, Mesopotamian, and Indus Valley civilizations all developed around the same time period.',
        difficulty: 'medium'
      },
      {
        id: 'hist-10-1-3',
        question: 'What was the primary reason early humans developed writing systems?',
        options: ['Religious purposes', 'Record keeping for trade', 'Artistic expression', 'Communication over long distances'],
        correct: 'Record keeping for trade',
        explanation: 'Writing systems were primarily developed to keep records of trade transactions and administrative matters.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'hist-10-2',
    name: 'Ancient Civilizations',
    description: 'Study the great ancient civilizations and their contributions',
    questions: [
      {
        id: 'hist-10-2-1',
        question: 'Which ancient civilization built the pyramids?',
        options: ['Greeks', 'Romans', 'Egyptians', 'Babylonians'],
        correct: 'Egyptians',
        explanation: 'The ancient Egyptians built the famous pyramids as tombs for their pharaohs.',
        difficulty: 'easy'
      },
      {
        id: 'hist-10-2-2',
        question: 'What was the primary contribution of ancient Greece to modern society?',
        options: ['Mathematics', 'Democracy', 'Philosophy', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Ancient Greece made significant contributions in mathematics, democracy, and philosophy.',
        difficulty: 'medium'
      },
      {
        id: 'hist-10-2-3',
        question: 'Which empire was known for its extensive road system and legal code?',
        options: ['Persian Empire', 'Roman Empire', 'Macedonian Empire', 'Assyrian Empire'],
        correct: 'Roman Empire',
        explanation: 'The Roman Empire was famous for its extensive road network and comprehensive legal system.',
        difficulty: 'hard'
      }
    ]
  }
];
