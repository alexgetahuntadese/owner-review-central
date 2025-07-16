import { Chapter } from '../types';
import { grade12EnglishChapters } from './english/grade12';

export const englishChapters: Chapter[] = [
  {
    id: 'grammar',
    name: 'Grammar and Language Skills',
    description: 'Parts of speech, sentence structure, and language mechanics',
    questions: [
      // Easy Questions
      {
        id: 'gram_1',
        question: 'What is a noun?',
        options: ['Action word', 'Describing word', 'Person, place, or thing', 'Connecting word'],
        correct: 'Person, place, or thing',
        explanation: 'A noun is a word that names a person, place, thing, or idea.',
        difficulty: 'easy'
      },
      {
        id: 'gram_2',
        question: 'Which is a verb in this sentence: "She runs quickly"?',
        options: ['She', 'runs', 'quickly', 'None'],
        correct: 'runs',
        explanation: 'A verb shows action or state of being. "Runs" is the action word.',
        difficulty: 'easy'
      },
      {
        id: 'gram_3',
        question: 'What type of word is "beautiful"?',
        options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
        correct: 'Adjective',
        explanation: 'An adjective describes or modifies a noun.',
        difficulty: 'easy'
      },
      {
        id: 'gram_4',
        question: 'How many syllables are in "elephant"?',
        options: ['2', '3', '4', '5'],
        correct: '3',
        explanation: 'E-le-phant has three syllables.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'gram_med_1',
        question: 'What is the past tense of "go"?',
        options: ['goed', 'went', 'gone', 'going'],
        correct: 'went',
        explanation: '"Go" is an irregular verb with past tense "went".',
        difficulty: 'medium'
      },
      {
        id: 'gram_med_2',
        question: 'Which sentence uses correct subject-verb agreement?',
        options: ['The dogs runs', 'The dog run', 'The dogs run', 'The dog are running'],
        correct: 'The dogs run',
        explanation: 'Plural subject "dogs" requires plural verb "run".',
        difficulty: 'medium'
      },
      {
        id: 'gram_med_3',
        question: 'What is a compound sentence?',
        options: ['One independent clause', 'Two independent clauses joined', 'Dependent clause only', 'Question sentence'],
        correct: 'Two independent clauses joined',
        explanation: 'A compound sentence has two or more independent clauses.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'gram_hard_1',
        question: 'Identify the subordinating conjunction: "Although it was raining, we went outside."',
        options: ['Although', 'it', 'was', 'we'],
        correct: 'Although',
        explanation: '"Although" introduces a dependent clause, making it a subordinating conjunction.',
        difficulty: 'hard'
      },
      {
        id: 'gram_hard_2',
        question: 'What type of sentence is: "What a beautiful sunset!"?',
        options: ['Declarative', 'Interrogative', 'Imperative', 'Exclamatory'],
        correct: 'Exclamatory',
        explanation: 'Exclamatory sentences express strong emotion and end with exclamation marks.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'reading_comprehension',
    name: 'Reading Comprehension',
    description: 'Understanding texts, making inferences, and analyzing literature',
    questions: [
      // Easy Questions
      {
        id: 'read_1',
        question: 'What is the main idea of a paragraph?',
        options: ['First sentence', 'Last sentence', 'Central message or point', 'Longest sentence'],
        correct: 'Central message or point',
        explanation: 'The main idea is the central message that the paragraph conveys.',
        difficulty: 'easy'
      },
      {
        id: 'read_2',
        question: 'What are context clues?',
        options: ['Pictures in text', 'Hints about word meaning', 'Bold words', 'Chapter titles'],
        correct: 'Hints about word meaning',
        explanation: 'Context clues help readers understand unfamiliar words using surrounding text.',
        difficulty: 'easy'
      },
      {
        id: 'read_3',
        question: 'What is a character in a story?',
        options: ['Setting', 'Person or being in the story', 'Plot', 'Theme'],
        correct: 'Person or being in the story',
        explanation: 'Characters are the people, animals, or beings that take part in a story.',
        difficulty: 'easy'
      },
      {
        id: 'read_4',
        question: 'What is the setting of a story?',
        options: ['Main character', 'When and where story takes place', 'Problem in story', 'Ending'],
        correct: 'When and where story takes place',
        explanation: 'Setting includes the time and place where a story occurs.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'read_med_1',
        question: 'What is an inference?',
        options: ['Direct statement', 'Conclusion based on evidence and reasoning', 'Question', 'Summary'],
        correct: 'Conclusion based on evidence and reasoning',
        explanation: 'An inference is a logical conclusion drawn from evidence in the text.',
        difficulty: 'medium'
      },
      {
        id: 'read_med_2',
        question: 'What is theme in literature?',
        options: ['Main character', 'Setting', 'Central message or lesson', 'Plot summary'],
        correct: 'Central message or lesson',
        explanation: 'Theme is the underlying message or lesson of a literary work.',
        difficulty: 'medium'
      },
      {
        id: 'read_med_3',
        question: 'What is point of view?',
        options: ['Characters opinion', 'Perspective from which story is told', 'Setting description', 'Plot summary'],
        correct: 'Perspective from which story is told',
        explanation: 'Point of view is the perspective from which a narrative is told.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'read_hard_1',
        question: 'What is dramatic irony?',
        options: ['Character knows more than reader', 'Reader knows more than character', 'Funny situation', 'Sad ending'],
        correct: 'Reader knows more than character',
        explanation: 'Dramatic irony occurs when readers know something characters do not.',
        difficulty: 'hard'
      },
      {
        id: 'read_hard_2',
        question: 'What is symbolism in literature?',
        options: ['Direct meaning only', 'Using objects to represent deeper meanings', 'Character description', 'Plot device'],
        correct: 'Using objects to represent deeper meanings',
        explanation: 'Symbolism uses objects, colors, or actions to represent deeper meanings.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'writing_skills',
    name: 'Writing Skills',
    description: 'Essay writing, creative writing, and communication skills',
    questions: [
      // Easy Questions
      {
        id: 'write_1',
        question: 'What is the first step in the writing process?',
        options: ['Editing', 'Prewriting/Planning', 'Publishing', 'Revising'],
        correct: 'Prewriting/Planning',
        explanation: 'Planning and brainstorming ideas comes first in the writing process.',
        difficulty: 'easy'
      },
      {
        id: 'write_2',
        question: 'What is a topic sentence?',
        options: ['Last sentence', 'Sentence that states main idea of paragraph', 'Question sentence', 'Transition sentence'],
        correct: 'Sentence that states main idea of paragraph',
        explanation: 'A topic sentence introduces the main idea of a paragraph.',
        difficulty: 'easy'
      },
      {
        id: 'write_3',
        question: 'What is the purpose of an introduction?',
        options: ['End the essay', 'Grab attention and introduce topic', 'Provide examples', 'Summarize points'],
        correct: 'Grab attention and introduce topic',
        explanation: 'An introduction hooks the reader and presents the main topic.',
        difficulty: 'easy'
      },
      {
        id: 'write_4',
        question: 'What should a conclusion do?',
        options: ['Introduce new ideas', 'Wrap up and restate main points', 'Ask questions only', 'Provide examples'],
        correct: 'Wrap up and restate main points',
        explanation: 'A conclusion summarizes main points and provides closure.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'write_med_1',
        question: 'What is a thesis statement?',
        options: ['First sentence', 'Main argument or central idea of essay', 'Supporting detail', 'Transition phrase'],
        correct: 'Main argument or central idea of essay',
        explanation: 'A thesis statement presents the main argument or central idea.',
        difficulty: 'medium'
      },
      {
        id: 'write_med_2',
        question: 'What are transition words used for?',
        options: ['Ending sentences', 'Connecting ideas smoothly', 'Starting paragraphs only', 'Adding length'],
        correct: 'Connecting ideas smoothly',
        explanation: 'Transition words help connect ideas and improve flow.',
        difficulty: 'medium'
      },
      {
        id: 'write_med_3',
        question: 'What is peer review?',
        options: ['Self-editing', 'Having others review your writing', 'Final draft', 'Publishing'],
        correct: 'Having others review your writing',
        explanation: 'Peer review involves getting feedback from classmates or colleagues.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'write_hard_1',
        question: 'What is voice in writing?',
        options: ['Volume of speech', 'Authors unique style and personality', 'Character dialogue', 'Rhyme scheme'],
        correct: 'Authors unique style and personality',
        explanation: 'Voice reflects the author\'s unique style, tone, and personality.',
        difficulty: 'hard'
      },
      {
        id: 'write_hard_2',
        question: 'What is the difference between revising and editing?',
        options: ['No difference', 'Revising focuses on content, editing on mechanics', 'Editing comes first', 'Both focus on spelling'],
        correct: 'Revising focuses on content, editing on mechanics',
        explanation: 'Revising improves content and organization; editing fixes grammar and mechanics.',
        difficulty: 'hard'
      }
    ]
  },
  // Add Grade 12 chapters
  ...grade12EnglishChapters
];
