
import { Chapter } from '../../../types';

export const unit3DatabaseManagement: Chapter = {
  id: 'it_grade12_unit3',
  name: 'Unit 3: Database Management System',
  description: 'Database concepts, design, SQL, and database management systems',
  questions: [
    // Easy Questions (10)
    {
      id: 'it_u3_easy_1',
      question: 'What is a database?',
      options: ['Single file', 'Organized collection of related data', 'Computer program', 'Web page'],
      correct: 'Organized collection of related data',
      explanation: 'A database is an organized collection of related data that can be easily accessed, managed, and updated.',
      difficulty: 'easy',
      topic: 'Database Basics'
    },
    {
      id: 'it_u3_easy_2',
      question: 'What is a Database Management System (DBMS)?',
      options: ['Database only', 'Software that manages databases', 'Hardware system', 'Web browser'],
      correct: 'Software that manages databases',
      explanation: 'A DBMS is software that provides an interface between users and databases for managing data.',
      difficulty: 'easy',
      topic: 'DBMS Concepts'
    },
    {
      id: 'it_u3_easy_3',
      question: 'What is a table in a database?',
      options: ['Furniture', 'Collection of related records', 'Software program', 'Hardware component'],
      correct: 'Collection of related records',
      explanation: 'A table is a collection of related records (rows) with the same structure (columns) in a database.',
      difficulty: 'easy',
      topic: 'Database Structure'
    },
    {
      id: 'it_u3_easy_4',
      question: 'What is a record in a database?',
      options: ['Table structure', 'Single row of data in a table', 'Database software', 'Query result'],
      correct: 'Single row of data in a table',
      explanation: 'A record is a single row of data in a database table that contains information about one entity.',
      difficulty: 'easy',
      topic: 'Database Structure'
    },
    {
      id: 'it_u3_easy_5',
      question: 'What is a field in a database?',
      options: ['Entire table', 'Single column in a table', 'Database file', 'Query command'],
      correct: 'Single column in a table',
      explanation: 'A field is a single column in a database table that stores a specific type of data.',
      difficulty: 'easy',
      topic: 'Database Structure'
    },
    {
      id: 'it_u3_easy_6',
      question: 'What is SQL?',
      options: ['Programming language only', 'Structured Query Language for databases', 'Web technology', 'Operating system'],
      correct: 'Structured Query Language for databases',
      explanation: 'SQL (Structured Query Language) is a language used to communicate with and manipulate databases.',
      difficulty: 'easy',
      topic: 'SQL Basics'
    },
    {
      id: 'it_u3_easy_7',
      question: 'What is a primary key?',
      options: ['Any field', 'Unique identifier for each record', 'Password', 'Database name'],
      correct: 'Unique identifier for each record',
      explanation: 'A primary key is a field that uniquely identifies each record in a database table.',
      difficulty: 'easy',
      topic: 'Database Keys'
    },
    {
      id: 'it_u3_easy_8',
      question: 'What is data redundancy?',
      options: ['Data security', 'Unnecessary duplication of data', 'Data backup', 'Data encryption'],
      correct: 'Unnecessary duplication of data',
      explanation: 'Data redundancy refers to the unnecessary duplication of data in a database, which can lead to inconsistencies.',
      difficulty: 'easy',
      topic: 'Database Issues'
    },
    {
      id: 'it_u3_easy_9',
      question: 'What is a query?',
      options: ['Database table', 'Request for specific data from database', 'Database software', 'Data entry'],
      correct: 'Request for specific data from database',
      explanation: 'A query is a request for specific data or information from a database.',
      difficulty: 'easy',
      topic: 'Database Queries'
    },
    {
      id: 'it_u3_easy_10',
      question: 'What is database normalization?',
      options: ['Data backup', 'Organizing data to reduce redundancy', 'Data encryption', 'Data entry'],
      correct: 'Organizing data to reduce redundancy',
      explanation: 'Database normalization is the process of organizing data to minimize redundancy and dependency.',
      difficulty: 'easy',
      topic: 'Database Design'
    }
  ]
};
