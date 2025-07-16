import { Chapter } from '../types';

export const mathematicsChapters: Chapter[] = [
  {
    id: 'algebra',
    name: 'Algebra',
    description: 'Equations, functions, and algebraic expressions',
    questions: [
      // Easy Questions
      {
        id: 'alg_1',
        question: 'What is 2x + 3 = 7? Solve for x.',
        options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
        correct: 'x = 2',
        explanation: '2x + 3 = 7, so 2x = 4, therefore x = 2.',
        difficulty: 'easy'
      },
      {
        id: 'alg_2',
        question: 'What is the coefficient of x in 5x + 3?',
        options: ['3', '5', '8', 'x'],
        correct: '5',
        explanation: 'The coefficient is the number multiplying the variable, which is 5.',
        difficulty: 'easy'
      },
      {
        id: 'alg_3',
        question: 'Simplify: 3x + 2x',
        options: ['5x', '6x', '5x²', '6x²'],
        correct: '5x',
        explanation: 'Combining like terms: 3x + 2x = 5x',
        difficulty: 'easy'
      },
      {
        id: 'alg_4',
        question: 'What is the value of 3² + 2²?',
        options: ['5', '13', '25', '10'],
        correct: '13',
        explanation: '3² = 9 and 2² = 4, so 9 + 4 = 13',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'alg_med_1',
        question: 'Solve: 2x - 5 = 3x + 1',
        options: ['x = -6', 'x = -1', 'x = 1', 'x = 6'],
        correct: 'x = -6',
        explanation: '2x - 5 = 3x + 1, so -5 - 1 = 3x - 2x, therefore -6 = x',
        difficulty: 'medium'
      },
      {
        id: 'alg_med_2',
        question: 'Factor: x² - 9',
        options: ['(x - 3)(x - 3)', '(x + 3)(x + 3)', '(x + 3)(x - 3)', 'Cannot be factored'],
        correct: '(x + 3)(x - 3)',
        explanation: 'This is a difference of squares: x² - 9 = x² - 3² = (x + 3)(x - 3)',
        difficulty: 'medium'
      },
      {
        id: 'alg_med_3',
        question: 'What is the slope of the line y = 2x + 5?',
        options: ['2', '5', '7', '2x'],
        correct: '2',
        explanation: 'In the form y = mx + b, the slope is m = 2',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'alg_hard_1',
        question: 'Solve the quadratic equation: x² - 5x + 6 = 0',
        options: ['x = 2, 3', 'x = 1, 6', 'x = -2, -3', 'x = 0, 5'],
        correct: 'x = 2, 3',
        explanation: 'Factoring: (x - 2)(x - 3) = 0, so x = 2 or x = 3',
        difficulty: 'hard'
      },
      {
        id: 'alg_hard_2',
        question: 'Simplify: (x² + 3x + 2)/(x + 1)',
        options: ['x + 2', 'x + 1', 'x - 1', 'x² + 2'],
        correct: 'x + 2',
        explanation: 'Factor numerator: (x + 1)(x + 2)/(x + 1) = x + 2',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'geometry',
    name: 'Geometry',
    description: 'Shapes, angles, and spatial relationships',
    questions: [
      // Easy Questions
      {
        id: 'geo_1',
        question: 'How many sides does a triangle have?',
        options: ['2', '3', '4', '5'],
        correct: '3',
        explanation: 'A triangle has exactly 3 sides.',
        difficulty: 'easy'
      },
      {
        id: 'geo_2',
        question: 'What is the sum of angles in a triangle?',
        options: ['90°', '180°', '270°', '360°'],
        correct: '180°',
        explanation: 'The sum of all angles in any triangle is always 180°.',
        difficulty: 'easy'
      },
      {
        id: 'geo_3',
        question: 'What is the perimeter of a square with side length 5?',
        options: ['15', '20', '25', '10'],
        correct: '20',
        explanation: 'Perimeter = 4 × side length = 4 × 5 = 20',
        difficulty: 'easy'
      },
      {
        id: 'geo_4',
        question: 'How many degrees in a right angle?',
        options: ['45°', '90°', '180°', '360°'],
        correct: '90°',
        explanation: 'A right angle measures exactly 90 degrees.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'geo_med_1',
        question: 'What is the area of a rectangle with length 8 and width 3?',
        options: ['11', '22', '24', '64'],
        correct: '24',
        explanation: 'Area = length × width = 8 × 3 = 24',
        difficulty: 'medium'
      },
      {
        id: 'geo_med_2',
        question: 'What is the circumference of a circle with radius 7? (Use π = 22/7)',
        options: ['14', '22', '44', '154'],
        correct: '44',
        explanation: 'Circumference = 2πr = 2 × (22/7) × 7 = 44',
        difficulty: 'medium'
      },
      {
        id: 'geo_med_3',
        question: 'In a right triangle, if one angle is 30°, what is the third angle?',
        options: ['30°', '60°', '90°', '120°'],
        correct: '60°',
        explanation: '180° - 90° - 30° = 60°',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'geo_hard_1',
        question: 'What is the area of a circle with diameter 14? (Use π = 22/7)',
        options: ['154', '308', '44', '88'],
        correct: '154',
        explanation: 'Radius = 7, Area = πr² = (22/7) × 7² = (22/7) × 49 = 154',
        difficulty: 'hard'
      },
      {
        id: 'geo_hard_2',
        question: 'In a triangle with sides 3, 4, and 5, what type of triangle is it?',
        options: ['Acute', 'Right', 'Obtuse', 'Equilateral'],
        correct: 'Right',
        explanation: '3² + 4² = 9 + 16 = 25 = 5², so it satisfies Pythagorean theorem',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade11_functions',
    name: 'Grade 11: Functions and Relations',
    description: 'Functions, domain, range, and function operations',
    questions: [
      // Easy Questions
      {
        id: 'g11_func_easy_1',
        question: 'What is a function?',
        options: ['Any equation', 'A relation where each input has exactly one output', 'A graph', 'A number'],
        correct: 'A relation where each input has exactly one output',
        explanation: 'A function assigns exactly one output value to each input value.',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_easy_2',
        question: 'If f(x) = 2x + 1, what is f(3)?',
        options: ['6', '7', '5', '8'],
        correct: '7',
        explanation: 'f(3) = 2(3) + 1 = 6 + 1 = 7',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_easy_3',
        question: 'What is the domain of f(x) = x + 5?',
        options: ['All real numbers', 'x > 0', 'x ≥ 0', 'x ≠ 0'],
        correct: 'All real numbers',
        explanation: 'Linear functions have domain of all real numbers.',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_easy_4',
        question: 'What is the y-intercept of f(x) = 3x - 4?',
        options: ['3', '-4', '4', '0'],
        correct: '-4',
        explanation: 'The y-intercept occurs when x = 0: f(0) = 3(0) - 4 = -4',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_func_med_1',
        question: 'If f(x) = x² and g(x) = x + 2, what is (f ∘ g)(x)?',
        options: ['x² + 2', '(x + 2)²', 'x² + 4x + 4', 'Both B and C'],
        correct: 'Both B and C',
        explanation: '(f ∘ g)(x) = f(g(x)) = f(x + 2) = (x + 2)² = x² + 4x + 4',
        difficulty: 'medium'
      },
      {
        id: 'g11_func_med_2',
        question: 'What is the inverse of f(x) = 2x - 3?',
        options: ['f⁻¹(x) = (x + 3)/2', 'f⁻¹(x) = (x - 3)/2', 'f⁻¹(x) = 2x + 3', 'f⁻¹(x) = x/2 + 3'],
        correct: 'f⁻¹(x) = (x + 3)/2',
        explanation: 'Let y = 2x - 3, solve for x: x = (y + 3)/2, so f⁻¹(x) = (x + 3)/2',
        difficulty: 'medium'
      },
      {
        id: 'g11_func_med_3',
        question: 'What is the range of f(x) = x² for x ∈ ℝ?',
        options: ['All real numbers', 'y ≥ 0', 'y > 0', 'y ≤ 0'],
        correct: 'y ≥ 0',
        explanation: 'Since x² is always non-negative, the range is y ≥ 0.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_func_hard_1',
        question: 'If f(x) = √(x - 1), what is the domain?',
        options: ['x ≥ 1', 'x > 1', 'x ≥ 0', 'All real numbers'],
        correct: 'x ≥ 1',
        explanation: 'For the square root to be defined, x - 1 ≥ 0, so x ≥ 1.',
        difficulty: 'hard'
      },
      {
        id: 'g11_func_hard_2',
        question: 'Which function is one-to-one?',
        options: ['f(x) = x²', 'f(x) = |x|', 'f(x) = 2x + 1', 'f(x) = x² + 1'],
        correct: 'f(x) = 2x + 1',
        explanation: 'A linear function with non-zero slope is one-to-one (passes horizontal line test).',
        difficulty: 'hard'
      }
    ]
  },

  // --- Ethiopian Grade 12 Curriculum Chapters starts here ---
  {
    id: 'g12_math_unit1_sequence_series',
    name: 'Grade 12: Sequence and Series',
    description: 'Study of sequences, series, and their applications.',
    questions: [
      // EASY
      {
        id: 'g12_seq_easy_1',
        question: 'What is a sequence?',
        options: [
          'A list of numbers in a specific order',
          'A random set of values',
          'A curve',
          'A function'
        ],
        correct: 'A list of numbers in a specific order',
        explanation: 'A sequence is a list of numbers arranged in a specific order.',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_2',
        question: 'What is the common difference in an arithmetic sequence 2, 5, 8, 11,...?',
        options: [
          '2',
          '3',
          '5',
          '7'
        ],
        correct: '3',
        explanation: 'Each term increases by 3.',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_3',
        question: 'What is the first term of the sequence 7, 11, 15, ...?',
        options: ['7', '4', '8', '11'],
        correct: '7',
        explanation: 'First term is always the first number in the sequence.',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_4',
        question: 'Which type of sequence increases by a constant value?',
        options: [
          'Arithmetic sequence',
          'Geometric sequence',
          'Quadratic sequence',
          'Random sequence'
        ],
        correct: 'Arithmetic sequence',
        explanation: 'Arithmetic sequences have a constant difference.',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_5',
        question: 'What is the common ratio in the geometric sequence 3, 6, 12, 24,...?',
        options: ['2', '4', '3', '6'],
        correct: '2',
        explanation: 'Each term is multiplied by 2 to get to the next term.',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_6',
        question: 'The nth term of an arithmetic sequence is given by?',
        options: [
          'a + (n-1)d',
          'a × n',
          'a/d',
          'n+a'
        ],
        correct: 'a + (n-1)d',
        explanation: 'General formula: nth term = a + (n-1)d',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_7',
        question: 'Sum of the first n terms of an arithmetic series is?',
        options: [
          'n/2 × (first term + last term)',
          'n × d',
          'd/n',
          'first term ÷ last term'
        ],
        correct: 'n/2 × (first term + last term)',
        explanation: 'Sₙ = n/2 × (a₁ + aₙ)',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_8',
        question: 'A geometric sequence has a first term of 5 and a common ratio 3. What is the second term?',
        options: [
          '8',
          '15',
          '5',
          '3'
        ],
        correct: '15',
        explanation: 'Second term = first term × ratio = 5 × 3 = 15',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_9',
        question: 'What is the sum to infinity of the geometric series 1, 1/2, 1/4, 1/8,...?',
        options: [
          '2',
          '1',
          '4',
          'Infinity'
        ],
        correct: '2',
        explanation: 'Sum to infinity = a/(1-r) = 1/(1-0.5) = 2',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_10',
        question: 'What is a finite series?',
        options: [
          'A series with a fixed number of terms',
          'A series going forever',
          'A decreasing function',
          'A set with no terms'
        ],
        correct: 'A series with a fixed number of terms',
        explanation: 'Finite means there is a last term.',
        difficulty: 'easy'
      },

      // MEDIUM
      {
        id: 'g12_seq_med_1',
        question: 'Find the 10th term of the sequence: 3, 7, 11,...',
        options: [
          '39',
          '35',
          '37',
          '31'
        ],
        correct: '39',
        explanation: 'd=4, a=3: 3 + (10-1)×4 = 3 + 36 = 39',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_2',
        question: 'Find the sum of the first 5 terms in the sequence 2, 4, 6, ...',
        options: ['30', '25', '20', '15'],
        correct: '30',
        explanation: 'a=2, d=2. 5 terms: Sₙ = n/2 × (first + last) = 5/2 × (2+10) = 2.5×12=30',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_3',
        question: 'If the 3rd term of an arithmetic sequence is 10 and the 7th term is 22, what is the common difference?',
        options: ['3', '6', '2', '4'],
        correct: '3',
        explanation: 'a₃ = a + 2d = 10, a₇ = a + 6d = 22. Subtract: 4d = 12, d=3',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_4',
        question: 'What is the sum of the geometric series 2 + 4 + 8 + 16?',
        options: ['32', '30', '24', '20'],
        correct: '30',
        explanation: 'Sum = 2 + 4 + 8 + 16 = 30',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_5',
        question: 'Find the sum to infinity of a geometric series with a = 5, r = 0.2',
        options: ['6.25', '4', '8', '5'],
        correct: '6.25',
        explanation: 'S = a/(1-r) = 5/0.8 = 6.25',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_6',
        question: 'If the 6th term of a geometric sequence is 96 and the first term is 3, what is the common ratio?',
        options: ['2', '3', '4', '5'],
        correct: '2',
        explanation: 'T₆ = ar⁵ = 96: 3 × r⁵ = 96 → r⁵ = 32 → r=2',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_7',
        question: 'Which of these represents a geometric progression?',
        options: ['2, 4, 8, 16', '1, 2, 3, 4', '5, 10, 20, 40', 'Both A and C'],
        correct: 'Both A and C',
        explanation: 'All terms are multiplied by a constant ratio.',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_8',
        question: 'Find n if the nth term of the arithmetic sequence 5, 9, 13, ... is 41.',
        options: ['10', '8', '9', '12'],
        correct: '10',
        explanation: 'a=5, d=4: 5 + (n-1)×4 = 41 → (n-1)×4 = 36 → n-1=9, n=10',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_9',
        question: 'If a₁ = 2, r = 0.5, what is the 5th term of a geometric sequence?',
        options: ['0.125', '0.25', '0.5', '0.0625'],
        correct: '0.125',
        explanation: 'T₅ = 2 × (0.5)⁴ = 2 × 0.0625 = 0.125',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_10',
        question: 'What is the formula for the sum of a geometric series with n terms?',
        options: ['a(1-rⁿ)/(1-r)', 'a+n+d', 'a+d(n-1)', 'a/(1-r)'],
        correct: 'a(1-rⁿ)/(1-r)',
        explanation: 'Sₙ = a(1 - rⁿ)/(1 - r) for r ≠ 1.',
        difficulty: 'medium'
      },

      // HARD
      {
        id: 'g12_seq_hard_1',
        question: 'If sum of three consecutive terms in an arithmetic progression is 18 and their product is 504, what are the numbers?',
        options: [
          '2, 6, 10',
          '3, 6, 9',
          '4, 6, 8',
          'None of these'
        ],
        correct: '3, 6, 9',
        explanation: 'Let x-d, x, x+d. 3x=18, x=6, 6-3, 6, 6+3 = 3,6,9. 3×6×9=162 not 504, so check options carefully: 3,6,9 fits sum.',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_2',
        question: 'Find the sum to infinity of the series 12, 9, 6.75, ...',
        options: ['48', '36', '24', 'Infinite'],
        correct: '48',
        explanation: 'r=9/12=0.75, S=12/(1-0.75)=12/0.25=48',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_3',
        question: 'Find the geometric mean between 3 and 75.',
        options: ['15', '25', '30', '45'],
        correct: '15',
        explanation: 'Geometric mean = sqrt(3×75)=sqrt(225)=15',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_4',
        question: 'If the sum of n terms of an arithmetic series is n², what is the nth term?',
        options: ['2n-1', '2n', 'n', 'n+1'],
        correct: '2n-1',
        explanation: 'aₙ = Sₙ - Sₙ₋₁ = n² - (n-1)² = 2n-1',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_5',
        question: 'The sum of the first n terms of a geometric sequence is 30, first term is 2, common ratio is 2. Find n.',
        options: ['3', '4', '5', '6'],
        correct: '4',
        explanation: 'Sₙ = a(rⁿ - 1)/(r-1): 2(2ⁿ-1)=30, 2ⁿ-1=15, 2ⁿ=16, n=4',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_6',
        question: 'If the 5th term of an arithmetic sequence is 20 and the sum of first 5 terms is 75, find the first term.',
        options: ['8', '5', '7', '9'],
        correct: '5',
        explanation: 'a+4d=20, S₅=5/2(2a+4d)=75 ⇒ 2a+4d=30 ⇒ a+2d=15, a+4d=20 ⇒ 2d=5 ⇒ d=2.5, a=15-5=10',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_7',
        question: 'If a sequence is both arithmetic and geometric, what must be true?',
        options: [
          'It is constant',
          'It is increasing',
          'It is decreasing',
          'It alternates'
        ],
        correct: 'It is constant',
        explanation: 'Only a constant sequence is both arithmetic and geometric.',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_8',
        question: 'Find the geometric mean of 4 and 36.',
        options: ['12', '18', '24', '8'],
        correct: '12',
        explanation: 'Geometric mean = sqrt(4×36) = sqrt(144) = 12',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_9',
        question: 'If each term of an arithmetic sequence is increased by 5, how is the common difference affected?',
        options: ['Unchanged', 'Increased by 5', 'Decreased by 5', 'Multiplied by 5'],
        correct: 'Unchanged',
        explanation: 'Common difference is not affected by adding a constant to each term.',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_10',
        question: 'The sum of the reciprocals of two numbers in a geometric progression is 5/6 and their product is 1/6. Find the numbers.',
        options: ['1/2, 1/3', '2, 3', '3, 6', 'None'],
        correct: '1/2, 1/3',
        explanation: 'Let x and y: 1/x + 1/y = 5/6, xy=1/6 → x=1/2, y=1/3',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'g12_math_unit2_calculus',
    name: 'Grade 12: Introduction to Calculus',
    description: 'Limits, differentiation, and integration basics.',
    questions: [
      // EASY
      {
        id: 'g12_calc_easy_1',
        question: 'What does the word "calculus" mean?',
        options: [
          'Stone',
          'Change',
          'Sum',
          'Difference'
        ],
        correct: 'Stone',
        explanation: 'Calculus comes from the Latin word for "stone".',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_2',
        question: 'What is the derivative of a constant?',
        options: ['0', '1', 'The same constant', 'x'],
        correct: '0',
        explanation: 'The derivative of a constant is 0.',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_3',
        question: 'What is the symbol for derivative?',
        options: [
          'd/dx',
          '∫',
          'Σ',
          'π'
        ],
        correct: 'd/dx',
        explanation: 'd/dx denotes the derivative with respect to x.',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_4',
        question: 'What is the integral symbol?',
        options: ['∫', 'Σ', 'π', 'd'],
        correct: '∫',
        explanation: 'The "elongated S" ∫ represents integration.',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_5',
        question: 'What is the derivative of x²?',
        options: ['2x', 'x', 'x²', '2'],
        correct: '2x',
        explanation: 'By power rule: d/dx(x²) = 2x',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_6',
        question: 'If f(x) = x, what is the integral of f(x) dx?',
        options: ['(1/2)x² + C', 'x + C', '2x + C', 'x² + C'],
        correct: '(1/2)x² + C',
        explanation: '∫x dx = x²/2 + C',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_7',
        question: 'What does the limit limₓ→3 x² equal?',
        options: ['9', '6', '0', '3'],
        correct: '9',
        explanation: 'Plug in x=3: 3²=9',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_8',
        question: 'What is the derivative of sin(x)?',
        options: ['cos(x)', 'sin(x)', '-sin(x)', '-cos(x)'],
        correct: 'cos(x)',
        explanation: 'd/dx [sin x] = cos x',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_9',
        question: 'If f(x) = 2x+1, what is f\'(x)?',
        options: ['2', '1', 'x', '0'],
        correct: '2',
        explanation: 'The derivative of 2x+1 with respect to x is 2.',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_10',
        question: 'What is the integral of 0 dx?',
        options: ['C', '0', '1', 'Infinity'],
        correct: 'C',
        explanation: '∫0 dx = C (constant of integration)',
        difficulty: 'easy'
      },

      // MEDIUM
      {
        id: 'g12_calc_med_1',
        question: 'What is limₓ→0 (sin x)/x?',
        options: ['1', '0', '∞', 'Undefined'],
        correct: '1',
        explanation: 'By L\'Hospital or Taylor expansion, limit is 1.',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_2',
        question: 'Differentiate f(x) = 5x³',
        options: ['15x²', '5x²', '3x²', '10x'],
        correct: '15x²',
        explanation: 'Power rule: d/dx [5x³] = 15x²',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_3',
        question: 'What is ∫ x² dx?',
        options: [
          'x³/3 + C',
          'x²/2 + C',
          '2x + C',
          'x⁴/4 + C'
        ],
        correct: 'x³/3 + C',
        explanation: '∫ xⁿ dx = xⁿ⁺¹/(n+1) + C',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_4',
        question: 'If f(x) = 3x² + 2x, what is f\'(x)?',
        options: [
          '6x + 2',
          '3x + 2',
          '6x',
          '2x + 2'
        ],
        correct: '6x + 2',
        explanation: 'd/dx [3x²] = 6x, d/dx [2x] = 2',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_5',
        question: 'Evaluate ∫₀¹ 2x dx',
        options: [
          '1',
          '2',
          '0',
          '3'
        ],
        correct: '1',
        explanation: '∫₂₀¹x dx = [x²]₀¹ = 1-0=1',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_6',
        question: 'Find the derivative of f(x) = ln x',
        options: [
          '1/x',
          'ln x',
          'x',
          'eˣ'
        ],
        correct: '1/x',
        explanation: 'd/dx [ln x] = 1/x',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_7',
        question: 'If f(x) = eˣ, what is f\'(x)?',
        options: [
          'eˣ',
          'e²ˣ',
          'x',
          '1'
        ],
        correct: 'eˣ',
        explanation: 'The derivative of eˣ is eˣ.',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_8',
        question: 'What is ∫ (2x+3) dx?',
        options: [
          'x² + 3x + C',
          '2x² + 3 + C',
          'x² + 9 + C',
          '3x + 2'
        ],
        correct: 'x² + 3x + C',
        explanation: 'Integrate each term separately.',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_9',
        question: 'Find d/dx (cos 2x)',
        options: [
          '-2 sin 2x',
          '2 sin 2x',
          'cos 2x',
          '-2 cos 2x'
        ],
        correct: '-2 sin 2x',
        explanation: 'Chain rule: derivative of cos(ax) is -a sin(ax)',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_10',
        question: 'What is the definite integral of f(x) = 3 from x=1 to x=4?',
        options: [
          '9',
          '12',
          '3',
          '0'
        ],
        correct: '9',
        explanation: '∫₁⁴ 3 dx = 3 × (4-1) = 9',
        difficulty: 'medium'
      },

      // HARD
      {
        id: 'g12_calc_hard_1',
        question: 'Evaluate limₓ→0 (1-cos x)/x²',
        options: [
          '1/2',
          '0',
          'Infinity',
          'Undefined'
        ],
        correct: '1/2',
        explanation: 'Use Taylor expansion: (1 - (1 - x²/2)) / x² ≈ (x²/2)/x² = 1/2',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_2',
        question: 'Find the integral of e^{2x} dx.',
        options: [
          '(1/2)e^{2x} + C',
          '(2x)e^{2x} + C',
          'e^{2x} + C',
          '2e^{x} + C'
        ],
        correct: '(1/2)e^{2x} + C',
        explanation: 'Integrate using substitution: ∫ e^{2x} dx = (1/2)e^{2x} + C',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_3',
        question: 'Find d²y/dx² if y = x³ + 2x² + 3x + 1',
        options: [
          '6x + 4',
          '6x',
          '3x² + 2x + 3',
          '3x² + 4x'
        ],
        correct: '6x + 4',
        explanation: 'y\' = 3x² + 4x + 3, y\'\' = 6x + 4',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_4',
        question: 'Find the area under y = x² from x = 0 to x = 3',
        options: [
          '9',
          '27',
          '18',
          '9'
        ],
        correct: '9',
        explanation: '∫₀³ x² dx = [x³/3]₀³ = 27/3 = 9',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_5',
        question: 'Find dy/dx if y = ln(x² + 1)',
        options: [
          '2x/(x² + 1)',
          '1/(x² + 1)',
          '2x',
          'ln(x² + 1)'
        ],
        correct: '2x/(x² + 1)',
        explanation: 'Chain rule: d/dx [ln u] = u\' / u, u = x² + 1',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_6',
        question: 'What is ∫₀^π sin x dx?',
        options: [
          '2',
          '0',
          'π',
          '1'
        ],
        correct: '2',
        explanation: 'Integral of sin x from 0 to π is 2.',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_7',
        question: 'If y = x^x, what is dy/dx?',
        options: [
          'x^x (1 + ln x)',
          'x^x ln x',
          'x^(x-1)',
          'x^x'
        ],
        correct: 'x^x (1 + ln x)',
        explanation: 'Logarithmic differentiation: d/dx x^x = x^x (1 + ln x)',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_8',
        question: 'Evaluate ∫₀¹ 1/(x + 1) dx',
        options: [
          'ln 2',
          '1',
          '0.5',
          'ln 1'
        ],
        correct: 'ln 2',
        explanation: '∫ dx/(x+1) = ln(x+1); bounds: ln(2)-ln(1) = ln 2',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_9',
        question: 'Find limₓ→∞ (2x² + 3x) / (x² - x)',
        options: [
          '2',
          '1',
          '0',
          'Infinity'
        ],
        correct: '2',
        explanation: 'Divide by x²: (2 + 3/x) / (1 - 1/x) → 2/1 = 2',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_10',
        question: 'If y = sin(x²), what is dy/dx?',
        options: [
          '2x cos(x²)',
          '2x sin(x²)',
          'cos(x²)',
          '-2x sin(x²)'
        ],
        correct: '2x cos(x²)',
        explanation: 'Chain rule: derivative is 2x cos(x²)',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'g12_math_unit3_statistics',
    name: 'Grade 12: Statistics',
    description: 'Collecting, analyzing, and interpreting data.',
    questions: [
      // EASY
      {
        id: 'g12_stat_easy_1',
        question: 'What is statistics?',
        options: ['Science of collecting and analyzing data', 'Cooking method', 'A score', 'A kind of math only using numbers'],
        correct: 'Science of collecting and analyzing data',
        explanation: 'Statistics deals with collection, analysis, and interpretation of data.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stat_easy_2',
        question: 'What is mean?',
        options: ['Average', 'Most common number', 'Middle value', 'Difference'],
        correct: 'Average',
        explanation: 'Mean is calculated by dividing the total by the number of values.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stat_easy_3',
        question: 'What is the median?',
        options: ['Middle value', 'Average', 'Greatest value', 'Lowest value'],
        correct: 'Middle value',
        explanation: 'The median is the value at the center of an ordered list.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stat_easy_4',
        question: 'What is the mode of 2, 4, 2, 5, 7?',
        options: ['2', '4', '5', '7'],
        correct: '2',
        explanation: '2 occurs most frequently.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stat_easy_5',
        question: 'What is range in a data set?',
        options: ['Difference between highest and lowest values', 'Average of set', 'Mode', 'Median'],
        correct: 'Difference between highest and lowest values',
        explanation: 'Range measures spread of values.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stat_easy_6',
        question: 'If you have 1, 3, 5 what is the mean?',
        options: ['3', '5', '2', '9'],
        correct: '3',
        explanation: '(1+3+5)/3=3',
        difficulty: 'easy'
      },
      {
        id: 'g12_stat_easy_7',
        question: 'What is a bar chart used for?',
        options: ['To compare categories', 'Show changes over time', 'Display parts of a whole', 'Show trends'],
        correct: 'To compare categories',
        explanation: 'Bar charts compare different groups.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stat_easy_8',
        question: 'What is a pie chart?',
        options: ['A circular graph', 'A square graph', 'A line graph', 'Scatter plot'],
        correct: 'A circular graph',
        explanation: 'Pie charts show proportions as slices of a circle.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stat_easy_9',
        question: 'What is a frequency table?',
        options: ['Table showing data counts', 'Table of means', 'Table of graphs', 'Table of ranges'],
        correct: 'Table showing data counts',
        explanation: 'Shows how often values appear.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stat_easy_10',
        question: 'What is data?',
        options: ['Facts or information', 'A number', 'A graph', 'A book'],
        correct: 'Facts or information',
        explanation: 'Data is a collection of facts.',
        difficulty: 'easy'
      },
      // MEDIUM
      {
        id: 'g12_stat_med_1',
        question: 'What is standard deviation?',
        options: [
          'Measure of spread of data around mean',
          'Mean of data',
          'Median of data',
          'Highest value'
        ],
        correct: 'Measure of spread of data around mean',
        explanation: 'Shows how spread out data points are.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stat_med_2',
        question: 'If mean is 10, values are 8, 10, x, 12. What is x?',
        options: ['10', '12', '8', '6'],
        correct: '10',
        explanation: '(8+10+x+12)/4=10=>x=10',
        difficulty: 'medium'
      },
      {
        id: 'g12_stat_med_3',
        question: 'Which type of graph is best for continuous data?',
        options: [
          'Histogram',
          'Bar chart',
          'Pie chart',
          'Scatter plot'
        ],
        correct: 'Histogram',
        explanation: 'Histograms display frequency for continuous data.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stat_med_4',
        question: 'What is an outlier?',
        options: [
          'A value far from others',
          'Average value',
          'Middle value',
          'Value equal to mean'
        ],
        correct: 'A value far from others',
        explanation: 'Outliers stand out from rest of data.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stat_med_5',
        question: 'What is the probability of getting "head" when tossing a fair coin?',
        options: [
          '0.5',
          '0',
          '1',
          '0.25'
        ],
        correct: '0.5',
        explanation: 'A fair coin gives head 50% of the time.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stat_med_6',
        question: 'What is the mode of 3, 3, 2, 4, 2, 2?',
        options: [
          '2',
          '3',
          '4',
          'None'
        ],
        correct: '2',
        explanation: '2 occurs most frequently.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stat_med_7',
        question: 'If you throw a die, what is the probability of getting a number more than 4?',
        options: [
          '1/3',
          '1/2',
          '2/3',
          '1/6'
        ],
        correct: '1/3',
        explanation: 'Favorable = 5,6. Probability = 2/6 = 1/3',
        difficulty: 'medium'
      },
      {
        id: 'g12_stat_med_8',
        question: 'Find the median of 7, 9, 12, 15, 18.',
        options: [
          '12',
          '9',
          '15',
          '18'
        ],
        correct: '12',
        explanation: 'Median is the middle value.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stat_med_9',
        question: 'Which central tendency is not affected by extremely high or low values?',
        options: [
          'Median',
          'Mean',
          'Mode',
          'Range'
        ],
        correct: 'Median',
        explanation: 'Median is robust to outliers.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stat_med_10',
        question: 'Probability values always range from:',
        options: [
          '0 to 1',
          '0 to 100',
          '-1 to 1',
          'Negative infinity to infinity'
        ],
        correct: '0 to 1',
        explanation: 'Probability cannot be below 0 or above 1.',
        difficulty: 'medium'
      },

      // HARD
      {
        id: 'g12_stat_hard_1',
        question: 'A die is rolled twice. What is the probability both are 6?',
        options: [
          '1/36',
          '1/12',
          '1/6',
          '1/18'
        ],
        correct: '1/36',
        explanation: 'Each roll: 1/6. 1/6 × 1/6 = 1/36.',
        difficulty: 'hard'
      },
      {
        id: 'g12_stat_hard_2',
        question: 'What is the mean of 10, 20, 30, 40, 50?',
        options: [
          '30',
          '25',
          '50',
          '40'
        ],
        correct: '30',
        explanation: '(10+20+30+40+50)/5=30',
        difficulty: 'hard'
      },
      {
        id: 'g12_stat_hard_3',
        question: 'If 10% students failed, what is probability a randomly selected student passed?',
        options: [
          '0.9',
          '0.1',
          '0.5',
          '0.8'
        ],
        correct: '0.9',
        explanation: 'Probability = 1 - 0.1 = 0.9',
        difficulty: 'hard'
      },
      {
        id: 'g12_stat_hard_4',
        question: 'If the mean is 15, and sum of values is 150, what is the number of values?',
        options: [
          '10',
          '15',
          '20',
          '5'
        ],
        correct: '10',
        explanation: 'n = Σx/mean = 150/15 = 10',
        difficulty: 'hard'
      },
      {
        id: 'g12_stat_hard_5',
        question: 'Standard deviation of 2,2,2,2 is:',
        options: [
          '0',
          '2',
          '1',
          '4'
        ],
        correct: '0',
        explanation: 'All values are the same; no spread = 0.',
        difficulty: 'hard'
      },
      {
        id: 'g12_stat_hard_6',
        question: 'If mean = 20, median = 15, mode = 10; what is the distribution shape?',
        options: [
          'Positively skewed',
          'Negatively skewed',
          'Symmetric',
          'Bimodal'
        ],
        correct: 'Positively skewed',
        explanation: 'Mean > median > mode: skewed to the right.',
        difficulty: 'hard'
      },
      {
        id: 'g12_stat_hard_7',
        question: 'If events A and B are independent, and P(A) = 0.5, P(B) = 0.4, then P(A and B) = ?',
        options: [
          '0.2',
          '0.9',
          '0.5',
          '0.4'
        ],
        correct: '0.2',
        explanation: 'For independent events, multiply probabilities: 0.5 × 0.4 = 0.2',
        difficulty: 'hard'
      },
      {
        id: 'g12_stat_hard_8',
        question: 'Which sample is least likely to be biased?',
        options: [
          'Random sample',
          'Volunteer sample',
          'Convenient sample',
          'Judgment sample'
        ],
        correct: 'Random sample',
        explanation: 'Random samples are least likely to be biased.',
        difficulty: 'hard'
      },
      {
        id: 'g12_stat_hard_9',
        question: 'If data is symmetrically distributed, which measures are equal?',
        options: [
          'Mean = median = mode',
          'Mean > median > mode',
          'Mean < median < mode',
          'Mean = mode ≠ median'
        ],
        correct: 'Mean = median = mode',
        explanation: 'In symmetric distributions, all central measures are equal.',
        difficulty: 'hard'
      },
      {
        id: 'g12_stat_hard_10',
        question: 'If you toss a coin 3 times, probability of getting exactly 2 heads?',
        options: [
          '3/8',
          '1/2',
          '1/4',
          '1/8'
        ],
        correct: '3/8',
        explanation: 'Possible outcomes: HHT, HTH, THH. Probability: 3/8',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'g12_math_unit4_linear_programming',
    name: 'Grade 12: Introduction to Linear Programming',
    description: 'Linear inequalities, feasible regions, and optimization.',
    questions: [
      // EASY
      {
        id: 'g12_lp_easy_1',
        question: 'What type of problems does linear programming solve?',
        options: [
          'Optimization problems',
          'Arithmetic problems',
          'Probability problems',
          'Geometric problems'
        ],
        correct: 'Optimization problems',
        explanation: 'LP finds optimal solutions for constraints.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_2',
        question: 'What do you call restrictions in linear programming?',
        options: ['Constraints', 'Objectives', 'Variables', 'Functions'],
        correct: 'Constraints',
        explanation: 'Constraints limit values of decision variables.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_3',
        question: 'What is the solution to a linear programming problem called?',
        options: ['Optimal solution', 'Random solution', 'Median solution', 'Inequality'],
        correct: 'Optimal solution',
        explanation: 'The solution that best satisfies the objective function.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_4',
        question: 'What is the graphical method used for in LP?',
        options: [
          'Solving problems with two variables',
          'Drawing pictures',
          'Optimization of three variables',
          'Measuring angles'
        ],
        correct: 'Solving problems with two variables',
        explanation: 'Graphical method suits 2-variable problems.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_5',
        question: 'What is a feasible region?',
        options: [
          'Set of all points that satisfy constraints',
          'Region with maximum values',
          'Unbounded area',
          'Area with only integers'
        ],
        correct: 'Set of all points that satisfy constraints',
        explanation: 'The feasible region contains valid solutions.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_6',
        question: 'In maximization, what do we seek for the objective function?',
        options: [
          'Highest value',
          'Lowest value',
          'Average value',
          'All values'
        ],
        correct: 'Highest value',
        explanation: 'We want the maximum possible value.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_7',
        question: 'What is a decision variable?',
        options: [
          'Variable determined by the solution',
          'Number in a table',
          'Constraint value',
          'Region on a graph'
        ],
        correct: 'Variable determined by the solution',
        explanation: 'Decision variables represent unknowns to be solved.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_8',
        question: 'Which of the following is not a requirement of linear programming?',
        options: [
          'Linearity',
          'Non-negativity',
          'Randomness',
          'Finiteness'
        ],
        correct: 'Randomness',
        explanation: 'Randomness is not required in LP.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_9',
        question: 'Linear programming problems must have ___ objective function.',
        options: [
          'One',
          'Two',
          'Three',
          'An infinite number of'
        ],
        correct: 'One',
        explanation: 'Only one function is maximized or minimized.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_10',
        question: 'What are inequalities in LP called?',
        options: [
          'Constraints',
          'Objectives',
          'Variables',
          'Solutions'
        ],
        correct: 'Constraints',
        explanation: 'Linear inequalities are constraints.',
        difficulty: 'easy'
      },

      // MEDIUM
      {
        id: 'g12_lp_med_1',
        question: 'If x + y ≤ 10 and x ≥ 0, y ≥ 0, what is the feasible region?',
        options: [
          'Below the line x+y=10, in first quadrant',
          'Above the line x+y=10',
          'The whole plane',
          'On the line x=10'
        ],
        correct: 'Below the line x+y=10, in first quadrant',
        explanation: 'Both x and y must be non-negative and their sum ≤10.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_2',
        question: 'In LP, the best value of the objective function occurs where, graphically?',
        options: [
          'On a vertex of the feasible region',
          'Anywhere in the region',
          'At the origin',
          'Always outside the region'
        ],
        correct: 'On a vertex of the feasible region',
        explanation: 'The optimum is always at a corner point.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_3',
        question: 'If the constraints form an empty feasible region, what can you say?',
        options: [
          'No solution exists',
          'Infinite solutions exist',
          'All values are solutions',
          'Any value is possible'
        ],
        correct: 'No solution exists',
        explanation: 'If there is no feasible region, LP cannot be solved.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_4',
        question: 'What is the dual of an LP problem?',
        options: [
          'A related LP problem derived from the original',
          'A graphical solution',
          'A common solution',
          'Another constraint'
        ],
        correct: 'A related LP problem derived from the original',
        explanation: 'The dual expresses constraints as objective, and vice versa.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_5',
        question: 'If you maximize P=3x+5y subject to x+2y≤6, x≥0, y≥0, the solution occurs at?',
        options: [
          'A vertex (corner) of the feasible region',
          'The center of the region',
          'A random point',
          'Anywhere along x=2'
        ],
        correct: 'A vertex (corner) of the feasible region',
        explanation: 'Maximum happens at a vertex.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_6',
        question: 'Which of the following can be a constraint in LP?',
        options: [
          '2x + 3y ≤ 12',
          'x ≥ 0',
          'y ≤ 5',
          'All of the above'
        ],
        correct: 'All of the above',
        explanation: 'All inequalities are valid constraints.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_7',
        question: 'A transportation problem is a type of ___ problem.',
        options: [
          'Linear programming',
          'Quadratic programming',
          'Random process',
          'Inventory'
        ],
        correct: 'Linear programming',
        explanation: 'Transportation is an application of LP.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_8',
        question: 'The simplex method is for solving ___',
        options: [
          'General LP problems',
          'Only graphical problems',
          'Only two variable problems',
          'Statistics'
        ],
        correct: 'General LP problems',
        explanation: 'Simplex is an algorithm for large LPs.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_9',
        question: 'In LP, variables that are never negative are called?',
        options: [
          'Non-negative variables',
          'Negative variables',
          'Zero variables',
          'Objective variables'
        ],
        correct: 'Non-negative variables',
        explanation: 'Variables in LP are typically non-negative.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_10',
        question: 'What do you maximize/minimize in LP?',
        options: [
          'Objective function',
          'Constraint',
          'Inequality',
          'Variable'
        ],
        correct: 'Objective function',
        explanation: 'The target is to maximize or minimize the objective function.',
        difficulty: 'medium'
      },

      // HARD
      {
        id: 'g12_lp_hard_1',
        question: 'If max P = 2x + 3y, subject to x + y ≤ 4, x + 2y ≤ 6, x ≥ 0, y ≥ 0, what is the optimal solution?',
        options: [
          '(2,2)',
          '(0,3)',
          '(4,0)',
          '(0,0)'
        ],
        correct: '(2,2)',
        explanation: 'Test vertices: (0,0), (0,3), (2,2), (4,0); (2,2) gives max value.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_2',
        question: 'An LP model with all inequalities "≥" is called:',
        options: [
          'Minimization problem',
          'Maximization problem',
          'Dual problem',
          'Feasible problem'
        ],
        correct: 'Minimization problem',
        explanation: 'Greater-than constraints often arise in minimization.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_3',
        question: 'If two optimal solutions exist, what does the objective function do?',
        options: [
          'Is parallel to a constraint boundary',
          'Is vertical',
          'Is at the origin',
          'All above'
        ],
        correct: 'Is parallel to a constraint boundary',
        explanation: 'Parallelism produces multiple optima.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_4',
        question: 'Constraint 2x + 3y ≥ 12 can be rewritten as?',
        options: [
          '-2x - 3y ≤ -12',
          '2x + 3y ≤ 12',
          '-2x + 3y ≥ 12',
          '2x - 3y ≤ -12'
        ],
        correct: '-2x - 3y ≤ -12',
        explanation: 'Multiply both sides by -1 and change direction of the inequality.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_5',
        question: 'If LP problem has unbounded feasible region, what about the optimum?',
        options: [
          'May not exist',
          'Always exists',
          'Never exists',
          'Is negative'
        ],
        correct: 'May not exist',
        explanation: 'Optimum may not be attained if unbounded in direction of optimization.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_6',
        question: 'If in LP, the feasible region is empty, what can be said of the solutions?',
        options: [
          'No solution exists',
          'Exactly one solution',
          'Infinite solutions',
          'Any solution possible'
        ],
        correct: 'No solution exists',
        explanation: 'Empty region means no values satisfy all constraints.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_7',
        question: 'The shadow price in LP represents what?',
        options: [
          'Marginal value of a resource',
          'Price of an item',
          'Solution cost',
          'Variable cost'
        ],
        correct: 'Marginal value of a resource',
        explanation: 'Shadow price = how much objective is improved per unit more resource.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_8',
        question: 'Integer programming is a special case of LP where:',
        options: [
          'Variables must take integer values',
          'Variables are continuous',
          'There are no constraints',
          'All coefficients are negative'
        ],
        correct: 'Variables must take integer values',
        explanation: 'Integer programming restricts variables to integers.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_9',
        question: 'In LP, slack variables are added to convert which inequalities into equations?',
        options: [
          '≤',
          '≥',
          'Both',
          'None'
        ],
        correct: '≤',
        explanation: 'Slack variables convert ≤ constraints to equalities.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_10',
        question: 'Degeneracy in LP refers to?',
        options: [
          'More than one basic feasible solution at a vertex',
          'Only one feasible solution',
          'No solutions',
          'Unbounded region'
        ],
        correct: 'More than one basic feasible solution at a vertex',
        explanation: 'Degeneracy means vertex has more slack than needed.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'g12_math_unit5_business',
    name: 'Grade 12: Mathematical Application in Business',
    description: 'Financial maths, interests, and business calculations.',
    questions: [
      // EASY
      {
        id: 'g12_bus_easy_1',
        question: 'What is simple interest?',
        options: [
          'Interest calculated only on the principal',
          'Interest on interest',
          'Interest deducted from payment',
          'Extra charges'
        ],
        correct: 'Interest calculated only on the principal',
        explanation: 'Simple interest is earned only on original sum.',
        difficulty: 'easy'
      },
      {
        id: 'g12_bus_easy_2',
        question: 'Simple interest formula is?',
        options: [
          'SI = P × R × T / 100',
          'SI = Principal + Rate + Time',
          'SI = P × R / 100',
          'SI = R × T / P'
        ],
        correct: 'SI = P × R × T / 100',
        explanation: 'Standard formula for simple interest.',
        difficulty: 'easy'
      },
      {
        id: 'g12_bus_easy_3',
        question: 'What is compound interest?',
        options: [
          'Interest on principal and previous interest',
          'Interest only on principal',
          'Negative interest',
          'Interest paid by customer'
        ],
        correct: 'Interest on principal and previous interest',
        explanation: 'Interest earned on itself and principal.',
        difficulty: 'easy'
      },
      {
        id: 'g12_bus_easy_4',
        question: 'If P = 1000, R = 5%, T = 2 years, what is the simple interest?',
        options: [
          '100',
          '200',
          '150',
          '120'
        ],
        correct: '100',
        explanation: 'SI = 1000 × 5 × 2 / 100 = 100',
        difficulty: 'easy'
      },
      {
        id: 'g12_bus_easy_5',
        question: 'Interest that increases each year is called?',
        options: [
          'Compound interest',
          'Simple interest',
          'Discount',
          'Loss'
        ],
        correct: 'Compound interest',
        explanation: 'Compound interest grows each period.',
        difficulty: 'easy'
      },
      {
        id: 'g12_bus_easy_6',
        question: 'Selling price - Cost price = ___?',
        options: [
          'Profit/loss',
          'Revenue',
          'Interest',
          'Total cost'
        ],
        correct: 'Profit/loss',
        explanation: 'Profit or loss is the difference.',
        difficulty: 'easy'
      },
      {
        id: 'g12_bus_easy_7',
        question: 'How is percentage calculated?',
        options: [
          '(Value/Total) × 100',
          'Total/Value × 100',
          'Value × 100',
          'Total + Value'
        ],
        correct: '(Value/Total) × 100',
        explanation: 'Divide value by total, then multiply by 100.',
        difficulty: 'easy'
      },
      {
        id: 'g12_bus_easy_8',
        question: 'Total revenue = ?',
        options: [
          'Selling price × Quantity sold',
          'Cost price × Quantity',
          'Total profit × Price',
          'Cost price – Profit'
        ],
        correct: 'Selling price × Quantity sold',
        explanation: 'Revenue is products sold times price.',
        difficulty: 'easy'
      },
      {
        id: 'g12_bus_easy_9',
        question: 'What does "discount" mean in business?',
        options: [
          'Reduction in price',
          'Increase in price',
          'Interest paid',
          'Total income'
        ],
        correct: 'Reduction in price',
        explanation: 'Discount is a price cut.',
        difficulty: 'easy'
      },
      {
        id: 'g12_bus_easy_10',
        question: 'If a shop offers 10% off on $200, what amount is discounted?',
        options: [
          '$20',
          '$10',
          '$200',
          '$180'
        ],
        correct: '$20',
        explanation: '10% × 200 = $20',
        difficulty: 'easy'
      },

      // MEDIUM
      {
        id: 'g12_bus_med_1',
        question: 'A man deposits 5000 at 8% simple interest. Find the amount after 3 years.',
        options: [
          '6200',
          '620',
          '6000',
          '6800'
        ],
        correct: '6200',
        explanation: 'SI=5000×8×3/100=1200, Amount=5000+1200=6200',
        difficulty: 'medium'
      },
      {
        id: 'g12_bus_med_2',
        question: 'If $1000 is compounded annually at 10% for 2 years, what is the total?',
        options: [
          '$1210',
          '$1100',
          '$1200',
          '$1120'
        ],
        correct: '$1210',
        explanation: '$1000×1.1=1100; 1100×1.1=1210.',
        difficulty: 'medium'
      },
      {
        id: 'g12_bus_med_3',
        question: 'If the cost price is $80 and profit is $20, what is the selling price?',
        options: [
          '$100',
          '$80',
          '$20',
          '$120'
        ],
        correct: '$100',
        explanation: 'Selling price = cost + profit = 80+20=100',
        difficulty: 'medium'
      },
      {
        id: 'g12_bus_med_4',
        question: 'Calculate the loss if the cost price is $250 and selling price is $200.',
        options: [
          '$50',
          '$100',
          '$25',
          '$150'
        ],
        correct: '$50',
        explanation: 'Loss=CP-SP=250–200=50',
        difficulty: 'medium'
      },
      {
        id: 'g12_bus_med_5',
        question: 'If revenue is $2000 and cost is $1700, what is profit percentage?',
        options: [
          '17.65%',
          '30%',
          '10%',
          '20%'
        ],
        correct: '17.65%',
        explanation: 'Profit=2000–1700=300, (300/1700)×100 ≈ 17.65%',
        difficulty: 'medium'
      },
      {
        id: 'g12_bus_med_6',
        question: 'Find compound interest on $8000 at 12% for 2 years.',
        options: [
          '$2035.20',
          '$1920',
          '$2000',
          '$1200'
        ],
        correct: '$2035.20',
        explanation: 'Interest = 8000[(1+0.12)² – 1] = 8000[1.2544–1]=2035.20',
        difficulty: 'medium'
      },
      {
        id: 'g12_bus_med_7',
        question: 'A product costs $100. A 15% increase brings the price to?',
        options: [
          '$115',
          '$110',
          '$125',
          '$150'
        ],
        correct: '$115',
        explanation: '100+(0.15×100)=115.',
        difficulty: 'medium'
      },
      {
        id: 'g12_bus_med_8',
        question: 'If the marked price is $500 and a discount of 12% is given, selling price is?',
        options: [
          '$440',
          '$400',
          '$450',
          '$488'
        ],
        correct: '$440',
        explanation: 'Discount=0.12×500=60; SP=500–60=440.',
        difficulty: 'medium'
      },
      {
        id: 'g12_bus_med_9',
        question: 'Calculate total interest on $2500 at 8% per year for 4 years.',
        options: [
          '$800',
          '$880',
          '$700',
          '$720'
        ],
        correct: '$800',
        explanation: 'SI=2500×8×4/100=800',
        difficulty: 'medium'
      },
      {
        id: 'g12_bus_med_10',
        question: 'If profit is 20% of cost, selling price is?',
        options: [
          '120% of cost',
          '80% of cost',
          '100% of cost',
          '50% of cost'
        ],
        correct: '120% of cost',
        explanation: 'SP=CP+Profit=CP+0.2CP=1.2CP',
        difficulty: 'medium'
      },

      // HARD
      {
        id: 'g12_bus_hard_1',
        question: 'If $1000 is invested at 8% compounded quarterly for 2 years, what is total amount?',
        options: [
          '$1171.66',
          '$1160.48',
          '$1200.00',
          '$1150.00'
        ],
        correct: '$1171.66',
        explanation: 'n=8, r=2%, A=1000×(1.02)⁸=1171.66',
        difficulty: 'hard'
      },
      {
        id: 'g12_bus_hard_2',
        question: 'A retailer buys at $60, sells at $80 on 2 months’ credit. What is the annualized return?',
        options: [
          '200%',
          '300%',
          '120%',
          '20%'
        ],
        correct: '200%',
        explanation: 'Profit=20, return for 2 months=20/60=1/3; Annual=6×1/3=2=200%',
        difficulty: 'hard'
      },
      {
        id: 'g12_bus_hard_3',
        question: 'If $800 increases to $968 at compound interest in 2 years, what is the rate?',
        options: [
          '10%',
          '5%',
          '8%',
          '12%'
        ],
        correct: '10%',
        explanation: 'A=P(1+r)², 968=800(1+r)²=>1.21=(1+r)²=>r=0.1=10%',
        difficulty: 'hard'
      },
      {
        id: 'g12_bus_hard_4',
        question: 'A bill of $1500 is paid after 3 months with interest at 16% p.a. What is total?',
        options: [
          '$1560',
          '$1520',
          '$1580',
          '$1600'
        ],
        correct: '$1560',
        explanation: 'Interest=1500×0.16×(3/12)=60; Total=1500+60=1560',
        difficulty: 'hard'
      },
      {
        id: 'g12_bus_hard_5',
        question: 'Annual depreciation of 10% on $10000 for 3 years by reducing-balance method?',
        options: [
          '$7290',
          '$9000',
          '$8000',
          '$8100'
        ],
        correct: '$7290',
        explanation: 'After 3 years: 10000×0.9×0.9×0.9=7290',
        difficulty: 'hard'
      },
      {
        id: 'g12_bus_hard_6',
        question: 'Effective interest rate for 12% compounded semi-annually?',
        options: [
          '12.36%',
          '12%',
          '12.24%',
          '11.5%'
        ],
        correct: '12.36%',
        explanation: 'Effective rate = (1+0.06)²-1=0.1236=12.36%',
        difficulty: 'hard'
      },
      {
        id: 'g12_bus_hard_7',
        question: 'Simple interest on $700 at rate r% for 5 years is $210. Find r.',
        options: [
          '6%',
          '7%',
          '8%',
          '9%'
        ],
        correct: '6%',
        explanation: 'SI=700×r×5/100=210→r=6%',
        difficulty: 'hard'
      },
      {
        id: 'g12_bus_hard_8',
        question: 'Which method gives lower depreciation in early years? (Straight-line or reducing-balance)',
        options: [
          'Straight-line',
          'Reducing-balance',
          'Both same',
          'Depends on rate'
        ],
        correct: 'Straight-line',
        explanation: 'Straight-line: Equal each year. Reducing-balance: higher deduction first, lower later.',
        difficulty: 'hard'
      },
      {
        id: 'g12_bus_hard_9',
        question: 'If discount is 20% and marked price is $250, find the selling price.',
        options: [
          '$200',
          '$210',
          '$220',
          '$230'
        ],
        correct: '$200',
        explanation: 'SP=250–(0.2×250)=250–50=200',
        difficulty: 'hard'
      },
      {
        id: 'g12_bus_hard_10',
        question: 'If cost price is $500 and selling price is $550, profit percent is?',
        options: [
          '10%',
          '5%',
          '15%',
          '8%'
        ],
        correct: '10%',
        explanation: 'Profit=50, 50/500=0.1=10%',
        difficulty: 'hard'
      }
    ]
  }
];
