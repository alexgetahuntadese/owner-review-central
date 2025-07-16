
import { Chapter } from '../../types';

export const grade11PhysicsChapters: Chapter[] = [
  {
    id: 'phys-11-1',
    name: 'Vectors and Scalars',
    description: 'Understanding vector quantities and their applications in physics',
    questions: [
      {
        id: 'phys-11-1-1',
        question: 'Which of the following is a vector quantity?',
        options: ['Speed', 'Mass', 'Velocity', 'Temperature'],
        correct: 'Velocity',
        explanation: 'Velocity has both magnitude and direction, making it a vector quantity.',
        difficulty: 'easy'
      },
      {
        id: 'phys-11-1-2',
        question: 'What is the magnitude of the resultant of two vectors of magnitude 3 and 4 acting at right angles?',
        options: ['5', '7', '1', '12'],
        correct: '5',
        explanation: 'Using Pythagorean theorem: √(3² + 4²) = √(9 + 16) = √25 = 5.',
        difficulty: 'medium'
      },
      {
        id: 'phys-11-1-3',
        question: 'Two vectors A and B have magnitudes 6 and 8 respectively. What is the maximum possible magnitude of their resultant?',
        options: ['2', '10', '14', '48'],
        correct: '14',
        explanation: 'Maximum resultant occurs when vectors are in the same direction: |A| + |B| = 6 + 8 = 14.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'phys-11-2',
    name: 'Kinematics',
    description: 'Study of motion without considering the forces causing it',
    questions: [
      {
        id: 'phys-11-2-1',
        question: 'What is the SI unit of acceleration?',
        options: ['m/s', 'm/s²', 'kg⋅m/s²', 'm²/s'],
        correct: 'm/s²',
        explanation: 'Acceleration is the rate of change of velocity, so its unit is meters per second squared.',
        difficulty: 'easy'
      },
      {
        id: 'phys-11-2-2',
        question: 'A car accelerates from rest at 2 m/s². How far does it travel in 5 seconds?',
        options: ['10 m', '25 m', '50 m', '5 m'],
        correct: '25 m',
        explanation: 'Using s = ut + ½at²: s = 0 + ½(2)(5²) = ½(2)(25) = 25 m.',
        difficulty: 'medium'
      },
      {
        id: 'phys-11-2-3',
        question: 'A projectile is launched at 45° with initial velocity 20 m/s. What is its range? (g = 10 m/s²)',
        options: ['20 m', '40 m', '30 m', '35 m'],
        correct: '40 m',
        explanation: 'Range = v²sin(2θ)/g = (20²)sin(90°)/10 = 400(1)/10 = 40 m.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'phys-11-3',
    name: 'Forces and Newton\'s Laws',
    description: 'Understanding forces and the fundamental laws of motion',
    questions: [
      {
        id: 'phys-11-3-1',
        question: 'What does Newton\'s first law state?',
        options: ['F = ma', 'Objects at rest stay at rest unless acted upon by a force', 'Action equals reaction', 'Force is proportional to acceleration'],
        correct: 'Objects at rest stay at rest unless acted upon by a force',
        explanation: 'Newton\'s first law is the law of inertia.',
        difficulty: 'easy'
      },
      {
        id: 'phys-11-3-2',
        question: 'What is the weight of a 5 kg mass on Earth? (g = 10 m/s²)',
        options: ['5 N', '50 N', '0.5 N', '500 N'],
        correct: '50 N',
        explanation: 'Weight = mg = 5 × 10 = 50 N.',
        difficulty: 'medium'
      },
      {
        id: 'phys-11-3-3',
        question: 'A 1000 kg car experiences a net force of 2000 N. What is its acceleration?',
        options: ['2 m/s²', '0.5 m/s²', '2000 m/s²', '1 m/s²'],
        correct: '2 m/s²',
        explanation: 'Using F = ma: a = F/m = 2000/1000 = 2 m/s².',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'phys-11-4',
    name: 'Work, Energy and Power',
    description: 'Understanding work, energy transformations and power calculations',
    questions: [
      {
        id: 'phys-11-4-1',
        question: 'What is the SI unit of work?',
        options: ['Newton', 'Joule', 'Watt', 'Pascal'],
        correct: 'Joule',
        explanation: 'Work is measured in Joules (J), which equals Newton-meters.',
        difficulty: 'easy'
      },
      {
        id: 'phys-11-4-2',
        question: 'If a 10 N force moves an object 5 m, how much work is done?',
        options: ['2 J', '15 J', '50 J', '0.5 J'],
        correct: '50 J',
        explanation: 'Work = Force × distance = 10 N × 5 m = 50 J.',
        difficulty: 'medium'
      },
      {
        id: 'phys-11-4-3',
        question: 'What is the kinetic energy of a 2 kg object moving at 6 m/s?',
        options: ['12 J', '36 J', '72 J', '6 J'],
        correct: '36 J',
        explanation: 'KE = ½mv² = ½ × 2 × 6² = ½ × 2 × 36 = 36 J.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'phys-11-5',
    name: 'Momentum and Collisions',
    description: 'Conservation of momentum and collision analysis',
    questions: [
      {
        id: 'phys-11-5-1',
        question: 'What is momentum?',
        options: ['Mass × velocity', 'Force × time', 'Energy × time', 'Acceleration × mass'],
        correct: 'Mass × velocity',
        explanation: 'Momentum p = mv, where m is mass and v is velocity.',
        difficulty: 'easy'
      },
      {
        id: 'phys-11-5-2',
        question: 'What is conserved in all collisions?',
        options: ['Kinetic energy', 'Momentum', 'Velocity', 'Force'],
        correct: 'Momentum',
        explanation: 'The law of conservation of momentum applies to all collisions.',
        difficulty: 'medium'
      },
      {
        id: 'phys-11-5-3',
        question: 'In an elastic collision between two objects, what is conserved?',
        options: ['Only momentum', 'Only kinetic energy', 'Both momentum and kinetic energy', 'Neither momentum nor energy'],
        correct: 'Both momentum and kinetic energy',
        explanation: 'Elastic collisions conserve both momentum and kinetic energy.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'phys-11-6',
    name: 'Rotational Motion',
    description: 'Understanding circular motion and rotational dynamics',
    questions: [
      {
        id: 'phys-11-6-1',
        question: 'What is angular velocity?',
        options: ['Linear speed in a circle', 'Rate of change of angular displacement', 'Centripetal acceleration', 'Rotational force'],
        correct: 'Rate of change of angular displacement',
        explanation: 'Angular velocity ω is the rate at which an object rotates, measured in rad/s.',
        difficulty: 'easy'
      },
      {
        id: 'phys-11-6-2',
        question: 'What provides the centripetal force for a car going around a curve?',
        options: ['Engine force', 'Friction from tires', 'Weight of car', 'Air resistance'],
        correct: 'Friction from tires',
        explanation: 'Friction between tires and road provides the centripetal force needed for circular motion.',
        difficulty: 'medium'
      },
      {
        id: 'phys-11-6-3',
        question: 'If a wheel rotates at 60 rpm, what is its angular velocity in rad/s?',
        options: ['π rad/s', '2π rad/s', '60π rad/s', '30π rad/s'],
        correct: '2π rad/s',
        explanation: '60 rpm = 60 × 2π/60 = 2π rad/s.',
        difficulty: 'hard'
      }
    ]
  }
];
