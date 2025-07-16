
import { Question } from '../../../types';

export const unit4Electromagnetism: Question[] = [
  // Easy Questions (10)
  {
    id: 'phys-12-em-1',
    question: 'What is an electric field?',
    options: ['Force on any object', 'Force per unit charge', 'Total charge', 'Electric potential'],
    correct: 'Force per unit charge',
    explanation: 'Electric field is the electric force per unit positive charge.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-em-2',
    question: 'What is the SI unit of electric field?',
    options: ['Newton', 'Coulomb', 'N/C or V/m', 'Ampere'],
    correct: 'N/C or V/m',
    explanation: 'Electric field is measured in Newtons per Coulomb (N/C) or Volts per meter (V/m).',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-em-3',
    question: 'What is Coulomb\'s law?',
    options: ['F = ma', 'F = kq₁q₂/r²', 'F = BIL', 'F = qE'],
    correct: 'F = kq₁q₂/r²',
    explanation: 'Coulomb\'s law: F = kq₁q₂/r² where k = 9×10⁹ N⋅m²/C².',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-em-4',
    question: 'What is electric potential?',
    options: ['Force per charge', 'Energy per unit charge', 'Total energy', 'Electric field strength'],
    correct: 'Energy per unit charge',
    explanation: 'Electric potential is the electric potential energy per unit charge.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-em-5',
    question: 'What is the SI unit of magnetic field?',
    options: ['Tesla', 'Weber', 'Henry', 'Ampere'],
    correct: 'Tesla',
    explanation: 'Tesla (T) is the SI unit of magnetic field strength.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-em-6',
    question: 'What force acts on a moving charge in a magnetic field?',
    options: ['Electric force', 'Gravitational force', 'Lorentz force', 'Nuclear force'],
    correct: 'Lorentz force',
    explanation: 'The Lorentz force F = qv×B acts on a moving charge in a magnetic field.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-em-7',
    question: 'What is electromagnetic induction?',
    options: ['Creating charges', 'Generating EMF by changing magnetic flux', 'Destroying fields', 'Creating mass'],
    correct: 'Generating EMF by changing magnetic flux',
    explanation: 'Electromagnetic induction is the generation of EMF by changing magnetic flux through a circuit.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-em-8',
    question: 'What is Faraday\'s law?',
    options: ['EMF = -dΦ/dt', 'F = ma', 'E = mc²', 'V = IR'],
    correct: 'EMF = -dΦ/dt',
    explanation: 'Faraday\'s law: EMF = -dΦ/dt where Φ is magnetic flux.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-em-9',
    question: 'What do electric field lines represent?',
    options: ['Charge movement', 'Direction of electric field', 'Magnetic field', 'Current flow'],
    correct: 'Direction of electric field',
    explanation: 'Electric field lines show the direction of the electric field at each point.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-em-10',
    question: 'What is the direction of magnetic field around a current-carrying wire?',
    options: ['Radial', 'Linear', 'Circular', 'Random'],
    correct: 'Circular',
    explanation: 'Magnetic field lines around a straight current-carrying wire form concentric circles.',
    difficulty: 'easy'
  },

  // Medium Questions (10)
  {
    id: 'phys-12-em-med-1',
    question: 'What is the electric field 2 m from a 10 μC point charge?',
    options: ['22,500 N/C', '45,000 N/C', '90,000 N/C', '180,000 N/C'],
    correct: '22,500 N/C',
    explanation: 'E = kq/r² = (9×10⁹)(10×10⁻⁶)/(2)² = 22,500 N/C',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-em-med-2',
    question: 'What is the force on a 5 μC charge in an electric field of 1000 N/C?',
    options: ['0.005 N', '0.05 N', '0.5 N', '5 N'],
    correct: '0.005 N',
    explanation: 'F = qE = (5×10⁻⁶)(1000) = 0.005 N',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-em-med-3',
    question: 'What is the magnetic force on a 2 m wire carrying 5 A in a 0.3 T field perpendicular to the wire?',
    options: ['3 N', '6 N', '10 N', '30 N'],
    correct: '3 N',
    explanation: 'F = BIL = (0.3)(5)(2) = 3 N',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-em-med-4',
    question: 'What is the magnetic field at the center of a circular loop of radius 0.1 m carrying 2 A?',
    options: ['1.26×10⁻⁵ T', '2.51×10⁻⁵ T', '6.28×10⁻⁶ T', '1.26×10⁻⁶ T'],
    correct: '1.26×10⁻⁵ T',
    explanation: 'B = μ₀I/(2r) = (4π×10⁻⁷)(2)/(2×0.1) = 1.26×10⁻⁵ T',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-em-med-5',
    question: 'What is Lenz\'s law?',
    options: ['Induced current opposes the change causing it', 'Current is proportional to voltage', 'Force equals mass times acceleration', 'Energy is conserved'],
    correct: 'Induced current opposes the change causing it',
    explanation: 'Lenz\'s law states that induced current flows in a direction to oppose the change in magnetic flux.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-em-med-6',
    question: 'What is the capacitance of a parallel plate capacitor with area A and separation d?',
    options: ['C = ε₀A/d', 'C = ε₀d/A', 'C = ε₀Ad', 'C = A/(ε₀d)'],
    correct: 'C = ε₀A/d',
    explanation: 'For parallel plate capacitor: C = ε₀A/d where ε₀ is permittivity of free space.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-em-med-7',
    question: 'What is the energy stored in a capacitor?',
    options: ['U = ½CV²', 'U = CV²', 'U = ½CV', 'U = C²V'],
    correct: 'U = ½CV²',
    explanation: 'Energy stored in capacitor: U = ½CV² = ½QV = Q²/(2C)',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-em-med-8',
    question: 'What is the period of a charged particle in a uniform magnetic field?',
    options: ['T = 2πm/(qB)', 'T = 2πmq/B', 'T = 2πB/(mq)', 'T = 2πmB/q'],
    correct: 'T = 2πm/(qB)',
    explanation: 'Period of circular motion in magnetic field: T = 2πm/(qB)',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-em-med-9',
    question: 'What is mutual inductance?',
    options: ['Self-induced EMF', 'EMF induced in one coil by current change in another', 'Resistance of coil', 'Capacitance between coils'],
    correct: 'EMF induced in one coil by current change in another',
    explanation: 'Mutual inductance is the EMF induced in one coil due to changing current in a nearby coil.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-em-med-10',
    question: 'What is the speed of electromagnetic waves in vacuum?',
    options: ['3×10⁶ m/s', '3×10⁸ m/s', '3×10¹⁰ m/s', '3×10¹² m/s'],
    correct: '3×10⁸ m/s',
    explanation: 'Speed of light in vacuum c = 3×10⁸ m/s = 1/√(μ₀ε₀)',
    difficulty: 'medium'
  },

  // Hard Questions (10)
  {
    id: 'phys-12-em-hard-1',
    question: 'What is the electric field inside a conducting sphere with charge Q?',
    options: ['kQ/r²', 'Zero', 'kQ/R²', 'Constant non-zero'],
    correct: 'Zero',
    explanation: 'Electric field inside any conductor in electrostatic equilibrium is zero.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-em-hard-2',
    question: 'What is Gauss\'s law in integral form?',
    options: ['∮E⋅dA = Q/ε₀', '∮E⋅dr = 0', '∮B⋅dA = 0', '∮B⋅dr = μ₀I'],
    correct: '∮E⋅dA = Q/ε₀',
    explanation: 'Gauss\'s law: ∮E⋅dA = Q_enclosed/ε₀',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-em-hard-3',
    question: 'What is Ampère\'s law?',
    options: ['∮B⋅dr = μ₀I_enclosed', '∮E⋅dr = -dΦ_B/dt', '∮E⋅dA = Q/ε₀', 'F = qE + qv×B'],
    correct: '∮B⋅dr = μ₀I_enclosed',
    explanation: 'Ampère\'s law: ∮B⋅dr = μ₀I_enclosed',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-em-hard-4',
    question: 'What is the displacement current in Maxwell\'s equations?',
    options: ['I_d = ε₀dE/dt', 'I_d = ε₀dΦ_E/dt', 'I_d = μ₀dB/dt', 'I_d = ε₀∂E/∂t'],
    correct: 'I_d = ε₀dΦ_E/dt',
    explanation: 'Displacement current: I_d = ε₀dΦ_E/dt where Φ_E is electric flux.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-em-hard-5',
    question: 'What is the magnetic dipole moment of a current loop?',
    options: ['μ = IA', 'μ = I/A', 'μ = A/I', 'μ = I²A'],
    correct: 'μ = IA',
    explanation: 'Magnetic dipole moment: μ = IA where I is current and A is area vector.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-em-hard-6',
    question: 'What is the self-inductance of a solenoid with N turns, length l, and cross-sectional area A?',
    options: ['L = μ₀N²A/l', 'L = μ₀NA/l', 'L = μ₀NlA', 'L = μ₀N²l/A'],
    correct: 'L = μ₀N²A/l',
    explanation: 'Self-inductance of solenoid: L = μ₀N²A/l',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-em-hard-7',
    question: 'What is the Poynting vector?',
    options: ['S = E×B/μ₀', 'S = E⋅B/μ₀', 'S = EB/μ₀', 'S = E²B/μ₀'],
    correct: 'S = E×B/μ₀',
    explanation: 'Poynting vector S = E×B/μ₀ represents electromagnetic energy flow.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-em-hard-8',
    question: 'What is the cyclotron frequency of a charged particle in a magnetic field?',
    options: ['f = qB/(2πm)', 'f = 2πqB/m', 'f = qB/m', 'f = m/(2πqB)'],
    correct: 'f = qB/(2πm)',
    explanation: 'Cyclotron frequency: f = qB/(2πm) or ω = qB/m',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-em-hard-9',
    question: 'What is the Hall effect?',
    options: ['Voltage across current-carrying conductor in magnetic field', 'Resistance change with temperature', 'Current amplification', 'Magnetic field generation'],
    correct: 'Voltage across current-carrying conductor in magnetic field',
    explanation: 'Hall effect is the production of voltage across a current-carrying conductor in a magnetic field.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-em-hard-10',
    question: 'What is the boundary condition for electric field at a conductor surface?',
    options: ['E_parallel = 0', 'E_perpendicular = σ/ε₀', 'Both E_parallel = 0 and E_perpendicular = σ/ε₀', 'E is continuous'],
    correct: 'Both E_parallel = 0 and E_perpendicular = σ/ε₀',
    explanation: 'At conductor surface: parallel component E_∥ = 0 and perpendicular component E_⊥ = σ/ε₀.',
    difficulty: 'hard'
  }
];
