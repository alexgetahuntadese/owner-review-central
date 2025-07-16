import { Chapter } from '../../types';

export const grade11GeneralBusinessChapters: Chapter[] = [
  {
    id: 'business-11-1',
    name: 'The Nature of Business',
    description: 'Understanding business fundamentals, types, and environment',
    questions: [
      {
        id: 'business-11-1-1',
        question: 'What is the primary purpose of a business?',
        options: ['To employ people', 'To make profit', 'To serve government', 'To reduce competition'],
        correct: 'To make profit',
        explanation: 'While businesses serve many purposes, their primary objective is typically to generate profit.',
        difficulty: 'easy',
        topic: 'Business Purpose'
      },
      {
        id: 'business-11-1-2',
        question: 'Which is an example of a service business?',
        options: ['Car manufacturing', 'Restaurant', 'Mining company', 'Agricultural farm'],
        correct: 'Restaurant',
        explanation: 'Restaurants provide services (food preparation and serving) rather than manufacturing products.',
        difficulty: 'easy',
        topic: 'Types of Business'
      },
      {
        id: 'business-11-1-3',
        question: 'The business environment includes:',
        options: ['Only competitors', 'Only customers', 'Economic, social, and political factors', 'Only suppliers'],
        correct: 'Economic, social, and political factors',
        explanation: 'Business environment encompasses all external factors that affect business operations.',
        difficulty: 'medium',
        topic: 'Business Environment'
      }
    ]
  },
  {
    id: 'business-11-2',
    name: 'Type and Forms of Business Ownership',
    description: 'Different business structures and ownership models',
    questions: [
      {
        id: 'business-11-2-1',
        question: 'In a sole proprietorship, the owner has:',
        options: ['Limited liability', 'Unlimited liability', 'No liability', 'Shared liability'],
        correct: 'Unlimited liability',
        explanation: 'Sole proprietors are personally responsible for all business debts and obligations.',
        difficulty: 'medium',
        topic: 'Sole Proprietorship'
      },
      {
        id: 'business-11-2-2',
        question: 'What is a major advantage of a corporation?',
        options: ['Easy to establish', 'Limited liability for shareholders', 'No taxes', 'Single owner control'],
        correct: 'Limited liability for shareholders',
        explanation: 'Corporations provide limited liability protection, separating personal and business assets.',
        difficulty: 'medium',
        topic: 'Corporations'
      },
      {
        id: 'business-11-2-3',
        question: 'A partnership agreement should specify:',
        options: ['Only profit sharing', 'Only management roles', 'Profit sharing, management, and dissolution procedures', 'Only capital contributions'],
        correct: 'Profit sharing, management, and dissolution procedures',
        explanation: 'Partnership agreements should cover all major aspects of the business relationship.',
        difficulty: 'hard',
        topic: 'Partnerships'
      }
    ]
  },
  {
    id: 'business-11-3',
    name: 'Financing Business Organizations',
    description: 'Sources of business funding and financial management',
    questions: [
      {
        id: 'business-11-3-1',
        question: 'Equity financing involves:',
        options: ['Borrowing money', 'Selling ownership stakes', 'Leasing equipment', 'Government grants'],
        correct: 'Selling ownership stakes',
        explanation: 'Equity financing means raising capital by selling shares of ownership in the company.',
        difficulty: 'easy',
        topic: 'Equity Financing'
      },
      {
        id: 'business-11-3-2',
        question: 'Bank loans are an example of:',
        options: ['Equity financing', 'Debt financing', 'Government funding', 'Personal savings'],
        correct: 'Debt financing',
        explanation: 'Bank loans represent borrowed money that must be repaid with interest.',
        difficulty: 'easy',
        topic: 'Debt Financing'
      },
      {
        id: 'business-11-3-3',
        question: 'What factor do banks consider when evaluating loan applications?',
        options: ['Only credit history', 'Only business plan', 'Credit history, business plan, and collateral', 'Only collateral'],
        correct: 'Credit history, business plan, and collateral',
        explanation: 'Banks evaluate multiple factors to assess the risk of lending money.',
        difficulty: 'medium',
        topic: 'Loan Evaluation'
      }
    ]
  },
  {
    id: 'business-11-4',
    name: 'Production',
    description: 'Production processes, factors, and operation management',
    questions: [
      {
        id: 'business-11-4-1',
        question: 'The four factors of production are:',
        options: ['Land, labor, capital, management', 'Land, labor, capital, entrepreneurship', 'Money, machines, materials, methods', 'People, processes, products, profits'],
        correct: 'Land, labor, capital, entrepreneurship',
        explanation: 'The traditional four factors of production are land, labor, capital, and entrepreneurship.',
        difficulty: 'easy',
        topic: 'Factors of Production'
      },
      {
        id: 'business-11-4-2',
        question: 'Mass production is characterized by:',
        options: ['Customized products', 'High volume, standardized products', 'Small quantities', 'One-time production'],
        correct: 'High volume, standardized products',
        explanation: 'Mass production involves producing large quantities of standardized products efficiently.',
        difficulty: 'medium',
        topic: 'Production Methods'
      },
      {
        id: 'business-11-4-3',
        question: 'Quality control involves:',
        options: ['Only final inspection', 'Only material checking', 'Monitoring all production stages', 'Only customer feedback'],
        correct: 'Monitoring all production stages',
        explanation: 'Effective quality control monitors and maintains standards throughout the production process.',
        difficulty: 'medium',
        topic: 'Quality Management'
      }
    ]
  }
];