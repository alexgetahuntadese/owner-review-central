import { Chapter } from '../../types';

export const biologyChapters: Chapter[] = [
  {
    id: 'cell_biology',
    name: 'Cell Biology',
    description: 'Cell structure, function, and processes',
    questions: [
      // Easy Questions
      {
        id: 'cell_1',
        question: 'What is the basic unit of life?',
        options: ['Tissue', 'Organ', 'Cell', 'Organism'],
        correct: 'Cell',
        explanation: 'The cell is the smallest structural and functional unit of all living organisms.',
        difficulty: 'easy'
      },
      {
        id: 'cell_2',
        question: 'Which organelle controls the cell?',
        options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Vacuole'],
        correct: 'Nucleus',
        explanation: 'The nucleus contains DNA and controls all cellular activities.',
        difficulty: 'easy'
      },
      {
        id: 'cell_3',
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
        correct: 'Mitochondria',
        explanation: 'Mitochondria produce ATP, the energy currency of the cell.',
        difficulty: 'easy'
      },
      {
        id: 'cell_4',
        question: 'What do ribosomes make?',
        options: ['DNA', 'RNA', 'Proteins', 'Lipids'],
        correct: 'Proteins',
        explanation: 'Ribosomes are the sites of protein synthesis in cells.',
        difficulty: 'easy'
      },
      {
        id: 'cell_5',
        question: 'What surrounds a plant cell but not an animal cell?',
        options: ['Cell membrane', 'Cell wall', 'Nucleus', 'Cytoplasm'],
        correct: 'Cell wall',
        explanation: 'Plant cells have a rigid cell wall made of cellulose for structural support.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'cell_med_1',
        question: 'What is the difference between prokaryotic and eukaryotic cells?',
        options: ['Size only', 'Nucleus presence', 'Shape only', 'Color only'],
        correct: 'Nucleus presence',
        explanation: 'Prokaryotic cells lack a membrane-bound nucleus; eukaryotic cells have one.',
        difficulty: 'medium'
      },
      {
        id: 'cell_med_2',
        question: 'What is osmosis?',
        options: ['Movement of solutes', 'Movement of water across membrane', 'Cell division', 'Protein synthesis'],
        correct: 'Movement of water across membrane',
        explanation: 'Osmosis is the movement of water across a semi-permeable membrane.',
        difficulty: 'medium'
      },
      {
        id: 'cell_med_3',
        question: 'What is cellular respiration?',
        options: ['Breathing', 'Converting glucose to ATP', 'Photosynthesis', 'Cell division'],
        correct: 'Converting glucose to ATP',
        explanation: 'Cellular respiration breaks down glucose to produce ATP energy.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'cell_hard_1',
        question: 'What are the phases of mitosis?',
        options: ['Prophase, Metaphase, Anaphase, Telophase', 'G1, S, G2, M', 'Interphase only', 'Cytokinesis only'],
        correct: 'Prophase, Metaphase, Anaphase, Telophase',
        explanation: 'Mitosis consists of prophase, metaphase, anaphase, and telophase.',
        difficulty: 'hard'
      },
      {
        id: 'cell_hard_2',
        question: 'What is the role of the endoplasmic reticulum?',
        options: ['Energy production', 'Protein and lipid synthesis', 'DNA storage', 'Waste removal'],
        correct: 'Protein and lipid synthesis',
        explanation: 'The ER synthesizes proteins (rough ER) and lipids (smooth ER).',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'bio-11-genetics',
    name: 'Grade 11: Genetics and Heredity',
    description: 'DNA, genes, inheritance patterns, and genetic disorders',
    questions: [
      // Easy Questions
      {
        id: 'g11_genetics_easy_1',
        question: 'What does DNA stand for?',
        options: ['Deoxyribonucleic Acid', 'Dynamic Nuclear Acid', 'Double Nuclear Acid', 'Deoxyribose Nucleic Acid'],
        correct: 'Deoxyribonucleic Acid',
        explanation: 'DNA stands for Deoxyribonucleic Acid, the genetic material in cells.',
        difficulty: 'easy'
      },
      {
        id: 'g11_genetics_easy_2',
        question: 'What is a gene?',
        options: ['A chromosome', 'A segment of DNA coding for a trait', 'A protein', 'A cell'],
        correct: 'A segment of DNA coding for a trait',
        explanation: 'A gene is a specific DNA sequence that codes for a particular trait or protein.',
        difficulty: 'easy'
      },
      {
        id: 'g11_genetics_easy_3',
        question: 'How many chromosomes do humans have?',
        options: ['23', '44', '46', '48'],
        correct: '46',
        explanation: 'Humans have 46 chromosomes (23 pairs) in each somatic cell.',
        difficulty: 'easy'
      },
      {
        id: 'g11_genetics_easy_4',
        question: 'What determines biological sex in humans?',
        options: ['XX and XY chromosomes', 'Height', 'Weight', 'Eye color'],
        correct: 'XX and XY chromosomes',
        explanation: 'Females have XX chromosomes, males have XY chromosomes.',
        difficulty: 'easy'
      },
      {
        id: 'g11_genetics_easy_5',
        question: 'What is heredity?',
        options: ['Cell division', 'Passing traits from parents to offspring', 'Metabolism', 'Reproduction'],
        correct: 'Passing traits from parents to offspring',
        explanation: 'Heredity is the transmission of genetic characteristics from parents to offspring.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_genetics_med_1',
        question: 'What is the difference between genotype and phenotype?',
        options: ['No difference', 'Genotype: genetic makeup, Phenotype: observable traits', 'Only in plants', 'Only in animals'],
        correct: 'Genotype: genetic makeup, Phenotype: observable traits',
        explanation: 'Genotype is the genetic composition; phenotype is the observable characteristics.',
        difficulty: 'medium'
      },
      {
        id: 'g11_genetics_med_2',
        question: 'What is a dominant allele?',
        options: ['Always harmful', 'Expressed when present', 'Only in females', 'Recessive trait'],
        correct: 'Expressed when present',
        explanation: 'A dominant allele is expressed in the phenotype when present, even with one copy.',
        difficulty: 'medium'
      },
      {
        id: 'g11_genetics_med_3',
        question: 'What is Mendel\'s law of segregation?',
        options: ['Traits blend together', 'Allele pairs separate during gamete formation', 'Mutations occur randomly', 'DNA replicates'],
        correct: 'Allele pairs separate during gamete formation',
        explanation: 'The law of segregation states that allele pairs separate during meiosis.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_genetics_hard_1',
        question: 'What is incomplete dominance?',
        options: ['One allele dominant', 'Neither allele dominant, blended phenotype', 'Recessive expression', 'Lethal combination'],
        correct: 'Neither allele dominant, blended phenotype',
        explanation: 'In incomplete dominance, neither allele is dominant, resulting in a blended phenotype.',
        difficulty: 'hard'
      },
      {
        id: 'g11_genetics_hard_2',
        question: 'What is the probability of two heterozygous parents (Aa × Aa) having a homozygous recessive child?',
        options: ['0%', '25%', '50%', '75%'],
        correct: '25%',
        explanation: 'Using a Punnett square: AA (25%), Aa (50%), aa (25%). Homozygous recessive = 25%.',
        difficulty: 'hard'
      }
    ]
  }
];