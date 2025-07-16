
import { Chapter } from '../../../types';

export const unit8PoultryProduction: Chapter = {
  id: 'agri-12-8',
  name: 'Unit 8: Poultry Production and Management',
  description: 'Chicken, duck, and other poultry production systems',
  questions: [
    // Easy Questions (10)
    {
      id: 'poultry_easy_1',
      question: 'What are the two main types of poultry production?',
      options: ['Indoor and outdoor', 'Layers and broilers', 'Commercial and backyard', 'Male and female'],
      correct: 'Layers and broilers',
      explanation: 'The two main types are layers (for egg production) and broilers (for meat production).',
      difficulty: 'easy'
    },
    {
      id: 'poultry_easy_2',
      question: 'How long is the incubation period for chicken eggs?',
      options: ['14 days', '21 days', '28 days', '35 days'],
      correct: '21 days',
      explanation: 'Chicken eggs take approximately 21 days to hatch under proper incubation conditions.',
      difficulty: 'easy'
    },
    {
      id: 'poultry_easy_3',
      question: 'What is a broiler?',
      options: ['Egg-laying chicken', 'Meat-type chicken', 'Breeding chicken', 'Wild chicken'],
      correct: 'Meat-type chicken',
      explanation: 'A broiler is a chicken raised specifically for meat production.',
      difficulty: 'easy'
    },
    {
      id: 'poultry_easy_4',
      question: 'What is a layer?',
      options: ['Meat chicken', 'Egg-producing chicken', 'Young chicken', 'Male chicken'],
      correct: 'Egg-producing chicken',
      explanation: 'A layer is a chicken raised specifically for egg production.',
      difficulty: 'easy'
    },
    {
      id: 'poultry_easy_5',
      question: 'What is the ideal temperature for hatching chicken eggs?',
      options: ['32°C', '37.5°C', '42°C', '45°C'],
      correct: '37.5°C',
      explanation: 'The optimal temperature for incubating chicken eggs is 37.5°C (99.5°F).',
      difficulty: 'easy'
    },
    {
      id: 'poultry_easy_6',
      question: 'What is a young chicken called?',
      options: ['Chick', 'Calf', 'Kid', 'Lamb'],
      correct: 'Chick',
      explanation: 'A young chicken is called a chick.',
      difficulty: 'easy'
    },
    {
      id: 'poultry_easy_7',
      question: 'What is free-range poultry production?',
      options: ['Indoor only', 'Allowing birds access to outdoor areas', 'Cage production', 'No management'],
      correct: 'Allowing birds access to outdoor areas',
      explanation: 'Free-range production allows poultry to have access to outdoor areas for natural behavior.',
      difficulty: 'easy'
    },
    {
      id: 'poultry_easy_8',
      question: 'What is the main component of poultry feed?',
      options: ['Meat', 'Grains and protein sources', 'Vegetables only', 'Water only'],
      correct: 'Grains and protein sources',
      explanation: 'Poultry feed consists mainly of grains (energy) and protein sources for balanced nutrition.',
      difficulty: 'easy'
    },
    {
      id: 'poultry_easy_9',
      question: 'What is vaccination in poultry?',
      options: ['Feeding method', 'Disease prevention through immunization', 'Housing system', 'Breeding technique'],
      correct: 'Disease prevention through immunization',
      explanation: 'Vaccination provides immunity against specific diseases to prevent outbreaks in poultry flocks.',
      difficulty: 'easy'
    },
    {
      id: 'poultry_easy_10',
      question: 'What is molting in chickens?',
      options: ['Growing bigger', 'Shedding and replacing feathers', 'Laying eggs', 'Eating behavior'],
      correct: 'Shedding and replacing feathers',
      explanation: 'Molting is the natural process of shedding old feathers and growing new ones.',
      difficulty: 'easy'
    },

    // Medium Questions (10)
    {
      id: 'poultry_med_1',
      question: 'What is the difference between intensive and extensive poultry systems?',
      options: ['No difference', 'Intensive: confined, Extensive: outdoor access', 'Only size differs', 'Only breed differs'],
      correct: 'Intensive: confined, Extensive: outdoor access',
      explanation: 'Intensive systems confine birds in controlled environments, while extensive systems provide outdoor access.',
      difficulty: 'medium'
    },
    {
      id: 'poultry_med_2',
      question: 'What is artificial insemination in poultry breeding?',
      options: ['Natural mating', 'Manual sperm introduction', 'Egg incubation', 'Feed supplementation'],
      correct: 'Manual sperm introduction',
      explanation: 'Artificial insemination involves manually introducing sperm to fertilize eggs in breeding programs.',
      difficulty: 'medium'
    },
    {
      id: 'poultry_med_3',
      question: 'What is biosecurity in poultry production?',
      options: ['Financial security', 'Measures to prevent disease introduction', 'Building security', 'Feed security'],
      correct: 'Measures to prevent disease introduction',
      explanation: 'Biosecurity includes all measures taken to prevent introduction and spread of diseases in poultry farms.',
      difficulty: 'medium'
    },
    {
      id: 'poultry_med_4',
      question: 'What is feed conversion ratio (FCR)?',
      options: ['Feed quality measure', 'Feed consumed per unit of product', 'Feed cost calculation', 'Feed storage time'],
      correct: 'Feed consumed per unit of product',
      explanation: 'FCR measures the efficiency of converting feed into eggs or meat production.',
      difficulty: 'medium'
    },
    {
      id: 'poultry_med_5',
      question: 'What is Newcastle disease?',
      options: ['Nutritional deficiency', 'Viral disease affecting poultry', 'Genetic disorder', 'Management problem'],
      correct: 'Viral disease affecting poultry',
      explanation: 'Newcastle disease is a highly contagious viral disease that affects many bird species.',
      difficulty: 'medium'
    },
    {
      id: 'poultry_med_6',
      question: 'What is forced molting?',
      options: ['Natural molting', 'Induced molting through management', 'Disease condition', 'Breeding method'],
      correct: 'Induced molting through management',
      explanation: 'Forced molting involves inducing molt through dietary or lighting manipulation to rejuvenate egg production.',
      difficulty: 'medium'
    },
    {
      id: 'poultry_med_7',
      question: 'What is photoperiod manipulation in poultry?',
      options: ['Temperature control', 'Controlling light exposure for production', 'Feed timing', 'Ventilation management'],
      correct: 'Controlling light exposure for production',
      explanation: 'Photoperiod manipulation uses artificial lighting to optimize egg production and sexual maturity.',
      difficulty: 'medium'
    },
    {
      id: 'poultry_med_8',
      question: 'What is coccidiosis in poultry?',
      options: ['Vitamin deficiency', 'Parasitic disease of intestines', 'Bacterial infection', 'Viral disease'],
      correct: 'Parasitic disease of intestines',
      explanation: 'Coccidiosis is a parasitic disease caused by Eimeria species that affects the intestinal tract.',
      difficulty: 'medium'
    },
    {
      id: 'poultry_med_9',
      question: 'What is crossbreeding in poultry?',
      options: ['Inbreeding', 'Mating different breeds or lines', 'Natural breeding', 'Single breed mating'],
      correct: 'Mating different breeds or lines',
      explanation: 'Crossbreeding involves mating different breeds or genetic lines to combine desirable traits.',
      difficulty: 'medium'
    },
    {
      id: 'poultry_med_10',
      question: 'What is water quality importance in poultry?',
      options: ['Not important', 'Critical for health and performance', 'Only for drinking', 'Temperature only matters'],
      correct: 'Critical for health and performance',
      explanation: 'Water quality significantly affects poultry health, feed intake, and overall performance.',
      difficulty: 'medium'
    },

    // Hard Questions (10)
    {
      id: 'poultry_hard_1',
      question: 'What is genomic selection in poultry breeding?',
      options: ['Visual selection', 'Using genome-wide markers for breeding', 'Random selection', 'Traditional methods'],
      correct: 'Using genome-wide markers for breeding',
      explanation: 'Genomic selection uses genome-wide molecular markers to predict breeding values for genetic improvement.',
      difficulty: 'hard'
    },
    {
      id: 'poultry_hard_2',
      question: 'What is nutrigenomics in poultry nutrition?',
      options: ['Basic nutrition', 'Study of gene-nutrition interactions', 'Feed formulation only', 'Weight measurement'],
      correct: 'Study of gene-nutrition interactions',
      explanation: 'Nutrigenomics studies how nutrition affects gene expression and how genetics influences nutritional needs.',
      difficulty: 'hard'
    },
    {
      id: 'poultry_hard_3',
      question: 'What is precision poultry farming?',
      options: ['Traditional farming', 'Technology-based individual bird monitoring', 'Manual observation', 'Basic record keeping'],
      correct: 'Technology-based individual bird monitoring',
      explanation: 'Precision poultry farming uses sensors and technology to monitor individual birds and optimize production.',
      difficulty: 'hard'
    },
    {
      id: 'poultry_hard_4',
      question: 'What is CRISPR gene editing application in poultry?',
      options: ['Traditional breeding', 'Precise genetic modifications', 'Natural selection', 'Random mutations'],
      correct: 'Precise genetic modifications',
      explanation: 'CRISPR technology allows precise genetic modifications in poultry for disease resistance and improved traits.',
      difficulty: 'hard'
    },
    {
      id: 'poultry_hard_5',
      question: 'What is metabolomics in poultry research?',
      options: ['Basic metabolism study', 'Comprehensive metabolite analysis', 'Weight measurement', 'Feed analysis only'],
      correct: 'Comprehensive metabolite analysis',
      explanation: 'Metabolomics analyzes all metabolites to understand poultry physiology, health, and product quality.',
      difficulty: 'hard'
    },
    {
      id: 'poultry_hard_6',
      question: 'What is epigenetic programming in poultry?',
      options: ['Genetic programming', 'Environmental influences on gene expression', 'Computer programming', 'Feed programming'],
      correct: 'Environmental influences on gene expression',
      explanation: 'Epigenetic programming studies how environmental factors influence gene expression without changing DNA.',
      difficulty: 'hard'
    },
    {
      id: 'poultry_hard_7',
      question: 'What is microbiome research in poultry production?',
      options: ['Disease study only', 'Study of gut microbial communities', 'Feed analysis', 'Growth measurement'],
      correct: 'Study of gut microbial communities',
      explanation: 'Microbiome research studies gut microbial communities and their effects on poultry health and performance.',
      difficulty: 'hard'
    },
    {
      id: 'poultry_hard_8',
      question: 'What is artificial intelligence application in poultry management?',
      options: ['No application', 'Automated monitoring and decision-making', 'Manual observation', 'Traditional methods'],
      correct: 'Automated monitoring and decision-making',
      explanation: 'AI systems can monitor poultry behavior, health, and performance to make automated management decisions.',
      difficulty: 'hard'
    },
    {
      id: 'poultry_hard_9',
      question: 'What is systems biology approach in poultry research?',
      options: ['Single trait study', 'Integrated multi-omics analysis', 'Traditional methods', 'Basic observations'],
      correct: 'Integrated multi-omics analysis',
      explanation: 'Systems biology integrates genomics, transcriptomics, and metabolomics for comprehensive understanding.',
      difficulty: 'hard'
    },
    {
      id: 'poultry_hard_10',
      question: 'What is blockchain application in poultry traceability?',
      options: ['Traditional record keeping', 'Digital supply chain tracking', 'Basic identification', 'Manual documentation'],
      correct: 'Digital supply chain tracking',
      explanation: 'Blockchain provides transparent, immutable tracking of poultry products from farm to consumer.',
      difficulty: 'hard'
    }
  ]
};
