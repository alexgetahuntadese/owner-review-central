
import { Chapter } from '../../types';

export const grade11ChemistryChapters: Chapter[] = [
  {
    id: 'chem-11-1',
    name: 'Atomic Structure',
    description: 'Advanced study of atomic structure and electron configuration',
    questions: [
      {
        id: 'chem-11-1-1',
        question: 'How many electrons can the third electron shell hold?',
        options: ['8', '18', '32', '2'],
        correct: '18',
        explanation: 'The third shell (n=3) can hold a maximum of 2n² = 2(3²) = 18 electrons.',
        difficulty: 'easy'
      },
      {
        id: 'chem-11-1-2',
        question: 'What is the electron configuration of chlorine (Z=17)?',
        options: ['1s² 2s² 2p⁶ 3s² 3p⁵', '1s² 2s² 2p⁶ 3s² 3p⁶', '1s² 2s² 2p⁶ 3s¹', '1s² 2s² 2p⁶ 3s² 3p⁴'],
        correct: '1s² 2s² 2p⁶ 3s² 3p⁵',
        explanation: 'Chlorine has 17 electrons: 2 + 2 + 6 + 2 + 5 = 17.',
        difficulty: 'medium'
      },
      {
        id: 'chem-11-1-3',
        question: 'Which principle states that electrons occupy orbitals singly before pairing?',
        options: ['Pauli exclusion principle', 'Aufbau principle', 'Hund\'s rule', 'Heisenberg principle'],
        correct: 'Hund\'s rule',
        explanation: 'Hund\'s rule states that electrons occupy orbitals of equal energy singly before pairing.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'chem-11-2',
    name: 'Chemical Bonding',
    description: 'Understanding how atoms bond to form compounds',
    questions: [
      {
        id: 'chem-11-2-1',
        question: 'What type of bond forms between sodium and chlorine?',
        options: ['Covalent bond', 'Ionic bond', 'Metallic bond', 'Hydrogen bond'],
        correct: 'Ionic bond',
        explanation: 'Sodium (metal) and chlorine (non-metal) form an ionic bond through electron transfer.',
        difficulty: 'easy'
      },
      {
        id: 'chem-11-2-2',
        question: 'How many covalent bonds does carbon typically form?',
        options: ['2', '3', '4', '1'],
        correct: '4',
        explanation: 'Carbon has 4 valence electrons and typically forms 4 covalent bonds to complete its octet.',
        difficulty: 'medium'
      },
      {
        id: 'chem-11-2-3',
        question: 'What is the molecular geometry of methane (CH₄)?',
        options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Bent'],
        correct: 'Tetrahedral',
        explanation: 'CH₄ has 4 bonding pairs around carbon, giving it a tetrahedral geometry.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'chem-11-3',
    name: 'States of Matter',
    description: 'Properties and behavior of solids, liquids, and gases',
    questions: [
      {
        id: 'chem-11-3-1',
        question: 'What happens to the kinetic energy of gas molecules when temperature increases?',
        options: ['Decreases', 'Increases', 'Stays the same', 'Becomes zero'],
        correct: 'Increases',
        explanation: 'Higher temperature means higher average kinetic energy of gas molecules.',
        difficulty: 'easy'
      },
      {
        id: 'chem-11-3-2',
        question: 'According to Charles\' Law, what happens to gas volume when temperature increases at constant pressure?',
        options: ['Volume decreases', 'Volume increases', 'Volume stays constant', 'Volume becomes zero'],
        correct: 'Volume increases',
        explanation: 'Charles\' Law states that volume is directly proportional to temperature at constant pressure.',
        difficulty: 'medium'
      },
      {
        id: 'chem-11-3-3',
        question: 'What is the ideal gas equation?',
        options: ['PV = nRT', 'P = VnRT', 'V = PnRT', 'T = PVnR'],
        correct: 'PV = nRT',
        explanation: 'The ideal gas law relates pressure, volume, moles, and temperature.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'chem-11-4',
    name: 'Chemical Thermodynamics',
    description: 'Energy changes in chemical reactions',
    questions: [
      {
        id: 'chem-11-4-1',
        question: 'What is enthalpy?',
        options: ['Heat content of a system', 'Temperature change', 'Pressure change', 'Volume change'],
        correct: 'Heat content of a system',
        explanation: 'Enthalpy (H) represents the heat content of a system at constant pressure.',
        difficulty: 'easy'
      },
      {
        id: 'chem-11-4-2',
        question: 'In an exothermic reaction, what happens to enthalpy?',
        options: ['ΔH > 0', 'ΔH < 0', 'ΔH = 0', 'ΔH is undefined'],
        correct: 'ΔH < 0',
        explanation: 'Exothermic reactions release heat, so the change in enthalpy is negative.',
        difficulty: 'medium'
      },
      {
        id: 'chem-11-4-3',
        question: 'What does Hess\'s Law state?',
        options: ['Energy cannot be created or destroyed', 'The total enthalpy change is independent of the pathway', 'Reactions proceed to equilibrium', 'Temperature affects reaction rate'],
        correct: 'The total enthalpy change is independent of the pathway',
        explanation: 'Hess\'s Law states that enthalpy change depends only on initial and final states.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'chem-11-5',
    name: 'Chemical Equilibrium',
    description: 'Understanding reversible reactions and equilibrium principles',
    questions: [
      {
        id: 'chem-11-5-1',
        question: 'What is chemical equilibrium?',
        options: ['When reactants are consumed', 'When forward and reverse reaction rates are equal', 'When products are formed', 'When temperature is constant'],
        correct: 'When forward and reverse reaction rates are equal',
        explanation: 'Equilibrium occurs when the rates of forward and reverse reactions are equal.',
        difficulty: 'easy'
      },
      {
        id: 'chem-11-5-2',
        question: 'According to Le Chatelier\'s principle, what happens when pressure is increased in a gaseous equilibrium?',
        options: ['Equilibrium shifts to the side with more moles', 'Equilibrium shifts to the side with fewer moles', 'No change in equilibrium', 'Reaction stops'],
        correct: 'Equilibrium shifts to the side with fewer moles',
        explanation: 'Increasing pressure favors the side with fewer gas molecules to reduce pressure.',
        difficulty: 'medium'
      },
      {
        id: 'chem-11-5-3',
        question: 'What is the equilibrium constant expression for: aA + bB ⇌ cC + dD?',
        options: ['K = [A][B]/[C][D]', 'K = [C]^c[D]^d/[A]^a[B]^b', 'K = [A]^a[B]^b/[C]^c[D]^d', 'K = [C][D]/[A][B]'],
        correct: 'K = [C]^c[D]^d/[A]^a[B]^b',
        explanation: 'The equilibrium constant is products over reactants, each raised to their stoichiometric coefficients.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'chem-11-6',
    name: 'Acids and Bases',
    description: 'Properties and theories of acids and bases',
    questions: [
      {
        id: 'chem-11-6-1',
        question: 'According to Arrhenius theory, what do acids produce in water?',
        options: ['OH⁻ ions', 'H⁺ ions', 'Electrons', 'Neutrons'],
        correct: 'H⁺ ions',
        explanation: 'Arrhenius acids produce hydrogen ions (H⁺) when dissolved in water.',
        difficulty: 'easy'
      },
      {
        id: 'chem-11-6-2',
        question: 'What is the pH of a neutral solution at 25°C?',
        options: ['0', '7', '14', '1'],
        correct: '7',
        explanation: 'Pure water at 25°C has a pH of 7, which is neutral.',
        difficulty: 'medium'
      },
      {
        id: 'chem-11-6-3',
        question: 'In the Brønsted-Lowry theory, what is a base?',
        options: ['Proton donor', 'Proton acceptor', 'Electron donor', 'Electron acceptor'],
        correct: 'Proton acceptor',
        explanation: 'Brønsted-Lowry bases accept protons (H⁺ ions) from acids.',
        difficulty: 'hard'
      }
    ]
  }
];
