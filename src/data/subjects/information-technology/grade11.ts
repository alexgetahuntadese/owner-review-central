import { Chapter } from '../../types';

export const grade11ITChapters: Chapter[] = [
  {
    id: 'it-11-1',
    name: 'Information Systems and Its Applications',
    description: 'Understanding information systems, their components and real-world applications',
    questions: [
      {
        id: 'it-11-1-1',
        question: 'What are the main components of an information system?',
        options: ['Hardware, Software, Data, Procedures, People', 'CPU, RAM, Hard Drive', 'Input, Processing, Output', 'Internet, Database, Users'],
        correct: 'Hardware, Software, Data, Procedures, People',
        explanation: 'An information system consists of five main components working together.',
        difficulty: 'medium',
        topic: 'System Components'
      },
      {
        id: 'it-11-1-2',
        question: 'Which type of information system supports day-to-day operations?',
        options: ['Decision Support System', 'Transaction Processing System', 'Expert System', 'Executive Information System'],
        correct: 'Transaction Processing System',
        explanation: 'TPS handles routine business transactions and operational activities.',
        difficulty: 'easy',
        topic: 'System Types'
      },
      {
        id: 'it-11-1-3',
        question: 'What is the primary purpose of a Management Information System (MIS)?',
        options: ['Process transactions', 'Support decision making', 'Store data', 'Create reports'],
        correct: 'Support decision making',
        explanation: 'MIS provides information to support managerial decision-making processes.',
        difficulty: 'medium',
        topic: 'MIS Applications'
      }
    ]
  },
  {
    id: 'it-11-2',
    name: 'Emerging Technologies',
    description: 'Latest technological trends and their impact on society',
    questions: [
      {
        id: 'it-11-2-1',
        question: 'What does AI stand for?',
        options: ['Automatic Intelligence', 'Artificial Intelligence', 'Advanced Intelligence', 'Applied Intelligence'],
        correct: 'Artificial Intelligence',
        explanation: 'AI refers to machine intelligence that simulates human cognitive functions.',
        difficulty: 'easy',
        topic: 'Artificial Intelligence'
      },
      {
        id: 'it-11-2-2',
        question: 'Which technology enables secure, decentralized transactions?',
        options: ['Cloud Computing', 'Blockchain', 'Virtual Reality', 'Internet of Things'],
        correct: 'Blockchain',
        explanation: 'Blockchain provides a secure, distributed ledger for transactions.',
        difficulty: 'medium',
        topic: 'Blockchain Technology'
      },
      {
        id: 'it-11-2-3',
        question: 'What is the main characteristic of IoT devices?',
        options: ['High processing power', 'Internet connectivity', 'Large storage capacity', 'Advanced graphics'],
        correct: 'Internet connectivity',
        explanation: 'IoT devices are characterized by their ability to connect to the internet and communicate.',
        difficulty: 'medium',
        topic: 'Internet of Things'
      }
    ]
  },
  {
    id: 'it-11-3',
    name: 'Database Management',
    description: 'Database design, management, and querying fundamentals',
    questions: [
      {
        id: 'it-11-3-1',
        question: 'What does SQL stand for?',
        options: ['Structured Query Language', 'Standard Query Language', 'System Query Language', 'Simple Query Language'],
        correct: 'Structured Query Language',
        explanation: 'SQL is the standard language for managing relational databases.',
        difficulty: 'easy',
        topic: 'Database Languages'
      },
      {
        id: 'it-11-3-2',
        question: 'Which SQL command is used to retrieve data?',
        options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
        correct: 'SELECT',
        explanation: 'SELECT is used to query and retrieve data from database tables.',
        difficulty: 'easy',
        topic: 'SQL Commands'
      },
      {
        id: 'it-11-3-3',
        question: 'What is a primary key in a database?',
        options: ['A key that opens the database', 'A unique identifier for records', 'The most important field', 'A password for security'],
        correct: 'A unique identifier for records',
        explanation: 'A primary key uniquely identifies each record in a database table.',
        difficulty: 'medium',
        topic: 'Database Design'
      }
    ]
  },
  {
    id: 'it-11-4',
    name: 'Web Development',
    description: 'Creating websites using HTML, CSS, and basic scripting',
    questions: [
      {
        id: 'it-11-4-1',
        question: 'What does HTML stand for?',
        options: ['Hypertext Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hypertext Machine Language'],
        correct: 'Hypertext Markup Language',
        explanation: 'HTML is the standard markup language for creating web pages.',
        difficulty: 'easy',
        topic: 'Web Technologies'
      },
      {
        id: 'it-11-4-2',
        question: 'Which technology is used for styling web pages?',
        options: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        correct: 'CSS',
        explanation: 'CSS (Cascading Style Sheets) is used to style and layout web pages.',
        difficulty: 'easy',
        topic: 'Web Styling'
      },
      {
        id: 'it-11-4-3',
        question: 'What is the purpose of JavaScript in web development?',
        options: ['Structure content', 'Style pages', 'Add interactivity', 'Store data'],
        correct: 'Add interactivity',
        explanation: 'JavaScript adds dynamic behavior and interactivity to web pages.',
        difficulty: 'medium',
        topic: 'Web Programming'
      }
    ]
  },
  {
    id: 'it-11-5',
    name: 'Hardware Troubleshooting and Preventive Maintenance',
    description: 'Computer hardware maintenance, troubleshooting, and repair',
    questions: [
      {
        id: 'it-11-5-1',
        question: 'What is the first step in troubleshooting a computer problem?',
        options: ['Replace components', 'Identify the problem', 'Format hard drive', 'Update software'],
        correct: 'Identify the problem',
        explanation: 'Problem identification is the crucial first step in any troubleshooting process.',
        difficulty: 'easy',
        topic: 'Troubleshooting Process'
      },
      {
        id: 'it-11-5-2',
        question: 'How often should computer fans be cleaned?',
        options: ['Daily', 'Weekly', 'Monthly', 'Every 3-6 months'],
        correct: 'Every 3-6 months',
        explanation: 'Regular cleaning every 3-6 months prevents dust buildup and overheating.',
        difficulty: 'medium',
        topic: 'Preventive Maintenance'
      },
      {
        id: 'it-11-5-3',
        question: 'What tool is used to prevent static electricity damage?',
        options: ['Screwdriver', 'Anti-static wrist strap', 'Multimeter', 'Cable tester'],
        correct: 'Anti-static wrist strap',
        explanation: 'Anti-static wrist straps prevent electrostatic discharge that can damage components.',
        difficulty: 'medium',
        topic: 'Hardware Safety'
      }
    ]
  },
  {
    id: 'it-11-6',
    name: 'Fundamentals of Programming',
    description: 'Basic programming concepts, algorithms, and problem-solving',
    questions: [
      {
        id: 'it-11-6-1',
        question: 'What is an algorithm?',
        options: ['A programming language', 'A step-by-step solution to a problem', 'A computer program', 'A type of software'],
        correct: 'A step-by-step solution to a problem',
        explanation: 'An algorithm is a finite sequence of instructions to solve a problem.',
        difficulty: 'easy',
        topic: 'Algorithm Basics'
      },
      {
        id: 'it-11-6-2',
        question: 'Which is NOT a programming control structure?',
        options: ['Sequence', 'Selection', 'Iteration', 'Compilation'],
        correct: 'Compilation',
        explanation: 'The three basic control structures are sequence, selection, and iteration.',
        difficulty: 'medium',
        topic: 'Control Structures'
      },
      {
        id: 'it-11-6-3',
        question: 'What is debugging in programming?',
        options: ['Writing code', 'Finding and fixing errors', 'Running programs', 'Designing interfaces'],
        correct: 'Finding and fixing errors',
        explanation: 'Debugging is the process of finding and resolving bugs or errors in code.',
        difficulty: 'medium',
        topic: 'Programming Process'
      }
    ]
  }
];