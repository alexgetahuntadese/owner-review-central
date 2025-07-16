
import { Chapter } from '../../../types';

export const unit15SafeFoodProduction: Chapter = {
  id: 'agri-12-15',
  name: 'Unit 15: Safe Food Production and Postharvest Handling',
  description: 'Food safety practices and postharvest management techniques',
  questions: [
    // Easy Questions (10)
    {
      id: 'safety_easy_1',
      question: 'What is food safety?',
      options: ['Food taste', 'Ensuring food is safe for consumption', 'Food appearance', 'Food packaging'],
      correct: 'Ensuring food is safe for consumption',
      explanation: 'Food safety involves practices that ensure food is safe for human consumption.',
      difficulty: 'easy'
    },
    {
      id: 'safety_easy_2',
      question: 'What is postharvest handling?',
      options: ['Pre-planting activities', 'Activities after crop harvest', 'Soil preparation', 'Seed treatment'],
      correct: 'Activities after crop harvest',
      explanation: 'Postharvest handling includes all activities performed on crops after harvest to maintain quality.',
      difficulty: 'easy'
    },
    {
      id: 'safety_easy_3',
      question: 'What is the main cause of food spoilage?',
      options: ['Good storage', 'Microorganisms and enzymes', 'Proper handling', 'Clean containers'],
      correct: 'Microorganisms and enzymes',
      explanation: 'Food spoilage is primarily caused by microorganisms (bacteria, fungi) and enzymatic reactions.',
      difficulty: 'easy'
    },
    {
      id: 'safety_easy_4',
      question: 'What is food contamination?',
      options: ['Food improvement', 'Presence of harmful substances in food', 'Food processing', 'Food preparation'],
      correct: 'Presence of harmful substances in food',
      explanation: 'Food contamination occurs when harmful substances like pathogens or chemicals are present in food.',
      difficulty: 'easy'
    },
    {
      id: 'safety_easy_5',
      question: 'What is proper storage important for?',
      options: ['Wasting food', 'Maintaining food quality and safety', 'Increasing contamination', 'Faster spoilage'],
      correct: 'Maintaining food quality and safety',
      explanation: 'Proper storage maintains food quality, safety, and nutritional value while extending shelf life.',
      difficulty: 'easy'
    },
    {
      id: 'safety_easy_6',
      question: 'What is the first step in food safety?',
      options: ['Cooking', 'Good personal hygiene', 'Packaging', 'Selling'],
      correct: 'Good personal hygiene',
      explanation: 'Good personal hygiene is fundamental to food safety throughout the food chain.',
      difficulty: 'easy'
    },
    {
      id: 'safety_easy_7',
      question: 'What is washing produce important for?',
      options: ['Making it look better', 'Removing dirt and potential contaminants', 'Increasing weight', 'Changing color'],
      correct: 'Removing dirt and potential contaminants',
      explanation: 'Washing produce removes dirt, pesticide residues, and potential microbial contaminants.',
      difficulty: 'easy'
    },
    {
      id: 'safety_easy_8',
      question: 'What is cold storage used for?',
      options: ['Warming food', 'Slowing spoilage by reducing temperature', 'Cooking food', 'Drying food'],
      correct: 'Slowing spoilage by reducing temperature',
      explanation: 'Cold storage slows down microbial growth and enzymatic reactions that cause spoilage.',
      difficulty: 'easy'
    },
    {
      id: 'safety_easy_9',
      question: 'What is cross-contamination?',
      options: ['Proper mixing', 'Transfer of contaminants from one food to another', 'Food processing', 'Safe handling'],
      correct: 'Transfer of contaminants from one food to another',
      explanation: 'Cross-contamination occurs when contaminants are transferred from one food item to another.',
      difficulty: 'easy'
    },
    {
      id: 'safety_easy_10',
      question: 'What is drying used for in food preservation?',
      options: ['Adding moisture', 'Removing moisture to prevent spoilage', 'Increasing weight', 'Changing taste only'],
      correct: 'Removing moisture to prevent spoilage',
      explanation: 'Drying removes moisture, which microorganisms need to grow, thus preventing spoilage.',
      difficulty: 'easy'
    },

    // Medium Questions (10)
    {
      id: 'safety_med_1',
      question: 'What is HACCP in food safety?',
      options: ['Random food testing', 'Systematic approach to identify and control hazards', 'Only visual inspection', 'No specific system'],
      correct: 'Systematic approach to identify and control hazards',
      explanation: 'HACCP (Hazard Analysis Critical Control Points) is a systematic approach to identify and control food safety hazards.',
      difficulty: 'medium'
    },
    {
      id: 'safety_med_2',
      question: 'What are the main types of food hazards?',
      options: ['Only biological', 'Biological, chemical, and physical', 'Only chemical', 'Only physical'],
      correct: 'Biological, chemical, and physical',
      explanation: 'Food hazards include biological (pathogens), chemical (pesticides), and physical (foreign objects) hazards.',
      difficulty: 'medium'
    },
    {
      id: 'safety_med_3',
      question: 'What is the temperature danger zone for food?',
      options: ['Below 0°C', '4-60°C where bacteria multiply rapidly', 'Above 100°C', 'Room temperature only'],
      correct: '4-60°C where bacteria multiply rapidly',
      explanation: 'The temperature danger zone (4-60°C) allows rapid bacterial multiplication and should be avoided.',
      difficulty: 'medium'
    },
    {
      id: 'safety_med_4',
      question: 'What is modified atmosphere packaging?',
      options: ['Normal packaging', 'Changing gas composition around food', 'Only vacuum packaging', 'No special packaging'],
      correct: 'Changing gas composition around food',
      explanation: 'Modified atmosphere packaging alters the gas composition around food to extend shelf life.',
      difficulty: 'medium'
    },
    {
      id: 'safety_med_5',
      question: 'What is the role of pH in food preservation?',
      options: ['No role', 'Low pH inhibits many harmful microorganisms', 'Only affects color', 'Only affects taste'],
      correct: 'Low pH inhibits many harmful microorganisms',
      explanation: 'Low pH (acidic conditions) inhibits the growth of many pathogenic microorganisms.',
      difficulty: 'medium'
    },
    {
      id: 'safety_med_6',
      question: 'What is good agricultural practices (GAP)?',
      options: ['Random farming', 'Guidelines for safe and sustainable farming', 'Only organic farming', 'No specific practices'],
      correct: 'Guidelines for safe and sustainable farming',
      explanation: 'GAP provides guidelines for safe, sustainable, and environmentally friendly agricultural production.',
      difficulty: 'medium'
    },
    {
      id: 'safety_med_7',
      question: 'What is traceability in the food system?',
      options: ['No tracking needed', 'Ability to track food through the supply chain', 'Only final product testing', 'Random monitoring'],
      correct: 'Ability to track food through the supply chain',
      explanation: 'Traceability enables tracking food products throughout the supply chain for safety and quality assurance.',
      difficulty: 'medium'
    },
    {
      id: 'safety_med_8',
      question: 'What is water activity in food preservation?',
      options: ['Water temperature', 'Available water for microbial growth', 'Water pH only', 'Water color'],
      correct: 'Available water for microbial growth',
      explanation: 'Water activity measures the water available for microbial growth; lower water activity inhibits spoilage.',
      difficulty: 'medium'
    },
    {
      id: 'safety_med_9',
      question: 'What is integrated pest management in food safety?',
      options: ['Chemical control only', 'Combining multiple pest control methods safely', 'No pest control', 'Random pesticide use'],
      correct: 'Combining multiple pest control methods safely',
      explanation: 'IPM combines multiple pest control methods while minimizing risks to food safety and environment.',
      difficulty: 'medium'
    },
    {
      id: 'safety_med_10',
      question: 'What is shelf life of food products?',
      options: ['Storage location', 'Time food maintains acceptable quality', 'Only expiration date', 'Processing time'],
      correct: 'Time food maintains acceptable quality',
      explanation: 'Shelf life is the period during which food maintains acceptable quality and safety under specified conditions.',
      difficulty: 'medium'
    },

    // Hard Questions (10)
    {
      id: 'safety_hard_1',
      question: 'What is quantitative microbial risk assessment?',
      options: ['Simple counting', 'Mathematical modeling of microbial risks', 'Visual inspection only', 'No risk assessment'],
      correct: 'Mathematical modeling of microbial risks',
      explanation: 'Quantitative microbial risk assessment uses mathematical models to estimate the probability and severity of microbial risks.',
      difficulty: 'hard'
    },
    {
      id: 'safety_hard_2',
      question: 'What is the role of biofilms in food safety?',
      options: ['Always beneficial', 'Bacterial communities that can harbor pathogens', 'Only aesthetic concern', 'No impact'],
      correct: 'Bacterial communities that can harbor pathogens',
      explanation: 'Biofilms are bacterial communities that can protect pathogens from sanitizers and contaminate food.',
      difficulty: 'hard'
    },
    {
      id: 'safety_hard_3',
      question: 'What is whole genome sequencing in food safety?',
      options: ['Traditional testing', 'DNA analysis for pathogen identification and tracking', 'Visual inspection', 'Chemical testing only'],
      correct: 'DNA analysis for pathogen identification and tracking',
      explanation: 'Whole genome sequencing analyzes complete DNA to identify and track foodborne pathogens accurately.',
      difficulty: 'hard'
    },
    {
      id: 'safety_hard_4',
      question: 'What is predictive microbiology?',
      options: ['Guessing', 'Mathematical models predicting microbial behavior', 'Random testing', 'No prediction possible'],
      correct: 'Mathematical models predicting microbial behavior',
      explanation: 'Predictive microbiology uses mathematical models to predict microbial growth, survival, and inactivation.',
      difficulty: 'hard'
    },
    {
      id: 'safety_hard_5',
      question: 'What is blockchain application in food traceability?',
      options: ['Traditional record keeping', 'Immutable digital ledger for supply chain tracking', 'Basic labeling', 'Manual documentation'],
      correct: 'Immutable digital ledger for supply chain tracking',
      explanation: 'Blockchain provides transparent, tamper-proof tracking of food products throughout the supply chain.',
      difficulty: 'hard'
    },
    {
      id: 'safety_hard_6',
      question: 'What is machine learning in food safety?',
      options: ['Manual analysis', 'AI algorithms for pattern recognition and prediction', 'Simple calculations', 'No technology use'],
      correct: 'AI algorithms for pattern recognition and prediction',
      explanation: 'Machine learning uses AI algorithms to recognize patterns and predict food safety risks and outcomes.',
      difficulty: 'hard'
    },
    {
      id: 'safety_hard_7',
      question: 'What is hurdle technology in food preservation?',
      options: ['Single preservation method', 'Combining multiple preservation methods', 'No preservation', 'Random methods'],
      correct: 'Combining multiple preservation methods',
      explanation: 'Hurdle technology combines multiple preservation methods to create synergistic effects for food safety.',
      difficulty: 'hard'
    },
    {
      id: 'safety_hard_8',
      question: 'What is metabolomics in food safety research?',
      options: ['Basic testing', 'Comprehensive analysis of metabolites', 'Visual inspection', 'Simple chemical tests'],
      correct: 'Comprehensive analysis of metabolites',
      explanation: 'Metabolomics analyzes all metabolites to understand food safety, quality, and spoilage mechanisms.',
      difficulty: 'hard'
    },
    {
      id: 'safety_hard_9',
      question: 'What is Internet of Things (IoT) in food safety?',
      options: ['No technology use', 'Connected sensors for real-time monitoring', 'Manual monitoring', 'Basic instruments'],
      correct: 'Connected sensors for real-time monitoring',
      explanation: 'IoT uses connected sensors for real-time monitoring of temperature, humidity, and other food safety parameters.',
      difficulty: 'hard'
    },
    {
      id: 'safety_hard_10',
      question: 'What is nanotechnology application in food packaging?',
      options: ['Traditional packaging', 'Nanomaterials for enhanced barrier properties', 'No special materials', 'Basic plastic only'],
      correct: 'Nanomaterials for enhanced barrier properties',
      explanation: 'Nanotechnology uses nanomaterials to create packaging with enhanced barrier properties and antimicrobial effects.',
      difficulty: 'hard'
    }
  ]
};
