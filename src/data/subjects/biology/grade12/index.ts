
import { Chapter } from '../../../types';
import { unit1ApplicationBiology } from './unit1-application-biology';
import { unit2Microorganisms } from './unit2-microorganisms';
import { unit3EnergyTransformation } from './unit3-energy-transformation';
import { unit4Evolution } from './unit4-evolution';
import { unit5HumanBodySystem } from './unit5-human-body-system';
import { unit6ClimateChange } from './unit6-climate-change';

export const grade12BiologyChapters: Chapter[] = [
  {
    id: 'bio-12-1-application-biology',
    name: 'Unit 1: Application of Biology',
    description: 'How biology principles apply to medicine, agriculture, and biotechnology',
    questions: unit1ApplicationBiology
  },
  {
    id: 'bio-12-2-microorganisms',
    name: 'Unit 2: Microorganisms',
    description: 'Bacteria, viruses, fungi, and their roles in ecosystems and disease',
    questions: unit2Microorganisms
  },
  {
    id: 'bio-12-3-energy-transformation',
    name: 'Unit 3: Energy Transformation',
    description: 'Cellular respiration, photosynthesis, and metabolic pathways',
    questions: unit3EnergyTransformation
  },
  {
    id: 'bio-12-4-evolution',
    name: 'Unit 4: Evolution',
    description: 'Natural selection, speciation, and evolutionary mechanisms',
    questions: unit4Evolution
  },
  {
    id: 'bio-12-5-human-body-system',
    name: 'Unit 5: Human Body System',
    description: 'Anatomy and physiology of human organ systems',
    questions: unit5HumanBodySystem
  },
  {
    id: 'bio-12-6-climate-change',
    name: 'Unit 6: Climate Change',
    description: 'Environmental impacts, biodiversity loss, and conservation strategies',
    questions: unit6ClimateChange
  }
];
