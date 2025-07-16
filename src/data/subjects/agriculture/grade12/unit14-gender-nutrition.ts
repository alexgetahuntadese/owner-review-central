
import { Chapter } from '../../../types';

export const unit14GenderNutrition: Chapter = {
  id: 'agri-12-14',
  name: 'Unit 14: Gender and Human Nutrition',
  description: 'Gender roles in agriculture and nutritional aspects of crops',
  questions: [
    // Easy Questions (10)
    {
      id: 'gender_easy_1',
      question: 'Why is gender important in agriculture?',
      options: ['No importance', 'Both men and women contribute differently', 'Only men work in agriculture', 'Only women work in agriculture'],
      correct: 'Both men and women contribute differently',
      explanation: 'Both men and women play important but often different roles in agricultural production and food security.',
      difficulty: 'easy'
    },
    {
      id: 'gender_easy_2',
      question: 'What are the main macronutrients in food?',
      options: ['Only vitamins', 'Carbohydrates, proteins, and fats', 'Only minerals', 'Water only'],
      correct: 'Carbohydrates, proteins, and fats',
      explanation: 'The three main macronutrients are carbohydrates, proteins, and fats, which provide energy and building blocks.',
      difficulty: 'easy'
    },
    {
      id: 'gender_easy_3',
      question: 'What is malnutrition?',
      options: ['Eating too much', 'Poor nutrition due to inadequate or excess intake', 'Only being overweight', 'Only being underweight'],
      correct: 'Poor nutrition due to inadequate or excess intake',
      explanation: 'Malnutrition includes both undernutrition and overnutrition, affecting health and development.',
      difficulty: 'easy'
    },
    {
      id: 'gender_easy_4',
      question: 'What is gender equality in agriculture?',
      options: ['Men and women doing identical work', 'Equal access to resources and opportunities', 'No differences allowed', 'Separate but unequal'],
      correct: 'Equal access to resources and opportunities',
      explanation: 'Gender equality means men and women have equal access to agricultural resources, opportunities, and decision-making.',
      difficulty: 'easy'
    },
    {
      id: 'gender_easy_5',
      question: 'What are micronutrients?',
      options: ['Large nutrients', 'Vitamins and minerals needed in small amounts', 'Macronutrients', 'Water only'],
      correct: 'Vitamins and minerals needed in small amounts',
      explanation: 'Micronutrients are vitamins and minerals required in small amounts but essential for health.',
      difficulty: 'easy'
    },
    {
      id: 'gender_easy_6',
      question: 'What is food security?',
      options: ['Food storage only', 'Access to sufficient, safe, nutritious food', 'Growing food only', 'Buying food only'],
      correct: 'Access to sufficient, safe, nutritious food',
      explanation: 'Food security means having reliable access to sufficient, safe, and nutritious food for an active life.',
      difficulty: 'easy'
    },
    {
      id: 'gender_easy_7',
      question: 'What is the role of women in household nutrition?',
      options: ['No role', 'Primary responsibility for food preparation and family nutrition', 'Only farming', 'Only income generation'],
      correct: 'Primary responsibility for food preparation and family nutrition',
      explanation: 'Women typically have primary responsibility for household food preparation and ensuring family nutrition.',
      difficulty: 'easy'
    },
    {
      id: 'gender_easy_8',
      question: 'What is biofortification?',
      options: ['Making crops larger', 'Enhancing nutritional content of crops', 'Only increasing yield', 'Making crops colorful'],
      correct: 'Enhancing nutritional content of crops',
      explanation: 'Biofortification involves breeding or developing crops with enhanced nutritional content.',
      difficulty: 'easy'
    },
    {
      id: 'gender_easy_9',
      question: 'What is nutrition education?',
      options: ['Only for doctors', 'Teaching about healthy eating and nutrition', 'Cooking classes only', 'No education needed'],
      correct: 'Teaching about healthy eating and nutrition',
      explanation: 'Nutrition education teaches people about healthy eating, food preparation, and nutritional requirements.',
      difficulty: 'easy'
    },
    {
      id: 'gender_easy_10',
      question: 'What is subsistence farming?',
      options: ['Commercial farming', 'Growing food primarily for family consumption', 'Industrial farming', 'Export farming'],
      correct: 'Growing food primarily for family consumption',
      explanation: 'Subsistence farming involves growing crops primarily to feed the farmer\'s family rather than for sale.',
      difficulty: 'easy'
    },

    // Medium Questions (10)
    {
      id: 'gender_med_1',
      question: 'What are the main barriers women face in agriculture?',
      options: ['No barriers', 'Limited access to land, credit, and technology', 'Only cultural barriers', 'Only educational barriers'],
      correct: 'Limited access to land, credit, and technology',
      explanation: 'Women often face barriers including limited access to land ownership, credit, technology, and agricultural extension services.',
      difficulty: 'medium'
    },
    {
      id: 'gender_med_2',
      question: 'What is the nutrition transition?',
      options: ['No change in diet', 'Shift from traditional to processed foods', 'Only increasing calories', 'Only decreasing calories'],
      correct: 'Shift from traditional to processed foods',
      explanation: 'Nutrition transition refers to the shift from traditional diets to more processed, energy-dense foods.',
      difficulty: 'medium'
    },
    {
      id: 'gender_med_3',
      question: 'What is the double burden of malnutrition?',
      options: ['Only undernutrition', 'Coexistence of undernutrition and overnutrition', 'Only overnutrition', 'No nutritional problems'],
      correct: 'Coexistence of undernutrition and overnutrition',
      explanation: 'The double burden refers to the coexistence of undernutrition and overnutrition within the same population.',
      difficulty: 'medium'
    },
    {
      id: 'gender_med_4',
      question: 'What is gender-responsive agriculture?',
      options: ['Ignoring gender', 'Addressing different needs of men and women', 'Only for women', 'Only for men'],
      correct: 'Addressing different needs of men and women',
      explanation: 'Gender-responsive agriculture recognizes and addresses the different needs, roles, and constraints of men and women.',
      difficulty: 'medium'
    },
    {
      id: 'gender_med_5',
      question: 'What is the importance of dietary diversity?',
      options: ['Not important', 'Ensures adequate intake of various nutrients', 'Only for taste', 'Only for appearance'],
      correct: 'Ensures adequate intake of various nutrients',
      explanation: 'Dietary diversity ensures adequate intake of various nutrients needed for optimal health and development.',
      difficulty: 'medium'
    },
    {
      id: 'gender_med_6',
      question: 'What is women\'s empowerment in agriculture?',
      options: ['Taking over from men', 'Increasing women\'s decision-making power and resources', 'Only education', 'Only income'],
      correct: 'Increasing women\'s decision-making power and resources',
      explanation: 'Women\'s empowerment involves increasing their decision-making power, access to resources, and control over outcomes.',
      difficulty: 'medium'
    },
    {
      id: 'gender_med_7',
      question: 'What is the hidden hunger?',
      options: ['Feeling hungry', 'Micronutrient deficiency despite adequate calories', 'Overeating', 'No food available'],
      correct: 'Micronutrient deficiency despite adequate calories',
      explanation: 'Hidden hunger refers to micronutrient deficiencies that can occur even when caloric intake is adequate.',
      difficulty: 'medium'
    },
    {
      id: 'gender_med_8',
      question: 'What is nutrition-sensitive agriculture?',
      options: ['Only increasing yields', 'Agriculture that considers nutritional outcomes', 'Only organic farming', 'Only traditional farming'],
      correct: 'Agriculture that considers nutritional outcomes',
      explanation: 'Nutrition-sensitive agriculture aims to improve nutritional outcomes through agricultural interventions.',
      difficulty: 'medium'
    },
    {
      id: 'gender_med_9',
      question: 'What is the role of home gardens in nutrition?',
      options: ['No nutritional role', 'Providing diverse micronutrient-rich foods', 'Only aesthetic value', 'Only income generation'],
      correct: 'Providing diverse micronutrient-rich foods',
      explanation: 'Home gardens can provide diverse, micronutrient-rich foods to improve household nutrition.',
      difficulty: 'medium'
    },
    {
      id: 'gender_med_10',
      question: 'What is gender budgeting in agriculture?',
      options: ['No specific budgeting', 'Allocating resources considering gender impacts', 'Only for women\'s projects', 'Equal money distribution'],
      correct: 'Allocating resources considering gender impacts',
      explanation: 'Gender budgeting involves analyzing and allocating resources considering their different impacts on men and women.',
      difficulty: 'medium'
    },

    // Hard Questions (10)
    {
      id: 'gender_hard_1',
      question: 'What is intersectionality in gender and agriculture?',
      options: ['Simple gender analysis', 'Multiple overlapping identities affecting experiences', 'Only gender matters', 'No complex analysis needed'],
      correct: 'Multiple overlapping identities affecting experiences',
      explanation: 'Intersectionality considers how gender interacts with other identities like age, class, and ethnicity to shape experiences.',
      difficulty: 'hard'
    },
    {
      id: 'gender_hard_2',
      question: 'What is the Women\'s Empowerment in Agriculture Index (WEAI)?',
      options: ['Simple measurement', 'Comprehensive index measuring women\'s empowerment', 'Only income measurement', 'Only education measurement'],
      correct: 'Comprehensive index measuring women\'s empowerment',
      explanation: 'WEAI is a comprehensive tool that measures women\'s empowerment across multiple dimensions in agriculture.',
      difficulty: 'hard'
    },
    {
      id: 'gender_hard_3',
      question: 'What is nutrition governance?',
      options: ['No governance needed', 'Institutional frameworks for nutrition outcomes', 'Only government control', 'Only individual responsibility'],
      correct: 'Institutional frameworks for nutrition outcomes',
      explanation: 'Nutrition governance refers to institutional frameworks and processes that influence nutrition outcomes.',
      difficulty: 'hard'
    },
    {
      id: 'gender_hard_4',
      question: 'What is the pathways approach in nutrition-sensitive agriculture?',
      options: ['Linear relationship', 'Multiple pathways linking agriculture to nutrition', 'Single pathway only', 'No clear pathways'],
      correct: 'Multiple pathways linking agriculture to nutrition',
      explanation: 'The pathways approach recognizes multiple ways agriculture can influence nutrition outcomes.',
      difficulty: 'hard'
    },
    {
      id: 'gender_hard_5',
      question: 'What is transformative change in gender and agriculture?',
      options: ['Surface-level changes', 'Deep structural changes in power relations', 'No change needed', 'Only technical changes'],
      correct: 'Deep structural changes in power relations',
      explanation: 'Transformative change involves addressing underlying power structures and social norms that create gender inequalities.',
      difficulty: 'hard'
    },
    {
      id: 'gender_hard_6',
      question: 'What is the feminist political ecology approach?',
      options: ['Only environmental focus', 'Analyzing gender-environment-power interactions', 'Only political analysis', 'Only ecological analysis'],
      correct: 'Analyzing gender-environment-power interactions',
      explanation: 'Feminist political ecology examines how gender, environment, and power interact in agricultural systems.',
      difficulty: 'hard'
    },
    {
      id: 'gender_hard_7',
      question: 'What is nutrition mainstreaming?',
      options: ['Separate nutrition programs', 'Integrating nutrition considerations across sectors', 'Only health sector focus', 'No integration needed'],
      correct: 'Integrating nutrition considerations across sectors',
      explanation: 'Nutrition mainstreaming integrates nutrition objectives and considerations across all relevant sectors.',
      difficulty: 'hard'
    },
    {
      id: 'gender_hard_8',
      question: 'What is social protection\'s role in nutrition?',
      options: ['No role', 'Safety nets supporting nutritional outcomes', 'Only income support', 'Only food distribution'],
      correct: 'Safety nets supporting nutritional outcomes',
      explanation: 'Social protection programs can provide safety nets that support improved nutritional outcomes for vulnerable populations.',
      difficulty: 'hard'
    },
    {
      id: 'gender_hard_9',
      question: 'What is the care economy in relation to nutrition?',
      options: ['Formal healthcare only', 'Unpaid care work affecting nutrition outcomes', 'Only paid care work', 'No economic value'],
      correct: 'Unpaid care work affecting nutrition outcomes',
      explanation: 'The care economy includes unpaid care work, primarily by women, that significantly affects nutritional outcomes.',
      difficulty: 'hard'
    },
    {
      id: 'gender_hard_10',
      question: 'What is systems thinking in gender and nutrition?',
      options: ['Simple linear thinking', 'Understanding complex interconnections and feedback loops', 'Only single factors', 'No systematic approach'],
      correct: 'Understanding complex interconnections and feedback loops',
      explanation: 'Systems thinking recognizes complex interconnections and feedback loops between gender, agriculture, and nutrition.',
      difficulty: 'hard'
    }
  ]
};
