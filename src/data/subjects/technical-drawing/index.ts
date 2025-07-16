import { Chapter } from '../../types';

export const technicalDrawingChapters: Chapter[] = [
  {
    id: 'td-11-cad-basics',
    name: 'Grade 11: Computer-Aided Design Basics',
    description: 'Introduction to CAD software and digital design principles',
    questions: [
      // Easy Questions
      {
        id: 'g11_cad_easy_1',
        question: 'What does CAD stand for?',
        options: ['Computer Aided Design', 'Creative Art Design', 'Complex Architecture Drawing', 'Color Application Design'],
        correct: 'Computer Aided Design',
        explanation: 'CAD stands for Computer-Aided Design, using computers to create technical drawings.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_2',
        question: 'What is technical drawing?',
        options: ['Artistic sketching', 'Precise drawings for engineering and design', 'Free-hand drawing', 'Painting technique'],
        correct: 'Precise drawings for engineering and design',
        explanation: 'Technical drawing is precise drawing used to communicate engineering and design information.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_3',
        question: 'What is a scale in technical drawing?',
        options: ['Measuring tool', 'Ratio of drawing size to actual size', 'Type of line', 'Drawing software'],
        correct: 'Ratio of drawing size to actual size',
        explanation: 'Scale represents the ratio between the size of the drawing and the actual size of the object.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_4',
        question: 'What are dimensions in technical drawing?',
        options: ['Colors used', 'Measurements showing size and location', 'Line types', 'Drawing styles'],
        correct: 'Measurements showing size and location',
        explanation: 'Dimensions are measurements that show the size and location of features on a drawing.',
        difficulty: 'easy'
      },
      {
        id: 'g11_cad_easy_5',
        question: 'What is an orthographic projection?',
        options: ['3D perspective', 'Multiple 2D views of an object', 'Isometric view', 'Artistic rendering'],
        correct: 'Multiple 2D views of an object',
        explanation: 'Orthographic projection shows multiple 2D views (front, top, side) of a 3D object.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_cad_med_1',
        question: 'What is the difference between 2D and 3D CAD?',
        options: ['No difference', '2D: flat drawings, 3D: solid models', 'Only complexity differs', 'Only software differs'],
        correct: '2D: flat drawings, 3D: solid models',
        explanation: '2D CAD creates flat drawings; 3D CAD creates solid models with depth and volume.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_2',
        question: 'What is an isometric drawing?',
        options: ['Top view only', '3D-like view showing three faces', 'Side view only', 'Cross-section view'],
        correct: '3D-like view showing three faces',
        explanation: 'Isometric drawing is a 3D-like representation showing three faces of an object at once.',
        difficulty: 'medium'
      },
      {
        id: 'g11_cad_med_3',
        question: 'What are layers in CAD software?',
        options: ['Physical sheets', 'Separate drawing levels for organization', 'Color options', 'Line styles'],
        correct: 'Separate drawing levels for organization',
        explanation: 'Layers are separate drawing levels that help organize different elements of a drawing.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_cad_hard_1',
        question: 'What is parametric modeling?',
        options: ['Free-form modeling', 'Feature-based modeling with constraints', 'Surface modeling only', 'Mesh modeling'],
        correct: 'Feature-based modeling with constraints',
        explanation: 'Parametric modeling creates features with constraints and relationships that can be modified.',
        difficulty: 'hard'
      },
      {
        id: 'g11_cad_hard_2',
        question: 'What is a technical drawing standard?',
        options: ['Personal preference', 'Established rules for drawing conventions', 'Software setting', 'Drawing size'],
        correct: 'Established rules for drawing conventions',
        explanation: 'Technical drawing standards establish consistent rules for symbols, line types, and conventions.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'td-11-geometric-construction',
    name: 'Grade 11: Advanced Geometric Construction',
    description: 'Complex geometric constructions and mathematical relationships',
    questions: [
      // Easy Questions
      {
        id: 'g11_geo_easy_1',
        question: 'What is geometric construction?',
        options: ['Building structures', 'Drawing shapes using compass and straightedge', 'Measuring angles', 'Calculating areas'],
        correct: 'Drawing shapes using compass and straightedge',
        explanation: 'Geometric construction involves drawing precise shapes using basic tools like compass and straightedge.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_2',
        question: 'What is a compass used for?',
        options: ['Finding direction', 'Drawing circles and arcs', 'Measuring length', 'Drawing straight lines'],
        correct: 'Drawing circles and arcs',
        explanation: 'A compass is a tool used to draw circles and arcs in geometric construction.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_3',
        question: 'What is a perpendicular line?',
        options: ['Parallel line', 'Line at 90-degree angle to another', 'Curved line', 'Diagonal line'],
        correct: 'Line at 90-degree angle to another',
        explanation: 'A perpendicular line intersects another line at a 90-degree (right) angle.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_4',
        question: 'What is bisecting a line?',
        options: ['Making it longer', 'Dividing it into two equal parts', 'Making it curved', 'Rotating it'],
        correct: 'Dividing it into two equal parts',
        explanation: 'Bisecting a line means dividing it into two equal parts.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_5',
        question: 'What is an angle?',
        options: ['Straight line', 'Space between two intersecting lines', 'Curved shape', 'Circle segment'],
        correct: 'Space between two intersecting lines',
        explanation: 'An angle is the space between two lines that meet at a point.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_geo_med_1',
        question: 'How do you construct a perpendicular bisector?',
        options: ['Draw any line', 'Use compass to find midpoint and draw perpendicular', 'Measure with ruler only', 'Draw parallel line'],
        correct: 'Use compass to find midpoint and draw perpendicular',
        explanation: 'A perpendicular bisector is constructed using a compass to find the midpoint and create a perpendicular line.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_2',
        question: 'What is an angle bisector?',
        options: ['Line making angle larger', 'Line dividing angle into two equal parts', 'Line parallel to angle', 'Line perpendicular to angle'],
        correct: 'Line dividing angle into two equal parts',
        explanation: 'An angle bisector is a line that divides an angle into two equal parts.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_3',
        question: 'What is a tangent to a circle?',
        options: ['Line through center', 'Line touching circle at one point', 'Line cutting circle', 'Curved line'],
        correct: 'Line touching circle at one point',
        explanation: 'A tangent is a straight line that touches a circle at exactly one point.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_geo_hard_1',
        question: 'How do you construct a regular pentagon?',
        options: ['Draw five random lines', 'Use compass and specific geometric construction', 'Use protractor only', 'Estimate the shape'],
        correct: 'Use compass and specific geometric construction',
        explanation: 'A regular pentagon requires specific geometric construction techniques using compass and straightedge.',
        difficulty: 'hard'
      },
      {
        id: 'g11_geo_hard_2',
        question: 'What is the golden ratio in geometric construction?',
        options: ['Any ratio', 'Ratio of approximately 1.618:1', 'Ratio of 1:1', 'Ratio of 2:1'],
        correct: 'Ratio of approximately 1.618:1',
        explanation: 'The golden ratio is approximately 1.618:1 and appears in many geometric constructions.',
        difficulty: 'hard'
      }
    ]
  }
];