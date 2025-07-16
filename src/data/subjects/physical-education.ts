
import { Chapter } from '../types';

export const physicalEducationChapters: Chapter[] = [
  {
    id: 'fitness_health',
    name: 'Physical Fitness and Health',
    description: 'Components of fitness, exercise principles, and health benefits',
    questions: [
      // Easy Questions (10)
      {
        id: 'fitness_easy_1',
        question: 'What is physical fitness?',
        options: ['Being thin', 'Ability to perform daily activities without fatigue', 'Playing sports only', 'Eating healthy only'],
        correct: 'Ability to perform daily activities without fatigue',
        explanation: 'Physical fitness is the ability to perform daily activities efficiently without undue fatigue.',
        difficulty: 'easy'
      },
      {
        id: 'fitness_easy_2',
        question: 'What are the main components of health-related fitness?',
        options: ['Strength only', 'Cardiovascular endurance, strength, flexibility, body composition', 'Speed only', 'Balance only'],
        correct: 'Cardiovascular endurance, strength, flexibility, body composition',
        explanation: 'Health-related fitness includes cardiovascular endurance, muscular strength, flexibility, and body composition.',
        difficulty: 'easy'
      },
      {
        id: 'fitness_easy_3',
        question: 'What is cardiovascular endurance?',
        options: ['Muscle strength', 'Heart and lungs ability to supply oxygen during exercise', 'Joint flexibility', 'Body weight'],
        correct: 'Heart and lungs ability to supply oxygen during exercise',
        explanation: 'Cardiovascular endurance is the ability of the heart and lungs to supply oxygen to muscles during exercise.',
        difficulty: 'easy'
      },
      {
        id: 'fitness_easy_4',
        question: 'What is muscular strength?',
        options: ['Endurance capacity', 'Maximum force a muscle can produce', 'Joint flexibility', 'Body coordination'],
        correct: 'Maximum force a muscle can produce',
        explanation: 'Muscular strength is the maximum amount of force a muscle or muscle group can produce.',
        difficulty: 'easy'
      },
      {
        id: 'fitness_easy_5',
        question: 'What is flexibility?',
        options: ['Muscle strength', 'Range of motion at joints', 'Running speed', 'Body weight'],
        correct: 'Range of motion at joints',
        explanation: 'Flexibility is the range of motion available at joints and the ability of muscles to stretch.',
        difficulty: 'easy'
      },
      {
        id: 'fitness_easy_6',
        question: 'How often should adults engage in moderate physical activity?',
        options: ['Once a week', 'At least 150 minutes per week', 'Once a month', 'Only on weekends'],
        correct: 'At least 150 minutes per week',
        explanation: 'Adults should engage in at least 150 minutes of moderate physical activity per week for health benefits.',
        difficulty: 'easy'
      },
      {
        id: 'fitness_easy_7',
        question: 'What is a warm-up?',
        options: ['Cool down activity', 'Preparation activity before main exercise', 'Stretching only', 'Rest period'],
        correct: 'Preparation activity before main exercise',
        explanation: 'A warm-up is a preparatory activity that gradually increases heart rate and prepares the body for exercise.',
        difficulty: 'easy'
      },
      {
        id: 'fitness_easy_8',
        question: 'What is a cool-down?',
        options: ['Warm-up activity', 'Gradual reduction of activity after exercise', 'High-intensity exercise', 'Rest period'],
        correct: 'Gradual reduction of activity after exercise',
        explanation: 'Cool-down involves gradually reducing activity intensity to help the body return to resting state.',
        difficulty: 'easy'
      },
      {
        id: 'fitness_easy_9',
        question: 'What is body composition?',
        options: ['Body height', 'Ratio of fat to lean tissue in body', 'Body weight only', 'Muscle size'],
        correct: 'Ratio of fat to lean tissue in body',
        explanation: 'Body composition refers to the ratio of fat mass to lean mass (muscle, bone, organs) in the body.',
        difficulty: 'easy'
      },
      {
        id: 'fitness_easy_10',
        question: 'What is aerobic exercise?',
        options: ['Exercise without oxygen', 'Exercise using oxygen for extended periods', 'Weight lifting only', 'Stretching only'],
        correct: 'Exercise using oxygen for extended periods',
        explanation: 'Aerobic exercise uses oxygen to fuel muscles during sustained, rhythmic activities.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'fitness_med_1',
        question: 'What is the FITT principle?',
        options: ['Fitness test', 'Frequency, Intensity, Time, Type of exercise', 'Flexibility training', 'Food nutrition guide'],
        correct: 'Frequency, Intensity, Time, Type of exercise',
        explanation: 'FITT stands for Frequency, Intensity, Time, and Type - the four components of exercise prescription.',
        difficulty: 'medium'
      },
      {
        id: 'fitness_med_2',
        question: 'What is the difference between aerobic and anaerobic exercise?',
        options: ['No difference', 'Aerobic: with oxygen, Anaerobic: without oxygen', 'Only duration differs', 'Only location differs'],
        correct: 'Aerobic: with oxygen, Anaerobic: without oxygen',
        explanation: 'Aerobic exercise uses oxygen for energy production; anaerobic exercise relies on stored energy without oxygen.',
        difficulty: 'medium'
      },
      {
        id: 'fitness_med_3',
        question: 'What is target heart rate?',
        options: ['Resting heart rate', 'Heart rate range for effective exercise', 'Maximum heart rate', 'Average heart rate'],
        correct: 'Heart rate range for effective exercise',
        explanation: 'Target heart rate is the optimal heart rate range for cardiovascular exercise benefits.',
        difficulty: 'medium'
      },
      {
        id: 'fitness_med_4',
        question: 'What is progressive overload?',
        options: ['Reducing exercise', 'Gradually increasing exercise demands', 'Maintaining same intensity', 'Random changes'],
        correct: 'Gradually increasing exercise demands',
        explanation: 'Progressive overload involves gradually increasing exercise demands to continue improving fitness.',
        difficulty: 'medium'
      },
      {
        id: 'fitness_med_5',
        question: 'What is muscular endurance?',
        options: ['Maximum strength', 'Ability to repeat movements or hold positions', 'Joint flexibility', 'Cardiovascular capacity'],
        correct: 'Ability to repeat movements or hold positions',
        explanation: 'Muscular endurance is the ability of muscles to perform repeated contractions or maintain positions.',
        difficulty: 'medium'
      },
      {
        id: 'fitness_med_6',
        question: 'What is the principle of specificity?',
        options: ['General training', 'Training specific to desired adaptations', 'Random exercise', 'One-size-fits-all'],
        correct: 'Training specific to desired adaptations',
        explanation: 'The specificity principle states that training adaptations are specific to the type of exercise performed.',
        difficulty: 'medium'
      },
      {
        id: 'fitness_med_7',
        question: 'What is BMI?',
        options: ['Blood pressure measure', 'Body Mass Index - weight relative to height', 'Heart rate measure', 'Flexibility measure'],
        correct: 'Body Mass Index - weight relative to height',
        explanation: 'BMI (Body Mass Index) is a measure that relates body weight to height to assess body composition.',
        difficulty: 'medium'
      },
      {
        id: 'fitness_med_8',
        question: 'What is the recommended recovery time between strength training sessions?',
        options: ['No rest needed', '24-48 hours for same muscle groups', '1 week', '1 hour'],
        correct: '24-48 hours for same muscle groups',
        explanation: 'Muscles need 24-48 hours of recovery time between intense strength training sessions.',
        difficulty: 'medium'
      },
      {
        id: 'fitness_med_9',
        question: 'What is cross-training?',
        options: ['Single sport focus', 'Combining different types of exercises', 'Competitive training', 'Rest periods'],
        correct: 'Combining different types of exercises',
        explanation: 'Cross-training involves participating in different types of exercises to improve overall fitness.',
        difficulty: 'medium'
      },
      {
        id: 'fitness_med_10',
        question: 'What is the difference between static and dynamic stretching?',
        options: ['No difference', 'Static: holding positions, Dynamic: moving stretches', 'Only timing differs', 'Only intensity differs'],
        correct: 'Static: holding positions, Dynamic: moving stretches',
        explanation: 'Static stretching involves holding positions; dynamic stretching involves controlled movements through range of motion.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'fitness_hard_1',
        question: 'What is VO2 max?',
        options: ['Resting oxygen consumption', 'Maximum oxygen uptake during exercise', 'Average oxygen use', 'Minimum oxygen needed'],
        correct: 'Maximum oxygen uptake during exercise',
        explanation: 'VO2 max is the maximum amount of oxygen the body can utilize during intense exercise.',
        difficulty: 'hard'
      },
      {
        id: 'fitness_hard_2',
        question: 'What is lactate threshold?',
        options: ['Starting point of exercise', 'Point where lactate accumulates faster than removal', 'End of exercise', 'Rest period'],
        correct: 'Point where lactate accumulates faster than removal',
        explanation: 'Lactate threshold is the exercise intensity at which lactate accumulates faster than it can be removed.',
        difficulty: 'hard'
      },
      {
        id: 'fitness_hard_3',
        question: 'What is periodization in training?',
        options: ['Random training', 'Systematic planning of training cycles', 'Daily training', 'Single-phase training'],
        correct: 'Systematic planning of training cycles',
        explanation: 'Periodization is the systematic planning of athletic training that divides training into specific phases.',
        difficulty: 'hard'
      },
      {
        id: 'fitness_hard_4',
        question: 'What is excess post-exercise oxygen consumption (EPOC)?',
        options: ['Pre-exercise oxygen debt', 'Elevated oxygen consumption after exercise', 'Normal oxygen consumption', 'Reduced oxygen use'],
        correct: 'Elevated oxygen consumption after exercise',
        explanation: 'EPOC is the elevated oxygen consumption that continues after exercise to restore the body to rest.',
        difficulty: 'hard'
      },
      {
        id: 'fitness_hard_5',
        question: 'What is muscle hypertrophy?',
        options: ['Muscle shrinkage', 'Increase in muscle fiber size', 'Muscle flexibility', 'Muscle coordination'],
        correct: 'Increase in muscle fiber size',
        explanation: 'Muscle hypertrophy is the increase in muscle fiber size resulting from resistance training.',
        difficulty: 'hard'
      },
      {
        id: 'fitness_hard_6',
        question: 'What is the difference between type I and type II muscle fibers?',
        options: ['No difference', 'Type I: endurance, Type II: power/strength', 'Only size differs', 'Only location differs'],
        correct: 'Type I: endurance, Type II: power/strength',
        explanation: 'Type I fibers are slow-twitch endurance fibers; Type II are fast-twitch power/strength fibers.',
        difficulty: 'hard'
      },
      {
        id: 'fitness_hard_7',
        question: 'What is metabolic syndrome?',
        options: ['Single condition', 'Cluster of conditions increasing disease risk', 'Exercise benefit', 'Normal metabolism'],
        correct: 'Cluster of conditions increasing disease risk',
        explanation: 'Metabolic syndrome is a cluster of conditions (high blood pressure, blood sugar, etc.) increasing disease risk.',
        difficulty: 'hard'
      },
      {
        id: 'fitness_hard_8',
        question: 'What is the principle of reversibility in fitness?',
        options: ['Fitness always improves', 'Fitness gains are lost without continued training', 'Fitness never changes', 'Permanent fitness gains'],
        correct: 'Fitness gains are lost without continued training',
        explanation: 'The reversibility principle states that fitness improvements are lost when training stops (use it or lose it).',
        difficulty: 'hard'
      },
      {
        id: 'fitness_hard_9',
        question: 'What is proprioception?',
        options: ['Vision', 'Awareness of body position and movement', 'Hearing', 'Touch sensation'],
        correct: 'Awareness of body position and movement',
        explanation: 'Proprioception is the body\'s ability to sense its position and movement in space.',
        difficulty: 'hard'
      },
      {
        id: 'fitness_hard_10',
        question: 'What is high-intensity interval training (HIIT)?',
        options: ['Continuous low intensity', 'Alternating high and low intensity periods', 'Strength training only', 'Flexibility training'],
        correct: 'Alternating high and low intensity periods',
        explanation: 'HIIT alternates between short bursts of high-intensity exercise and recovery periods.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_sports_skills',
    name: 'Grade 11: Sports Skills and Game Strategies',
    description: 'Fundamental skills, rules, and strategies for various sports',
    questions: [
      // Easy Questions (10)
      {
        id: 'g11_sports_easy_1',
        question: 'What are fundamental motor skills?',
        options: ['Complex movements only', 'Basic movement patterns like running, jumping, throwing', 'Sport-specific skills only', 'Advanced techniques only'],
        correct: 'Basic movement patterns like running, jumping, throwing',
        explanation: 'Fundamental motor skills are basic movement patterns that form the foundation for sport-specific skills.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_2',
        question: 'How many players are on a basketball team on the court?',
        options: ['4', '5', '6', '7'],
        correct: '5',
        explanation: 'A basketball team has 5 players on the court at one time.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_3',
        question: 'How many players are on a soccer team on the field?',
        options: ['10', '11', '12', '9'],
        correct: '11',
        explanation: 'A soccer team has 11 players on the field at one time, including the goalkeeper.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_4',
        question: 'What is the objective in basketball?',
        options: ['Kick ball into goal', 'Score by shooting ball through hoop', 'Hit ball over net', 'Run with ball to end zone'],
        correct: 'Score by shooting ball through hoop',
        explanation: 'The objective in basketball is to score points by shooting the ball through the opponent\'s hoop.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_5',
        question: 'What is the objective in soccer?',
        options: ['Score through hoop', 'Score by kicking ball into goal', 'Hit ball over net', 'Carry ball to end zone'],
        correct: 'Score by kicking ball into goal',
        explanation: 'The objective in soccer is to score by getting the ball into the opponent\'s goal.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_6',
        question: 'What is a foul in basketball?',
        options: ['Good play', 'Rule violation involving illegal contact', 'Scoring method', 'Time period'],
        correct: 'Rule violation involving illegal contact',
        explanation: 'A foul in basketball is a rule violation, typically involving illegal physical contact.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_7',
        question: 'What is offside in soccer?',
        options: ['Good position', 'Player in illegal position when ball is played', 'Scoring method', 'Defensive strategy'],
        correct: 'Player in illegal position when ball is played',
        explanation: 'Offside occurs when a player is in an illegal position ahead of the last defender when the ball is played.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_8',
        question: 'What is teamwork in sports?',
        options: ['Individual performance', 'Players working together toward common goal', 'Competition between teammates', 'Solo effort'],
        correct: 'Players working together toward common goal',
        explanation: 'Teamwork involves players cooperating and working together to achieve team objectives.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_9',
        question: 'What is sportsmanship?',
        options: ['Winning at all costs', 'Fair play and respect for opponents', 'Playing roughly', 'Individual glory'],
        correct: 'Fair play and respect for opponents',
        explanation: 'Sportsmanship involves fair play, respect for opponents, and ethical behavior in sports.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sports_easy_10',
        question: 'What is hand-eye coordination?',
        options: ['Foot movement', 'Ability to coordinate hand movements with visual input', 'Running speed', 'Jumping ability'],
        correct: 'Ability to coordinate hand movements with visual input',
        explanation: 'Hand-eye coordination is the ability to coordinate hand movements based on visual information.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g11_sports_med_1',
        question: 'What is a pick and roll in basketball?',
        options: ['Defensive strategy', 'Offensive play where player sets screen then moves to basket', 'Foul type', 'Shooting technique'],
        correct: 'Offensive play where player sets screen then moves to basket',
        explanation: 'Pick and roll is an offensive play where one player sets a screen (pick) then moves (rolls) toward the basket.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_2',
        question: 'What is zone defense?',
        options: ['Man-to-man defense', 'Defending specific areas rather than individual players', 'Offensive strategy', 'Scoring method'],
        correct: 'Defending specific areas rather than individual players',
        explanation: 'Zone defense involves players defending specific court areas rather than individual opponents.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_3',
        question: 'What is a through pass in soccer?',
        options: ['Backward pass', 'Pass played between defenders to teammate', 'Side pass', 'Pass to goalkeeper'],
        correct: 'Pass played between defenders to teammate',
        explanation: 'A through pass is played between or behind defenders to reach a teammate in attacking position.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_4',
        question: 'What is the difference between invasion and net games?',
        options: ['No difference', 'Invasion: enter opponent territory, Net: separated by barrier', 'Only rules differ', 'Only equipment differs'],
        correct: 'Invasion: enter opponent territory, Net: separated by barrier',
        explanation: 'Invasion games involve entering opponent territory; net games have teams separated by a net or barrier.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_5',
        question: 'What is anticipation in sports?',
        options: ['Reaction after event', 'Predicting what will happen next', 'Past events', 'Random guessing'],
        correct: 'Predicting what will happen next',
        explanation: 'Anticipation is the ability to predict what will happen next based on reading the game situation.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_6',
        question: 'What is game sense?',
        options: ['Physical ability only', 'Understanding of tactical and strategic aspects', 'Technical skills only', 'Equipment knowledge'],
        correct: 'Understanding of tactical and strategic aspects',
        explanation: 'Game sense is the understanding of tactical and strategic aspects of sports performance.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_7',
        question: 'What is the difference between open and closed skills?',
        options: ['No difference', 'Open: unpredictable environment, Closed: predictable environment', 'Only difficulty differs', 'Only timing differs'],
        correct: 'Open: unpredictable environment, Closed: predictable environment',
        explanation: 'Open skills are performed in unpredictable environments; closed skills in predictable, stable environments.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_8',
        question: 'What is spatial awareness in sports?',
        options: ['Time awareness', 'Understanding of position relative to space and others', 'Equipment awareness', 'Rule awareness'],
        correct: 'Understanding of position relative to space and others',
        explanation: 'Spatial awareness is understanding one\'s position in space relative to boundaries, teammates, and opponents.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_9',
        question: 'What is transition in team sports?',
        options: ['Starting play', 'Changing from offense to defense or vice versa', 'Ending play', 'Substitution'],
        correct: 'Changing from offense to defense or vice versa',
        explanation: 'Transition refers to the change from offensive to defensive play or vice versa.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sports_med_10',
        question: 'What is pressure in sports performance?',
        options: ['Physical force only', 'Psychological stress affecting performance', 'Equipment pressure', 'Time pressure only'],
        correct: 'Psychological stress affecting performance',
        explanation: 'Pressure in sports refers to psychological stress that can affect performance quality.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g11_sports_hard_1',
        question: 'What is periodization in sports training?',
        options: ['Random training', 'Systematic planning of training phases', 'Daily training only', 'Single-phase training'],
        correct: 'Systematic planning of training phases',
        explanation: 'Periodization is the systematic planning of athletic training divided into specific phases with different objectives.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sports_hard_2',
        question: 'What is deliberate practice?',
        options: ['Casual practice', 'Purposeful practice aimed at improvement', 'Competition only', 'Fun activities only'],
        correct: 'Purposeful practice aimed at improvement',
        explanation: 'Deliberate practice is purposeful, systematic practice specifically designed to improve performance.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sports_hard_3',
        question: 'What is tactical periodization?',
        options: ['Technical training only', 'Training methodology integrating tactical, technical, physical, and mental aspects', 'Physical training only', 'Mental training only'],
        correct: 'Training methodology integrating tactical, technical, physical, and mental aspects',
        explanation: 'Tactical periodization integrates all performance dimensions around the tactical component of the game.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sports_hard_4',
        question: 'What is motor learning?',
        options: ['Learning rules only', 'Process of acquiring and refining motor skills', 'Learning tactics only', 'Learning equipment use'],
        correct: 'Process of acquiring and refining motor skills',
        explanation: 'Motor learning is the process by which individuals acquire and refine motor skills through practice.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sports_hard_5',
        question: 'What is the difference between performance and learning?',
        options: ['No difference', 'Performance: temporary, Learning: permanent changes', 'Only measurement differs', 'Only timing differs'],
        correct: 'Performance: temporary, Learning: permanent changes',
        explanation: 'Performance is temporary execution; learning involves relatively permanent changes in behavior capability.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sports_hard_6',
        question: 'What is contextual interference?',
        options: ['Environmental noise', 'Practice condition affecting learning and retention', 'Equipment problems', 'Weather conditions'],
        correct: 'Practice condition affecting learning and retention',
        explanation: 'Contextual interference refers to practice conditions that can enhance learning and retention of motor skills.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sports_hard_7',
        question: 'What is the ecological approach to skill acquisition?',
        options: ['Environmental focus only', 'Learning through interaction with environment', 'Isolated skill practice', 'Theory-based learning'],
        correct: 'Learning through interaction with environment',
        explanation: 'The ecological approach emphasizes learning motor skills through direct interaction with the environment.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sports_hard_8',
        question: 'What is transfer of learning in sports?',
        options: ['Moving between teams', 'Application of learned skills to new situations', 'Changing sports', 'Equipment transfer'],
        correct: 'Application of learned skills to new situations',
        explanation: 'Transfer of learning refers to applying previously learned skills or knowledge to new situations.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sports_hard_9',
        question: 'What is the constraints-led approach?',
        options: ['Rule-based approach', 'Manipulating constraints to guide learning', 'Instruction-based approach', 'Imitation-based approach'],
        correct: 'Manipulating constraints to guide learning',
        explanation: 'The constraints-led approach manipulates task, individual, and environmental constraints to guide skill learning.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sports_hard_10',
        question: 'What is nonlinear pedagogy?',
        options: ['Linear progression', 'Flexible, adaptive teaching approach', 'Fixed curriculum', 'Single method approach'],
        correct: 'Flexible, adaptive teaching approach',
        explanation: 'Nonlinear pedagogy is a flexible, adaptive teaching approach that responds to individual learning needs.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_sports_psychology',
    name: 'Grade 12: Sports Psychology and Leadership',
    description: 'Mental aspects of performance, motivation, and leadership in sports',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_psych_easy_1',
        question: 'What is sports psychology?',
        options: ['Physical training only', 'Study of mental factors affecting sports performance', 'Equipment study', 'Rule analysis'],
        correct: 'Study of mental factors affecting sports performance',
        explanation: 'Sports psychology studies how mental factors affect sports performance and how participation affects psychological well-being.',
        difficulty: 'easy'
      },
      {
        id: 'g12_psych_easy_2',
        question: 'What is motivation in sports?',
        options: ['Physical ability', 'Drive to pursue goals and persist through challenges', 'Equipment quality', 'Rule knowledge'],
        correct: 'Drive to pursue goals and persist through challenges',
        explanation: 'Motivation is the drive that energizes and directs behavior toward achieving goals.',
        difficulty: 'easy'
      },
      {
        id: 'g12_psych_easy_3',
        question: 'What is confidence in sports?',
        options: ['Physical strength', 'Belief in ability to succeed', 'Equipment reliability', 'Rule certainty'],
        correct: 'Belief in ability to succeed',
        explanation: 'Confidence is the belief or degree of certainty about one\'s ability to succeed.',
        difficulty: 'easy'
      },
      {
        id: 'g12_psych_easy_4',
        question: 'What is anxiety in sports?',
        options: ['Excitement only', 'Worry or apprehension about performance', 'Physical fatigue', 'Equipment problems'],
        correct: 'Worry or apprehension about performance',
        explanation: 'Anxiety is a negative emotional state characterized by worry and apprehension about future events.',
        difficulty: 'easy'
      },
      {
        id: 'g12_psych_easy_5',
        question: 'What is focus in sports?',
        options: ['Physical position', 'Directing attention to relevant cues', 'Equipment adjustment', 'Rule memorization'],
        correct: 'Directing attention to relevant cues',
        explanation: 'Focus involves directing and maintaining attention on relevant performance cues while ignoring distractions.',
        difficulty: 'easy'
      },
      {
        id: 'g12_psych_easy_6',
        question: 'What is goal setting?',
        options: ['Random targets', 'Establishing specific, measurable objectives', 'Equipment choice', 'Rule selection'],
        correct: 'Establishing specific, measurable objectives',
        explanation: 'Goal setting involves establishing specific, measurable objectives to guide and motivate behavior.',
        difficulty: 'easy'
      },
      {
        id: 'g12_psych_easy_7',
        question: 'What is leadership?',
        options: ['Following others', 'Influencing others toward common goals', 'Individual performance', 'Equipment management'],
        correct: 'Influencing others toward common goals',
        explanation: 'Leadership is the process of influencing others to work together toward achieving common goals.',
        difficulty: 'easy'
      },
      {
        id: 'g12_psych_easy_8',
        question: 'What is teamwork?',
        options: ['Individual effort', 'Coordinated effort toward shared objectives', 'Competition within team', 'Personal achievement'],
        correct: 'Coordinated effort toward shared objectives',
        explanation: 'Teamwork involves coordinated effort by team members working together toward shared objectives.',
        difficulty: 'easy'
      },
      {
        id: 'g12_psych_easy_9',
        question: 'What is stress in sports?',
        options: ['Always negative', 'Response to demanding situations', 'Equipment failure', 'Rule confusion'],
        correct: 'Response to demanding situations',
        explanation: 'Stress is the body\'s response to demanding situations that can be either positive or negative.',
        difficulty: 'easy'
      },
      {
        id: 'g12_psych_easy_10',
        question: 'What is mental preparation?',
        options: ['Physical training', 'Psychological readiness for performance', 'Equipment preparation', 'Rule study'],
        correct: 'Psychological readiness for performance',
        explanation: 'Mental preparation involves developing psychological readiness for optimal performance.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_psych_med_1',
        question: 'What is the difference between intrinsic and extrinsic motivation?',
        options: ['No difference', 'Intrinsic: internal satisfaction, Extrinsic: external rewards', 'Only intensity differs', 'Only duration differs'],
        correct: 'Intrinsic: internal satisfaction, Extrinsic: external rewards',
        explanation: 'Intrinsic motivation comes from internal satisfaction; extrinsic motivation from external rewards or consequences.',
        difficulty: 'medium'
      },
      {
        id: 'g12_psych_med_2',
        question: 'What is flow state?',
        options: ['Confused state', 'Optimal experience of complete absorption', 'Tired state', 'Anxious state'],
        correct: 'Optimal experience of complete absorption',
        explanation: 'Flow state is the optimal experience characterized by complete absorption in activity and peak performance.',
        difficulty: 'medium'
      },
      {
        id: 'g12_psych_med_3',
        question: 'What is visualization in sports?',
        options: ['Watching videos', 'Mental rehearsal of performance', 'Physical practice', 'Equipment inspection'],
        correct: 'Mental rehearsal of performance',
        explanation: 'Visualization involves mentally rehearsing performance to improve skill execution and confidence.',
        difficulty: 'medium'
      },
      {
        id: 'g12_psych_med_4',
        question: 'What is self-talk?',
        options: ['Talking to others', 'Internal dialogue affecting performance', 'External communication', 'Silence'],
        correct: 'Internal dialogue affecting performance',
        explanation: 'Self-talk is the internal dialogue that can influence confidence, focus, and performance.',
        difficulty: 'medium'
      },
      {
        id: 'g12_psych_med_5',
        question: 'What is attribution theory?',
        options: ['Physical theory', 'How people explain success and failure', 'Equipment theory', 'Rule theory'],
        correct: 'How people explain success and failure',
        explanation: 'Attribution theory explains how people interpret the causes of their successes and failures.',
        difficulty: 'medium'
      },
      {
        id: 'g12_psych_med_6',
        question: 'What is cohesion in teams?',
        options: ['Individual performance', 'Unity and togetherness of team members', 'Competition within team', 'Separation of members'],
        correct: 'Unity and togetherness of team members',
        explanation: 'Cohesion refers to the unity and togetherness that develops among team members.',
        difficulty: 'medium'
      },
      {
        id: 'g12_psych_med_7',
        question: 'What is emotional regulation?',
        options: ['Eliminating emotions', 'Managing emotions for optimal performance', 'Expressing all emotions', 'Ignoring emotions'],
        correct: 'Managing emotions for optimal performance',
        explanation: 'Emotional regulation involves managing emotions effectively to maintain optimal performance.',
        difficulty: 'medium'
      },
      {
        id: 'g12_psych_med_8',
        question: 'What is the inverted-U hypothesis?',
        options: ['Linear relationship', 'Optimal arousal level for peak performance', 'Always high arousal', 'Always low arousal'],
        correct: 'Optimal arousal level for peak performance',
        explanation: 'The inverted-U hypothesis suggests there\'s an optimal arousal level for peak performance.',
        difficulty: 'medium'
      },
      {
        id: 'g12_psych_med_9',
        question: 'What is social loafing?',
        options: ['Working harder in groups', 'Reduced effort when working in groups', 'Individual performance', 'Leadership behavior'],
        correct: 'Reduced effort when working in groups',
        explanation: 'Social loafing is the tendency for individuals to reduce effort when working in groups.',
        difficulty: 'medium'
      },
      {
        id: 'g12_psych_med_10',
        question: 'What is burnout in sports?',
        options: ['Physical injury only', 'Physical and emotional exhaustion from chronic stress', 'Improved performance', 'Increased motivation'],
        correct: 'Physical and emotional exhaustion from chronic stress',
        explanation: 'Burnout is physical and emotional exhaustion resulting from chronic stress and overtraining.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_psych_hard_1',
        question: 'What is achievement goal theory?',
        options: ['Single goal focus', 'Framework explaining achievement motivation patterns', 'Physical goal theory', 'Equipment goal theory'],
        correct: 'Framework explaining achievement motivation patterns',
        explanation: 'Achievement goal theory explains different patterns of achievement motivation based on how individuals define success.',
        difficulty: 'hard'
      },
      {
        id: 'g12_psych_hard_2',
        question: 'What is self-determination theory?',
        options: ['External control theory', 'Theory of intrinsic motivation and psychological needs', 'Physical ability theory', 'Skill acquisition theory'],
        correct: 'Theory of intrinsic motivation and psychological needs',
        explanation: 'Self-determination theory focuses on intrinsic motivation and three basic psychological needs: autonomy, competence, and relatedness.',
        difficulty: 'hard'
      },
      {
        id: 'g12_psych_hard_3',
        question: 'What is psychological momentum?',
        options: ['Physical momentum', 'Positive psychological state affecting subsequent performance', 'Equipment momentum', 'Rule momentum'],
        correct: 'Positive psychological state affecting subsequent performance',
        explanation: 'Psychological momentum is a positive psychological state that can influence subsequent performance outcomes.',
        difficulty: 'hard'
      },
      {
        id: 'g12_psych_hard_4',
        question: 'What is the catastrophe theory in sports?',
        options: ['Linear performance decline', 'Sudden performance drop under high anxiety', 'Gradual improvement', 'Consistent performance'],
        correct: 'Sudden performance drop under high anxiety',
        explanation: 'Catastrophe theory suggests performance can suddenly collapse under high anxiety and physiological arousal.',
        difficulty: 'hard'
      },
      {
        id: 'g12_psych_hard_5',
        question: 'What is transformational leadership?',
        options: ['Task-focused only', 'Inspiring followers to exceed expectations', 'Controlling leadership', 'Passive leadership'],
        correct: 'Inspiring followers to exceed expectations',
        explanation: 'Transformational leadership inspires and motivates followers to exceed their own expectations and capabilities.',
        difficulty: 'hard'
      },
      {
        id: 'g12_psych_hard_6',
        question: 'What is mindfulness in sports?',
        options: ['Overthinking', 'Present-moment awareness without judgment', 'Past focus', 'Future worry'],
        correct: 'Present-moment awareness without judgment',
        explanation: 'Mindfulness involves maintaining present-moment awareness with an attitude of acceptance and non-judgment.',
        difficulty: 'hard'
      },
      {
        id: 'g12_psych_hard_7',
        question: 'What is cognitive load theory?',
        options: ['Physical load theory', 'Theory about mental processing limitations', 'Equipment load theory', 'Emotional load theory'],
        correct: 'Theory about mental processing limitations',
        explanation: 'Cognitive load theory explains how mental processing limitations affect learning and performance.',
        difficulty: 'hard'
      },
      {
        id: 'g12_psych_hard_8',
        question: 'What is the expertise effect?',
        options: ['Beginner advantage', 'Superior performance and processing in experts', 'Random performance', 'Declining performance'],
        correct: 'Superior performance and processing in experts',
        explanation: 'The expertise effect refers to the superior performance and cognitive processing abilities demonstrated by experts.',
        difficulty: 'hard'
      },
      {
        id: 'g12_psych_hard_9',
        question: 'What is choking under pressure?',
        options: ['Improved performance', 'Performance decrement under pressure', 'Normal performance', 'Random performance'],
        correct: 'Performance decrement under pressure',
        explanation: 'Choking under pressure refers to the performance decrement that occurs despite striving for superior performance.',
        difficulty: 'hard'
      },
      {
        id: 'g12_psych_hard_10',
        question: 'What is psychological skills training?',
        options: ['Physical training only', 'Systematic development of mental skills', 'Equipment training', 'Rule learning'],
        correct: 'Systematic development of mental skills',
        explanation: 'Psychological skills training involves the systematic development of mental skills to enhance performance.',
        difficulty: 'hard'
      }
    ]
  }
];
