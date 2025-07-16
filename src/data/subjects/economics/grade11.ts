import { Chapter } from '../../types';

export const grade11EconomicsChapters: Chapter[] = [
  {
    id: 'economics-11-1',
    name: 'Theory of Consumer Behavior and Demand',
    description: 'Understanding how consumers make decisions and factors affecting demand',
    questions: [
      {
        id: 'economics-11-1-1',
        question: 'What is the law of demand?',
        options: ['Price and quantity demanded move in same direction', 'Price and quantity demanded move in opposite directions', 'Price has no effect on quantity demanded', 'Demand is always constant'],
        correct: 'Price and quantity demanded move in opposite directions',
        explanation: 'The law of demand states that as price increases, quantity demanded decreases, and vice versa.',
        difficulty: 'easy',
        topic: 'Demand Theory'
      },
      {
        id: 'economics-11-1-2',
        question: 'Which factor would shift the demand curve to the right?',
        options: ['Decrease in consumer income', 'Increase in consumer income', 'Increase in price', 'Decrease in price'],
        correct: 'Increase in consumer income',
        explanation: 'For normal goods, an increase in consumer income shifts demand curve to the right.',
        difficulty: 'medium',
        topic: 'Demand Shifts'
      },
      {
        id: 'economics-11-1-3',
        question: 'What does marginal utility represent?',
        options: ['Total satisfaction from consumption', 'Additional satisfaction from one more unit', 'Average satisfaction per unit', 'Minimum satisfaction required'],
        correct: 'Additional satisfaction from one more unit',
        explanation: 'Marginal utility is the additional satisfaction gained from consuming one more unit of a good.',
        difficulty: 'medium',
        topic: 'Utility Theory'
      }
    ]
  },
  {
    id: 'economics-11-2',
    name: 'Market Structure and the Decision of Firms',
    description: 'Analyzing different market structures and firm behavior',
    questions: [
      {
        id: 'economics-11-2-1',
        question: 'Perfect competition is characterized by:',
        options: ['Few sellers', 'Differentiated products', 'Many sellers, identical products', 'One seller only'],
        correct: 'Many sellers, identical products',
        explanation: 'Perfect competition has many sellers offering identical products with no barriers to entry.',
        difficulty: 'easy',
        topic: 'Market Structures'
      },
      {
        id: 'economics-11-2-2',
        question: 'In a monopoly, the firm is:',
        options: ['Price taker', 'Price maker', 'Has no control over price', 'Sells at marginal cost'],
        correct: 'Price maker',
        explanation: 'A monopolist has market power and can influence price by controlling output.',
        difficulty: 'medium',
        topic: 'Monopoly'
      },
      {
        id: 'economics-11-2-3',
        question: 'What is the profit-maximizing condition for all firms?',
        options: ['MR = MC', 'TR = TC', 'AR = AC', 'P = ATC'],
        correct: 'MR = MC',
        explanation: 'Firms maximize profit where marginal revenue equals marginal cost.',
        difficulty: 'hard',
        topic: 'Profit Maximization'
      }
    ]
  },
  {
    id: 'economics-11-3',
    name: 'National Income Accounting',
    description: 'Measuring and analyzing a country\'s economic performance',
    questions: [
      {
        id: 'economics-11-3-1',
        question: 'GDP stands for:',
        options: ['Gross Domestic Product', 'General Domestic Production', 'Government Development Program', 'Global Distribution Process'],
        correct: 'Gross Domestic Product',
        explanation: 'GDP measures the total value of goods and services produced within a country.',
        difficulty: 'easy',
        topic: 'GDP Concepts'
      },
      {
        id: 'economics-11-3-2',
        question: 'Which is NOT included in GDP calculation?',
        options: ['Consumer spending', 'Government purchases', 'Transfer payments', 'Business investment'],
        correct: 'Transfer payments',
        explanation: 'Transfer payments like welfare are not included as they don\'t represent current production.',
        difficulty: 'medium',
        topic: 'GDP Components'
      },
      {
        id: 'economics-11-3-3',
        question: 'Real GDP is adjusted for:',
        options: ['Population', 'Inflation', 'Exchange rates', 'Unemployment'],
        correct: 'Inflation',
        explanation: 'Real GDP removes the effects of inflation to show actual changes in production.',
        difficulty: 'medium',
        topic: 'Real vs Nominal GDP'
      }
    ]
  },
  {
    id: 'economics-11-4',
    name: 'Consumption, Saving and Investment',
    description: 'Understanding the relationship between income, consumption, and savings',
    questions: [
      {
        id: 'economics-11-4-1',
        question: 'The marginal propensity to consume (MPC) is:',
        options: ['Total consumption/Total income', 'Change in consumption/Change in income', 'Average consumption per person', 'Minimum consumption required'],
        correct: 'Change in consumption/Change in income',
        explanation: 'MPC measures how much consumption changes when income changes by one unit.',
        difficulty: 'medium',
        topic: 'Consumption Theory'
      },
      {
        id: 'economics-11-4-2',
        question: 'If MPC = 0.8, what is the MPS (marginal propensity to save)?',
        options: ['0.8', '0.2', '1.0', '0.4'],
        correct: '0.2',
        explanation: 'Since MPC + MPS = 1, if MPC = 0.8, then MPS = 1 - 0.8 = 0.2',
        difficulty: 'easy',
        topic: 'Saving Theory'
      },
      {
        id: 'economics-11-4-3',
        question: 'Investment is primarily determined by:',
        options: ['Consumer preferences', 'Interest rates and expected returns', 'Government spending', 'Population growth'],
        correct: 'Interest rates and expected returns',
        explanation: 'Businesses invest based on the cost of borrowing (interest rates) and expected profitability.',
        difficulty: 'medium',
        topic: 'Investment Theory'
      }
    ]
  },
  {
    id: 'economics-11-5',
    name: 'Trade and Finance',
    description: 'International trade, exchange rates, and financial markets',
    questions: [
      {
        id: 'economics-11-5-1',
        question: 'Comparative advantage means:',
        options: ['Being best at everything', 'Having lower opportunity cost', 'Having more resources', 'Being geographically closer'],
        correct: 'Having lower opportunity cost',
        explanation: 'Comparative advantage exists when a country can produce a good at a lower opportunity cost.',
        difficulty: 'medium',
        topic: 'Trade Theory'
      },
      {
        id: 'economics-11-5-2',
        question: 'A trade deficit occurs when:',
        options: ['Exports exceed imports', 'Imports exceed exports', 'Exports equal imports', 'There is no trade'],
        correct: 'Imports exceed exports',
        explanation: 'A trade deficit means a country imports more goods and services than it exports.',
        difficulty: 'easy',
        topic: 'Trade Balance'
      },
      {
        id: 'economics-11-5-3',
        question: 'Exchange rate appreciation means:',
        options: ['Currency becomes stronger', 'Currency becomes weaker', 'Trade increases', 'Inflation rises'],
        correct: 'Currency becomes stronger',
        explanation: 'Currency appreciation means it can buy more of another currency than before.',
        difficulty: 'medium',
        topic: 'Exchange Rates'
      }
    ]
  },
  {
    id: 'economics-11-6',
    name: 'Economic Development',
    description: 'Understanding economic growth and development strategies',
    questions: [
      {
        id: 'economics-11-6-1',
        question: 'Economic development differs from economic growth in that it includes:',
        options: ['Only GDP increase', 'Welfare and quality of life improvements', 'Population growth', 'Resource extraction'],
        correct: 'Welfare and quality of life improvements',
        explanation: 'Development encompasses not just growth but also improvements in living standards.',
        difficulty: 'medium',
        topic: 'Development vs Growth'
      },
      {
        id: 'economics-11-6-2',
        question: 'Human Development Index (HDI) measures:',
        options: ['Only income', 'Income, health, and education', 'Population size', 'Natural resources'],
        correct: 'Income, health, and education',
        explanation: 'HDI combines measures of income, life expectancy, and education levels.',
        difficulty: 'easy',
        topic: 'Development Indicators'
      },
      {
        id: 'economics-11-6-3',
        question: 'Sustainable development emphasizes:',
        options: ['Maximum short-term growth', 'Balancing present and future needs', 'Resource exploitation', 'Industrial expansion only'],
        correct: 'Balancing present and future needs',
        explanation: 'Sustainable development meets present needs without compromising future generations.',
        difficulty: 'medium',
        topic: 'Sustainability'
      }
    ]
  },
  {
    id: 'economics-11-7',
    name: 'Main Sectors, Sectorial Policies and Strategies of Ethiopia',
    description: 'Ethiopian economic sectors and development policies',
    questions: [
      {
        id: 'economics-11-7-1',
        question: 'Which sector dominates Ethiopia\'s economy?',
        options: ['Manufacturing', 'Services', 'Agriculture', 'Mining'],
        correct: 'Agriculture',
        explanation: 'Agriculture is the largest sector in Ethiopia\'s economy, employing most of the population.',
        difficulty: 'easy',
        topic: 'Ethiopian Economy'
      },
      {
        id: 'economics-11-7-2',
        question: 'Coffee is important to Ethiopia because it is:',
        options: ['Mainly for domestic consumption', 'A major export crop', 'Used in manufacturing', 'A government monopoly'],
        correct: 'A major export crop',
        explanation: 'Coffee is one of Ethiopia\'s most important export commodities, earning foreign exchange.',
        difficulty: 'easy',
        topic: 'Ethiopian Exports'
      },
      {
        id: 'economics-11-7-3',
        question: 'Ethiopia\'s Growth and Transformation Plan aims to:',
        options: ['Reduce agriculture', 'Become a middle-income country', 'Focus only on services', 'Eliminate industry'],
        correct: 'Become a middle-income country',
        explanation: 'The GTP aims to transform Ethiopia into a middle-income country through structural transformation.',
        difficulty: 'medium',
        topic: 'Development Strategy'
      }
    ]
  }
];