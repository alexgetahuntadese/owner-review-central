
import { Chapter } from '../types';

export const nationalLanguageChapters: Chapter[] = [
  {
    id: 'language_basics',
    name: 'Language Fundamentals',
    description: 'Basic grammar, vocabulary, and communication skills',
    questions: [
      // Easy Questions
      {
        id: 'lang_basic_1',
        question: 'What is a sentence?',
        options: ['Single word', 'Group of words expressing complete thought', 'Paragraph', 'Page of text'],
        correct: 'Group of words expressing complete thought',
        explanation: 'A sentence is a group of words that expresses a complete thought or idea.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_2',
        question: 'What is a noun?',
        options: ['Action word', 'Person, place, or thing', 'Describing word', 'Connecting word'],
        correct: 'Person, place, or thing',
        explanation: 'A noun is a word that names a person, place, thing, or idea.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_3',
        question: 'What is a verb?',
        options: ['Naming word', 'Action or state word', 'Describing word', 'Connecting word'],
        correct: 'Action or state word',
        explanation: 'A verb is a word that describes an action, occurrence, or state of being.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_4',
        question: 'What is communication?',
        options: ['Speaking only', 'Exchange of information and ideas', 'Writing only', 'Reading only'],
        correct: 'Exchange of information and ideas',
        explanation: 'Communication is the process of exchanging information, ideas, thoughts, and feelings.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_5',
        question: 'What is vocabulary?',
        options: ['Grammar rules', 'Words known and used by person', 'Pronunciation guide', 'Writing style'],
        correct: 'Words known and used by person',
        explanation: 'Vocabulary refers to the body of words known and used by a person or in a language.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'lang_basic_med_1',
        question: 'What is the difference between formal and informal language?',
        options: ['No difference', 'Formal: official situations, Informal: casual situations', 'Only vocabulary differs', 'Only pronunciation differs'],
        correct: 'Formal: official situations, Informal: casual situations',
        explanation: 'Formal language is used in official or professional contexts; informal language in casual, everyday situations.',
        difficulty: 'medium'
      },
      {
        id: 'lang_basic_med_2',
        question: 'What is context in language?',
        options: ['Dictionary meaning', 'Circumstances that form setting for understanding', 'Grammar rules', 'Spelling patterns'],
        correct: 'Circumstances that form setting for understanding',
        explanation: 'Context refers to the circumstances or setting that help determine the meaning of words or statements.',
        difficulty: 'medium'
      },
      {
        id: 'lang_basic_med_3',
        question: 'What is active listening?',
        options: ['Hearing sounds', 'Fully concentrating and understanding speaker', 'Speaking loudly', 'Taking notes only'],
        correct: 'Fully concentrating and understanding speaker',
        explanation: 'Active listening involves fully concentrating, understanding, and responding thoughtfully to the speaker.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'lang_basic_hard_1',
        question: 'What is discourse analysis?',
        options: ['Grammar study', 'Study of language use in context', 'Vocabulary research', 'Pronunciation guide'],
        correct: 'Study of language use in context',
        explanation: 'Discourse analysis examines how language is used in real-world contexts and social situations.',
        difficulty: 'hard'
      },
      {
        id: 'lang_basic_hard_2',
        question: 'What is register in language?',
        options: ['Dictionary entry', 'Level of formality in language use', 'Grammar book', 'Speaking volume'],
        correct: 'Level of formality in language use',
        explanation: 'Register refers to the level of formality and style of language appropriate for different situations.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_literature_analysis',
    name: 'Grade 11: Literature and Cultural Studies',
    description: 'Literary analysis, cultural texts, and critical thinking',
    questions: [
      // Easy Questions
      {
        id: 'g11_lit_easy_1',
        question: 'What is literature?',
        options: ['Only novels', 'Written works of artistic value', 'Only poetry', 'Only plays'],
        correct: 'Written works of artistic value',
        explanation: 'Literature consists of written works that have artistic, cultural, or intellectual value.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_2',
        question: 'What is a theme in literature?',
        options: ['Title of work', 'Central message or meaning', 'Main character', 'Setting description'],
        correct: 'Central message or meaning',
        explanation: 'A theme is the central message, lesson, or meaning that runs through a literary work.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_3',
        question: 'What is characterization?',
        options: ['Plot summary', 'How author presents characters', 'Setting description', 'Book length'],
        correct: 'How author presents characters',
        explanation: 'Characterization is the method by which an author presents and develops characters.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_4',
        question: 'What is setting in literature?',
        options: ['Main character', 'Time and place of story', 'Central conflict', 'Author\'s style'],
        correct: 'Time and place of story',
        explanation: 'Setting refers to the time and place in which the events of a story occur.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_5',
        question: 'What is conflict in a story?',
        options: ['Happy ending', 'Struggle between opposing forces', 'Character description', 'Setting change'],
        correct: 'Struggle between opposing forces',
        explanation: 'Conflict is the struggle between opposing forces that drives the plot of a story.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_lit_med_1',
        question: 'What is symbolism in literature?',
        options: ['Direct statement', 'Using objects to represent ideas', 'Character names', 'Plot structure'],
        correct: 'Using objects to represent ideas',
        explanation: 'Symbolism uses objects, actions, or characters to represent deeper meanings or ideas.',
        difficulty: 'medium'
      },
      {
        id: 'g11_lit_med_2',
        question: 'What is irony?',
        options: ['Funny situation', 'Contrast between expectation and reality', 'Rhyming pattern', 'Character trait'],
        correct: 'Contrast between expectation and reality',
        explanation: 'Irony involves a contrast between what is expected and what actually occurs.',
        difficulty: 'medium'
      },
      {
        id: 'g11_lit_med_3',
        question: 'What is point of view in literature?',
        options: ['Author\'s opinion', 'Perspective from which story is told', 'Character\'s age', 'Book genre'],
        correct: 'Perspective from which story is told',
        explanation: 'Point of view refers to the perspective or angle from which a story is narrated.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_lit_hard_1',
        question: 'What is intertextuality?',
        options: ['Text length', 'Relationship between texts and references', 'Writing style', 'Character development'],
        correct: 'Relationship between texts and references',
        explanation: 'Intertextuality refers to the way texts relate to and reference other texts, creating layers of meaning.',
        difficulty: 'hard'
      },
      {
        id: 'g11_lit_hard_2',
        question: 'What is postcolonial literature?',
        options: ['Recent writing only', 'Literature responding to colonial experience', 'Historical fiction', 'Travel writing'],
        correct: 'Literature responding to colonial experience',
        explanation: 'Postcolonial literature examines the effects of colonialism and explores cultural identity and resistance.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_advanced_composition',
    name: 'Grade 12: Advanced Writing and Communication',
    description: 'Academic writing, research skills, and presentation techniques',
    questions: [
      // Easy Questions
      {
        id: 'g12_comp_easy_1',
        question: 'What is academic writing?',
        options: ['Creative writing', 'Formal writing for educational purposes', 'Personal diary', 'Text messaging'],
        correct: 'Formal writing for educational purposes',
        explanation: 'Academic writing is formal writing used in educational and scholarly contexts.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_2',
        question: 'What is a thesis statement?',
        options: ['Topic sentence', 'Main argument of paper', 'Conclusion', 'Bibliography'],
        correct: 'Main argument of paper',
        explanation: 'A thesis statement presents the main argument or central claim of an academic paper.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_3',
        question: 'What is research?',
        options: ['Guessing answers', 'Systematic investigation to find information', 'Reading randomly', 'Personal opinion'],
        correct: 'Systematic investigation to find information',
        explanation: 'Research is a systematic investigation designed to discover new information or verify existing knowledge.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_4',
        question: 'What is citation?',
        options: ['Writing style', 'Giving credit to sources', 'Page numbering', 'Font choice'],
        correct: 'Giving credit to sources',
        explanation: 'Citation is the practice of giving credit to sources used in research and writing.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_5',
        question: 'What is a presentation?',
        options: ['Written report', 'Oral delivery of information', 'Reading silently', 'Taking notes'],
        correct: 'Oral delivery of information',
        explanation: 'A presentation is the oral delivery of information to an audience.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_comp_med_1',
        question: 'What is the difference between primary and secondary sources?',
        options: ['No difference', 'Primary: original, Secondary: analysis of primary', 'Only importance differs', 'Only age differs'],
        correct: 'Primary: original, Secondary: analysis of primary',
        explanation: 'Primary sources are original materials; secondary sources analyze or interpret primary sources.',
        difficulty: 'medium'
      },
      {
        id: 'g12_comp_med_2',
        question: 'What is plagiarism?',
        options: ['Original writing', 'Using others\' work without credit', 'Proper citation', 'Research method'],
        correct: 'Using others\' work without credit',
        explanation: 'Plagiarism is using someone else\'s work, ideas, or words without proper attribution.',
        difficulty: 'medium'
      },
      {
        id: 'g12_comp_med_3',
        question: 'What is rhetorical analysis?',
        options: ['Grammar check', 'Examining how texts persuade', 'Spell checking', 'Word counting'],
        correct: 'Examining how texts persuade',
        explanation: 'Rhetorical analysis examines how authors use language and techniques to persuade their audience.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_comp_hard_1',
        question: 'What is the rhetorical triangle?',
        options: ['Three paragraphs', 'Ethos, pathos, logos', 'Introduction, body, conclusion', 'Past, present, future'],
        correct: 'Ethos, pathos, logos',
        explanation: 'The rhetorical triangle consists of ethos (credibility), pathos (emotion), and logos (logic).',
        difficulty: 'hard'
      },
      {
        id: 'g12_comp_hard_2',
        question: 'What is discourse community?',
        options: ['Online forum', 'Group sharing communication practices', 'School club', 'Language class'],
        correct: 'Group sharing communication practices',
        explanation: 'A discourse community is a group of people who share common communication practices, values, and goals.',
        difficulty: 'hard'
      }
    ]
  }
];
