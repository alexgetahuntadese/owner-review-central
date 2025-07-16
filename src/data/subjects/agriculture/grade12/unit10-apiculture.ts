
import { Chapter } from '../../../types';

export const unit10Apiculture: Chapter = {
  id: 'agri-12-10',
  name: 'Unit 10: Apiculture',
  description: 'Beekeeping, honey production, and bee management',
  questions: [
    // Easy Questions (10)
    {
      id: 'bee_easy_1',
      question: 'What is apiculture?',
      options: ['Fruit growing', 'Beekeeping and honey production', 'Vegetable farming', 'Flower cultivation'],
      correct: 'Beekeeping and honey production',
      explanation: 'Apiculture is the practice of beekeeping for honey production and other bee products.',
      difficulty: 'easy'
    },
    {
      id: 'bee_easy_2',
      question: 'What are the three types of bees in a colony?',
      options: ['Worker, drone, soldier', 'Queen, worker, drone', 'Male, female, young', 'Large, medium, small'],
      correct: 'Queen, worker, drone',
      explanation: 'A bee colony consists of a queen (reproductive female), workers (sterile females), and drones (males).',
      difficulty: 'easy'
    },
    {
      id: 'bee_easy_3',
      question: 'What is the primary product of beekeeping?',
      options: ['Wax only', 'Honey', 'Pollen only', 'Royal jelly only'],
      correct: 'Honey',
      explanation: 'Honey is the primary and most well-known product of beekeeping.',
      difficulty: 'easy'
    },
    {
      id: 'bee_easy_4',
      question: 'What is a beehive?',
      options: ['Natural bee nest', 'Artificial home for bees', 'Bee food', 'Bee disease'],
      correct: 'Artificial home for bees',
      explanation: 'A beehive is an artificial structure provided by beekeepers to house bee colonies.',
      difficulty: 'easy'
    },
    {
      id: 'bee_easy_5',
      question: 'What do bees collect from flowers?',
      options: ['Water only', 'Nectar and pollen', 'Leaves only', 'Soil only'],
      correct: 'Nectar and pollen',
      explanation: 'Bees collect nectar (for honey production) and pollen (for protein) from flowers.',
      difficulty: 'easy'
    },
    {
      id: 'bee_easy_6',
      question: 'What is a bee smoker used for?',
      options: ['Heating hives', 'Calming bees during inspection', 'Cooking honey', 'Killing pests'],
      correct: 'Calming bees during inspection',
      explanation: 'A bee smoker produces smoke that calms bees, making hive inspection safer for beekeepers.',
      difficulty: 'easy'
    },
    {
      id: 'bee_easy_7',
      question: 'What is swarming in bees?',
      options: ['Bee disease', 'Colony splitting for reproduction', 'Bee death', 'Honey production'],
      correct: 'Colony splitting for reproduction',
      explanation: 'Swarming is the natural process where part of a colony leaves with a queen to establish a new colony.',
      difficulty: 'easy'
    },
    {
      id: 'bee_easy_8',
      question: 'What is beeswax?',
      options: ['Bee food', 'Natural wax produced by bees', 'Honey residue', 'Artificial product'],
      correct: 'Natural wax produced by bees',
      explanation: 'Beeswax is a natural wax produced by worker bees to build honeycomb.',
      difficulty: 'easy'
    },
    {
      id: 'bee_easy_9',
      question: 'What season is best for honey harvesting?',
      options: ['Winter', 'Late summer/early fall', 'Early spring', 'Rainy season'],
      correct: 'Late summer/early fall',
      explanation: 'Late summer to early fall is typically the best time for honey harvesting when stores are abundant.',
      difficulty: 'easy'
    },
    {
      id: 'bee_easy_10',
      question: 'What is propolis?',
      options: ['Bee disease', 'Resinous substance collected by bees', 'Type of honey', 'Bee food'],
      correct: 'Resinous substance collected by bees',
      explanation: 'Propolis is a resinous substance that bees collect from tree buds and use to seal hive gaps.',
      difficulty: 'easy'
    },

    // Medium Questions (10)
    {
      id: 'bee_med_1',
      question: 'What is the difference between Langstroth and Top Bar hives?',
      options: ['No difference', 'Different frame systems and management', 'Only size differs', 'Only color differs'],
      correct: 'Different frame systems and management',
      explanation: 'Langstroth hives use removable frames, while Top Bar hives use bars for natural comb building.',
      difficulty: 'medium'
    },
    {
      id: 'bee_med_2',
      question: 'What is queen rearing?',
      options: ['Killing queens', 'Artificially producing new queen bees', 'Queen feeding only', 'Natural process only'],
      correct: 'Artificially producing new queen bees',
      explanation: 'Queen rearing is the artificial process of producing new queen bees for colony management.',
      difficulty: 'medium'
    },
    {
      id: 'bee_med_3',
      question: 'What is Varroa mite?',
      options: ['Beneficial insect', 'Parasitic mite affecting bees', 'Type of bee', 'Honey disease'],
      correct: 'Parasitic mite affecting bees',
      explanation: 'Varroa mite is a serious parasitic mite that weakens bees and can destroy colonies.',
      difficulty: 'medium'
    },
    {
      id: 'bee_med_4',
      question: 'What is integrated pest management in beekeeping?',
      options: ['Chemical control only', 'Combining multiple pest control methods', 'No pest control', 'Natural methods only'],
      correct: 'Combining multiple pest control methods',
      explanation: 'IPM combines cultural, biological, and selective chemical methods for sustainable pest control.',
      difficulty: 'medium'
    },
    {
      id: 'bee_med_5',
      question: 'What is the importance of bee space?',
      options: ['No importance', 'Optimal spacing for bee movement and comb building', 'Hive decoration', 'Ventilation only'],
      correct: 'Optimal spacing for bee movement and comb building',
      explanation: 'Bee space (6-9mm) is the optimal spacing that allows bees to move freely and build proper comb.',
      difficulty: 'medium'
    },
    {
      id: 'bee_med_6',
      question: 'What is colony collapse disorder (CCD)?',
      options: ['Normal bee behavior', 'Sudden disappearance of worker bees', 'Increased honey production', 'Bee reproduction'],
      correct: 'Sudden disappearance of worker bees',
      explanation: 'CCD is a phenomenon where worker bees suddenly disappear, leaving behind queen, food, and brood.',
      difficulty: 'medium'
    },
    {
      id: 'bee_med_7',
      question: 'What is the purpose of a queen excluder?',
      options: ['Remove queens', 'Prevent queen from entering honey supers', 'Feed queens', 'Protect queens'],
      correct: 'Prevent queen from entering honey supers',
      explanation: 'A queen excluder prevents the queen from entering honey storage areas while allowing workers through.',
      difficulty: 'medium'
    },
    {
      id: 'bee_med_8',
      question: 'What is nosema in bees?',
      options: ['Bee behavior', 'Microsporidian parasite disease', 'Honey variety', 'Pollen type'],
      correct: 'Microsporidian parasite disease',
      explanation: 'Nosema is a disease caused by microsporidian parasites that affects bee digestion and longevity.',
      difficulty: 'medium'
    },
    {
      id: 'bee_med_9',
      question: 'What is migratory beekeeping?',
      options: ['Stationary hives', 'Moving hives to follow nectar flows', 'Indoor beekeeping', 'Urban beekeeping'],
      correct: 'Moving hives to follow nectar flows',
      explanation: 'Migratory beekeeping involves moving hives to different locations to take advantage of nectar flows.',
      difficulty: 'medium'
    },
    {
      id: 'bee_med_10',
      question: 'What is royal jelly?',
      options: ['Regular honey', 'Special food for developing queens', 'Bee waste product', 'Pollen mixture'],
      correct: 'Special food for developing queens',
      explanation: 'Royal jelly is a nutritious secretion fed to developing queens and young larvae.',
      difficulty: 'medium'
    },

    // Hard Questions (10)
    {
      id: 'bee_hard_1',
      question: 'What is genomic selection in bee breeding?',
      options: ['Visual selection', 'Using genome-wide markers for breeding', 'Random breeding', 'Traditional methods'],
      correct: 'Using genome-wide markers for breeding',
      explanation: 'Genomic selection uses molecular markers to identify and select bees with desired genetic traits.',
      difficulty: 'hard'
    },
    {
      id: 'bee_hard_2',
      question: 'What is precision beekeeping?',
      options: ['Traditional methods', 'Technology-based hive monitoring', 'Manual inspection only', 'Basic record keeping'],
      correct: 'Technology-based hive monitoring',
      explanation: 'Precision beekeeping uses sensors, IoT, and data analytics for continuous hive monitoring and management.',
      difficulty: 'hard'
    },
    {
      id: 'bee_hard_3',
      question: 'What is RNA interference (RNAi) application in bee research?',
      options: ['No application', 'Gene silencing for research and pest control', 'Honey production', 'Wax production'],
      correct: 'Gene silencing for research and pest control',
      explanation: 'RNAi technology can silence specific genes for research purposes and developing pest control methods.',
      difficulty: 'hard'
    },
    {
      id: 'bee_hard_4',
      question: 'What is metabolomics in bee health research?',
      options: ['Basic health check', 'Comprehensive metabolite analysis', 'Visual observation', 'Weight measurement'],
      correct: 'Comprehensive metabolite analysis',
      explanation: 'Metabolomics analyzes all metabolites to understand bee health, stress responses, and disease states.',
      difficulty: 'hard'
    },
    {
      id: 'bee_hard_5',
      question: 'What is artificial intelligence application in apiculture?',
      options: ['No application', 'Automated monitoring and disease detection', 'Manual observation', 'Traditional methods'],
      correct: 'Automated monitoring and disease detection',
      explanation: 'AI can analyze hive sounds, images, and sensor data to detect diseases and predict colony health.',
      difficulty: 'hard'
    },
    {
      id: 'bee_hard_6',
      question: 'What is metagenomics in bee microbiome research?',
      options: ['Single organism study', 'Study of all microbial genomes', 'Basic microbiology', 'Visual observation'],
      correct: 'Study of all microbial genomes',
      explanation: 'Metagenomics studies all microbial genomes in bee colonies to understand health and disease dynamics.',
      difficulty: 'hard'
    },
    {
      id: 'bee_hard_7',
      question: 'What is CRISPR gene editing potential in bee improvement?',
      options: ['Traditional breeding only', 'Precise genetic modifications for traits', 'No application', 'Random mutations'],
      correct: 'Precise genetic modifications for traits',
      explanation: 'CRISPR could potentially be used to develop disease-resistant or more productive bee lines.',
      difficulty: 'hard'
    },
    {
      id: 'bee_hard_8',
      question: 'What is blockchain application in honey traceability?',
      options: ['Traditional labeling', 'Digital supply chain verification', 'Basic identification', 'Manual tracking'],
      correct: 'Digital supply chain verification',
      explanation: 'Blockchain provides transparent, tamper-proof tracking of honey from hive to consumer.',
      difficulty: 'hard'
    },
    {
      id: 'bee_hard_9',
      question: 'What is systems biology approach in bee research?',
      options: ['Single trait study', 'Integrated multi-omics analysis', 'Traditional observation', 'Basic biology'],
      correct: 'Integrated multi-omics analysis',
      explanation: 'Systems biology integrates genomics, transcriptomics, and metabolomics for comprehensive bee understanding.',
      difficulty: 'hard'
    },
    {
      id: 'bee_hard_10',
      question: 'What is environmental DNA (eDNA) application in apiculture?',
      options: ['No application', 'Monitoring plant diversity and bee foraging', 'Hive construction', 'Honey testing only'],
      correct: 'Monitoring plant diversity and bee foraging',
      explanation: 'eDNA analysis can reveal plant diversity in bee foraging areas and help understand bee nutrition.',
      difficulty: 'hard'
    }
  ]
};
