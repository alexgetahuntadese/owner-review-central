
import { Chapter } from '../../../types';
import { unit1SustainableDevelopment } from './unit1-sustainable-development';
import { unit2TimeManagement } from './unit2-time-management';
import { unit3TrafficAccident } from './unit3-traffic-accident';
import { unit4NaturalResource } from './unit4-natural-resource';
import { unit5MechanizedAgriculture } from './unit5-mechanized-agriculture';
import { unit6GreenEconomies } from './unit6-green-economies';
import { unit7NationalPride } from './unit7-national-pride';
import { unit8Telemedicine } from './unit8-telemedicine';
import { unit9ConflictManagement } from './unit9-conflict-management';
import { unit10Robotics } from './unit10-robotics';

export const grade12EnglishChapters: Chapter[] = [
  {
    id: 'eng-12-1-sustainable-development',
    name: 'Unit 1: Sustainable Development',
    description: 'Reading comprehension, vocabulary, and writing skills related to environmental sustainability and development',
    questions: unit1SustainableDevelopment
  },
  {
    id: 'eng-12-2-time-management',
    name: 'Unit 2: Time Management',
    description: 'Language skills for discussing productivity, scheduling, and effective time use',
    questions: unit2TimeManagement
  },
  {
    id: 'eng-12-3-traffic-accident',
    name: 'Unit 3: Evidence on Traffic Accident',
    description: 'Analytical reading and writing skills for accident reports and evidence evaluation',
    questions: unit3TrafficAccident
  },
  {
    id: 'eng-12-4-natural-resource',
    name: 'Unit 4: Natural Resource Management',
    description: 'Academic language for environmental science and resource conservation',
    questions: unit4NaturalResource
  },
  {
    id: 'eng-12-5-mechanized-agriculture',
    name: 'Unit 5: Mechanized Agriculture',
    description: 'Technical vocabulary and communication in agricultural technology',
    questions: unit5MechanizedAgriculture
  },
  {
    id: 'eng-12-6-green-economies',
    name: 'Unit 6: Green Economies',
    description: 'Economic terminology and sustainable business communication',
    questions: unit6GreenEconomies
  },
  {
    id: 'eng-12-7-national-pride',
    name: 'Unit 7: National Pride',
    description: 'Cultural expression and patriotic discourse in English',
    questions: unit7NationalPride
  },
  {
    id: 'eng-12-8-telemedicine',
    name: 'Unit 8: Telemedicine',
    description: 'Medical and technological vocabulary in healthcare communication',
    questions: unit8Telemedicine
  },
  {
    id: 'eng-12-9-conflict-management',
    name: 'Unit 9: Conflict Management',
    description: 'Diplomatic language and negotiation communication skills',
    questions: unit9ConflictManagement
  },
  {
    id: 'eng-12-10-robotics',
    name: 'Unit 10: Robotics',
    description: 'Technical communication and future technology discourse',
    questions: unit10Robotics
  }
];
