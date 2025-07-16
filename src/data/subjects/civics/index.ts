import { Chapter } from '../../types';
import { grade12CivicsChapters } from './grade12/index';

export const civicsChapters: Chapter[] = [
  ...grade12CivicsChapters,

  {
    id: 'civ-11-human-rights',
    name: 'Grade 11: Human Rights and Social Justice',
    description: 'Universal human rights, equality, and social justice principles',
    questions: [
      // Easy Questions
      {
        id: 'g11_rights_easy_1',
        question: 'What are human rights?',
        options: ['Government privileges', 'Basic rights inherent to all humans', 'Earned benefits', 'Legal contracts'],
        correct: 'Basic rights inherent to all humans',
        explanation: 'Human rights are basic rights and freedoms that belong to every person from birth.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_2',
        question: 'What is the Universal Declaration of Human Rights?',
        options: ['National law', 'International document on human rights', 'Religious text', 'Trade agreement'],
        correct: 'International document on human rights',
        explanation: 'The Universal Declaration of Human Rights is an international document adopted by the UN in 1948.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_3',
        question: 'What is equality?',
        options: ['Everyone is identical', 'Equal treatment and opportunities', 'Same income for all', 'Same job for everyone'],
        correct: 'Equal treatment and opportunities',
        explanation: 'Equality means equal treatment and opportunities regardless of differences.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_4',
        question: 'What is discrimination?',
        options: ['Fair treatment', 'Unfair treatment based on characteristics', 'Equal opportunities', 'Legal process'],
        correct: 'Unfair treatment based on characteristics',
        explanation: 'Discrimination is unfair treatment of people based on characteristics like race, gender, or religion.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_5',
        question: 'What is freedom of religion?',
        options: ['No religion allowed', 'Right to practice any religion or none', 'Only one religion', 'Government chooses religion'],
        correct: 'Right to practice any religion or none',
        explanation: 'Freedom of religion is the right to practice any religion or no religion at all.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_rights_med_1',
        question: 'What are the three generations of human rights?',
        options: ['Past, present, future', 'Civil/political, economic/social, collective', 'Local, national, international', 'Individual, group, society'],
        correct: 'Civil/political, economic/social, collective',
        explanation: 'The three generations are: civil/political rights, economic/social/cultural rights, and collective rights.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_2',
        question: 'What is the difference between civil and political rights?',
        options: ['No difference', 'Civil: individual freedoms, Political: participation rights', 'Only age differs', 'Only gender differs'],
        correct: 'Civil: individual freedoms, Political: participation rights',
        explanation: 'Civil rights protect individual freedoms; political rights relate to participation in government.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_3',
        question: 'What is social justice?',
        options: ['Court system', 'Fair distribution of resources and opportunities', 'Police work', 'Legal profession'],
        correct: 'Fair distribution of resources and opportunities',
        explanation: 'Social justice is about fair distribution of wealth, opportunities, and privileges in society.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_rights_hard_1',
        question: 'What is the difference between positive and negative rights?',
        options: ['Good vs bad rights', 'Rights requiring action vs rights requiring restraint', 'Old vs new rights', 'Legal vs moral rights'],
        correct: 'Rights requiring action vs rights requiring restraint',
        explanation: 'Positive rights require action to fulfill; negative rights require restraint from interference.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_2',
        question: 'What is cultural relativism in human rights?',
        options: ['All cultures same', 'Rights interpreted differently across cultures', 'Only Western rights valid', 'No cultural differences'],
        correct: 'Rights interpreted differently across cultures',
        explanation: 'Cultural relativism suggests that human rights should be understood within cultural contexts.',
        difficulty: 'hard'
      }
    ]
  }
];