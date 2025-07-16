
import { Chapter } from '../../../types';
import { unit1ApplicationPhysics } from './unit1-application-physics';
import { unit2TwoDimensionalMotion } from './unit2-two-dimensional-motion';
import { unit3FluidMechanics } from './unit3-fluid-mechanics';
import { unit4Electromagnetism } from './unit4-electromagnetism';
import { unit5BasicElectronics } from './unit5-basic-electronics';

export const grade12PhysicsChapters: Chapter[] = [
  {
    id: 'phys-12-1-application-physics',
    name: 'Unit 1: Application of Physics in Other Fields',
    description: 'How physics principles apply to other scientific fields and everyday life',
    questions: unit1ApplicationPhysics
  },
  {
    id: 'phys-12-2-two-dimensional-motion',
    name: 'Unit 2: Two-Dimensional Motion',
    description: 'Projectile motion, circular motion, and motion in two dimensions',
    questions: unit2TwoDimensionalMotion
  },
  {
    id: 'phys-12-3-fluid-mechanics',
    name: 'Unit 3: Fluid Mechanics',
    description: 'Properties and behavior of fluids, pressure, buoyancy, and flow',
    questions: unit3FluidMechanics
  },
  {
    id: 'phys-12-4-electromagnetism',
    name: 'Unit 4: Electromagnetism',
    description: 'Electric and magnetic fields, electromagnetic induction, and waves',
    questions: unit4Electromagnetism
  },
  {
    id: 'phys-12-5-basic-electronics',
    name: 'Unit 5: Basics of Electronics',
    description: 'Electronic components, circuits, and digital electronics fundamentals',
    questions: unit5BasicElectronics
  }
];
