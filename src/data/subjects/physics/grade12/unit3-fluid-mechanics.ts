
import { Question } from '../../../types';

export const unit3FluidMechanics: Question[] = [
  // Easy Questions (10)
  {
    id: 'phys-12-fluid-1',
    question: 'What is a fluid?',
    options: ['Only liquids', 'Only gases', 'Substances that can flow', 'Only water'],
    correct: 'Substances that can flow',
    explanation: 'Fluids are substances that can flow and take the shape of their container, including liquids and gases.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-fluid-2',
    question: 'What is pressure?',
    options: ['Force per unit area', 'Force times area', 'Mass per volume', 'Volume per mass'],
    correct: 'Force per unit area',
    explanation: 'Pressure is defined as force per unit area: P = F/A',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-fluid-3',
    question: 'What is the SI unit of pressure?',
    options: ['Newton', 'Pascal', 'Joule', 'Watt'],
    correct: 'Pascal',
    explanation: 'Pascal (Pa) is the SI unit of pressure, equal to 1 N/m².',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-fluid-4',
    question: 'What is atmospheric pressure at sea level?',
    options: ['101,325 Pa', '100,000 Pa', '9.8 Pa', '1000 Pa'],
    correct: '101,325 Pa',
    explanation: 'Standard atmospheric pressure at sea level is 101,325 Pa or 1 atm.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-fluid-5',
    question: 'What is density?',
    options: ['Mass per unit volume', 'Volume per unit mass', 'Force per area', 'Weight per volume'],
    correct: 'Mass per unit volume',
    explanation: 'Density is mass per unit volume: ρ = m/V',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-fluid-6',
    question: 'What is buoyancy?',
    options: ['Sinking force', 'Upward force on submerged objects', 'Sideways force', 'Downward force only'],
    correct: 'Upward force on submerged objects',
    explanation: 'Buoyancy is the upward force exerted by a fluid on an object placed in it.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-fluid-7',
    question: 'What does Archimedes\' principle state?',
    options: ['Objects always float', 'Buoyant force equals weight of displaced fluid', 'Pressure increases with depth', 'Fluids are incompressible'],
    correct: 'Buoyant force equals weight of displaced fluid',
    explanation: 'Archimedes\' principle: buoyant force equals the weight of the fluid displaced by the object.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-fluid-8',
    question: 'What happens to pressure in a fluid as depth increases?',
    options: ['Decreases', 'Stays constant', 'Increases', 'Becomes zero'],
    correct: 'Increases',
    explanation: 'Pressure in a fluid increases with depth due to the weight of the fluid above.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-fluid-9',
    question: 'What is the formula for pressure at depth h in a fluid?',
    options: ['P = ρgh', 'P = mgh', 'P = Vgh', 'P = ρg/h'],
    correct: 'P = ρgh',
    explanation: 'Pressure at depth h in a fluid of density ρ is P = ρgh (plus atmospheric pressure).',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-fluid-10',
    question: 'An object will float if:',
    options: ['Its density > fluid density', 'Its density < fluid density', 'Its mass is large', 'Its volume is small'],
    correct: 'Its density < fluid density',
    explanation: 'An object floats when its average density is less than the density of the fluid.',
    difficulty: 'easy'
  },

  // Medium Questions (10)
  {
    id: 'phys-12-fluid-med-1',
    question: 'What is the pressure at 10 m depth in water? (ρ_water = 1000 kg/m³)',
    options: ['98,000 Pa', '199,000 Pa', '98 Pa', '1000 Pa'],
    correct: '199,000 Pa',
    explanation: 'P = P₀ + ρgh = 101,325 + 1000×9.8×10 = 199,325 Pa ≈ 199,000 Pa',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-fluid-med-2',
    question: 'What is Pascal\'s principle?',
    options: ['Pressure decreases with depth', 'Pressure applied to confined fluid is transmitted equally', 'Objects float in water', 'Fluids flow from high to low pressure'],
    correct: 'Pressure applied to confined fluid is transmitted equally',
    explanation: 'Pascal\'s principle: pressure applied to a confined fluid is transmitted undiminished in all directions.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-fluid-med-3',
    question: 'A hydraulic lift has pistons of area 10 cm² and 100 cm². If 50 N is applied to the small piston, what force is produced on the large piston?',
    options: ['5 N', '50 N', '500 N', '5000 N'],
    correct: '500 N',
    explanation: 'F₂/F₁ = A₂/A₁; F₂ = F₁ × A₂/A₁ = 50 × 100/10 = 500 N',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-fluid-med-4',
    question: 'What is the buoyant force on a 2 m³ object completely submerged in water?',
    options: ['19,600 N', '9,800 N', '2,000 N', '1,000 N'],
    correct: '19,600 N',
    explanation: 'F_b = ρ_fluid × V_displaced × g = 1000 × 2 × 9.8 = 19,600 N',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-fluid-med-5',
    question: 'What is Bernoulli\'s equation for an ideal fluid?',
    options: ['P + ½ρv² + ρgh = constant', 'P + ρv² + ρgh = constant', 'P - ½ρv² + ρgh = constant', 'P + ½ρv² - ρgh = constant'],
    correct: 'P + ½ρv² + ρgh = constant',
    explanation: 'Bernoulli\'s equation: P + ½ρv² + ρgh = constant along a streamline.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-fluid-med-6',
    question: 'What is the continuity equation for fluid flow?',
    options: ['A₁v₁ = A₂v₂', 'A₁/v₁ = A₂/v₂', 'A₁ + v₁ = A₂ + v₂', 'A₁v₁² = A₂v₂²'],
    correct: 'A₁v₁ = A₂v₂',
    explanation: 'Continuity equation: A₁v₁ = A₂v₂ (conservation of mass for incompressible flow).',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-fluid-med-7',
    question: 'What is the terminal velocity of a falling object?',
    options: ['When acceleration is maximum', 'When drag force equals gravitational force', 'When object stops falling', 'When velocity is zero'],
    correct: 'When drag force equals gravitational force',
    explanation: 'Terminal velocity occurs when drag force balances gravitational force, resulting in zero acceleration.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-fluid-med-8',
    question: 'A wooden block (density 600 kg/m³) floats in water. What fraction is submerged?',
    options: ['40%', '60%', '100%', '80%'],
    correct: '60%',
    explanation: 'Fraction submerged = ρ_object/ρ_fluid = 600/1000 = 0.6 = 60%',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-fluid-med-9',
    question: 'What is viscosity?',
    options: ['Fluid density', 'Resistance to flow', 'Fluid pressure', 'Fluid temperature'],
    correct: 'Resistance to flow',
    explanation: 'Viscosity is a measure of a fluid\'s resistance to flow or deformation.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-fluid-med-10',
    question: 'In a venturi tube, where is the pressure lowest?',
    options: ['At the inlet', 'At the outlet', 'At the narrowest section', 'Pressure is constant'],
    correct: 'At the narrowest section',
    explanation: 'By Bernoulli\'s principle, pressure is lowest where velocity is highest (narrowest section).',
    difficulty: 'medium'
  },

  // Hard Questions (10)
  {
    id: 'phys-12-fluid-hard-1',
    question: 'A submarine is at 200 m depth. What is the absolute pressure on its hull? (ρ_seawater = 1025 kg/m³)',
    options: ['2.1 MPa', '2.0 MPa', '1.9 MPa', '2.2 MPa'],
    correct: '2.1 MPa',
    explanation: 'P = P₀ + ρgh = 101,325 + 1025×9.8×200 = 2,110,325 Pa ≈ 2.1 MPa',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-fluid-hard-2',
    question: 'Water flows through a pipe that narrows from 10 cm² to 5 cm² cross-section. If inlet velocity is 2 m/s, what is the pressure difference?',
    options: ['3000 Pa', '6000 Pa', '9000 Pa', '12000 Pa'],
    correct: '9000 Pa',
    explanation: 'v₂ = 4 m/s (continuity); ΔP = ½ρ(v₁² - v₂²) = ½×1000×(4-16) = 9000 Pa',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-fluid-hard-3',
    question: 'What is the Reynolds number for flow in a pipe?',
    options: ['Re = ρvD/μ', 'Re = μvD/ρ', 'Re = ρv/μD', 'Re = ρμD/v'],
    correct: 'Re = ρvD/μ',
    explanation: 'Reynolds number: Re = ρvD/μ where ρ is density, v is velocity, D is diameter, μ is viscosity.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-fluid-hard-4',
    question: 'A spherical balloon of radius 1 m floats in air. If air density is 1.2 kg/m³, what is the maximum mass it can lift?',
    options: ['5.0 kg', '4.2 kg', '6.3 kg', '7.5 kg'],
    correct: '5.0 kg',
    explanation: 'Buoyant force = ρ_air × V × g = 1.2 × (4π/3) × 1³ × 9.8 ≈ 49 N ≈ 5 kg weight',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-fluid-hard-5',
    question: 'What is the expression for drag force on a sphere at high Reynolds numbers?',
    options: ['F_d = 6πμrv', 'F_d = ½ρv²C_dA', 'F_d = ρvA', 'F_d = μv/r'],
    correct: 'F_d = ½ρv²C_dA',
    explanation: 'At high Re: F_d = ½ρv²C_dA where C_d is drag coefficient and A is cross-sectional area.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-fluid-hard-6',
    question: 'A U-tube manometer has mercury (ρ = 13,600 kg/m³) with 15 cm height difference. What is the pressure difference?',
    options: ['19,992 Pa', '20,000 Pa', '15,000 Pa', '25,000 Pa'],
    correct: '19,992 Pa',
    explanation: 'ΔP = ρgh = 13,600 × 9.8 × 0.15 = 19,992 Pa',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-fluid-hard-7',
    question: 'What is the speed of efflux from a hole at depth h below the free surface (Torricelli\'s law)?',
    options: ['v = √(gh)', 'v = √(2gh)', 'v = √(3gh)', 'v = gh'],
    correct: 'v = √(2gh)',
    explanation: 'Torricelli\'s law: v = √(2gh) for efflux velocity from a hole at depth h.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-fluid-hard-8',
    question: 'For laminar flow in a pipe, how does flow rate depend on pressure gradient?',
    options: ['Linear relationship', 'Quadratic relationship', 'Inverse relationship', 'No relationship'],
    correct: 'Linear relationship',
    explanation: 'Poiseuille\'s law: flow rate is directly proportional to pressure gradient for laminar flow.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-fluid-hard-9',
    question: 'A fluid element in rotational motion has:',
    options: ['Zero vorticity', 'Non-zero vorticity', 'Constant pressure', 'Zero velocity'],
    correct: 'Non-zero vorticity',
    explanation: 'Vorticity measures the local rotation of fluid elements; rotational motion has non-zero vorticity.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-fluid-hard-10',
    question: 'What is the critical Reynolds number for transition from laminar to turbulent flow in a pipe?',
    options: ['1000', '2300', '4000', '10000'],
    correct: '2300',
    explanation: 'Critical Reynolds number for pipe flow is approximately 2300, above which flow becomes turbulent.',
    difficulty: 'hard'
  }
];
