
import { Chapter } from '../types';
import { grade12PhysicsChapters } from './physics/grade12';

export const physicsChapters: Chapter[] = [
  // General Physics Chapters
  {
    id: 'mechanics',
    name: 'Mechanics',
    description: 'Motion, forces, and energy',
    questions: [
      // Easy Questions
      {
        id: 'mech_1',
        question: 'What is the SI unit of force?',
        options: ['Joule', 'Newton', 'Watt', 'Pascal'],
        correct: 'Newton',
        explanation: 'The Newton (N) is the SI unit of force.',
        difficulty: 'easy'
      },
      {
        id: 'mech_2',
        question: 'What is velocity?',
        options: ['Distance traveled', 'Speed with direction', 'Acceleration', 'Force applied'],
        correct: 'Speed with direction',
        explanation: 'Velocity is speed in a specific direction (a vector quantity).',
        difficulty: 'easy'
      },
      {
        id: 'mech_3',
        question: 'What is acceleration due to gravity on Earth?',
        options: ['9.8 m/s²', '10 m/s²', '9 m/s²', '8.9 m/s²'],
        correct: '9.8 m/s²',
        explanation: 'Standard acceleration due to gravity is approximately 9.8 m/s².',
        difficulty: 'easy'
      },
      {
        id: 'mech_4',
        question: 'What is Newton\'s first law?',
        options: ['F = ma', 'Objects in motion stay in motion unless acted upon by force', 'Action-reaction', 'Energy conservation'],
        correct: 'Objects in motion stay in motion unless acted upon by force',
        explanation: 'Newton\'s first law is the law of inertia.',
        difficulty: 'easy'
      },
      {
        id: 'mech_med_1',
        question: 'If a car accelerates at 2 m/s² for 5 seconds, what is its change in velocity?',
        options: ['10 m/s', '2.5 m/s', '7 m/s', '3 m/s'],
        correct: '10 m/s',
        explanation: 'Δv = at = 2 × 5 = 10 m/s',
        difficulty: 'medium'
      },
      {
        id: 'mech_med_2',
        question: 'What is the kinetic energy of a 2 kg object moving at 4 m/s?',
        options: ['8 J', '16 J', '32 J', '4 J'],
        correct: '16 J',
        explanation: 'KE = ½mv² = ½ × 2 × 4² = ½ × 2 × 16 = 16 J',
        difficulty: 'medium'
      },
      {
        id: 'mech_med_3',
        question: 'What is the momentum of a 5 kg object moving at 3 m/s?',
        options: ['15 kg⋅m/s', '8 kg⋅m/s', '1.67 kg⋅m/s', '45 kg⋅m/s'],
        correct: '15 kg⋅m/s',
        explanation: 'Momentum p = mv = 5 × 3 = 15 kg⋅m/s',
        difficulty: 'medium'
      },
      {
        id: 'mech_hard_1',
        question: 'A projectile is launched at 45° with initial velocity 20 m/s. What is its maximum height?',
        options: ['10.2 m', '20.4 m', '5.1 m', '15.3 m'],
        correct: '10.2 m',
        explanation: 'h = (v₀sin θ)²/(2g) = (20×sin45°)²/(2×9.8) = (14.14)²/19.6 ≈ 10.2 m',
        difficulty: 'hard'
      },
      {
        id: 'mech_hard_2',
        question: 'Two objects collide elastically. If conservation of momentum and kinetic energy apply, what type of collision is this?',
        options: ['Perfectly elastic', 'Perfectly inelastic', 'Partially elastic', 'Explosive'],
        correct: 'Perfectly elastic',
        explanation: 'Elastic collisions conserve both momentum and kinetic energy.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'waves_optics',
    name: 'Waves and Optics',
    description: 'Wave properties, sound, and light',
    questions: [
      // Easy Questions
      {
        id: 'wave_1',
        question: 'What is the speed of light in vacuum?',
        options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'],
        correct: '3 × 10⁸ m/s',
        explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ m/s.',
        difficulty: 'easy'
      },
      {
        id: 'wave_2',
        question: 'What is frequency?',
        options: ['Distance between waves', 'Number of waves per second', 'Height of wave', 'Speed of wave'],
        correct: 'Number of waves per second',
        explanation: 'Frequency is the number of complete waves that pass a point per second.',
        difficulty: 'easy'
      },
      {
        id: 'wave_3',
        question: 'What is the relationship between wavelength and frequency?',
        options: ['Directly proportional', 'Inversely proportional', 'No relationship', 'Exponential'],
        correct: 'Inversely proportional',
        explanation: 'As frequency increases, wavelength decreases: v = fλ',
        difficulty: 'easy'
      },
      {
        id: 'wave_4',
        question: 'What type of wave is sound?',
        options: ['Transverse', 'Longitudinal', 'Electromagnetic', 'Standing'],
        correct: 'Longitudinal',
        explanation: 'Sound waves are longitudinal waves with compressions and rarefactions.',
        difficulty: 'easy'
      },
      {
        id: 'wave_med_1',
        question: 'If a wave has frequency 60 Hz and wavelength 5 m, what is its speed?',
        options: ['12 m/s', '65 m/s', '300 m/s', '0.083 m/s'],
        correct: '300 m/s',
        explanation: 'v = fλ = 60 × 5 = 300 m/s',
        difficulty: 'medium'
      },
      {
        id: 'wave_med_2',
        question: 'What happens when light passes from air to water?',
        options: ['Speed increases', 'Speed decreases', 'Frequency changes', 'Wavelength increases'],
        correct: 'Speed decreases',
        explanation: 'Light slows down when entering a denser medium like water.',
        difficulty: 'medium'
      },
      {
        id: 'wave_med_3',
        question: 'What is the principle of superposition?',
        options: ['Waves cancel out', 'Waves combine algebraically', 'Waves reflect', 'Waves refract'],
        correct: 'Waves combine algebraically',
        explanation: 'When waves meet, their amplitudes add algebraically.',
        difficulty: 'medium'
      },
      {
        id: 'wave_hard_1',
        question: 'What is the critical angle for total internal reflection from water to air? (n_water = 1.33)',
        options: ['48.6°', '41.8°', '53.1°', '36.9°'],
        correct: '48.6°',
        explanation: 'θc = arcsin(1/1.33) = arcsin(0.752) ≈ 48.6°',
        difficulty: 'hard'
      },
      {
        id: 'wave_hard_2',
        question: 'In Young\'s double-slit experiment, what determines the spacing between bright fringes?',
        options: ['Slit width only', 'Wavelength and slit separation', 'Screen distance only', 'Light intensity'],
        correct: 'Wavelength and slit separation',
        explanation: 'Fringe spacing depends on wavelength λ, distance to screen D, and slit separation d: y = λD/d',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_thermodynamics',
    name: 'Grade 12: Thermodynamics',
    description: 'Heat, temperature, and energy transfer',
    questions: [
      // Easy Questions
      {
        id: 'g12_thermo_easy_1',
        question: 'What is the SI unit of temperature?',
        options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine'],
        correct: 'Kelvin',
        explanation: 'Kelvin (K) is the SI base unit of thermodynamic temperature.',
        difficulty: 'easy'
      },
      {
        id: 'g12_thermo_easy_2',
        question: 'What is absolute zero?',
        options: ['0°C', '0°F', '0 K', '-100°C'],
        correct: '0 K',
        explanation: 'Absolute zero is 0 K (-273.15°C), the theoretical minimum temperature.',
        difficulty: 'easy'
      },
      {
        id: 'g12_thermo_easy_3',
        question: 'What is heat?',
        options: ['Temperature', 'Energy in transit due to temperature difference', 'Molecular motion', 'Pressure'],
        correct: 'Energy in transit due to temperature difference',
        explanation: 'Heat is energy that flows from hot to cold objects.',
        difficulty: 'easy'
      },
      {
        id: 'g12_thermo_easy_4',
        question: 'What happens to gas volume when temperature increases at constant pressure?',
        options: ['Decreases', 'Increases', 'Stays same', 'Becomes zero'],
        correct: 'Increases',
        explanation: 'According to Charles\' law, volume is directly proportional to temperature.',
        difficulty: 'easy'
      },
      {
        id: 'g12_thermo_med_1',
        question: 'What is the first law of thermodynamics?',
        options: ['Energy cannot be created or destroyed', 'Entropy always increases', 'Heat flows from hot to cold', 'PV = nRT'],
        correct: 'Energy cannot be created or destroyed',
        explanation: 'The first law states conservation of energy: ΔU = Q - W',
        difficulty: 'medium'
      },
      {
        id: 'g12_thermo_med_2',
        question: 'In an adiabatic process, what is true?',
        options: ['Q = 0', 'W = 0', 'ΔU = 0', 'P = constant'],
        correct: 'Q = 0',
        explanation: 'In an adiabatic process, no heat is exchanged (Q = 0).',
        difficulty: 'medium'
      },
      {
        id: 'g12_thermo_med_3',
        question: 'What is specific heat capacity?',
        options: ['Heat per unit mass', 'Heat per unit mass per degree', 'Total heat content', 'Heat per degree'],
        correct: 'Heat per unit mass per degree',
        explanation: 'Specific heat is heat required to raise 1 kg of substance by 1 K.',
        difficulty: 'medium'
      },
      {
        id: 'g12_thermo_hard_1',
        question: 'What is the efficiency of a Carnot engine operating between 400 K and 300 K?',
        options: ['25%', '33%', '75%', '67%'],
        correct: '25%',
        explanation: 'η = 1 - Tc/Th = 1 - 300/400 = 1 - 0.75 = 0.25 = 25%',
        difficulty: 'hard'
      },
      {
        id: 'g12_thermo_hard_2',
        question: 'What does the second law of thermodynamics state about entropy?',
        options: ['Entropy decreases', 'Entropy stays constant', 'Entropy increases in isolated systems', 'Entropy is zero'],
        correct: 'Entropy increases in isolated systems',
        explanation: 'The second law states that entropy of an isolated system always increases.',
        difficulty: 'hard'
      },
      // New questions
      {
        id: 'g12_thermo_easy_5',
        question: 'What is thermal equilibrium?',
        options: ['When objects have different temperatures', 'When heat transfer stops between objects', 'When objects are moving', 'When pressure is constant'],
        correct: 'When heat transfer stops between objects',
        explanation: 'Thermal equilibrium occurs when two objects reach the same temperature and heat transfer ceases.',
        difficulty: 'easy'
      },
      {
        id: 'g12_thermo_easy_6',
        question: 'What is the zeroth law of thermodynamics?',
        options: ['Energy conservation', 'Entropy increase', 'Temperature definition', 'Thermal equilibrium transitivity'],
        correct: 'Thermal equilibrium transitivity',
        explanation: 'If A is in thermal equilibrium with C, and B is in thermal equilibrium with C, then A and B are in thermal equilibrium.',
        difficulty: 'easy'
      },
      {
        id: 'g12_thermo_med_4',
        question: 'What is an isothermal process?',
        options: ['Constant pressure', 'Constant volume', 'Constant temperature', 'No heat exchange'],
        correct: 'Constant temperature',
        explanation: 'In an isothermal process, temperature remains constant throughout.',
        difficulty: 'medium'
      },
      {
        id: 'g12_thermo_med_5',
        question: 'What is the relationship between internal energy and temperature for an ideal gas?',
        options: ['U ∝ T', 'U ∝ 1/T', 'U ∝ T²', 'No relationship'],
        correct: 'U ∝ T',
        explanation: 'For an ideal gas, internal energy is directly proportional to absolute temperature.',
        difficulty: 'medium'
      },
      {
        id: 'g12_thermo_med_6',
        question: 'What happens to entropy in a reversible process?',
        options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'],
        correct: 'Remains constant',
        explanation: 'In a reversible process, the total entropy of the system and surroundings remains constant.',
        difficulty: 'medium'
      },
      {
        id: 'g12_thermo_hard_3',
        question: 'What is the coefficient of performance (COP) of a refrigerator?',
        options: ['Work input / Heat removed', 'Heat removed / Work input', 'Heat rejected / Work input', 'Work input / Heat rejected'],
        correct: 'Heat removed / Work input',
        explanation: 'COP of refrigerator = Qc/W, where Qc is heat removed from cold reservoir and W is work input.',
        difficulty: 'hard'
      },
      {
        id: 'g12_thermo_hard_4',
        question: 'For an ideal gas undergoing an adiabatic process, what is true about PVγ?',
        options: ['PVγ increases', 'PVγ decreases', 'PVγ = constant', 'PVγ = 0'],
        correct: 'PVγ = constant',
        explanation: 'For adiabatic processes in ideal gases, PVγ = constant, where γ is the heat capacity ratio.',
        difficulty: 'hard'
      },
      {
        id: 'g12_thermo_hard_5',
        question: 'What is the maximum theoretical efficiency of a heat engine operating between reservoirs at 600 K and 300 K?',
        options: ['50%', '100%', '25%', '75%'],
        correct: '50%',
        explanation: 'Maximum efficiency = 1 - Tc/Th = 1 - 300/600 = 1 - 0.5 = 0.5 = 50%',
        difficulty: 'hard'
      },
      {
        id: 'g12_thermo_hard_6',
        question: 'What is the entropy change when 1 kg of ice at 0°C melts to water at 0°C? (Latent heat of fusion = 334 kJ/kg)',
        options: ['0 J/K', '1223 J/K', '334 J/K', '273 J/K'],
        correct: '1223 J/K',
        explanation: 'ΔS = Q/T = (334,000 J)/(273 K) = 1223 J/K',
        difficulty: 'hard'
      }
    ]
  },

  // Add Grade 12 Physics Chapters
  ...grade12PhysicsChapters
];
