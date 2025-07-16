
import { Chapter } from '../../../types';

export const unit1VegetableCrops: Chapter = {
  id: 'agri-12-1',
  name: 'Unit 1: Vegetable Crops Production and Management',
  description: 'Production techniques, management practices, and cultivation of vegetable crops',
  questions: [
    // Easy Questions (10)
    {
      id: 'veg_easy_1',
      question: 'What are vegetable crops?',
      options: ['Only leafy plants', 'Plants grown for edible parts like leaves, fruits, roots', 'Ornamental plants', 'Tree crops only'],
      correct: 'Plants grown for edible parts like leaves, fruits, roots',
      explanation: 'Vegetable crops are plants cultivated for their edible parts including leaves, fruits, roots, stems, and flowers.',
      difficulty: 'easy'
    },
    {
      id: 'veg_easy_2',
      question: 'What is the main purpose of growing vegetable crops?',
      options: ['Decoration', 'Food and nutrition', 'Timber production', 'Soil conservation only'],
      correct: 'Food and nutrition',
      explanation: 'Vegetable crops are primarily grown to provide food and essential nutrients for human consumption.',
      difficulty: 'easy'
    },
    {
      id: 'veg_easy_3',
      question: 'Which of these is a leafy vegetable?',
      options: ['Tomato', 'Cabbage', 'Carrot', 'Potato'],
      correct: 'Cabbage',
      explanation: 'Cabbage is a leafy vegetable where the leaves form the edible part.',
      difficulty: 'easy'
    },
    {
      id: 'veg_easy_4',
      question: 'What is transplanting in vegetable production?',
      options: ['Moving mature plants', 'Moving seedlings from nursery to field', 'Harvesting vegetables', 'Watering plants'],
      correct: 'Moving seedlings from nursery to field',
      explanation: 'Transplanting involves moving young seedlings from the nursery to the main field for further growth.',
      difficulty: 'easy'
    },
    {
      id: 'veg_easy_5',
      question: 'What is a nursery in agriculture?',
      options: ['Storage facility', 'Place where seedlings are raised', 'Processing center', 'Market place'],
      correct: 'Place where seedlings are raised',
      explanation: 'A nursery is a facility where young plants and seedlings are grown before transplanting to the field.',
      difficulty: 'easy'
    },
    {
      id: 'veg_easy_6',
      question: 'Which season is best for cool-season vegetables?',
      options: ['Hot summer', 'Cool weather periods', 'Rainy season only', 'Dry season only'],
      correct: 'Cool weather periods',
      explanation: 'Cool-season vegetables grow best during cooler weather periods with moderate temperatures.',
      difficulty: 'easy'
    },
    {
      id: 'veg_easy_7',
      question: 'What is mulching in vegetable production?',
      options: ['Deep plowing', 'Covering soil around plants', 'Removing weeds', 'Adding fertilizer'],
      correct: 'Covering soil around plants',
      explanation: 'Mulching involves covering the soil around plants with organic or inorganic materials to conserve moisture and suppress weeds.',
      difficulty: 'easy'
    },
    {
      id: 'veg_easy_8',
      question: 'What is the main benefit of crop rotation in vegetable farming?',
      options: ['Faster growth', 'Better soil health and pest control', 'Bigger vegetables', 'Less water needed'],
      correct: 'Better soil health and pest control',
      explanation: 'Crop rotation helps maintain soil fertility and breaks pest and disease cycles.',
      difficulty: 'easy'
    },
    {
      id: 'veg_easy_9',
      question: 'What is direct seeding?',
      options: ['Transplanting seedlings', 'Planting seeds directly in the field', 'Using only hybrid seeds', 'Indoor planting'],
      correct: 'Planting seeds directly in the field',
      explanation: 'Direct seeding involves planting seeds directly in the final growing location without transplanting.',
      difficulty: 'easy'
    },
    {
      id: 'veg_easy_10',
      question: 'What is thinning in vegetable production?',
      options: ['Making plants shorter', 'Removing excess seedlings', 'Cutting leaves', 'Reducing water'],
      correct: 'Removing excess seedlings',
      explanation: 'Thinning involves removing excess seedlings to provide adequate space for remaining plants to grow properly.',
      difficulty: 'easy'
    },

    // Medium Questions (10)
    {
      id: 'veg_med_1',
      question: 'What is integrated pest management (IPM) in vegetable production?',
      options: ['Using only pesticides', 'Combining multiple pest control methods', 'Biological control only', 'Ignoring pests'],
      correct: 'Combining multiple pest control methods',
      explanation: 'IPM combines biological, cultural, mechanical, and chemical methods to manage pests sustainably.',
      difficulty: 'medium'
    },
    {
      id: 'veg_med_2',
      question: 'What is the difference between determinate and indeterminate tomatoes?',
      options: ['Size difference only', 'Determinate: fixed growth, Indeterminate: continuous growth', 'Color difference', 'Disease resistance'],
      correct: 'Determinate: fixed growth, Indeterminate: continuous growth',
      explanation: 'Determinate tomatoes have limited growth and fruit all at once, while indeterminate varieties grow and fruit continuously.',
      difficulty: 'medium'
    },
    {
      id: 'veg_med_3',
      question: 'What is companion planting?',
      options: ['Planting alone', 'Growing different plants together for mutual benefit', 'Planting in rows only', 'Sequential planting'],
      correct: 'Growing different plants together for mutual benefit',
      explanation: 'Companion planting involves growing different plants together where they benefit each other through pest control, pollination, or nutrient sharing.',
      difficulty: 'medium'
    },
    {
      id: 'veg_med_4',
      question: 'What is bolting in vegetable crops?',
      options: ['Strong growth', 'Premature flowering and seed production', 'Root development', 'Leaf expansion'],
      correct: 'Premature flowering and seed production',
      explanation: 'Bolting is the premature development of flowers and seeds, often triggered by stress or environmental conditions.',
      difficulty: 'medium'
    },
    {
      id: 'veg_med_5',
      question: 'What is succession planting?',
      options: ['Planting once per season', 'Planting the same crop at intervals', 'Planting different crops together', 'Replanting failed crops'],
      correct: 'Planting the same crop at intervals',
      explanation: 'Succession planting involves planting the same crop at regular intervals to ensure continuous harvest.',
      difficulty: 'medium'
    },
    {
      id: 'veg_med_6',
      question: 'What is hardening off in vegetable production?',
      options: ['Making plants stronger', 'Gradually exposing seedlings to outdoor conditions', 'Increasing fertilizer', 'Reducing water'],
      correct: 'Gradually exposing seedlings to outdoor conditions',
      explanation: 'Hardening off is the process of gradually acclimating indoor-grown seedlings to outdoor conditions before transplanting.',
      difficulty: 'medium'
    },
    {
      id: 'veg_med_7',
      question: 'What is the purpose of pruning in vegetable crops?',
      options: ['Decoration only', 'Improve air circulation and fruit quality', 'Reduce plant size only', 'Save water'],
      correct: 'Improve air circulation and fruit quality',
      explanation: 'Pruning helps improve air circulation, light penetration, and focuses plant energy on fruit production.',
      difficulty: 'medium'
    },
    {
      id: 'veg_med_8',
      question: 'What is soil solarization?',
      options: ['Adding solar panels', 'Using sun heat to kill soil pests', 'Solar-powered irrigation', 'Growing in sunlight only'],
      correct: 'Using sun heat to kill soil pests',
      explanation: 'Soil solarization uses solar heat trapped under plastic sheeting to kill soil-borne pests and diseases.',
      difficulty: 'medium'
    },
    {
      id: 'veg_med_9',
      question: 'What is the benefit of using raised beds for vegetables?',
      options: ['Better drainage and soil control', 'Looks prettier', 'Uses less space', 'Requires no fertilizer'],
      correct: 'Better drainage and soil control',
      explanation: 'Raised beds provide better drainage, soil control, and can extend the growing season.',
      difficulty: 'medium'
    },
    {
      id: 'veg_med_10',
      question: 'What is grafting in vegetable production?',
      options: ['Natural breeding', 'Joining parts of two plants', 'Seed treatment', 'Soil preparation'],
      correct: 'Joining parts of two plants',
      explanation: 'Grafting involves joining the shoot system of one plant with the root system of another for disease resistance or improved vigor.',
      difficulty: 'medium'
    },

    // Hard Questions (10)
    {
      id: 'veg_hard_1',
      question: 'What is photoperiodism in vegetable crops?',
      options: ['Light intensity response', 'Response to day length for flowering', 'Photosynthesis rate', 'Color development'],
      correct: 'Response to day length for flowering',
      explanation: 'Photoperiodism is the response of plants to the relative length of day and night, affecting flowering and development.',
      difficulty: 'hard'
    },
    {
      id: 'veg_hard_2',
      question: 'What is controlled atmosphere storage?',
      options: ['Normal storage', 'Storage with controlled gas composition', 'Cold storage only', 'Dry storage'],
      correct: 'Storage with controlled gas composition',
      explanation: 'Controlled atmosphere storage involves modifying oxygen and carbon dioxide levels to extend vegetable storage life.',
      difficulty: 'hard'
    },
    {
      id: 'veg_hard_3',
      question: 'What is marker-assisted selection in vegetable breeding?',
      options: ['Visual selection', 'Using DNA markers for breeding decisions', 'Random selection', 'Size-based selection'],
      correct: 'Using DNA markers for breeding decisions',
      explanation: 'Marker-assisted selection uses DNA markers linked to desired traits to make more efficient breeding decisions.',
      difficulty: 'hard'
    },
    {
      id: 'veg_hard_4',
      question: 'What is soilless culture in vegetable production?',
      options: ['Growing in poor soil', 'Growing without soil using nutrient solutions', 'Outdoor farming', 'Traditional farming'],
      correct: 'Growing without soil using nutrient solutions',
      explanation: 'Soilless culture includes hydroponics and other methods of growing plants without soil, using nutrient solutions.',
      difficulty: 'hard'
    },
    {
      id: 'veg_hard_5',
      question: 'What is allelopathy in vegetable cropping systems?',
      options: ['Plant cooperation', 'Chemical inhibition between plants', 'Plant nutrition', 'Growth promotion'],
      correct: 'Chemical inhibition between plants',
      explanation: 'Allelopathy occurs when one plant releases chemicals that inhibit the growth or development of other plants.',
      difficulty: 'hard'
    },
    {
      id: 'veg_hard_6',
      question: 'What is vernalization in vegetable crops?',
      options: ['Spring planting', 'Cold treatment to induce flowering', 'Heat treatment', 'Chemical treatment'],
      correct: 'Cold treatment to induce flowering',
      explanation: 'Vernalization is the process where exposure to cold temperatures promotes flowering in certain crops.',
      difficulty: 'hard'
    },
    {
      id: 'veg_hard_7',
      question: 'What is genetic transformation in vegetables?',
      options: ['Natural breeding', 'Introducing foreign genes using biotechnology', 'Hybrid production', 'Selection breeding'],
      correct: 'Introducing foreign genes using biotechnology',
      explanation: 'Genetic transformation involves introducing foreign genes into plants using biotechnology techniques.',
      difficulty: 'hard'
    },
    {
      id: 'veg_hard_8',
      question: 'What is precision agriculture in vegetable farming?',
      options: ['Careful farming', 'Technology-based site-specific management', 'Hand cultivation', 'Small-scale farming'],
      correct: 'Technology-based site-specific management',
      explanation: 'Precision agriculture uses GPS, sensors, and data analysis to optimize field-level management with variable-rate applications.',
      difficulty: 'hard'
    },
    {
      id: 'veg_hard_9',
      question: 'What is the role of plant growth regulators in vegetables?',
      options: ['Natural growth only', 'Controlling plant development and physiology', 'Color enhancement only', 'Size increase only'],
      correct: 'Controlling plant development and physiology',
      explanation: 'Plant growth regulators are chemicals that control various aspects of plant growth, development, and physiological processes.',
      difficulty: 'hard'
    },
    {
      id: 'veg_hard_10',
      question: 'What is metabolomics in vegetable crop research?',
      options: ['Study of metabolism only', 'Comprehensive analysis of metabolites', 'Nutritional analysis', 'Growth measurement'],
      correct: 'Comprehensive analysis of metabolites',
      explanation: 'Metabolomics is the comprehensive analysis of metabolites in plants to understand biochemical processes and improve crop quality.',
      difficulty: 'hard'
    }
  ]
};
