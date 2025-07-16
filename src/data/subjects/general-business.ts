import { Chapter } from '../types';
import { grade12GeneralBusinessChapters } from './general-business/grade12/index';

// General Business subject chapters organized by grade
export const generalBusinessChapters: Chapter[] = [
  // Grade 12 chapters (4 units following Ethiopian Ministry of Education curriculum)
  ...grade12GeneralBusinessChapters
];

// Future expansion: Add other grades here
// Example: ...grade11GeneralBusinessChapters, ...grade10GeneralBusinessChapters
