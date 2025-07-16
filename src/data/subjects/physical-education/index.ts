import { Chapter } from '../../types';

export const physicalEducationChapters: Chapter[] = [
  {
    id: 'pe-11-sports-skills',
    name: 'Grade 11: Advanced Sports Skills and Training',
    description: 'Sport-specific skills, training principles, and athletic performance',
    questions: [
      // Easy Questions
      {
        id: 'g11_sports_easy_1',
        question: 'What is physical fitness?',
        options: ['Only strength', 'Overall health and ability to perform physical activities', 'Only endurance', 'Only flexibility'],
        correct: 'Overall health and ability to perform physical activities',
        explanation: 'Physical fitness is the ability to carry out daily tasks with vigor and without undue fatigue.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_2',
        question: 'What are the main components of fitness?',
        options: ['Only strength', 'Cardiovascular endurance, strength, flexibility, body composition', 'Only speed', 'Only balance'],
        correct: 'Cardiovascular endurance, strength, flexibility, body composition',
        explanation: 'The main fitness components include cardiovascular endurance, muscular strength, flexibility, and body composition.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_3',
        question: 'What is cardiovascular endurance?',
        options: ['Muscle strength', 'Ability of heart and lungs to supply oxygen during exercise', 'Joint flexibility', 'Body weight'],
        correct: 'Ability of heart and lungs to supply oxygen during exercise',
        explanation: 'Cardiovascular endurance is the ability of the heart and lungs to supply oxygen during sustained exercise.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_4',
        question: 'What is flexibility?',
        options: ['Muscle strength', 'Range of motion around joints', 'Heart rate', 'Body weight'],
        correct: 'Range of motion around joints',
        explanation: 'Flexibility refers to the range of motion available at a joint or group of joints.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_5',
        question: 'What is a warm-up?',
        options: ['Cool down after exercise', 'Gentle exercise before main activity', 'Rest period', 'Competition'],
        correct: 'Gentle exercise before main activity',
        explanation: 'A warm-up consists of gentle exercises performed before the main physical activity.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_sports_med_1',
        question: 'What is the difference between aerobic and anaerobic exercise?',
        options: ['No difference', 'Aerobic: with oxygen, Anaerobic: without oxygen', 'Only intensity differs', 'Only duration differs'],
        correct: 'Aerobic: with oxygen, Anaerobic: without oxygen',
        explanation: 'Aerobic exercise uses oxygen for energy; anaerobic exercise operates without sufficient oxygen.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_2',
        question: 'What is the FITT principle?',
        options: ['Fitness test', 'Frequency, Intensity, Time, Type of exercise', 'Sports equipment', 'Competition rules'],
        correct: 'Frequency, Intensity, Time, Type of exercise',
        explanation: 'FITT stands for Frequency, Intensity, Time, and Type - the key variables in exercise programming.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_3',
        question: 'What is progressive overload?',
        options: ['Staying at same level', 'Gradually increasing exercise demands', 'Decreasing exercise', 'Random changes'],
        correct: 'Gradually increasing exercise demands',
        explanation: 'Progressive overload involves gradually increasing the demands on muscles to improve fitness.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_sports_hard_1',
        question: 'What is periodization in training?',
        options: ['Training once per period', 'Systematic planning of training cycles', 'Random training', 'Rest only'],
        correct: 'Systematic planning of training cycles',
        explanation: 'Periodization is the systematic planning of athletic training cycles to optimize performance.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sports_hard_2',
        question: 'What is VO2 max?',
        options: ['Maximum heart rate', 'Maximum oxygen uptake capacity', 'Maximum weight lifted', 'Maximum speed'],
        correct: 'Maximum oxygen uptake capacity',
        explanation: 'VO2 max is the maximum rate at which an individual can consume oxygen during exercise.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'pe-11-health-wellness',
    name: 'Grade 11: Health and Wellness',
    description: 'Nutrition, injury prevention, and lifestyle choices for health',
    questions: [
      // Easy Questions
      {
        id: 'g11_health_easy_1',
        question: 'What is nutrition?',
        options: ['Only eating', 'Science of food and its effects on health', 'Only vitamins', 'Only exercise'],
        correct: 'Science of food and its effects on health',
        explanation: 'Nutrition is the science that studies how food affects health and bodily functions.',
        difficulty: 'easy'
      },
      {
        id: 'g11_health_easy_2',
        question: 'What are the main macronutrients?',
        options: ['Only proteins', 'Carbohydrates, proteins, fats', 'Only vitamins', 'Only minerals'],
        correct: 'Carbohydrates, proteins, fats',
        explanation: 'The three main macronutrients are carbohydrates, proteins, and fats.',
        difficulty: 'easy'
      },
      {
        id: 'g11_health_easy_3',
        question: 'What is hydration?',
        options: ['Eating food', 'Maintaining adequate water in the body', 'Sleeping well', 'Exercising'],
        correct: 'Maintaining adequate water in the body',
        explanation: 'Hydration refers to maintaining adequate water levels in the body.',
        difficulty: 'easy'
      },
      {
        id: 'g11_health_easy_4',
        question: 'What is an injury?',
        options: ['Normal condition', 'Damage to body tissues', 'Exercise benefit', 'Nutrition plan'],
        correct: 'Damage to body tissues',
        explanation: 'An injury is damage to body tissues caused by accident, overuse, or trauma.',
        difficulty: 'easy'
      },
      {
        id: 'g11_health_easy_5',
        question: 'What is rest?',
        options: ['Only sleeping', 'Period of recovery and restoration', 'Only sitting', 'Only lying down'],
        correct: 'Period of recovery and restoration',
        explanation: 'Rest is a period when the body recovers and restores itself.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_health_med_1',
        question: 'What is the difference between acute and chronic injuries?',
        options: ['No difference', 'Acute: sudden onset, Chronic: develops over time', 'Only severity differs', 'Only location differs'],
        correct: 'Acute: sudden onset, Chronic: develops over time',
        explanation: 'Acute injuries occur suddenly; chronic injuries develop gradually over time.',
        difficulty: 'medium'
      },
      {
        id: 'g11_health_med_2',
        question: 'What is BMI?',
        options: ['Blood pressure measure', 'Body Mass Index - weight relative to height', 'Heart rate measure', 'Flexibility measure'],
        correct: 'Body Mass Index - weight relative to height',
        explanation: 'BMI (Body Mass Index) is a measure of body weight relative to height.',
        difficulty: 'medium'
      },
      {
        id: 'g11_health_med_3',
        question: 'What is the RICE treatment?',
        options: ['Food type', 'Rest, Ice, Compression, Elevation for injuries', 'Exercise routine', 'Nutrition plan'],
        correct: 'Rest, Ice, Compression, Elevation for injuries',
        explanation: 'RICE is a treatment protocol: Rest, Ice, Compression, and Elevation for injuries.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_health_hard_1',
        question: 'What is sports psychology?',
        options: ['Physical training only', 'Study of mental factors affecting athletic performance', 'Nutrition science', 'Equipment study'],
        correct: 'Study of mental factors affecting athletic performance',
        explanation: 'Sports psychology studies how mental factors affect athletic performance and how participation affects psychological development.',
        difficulty: 'hard'
      },
      {
        id: 'g11_health_hard_2',
        question: 'What is exercise physiology?',
        options: ['Sports equipment study', 'Study of body responses to physical activity', 'Game rules study', 'Nutrition only'],
        correct: 'Study of body responses to physical activity',
        explanation: 'Exercise physiology is the study of how the body responds and adapts to physical activity.',
        difficulty: 'hard'
      }
    ]
  }
];