import { Chapter } from '../../types';
import { grade11PhysicsChapters } from './grade11';
import { grade12PhysicsChapters } from './grade12';

export const physicsChapters: Chapter[] = [
  ...grade11PhysicsChapters,
  ...grade12PhysicsChapters
];
