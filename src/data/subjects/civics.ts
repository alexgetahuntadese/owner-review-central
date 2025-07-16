import { Chapter } from '../types';
import { grade12CivicsChapters } from './civics/grade12/index';

// Civics & Ethical Education subject chapters organized by grade
export const civicsChapters: Chapter[] = [
  // Grade 12 chapters (11 units following Ethiopian Ministry of Education curriculum)
  ...grade12CivicsChapters,

  {
    id: 'government_systems',
    name: 'Government Systems and Democracy',
    description: 'Types of government, democratic principles, and civic participation',
    questions: [
      // Easy Questions (10)
      {
        id: 'gov_easy_1',
        question: 'What is government?',
        options: ['Private organization', 'System that rules and makes decisions for society', 'Business entity', 'Social club'],
        correct: 'System that rules and makes decisions for society',
        explanation: 'Government is the system by which a state or community is governed and makes decisions.',
        difficulty: 'easy'
      },
      {
        id: 'gov_easy_2',
        question: 'What is democracy?',
        options: ['Rule by one person', 'Government by the people', 'Military rule', 'Religious rule'],
        correct: 'Government by the people',
        explanation: 'Democracy is a form of government where power is vested in the people.',
        difficulty: 'easy'
      },
      {
        id: 'gov_easy_3',
        question: 'What is a constitution?',
        options: ['Law book', 'Supreme law of a country', 'Government building', 'Political party'],
        correct: 'Supreme law of a country',
        explanation: 'A constitution is the supreme law that establishes the framework of government.',
        difficulty: 'easy'
      },
      {
        id: 'gov_easy_4',
        question: 'What are civil rights?',
        options: ['Government powers', 'Rights guaranteed to citizens', 'Military duties', 'Tax obligations'],
        correct: 'Rights guaranteed to citizens',
        explanation: 'Civil rights are the rights guaranteed to citizens by the constitution and laws.',
        difficulty: 'easy'
      },
      {
        id: 'gov_easy_5',
        question: 'What is citizenship?',
        options: ['Living in a city', 'Legal status as member of a country', 'Job title', 'Age requirement'],
        correct: 'Legal status as member of a country',
        explanation: 'Citizenship is the legal status of being a recognized member of a country.',
        difficulty: 'easy'
      },
      {
        id: 'gov_easy_6',
        question: 'What is voting?',
        options: ['Making laws', 'Choosing representatives or policies', 'Paying taxes', 'Military service'],
        correct: 'Choosing representatives or policies',
        explanation: 'Voting is the process of choosing representatives or deciding on policies.',
        difficulty: 'easy'
      },
      {
        id: 'gov_easy_7',
        question: 'What is the rule of law?',
        options: ['Military control', 'Everyone is subject to law', 'Religious rule', 'No laws exist'],
        correct: 'Everyone is subject to law',
        explanation: 'Rule of law means that everyone, including government officials, is subject to the law.',
        difficulty: 'easy'
      },
      {
        id: 'gov_easy_8',
        question: 'What is a republic?',
        options: ['Monarchy', 'Government where people elect representatives', 'Dictatorship', 'Anarchy'],
        correct: 'Government where people elect representatives',
        explanation: 'A republic is a form of government where people elect representatives to govern.',
        difficulty: 'easy'
      },
      {
        id: 'gov_easy_9',
        question: 'What is an election?',
        options: ['Making laws', 'Process of choosing leaders', 'Court hearing', 'Military action'],
        correct: 'Process of choosing leaders',
        explanation: 'An election is the formal process of choosing political leaders or deciding issues.',
        difficulty: 'easy'
      },
      {
        id: 'gov_easy_10',
        question: 'What is civic duty?',
        options: ['Government job', 'Responsibility of citizens', 'Military rank', 'Court case'],
        correct: 'Responsibility of citizens',
        explanation: 'Civic duty refers to the responsibilities that citizens have to their community and country.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'gov_med_1',
        question: 'What is separation of powers?',
        options: ['One branch controls all', 'Division of government into branches', 'Military control', 'No government'],
        correct: 'Division of government into branches',
        explanation: 'Separation of powers divides government into legislative, executive, and judicial branches.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_2',
        question: 'What is checks and balances?',
        options: ['Banking system', 'System preventing abuse of power', 'Accounting method', 'Military strategy'],
        correct: 'System preventing abuse of power',
        explanation: 'Checks and balances ensure that no single branch of government becomes too powerful.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_3',
        question: 'What is federalism?',
        options: ['Central government only', 'Division of power between national and state governments', 'No government', 'Military rule'],
        correct: 'Division of power between national and state governments',
        explanation: 'Federalism divides power between national and regional (state/provincial) governments.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_4',
        question: 'What is due process?',
        options: ['Quick justice', 'Fair legal procedures', 'No trial needed', 'Immediate punishment'],
        correct: 'Fair legal procedures',
        explanation: 'Due process ensures fair treatment through the legal system according to established procedures.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_5',
        question: 'What is freedom of speech?',
        options: ['No restrictions on speech', 'Right to express opinions within legal limits', 'Only government can speak', 'Silent protests only'],
        correct: 'Right to express opinions within legal limits',
        explanation: 'Freedom of speech is the right to express opinions and ideas without government censorship, within legal limits.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_6',
        question: 'What is the difference between direct and representative democracy?',
        options: ['No difference', 'Direct: people vote directly, Representative: elect officials', 'Only size differs', 'Only location differs'],
        correct: 'Direct: people vote directly, Representative: elect officials',
        explanation: 'Direct democracy has citizens vote directly on issues; representative democracy has elected officials make decisions.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_7',
        question: 'What is political participation?',
        options: ['Only voting', 'All ways citizens engage in politics', 'Government job only', 'Military service'],
        correct: 'All ways citizens engage in politics',
        explanation: 'Political participation includes voting, campaigning, petitioning, and other civic activities.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_8',
        question: 'What is majority rule with minority rights?',
        options: ['Majority decides everything', 'Majority decides but minority rights protected', 'Minority controls all', 'No decisions made'],
        correct: 'Majority decides but minority rights protected',
        explanation: 'Democratic principle where the majority makes decisions while protecting minority rights.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_9',
        question: 'What is civil disobedience?',
        options: ['Following all laws', 'Peaceful resistance to unjust laws', 'Violent protest', 'Government action'],
        correct: 'Peaceful resistance to unjust laws',
        explanation: 'Civil disobedience is the peaceful refusal to obey laws considered unjust.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_10',
        question: 'What is the purpose of political parties?',
        options: ['Divide people', 'Organize citizens with similar views', 'Control government', 'Make money'],
        correct: 'Organize citizens with similar views',
        explanation: 'Political parties organize citizens with similar political views to participate in government.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'gov_hard_1',
        question: 'What is judicial review?',
        options: ['Court administration', 'Courts can declare laws unconstitutional', 'Reviewing judges', 'Court scheduling'],
        correct: 'Courts can declare laws unconstitutional',
        explanation: 'Judicial review is the power of courts to review and potentially overturn laws and government actions.',
        difficulty: 'hard'
      },
      {
        id: 'gov_hard_2',
        question: 'What is the social contract theory?',
        options: ['Employment contract', 'Agreement between government and citizens', 'Business agreement', 'Marriage contract'],
        correct: 'Agreement between government and citizens',
        explanation: 'Social contract theory suggests government authority comes from an agreement with the people.',
        difficulty: 'hard'
      },
      {
        id: 'gov_hard_3',
        question: 'What is pluralism in politics?',
        options: ['One group controls', 'Multiple groups compete for influence', 'No groups exist', 'Government controls all'],
        correct: 'Multiple groups compete for influence',
        explanation: 'Pluralism is the theory that multiple groups compete for political influence in democracy.',
        difficulty: 'hard'
      },
      {
        id: 'gov_hard_4',
        question: 'What is the difference between civil rights and civil liberties?',
        options: ['No difference', 'Rights: equal treatment, Liberties: freedom from government', 'Only legal difference', 'Only historical difference'],
        correct: 'Rights: equal treatment, Liberties: freedom from government',
        explanation: 'Civil rights ensure equal treatment; civil liberties protect individual freedoms from government interference.',
        difficulty: 'hard'
      },
      {
        id: 'gov_hard_5',
        question: 'What is constitutional monarchy?',
        options: ['Absolute monarchy', 'Monarch with limited constitutional powers', 'No monarchy', 'Elected monarchy'],
        correct: 'Monarch with limited constitutional powers',
        explanation: 'Constitutional monarchy has a monarch whose powers are limited by a constitution.',
        difficulty: 'hard'
      },
      {
        id: 'gov_hard_6',
        question: 'What is the concept of popular sovereignty?',
        options: ['Government rules people', 'People are source of government authority', 'Monarchy rules', 'Military rules'],
        correct: 'People are source of government authority',
        explanation: 'Popular sovereignty means that government authority ultimately comes from the people.',
        difficulty: 'hard'
      },
      {
        id: 'gov_hard_7',
        question: 'What is bicameralism?',
        options: ['One legislative chamber', 'Two legislative chambers', 'Three chambers', 'No legislature'],
        correct: 'Two legislative chambers',
        explanation: 'Bicameralism refers to a legislature divided into two separate chambers or houses.',
        difficulty: 'hard'
      },
      {
        id: 'gov_hard_8',
        question: 'What is the difference between unitary and federal systems?',
        options: ['No difference', 'Unitary: central control, Federal: shared power', 'Only size differs', 'Only age differs'],
        correct: 'Unitary: central control, Federal: shared power',
        explanation: 'Unitary systems centralize power; federal systems share power between levels of government.',
        difficulty: 'hard'
      },
      {
        id: 'gov_hard_9',
        question: 'What is gerrymandering?',
        options: ['Fair redistricting', 'Manipulating electoral boundaries for advantage', 'Census taking', 'Voter registration'],
        correct: 'Manipulating electoral boundaries for advantage',
        explanation: 'Gerrymandering is drawing electoral district boundaries to give political advantage to particular groups.',
        difficulty: 'hard'
      },
      {
        id: 'gov_hard_10',
        question: 'What is the concept of legitimacy in government?',
        options: ['Legal documents', 'Rightful authority to govern', 'Age of government', 'Size of government'],
        correct: 'Rightful authority to govern',
        explanation: 'Political legitimacy refers to the rightful authority of government to exercise power.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_human_rights',
    name: 'Grade 11: Human Rights and Social Justice',
    description: 'Universal human rights, equality, and social justice principles',
    questions: [
      // Easy Questions (10)
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
      {
        id: 'g11_rights_easy_6',
        question: 'What is the right to education?',
        options: ['Only for wealthy', 'Access to learning opportunities for all', 'Optional privilege', 'Government decision'],
        correct: 'Access to learning opportunities for all',
        explanation: 'The right to education means everyone should have access to learning opportunities.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_7',
        question: 'What is social justice?',
        options: ['Court system', 'Fair distribution of resources and opportunities', 'Police work', 'Legal profession'],
        correct: 'Fair distribution of resources and opportunities',
        explanation: 'Social justice is about fair distribution of wealth, opportunities, and privileges in society.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_8',
        question: 'What is poverty?',
        options: ['Luxury lifestyle', 'Lack of basic necessities', 'Middle class status', 'Wealth accumulation'],
        correct: 'Lack of basic necessities',
        explanation: 'Poverty is the condition of lacking basic human needs like food, shelter, and clothing.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_9',
        question: 'What is gender equality?',
        options: ['Men only rights', 'Equal rights regardless of gender', 'Women only rights', 'No gender differences'],
        correct: 'Equal rights regardless of gender',
        explanation: 'Gender equality means equal rights, responsibilities, and opportunities for all genders.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_10',
        question: 'What is the right to life?',
        options: ['Government privilege', 'Fundamental right to exist', 'Earned benefit', 'Legal document'],
        correct: 'Fundamental right to exist',
        explanation: 'The right to life is the fundamental right of every human being to live.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
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
        options: ['No difference', 'Civil: individual freedoms, Political: participation in government', 'Only legal difference', 'Only historical difference'],
        correct: 'Civil: individual freedoms, Political: participation in government',
        explanation: 'Civil rights protect individual freedoms; political rights enable participation in government.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_3',
        question: 'What are economic, social, and cultural rights?',
        options: ['Only economic rights', 'Rights to adequate living standards and cultural participation', 'Political rights only', 'Legal procedures'],
        correct: 'Rights to adequate living standards and cultural participation',
        explanation: 'These rights include adequate housing, healthcare, education, and cultural participation.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_4',
        question: 'What is affirmative action?',
        options: ['Negative discrimination', 'Policies to help disadvantaged groups', 'Punishment system', 'Legal requirement'],
        correct: 'Policies to help disadvantaged groups',
        explanation: 'Affirmative action consists of policies designed to help historically disadvantaged groups.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_5',
        question: 'What is institutional racism?',
        options: ['Individual prejudice', 'Systemic discrimination in institutions', 'Legal equality', 'Personal beliefs'],
        correct: 'Systemic discrimination in institutions',
        explanation: 'Institutional racism refers to discriminatory practices embedded in institutions and systems.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_6',
        question: 'What is the concept of dignity?',
        options: ['Social status', 'Inherent worth of every person', 'Wealth level', 'Job position'],
        correct: 'Inherent worth of every person',
        explanation: 'Human dignity is the inherent worth and value of every person.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_7',
        question: 'What is cultural relativism in human rights?',
        options: ['Universal standards', 'Rights vary by culture', 'No cultural differences', 'Legal uniformity'],
        correct: 'Rights vary by culture',
        explanation: 'Cultural relativism argues that human rights should be understood within cultural contexts.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_8',
        question: 'What is the responsibility to protect doctrine?',
        options: ['Individual protection', 'International duty to prevent mass atrocities', 'National security only', 'Military strategy'],
        correct: 'International duty to prevent mass atrocities',
        explanation: 'The responsibility to protect is the international community\'s duty to prevent mass atrocities.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_9',
        question: 'What is intersectionality?',
        options: ['Road crossing', 'Overlapping social identities create discrimination', 'Mathematical concept', 'Geographic term'],
        correct: 'Overlapping social identities create discrimination',
        explanation: 'Intersectionality examines how overlapping social identities contribute to discrimination.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_10',
        question: 'What is positive vs negative rights?',
        options: ['Good vs bad rights', 'Right to receive vs right to be left alone', 'Legal vs illegal', 'New vs old'],
        correct: 'Right to receive vs right to be left alone',
        explanation: 'Positive rights require action from others; negative rights require non-interference.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g11_rights_hard_1',
        question: 'What is the principle of universality in human rights?',
        options: ['Rights for some people', 'Rights apply to all humans everywhere', 'Rights for citizens only', 'Rights vary by country'],
        correct: 'Rights apply to all humans everywhere',
        explanation: 'Universality means human rights apply to all people regardless of nationality, race, or other factors.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_2',
        question: 'What is the principle of indivisibility of human rights?',
        options: ['Rights can be separated', 'All rights are interconnected and equally important', 'Some rights are more important', 'Rights work independently'],
        correct: 'All rights are interconnected and equally important',
        explanation: 'Indivisibility means all human rights are interconnected and equally important.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_3',
        question: 'What is the concept of progressive realization?',
        options: ['Immediate implementation', 'Gradual achievement of rights over time', 'Regression in rights', 'No implementation needed'],
        correct: 'Gradual achievement of rights over time',
        explanation: 'Progressive realization recognizes that some rights may be achieved gradually due to resource constraints.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_4',
        question: 'What is the margin of appreciation doctrine?',
        options: ['Universal standards only', 'National discretion in implementing rights', 'No national differences', 'International control only'],
        correct: 'National discretion in implementing rights',
        explanation: 'Margin of appreciation allows states some discretion in how they implement human rights.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_5',
        question: 'What is derogation in human rights law?',
        options: ['Strengthening rights', 'Temporary suspension of certain rights', 'Creating new rights', 'Permanent elimination'],
        correct: 'Temporary suspension of certain rights',
        explanation: 'Derogation allows temporary suspension of certain rights during emergencies under strict conditions.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_6',
        question: 'What are non-derogable rights?',
        options: ['All rights', 'Rights that cannot be suspended even in emergencies', 'Rights that can always be suspended', 'No such rights exist'],
        correct: 'Rights that cannot be suspended even in emergencies',
        explanation: 'Non-derogable rights like the right to life cannot be suspended even during emergencies.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_7',
        question: 'What is horizontal effect of human rights?',
        options: ['Government obligations only', 'Rights apply between private parties', 'No effect', 'Vertical relationships only'],
        correct: 'Rights apply between private parties',
        explanation: 'Horizontal effect means human rights can apply to relationships between private parties, not just state-citizen.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_8',
        question: 'What is the concept of extraterritorial obligations?',
        options: ['Domestic obligations only', 'State duties beyond national borders', 'No international duties', 'Only treaty obligations'],
        correct: 'State duties beyond national borders',
        explanation: 'Extraterritorial obligations require states to respect human rights beyond their borders.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_9',
        question: 'What is transitional justice?',
        options: ['Regular justice system', 'Addressing past abuses during political transition', 'Future planning only', 'Legal education'],
        correct: 'Addressing past abuses during political transition',
        explanation: 'Transitional justice addresses past human rights abuses during transitions to democracy.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_10',
        question: 'What is the concept of state responsibility in human rights?',
        options: ['No state duties', 'Duty to respect, protect, and fulfill rights', 'Only domestic duties', 'Only international duties'],
        correct: 'Duty to respect, protect, and fulfill rights',
        explanation: 'States have three levels of obligation: respect (not violate), protect (prevent violations), and fulfill (ensure access).',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_ethiopian_government',
    name: 'Grade 12: Ethiopian Government and Constitution',
    description: 'Ethiopian federal system, constitution, and governance',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_eth_easy_1',
        question: 'What type of government system does Ethiopia have?',
        options: ['Unitary', 'Federal', 'Confederate', 'Monarchy'],
        correct: 'Federal',
        explanation: 'Ethiopia has a federal system of government with regional states.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_easy_2',
        question: 'When was the current Ethiopian Constitution adopted?',
        options: ['1991', '1995', '2000', '2005'],
        correct: '1995',
        explanation: 'The Federal Democratic Republic of Ethiopia Constitution was adopted in 1995.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_easy_3',
        question: 'How many regional states does Ethiopia have?',
        options: ['9', '10', '11', '12'],
        correct: '10',
        explanation: 'Ethiopia currently has 10 regional states plus two chartered cities.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_easy_4',
        question: 'What is the federal capital of Ethiopia?',
        options: ['Bahir Dar', 'Mekelle', 'Addis Ababa', 'Hawassa'],
        correct: 'Addis Ababa',
        explanation: 'Addis Ababa serves as the federal capital and is a chartered city.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_easy_5',
        question: 'What principle is the Ethiopian federation based on?',
        options: ['Religious diversity', 'Ethnic federalism', 'Geographic regions', 'Economic zones'],
        correct: 'Ethnic federalism',
        explanation: 'Ethiopian federalism is primarily organized along ethnic lines.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_easy_6',
        question: 'What are the two houses of the Ethiopian Parliament?',
        options: ['Senate and Assembly', 'House of Peoples\' Representatives and House of Federation', 'Upper and Lower House', 'Congress and Senate'],
        correct: 'House of Peoples\' Representatives and House of Federation',
        explanation: 'Ethiopia\'s parliament consists of the House of Peoples\' Representatives and House of Federation.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_easy_7',
        question: 'Who is the head of government in Ethiopia?',
        options: ['President', 'Prime Minister', 'King', 'Chancellor'],
        correct: 'Prime Minister',
        explanation: 'The Prime Minister is the head of government in Ethiopia\'s parliamentary system.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_easy_8',
        question: 'Who is the head of state in Ethiopia?',
        options: ['Prime Minister', 'President', 'King', 'Speaker'],
        correct: 'President',
        explanation: 'The President serves as the head of state in Ethiopia.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_easy_9',
        question: 'What is the term length for members of the House of Peoples\' Representatives?',
        options: ['3 years', '4 years', '5 years', '6 years'],
        correct: '5 years',
        explanation: 'Members of the House of Peoples\' Representatives serve 5-year terms.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_easy_10',
        question: 'What is the minimum age to vote in Ethiopia?',
        options: ['16', '18', '21', '25'],
        correct: '18',
        explanation: 'Ethiopian citizens can vote starting at age 18.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_eth_med_1',
        question: 'What is the principle of self-determination in the Ethiopian Constitution?',
        options: ['Economic independence', 'Right of nations and peoples to self-rule', 'Individual freedom', 'Religious autonomy'],
        correct: 'Right of nations and peoples to self-rule',
        explanation: 'Article 39 guarantees the right of nations, nationalities, and peoples to self-determination.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_med_2',
        question: 'What is the House of Federation responsible for?',
        options: ['Making all laws', 'Constitutional interpretation and federal issues', 'Economic policy only', 'Foreign relations only'],
        correct: 'Constitutional interpretation and federal issues',
        explanation: 'The House of Federation deals with constitutional interpretation and issues between states.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_med_3',
        question: 'How are members of the House of Federation selected?',
        options: ['Direct election', 'By state councils or direct election', 'Appointment only', 'Hereditary'],
        correct: 'By state councils or direct election',
        explanation: 'House of Federation members are elected by state councils or directly by the people.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_med_4',
        question: 'What is the maximum number of terms a Prime Minister can serve?',
        options: ['1 term', '2 terms', 'No limit', '3 terms'],
        correct: 'No limit',
        explanation: 'There is no constitutional limit on the number of terms a Prime Minister can serve.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_med_5',
        question: 'What is the principle of fiscal federalism in Ethiopia?',
        options: ['Central control of all finances', 'Shared revenue and expenditure responsibilities', 'States have no financial powers', 'Only federal taxes'],
        correct: 'Shared revenue and expenditure responsibilities',
        explanation: 'Fiscal federalism involves sharing revenue sources and expenditure responsibilities between levels.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_med_6',
        question: 'What is the role of the Constitutional Inquiry Board?',
        options: ['Making laws', 'Investigating constitutional issues', 'Electing officials', 'Foreign policy'],
        correct: 'Investigating constitutional issues',
        explanation: 'The Constitutional Inquiry Board investigates constitutional disputes before they go to the House of Federation.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_med_7',
        question: 'What is the principle of cooperative federalism?',
        options: ['Competition between levels', 'Collaboration between federal and state governments', 'Federal dominance', 'State independence'],
        correct: 'Collaboration between federal and state governments',
        explanation: 'Cooperative federalism emphasizes collaboration and shared responsibilities between government levels.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_med_8',
        question: 'What are concurrent powers in Ethiopian federalism?',
        options: ['Federal powers only', 'Powers shared by federal and state governments', 'State powers only', 'No shared powers'],
        correct: 'Powers shared by federal and state governments',
        explanation: 'Concurrent powers can be exercised by both federal and state governments.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_med_9',
        question: 'What is the election system used for the House of Peoples\' Representatives?',
        options: ['Proportional representation', 'First-past-the-post', 'Mixed system', 'Preferential voting'],
        correct: 'First-past-the-post',
        explanation: 'Ethiopia uses a first-past-the-post electoral system for the House of Peoples\' Representatives.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_med_10',
        question: 'What is the role of the Council of Ministers?',
        options: ['Legislative body', 'Executive body implementing policy', 'Judicial body', 'Electoral body'],
        correct: 'Executive body implementing policy',
        explanation: 'The Council of Ministers is the highest executive organ responsible for implementing policies.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_eth_hard_1',
        question: 'What is asymmetric federalism in the Ethiopian context?',
        options: ['All states have equal powers', 'Different powers and arrangements for different states', 'No federalism', 'Central control only'],
        correct: 'Different powers and arrangements for different states',
        explanation: 'Asymmetric federalism allows different states to have different powers and arrangements based on their needs.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_hard_2',
        question: 'What is the secession clause in the Ethiopian Constitution?',
        options: ['Secession is forbidden', 'Right to secede under specific conditions', 'Automatic secession', 'No mention of secession'],
        correct: 'Right to secede under specific conditions',
        explanation: 'Article 39 allows secession if certain procedural and substantive conditions are met.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_hard_3',
        question: 'What is the land ownership system in Ethiopia according to the Constitution?',
        options: ['Private ownership', 'State and peoples\' ownership', 'Foreign ownership allowed', 'No land ownership'],
        correct: 'State and peoples\' ownership',
        explanation: 'The Constitution states that land is owned by the state and the peoples of Ethiopia.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_hard_4',
        question: 'What is the principle of multi-party democracy in Ethiopia?',
        options: ['One-party system', 'Competitive political parties', 'No political parties', 'Two-party system only'],
        correct: 'Competitive political parties',
        explanation: 'The Constitution establishes a multi-party democratic system with competitive political parties.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_hard_5',
        question: 'What is the procedure for constitutional amendment?',
        options: ['Simple majority', 'Two-thirds majority in both houses plus state approval', 'Presidential decree', 'Referendum only'],
        correct: 'Two-thirds majority in both houses plus state approval',
        explanation: 'Constitutional amendments require two-thirds majority in both houses and approval from two-thirds of state councils.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_hard_6',
        question: 'What is the concept of developmental state in Ethiopian governance?',
        options: ['Minimal government role', 'Active state role in economic development', 'No economic role', 'Private sector only'],
        correct: 'Active state role in economic development',
        explanation: 'The developmental state model emphasizes active government intervention in economic development.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_hard_7',
        question: 'What is the role of traditional institutions in Ethiopian governance?',
        options: ['No recognition', 'Recognized and supported within constitutional framework', 'Replace modern institutions', 'Only ceremonial'],
        correct: 'Recognized and supported within constitutional framework',
        explanation: 'Traditional institutions are recognized and their role in dispute resolution and governance is supported.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_hard_8',
        question: 'What is the principle of judicial independence in Ethiopia?',
        options: ['Courts controlled by executive', 'Independent judiciary within constitutional limits', 'No judiciary', 'Legislative control'],
        correct: 'Independent judiciary within constitutional limits',
        explanation: 'The Constitution establishes judicial independence while defining the courts\' role within the federal system.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_hard_9',
        question: 'What is the intergovernmental relations mechanism in Ethiopia?',
        options: ['No coordination', 'Formal mechanisms for federal-state coordination', 'Informal only', 'Competition only'],
        correct: 'Formal mechanisms for federal-state coordination',
        explanation: 'Ethiopia has established formal mechanisms for coordination between federal and state governments.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_hard_10',
        question: 'What is the constitutional protection of minority rights in Ethiopia?',
        options: ['No protection', 'Group rights and individual rights protection', 'Majority rule only', 'No minorities recognized'],
        correct: 'Group rights and individual rights protection',
        explanation: 'The Constitution protects both individual human rights and collective rights of nations and peoples.',
        difficulty: 'hard'
      }
    ]
  }
];
