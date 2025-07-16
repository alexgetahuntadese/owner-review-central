
import { Chapter } from '../../../types';

export const unit1DemocraticSystem: Chapter = {
  id: 'grade12_democratic_system',
  name: 'Grade 12: Building a Democratic System',
  description: 'Necessity of democratic system, authority and power, constitutional rights vs obligations, state power distribution in Ethiopia, Ethiopian foreign relations',
  questions: [
    // Easy Questions (10)
    {
      id: 'dem_easy_1',
      question: 'What is democracy?',
      options: ['Rule by one person', 'Rule by the people', 'Rule by the military', 'Rule by the rich'],
      correct: 'Rule by the people',
      explanation: 'Democracy means government by the people, where citizens have the power to choose their leaders.',
      difficulty: 'easy'
    },
    {
      id: 'dem_easy_2',
      question: 'Why is democracy necessary?',
      options: ['It\'s not necessary', 'To protect rights and ensure participation', 'To maintain order only', 'To concentrate power'],
      correct: 'To protect rights and ensure participation',
      explanation: 'Democracy is necessary to protect individual rights and ensure citizen participation in governance.',
      difficulty: 'easy'
    },
    {
      id: 'dem_easy_3',
      question: 'What is the difference between authority and power?',
      options: ['No difference', 'Authority is legitimate, power can be illegitimate', 'Power is always good', 'Authority is always bad'],
      correct: 'Authority is legitimate, power can be illegitimate',
      explanation: 'Authority is legitimate power that people accept, while power can exist without legitimacy.',
      difficulty: 'easy'
    },
    {
      id: 'dem_easy_4',
      question: 'What are constitutional rights?',
      options: ['Government privileges', 'Fundamental freedoms guaranteed by constitution', 'Optional benefits', 'Legal procedures'],
      correct: 'Fundamental freedoms guaranteed by constitution',
      explanation: 'Constitutional rights are fundamental freedoms and protections guaranteed by the constitution.',
      difficulty: 'easy'
    },
    {
      id: 'dem_easy_5',
      question: 'What are constitutional obligations?',
      options: ['Optional duties', 'Duties citizens must fulfill', 'Government responsibilities only', 'International laws'],
      correct: 'Duties citizens must fulfill',
      explanation: 'Constitutional obligations are duties that citizens must fulfill as part of their citizenship.',
      difficulty: 'easy'
    },
    {
      id: 'dem_easy_6',
      question: 'What is federalism?',
      options: ['Centralized government', 'Division of power between federal and regional governments', 'Local government only', 'International government'],
      correct: 'Division of power between federal and regional governments',
      explanation: 'Federalism divides governmental power between federal and regional/state levels.',
      difficulty: 'easy'
    },
    {
      id: 'dem_easy_7',
      question: 'What is Ethiopia\'s system of government?',
      options: ['Unitary system', 'Federal democratic republic', 'Monarchy', 'Military government'],
      correct: 'Federal democratic republic',
      explanation: 'Ethiopia operates as a federal democratic republic with multiple levels of government.',
      difficulty: 'easy'
    },
    {
      id: 'dem_easy_8',
      question: 'What is foreign policy?',
      options: ['Domestic law', 'A country\'s strategy for dealing with other nations', 'Local government policy', 'Economic policy only'],
      correct: 'A country\'s strategy for dealing with other nations',
      explanation: 'Foreign policy is a country\'s strategy and approach for dealing with other nations.',
      difficulty: 'easy'
    },
    {
      id: 'dem_easy_9',
      question: 'What is sovereignty?',
      options: ['Dependence on others', 'Supreme authority within a territory', 'International control', 'Regional authority'],
      correct: 'Supreme authority within a territory',
      explanation: 'Sovereignty is the supreme authority of a state within its territory.',
      difficulty: 'easy'
    },
    {
      id: 'dem_easy_10',
      question: 'What is the purpose of elections in democracy?',
      options: ['Entertainment', 'To choose representatives and leaders', 'To waste money', 'To create confusion'],
      correct: 'To choose representatives and leaders',
      explanation: 'Elections allow citizens to choose their representatives and leaders in a democratic system.',
      difficulty: 'easy'
    },

    // Medium Questions (10)
    {
      id: 'dem_med_1',
      question: 'What is the relationship between legitimacy and authority?',
      options: ['No relationship', 'Legitimacy gives authority its moral foundation', 'Authority creates legitimacy', 'They oppose each other'],
      correct: 'Legitimacy gives authority its moral foundation',
      explanation: 'Legitimacy provides the moral and legal foundation that makes authority acceptable to citizens.',
      difficulty: 'medium'
    },
    {
      id: 'dem_med_2',
      question: 'What is the principle of separation of powers?',
      options: ['Concentrating all power', 'Dividing government power among different branches', 'Eliminating government power', 'Sharing power with other countries'],
      correct: 'Dividing government power among different branches',
      explanation: 'Separation of powers divides government authority among legislative, executive, and judicial branches.',
      difficulty: 'medium'
    },
    {
      id: 'dem_med_3',
      question: 'What is the tension between individual rights and collective responsibilities?',
      options: ['No tension exists', 'Balancing personal freedom with social duties', 'Individual rights always win', 'Collective duties always win'],
      correct: 'Balancing personal freedom with social duties',
      explanation: 'Democratic societies must balance protecting individual rights with fulfilling collective responsibilities.',
      difficulty: 'medium'
    },
    {
      id: 'dem_med_4',
      question: 'What is Ethiopia\'s approach to ethnic diversity?',
      options: ['Suppression', 'Ethnic federalism and self-determination', 'Assimilation policy', 'Separation'],
      correct: 'Ethnic federalism and self-determination',
      explanation: 'Ethiopia uses ethnic federalism to accommodate its diverse ethnic groups through self-determination.',
      difficulty: 'medium'
    },
    {
      id: 'dem_med_5',
      question: 'What is the role of civil society in democracy?',
      options: ['No role', 'Bridging citizens and government, advocacy', 'Replacing government', 'Creating conflict'],
      correct: 'Bridging citizens and government, advocacy',
      explanation: 'Civil society organizations bridge citizens and government while advocating for various causes.',
      difficulty: 'medium'
    },
    {
      id: 'dem_med_6',
      question: 'What is Ethiopia\'s foreign policy principle?',
      options: ['Isolation', 'Non-alignment and good neighborliness', 'Military expansion', 'Economic dominance'],
      correct: 'Non-alignment and good neighborliness',
      explanation: 'Ethiopia follows principles of non-alignment and maintaining good relations with neighbors.',
      difficulty: 'medium'
    },
    {
      id: 'dem_med_7',
      question: 'What is democratic consolidation?',
      options: ['Destroying democracy', 'Strengthening and stabilizing democratic institutions', 'Military rule', 'One-party system'],
      correct: 'Strengthening and stabilizing democratic institutions',
      explanation: 'Democratic consolidation involves strengthening and stabilizing democratic institutions and practices.',
      difficulty: 'medium'
    },
    {
      id: 'dem_med_8',
      question: 'What is the concept of popular sovereignty?',
      options: ['Government sovereignty', 'Ultimate political authority rests with the people', 'International sovereignty', 'Elite sovereignty'],
      correct: 'Ultimate political authority rests with the people',
      explanation: 'Popular sovereignty means the ultimate political authority comes from the people.',
      difficulty: 'medium'
    },
    {
      id: 'dem_med_9',
      question: 'What is constitutional supremacy?',
      options: ['Government is supreme', 'Constitution is the highest law', 'Military is supreme', 'International law is supreme'],
      correct: 'Constitution is the highest law',
      explanation: 'Constitutional supremacy means the constitution is the highest law that all other laws must conform to.',
      difficulty: 'medium'
    },
    {
      id: 'dem_med_10',
      question: 'What is diplomatic immunity?',
      options: ['No protection', 'Legal protection for diplomats in foreign countries', 'Military protection', 'Economic protection'],
      correct: 'Legal protection for diplomats in foreign countries',
      explanation: 'Diplomatic immunity provides legal protection for diplomats serving in foreign countries.',
      difficulty: 'medium'
    },

    // Hard Questions (10)
    {
      id: 'dem_hard_1',
      question: 'What is the paradox of democracy?',
      options: ['No paradox exists', 'Majority rule vs minority rights protection', 'Democracy always works', 'Democracy never works'],
      correct: 'Majority rule vs minority rights protection',
      explanation: 'The democratic paradox involves balancing majority rule with protection of minority rights.',
      difficulty: 'hard'
    },
    {
      id: 'dem_hard_2',
      question: 'What is asymmetric federalism?',
      options: ['Equal powers for all states', 'Different powers and arrangements for different regions', 'No federalism', 'International federalism'],
      correct: 'Different powers and arrangements for different regions',
      explanation: 'Asymmetric federalism allows different regions to have different powers and arrangements within the federal system.',
      difficulty: 'hard'
    },
    {
      id: 'dem_hard_3',
      question: 'What is the concept of constituent power?',
      options: ['Government power', 'People\'s power to create and change constitution', 'Military power', 'Economic power'],
      correct: 'People\'s power to create and change constitution',
      explanation: 'Constituent power is the fundamental power of the people to create and change their constitution.',
      difficulty: 'hard'
    },
    {
      id: 'dem_hard_4',
      question: 'What is soft power in international relations?',
      options: ['Military force', 'Influence through attraction and persuasion', 'Economic sanctions', 'Hard power only'],
      correct: 'Influence through attraction and persuasion',
      explanation: 'Soft power is the ability to influence others through attraction, culture, and persuasion rather than force.',
      difficulty: 'hard'
    },
    {
      id: 'dem_hard_5',
      question: 'What is the principle of subsidiarity in federalism?',
      options: ['Central control', 'Decisions made at lowest appropriate level', 'International control', 'No decision-making'],
      correct: 'Decisions made at lowest appropriate level',
      explanation: 'Subsidiarity means decisions should be made at the lowest level of government that can effectively handle them.',
      difficulty: 'hard'
    },
    {
      id: 'dem_hard_6',
      question: 'What is deliberative democracy?',
      options: ['Quick decisions', 'Democratic process emphasizing discussion and deliberation', 'No discussion', 'Elite decision-making'],
      correct: 'Democratic process emphasizing discussion and deliberation',
      explanation: 'Deliberative democracy emphasizes informed discussion and deliberation in democratic decision-making.',
      difficulty: 'hard'
    },
    {
      id: 'dem_hard_7',
      question: 'What is the concept of responsible sovereignty?',
      options: ['Unlimited sovereignty', 'Sovereignty with obligations to international community', 'No sovereignty', 'Regional sovereignty only'],
      correct: 'Sovereignty with obligations to international community',
      explanation: 'Responsible sovereignty recognizes that state sovereignty comes with obligations to the international community.',
      difficulty: 'hard'
    },
    {
      id: 'dem_hard_8',
      question: 'What is competitive authoritarianism?',
      options: ['Full democracy', 'System with elections but unfair competition', 'No elections', 'Perfect competition'],
      correct: 'System with elections but unfair competition',
      explanation: 'Competitive authoritarianism has elections but the playing field is heavily tilted in favor of incumbents.',
      difficulty: 'hard'
    },
    {
      id: 'dem_hard_9',
      question: 'What is the concept of democratic deficit?',
      options: ['Too much democracy', 'Lack of democratic accountability in institutions', 'Perfect democracy', 'No democracy needed'],
      correct: 'Lack of democratic accountability in institutions',
      explanation: 'Democratic deficit refers to institutions that lack sufficient democratic accountability and transparency.',
      difficulty: 'hard'
    },
    {
      id: 'dem_hard_10',
      question: 'What is track-two diplomacy?',
      options: ['Official government diplomacy', 'Informal diplomatic efforts by non-state actors', 'Military diplomacy', 'Economic diplomacy only'],
      correct: 'Informal diplomatic efforts by non-state actors',
      explanation: 'Track-two diplomacy involves informal diplomatic efforts by non-governmental actors to resolve conflicts.',
      difficulty: 'hard'
    }
  ]
};
