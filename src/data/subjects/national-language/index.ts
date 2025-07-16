import { Chapter } from '../../types';

export const nationalLanguageChapters: Chapter[] = [
  {
    id: 'nl-11-literature-analysis',
    name: 'Grade 11: Literature Analysis and Composition',
    description: 'Advanced reading comprehension, literary analysis, and creative writing',
    questions: [
      // Easy Questions
      {
        id: 'g11_literature_easy_1',
        question: 'What is literature?',
        options: ['Only books', 'Written works of artistic expression', 'Newspapers only', 'Technical manuals'],
        correct: 'Written works of artistic expression',
        explanation: 'Literature refers to written works, especially those considered of superior artistic merit.',
        difficulty: 'easy'
      },
      {
        id: 'g11_literature_easy_2',
        question: 'What is a novel?',
        options: ['Short story', 'Long fictional narrative', 'Poetry collection', 'Play script'],
        correct: 'Long fictional narrative',
        explanation: 'A novel is a long fictional narrative that typically explores human experience.',
        difficulty: 'easy'
      },
      {
        id: 'g11_literature_easy_3',
        question: 'What is poetry?',
        options: ['Long stories', 'Artistic expression using rhythm and language', 'News articles', 'Scientific texts'],
        correct: 'Artistic expression using rhythm and language',
        explanation: 'Poetry is a form of artistic expression that uses rhythmic and aesthetic language.',
        difficulty: 'easy'
      },
      {
        id: 'g11_literature_easy_4',
        question: 'What is a metaphor?',
        options: ['Direct comparison using like or as', 'Implied comparison without using like or as', 'Question asking', 'Statement of fact'],
        correct: 'Implied comparison without using like or as',
        explanation: 'A metaphor is an implied comparison that does not use "like" or "as".',
        difficulty: 'easy'
      },
      {
        id: 'g11_literature_easy_5',
        question: 'What is the main character in a story called?',
        options: ['Antagonist', 'Protagonist', 'Narrator', 'Author'],
        correct: 'Protagonist',
        explanation: 'The protagonist is the main character or central figure in a story.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_literature_med_1',
        question: 'What is the difference between theme and plot?',
        options: ['No difference', 'Theme: central message, Plot: sequence of events', 'Only length differs', 'Only style differs'],
        correct: 'Theme: central message, Plot: sequence of events',
        explanation: 'Theme is the central message or meaning; plot is the sequence of events in a story.',
        difficulty: 'medium'
      },
      {
        id: 'g11_literature_med_2',
        question: 'What is symbolism in literature?',
        options: ['Direct description', 'Using objects to represent deeper meanings', 'Character dialogue', 'Plot development'],
        correct: 'Using objects to represent deeper meanings',
        explanation: 'Symbolism uses objects, colors, or actions to represent ideas or concepts beyond their literal meaning.',
        difficulty: 'medium'
      },
      {
        id: 'g11_literature_med_3',
        question: 'What is irony?',
        options: ['Straightforward statement', 'Contrast between expectation and reality', 'Character description', 'Setting description'],
        correct: 'Contrast between expectation and reality',
        explanation: 'Irony is a literary device that presents a contrast between expectation and reality.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_literature_hard_1',
        question: 'What is stream of consciousness in literature?',
        options: ['Clear narrative structure', 'Continuous flow of character thoughts', 'Dialogue between characters', 'Plot summary'],
        correct: 'Continuous flow of character thoughts',
        explanation: 'Stream of consciousness is a narrative technique that presents a continuous flow of thoughts.',
        difficulty: 'hard'
      },
      {
        id: 'g11_literature_hard_2',
        question: 'What is the difference between allegory and symbolism?',
        options: ['No difference', 'Allegory: extended metaphor, Symbolism: individual symbols', 'Only length differs', 'Only style differs'],
        correct: 'Allegory: extended metaphor, Symbolism: individual symbols',
        explanation: 'An allegory is an extended metaphor throughout a work; symbolism uses individual symbols.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'nl-11-grammar-composition',
    name: 'Grade 11: Advanced Grammar and Composition',
    description: 'Complex grammar structures, essay writing, and language mechanics',
    questions: [
      // Easy Questions
      {
        id: 'g11_grammar_easy_1',
        question: 'What is a noun?',
        options: ['Action word', 'Person, place, thing, or idea', 'Describing word', 'Connecting word'],
        correct: 'Person, place, thing, or idea',
        explanation: 'A noun is a word that names a person, place, thing, or idea.',
        difficulty: 'easy'
      },
      {
        id: 'g11_grammar_easy_2',
        question: 'What is a verb?',
        options: ['Naming word', 'Action or state of being word', 'Describing word', 'Connecting word'],
        correct: 'Action or state of being word',
        explanation: 'A verb expresses an action or a state of being.',
        difficulty: 'easy'
      },
      {
        id: 'g11_grammar_easy_3',
        question: 'What is an adjective?',
        options: ['Action word', 'Naming word', 'Word that describes nouns', 'Connecting word'],
        correct: 'Word that describes nouns',
        explanation: 'An adjective is a word that describes or modifies a noun or pronoun.',
        difficulty: 'easy'
      },
      {
        id: 'g11_grammar_easy_4',
        question: 'What is a sentence?',
        options: ['Single word', 'Complete thought with subject and predicate', 'List of words', 'Question only'],
        correct: 'Complete thought with subject and predicate',
        explanation: 'A sentence is a complete thought that contains a subject and a predicate.',
        difficulty: 'easy'
      },
      {
        id: 'g11_grammar_easy_5',
        question: 'What is punctuation?',
        options: ['Word meanings', 'Marks that clarify meaning in writing', 'Letter sounds', 'Sentence length'],
        correct: 'Marks that clarify meaning in writing',
        explanation: 'Punctuation consists of marks used in writing to clarify meaning and separate ideas.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_grammar_med_1',
        question: 'What is a complex sentence?',
        options: ['One independent clause', 'Independent clause with dependent clause', 'Two independent clauses', 'Fragment only'],
        correct: 'Independent clause with dependent clause',
        explanation: 'A complex sentence contains an independent clause and at least one dependent clause.',
        difficulty: 'medium'
      },
      {
        id: 'g11_grammar_med_2',
        question: 'What is the difference between active and passive voice?',
        options: ['No difference', 'Active: subject does action, Passive: subject receives action', 'Only tense differs', 'Only length differs'],
        correct: 'Active: subject does action, Passive: subject receives action',
        explanation: 'In active voice, the subject performs the action; in passive voice, the subject receives the action.',
        difficulty: 'medium'
      },
      {
        id: 'g11_grammar_med_3',
        question: 'What is a thesis statement?',
        options: ['Any sentence', 'Main argument of an essay', 'Question asked', 'Supporting detail'],
        correct: 'Main argument of an essay',
        explanation: 'A thesis statement presents the main argument or central claim of an essay.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_grammar_hard_1',
        question: 'What is subjunctive mood?',
        options: ['Statement of fact', 'Expression of hypothetical situations', 'Question asking', 'Command giving'],
        correct: 'Expression of hypothetical situations',
        explanation: 'Subjunctive mood expresses hypothetical, doubtful, or contrary-to-fact situations.',
        difficulty: 'hard'
      },
      {
        id: 'g11_grammar_hard_2',
        question: 'What is parallelism in writing?',
        options: ['Writing lines parallel', 'Using similar grammatical structures', 'Writing about parallel topics', 'Comparing two things'],
        correct: 'Using similar grammatical structures',
        explanation: 'Parallelism involves using similar grammatical structures to create balance and rhythm.',
        difficulty: 'hard'
      }
    ]
  }
];