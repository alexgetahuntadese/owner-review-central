
import { Chapter } from '../types';
import { foundationChapters } from './geography/foundation';
import { grade11GeographyChapters } from './geography/grade11';
import { grade12EthiopianGeographyChapters } from './geography/grade12/index';

export const geographyChapters: Chapter[] = [
  ...foundationChapters,
  ...grade11GeographyChapters,
  ...grade12EthiopianGeographyChapters
];
