
import { Chapter } from '../../../types';

export const unit4Justice: Chapter = {
  id: 'grade12_justice',
  name: 'Grade 12: Justice',
  description: 'Equity of benefits and burdens, judiciary system, crime and justice, taxation justice',
  questions: [
    // Easy Questions (6)
    {
      id: 'just_easy_1',
      question: 'What is justice?',
      options: ['Revenge', 'Fairness and moral rightness', 'Punishment only', 'Ignoring wrongs'],
      correct: 'Fairness and moral rightness',
      explanation: 'Justice involves fairness, moral rightness, and giving people what they deserve.',
      difficulty: 'easy'
    },
    {
      id: 'just_easy_2',
      question: 'What is the role of the judiciary?',
      options: ['Make laws', 'Interpret and apply laws', 'Execute laws', 'Ignore laws'],
      correct: 'Interpret and apply laws',
      explanation: 'The judiciary interprets laws and applies them to resolve disputes and administer justice.',
      difficulty: 'easy'
    },
    {
      id: 'just_easy_3',
      question: 'What is a fair tax system?',
      options: ['Everyone pays the same amount', 'Payment according to ability and benefit', 'Only rich people pay', 'No taxes needed'],
      correct: 'Payment according to ability and benefit',
      explanation: 'A fair tax system considers people\'s ability to pay and the benefits they receive.',
      difficulty: 'easy'
    },
    {
      id: 'just_easy_4',
      question: 'What is crime?',
      options: ['Legal behavior', 'Violation of law that harms society', 'Personal disagreement', 'Government action'],
      correct: 'Violation of law that harms society',
      explanation: 'Crime is behavior that violates laws and is considered harmful to society.',
      difficulty: 'easy'
    },
    {
      id: 'just_easy_5',
      question: 'What is punishment meant to achieve?',
      options: ['Revenge only', 'Deterrence, rehabilitation, and justice', 'Entertainment', 'Profit'],
      correct: 'Deterrence, rehabilitation, and justice',
      explanation: 'Punishment aims to deter crime, rehabilitate offenders, and achieve justice.',
      difficulty: 'easy'
    },
    {
      id: 'just_easy_6',
      question: 'What are civic benefits and burdens?',
      options: ['Only benefits exist', 'Advantages and responsibilities of citizenship', 'Only burdens exist', 'Individual choices only'],
      correct: 'Advantages and responsibilities of citizenship',
      explanation: 'Citizenship involves both benefits (rights, services) and burdens (taxes, duties).',
      difficulty: 'easy'
    },

    // Medium Questions (6)
    {
      id: 'just_med_1',
      question: 'What is distributive justice?',
      options: ['Random distribution', 'Fair allocation of resources and opportunities', 'Equal distribution only', 'No distribution'],
      correct: 'Fair allocation of resources and opportunities',
      explanation: 'Distributive justice concerns how society fairly distributes resources, opportunities, and burdens.',
      difficulty: 'medium'
    },
    {
      id: 'just_med_2',
      question: 'What is judicial independence and why is it important?',
      options: ['Courts controlled by government', 'Courts free from political interference to ensure fair decisions', 'Courts above all law', 'Courts without oversight'],
      correct: 'Courts free from political interference to ensure fair decisions',
      explanation: 'Judicial independence ensures courts can make fair decisions without political pressure.',
      difficulty: 'medium'
    },
    {
      id: 'just_med_3',
      question: 'What is progressive taxation?',
      options: ['Everyone pays the same rate', 'Higher earners pay higher tax rates', 'Lower earners pay more', 'No taxation'],
      correct: 'Higher earners pay higher tax rates',
      explanation: 'Progressive taxation means tax rates increase as income increases, based on ability to pay.',
      difficulty: 'medium'
    },
    {
      id: 'just_med_4',
      question: 'What is restorative justice?',
      options: ['Punishment only', 'Healing relationships and repairing harm', 'Ignoring victims', 'Revenge'],
      correct: 'Healing relationships and repairing harm',
      explanation: 'Restorative justice focuses on healing and repairing the harm caused by crime.',
      difficulty: 'medium'
    },
    {
      id: 'just_med_5',
      question: 'What is the principle of proportionality in justice?',
      options: ['All crimes get same punishment', 'Punishment should fit the crime', 'No punishment needed', 'Maximum punishment always'],
      correct: 'Punishment should fit the crime',
      explanation: 'Proportionality means punishment should be appropriate to the seriousness of the crime.',
      difficulty: 'medium'
    },
    {
      id: 'just_med_6',
      question: 'What is social burden sharing?',
      options: ['Only government responsibility', 'Fair distribution of social costs among citizens', 'Individual responsibility only', 'No sharing needed'],
      correct: 'Fair distribution of social costs among citizens',
      explanation: 'Social burden sharing involves fairly distributing the costs of public services and social welfare.',
      difficulty: 'medium'
    },

    // Hard Questions (6)
    {
      id: 'just_hard_1',
      question: 'What is the tension between retributive and restorative justice?',
      options: ['No tension exists', 'Punishment vs healing and rehabilitation approaches', 'They are the same', 'Neither is needed'],
      correct: 'Punishment vs healing and rehabilitation approaches',
      explanation: 'Retributive justice focuses on punishment; restorative justice emphasizes healing and rehabilitation.',
      difficulty: 'hard'
    },
    {
      id: 'just_hard_2',
      question: 'What is corrective justice?',
      options: ['No correction needed', 'Restoring balance after wrongdoing', 'Only punishment', 'Ignoring wrongs'],
      correct: 'Restoring balance after wrongdoing',
      explanation: 'Corrective justice aims to restore the balance disrupted by wrongdoing, often through compensation.',
      difficulty: 'hard'
    },
    {
      id: 'just_hard_3',
      question: 'What is the concept of tax justice in developing countries?',
      options: ['No taxes needed', 'Balancing revenue needs with fairness and development goals', 'Only the wealthy pay', 'Foreign aid replaces taxes'],
      correct: 'Balancing revenue needs with fairness and development goals',
      explanation: 'Tax justice in developing countries involves balancing government revenue needs with fairness and development.',
      difficulty: 'hard'
    },
    {
      id: 'just_hard_4',
      question: 'What is transitional justice?',
      options: ['Regular justice system', 'Addressing past violations during political transitions', 'No justice needed', 'Military justice'],
      correct: 'Addressing past violations during political transitions',
      explanation: 'Transitional justice deals with past human rights violations during transitions to democracy.',
      difficulty: 'hard'
    },
    {
      id: 'just_hard_5',
      question: 'What is the concept of environmental justice?',
      options: ['No environmental concerns', 'Fair distribution of environmental benefits and burdens', 'Only economic development', 'Ignoring environment'],
      correct: 'Fair distribution of environmental benefits and burdens',
      explanation: 'Environmental justice ensures fair distribution of environmental benefits and protection from environmental harms.',
      difficulty: 'hard'
    },
    {
      id: 'just_hard_6',
      question: 'What is procedural justice vs substantive justice?',
      options: ['No difference', 'Procedural: fair process, Substantive: fair outcome', 'Only procedure matters', 'Only outcome matters'],
      correct: 'Procedural: fair process, Substantive: fair outcome',
      explanation: 'Procedural justice focuses on fair processes; substantive justice concerns fair outcomes.',
      difficulty: 'hard'
    }
  ]
};
