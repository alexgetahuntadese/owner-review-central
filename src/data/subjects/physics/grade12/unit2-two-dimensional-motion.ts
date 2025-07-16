
import { Question } from '../../../types';

export const unit2TwoDimensionalMotion: Question[] = [
  // Easy Questions (10)
  {
    id: 'phys-12-2d-1',
    question: 'What is projectile motion?',
    options: ['Motion in a straight line', 'Motion under gravity in two dimensions', 'Circular motion only', 'Random motion'],
    correct: 'Motion under gravity in two dimensions',
    explanation: 'Projectile motion is the motion of objects thrown or launched under the influence of gravity.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-2d-2',
    question: 'What is the acceleration of a projectile in the horizontal direction (ignoring air resistance)?',
    options: ['9.8 m/s²', '0 m/s²', 'Variable', 'Depends on initial velocity'],
    correct: '0 m/s²',
    explanation: 'In ideal projectile motion, there is no horizontal acceleration (ignoring air resistance).',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-2d-3',
    question: 'What is the path of a projectile called?',
    options: ['Circle', 'Parabola', 'Ellipse', 'Straight line'],
    correct: 'Parabola',
    explanation: 'The trajectory of a projectile under gravity is a parabolic path.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-2d-4',
    question: 'At what angle should a projectile be launched for maximum range?',
    options: ['30°', '45°', '60°', '90°'],
    correct: '45°',
    explanation: 'Maximum range is achieved when a projectile is launched at 45° to the horizontal.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-2d-5',
    question: 'What is circular motion?',
    options: ['Motion in a square', 'Motion along a circular path', 'Random motion', 'Linear motion'],
    correct: 'Motion along a circular path',
    explanation: 'Circular motion is movement along a circular path at constant or varying speed.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-2d-6',
    question: 'What force provides centripetal acceleration in circular motion?',
    options: ['Centrifugal force', 'Centripetal force', 'Gravitational force only', 'Magnetic force only'],
    correct: 'Centripetal force',
    explanation: 'Centripetal force is the net force directed toward the center of circular motion.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-2d-7',
    question: 'In uniform circular motion, what remains constant?',
    options: ['Velocity', 'Speed', 'Acceleration', 'Force'],
    correct: 'Speed',
    explanation: 'In uniform circular motion, the speed (magnitude of velocity) remains constant.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-2d-8',
    question: 'What is the direction of centripetal acceleration?',
    options: ['Tangent to the circle', 'Away from center', 'Toward the center', 'Perpendicular to velocity'],
    correct: 'Toward the center',
    explanation: 'Centripetal acceleration always points toward the center of the circular path.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-2d-9',
    question: 'What happens to the horizontal velocity of a projectile during flight?',
    options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'],
    correct: 'Remains constant',
    explanation: 'Horizontal velocity remains constant in ideal projectile motion (no air resistance).',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-2d-10',
    question: 'What is the vertical velocity of a projectile at maximum height?',
    options: ['Maximum', 'Zero', 'Same as initial', 'Negative maximum'],
    correct: 'Zero',
    explanation: 'At maximum height, the vertical component of velocity becomes zero.',
    difficulty: 'easy'
  },

  // Medium Questions (10)
  {
    id: 'phys-12-2d-med-1',
    question: 'A ball is thrown horizontally from a height of 20 m. How long does it take to hit the ground?',
    options: ['1.4 s', '2.0 s', '2.8 s', '4.0 s'],
    correct: '2.0 s',
    explanation: 'Using h = ½gt²: t = √(2h/g) = √(2×20/9.8) ≈ 2.0 s',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-2d-med-2',
    question: 'What is the centripetal acceleration of a car moving at 20 m/s in a circle of radius 50 m?',
    options: ['4 m/s²', '8 m/s²', '0.4 m/s²', '40 m/s²'],
    correct: '8 m/s²',
    explanation: 'Centripetal acceleration: ac = v²/r = (20)²/50 = 400/50 = 8 m/s²',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-2d-med-3',
    question: 'A projectile is launched at 30° with initial speed 40 m/s. What is the maximum height?',
    options: ['20.4 m', '40.8 m', '10.2 m', '81.6 m'],
    correct: '20.4 m',
    explanation: 'h = (v₀sinθ)²/(2g) = (40×sin30°)²/(2×9.8) = (20)²/19.6 ≈ 20.4 m',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-2d-med-4',
    question: 'What is the period of a satellite in circular orbit if its speed is 7800 m/s and radius is 6.6×10⁶ m?',
    options: ['5300 s', '2650 s', '10600 s', '1325 s'],
    correct: '5300 s',
    explanation: 'Period T = 2πr/v = 2π×6.6×10⁶/7800 ≈ 5300 s',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-2d-med-5',
    question: 'In projectile motion, what is the relationship between launch angle and landing angle?',
    options: ['Always different', 'Always equal', 'Launch angle is double', 'No relationship'],
    correct: 'Always equal',
    explanation: 'For projectiles landing at the same height as launch, the landing angle equals the launch angle.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-2d-med-6',
    question: 'What is the angular velocity of Earth\'s rotation?',
    options: ['7.3 × 10⁻⁵ rad/s', '1.5 × 10⁻⁴ rad/s', '3.6 × 10⁻⁵ rad/s', '2.4 × 10⁻⁵ rad/s'],
    correct: '7.3 × 10⁻⁵ rad/s',
    explanation: 'ω = 2π/T = 2π/(24×3600) ≈ 7.3 × 10⁻⁵ rad/s',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-2d-med-7',
    question: 'A wheel of radius 0.5 m rotates at 60 rpm. What is the linear speed of a point on the rim?',
    options: ['1.57 m/s', '3.14 m/s', '6.28 m/s', '31.4 m/s'],
    correct: '3.14 m/s',
    explanation: 'ω = 60 rpm = 2π rad/s; v = ωr = 2π × 0.5 = 3.14 m/s',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-2d-med-8',
    question: 'What is the range of a projectile launched at 45° with initial speed 50 m/s?',
    options: ['127 m', '255 m', '382 m', '510 m'],
    correct: '255 m',
    explanation: 'Range = v₀²sin(2θ)/g = (50)²sin(90°)/9.8 = 2500/9.8 ≈ 255 m',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-2d-med-9',
    question: 'In circular motion, what is the relationship between linear speed and angular speed?',
    options: ['v = ω/r', 'v = ωr', 'v = ω + r', 'v = ω - r'],
    correct: 'v = ωr',
    explanation: 'Linear speed equals angular speed times radius: v = ωr',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-2d-med-10',
    question: 'What is the centripetal force on a 2 kg object moving at 10 m/s in a 5 m radius circle?',
    options: ['20 N', '40 N', '100 N', '200 N'],
    correct: '40 N',
    explanation: 'Fc = mv²/r = 2×(10)²/5 = 2×100/5 = 40 N',
    difficulty: 'medium'
  },

  // Hard Questions (10)
  {
    id: 'phys-12-2d-hard-1',
    question: 'A projectile is launched from a 100 m cliff at 45° with speed 50 m/s. What is its range?',
    options: ['255 m', '291 m', '327 m', '363 m'],
    correct: '291 m',
    explanation: 'Complex calculation involving both horizontal motion and additional fall time from height.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-2d-hard-2',
    question: 'What is the minimum speed needed for a car to complete a vertical loop of radius 10 m?',
    options: ['9.9 m/s', '14.0 m/s', '19.8 m/s', '28.0 m/s'],
    correct: '9.9 m/s',
    explanation: 'At the top: mg = mv²/r, so v = √(gr) = √(9.8×10) ≈ 9.9 m/s',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-2d-hard-3',
    question: 'A satellite orbits Earth at height h above surface. If Earth\'s radius is R, what is the orbital speed?',
    options: ['√(gR)', '√(gR²/(R+h))', '√(g(R+h))', '√(gR²/h)'],
    correct: '√(gR²/(R+h))',
    explanation: 'For circular orbit: v = √(GM/(R+h)) = √(gR²/(R+h))',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-2d-hard-4',
    question: 'Two projectiles are launched simultaneously at different angles but same speed. When do they have the same height?',
    options: ['Never', 'At launch and landing only', 'At one intermediate time', 'Continuously'],
    correct: 'At one intermediate time',
    explanation: 'Two projectiles with same initial speed will cross paths at one intermediate time.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-2d-hard-5',
    question: 'A particle moves in a circle with variable speed. What can be said about its acceleration?',
    options: ['Only centripetal', 'Only tangential', 'Both centripetal and tangential', 'Zero'],
    correct: 'Both centripetal and tangential',
    explanation: 'Variable speed circular motion has both centripetal (toward center) and tangential acceleration.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-2d-hard-6',
    question: 'What is the maximum height of a projectile if its range is 200 m on level ground?',
    options: ['25 m', '50 m', '100 m', '200 m'],
    correct: '50 m',
    explanation: 'For maximum range (45° launch): h_max = R/4 = 200/4 = 50 m',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-2d-hard-7',
    question: 'A ball on a string moves in a vertical circle. Where is the tension maximum?',
    options: ['At the top', 'At the bottom', 'At the sides', 'Same everywhere'],
    correct: 'At the bottom',
    explanation: 'At bottom: T = mg + mv²/r (maximum); at top: T = mv²/r - mg (minimum)',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-2d-hard-8',
    question: 'What is the escape velocity from Earth\'s surface?',
    options: ['7.9 km/s', '11.2 km/s', '16.7 km/s', '42.1 km/s'],
    correct: '11.2 km/s',
    explanation: 'Escape velocity: v = √(2GM/R) = √(2gR) ≈ 11.2 km/s for Earth',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-2d-hard-9',
    question: 'A projectile has range R on level ground. At what fraction of maximum height is its speed minimum?',
    options: ['1/4', '1/2', '3/4', '1'],
    correct: '1',
    explanation: 'Speed is minimum at maximum height where only horizontal velocity component remains.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-2d-hard-10',
    question: 'For a conical pendulum with string length L and half-angle θ, what is the period?',
    options: ['2π√(L/g)', '2π√(Lcosθ/g)', '2π√(Lsinθ/g)', '2π√(L/gcosθ)'],
    correct: '2π√(Lcosθ/g)',
    explanation: 'For conical pendulum: T = 2π√(Lcosθ/g) where θ is half-angle from vertical.',
    difficulty: 'hard'
  }
];
