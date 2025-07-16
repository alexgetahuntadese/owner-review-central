import { Chapter } from '../../types';
import { grade12AgricultureChapters } from './grade12';

export const agricultureChapters: Chapter[] = [
  {
    id: 'agr-11-crop-production',
    name: 'Grade 11: Crop Production and Management',
    description: 'Cultivation techniques, soil management, and crop care',
    questions: [
      // Easy Questions
      {
        id: 'crop_easy_1',
        question: 'What is agriculture?',
        options: ['Only animal farming', 'Science and practice of farming', 'Industrial production', 'Food processing'],
        correct: 'Science and practice of farming',
        explanation: 'Agriculture is the science and practice of farming, including cultivation of plants and livestock.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_2',
        question: 'What are the main requirements for plant growth?',
        options: ['Only water', 'Sunlight, water, air, nutrients, suitable temperature', 'Only sunlight', 'Only soil'],
        correct: 'Sunlight, water, air, nutrients, suitable temperature',
        explanation: 'Plants need sunlight, water, air (carbon dioxide), nutrients, and suitable temperature to grow properly.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_3',
        question: 'What is soil?',
        options: ['Rock only', 'Mixture of minerals, organic matter, water, and air', 'Water only', 'Sand only'],
        correct: 'Mixture of minerals, organic matter, water, and air',
        explanation: 'Soil is a complex mixture of minerals, organic matter, water, and air that supports plant growth.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_4',
        question: 'What is photosynthesis?',
        options: ['Plant respiration', 'Process where plants make food using sunlight', 'Plant reproduction', 'Plant movement'],
        correct: 'Process where plants make food using sunlight',
        explanation: 'Photosynthesis is the process by which plants use sunlight, carbon dioxide, and water to make glucose.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_5',
        question: 'What are the primary nutrients plants need?',
        options: ['Nitrogen, Phosphorus, Potassium', 'Only nitrogen', 'Only phosphorus', 'Only potassium'],
        correct: 'Nitrogen, Phosphorus, Potassium',
        explanation: 'The three primary nutrients (NPK) that plants need are Nitrogen, Phosphorus, and Potassium.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'crop_med_1',
        question: 'What is crop rotation?',
        options: ['Rotating crops during day', 'Growing different crops in sequence on same land', 'Moving crops to different locations', 'Harvesting at different times'],
        correct: 'Growing different crops in sequence on same land',
        explanation: 'Crop rotation involves growing different crops in a planned sequence on the same land to maintain soil fertility.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_2',
        question: 'What is the difference between organic and inorganic fertilizers?',
        options: ['No difference', 'Organic: from living materials, Inorganic: from minerals', 'Only price differs', 'Only color differs'],
        correct: 'Organic: from living materials, Inorganic: from minerals',
        explanation: 'Organic fertilizers come from living materials (compost, manure), while inorganic come from minerals.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_3',
        question: 'What is integrated pest management (IPM)?',
        options: ['Using only pesticides', 'Combining multiple pest control methods', 'Ignoring pests', 'Using only biological control'],
        correct: 'Combining multiple pest control methods',
        explanation: 'IPM combines biological, cultural, physical, and chemical methods to control pests sustainably.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'crop_hard_1',
        question: 'What is precision agriculture?',
        options: ['Manual farming only', 'Technology-based farming using GPS and sensors', 'Traditional farming', 'Small-scale farming'],
        correct: 'Technology-based farming using GPS and sensors',
        explanation: 'Precision agriculture uses GPS, sensors, and data analysis to optimize field-level management.',
        difficulty: 'hard'
      },
      {
        id: 'crop_hard_2',
        question: 'What is hydroponics?',
        options: ['Soil-based growing', 'Growing plants in nutrient solution without soil', 'Outdoor farming only', 'Traditional agriculture'],
        correct: 'Growing plants in nutrient solution without soil',
        explanation: 'Hydroponics is a method of growing plants using mineral nutrient solutions in water without soil.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'agr-11-livestock',
    name: 'Grade 11: Livestock Production and Management',
    description: 'Animal husbandry, breeding, and livestock care',
    questions: [
      // Easy Questions
      {
        id: 'g11_livestock_easy_1',
        question: 'What is livestock?',
        options: ['Wild animals', 'Domesticated animals raised for food and other products', 'Pet animals', 'Zoo animals'],
        correct: 'Domesticated animals raised for food and other products',
        explanation: 'Livestock refers to domesticated animals raised in agriculture for food, fiber, and labor.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_2',
        question: 'What is animal husbandry?',
        options: ['Hunting animals', 'Science of breeding and caring for animals', 'Animal entertainment', 'Animal research only'],
        correct: 'Science of breeding and caring for animals',
        explanation: 'Animal husbandry is the branch of agriculture concerned with breeding and caring for farm animals.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_3',
        question: 'What are the main types of livestock?',
        options: ['Only cattle', 'Cattle, sheep, goats, pigs, poultry', 'Only chickens', 'Only goats'],
        correct: 'Cattle, sheep, goats, pigs, poultry',
        explanation: 'The main livestock include cattle, sheep, goats, pigs, and poultry (chickens, ducks, etc.).',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_4',
        question: 'What is feed?',
        options: ['Water only', 'Food given to livestock', 'Medicine for animals', 'Shelter for animals'],
        correct: 'Food given to livestock',
        explanation: 'Feed refers to food given to livestock to provide them with necessary nutrients.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_5',
        question: 'What is pasture?',
        options: ['Animal shelter', 'Grassland where animals graze', 'Water source', 'Animal medicine'],
        correct: 'Grassland where animals graze',
        explanation: 'Pasture is land covered with grass suitable for grazing by livestock.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_livestock_med_1',
        question: 'What is artificial insemination?',
        options: ['Natural breeding', 'Manually introducing sperm into female reproductive tract', 'Feeding technique', 'Housing method'],
        correct: 'Manually introducing sperm into female reproductive tract',
        explanation: 'Artificial insemination is the deliberate introduction of sperm into the female reproductive tract.',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_2',
        question: 'What is the difference between intensive and extensive livestock systems?',
        options: ['No difference', 'Intensive: high input/small area, Extensive: low input/large area', 'Only size differs', 'Only cost differs'],
        correct: 'Intensive: high input/small area, Extensive: low input/large area',
        explanation: 'Intensive systems use high inputs on small areas; extensive systems use low inputs on large areas.',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_3',
        question: 'What is selective breeding?',
        options: ['Random mating', 'Choosing animals with desired traits to breed', 'Feeding specific animals', 'Housing animals separately'],
        correct: 'Choosing animals with desired traits to breed',
        explanation: 'Selective breeding involves choosing animals with desired characteristics to produce better offspring.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_livestock_hard_1',
        question: 'What is hybrid vigor (heterosis)?',
        options: ['Weakness in crossbreeds', 'Superior performance of crossbred animals', 'Pure breeding advantage', 'Disease resistance only'],
        correct: 'Superior performance of crossbred animals',
        explanation: 'Hybrid vigor is the tendency for crossbred animals to perform better than their purebred parents.',
        difficulty: 'hard'
      },
      {
        id: 'g11_livestock_hard_2',
        question: 'What is embryo transfer in livestock?',
        options: ['Natural breeding', 'Moving embryos from one female to another', 'Feeding technique', 'Housing method'],
        correct: 'Moving embryos from one female to another',
        explanation: 'Embryo transfer involves moving embryos from a donor female to recipient females.',
        difficulty: 'hard'
      }
    ]
  },

  // Add Grade 12 Agriculture Chapters
  ...grade12AgricultureChapters
];