
import { Chapter } from '../../../types';

export const unit3Equality: Chapter = {
  id: 'grade12_equality',
  name: 'Grade 12: Equality',
  description: 'Ethiopian peoples\' struggle against oppression, conflict of interests, affirmative action, unity in diversity',
  questions: [
    // Easy Questions (6)
    {
      id: 'eq_easy_1',
      question: 'What is equality?',
      options: ['Everyone is identical', 'Equal treatment and opportunities', 'Same income for all', 'No differences allowed'],
      correct: 'Equal treatment and opportunities',
      explanation: 'Equality means equal treatment and opportunities regardless of differences.',
      difficulty: 'easy'
    },
    {
      id: 'eq_easy_2',
      question: 'What is discrimination?',
      options: ['Fair treatment', 'Unfair treatment based on characteristics', 'Equal opportunities', 'Legal process'],
      correct: 'Unfair treatment based on characteristics',
      explanation: 'Discrimination involves unfair treatment based on race, gender, religion, or other characteristics.',
      difficulty: 'easy'
    },
    {
      id: 'eq_easy_3',
      question: 'What does "unity in diversity" mean?',
      options: ['Everyone must be the same', 'Different groups living together harmoniously', 'Separation of groups', 'Conflict between groups'],
      correct: 'Different groups living together harmoniously',
      explanation: 'Unity in diversity means different ethnic, religious, and cultural groups coexisting peacefully.',
      difficulty: 'easy'
    },
    {
      id: 'eq_easy_4',
      question: 'What is affirmative action?',
      options: ['Negative discrimination', 'Policies to help disadvantaged groups', 'Punishment system', 'Military action'],
      correct: 'Policies to help disadvantaged groups',
      explanation: 'Affirmative action involves policies designed to help historically disadvantaged groups.',
      difficulty: 'easy'
    },
    {
      id: 'eq_easy_5',
      question: 'What is social justice?',
      options: ['Court system', 'Fair distribution of resources and opportunities', 'Police work', 'Legal profession'],
      correct: 'Fair distribution of resources and opportunities',
      explanation: 'Social justice involves fair distribution of resources, opportunities, and privileges in society.',
      difficulty: 'easy'
    },
    {
      id: 'eq_easy_6',
      question: 'What is a conflict of interest?',
      options: ['Agreement between parties', 'When personal interest conflicts with public duty', 'Legal dispute', 'Political disagreement'],
      correct: 'When personal interest conflicts with public duty',
      explanation: 'Conflict of interest occurs when personal interests interfere with professional or public responsibilities.',
      difficulty: 'easy'
    },

    // Medium Questions (6)
    {
      id: 'eq_med_1',
      question: 'How did Ethiopian peoples historically resist oppression?',
      options: ['No resistance occurred', 'Through various forms of resistance including armed struggle', 'Only peaceful resistance', 'Complete submission'],
      correct: 'Through various forms of resistance including armed struggle',
      explanation: 'Ethiopian peoples used various forms of resistance against different forms of oppression throughout history.',
      difficulty: 'medium'
    },
    {
      id: 'eq_med_2',
      question: 'What is the difference between equality of opportunity and equality of outcome?',
      options: ['No difference', 'Opportunity: same chances, Outcome: same results', 'Only opportunity matters', 'Only outcome matters'],
      correct: 'Opportunity: same chances, Outcome: same results',
      explanation: 'Equality of opportunity provides same chances; equality of outcome aims for same results.',
      difficulty: 'medium'
    },
    {
      id: 'eq_med_3',
      question: 'How does Ethiopia manage ethnic diversity?',
      options: ['Suppression of diversity', 'Through ethnic federalism and cultural recognition', 'Forced assimilation', 'Complete separation'],
      correct: 'Through ethnic federalism and cultural recognition',
      explanation: 'Ethiopia uses ethnic federalism to accommodate and celebrate its diverse ethnic groups.',
      difficulty: 'medium'
    },
    {
      id: 'eq_med_4',
      question: 'What is institutional discrimination?',
      options: ['Individual prejudice', 'Discriminatory practices embedded in institutions', 'Legal equality', 'Personal bias'],
      correct: 'Discriminatory practices embedded in institutions',
      explanation: 'Institutional discrimination refers to discriminatory practices built into institutions and systems.',
      difficulty: 'medium'
    },
    {
      id: 'eq_med_5',
      question: 'What is the purpose of affirmative action in Ethiopia?',
      options: ['Create inequality', 'Address historical disadvantages and promote inclusion', 'Favor one group', 'Maintain status quo'],
      correct: 'Address historical disadvantages and promote inclusion',
      explanation: 'Ethiopia\'s affirmative action policies aim to address past inequalities and promote inclusion.',
      difficulty: 'medium'
    },
    {
      id: 'eq_med_6',
      question: 'How can conflicts of interest be managed?',
      options: ['Ignore them', 'Through transparency, disclosure, and ethical guidelines', 'Accept them as normal', 'Hide them'],
      correct: 'Through transparency, disclosure, and ethical guidelines',
      explanation: 'Conflicts of interest are managed through transparency, disclosure, and clear ethical guidelines.',
      difficulty: 'medium'
    },

    // Hard Questions (6)
    {
      id: 'eq_hard_1',
      question: 'What is intersectionality in understanding inequality?',
      options: ['Single identity factor', 'Multiple identities create overlapping discrimination', 'No connection between identities', 'Only one identity matters'],
      correct: 'Multiple identities create overlapping discrimination',
      explanation: 'Intersectionality examines how multiple identities (race, gender, class) create overlapping forms of discrimination.',
      difficulty: 'hard'
    },
    {
      id: 'eq_hard_2',
      question: 'What is the tension between group rights and individual rights?',
      options: ['No tension exists', 'Balancing collective identity with individual freedom', 'Groups always win', 'Individuals always win'],
      correct: 'Balancing collective identity with individual freedom',
      explanation: 'Democratic societies must balance recognition of group identities with protection of individual rights.',
      difficulty: 'hard'
    },
    {
      id: 'eq_hard_3',
      question: 'What is structural violence?',
      options: ['Physical violence only', 'Systematic inequalities that harm people', 'No violence exists', 'Only direct violence matters'],
      correct: 'Systematic inequalities that harm people',
      explanation: 'Structural violence refers to systematic inequalities and injustices that harm people indirectly.',
      difficulty: 'hard'
    },
    {
      id: 'eq_hard_4',
      question: 'What is the concept of substantive equality vs formal equality?',
      options: ['No difference', 'Substantive: equal outcomes, Formal: equal treatment', 'Only formal matters', 'Only substantive matters'],
      correct: 'Substantive: equal outcomes, Formal: equal treatment',
      explanation: 'Formal equality means equal treatment; substantive equality focuses on achieving equal outcomes.',
      difficulty: 'hard'
    },
    {
      id: 'eq_hard_5',
      question: 'What is the challenge of managing diversity in federal systems?',
      options: ['No challenges', 'Balancing autonomy with unity', 'Complete separation', 'Total assimilation'],
      correct: 'Balancing autonomy with unity',
      explanation: 'Federal systems must balance giving groups autonomy while maintaining national unity.',
      difficulty: 'hard'
    },
    {
      id: 'eq_hard_6',
      question: 'What is distributive justice?',
      options: ['Random distribution', 'Fair allocation of resources and opportunities', 'Equal distribution only', 'No distribution needed'],
      correct: 'Fair allocation of resources and opportunities',
      explanation: 'Distributive justice concerns the fair allocation of resources, opportunities, and burdens in society.',
      difficulty: 'hard'
    }
  ]
};
