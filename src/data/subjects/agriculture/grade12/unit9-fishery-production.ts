
import { Chapter } from '../../../types';

export const unit9FisheryProduction: Chapter = {
  id: 'agri-12-9',
  name: 'Unit 9: Fishery Production and Management',
  description: 'Aquaculture systems and fish production management',
  questions: [
    // Easy Questions (10)
    {
      id: 'fish_easy_1',
      question: 'What is aquaculture?',
      options: ['Catching wild fish', 'Farming fish and aquatic organisms', 'Ocean exploration', 'Water conservation'],
      correct: 'Farming fish and aquatic organisms',
      explanation: 'Aquaculture is the farming of fish and other aquatic organisms under controlled conditions.',
      difficulty: 'easy'
    },
    {
      id: 'fish_easy_2',
      question: 'What is the difference between freshwater and marine aquaculture?',
      options: ['No difference', 'Water salinity levels', 'Fish size only', 'Water temperature only'],
      correct: 'Water salinity levels',
      explanation: 'Freshwater aquaculture uses non-saline water, while marine aquaculture uses saltwater.',
      difficulty: 'easy'
    },
    {
      id: 'fish_easy_3',
      question: 'What is a fish pond?',
      options: ['Natural water body', 'Artificial water enclosure for fish farming', 'Swimming pool', 'Lake only'],
      correct: 'Artificial water enclosure for fish farming',
      explanation: 'A fish pond is an artificial water enclosure designed specifically for fish farming.',
      difficulty: 'easy'
    },
    {
      id: 'fish_easy_4',
      question: 'What is fish feed?',
      options: ['Natural food only', 'Specially formulated food for farmed fish', 'Water only', 'Soil nutrients'],
      correct: 'Specially formulated food for farmed fish',
      explanation: 'Fish feed is specially formulated food designed to meet the nutritional needs of farmed fish.',
      difficulty: 'easy'
    },
    {
      id: 'fish_easy_5',
      question: 'What is fish stocking?',
      options: ['Catching fish', 'Putting fish into ponds or systems', 'Fish storage', 'Fish processing'],
      correct: 'Putting fish into ponds or systems',
      explanation: 'Fish stocking involves placing fish (fingerlings or juveniles) into aquaculture systems.',
      difficulty: 'easy'
    },
    {
      id: 'fish_easy_6',
      question: 'What is a fingerling?',
      options: ['Adult fish', 'Young fish for stocking', 'Fish food', 'Fish disease'],
      correct: 'Young fish for stocking',
      explanation: 'A fingerling is a juvenile fish, typically used for stocking in aquaculture systems.',
      difficulty: 'easy'
    },
    {
      id: 'fish_easy_7',
      question: 'What is water quality in aquaculture?',
      options: ['Water color only', 'Chemical and physical properties of water', 'Water quantity only', 'Water temperature only'],
      correct: 'Chemical and physical properties of water',
      explanation: 'Water quality refers to the chemical and physical properties of water that affect fish health and growth.',
      difficulty: 'easy'
    },
    {
      id: 'fish_easy_8',
      question: 'What is fish harvesting?',
      options: ['Feeding fish', 'Collecting mature fish for market', 'Cleaning ponds', 'Water management'],
      correct: 'Collecting mature fish for market',
      explanation: 'Fish harvesting is the process of collecting mature fish from aquaculture systems for market.',
      difficulty: 'easy'
    },
    {
      id: 'fish_easy_9',
      question: 'What is a fish hatchery?',
      options: ['Fish market', 'Facility for breeding and hatching fish', 'Fish restaurant', 'Fish storage'],
      correct: 'Facility for breeding and hatching fish',
      explanation: 'A fish hatchery is a facility where fish are bred and eggs are hatched to produce young fish.',
      difficulty: 'easy'
    },
    {
      id: 'fish_easy_10',
      question: 'What is dissolved oxygen in fish farming?',
      options: ['Solid oxygen', 'Oxygen dissolved in water', 'Air bubbles', 'Fish food'],
      correct: 'Oxygen dissolved in water',
      explanation: 'Dissolved oxygen is oxygen gas dissolved in water, essential for fish respiration.',
      difficulty: 'easy'
    },

    // Medium Questions (10)
    {
      id: 'fish_med_1',
      question: 'What is polyculture in aquaculture?',
      options: ['Single species farming', 'Farming multiple fish species together', 'Cultural activities', 'Pond decoration'],
      correct: 'Farming multiple fish species together',
      explanation: 'Polyculture involves farming multiple fish species together to optimize resource use and production.',
      difficulty: 'medium'
    },
    {
      id: 'fish_med_2',
      question: 'What is the importance of pH in fish farming?',
      options: ['No importance', 'Affects fish health and water chemistry', 'Only for plants', 'Water color only'],
      correct: 'Affects fish health and water chemistry',
      explanation: 'pH affects fish health, growth, reproduction, and various water chemistry processes.',
      difficulty: 'medium'
    },
    {
      id: 'fish_med_3',
      question: 'What is fish breeding in aquaculture?',
      options: ['Catching wild fish', 'Controlled reproduction of fish', 'Fish feeding only', 'Pond construction'],
      correct: 'Controlled reproduction of fish',
      explanation: 'Fish breeding involves controlled reproduction to produce offspring with desired characteristics.',
      difficulty: 'medium'
    },
    {
      id: 'fish_med_4',
      question: 'What is carrying capacity in fish farming?',
      options: ['Pond size', 'Maximum fish population sustainable in a system', 'Fish weight only', 'Water volume'],
      correct: 'Maximum fish population sustainable in a system',
      explanation: 'Carrying capacity is the maximum number of fish that can be sustainably maintained in a system.',
      difficulty: 'medium'
    },
    {
      id: 'fish_med_5',
      question: 'What is recirculating aquaculture system (RAS)?',
      options: ['Open water system', 'Closed system with water treatment and reuse', 'Natural pond', 'River farming'],
      correct: 'Closed system with water treatment and reuse',
      explanation: 'RAS is a closed system where water is continuously treated and recirculated for fish farming.',
      difficulty: 'medium'
    },
    {
      id: 'fish_med_6',
      question: 'What is fish disease management?',
      options: ['Ignoring diseases', 'Prevention, diagnosis, and treatment of fish diseases', 'Only treatment', 'Only prevention'],
      correct: 'Prevention, diagnosis, and treatment of fish diseases',
      explanation: 'Fish disease management includes prevention, early diagnosis, and appropriate treatment of diseases.',
      difficulty: 'medium'
    },
    {
      id: 'fish_med_7',
      question: 'What is biofloc technology?',
      options: ['Traditional farming', 'Microbial protein production in fish culture', 'Fish food only', 'Water testing'],
      correct: 'Microbial protein production in fish culture',
      explanation: 'Biofloc technology promotes beneficial microbial growth that serves as protein source and improves water quality.',
      difficulty: 'medium'
    },
    {
      id: 'fish_med_8',
      question: 'What is fish nutrition management?',
      options: ['Random feeding', 'Providing balanced diet for optimal growth', 'Water only', 'Natural food only'],
      correct: 'Providing balanced diet for optimal growth',
      explanation: 'Fish nutrition management involves providing balanced diets to meet nutritional requirements for optimal growth.',
      difficulty: 'medium'
    },
    {
      id: 'fish_med_9',
      question: 'What is integrated aquaculture?',
      options: ['Single fish farming', 'Combining aquaculture with other activities', 'Separation of activities', 'Fish only system'],
      correct: 'Combining aquaculture with other activities',
      explanation: 'Integrated aquaculture combines fish farming with other activities like agriculture or livestock.',
      difficulty: 'medium'
    },
    {
      id: 'fish_med_10',
      question: 'What is selective breeding in fish?',
      options: ['Random selection', 'Choosing parents with desired traits', 'Natural selection only', 'No selection'],
      correct: 'Choosing parents with desired traits',
      explanation: 'Selective breeding involves choosing parent fish with desired traits to improve offspring.',
      difficulty: 'medium'
    },

    // Hard Questions (10)
    {
      id: 'fish_hard_1',
      question: 'What is genomic selection in fish breeding?',
      options: ['Visual selection', 'Using genome-wide markers for breeding decisions', 'Random breeding', 'Traditional methods'],
      correct: 'Using genome-wide markers for breeding decisions',
      explanation: 'Genomic selection uses genome-wide molecular markers to predict breeding values for genetic improvement.',
      difficulty: 'hard'
    },
    {
      id: 'fish_hard_2',
      question: 'What is precision aquaculture?',
      options: ['Traditional farming', 'Technology-based monitoring and management', 'Manual observation', 'Basic record keeping'],
      correct: 'Technology-based monitoring and management',
      explanation: 'Precision aquaculture uses sensors, AI, and data analytics for optimal fish farm management.',
      difficulty: 'hard'
    },
    {
      id: 'fish_hard_3',
      question: 'What is triploid fish production?',
      options: ['Normal fish', 'Sterile fish with three chromosome sets', 'Diseased fish', 'Hybrid fish only'],
      correct: 'Sterile fish with three chromosome sets',
      explanation: 'Triploid fish have three sets of chromosomes, making them sterile but often faster-growing.',
      difficulty: 'hard'
    },
    {
      id: 'fish_hard_4',
      question: 'What is metabolomics in aquaculture research?',
      options: ['Basic metabolism study', 'Comprehensive metabolite analysis', 'Weight measurement', 'Feed analysis only'],
      correct: 'Comprehensive metabolite analysis',
      explanation: 'Metabolomics analyzes all metabolites to understand fish physiology, health, and product quality.',
      difficulty: 'hard'
    },
    {
      id: 'fish_hard_5',
      question: 'What is CRISPR gene editing in fish?',
      options: ['Traditional breeding', 'Precise genetic modifications', 'Natural selection', 'Random mutations'],
      correct: 'Precise genetic modifications',
      explanation: 'CRISPR technology allows precise genetic modifications in fish for improved traits and disease resistance.',
      difficulty: 'hard'
    },
    {
      id: 'fish_hard_6',
      question: 'What is microbiome research in aquaculture?',
      options: ['Disease study only', 'Study of microbial communities', 'Feed analysis', 'Growth measurement'],
      correct: 'Study of microbial communities',
      explanation: 'Microbiome research studies microbial communities in fish and water for health and performance optimization.',
      difficulty: 'hard'
    },
    {
      id: 'fish_hard_7',
      question: 'What is artificial intelligence application in aquaculture?',
      options: ['No application', 'Automated monitoring and decision-making', 'Manual observation', 'Traditional methods'],
      correct: 'Automated monitoring and decision-making',
      explanation: 'AI systems monitor fish behavior, water quality, and feeding to make automated management decisions.',
      difficulty: 'hard'
    },
    {
      id: 'fish_hard_8',
      question: 'What is offshore aquaculture?',
      options: ['Inland farming', 'Open ocean fish farming', 'Pond farming', 'River farming'],
      correct: 'Open ocean fish farming',
      explanation: 'Offshore aquaculture involves farming fish in open ocean environments using specialized systems.',
      difficulty: 'hard'
    },
    {
      id: 'fish_hard_9',
      question: 'What is blockchain application in aquaculture traceability?',
      options: ['Traditional record keeping', 'Digital supply chain tracking', 'Basic identification', 'Manual documentation'],
      correct: 'Digital supply chain tracking',
      explanation: 'Blockchain provides transparent, immutable tracking of fish products from farm to consumer.',
      difficulty: 'hard'
    },
    {
      id: 'fish_hard_10',
      question: 'What is nutrigenomics in fish nutrition?',
      options: ['Basic nutrition', 'Study of gene-nutrition interactions', 'Feed formulation only', 'Weight measurement'],
      correct: 'Study of gene-nutrition interactions',
      explanation: 'Nutrigenomics studies how nutrition affects gene expression and how genetics influences nutritional needs in fish.',
      difficulty: 'hard'
    }
  ]
};
