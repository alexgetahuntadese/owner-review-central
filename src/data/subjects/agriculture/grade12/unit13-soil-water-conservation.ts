
import { Chapter } from '../../../types';

export const unit13SoilWaterConservation: Chapter = {
  id: 'agri-12-13',
  name: 'Unit 13: Soil and Water Conservation',
  description: 'Techniques for conserving soil and water resources',
  questions: [
    // Easy Questions (10)
    {
      id: 'conserv_easy_1',
      question: 'What is soil erosion?',
      options: ['Soil formation', 'Loss of topsoil by wind or water', 'Soil improvement', 'Soil analysis'],
      correct: 'Loss of topsoil by wind or water',
      explanation: 'Soil erosion is the process where topsoil is worn away by wind, water, or other agents.',
      difficulty: 'easy'
    },
    {
      id: 'conserv_easy_2',
      question: 'What is contour farming?',
      options: ['Random planting', 'Farming along the contour lines of slopes', 'Vertical farming', 'Indoor farming'],
      correct: 'Farming along the contour lines of slopes',
      explanation: 'Contour farming involves planting crops along the natural contour lines of slopes to reduce erosion.',
      difficulty: 'easy'
    },
    {
      id: 'conserv_easy_3',
      question: 'What is terracing?',
      options: ['Flat farming only', 'Creating level areas on slopes', 'Deep plowing', 'No-till farming'],
      correct: 'Creating level areas on slopes',
      explanation: 'Terracing creates level planting areas on slopes to reduce water runoff and soil erosion.',
      difficulty: 'easy'
    },
    {
      id: 'conserv_easy_4',
      question: 'What is mulching for soil conservation?',
      options: ['Removing soil cover', 'Covering soil to protect it', 'Deep cultivation', 'Adding chemicals'],
      correct: 'Covering soil to protect it',
      explanation: 'Mulching involves covering soil with organic or inorganic materials to protect it from erosion.',
      difficulty: 'easy'
    },
    {
      id: 'conserv_easy_5',
      question: 'What is a watershed?',
      options: ['Water storage tank', 'Area that drains into a water body', 'Irrigation system', 'Water treatment plant'],
      correct: 'Area that drains into a water body',
      explanation: 'A watershed is an area of land that drains water to a common outlet like a river or lake.',
      difficulty: 'easy'
    },
    {
      id: 'conserv_easy_6',
      question: 'What is cover cropping?',
      options: ['Covering crops with plastic', 'Growing crops to protect soil', 'Removing plant cover', 'Indoor growing'],
      correct: 'Growing crops to protect soil',
      explanation: 'Cover cropping involves growing plants specifically to protect and improve soil health.',
      difficulty: 'easy'
    },
    {
      id: 'conserv_easy_7',
      question: 'What is crop rotation for soil conservation?',
      options: ['Growing same crop continuously', 'Alternating different crops over time', 'Moving crops daily', 'No crop production'],
      correct: 'Alternating different crops over time',
      explanation: 'Crop rotation involves growing different crops in sequence to maintain soil fertility and structure.',
      difficulty: 'easy'
    },
    {
      id: 'conserv_easy_8',
      question: 'What is water harvesting?',
      options: ['Wasting water', 'Collecting and storing rainwater', 'Using only groundwater', 'Avoiding water use'],
      correct: 'Collecting and storing rainwater',
      explanation: 'Water harvesting involves collecting and storing rainwater for later use in agriculture.',
      difficulty: 'easy'
    },
    {
      id: 'conserv_easy_9',
      question: 'What is strip cropping?',
      options: ['Single crop strips', 'Alternating strips of different crops', 'No crops', 'Random planting'],
      correct: 'Alternating strips of different crops',
      explanation: 'Strip cropping involves growing alternating strips of different crops to reduce wind and water erosion.',
      difficulty: 'easy'
    },
    {
      id: 'conserv_easy_10',
      question: 'What is the purpose of check dams?',
      options: ['Increasing water flow', 'Slowing water flow to reduce erosion', 'Removing water', 'No specific purpose'],
      correct: 'Slowing water flow to reduce erosion',
      explanation: 'Check dams are small barriers built across waterways to slow water flow and reduce erosion.',
      difficulty: 'easy'
    },

    // Medium Questions (10)
    {
      id: 'conserv_med_1',
      question: 'What is the difference between sheet and gully erosion?',
      options: ['No difference', 'Sheet: uniform removal, Gully: channel formation', 'Only speed differs', 'Only location differs'],
      correct: 'Sheet: uniform removal, Gully: channel formation',
      explanation: 'Sheet erosion removes soil uniformly, while gully erosion creates deep channels through concentrated water flow.',
      difficulty: 'medium'
    },
    {
      id: 'conserv_med_2',
      question: 'What is agroforestry\'s role in soil conservation?',
      options: ['No role', 'Trees reduce erosion and improve soil', 'Only timber production', 'Increases erosion'],
      correct: 'Trees reduce erosion and improve soil',
      explanation: 'Agroforestry systems use trees to reduce erosion, improve soil structure, and enhance fertility.',
      difficulty: 'medium'
    },
    {
      id: 'conserv_med_3',
      question: 'What is integrated watershed management?',
      options: ['Single practice focus', 'Holistic approach to entire watershed', 'Water management only', 'Soil management only'],
      correct: 'Holistic approach to entire watershed',
      explanation: 'Integrated watershed management considers all aspects of land and water management within a watershed.',
      difficulty: 'medium'
    },
    {
      id: 'conserv_med_4',
      question: 'What is the role of organic matter in soil conservation?',
      options: ['No role', 'Improves soil structure and water retention', 'Only provides nutrients', 'Causes erosion'],
      correct: 'Improves soil structure and water retention',
      explanation: 'Organic matter improves soil structure, water retention, and resistance to erosion.',
      difficulty: 'medium'
    },
    {
      id: 'conserv_med_5',
      question: 'What is conservation tillage?',
      options: ['Intensive tillage', 'Reduced tillage to maintain soil cover', 'No farming', 'Deep plowing only'],
      correct: 'Reduced tillage to maintain soil cover',
      explanation: 'Conservation tillage reduces soil disturbance and maintains crop residues for erosion protection.',
      difficulty: 'medium'
    },
    {
      id: 'conserv_med_6',
      question: 'What is drip irrigation\'s benefit for water conservation?',
      options: ['Uses more water', 'Delivers water directly to roots efficiently', 'No water savings', 'Only for decoration'],
      correct: 'Delivers water directly to roots efficiently',
      explanation: 'Drip irrigation delivers water directly to plant roots, minimizing waste and maximizing efficiency.',
      difficulty: 'medium'
    },
    {
      id: 'conserv_med_7',
      question: 'What is buffer strip farming?',
      options: ['No strips', 'Vegetated areas along waterways', 'Random planting', 'Single crop strips'],
      correct: 'Vegetated areas along waterways',
      explanation: 'Buffer strips are vegetated areas along waterways that filter runoff and prevent erosion.',
      difficulty: 'medium'
    },
    {
      id: 'conserv_med_8',
      question: 'What is soil compaction and its prevention?',
      options: ['Beneficial process', 'Soil compression reducing pore space', 'Soil improvement', 'Natural process only'],
      correct: 'Soil compression reducing pore space',
      explanation: 'Soil compaction compresses soil particles, reducing pore space and can be prevented through proper management.',
      difficulty: 'medium'
    },
    {
      id: 'conserv_med_9',
      question: 'What is the role of vegetation in slope stability?',
      options: ['Destabilizes slopes', 'Roots bind soil and prevent landslides', 'No effect', 'Only aesthetic value'],
      correct: 'Roots bind soil and prevent landslides',
      explanation: 'Plant roots bind soil particles together, providing mechanical support and preventing slope failure.',
      difficulty: 'medium'
    },
    {
      id: 'conserv_med_10',
      question: 'What is precision irrigation?',
      options: ['Random watering', 'Technology-based efficient water application', 'Manual watering', 'No irrigation'],
      correct: 'Technology-based efficient water application',
      explanation: 'Precision irrigation uses technology to apply water efficiently based on crop needs and soil conditions.',
      difficulty: 'medium'
    },

    // Hard Questions (10)
    {
      id: 'conserv_hard_1',
      question: 'What is the USLE (Universal Soil Loss Equation)?',
      options: ['Simple measurement', 'Mathematical model predicting soil erosion', 'Soil improvement method', 'Irrigation formula'],
      correct: 'Mathematical model predicting soil erosion',
      explanation: 'USLE is a mathematical model that predicts average annual soil loss based on various factors.',
      difficulty: 'hard'
    },
    {
      id: 'conserv_hard_2',
      question: 'What is remote sensing application in soil conservation?',
      options: ['Ground observation only', 'Satellite monitoring of erosion and conservation', 'Manual measurement', 'No monitoring'],
      correct: 'Satellite monitoring of erosion and conservation',
      explanation: 'Remote sensing uses satellite imagery to monitor soil erosion patterns and conservation effectiveness.',
      difficulty: 'hard'
    },
    {
      id: 'conserv_hard_3',
      question: 'What is carbon sequestration in soil conservation?',
      options: ['Releasing carbon', 'Storing carbon in soil organic matter', 'Ignoring carbon', 'Measuring carbon only'],
      correct: 'Storing carbon in soil organic matter',
      explanation: 'Soil conservation practices can increase carbon storage in soil organic matter, contributing to climate change mitigation.',
      difficulty: 'hard'
    },
    {
      id: 'conserv_hard_4',
      question: 'What is modeling soil erosion processes?',
      options: ['Simple observation', 'Computer simulation of erosion dynamics', 'Manual calculation', 'Visual estimation'],
      correct: 'Computer simulation of erosion dynamics',
      explanation: 'Erosion modeling uses computer simulations to predict erosion processes and evaluate conservation strategies.',
      difficulty: 'hard'
    },
    {
      id: 'conserv_hard_5',
      question: 'What is payment for ecosystem services in conservation?',
      options: ['No payments', 'Financial incentives for conservation practices', 'Only production payments', 'Traditional subsidies'],
      correct: 'Financial incentives for conservation practices',
      explanation: 'Payment for ecosystem services provides financial incentives for implementing conservation practices.',
      difficulty: 'hard'
    },
    {
      id: 'conserv_hard_6',
      question: 'What is landscape-scale conservation planning?',
      options: ['Farm-level only', 'Conservation planning across entire landscapes', 'Single field focus', 'No planning needed'],
      correct: 'Conservation planning across entire landscapes',
      explanation: 'Landscape-scale planning considers conservation across entire watersheds or regions for maximum effectiveness.',
      difficulty: 'hard'
    },
    {
      id: 'conserv_hard_7',
      question: 'What is artificial intelligence in precision conservation?',
      options: ['No application', 'AI-optimized conservation strategies', 'Manual decision-making', 'Traditional methods only'],
      correct: 'AI-optimized conservation strategies',
      explanation: 'AI can analyze complex data to optimize conservation strategies and predict their effectiveness.',
      difficulty: 'hard'
    },
    {
      id: 'conserv_hard_8',
      question: 'What is bioengineering in soil conservation?',
      options: ['Traditional methods only', 'Using living materials for conservation structures', 'Chemical engineering', 'No engineering needed'],
      correct: 'Using living materials for conservation structures',
      explanation: 'Bioengineering uses living plants and natural materials to create conservation structures like living retaining walls.',
      difficulty: 'hard'
    },
    {
      id: 'conserv_hard_9',
      question: 'What is climate-smart conservation?',
      options: ['Traditional conservation', 'Conservation adapted for climate change', 'No climate consideration', 'Indoor conservation'],
      correct: 'Conservation adapted for climate change',
      explanation: 'Climate-smart conservation adapts practices to changing climate conditions while providing mitigation benefits.',
      difficulty: 'hard'
    },
    {
      id: 'conserv_hard_10',
      question: 'What is adaptive management in conservation?',
      options: ['Fixed management', 'Flexible management based on monitoring results', 'No management', 'Random management'],
      correct: 'Flexible management based on monitoring results',
      explanation: 'Adaptive management adjusts conservation strategies based on monitoring results and changing conditions.',
      difficulty: 'hard'
    }
  ]
};
