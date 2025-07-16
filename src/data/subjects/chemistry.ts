import { Chapter } from '../types';

export const chemistryChapters: Chapter[] = [
  {
    id: 'atomic_structure',
    name: 'Atomic Structure',
    description: 'Atoms, electrons, protons, neutrons, and periodic table',
    questions: [
      // Easy Questions (10)
      {
        id: 'atom_easy_1',
        question: 'What is an atom?',
        options: ['Smallest unit of matter', 'A molecule', 'A compound', 'An element'],
        correct: 'Smallest unit of matter',
        explanation: 'An atom is the smallest unit of matter that retains the properties of an element.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_2',
        question: 'What is the charge of a proton?',
        options: ['Positive', 'Negative', 'Neutral', 'Variable'],
        correct: 'Positive',
        explanation: 'Protons carry a positive electrical charge.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_3',
        question: 'What is the charge of an electron?',
        options: ['Positive', 'Negative', 'Neutral', 'Variable'],
        correct: 'Negative',
        explanation: 'Electrons carry a negative electrical charge.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_4',
        question: 'What is the charge of a neutron?',
        options: ['Positive', 'Negative', 'Neutral', 'Variable'],
        correct: 'Neutral',
        explanation: 'Neutrons have no electrical charge; they are neutral.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_5',
        question: 'Where are protons located in an atom?',
        options: ['Nucleus', 'Electron shell', 'Outside atom', 'Moving freely'],
        correct: 'Nucleus',
        explanation: 'Protons are located in the nucleus at the center of the atom.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_6',
        question: 'Where are electrons located in an atom?',
        options: ['Nucleus', 'Electron shells around nucleus', 'Center', 'Outside atom'],
        correct: 'Electron shells around nucleus',
        explanation: 'Electrons orbit the nucleus in electron shells or energy levels.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_7',
        question: 'What determines the atomic number?',
        options: ['Number of neutrons', 'Number of protons', 'Number of electrons', 'Atomic mass'],
        correct: 'Number of protons',
        explanation: 'The atomic number is equal to the number of protons in the nucleus.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_8',
        question: 'What is the periodic table?',
        options: ['List of compounds', 'Arrangement of elements by atomic number', 'Chemical reactions', 'Molecular structures'],
        correct: 'Arrangement of elements by atomic number',
        explanation: 'The periodic table organizes elements by increasing atomic number.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_9',
        question: 'What is an element?',
        options: ['Mixture of atoms', 'Pure substance with same atomic number', 'Chemical compound', 'Molecular formula'],
        correct: 'Pure substance with same atomic number',
        explanation: 'An element is a pure substance consisting of atoms with the same atomic number.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_10',
        question: 'What is atomic mass?',
        options: ['Number of protons', 'Number of electrons', 'Mass of protons and neutrons', 'Number of neutrons'],
        correct: 'Mass of protons and neutrons',
        explanation: 'Atomic mass is primarily the combined mass of protons and neutrons in the nucleus.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'atom_med_1',
        question: 'What are isotopes?',
        options: ['Different elements', 'Atoms with same protons, different neutrons', 'Charged atoms', 'Molecular compounds'],
        correct: 'Atoms with same protons, different neutrons',
        explanation: 'Isotopes are atoms of the same element with different numbers of neutrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_2',
        question: 'What is an ion?',
        options: ['Neutral atom', 'Atom with unequal protons and electrons', 'Type of molecule', 'Chemical bond'],
        correct: 'Atom with unequal protons and electrons',
        explanation: 'An ion is an atom that has gained or lost electrons, giving it a net charge.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_3',
        question: 'What is electron configuration?',
        options: ['Number of electrons', 'Arrangement of electrons in shells', 'Electron charge', 'Electron mass'],
        correct: 'Arrangement of electrons in shells',
        explanation: 'Electron configuration describes how electrons are distributed in atomic orbitals.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_4',
        question: 'What is the maximum number of electrons in the first shell?',
        options: ['2', '8', '18', '32'],
        correct: '2',
        explanation: 'The first electron shell (K shell) can hold a maximum of 2 electrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_5',
        question: 'What is the maximum number of electrons in the second shell?',
        options: ['2', '8', '18', '32'],
        correct: '8',
        explanation: 'The second electron shell (L shell) can hold a maximum of 8 electrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_6',
        question: 'What is a cation?',
        options: ['Negative ion', 'Positive ion', 'Neutral atom', 'Electron'],
        correct: 'Positive ion',
        explanation: 'A cation is a positively charged ion, formed when an atom loses electrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_7',
        question: 'What is an anion?',
        options: ['Positive ion', 'Negative ion', 'Neutral atom', 'Proton'],
        correct: 'Negative ion',
        explanation: 'An anion is a negatively charged ion, formed when an atom gains electrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_8',
        question: 'What are valence electrons?',
        options: ['All electrons', 'Electrons in nucleus', 'Electrons in outermost shell', 'Core electrons'],
        correct: 'Electrons in outermost shell',
        explanation: 'Valence electrons are the electrons in the outermost shell of an atom.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_9',
        question: 'What determines chemical properties of an element?',
        options: ['Atomic mass', 'Number of neutrons', 'Number of valence electrons', 'Nuclear charge'],
        correct: 'Number of valence electrons',
        explanation: 'The number of valence electrons primarily determines an element\'s chemical properties.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_10',
        question: 'What is atomic radius?',
        options: ['Size of nucleus', 'Distance from nucleus to outermost electrons', 'Number of shells', 'Atomic mass'],
        correct: 'Distance from nucleus to outermost electrons',
        explanation: 'Atomic radius is the distance from the nucleus to the outermost electrons.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'atom_hard_1',
        question: 'What is the Aufbau principle?',
        options: ['Electrons fill orbitals randomly', 'Electrons fill lowest energy orbitals first', 'All orbitals fill equally', 'Electrons avoid pairing'],
        correct: 'Electrons fill lowest energy orbitals first',
        explanation: 'The Aufbau principle states that electrons fill atomic orbitals starting with the lowest energy levels.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_2',
        question: 'What is Hund\'s rule?',
        options: ['Fill orbitals completely first', 'Put one electron in each orbital before pairing', 'Electrons have opposite spins', 'Energy levels are equal'],
        correct: 'Put one electron in each orbital before pairing',
        explanation: 'Hund\'s rule states that electrons occupy orbitals singly before pairing up.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_3',
        question: 'What is the Pauli exclusion principle?',
        options: ['Electrons have same spin', 'No two electrons can have identical quantum numbers', 'Electrons fill randomly', 'All orbitals are equivalent'],
        correct: 'No two electrons can have identical quantum numbers',
        explanation: 'The Pauli exclusion principle states that no two electrons in an atom can have the same set of quantum numbers.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_4',
        question: 'What is ionization energy?',
        options: ['Energy to add electron', 'Energy to remove electron', 'Energy to move electron', 'Energy in nucleus'],
        correct: 'Energy to remove electron',
        explanation: 'Ionization energy is the energy required to remove an electron from an atom.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_5',
        question: 'What is electron affinity?',
        options: ['Energy to remove electron', 'Energy released when adding electron', 'Binding energy', 'Orbital energy'],
        correct: 'Energy released when adding electron',
        explanation: 'Electron affinity is the energy change when an electron is added to a neutral atom.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_6',
        question: 'What is electronegativity?',
        options: ['Atomic size', 'Ability to attract electrons in bonds', 'Number of electrons', 'Charge of atom'],
        correct: 'Ability to attract electrons in bonds',
        explanation: 'Electronegativity is the ability of an atom to attract electrons in a chemical bond.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_7',
        question: 'What is the effective nuclear charge?',
        options: ['Total nuclear charge', 'Net charge felt by valence electrons', 'Charge of ion', 'Electron charge'],
        correct: 'Net charge felt by valence electrons',
        explanation: 'Effective nuclear charge is the net charge experienced by an electron in an atom.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_8',
        question: 'What are quantum numbers?',
        options: ['Atomic masses', 'Mathematical descriptions of electron properties', 'Periodic table positions', 'Chemical formulas'],
        correct: 'Mathematical descriptions of electron properties',
        explanation: 'Quantum numbers describe the quantum state and properties of electrons in atoms.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_9',
        question: 'What is orbital hybridization?',
        options: ['Mixing of atomic orbitals', 'Electron pairing', 'Nuclear fusion', 'Ionization process'],
        correct: 'Mixing of atomic orbitals',
        explanation: 'Hybridization is the mixing of atomic orbitals to form new hybrid orbitals.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_10',
        question: 'What is the Heisenberg uncertainty principle?',
        options: ['Electrons have fixed positions', 'Cannot know exact position and momentum simultaneously', 'All particles are uncertain', 'Energy is quantized'],
        correct: 'Cannot know exact position and momentum simultaneously',
        explanation: 'The uncertainty principle states that position and momentum of a particle cannot both be precisely determined.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'chemical_bonding',
    name: 'Chemical Bonding',
    description: 'Ionic, covalent, and metallic bonds',
    questions: [
      // Easy Questions (10)
      {
        id: 'bond_easy_1',
        question: 'What is a chemical bond?',
        options: ['Physical attraction', 'Force holding atoms together', 'Electron movement', 'Nuclear reaction'],
        correct: 'Force holding atoms together',
        explanation: 'A chemical bond is the force that holds atoms together in molecules and compounds.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_2',
        question: 'What is an ionic bond?',
        options: ['Sharing electrons', 'Transfer of electrons', 'Nuclear attraction', 'Metallic bonding'],
        correct: 'Transfer of electrons',
        explanation: 'An ionic bond forms when electrons are transferred from one atom to another.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_3',
        question: 'What is a covalent bond?',
        options: ['Transfer of electrons', 'Sharing of electrons', 'Nuclear fusion', 'Metallic bonding'],
        correct: 'Sharing of electrons',
        explanation: 'A covalent bond forms when atoms share electrons.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_4',
        question: 'Which type of bond forms between metals and nonmetals?',
        options: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'],
        correct: 'Ionic',
        explanation: 'Ionic bonds typically form between metals (which lose electrons) and nonmetals (which gain electrons).',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_5',
        question: 'Which type of bond forms between nonmetals?',
        options: ['Ionic', 'Covalent', 'Metallic', 'Nuclear'],
        correct: 'Covalent',
        explanation: 'Covalent bonds typically form between nonmetals that share electrons.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_6',
        question: 'What is a molecule?',
        options: ['Single atom', 'Group of atoms bonded together', 'Ion', 'Element'],
        correct: 'Group of atoms bonded together',
        explanation: 'A molecule is a group of atoms bonded together by chemical bonds.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_7',
        question: 'What is a compound?',
        options: ['Single element', 'Substance with two or more different elements', 'Mixture', 'Solution'],
        correct: 'Substance with two or more different elements',
        explanation: 'A compound is a substance composed of two or more different elements chemically bonded.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_8',
        question: 'What is the formula for water?',
        options: ['H2O', 'CO2', 'NaCl', 'CH4'],
        correct: 'H2O',
        explanation: 'Water has the chemical formula H2O, with two hydrogen atoms and one oxygen atom.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_9',
        question: 'What is the formula for carbon dioxide?',
        options: ['H2O', 'CO2', 'NaCl', 'CH4'],
        correct: 'CO2',
        explanation: 'Carbon dioxide has the formula CO2, with one carbon and two oxygen atoms.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_10',
        question: 'What is the formula for table salt?',
        options: ['H2O', 'CO2', 'NaCl', 'CH4'],
        correct: 'NaCl',
        explanation: 'Table salt (sodium chloride) has the formula NaCl.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'bond_med_1',
        question: 'What is a polar covalent bond?',
        options: ['Equal sharing of electrons', 'Unequal sharing of electrons', 'Complete transfer', 'No bonding'],
        correct: 'Unequal sharing of electrons',
        explanation: 'A polar covalent bond involves unequal sharing of electrons due to different electronegativities.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_2',
        question: 'What is a nonpolar covalent bond?',
        options: ['Unequal sharing', 'Equal sharing of electrons', 'Electron transfer', 'No electrons'],
        correct: 'Equal sharing of electrons',
        explanation: 'A nonpolar covalent bond involves equal sharing of electrons between atoms.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_3',
        question: 'What determines bond polarity?',
        options: ['Atomic size', 'Electronegativity difference', 'Number of electrons', 'Atomic mass'],
        correct: 'Electronegativity difference',
        explanation: 'Bond polarity is determined by the difference in electronegativity between bonded atoms.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_4',
        question: 'What is a double bond?',
        options: ['One pair of shared electrons', 'Two pairs of shared electrons', 'Three pairs shared', 'No sharing'],
        correct: 'Two pairs of shared electrons',
        explanation: 'A double bond consists of two pairs (four electrons) of shared electrons.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_5',
        question: 'What is a triple bond?',
        options: ['One pair shared', 'Two pairs shared', 'Three pairs of shared electrons', 'No sharing'],
        correct: 'Three pairs of shared electrons',
        explanation: 'A triple bond consists of three pairs (six electrons) of shared electrons.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_6',
        question: 'What is metallic bonding?',
        options: ['Electron sharing', 'Electron transfer', 'Sea of delocalized electrons', 'Nuclear bonding'],
        correct: 'Sea of delocalized electrons',
        explanation: 'Metallic bonding involves a sea of delocalized electrons surrounding metal cations.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_7',
        question: 'What is bond length?',
        options: ['Bond strength', 'Distance between bonded nuclei', 'Number of bonds', 'Bond energy'],
        correct: 'Distance between bonded nuclei',
        explanation: 'Bond length is the average distance between the nuclei of two bonded atoms.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_8',
        question: 'What is bond energy?',
        options: ['Bond length', 'Energy to break bond', 'Number of electrons', 'Atomic energy'],
        correct: 'Energy to break bond',
        explanation: 'Bond energy is the energy required to break a chemical bond.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_9',
        question: 'How does bond length relate to bond strength?',
        options: ['Longer bonds are stronger', 'Shorter bonds are stronger', 'No relationship', 'Same strength always'],
        correct: 'Shorter bonds are stronger',
        explanation: 'Generally, shorter bonds are stronger because atoms are held more tightly together.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_10',
        question: 'What is resonance in bonding?',
        options: ['Single structure', 'Multiple possible structures', 'No bonding', 'Ionic only'],
        correct: 'Multiple possible structures',
        explanation: 'Resonance occurs when a molecule can be represented by multiple valid Lewis structures.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'bond_hard_1',
        question: 'What is VSEPR theory?',
        options: ['Bonding theory', 'Theory predicting molecular geometry', 'Energy theory', 'Atomic theory'],
        correct: 'Theory predicting molecular geometry',
        explanation: 'VSEPR (Valence Shell Electron Pair Repulsion) theory predicts molecular geometry based on electron pair repulsion.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_2',
        question: 'What is the molecular geometry of methane (CH4)?',
        options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Octahedral'],
        correct: 'Tetrahedral',
        explanation: 'Methane has a tetrahedral geometry with bond angles of approximately 109.5°.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_3',
        question: 'What is the molecular geometry of water (H2O)?',
        options: ['Linear', 'Bent', 'Trigonal planar', 'Tetrahedral'],
        correct: 'Bent',
        explanation: 'Water has a bent molecular geometry due to two lone pairs on the oxygen atom.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_4',
        question: 'What is hybridization?',
        options: ['Bond breaking', 'Mixing of atomic orbitals', 'Electron transfer', 'Nuclear reaction'],
        correct: 'Mixing of atomic orbitals',
        explanation: 'Hybridization is the mixing of atomic orbitals to form new hybrid orbitals for bonding.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_5',
        question: 'What is sp3 hybridization?',
        options: ['One s and two p orbitals', 'One s and three p orbitals', 'Two s and one p orbital', 'Three s orbitals'],
        correct: 'One s and three p orbitals',
        explanation: 'sp3 hybridization involves mixing one s orbital with three p orbitals.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_6',
        question: 'What is a sigma bond?',
        options: ['Side-to-side overlap', 'End-to-end overlap of orbitals', 'No overlap', 'Ionic attraction'],
        correct: 'End-to-end overlap of orbitals',
        explanation: 'A sigma bond forms from the end-to-end overlap of atomic orbitals.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_7',
        question: 'What is a pi bond?',
        options: ['End-to-end overlap', 'Side-to-side overlap of orbitals', 'No overlap', 'Ionic attraction'],
        correct: 'Side-to-side overlap of orbitals',
        explanation: 'A pi bond forms from the side-to-side overlap of p orbitals.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_8',
        question: 'What is the bond order in nitrogen gas (N2)?',
        options: ['1', '2', '3', '4'],
        correct: '3',
        explanation: 'Nitrogen gas has a triple bond, so the bond order is 3.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_9',
        question: 'What is lattice energy?',
        options: ['Bond energy', 'Energy to form ionic solid from gaseous ions', 'Electron energy', 'Nuclear energy'],
        correct: 'Energy to form ionic solid from gaseous ions',
        explanation: 'Lattice energy is the energy required to form an ionic solid from gaseous ions.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_10',
        question: 'What is the coordinate covalent bond?',
        options: ['Normal covalent bond', 'Bond where one atom provides both electrons', 'Ionic bond', 'Metallic bond'],
        correct: 'Bond where one atom provides both electrons',
        explanation: 'A coordinate covalent bond forms when one atom provides both electrons for the shared pair.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit1_acid_base',
    name: 'Unit 1: Acid-Base Equilibrium',
    description: 'Acids, bases, pH, buffers, and equilibrium concepts',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_u1_easy_1',
        question: 'What is an acid according to Arrhenius theory?',
        options: ['Proton acceptor', 'Substance that releases H+ ions', 'Electron donor', 'Base neutralizer'],
        correct: 'Substance that releases H+ ions',
        explanation: 'According to Arrhenius, an acid is a substance that releases hydrogen ions (H+) in aqueous solution.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u1_easy_2',
        question: 'What is a base according to Arrhenius theory?',
        options: ['Proton donor', 'Substance that releases OH- ions', 'Electron acceptor', 'Acid neutralizer'],
        correct: 'Substance that releases OH- ions',
        explanation: 'According to Arrhenius, a base is a substance that releases hydroxide ions (OH-) in aqueous solution.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u1_easy_3',
        question: 'What is the pH of pure water at 25°C?',
        options: ['0', '7', '14', '1'],
        correct: '7',
        explanation: 'Pure water has a pH of 7 at 25°C, which is considered neutral.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u1_easy_4',
        question: 'What pH range indicates an acidic solution?',
        options: ['0-7', '7-14', 'Below 0', 'Above 14'],
        correct: '0-7',
        explanation: 'Solutions with pH less than 7 are acidic.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u1_easy_5',
        question: 'What pH range indicates a basic solution?',
        options: ['0-7', '7-14', 'Below 0', 'Above 14'],
        correct: '7-14',
        explanation: 'Solutions with pH greater than 7 are basic (alkaline).',
        difficulty: 'easy'
      },
      {
        id: 'g12_u1_easy_6',
        question: 'What happens when an acid reacts with a base?',
        options: ['Explosion', 'Neutralization', 'No reaction', 'Decomposition'],
        correct: 'Neutralization',
        explanation: 'When an acid reacts with a base, neutralization occurs, forming salt and water.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u1_easy_7',
        question: 'What is the formula for hydrochloric acid?',
        options: ['H2SO4', 'HCl', 'HNO3', 'CH3COOH'],
        correct: 'HCl',
        explanation: 'Hydrochloric acid has the chemical formula HCl.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u1_easy_8',
        question: 'What is the formula for sulfuric acid?',
        options: ['H2SO4', 'HCl', 'HNO3', 'CH3COOH'],
        correct: 'H2SO4',
        explanation: 'Sulfuric acid has the chemical formula H2SO4.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u1_easy_9',
        question: 'What is the formula for sodium hydroxide?',
        options: ['NaCl', 'NaOH', 'Na2CO3', 'NaHCO3'],
        correct: 'NaOH',
        explanation: 'Sodium hydroxide has the chemical formula NaOH.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u1_easy_10',
        question: 'What color does litmus paper turn in acidic solution?',
        options: ['Blue', 'Red', 'Green', 'Yellow'],
        correct: 'Red',
        explanation: 'Litmus paper turns red in acidic solutions.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_u1_med_1',
        question: 'What is a Brønsted-Lowry acid?',
        options: ['Electron donor', 'Proton donor', 'OH- donor', 'Electron acceptor'],
        correct: 'Proton donor',
        explanation: 'According to Brønsted-Lowry theory, an acid is a proton (H+) donor.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u1_med_2',
        question: 'What is a Brønsted-Lowry base?',
        options: ['Electron donor', 'Proton acceptor', 'OH- donor', 'Electron acceptor'],
        correct: 'Proton acceptor',
        explanation: 'According to Brønsted-Lowry theory, a base is a proton (H+) acceptor.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u1_med_3',
        question: 'What is the relationship between pH and pOH?',
        options: ['pH + pOH = 7', 'pH + pOH = 14', 'pH - pOH = 14', 'pH × pOH = 14'],
        correct: 'pH + pOH = 14',
        explanation: 'At 25°C, pH + pOH = 14 for any aqueous solution.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u1_med_4',
        question: 'What is a strong acid?',
        options: ['Partially ionizes', 'Completely ionizes in solution', 'Never ionizes', 'Weak ionization'],
        correct: 'Completely ionizes in solution',
        explanation: 'A strong acid completely ionizes in aqueous solution.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u1_med_5',
        question: 'What is a weak acid?',
        options: ['Completely ionizes', 'Partially ionizes in solution', 'Never ionizes', 'No H+ ions'],
        correct: 'Partially ionizes in solution',
        explanation: 'A weak acid only partially ionizes in aqueous solution.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u1_med_6',
        question: 'What is the conjugate base of HCl?',
        options: ['H+', 'Cl-', 'OH-', 'H2O'],
        correct: 'Cl-',
        explanation: 'When HCl donates a proton, it forms its conjugate base Cl-.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u1_med_7',
        question: 'What is the conjugate acid of NH3?',
        options: ['NH2-', 'NH4+', 'N3-', 'NH4OH'],
        correct: 'NH4+',
        explanation: 'When NH3 accepts a proton, it forms its conjugate acid NH4+.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u1_med_8',
        question: 'What is Ka?',
        options: ['Base constant', 'Acid dissociation constant', 'Equilibrium constant', 'Rate constant'],
        correct: 'Acid dissociation constant',
        explanation: 'Ka is the acid dissociation constant, measuring the strength of an acid.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u1_med_9',
        question: 'What does a larger Ka value indicate?',
        options: ['Weaker acid', 'Stronger acid', 'Neutral solution', 'Basic solution'],
        correct: 'Stronger acid',
        explanation: 'A larger Ka value indicates a stronger acid (greater ionization).',
        difficulty: 'medium'
      },
      {
        id: 'g12_u1_med_10',
        question: 'What is a buffer solution?',
        options: ['Pure water', 'Solution resisting pH change', 'Strong acid', 'Strong base'],
        correct: 'Solution resisting pH change',
        explanation: 'A buffer solution resists changes in pH when small amounts of acid or base are added.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_u1_hard_1',
        question: 'What is the Henderson-Hasselbalch equation?',
        options: ['pH = pKa + log([A-]/[HA])', 'pH = -log[H+]', 'pH + pOH = 14', 'Ka × Kb = Kw'],
        correct: 'pH = pKa + log([A-]/[HA])',
        explanation: 'The Henderson-Hasselbalch equation relates pH to the ratio of conjugate base to acid.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u1_hard_2',
        question: 'What is the autoionization of water?',
        options: ['H2O → H+ + OH-', '2H2O ⇌ H3O+ + OH-', 'H2O → 2H+ + O2-', 'H2O + H2O → H4O2'],
        correct: '2H2O ⇌ H3O+ + OH-',
        explanation: 'Water autoionizes: 2H2O ⇌ H3O+ + OH-, with Kw = [H3O+][OH-] = 1.0 × 10^-14.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u1_hard_3',
        question: 'What is the value of Kw at 25°C?',
        options: ['1.0 × 10^-7', '1.0 × 10^-14', '1.0 × 10^7', '1.0 × 10^14'],
        correct: '1.0 × 10^-14',
        explanation: 'The ion product of water (Kw) is 1.0 × 10^-14 at 25°C.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u1_hard_4',
        question: 'What is the pH of a 0.01 M HCl solution?',
        options: ['1', '2', '12', '13'],
        correct: '2',
        explanation: 'pH = -log[H+] = -log(0.01) = -log(10^-2) = 2.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u1_hard_5',
        question: 'What is a polyprotic acid?',
        options: ['Acid with one H+', 'Acid with multiple ionizable H+', 'Very strong acid', 'Organic acid'],
        correct: 'Acid with multiple ionizable H+',
        explanation: 'A polyprotic acid can donate more than one proton (H+) per molecule.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u1_hard_6',
        question: 'What is the common ion effect?',
        options: ['No effect on equilibrium', 'Shifts equilibrium due to common ion', 'Increases ionization', 'Creates new compounds'],
        correct: 'Shifts equilibrium due to common ion',
        explanation: 'The common ion effect shifts equilibrium away from the side with the common ion.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u1_hard_7',
        question: 'What is an amphoteric substance?',
        options: ['Only acidic', 'Only basic', 'Can act as acid or base', 'Neutral only'],
        correct: 'Can act as acid or base',
        explanation: 'An amphoteric substance can act as either an acid or a base depending on conditions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u1_hard_8',
        question: 'What is the equivalence point in titration?',
        options: ['Starting point', 'Point where acid equals base moles', 'End point', 'Buffer point'],
        correct: 'Point where acid equals base moles',
        explanation: 'The equivalence point is where moles of acid equal moles of base in a titration.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u1_hard_9',
        question: 'What is the relationship between Ka and Kb for conjugate pairs?',
        options: ['Ka + Kb = Kw', 'Ka × Kb = Kw', 'Ka - Kb = Kw', 'Ka / Kb = Kw'],
        correct: 'Ka × Kb = Kw',
        explanation: 'For conjugate acid-base pairs, Ka × Kb = Kw at a given temperature.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u1_hard_10',
        question: 'What is the Lewis definition of acids and bases?',
        options: ['Proton transfer', 'Electron pair transfer', 'Ion transfer', 'Neutron transfer'],
        correct: 'Electron pair transfer',
        explanation: 'Lewis acids accept electron pairs; Lewis bases donate electron pairs.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit2_electrochemistry',
    name: 'Unit 2: Electrochemistry',
    description: 'Redox reactions, galvanic cells, electrolysis, and electrochemical applications',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_u2_easy_1',
        question: 'What is oxidation?',
        options: ['Gain of electrons', 'Loss of electrons', 'Gain of protons', 'Loss of neutrons'],
        correct: 'Loss of electrons',
        explanation: 'Oxidation is the loss of electrons by an atom, ion, or molecule.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u2_easy_2',
        question: 'What is reduction?',
        options: ['Loss of electrons', 'Gain of electrons', 'Loss of protons', 'Gain of neutrons'],
        correct: 'Gain of electrons',
        explanation: 'Reduction is the gain of electrons by an atom, ion, or molecule.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u2_easy_3',
        question: 'What is a redox reaction?',
        options: ['Only oxidation', 'Only reduction', 'Both oxidation and reduction', 'Acid-base reaction'],
        correct: 'Both oxidation and reduction',
        explanation: 'A redox reaction involves both oxidation and reduction occurring simultaneously.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u2_easy_4',
        question: 'What is an electrode?',
        options: ['Insulator', 'Conductor where redox occurs', 'Electrolyte', 'Battery'],
        correct: 'Conductor where redox occurs',
        explanation: 'An electrode is a conductor where oxidation or reduction reactions occur.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u2_easy_5',
        question: 'What is the anode?',
        options: ['Where reduction occurs', 'Where oxidation occurs', 'Positive terminal', 'Negative electrode'],
        correct: 'Where oxidation occurs',
        explanation: 'The anode is the electrode where oxidation (loss of electrons) occurs.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u2_easy_6',
        question: 'What is the cathode?',
        options: ['Where oxidation occurs', 'Where reduction occurs', 'Negative terminal', 'Positive electrode'],
        correct: 'Where reduction occurs',
        explanation: 'The cathode is the electrode where reduction (gain of electrons) occurs.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u2_easy_7',
        question: 'What is electrolysis?',
        options: ['Natural chemical reaction', 'Using electricity to drive chemical reactions', 'Battery discharge', 'Metal corrosion'],
        correct: 'Using electricity to drive chemical reactions',
        explanation: 'Electrolysis uses electrical energy to drive non-spontaneous chemical reactions.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u2_easy_8',
        question: 'What is a galvanic cell?',
        options: ['Electrolytic cell', 'Cell that produces electricity', 'Fuel cell', 'Solar cell'],
        correct: 'Cell that produces electricity',
        explanation: 'A galvanic cell converts chemical energy into electrical energy spontaneously.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u2_easy_9',
        question: 'What is an electrolyte?',
        options: ['Metal conductor', 'Substance that conducts electricity in solution', 'Insulator', 'Battery casing'],
        correct: 'Substance that conducts electricity in solution',
        explanation: 'An electrolyte is a substance that conducts electricity when dissolved or molten.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u2_easy_10',
        question: 'What is corrosion?',
        options: ['Metal strengthening', 'Unwanted oxidation of metals', 'Metal purification', 'Metal coating'],
        correct: 'Unwanted oxidation of metals',
        explanation: 'Corrosion is the unwanted oxidation of metals, such as rusting of iron.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_u2_med_1',
        question: 'What is oxidation number?',
        options: ['Number of atoms', 'Hypothetical charge on atom', 'Atomic number', 'Mass number'],
        correct: 'Hypothetical charge on atom',
        explanation: 'Oxidation number is the hypothetical charge an atom would have if electrons were completely transferred.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u2_med_2',
        question: 'What is the standard electrode potential?',
        options: ['Voltage under standard conditions', 'Current measurement', 'Resistance value', 'Power output'],
        correct: 'Voltage under standard conditions',
        explanation: 'Standard electrode potential is the voltage of an electrode under standard conditions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u2_med_3',
        question: 'What does a positive standard cell potential indicate?',
        options: ['Non-spontaneous reaction', 'Spontaneous reaction', 'No reaction', 'Equilibrium'],
        correct: 'Spontaneous reaction',
        explanation: 'A positive standard cell potential indicates a spontaneous redox reaction.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u2_med_4',
        question: 'What is the Nernst equation used for?',
        options: ['Standard conditions only', 'Non-standard conditions', 'Equilibrium constant', 'Reaction rate'],
        correct: 'Non-standard conditions',
        explanation: 'The Nernst equation calculates cell potential under non-standard conditions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u2_med_5',
        question: 'What happens during electrolysis of water?',
        options: ['Water heating', 'Water splitting into H2 and O2', 'Water cooling', 'Salt formation'],
        correct: 'Water splitting into H2 and O2',
        explanation: 'Electrolysis of water produces hydrogen gas at the cathode and oxygen gas at the anode.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u2_med_6',
        question: 'What is electroplating?',
        options: ['Metal corrosion', 'Coating objects with metal using electrolysis', 'Battery charging', 'Metal extraction'],
        correct: 'Coating objects with metal using electrolysis',
        explanation: 'Electroplating uses electrolysis to deposit a thin layer of metal onto an object.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u2_med_7',
        question: 'What is a salt bridge?',
        options: ['Physical bridge', 'Maintains electrical neutrality', 'Metal conductor', 'Insulator'],
        correct: 'Maintains electrical neutrality',
        explanation: 'A salt bridge maintains electrical neutrality by allowing ion flow between half-cells.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u2_med_8',
        question: 'What is Faraday\'s first law of electrolysis?',
        options: ['Mass deposited is proportional to current', 'Mass deposited is proportional to charge', 'Volume is constant', 'Temperature is constant'],
        correct: 'Mass deposited is proportional to charge',
        explanation: 'Faraday\'s first law states that the mass deposited is proportional to the quantity of charge passed.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u2_med_9',
        question: 'What is an electrolytic cell?',
        options: ['Produces electricity', 'Uses electricity to drive reactions', 'Stores electricity', 'Measures electricity'],
        correct: 'Uses electricity to drive reactions',
        explanation: 'An electrolytic cell uses electrical energy to drive non-spontaneous chemical reactions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u2_med_10',
        question: 'What is overpotential?',
        options: ['Excess voltage needed', 'Standard voltage', 'Minimum voltage', 'Average voltage'],
        correct: 'Excess voltage needed',
        explanation: 'Overpotential is the extra voltage needed beyond the theoretical minimum for electrolysis.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_u2_hard_1',
        question: 'What is the relationship between cell potential and Gibbs free energy?',
        options: ['ΔG = nFE', 'ΔG = -nFE', 'ΔG = nF/E', 'ΔG = E/nF'],
        correct: 'ΔG = -nFE',
        explanation: 'The Gibbs free energy change is related to cell potential by ΔG = -nFE.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u2_hard_2',
        question: 'What is the Nernst equation at 25°C?',
        options: ['E = E° - (RT/nF)lnQ', 'E = E° - (0.059/n)logQ', 'E = E° + (0.059/n)logQ', 'E = E° - (nF/RT)lnQ'],
        correct: 'E = E° - (0.059/n)logQ',
        explanation: 'At 25°C, the Nernst equation simplifies to E = E° - (0.059/n)logQ.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u2_hard_3',
        question: 'What is the Faraday constant?',
        options: ['96,485 C/mol', '96,485 J/mol', '96,485 V/mol', '96,485 A/mol'],
        correct: '96,485 C/mol',
        explanation: 'The Faraday constant is 96,485 coulombs per mole of electrons.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u2_hard_4',
        question: 'What is the standard hydrogen electrode potential?',
        options: ['1.00 V', '0.00 V', '-1.00 V', '0.76 V'],
        correct: '0.00 V',
        explanation: 'The standard hydrogen electrode is defined as 0.00 V and serves as the reference.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u2_hard_5',
        question: 'What is concentration polarization?',
        options: ['Voltage drop due to resistance', 'Concentration changes near electrodes', 'Temperature effects', 'Pressure changes'],
        correct: 'Concentration changes near electrodes',
        explanation: 'Concentration polarization occurs when ion concentrations change near the electrode surface.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u2_hard_6',
        question: 'What is the Butler-Volmer equation?',
        options: ['Describes electrode kinetics', 'Calculates cell potential', 'Determines concentration', 'Measures resistance'],
        correct: 'Describes electrode kinetics',
        explanation: 'The Butler-Volmer equation describes the relationship between current and overpotential.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u2_hard_7',
        question: 'What is the exchange current density?',
        options: ['Maximum current', 'Current at equilibrium', 'Minimum current', 'Average current'],
        correct: 'Current at equilibrium',
        explanation: 'Exchange current density is the current flowing in both directions at equilibrium.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u2_hard_8',
        question: 'What is cathodic protection?',
        options: ['Coating metals', 'Making metal cathode to prevent corrosion', 'Insulating metals', 'Heating metals'],
        correct: 'Making metal cathode to prevent corrosion',
        explanation: 'Cathodic protection prevents corrosion by making the metal structure the cathode.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u2_hard_9',
        question: 'What is the Tafel equation?',
        options: ['η = a + b log(i)', 'E = E° - RT/nF ln(Q)', 'ΔG = -nFE', 'i = i₀(e^(αnFη/RT) - e^(-(1-α)nFη/RT))'],
        correct: 'η = a + b log(i)',
        explanation: 'The Tafel equation relates overpotential to current density: η = a + b log(i).',
        difficulty: 'hard'
      },
      {
        id: 'g12_u2_hard_10',
        question: 'What is the limiting current density?',
        options: ['Maximum possible current', 'Minimum current', 'Current limited by mass transport', 'Average current'],
        correct: 'Current limited by mass transport',
        explanation: 'Limiting current density is the maximum current limited by mass transport of reactants.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit3_industrial_chemistry',
    name: 'Unit 3: Industrial Chemistry',
    description: 'Industrial processes, catalysis, and chemical manufacturing',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_u3_easy_1',
        question: 'What is industrial chemistry?',
        options: ['Lab chemistry', 'Large-scale chemical production', 'Academic chemistry', 'Basic research'],
        correct: 'Large-scale chemical production',
        explanation: 'Industrial chemistry involves the large-scale production of chemicals for commercial use.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u3_easy_2',
        question: 'What is a catalyst?',
        options: ['Reactant', 'Product', 'Substance that speeds up reactions', 'Solvent'],
        correct: 'Substance that speeds up reactions',
        explanation: 'A catalyst is a substance that increases the rate of a chemical reaction without being consumed.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u3_easy_3',
        question: 'What is the Haber process used for?',
        options: ['Making sulfuric acid', 'Producing ammonia', 'Refining petroleum', 'Making plastics'],
        correct: 'Producing ammonia',
        explanation: 'The Haber process is used to produce ammonia from nitrogen and hydrogen gases.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u3_easy_4',
        question: 'What is the Contact process used for?',
        options: ['Making ammonia', 'Producing sulfuric acid', 'Refining oil', 'Making fertilizers'],
        correct: 'Producing sulfuric acid',
        explanation: 'The Contact process is used to produce sulfuric acid from sulfur dioxide.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u3_easy_5',
        question: 'What is petroleum refining?',
        options: ['Oil extraction', 'Separating crude oil components', 'Oil transportation', 'Oil storage'],
        correct: 'Separating crude oil components',
        explanation: 'Petroleum refining separates crude oil into useful products like gasoline and diesel.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u3_easy_6',
        question: 'What is fractional distillation?',
        options: ['Chemical reaction', 'Separation by boiling points', 'Crystallization', 'Filtration'],
        correct: 'Separation by boiling points',
        explanation: 'Fractional distillation separates mixtures based on different boiling points.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u3_easy_7',
        question: 'What is cracking in petroleum refining?',
        options: ['Physical damage', 'Breaking large molecules into smaller ones', 'Mixing process', 'Cooling process'],
        correct: 'Breaking large molecules into smaller ones',
        explanation: 'Cracking breaks large hydrocarbon molecules into smaller, more useful ones.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u3_easy_8',
        question: 'What is a homogeneous catalyst?',
        options: ['Same phase as reactants', 'Different phase', 'Solid only', 'Gas only'],
        correct: 'Same phase as reactants',
        explanation: 'A homogeneous catalyst is in the same phase as the reactants.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u3_easy_9',
        question: 'What is a heterogeneous catalyst?',
        options: ['Same phase as reactants', 'Different phase from reactants', 'Liquid only', 'Gas only'],
        correct: 'Different phase from reactants',
        explanation: 'A heterogeneous catalyst is in a different phase from the reactants.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u3_easy_10',
        question: 'What is the main use of ammonia?',
        options: ['Fuel', 'Fertilizer production', 'Cleaning agent', 'Food preservative'],
        correct: 'Fertilizer production',
        explanation: 'Ammonia is primarily used to produce nitrogen-containing fertilizers.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_u3_med_1',
        question: 'What conditions favor the Haber process?',
        options: ['Low pressure, high temperature', 'High pressure, moderate temperature', 'Low pressure, low temperature', 'High pressure, high temperature'],
        correct: 'High pressure, moderate temperature',
        explanation: 'The Haber process uses high pressure (200-300 atm) and moderate temperature (400-500°C).',
        difficulty: 'medium'
      },
      {
        id: 'g12_u3_med_2',
        question: 'What catalyst is used in the Haber process?',
        options: ['Platinum', 'Iron', 'Nickel', 'Vanadium pentoxide'],
        correct: 'Iron',
        explanation: 'Iron is used as the catalyst in the Haber process for ammonia production.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u3_med_3',
        question: 'What is the catalyst in the Contact process?',
        options: ['Iron', 'Platinum', 'Vanadium pentoxide', 'Nickel'],
        correct: 'Vanadium pentoxide',
        explanation: 'Vanadium pentoxide (V2O5) is the catalyst used in the Contact process.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u3_med_4',
        question: 'What is thermal cracking?',
        options: ['Using heat only', 'Using heat and pressure', 'Using catalysts', 'Using electricity'],
        correct: 'Using heat only',
        explanation: 'Thermal cracking uses high temperature (500-800°C) to break down hydrocarbons.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u3_med_5',
        question: 'What is catalytic cracking?',
        options: ['Heat only', 'Using catalysts at lower temperatures', 'Pressure only', 'Chemical treatment'],
        correct: 'Using catalysts at lower temperatures',
        explanation: 'Catalytic cracking uses catalysts to break hydrocarbons at lower temperatures than thermal cracking.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u3_med_6',
        question: 'What is reforming in petroleum refining?',
        options: ['Breaking molecules', 'Rearranging molecular structure', 'Removing impurities', 'Adding hydrogen'],
        correct: 'Rearranging molecular structure',
        explanation: 'Reforming rearranges the structure of hydrocarbons to improve fuel quality.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u3_med_7',
        question: 'What is polymerization?',
        options: ['Breaking polymers', 'Joining monomers to form polymers', 'Purification process', 'Distillation'],
        correct: 'Joining monomers to form polymers',
        explanation: 'Polymerization is the process of joining small molecules (monomers) to form large molecules (polymers).',
        difficulty: 'medium'
      },
      {
        id: 'g12_u3_med_8',
        question: 'What is the purpose of a promoter in catalysis?',
        options: ['Replace catalyst', 'Increase catalyst activity', 'Stop reaction', 'Cool system'],
        correct: 'Increase catalyst activity',
        explanation: 'A promoter is added to increase the activity and effectiveness of a catalyst.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u3_med_9',
        question: 'What is catalyst poisoning?',
        options: ['Catalyst improvement', 'Loss of catalyst activity', 'Catalyst regeneration', 'Catalyst replacement'],
        correct: 'Loss of catalyst activity',
        explanation: 'Catalyst poisoning occurs when impurities reduce or destroy the activity of a catalyst.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u3_med_10',
        question: 'What is the octane rating?',
        options: ['Fuel purity', 'Fuel density', 'Fuel anti-knock properties', 'Fuel color'],
        correct: 'Fuel anti-knock properties',
        explanation: 'Octane rating measures a fuel\'s resistance to knocking in internal combustion engines.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_u3_hard_1',
        question: 'What is the Le Chatelier principle application in Haber process?',
        options: ['Increase temperature only', 'Compromise between rate and equilibrium', 'Maximum pressure always', 'Minimum temperature always'],
        correct: 'Compromise between rate and equilibrium',
        explanation: 'The Haber process conditions represent a compromise between reaction rate and equilibrium position.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u3_hard_2',
        question: 'What is the turnover frequency of a catalyst?',
        options: ['Number of active sites', 'Reactions per active site per time', 'Catalyst lifetime', 'Catalyst concentration'],
        correct: 'Reactions per active site per time',
        explanation: 'Turnover frequency is the number of reactions catalyzed per active site per unit time.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u3_hard_3',
        question: 'What is the Sabatier principle?',
        options: ['Strong binding only', 'Optimal intermediate binding strength', 'Weak binding only', 'No binding'],
        correct: 'Optimal intermediate binding strength',
        explanation: 'The Sabatier principle states that optimal catalysis requires intermediate binding strength.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u3_hard_4',
        question: 'What is the role of zeolites in catalysis?',
        options: ['Homogeneous catalysts', 'Shape-selective heterogeneous catalysts', 'Inhibitors', 'Solvents'],
        correct: 'Shape-selective heterogeneous catalysts',
        explanation: 'Zeolites act as shape-selective heterogeneous catalysts due to their porous structure.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u3_hard_5',
        question: 'What is the Langmuir-Hinshelwood mechanism?',
        options: ['Gas phase reaction', 'Both reactants adsorb before reaction', 'Solution reaction', 'No adsorption'],
        correct: 'Both reactants adsorb before reaction',
        explanation: 'In the Langmuir-Hinshelwood mechanism, both reactants adsorb on the catalyst surface before reacting.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u3_hard_6',
        question: 'What is the Eley-Rideal mechanism?',
        options: ['Both reactants adsorb', 'One reactant adsorbs, other reacts from gas phase', 'No adsorption', 'Product adsorbs'],
        correct: 'One reactant adsorbs, other reacts from gas phase',
        explanation: 'In the Eley-Rideal mechanism, one reactant adsorbs while the other reacts directly from the gas phase.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u3_hard_7',
        question: 'What is the BET theory used for?',
        options: ['Reaction rates', 'Surface area measurement', 'Temperature control', 'Pressure measurement'],
        correct: 'Surface area measurement',
        explanation: 'BET (Brunauer-Emmett-Teller) theory is used to measure the surface area of catalysts.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u3_hard_8',
        question: 'What is the volcano plot in catalysis?',
        options: ['Temperature vs pressure', 'Activity vs binding energy', 'Time vs conversion', 'Cost vs efficiency'],
        correct: 'Activity vs binding energy',
        explanation: 'A volcano plot shows catalytic activity versus binding energy, illustrating the Sabatier principle.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u3_hard_9',
        question: 'What is the Thiele modulus?',
        options: ['Reaction rate parameter', 'Diffusion vs reaction rate parameter', 'Temperature parameter', 'Pressure parameter'],
        correct: 'Diffusion vs reaction rate parameter',
        explanation: 'The Thiele modulus compares the reaction rate to the diffusion rate in porous catalysts.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u3_hard_10',
        question: 'What is catalyst deactivation by sintering?',
        options: ['Chemical poisoning', 'Loss of surface area due to particle growth', 'Mechanical damage', 'Phase change'],
        correct: 'Loss of surface area due to particle growth',
        explanation: 'Sintering causes catalyst deactivation through loss of surface area as small particles grow into larger ones.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit4_polymers',
    name: 'Unit 4: Polymers',
    description: 'Polymer types, synthesis, properties, and applications',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_u4_easy_1',
        question: 'What is a polymer?',
        options: ['Small molecule', 'Large molecule made of repeating units', 'Metal', 'Gas'],
        correct: 'Large molecule made of repeating units',
        explanation: 'A polymer is a large molecule composed of many repeating structural units called monomers.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u4_easy_2',
        question: 'What is a monomer?',
        options: ['Large molecule', 'Small repeating unit', 'Polymer chain', 'Cross-link'],
        correct: 'Small repeating unit',
        explanation: 'A monomer is a small molecule that can be joined with other monomers to form a polymer.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u4_easy_3',
        question: 'What is polymerization?',
        options: ['Breaking polymers', 'Forming polymers from monomers', 'Cooling process', 'Filtering'],
        correct: 'Forming polymers from monomers',
        explanation: 'Polymerization is the process of chemically bonding monomers together to form polymers.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u4_easy_4',
        question: 'What is the monomer of polyethylene?',
        options: ['Ethane', 'Ethylene (ethene)', 'Propylene', 'Methane'],
        correct: 'Ethylene (ethene)',
        explanation: 'Polyethylene is made from ethylene (ethene) monomers through polymerization.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u4_easy_5',
        question: 'What is the monomer of polystyrene?',
        options: ['Ethylene', 'Styrene', 'Propylene', 'Vinyl chloride'],
        correct: 'Styrene',
        explanation: 'Polystyrene is formed by polymerizing styrene monomers.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u4_easy_6',
        question: 'What are thermoplastics?',
        options: ['Cannot be melted', 'Can be melted and reshaped', 'Always hard', 'Only brittle'],
        correct: 'Can be melted and reshaped',
        explanation: 'Thermoplastics can be repeatedly melted and reshaped when heated.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u4_easy_7',
        question: 'What are thermosets?',
        options: ['Can be reshaped easily', 'Cannot be melted after curing', 'Always flexible', 'Water soluble'],
        correct: 'Cannot be melted after curing',
        explanation: 'Thermosets cannot be melted and reshaped after they have been cured.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u4_easy_8',
        question: 'What is PVC?',
        options: ['Polyvinyl chloride', 'Polyvinylidene chloride', 'Polyvinyl carbonate', 'Polyvinyl cyanide'],
        correct: 'Polyvinyl chloride',
        explanation: 'PVC stands for polyvinyl chloride, a common plastic polymer.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u4_easy_9',
        question: 'What is nylon?',
        options: ['Natural polymer', 'Synthetic polymer', 'Metal', 'Ceramic'],
        correct: 'Synthetic polymer',
        explanation: 'Nylon is a synthetic polymer used in textiles and other applications.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u4_easy_10',
        question: 'What is the main advantage of synthetic polymers?',
        options: ['Biodegradable', 'Tailored properties', 'Always natural', 'Very expensive'],
        correct: 'Tailored properties',
        explanation: 'Synthetic polymers can be designed with specific properties for particular applications.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_u4_med_1',
        question: 'What is addition polymerization?',
        options: ['Monomers add without losing atoms', 'Monomers lose small molecules', 'Cross-linking only', 'Breaking chains'],
        correct: 'Monomers add without losing atoms',
        explanation: 'Addition polymerization involves monomers adding together without losing any atoms.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u4_med_2',
        question: 'What is condensation polymerization?',
        options: ['No by-products formed', 'Small molecules eliminated during polymerization', 'Only addition reactions', 'High temperature only'],
        correct: 'Small molecules eliminated during polymerization',
        explanation: 'Condensation polymerization eliminates small molecules (like water) during polymer formation.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u4_med_3',
        question: 'What is the degree of polymerization?',
        options: ['Number of polymer types', 'Number of monomer units in polymer chain', 'Polymer temperature', 'Polymer density'],
        correct: 'Number of monomer units in polymer chain',
        explanation: 'The degree of polymerization is the number of monomer units in a polymer chain.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u4_med_4',
        question: 'What is cross-linking in polymers?',
        options: ['Breaking chains', 'Connecting polymer chains together', 'Linear arrangement', 'Single bonds only'],
        correct: 'Connecting polymer chains together',
        explanation: 'Cross-linking involves forming bonds between different polymer chains.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u4_med_5',
        question: 'What is molecular weight distribution?',
        options: ['All molecules same size', 'Range of molecular weights', 'Average only', 'Minimum weight'],
        correct: 'Range of molecular weights',
        explanation: 'Polymers have a distribution of molecular weights, not a single value.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u4_med_6',
        question: 'What is the glass transition temperature?',
        options: ['Melting point', 'Temperature where polymer becomes glassy', 'Boiling point', 'Decomposition temperature'],
        correct: 'Temperature where polymer becomes glassy',
        explanation: 'The glass transition temperature is where a polymer changes from flexible to glassy state.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u4_med_7',
        question: 'What is crystallinity in polymers?',
        options: ['Random arrangement', 'Ordered arrangement of chains', 'Liquid state', 'Gas state'],
        correct: 'Ordered arrangement of chains',
        explanation: 'Crystallinity refers to the ordered arrangement of polymer chains in certain regions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u4_med_8',
        question: 'What is tacticity?',
        options: ['Polymer length', 'Stereochemical arrangement', 'Polymer color', 'Polymer density'],
        correct: 'Stereochemical arrangement',
        explanation: 'Tacticity describes the stereochemical arrangement of side groups along the polymer chain.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u4_med_9',
        question: 'What is polymer degradation?',
        options: ['Polymer improvement', 'Breakdown of polymer chains', 'Polymer synthesis', 'Polymer purification'],
        correct: 'Breakdown of polymer chains',
        explanation: 'Polymer degradation is the breakdown of polymer chains due to various factors.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u4_med_10',
        question: 'What are copolymers?',
        options: ['Single monomer type', 'Two or more different monomers', 'Metal polymers', 'Inorganic polymers'],
        correct: 'Two or more different monomers',
        explanation: 'Copolymers are made from two or more different types of monomers.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_u4_hard_1',
        question: 'What is the Mark-Houwink equation used for?',
        options: ['Polymer synthesis', 'Relating viscosity to molecular weight', 'Polymer degradation', 'Polymer melting'],
        correct: 'Relating viscosity to molecular weight',
        explanation: 'The Mark-Houwink equation relates intrinsic viscosity to molecular weight of polymers.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u4_hard_2',
        question: 'What is the Flory-Huggins theory?',
        options: ['Polymer synthesis', 'Polymer solution thermodynamics', 'Polymer degradation', 'Polymer crystallization'],
        correct: 'Polymer solution thermodynamics',
        explanation: 'The Flory-Huggins theory describes the thermodynamics of polymer solutions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u4_hard_3',
        question: 'What is the ceiling temperature?',
        options: ['Maximum synthesis temperature', 'Temperature above which depolymerization occurs', 'Melting point', 'Glass transition'],
        correct: 'Temperature above which depolymerization occurs',
        explanation: 'The ceiling temperature is the temperature above which polymer depolymerization becomes favored.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u4_hard_4',
        question: 'What is living polymerization?',
        options: ['Biological process', 'Polymerization without termination', 'Very fast process', 'Only in water'],
        correct: 'Polymerization without termination',
        explanation: 'Living polymerization proceeds without termination or chain transfer reactions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u4_hard_5',
        question: 'What is RAFT polymerization?',
        options: ['Random polymerization', 'Reversible Addition-Fragmentation Transfer', 'Ring formation', 'Radical termination'],
        correct: 'Reversible Addition-Fragmentation Transfer',
        explanation: 'RAFT is a controlled radical polymerization technique using chain transfer agents.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u4_hard_6',
        question: 'What is the Zimm plot used for?',
        options: ['Molecular weight determination', 'Polymer synthesis', 'Color analysis', 'Density measurement'],
        correct: 'Molecular weight determination',
        explanation: 'The Zimm plot is used to determine molecular weight and radius of gyration from light scattering.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u4_hard_7',
        question: 'What is the theta temperature?',
        options: ['Melting point', 'Temperature where polymer acts like ideal chain', 'Boiling point', 'Degradation temperature'],
        correct: 'Temperature where polymer acts like ideal chain',
        explanation: 'At the theta temperature, polymer chains behave as ideal chains in solution.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u4_hard_8',
        question: 'What is the entanglement molecular weight?',
        options: ['Minimum for synthesis', 'Molecular weight for chain entanglement', 'Maximum molecular weight', 'Average molecular weight'],
        correct: 'Molecular weight for chain entanglement',
        explanation: 'Entanglement molecular weight is the minimum molecular weight for significant chain entanglement.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u4_hard_9',
        question: 'What is the WLF equation?',
        options: ['Synthesis kinetics', 'Temperature dependence of viscosity', 'Molecular weight', 'Crystallization'],
        correct: 'Temperature dependence of viscosity',
        explanation: 'The Williams-Landel-Ferry (WLF) equation describes temperature dependence of polymer viscosity.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u4_hard_10',
        question: 'What is the reptation model?',
        options: ['Polymer synthesis', 'Polymer chain motion in entangled systems', 'Crystallization', 'Degradation'],
        correct: 'Polymer chain motion in entangled systems',
        explanation: 'The reptation model describes how polymer chains move in highly entangled systems.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit5_environmental_chemistry',
    name: 'Unit 5: Introduction to Environmental Chemistry',
    description: 'Air, water, and soil pollution, green chemistry principles',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_u5_easy_1',
        question: 'What is environmental chemistry?',
        options: ['Study of indoor air', 'Study of chemical processes in environment', 'Study of laboratory chemicals', 'Study of industrial processes'],
        correct: 'Study of chemical processes in environment',
        explanation: 'Environmental chemistry studies chemical processes occurring in air, water, and soil.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u5_easy_2',
        question: 'What is air pollution?',
        options: ['Clean air', 'Contamination of air with harmful substances', 'Natural air composition', 'Wind patterns'],
        correct: 'Contamination of air with harmful substances',
        explanation: 'Air pollution is the contamination of air with harmful chemical substances.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u5_easy_3',
        question: 'What is the greenhouse effect?',
        options: ['Cooling of Earth', 'Trapping of heat in atmosphere', 'Plant growth', 'Ocean warming'],
        correct: 'Trapping of heat in atmosphere',
        explanation: 'The greenhouse effect is the trapping of heat in Earth\'s atmosphere by greenhouse gases.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u5_easy_4',
        question: 'What is the main greenhouse gas?',
        options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'],
        correct: 'Carbon dioxide',
        explanation: 'Carbon dioxide is the primary greenhouse gas contributing to climate change.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u5_easy_5',
        question: 'What is water pollution?',
        options: ['Pure water', 'Contamination of water bodies', 'Water evaporation', 'Water condensation'],
        correct: 'Contamination of water bodies',
        explanation: 'Water pollution is the contamination of water bodies with harmful substances.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u5_easy_6',
        question: 'What is BOD?',
        options: ['Biological Oxygen Demand', 'Basic Oxygen Deficit', 'Biochemical Oxygen Depletion', 'Bacterial Oxygen Distribution'],
        correct: 'Biological Oxygen Demand',
        explanation: 'BOD (Biological Oxygen Demand) measures the oxygen required by microorganisms to decompose organic matter.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u5_easy_7',
        question: 'What is acid rain?',
        options: ['Very pure rain', 'Rain with low pH due to pollutants', 'Rain with high pH', 'Normal rainwater'],
        correct: 'Rain with low pH due to pollutants',
        explanation: 'Acid rain is precipitation with low pH caused by air pollutants like SO2 and NOx.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u5_easy_8',
        question: 'What is ozone depletion?',
        options: ['Increase in ozone', 'Reduction of stratospheric ozone', 'Ground-level ozone', 'Ozone production'],
        correct: 'Reduction of stratospheric ozone',
        explanation: 'Ozone depletion refers to the thinning of the stratospheric ozone layer.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u5_easy_9',
        question: 'What are CFCs?',
        options: ['Carbon-fluorine compounds', 'Chlorofluorocarbons', 'Calcium-fluorine crystals', 'Copper-fluorine complexes'],
        correct: 'Chlorofluorocarbons',
        explanation: 'CFCs (Chlorofluorocarbons) are compounds that deplete the ozone layer.',
        difficulty: 'easy'
      },
      {
        id: 'g12_u5_easy_10',
        question: 'What is green chemistry?',
        options: ['Chemistry with green color', 'Environmentally friendly chemistry', 'Plant chemistry', 'Outdoor chemistry'],
        correct: 'Environmentally friendly chemistry',
        explanation: 'Green chemistry focuses on designing chemical processes that reduce environmental impact.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_u5_med_1',
        question: 'What is photochemical smog?',
        options: ['Natural fog', 'Smog formed by sunlight and pollutants', 'Industrial smoke', 'Water vapor'],
        correct: 'Smog formed by sunlight and pollutants',
        explanation: 'Photochemical smog forms when sunlight reacts with NOx and volatile organic compounds.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u5_med_2',
        question: 'What is eutrophication?',
        options: ['Water purification', 'Excessive nutrient enrichment', 'Water heating', 'Water cooling'],
        correct: 'Excessive nutrient enrichment',
        explanation: 'Eutrophication is the excessive enrichment of water bodies with nutrients, leading to algae blooms.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u5_med_3',
        question: 'What is the main cause of stratospheric ozone depletion?',
        options: ['Carbon dioxide', 'Chlorine radicals from CFCs', 'Water vapor', 'Nitrogen oxides'],
        correct: 'Chlorine radicals from CFCs',
        explanation: 'Chlorine radicals released from CFCs are the main cause of stratospheric ozone depletion.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u5_med_4',
        question: 'What is the Chapman cycle?',
        options: ['Carbon cycle', 'Ozone formation and destruction', 'Water cycle', 'Nitrogen cycle'],
        correct: 'Ozone formation and destruction',
        explanation: 'The Chapman cycle describes the natural formation and destruction of ozone in the stratosphere.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u5_med_5',
        question: 'What is bioaccumulation?',
        options: ['Organism growth', 'Accumulation of substances in organisms', 'Biodegradation', 'Biological synthesis'],
        correct: 'Accumulation of substances in organisms',
        explanation: 'Bioaccumulation is the accumulation of persistent substances in living organisms over time.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u5_med_6',
        question: 'What is biomagnification?',
        options: ['Organism size increase', 'Increasing concentration up food chain', 'Biological reproduction', 'Ecosystem expansion'],
        correct: 'Increasing concentration up food chain',
        explanation: 'Biomagnification is the increasing concentration of substances as they move up the food chain.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u5_med_7',
        question: 'What is the primary standard for air quality?',
        options: ['Temperature', 'Humidity', 'Concentration of pollutants', 'Wind speed'],
        correct: 'Concentration of pollutants',
        explanation: 'Air quality standards are based on the concentration of various pollutants in the air.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u5_med_8',
        question: 'What is COD?',
        options: ['Chemical Oxygen Demand', 'Carbon Oxide Depletion', 'Cellular Oxygen Distribution', 'Catalytic Oxygen Degradation'],
        correct: 'Chemical Oxygen Demand',
        explanation: 'COD (Chemical Oxygen Demand) measures the oxygen required to chemically oxidize organic matter.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u5_med_9',
        question: 'What is the difference between BOD and COD?',
        options: ['No difference', 'BOD is biological, COD is chemical', 'BOD is faster', 'COD is biological'],
        correct: 'BOD is biological, COD is chemical',
        explanation: 'BOD measures biological oxygen demand while COD measures chemical oxygen demand.',
        difficulty: 'medium'
      },
      {
        id: 'g12_u5_med_10',
        question: 'What is the Montreal Protocol?',
        options: ['Climate change agreement', 'Ozone layer protection agreement', 'Water pollution treaty', 'Air quality standard'],
        correct: 'Ozone layer protection agreement',
        explanation: 'The Montreal Protocol is an international agreement to protect the ozone layer by phasing out ozone-depleting substances.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_u5_hard_1',
        question: 'What is the Dobson unit?',
        options: ['Air pressure unit', 'Ozone column thickness measurement', 'Temperature scale', 'Humidity measurement'],
        correct: 'Ozone column thickness measurement',
        explanation: 'The Dobson unit measures the thickness of the ozone column in the atmosphere.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u5_hard_2',
        question: 'What is the Antarctic ozone hole mechanism?',
        options: ['Normal ozone cycle', 'Polar stratospheric clouds catalyze ozone destruction', 'Increased UV radiation', 'Temperature inversion'],
        correct: 'Polar stratospheric clouds catalyze ozone destruction',
        explanation: 'The Antarctic ozone hole forms when polar stratospheric clouds provide surfaces for heterogeneous reactions that destroy ozone.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u5_hard_3',
        question: 'What is the ClO dimer cycle?',
        options: ['Chlorine production', 'Catalytic ozone destruction mechanism', 'Oxygen formation', 'UV absorption'],
        correct: 'Catalytic ozone destruction mechanism',
        explanation: 'The ClO dimer cycle is a catalytic mechanism for ozone destruction involving chlorine monoxide dimers.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u5_hard_4',
        question: 'What is the tropospheric ozone paradox?',
        options: ['Ozone is good and bad depending on location', 'Ozone only in stratosphere', 'No ozone in troposphere', 'Ozone everywhere is bad'],
        correct: 'Ozone is good and bad depending on location',
        explanation: 'Ozone is beneficial in the stratosphere but harmful as ground-level pollution in the troposphere.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u5_hard_5',
        question: 'What is the NOx-VOC chemistry in smog formation?',
        options: ['Simple addition', 'Complex photochemical reactions', 'Physical mixing', 'Thermal decomposition'],
        correct: 'Complex photochemical reactions',
        explanation: 'Smog formation involves complex photochemical reactions between nitrogen oxides and volatile organic compounds.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u5_hard_6',
        question: 'What is the critical load concept?',
        options: ['Maximum weight', 'Maximum pollutant input without harm', 'Minimum temperature', 'Average concentration'],
        correct: 'Maximum pollutant input without harm',
        explanation: 'Critical load is the maximum input of pollutants that an ecosystem can tolerate without harmful effects.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u5_hard_7',
        question: 'What is the Global Warming Potential (GWP)?',
        options: ['Temperature increase', 'Relative warming effect of greenhouse gases', 'Solar radiation', 'Heat capacity'],
        correct: 'Relative warming effect of greenhouse gases',
        explanation: 'GWP compares the warming effect of different greenhouse gases relative to CO2 over a specific time period.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u5_hard_8',
        question: 'What is radiative forcing?',
        options: ['Solar heating', 'Change in energy balance due to factors', 'Wind patterns', 'Ocean currents'],
        correct: 'Change in energy balance due to factors',
        explanation: 'Radiative forcing is the change in Earth\'s energy balance due to factors like greenhouse gases.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u5_hard_9',
        question: 'What is the carbon footprint?',
        options: ['Physical footprint', 'Total GHG emissions from activity', 'Carbon content', 'Black carbon'],
        correct: 'Total GHG emissions from activity',
        explanation: 'Carbon footprint is the total greenhouse gas emissions produced by an activity or entity.',
        difficulty: 'hard'
      },
      {
        id: 'g12_u5_hard_10',
        question: 'What is life cycle assessment (LCA)?',
        options: ['Product lifespan', 'Environmental impact evaluation', 'Economic analysis', 'Social impact study'],
        correct: 'Environmental impact evaluation',
        explanation: 'LCA evaluates the environmental impacts of a product throughout its entire life cycle.',
        difficulty: 'hard'
      }
    ]
  }
];
