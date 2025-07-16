import { Chapter } from '../../types';

export const grade11MathematicsChapters: Chapter[] = [
  {
    id: 'math-11-1',
    name: 'Relations and Functions',
    description: 'Understanding relations and functions, their properties and applications',
    questions: [
      // Easy Questions (10)
      {
        id: 'math-11-1-1',
        question: 'What is the domain of the function f(x) = √(x-2)?',
        options: ['x ≥ 2', 'x ≤ 2', 'x > 2', 'All real numbers'],
        correct: 'x ≥ 2',
        explanation: 'For the square root to be defined, the expression under the root must be non-negative: x-2 ≥ 0, so x ≥ 2.',
        difficulty: 'easy',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-2',
        question: 'Which represents a one-to-one function?',
        options: ['f(x) = x²', 'f(x) = |x|', 'f(x) = 2x + 1', 'f(x) = sin(x)'],
        correct: 'f(x) = 2x + 1',
        explanation: 'A linear function with non-zero slope is always one-to-one (injective).',
        difficulty: 'easy',
        topic: 'Function Types'
      },
      {
        id: 'math-11-1-3',
        question: 'What is the range of f(x) = x² for x ∈ ℝ?',
        options: ['[0, ∞)', '(-∞, ∞)', '[1, ∞)', '(-∞, 0]'],
        correct: '[0, ∞)',
        explanation: 'Since x² is always non-negative for real numbers, the range is [0, ∞).',
        difficulty: 'easy',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-4',
        question: 'If f(x) = 3x + 2, what is f(0)?',
        options: ['0', '2', '3', '5'],
        correct: '2',
        explanation: 'f(0) = 3(0) + 2 = 0 + 2 = 2.',
        difficulty: 'easy',
        topic: 'Function Evaluation'
      },
      {
        id: 'math-11-1-5',
        question: 'What is the inverse of f(x) = x + 5?',
        options: ['f⁻¹(x) = x - 5', 'f⁻¹(x) = x + 5', 'f⁻¹(x) = 5 - x', 'f⁻¹(x) = 1/(x + 5)'],
        correct: 'f⁻¹(x) = x - 5',
        explanation: 'To find the inverse, replace f(x) with y, swap x and y, then solve for y: x = y + 5, so y = x - 5.',
        difficulty: 'easy',
        topic: 'Inverse Functions'
      },
      {
        id: 'math-11-1-6',
        question: 'Which of the following is NOT a function?',
        options: ['x = y²', 'y = x²', 'y = 2x + 1', 'y = |x|'],
        correct: 'x = y²',
        explanation: 'x = y² fails the vertical line test; for one x-value, there can be two y-values.',
        difficulty: 'easy',
        topic: 'Function Definition'
      },
      {
        id: 'math-11-1-7',
        question: 'What is the domain of f(x) = 1/x?',
        options: ['All real numbers', 'x ≠ 0', 'x > 0', 'x ≥ 0'],
        correct: 'x ≠ 0',
        explanation: 'Division by zero is undefined, so x cannot equal 0.',
        difficulty: 'easy',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-8',
        question: 'If f(x) = x², what is f(-3)?',
        options: ['-9', '9', '6', '-6'],
        correct: '9',
        explanation: 'f(-3) = (-3)² = 9.',
        difficulty: 'easy',
        topic: 'Function Evaluation'
      },
      {
        id: 'math-11-1-9',
        question: 'What is the y-intercept of f(x) = 2x - 4?',
        options: ['2', '-4', '4', '0'],
        correct: '-4',
        explanation: 'The y-intercept occurs when x = 0: f(0) = 2(0) - 4 = -4.',
        difficulty: 'easy',
        topic: 'Function Properties'
      },
      {
        id: 'math-11-1-10',
        question: 'Which function is even?',
        options: ['f(x) = x³', 'f(x) = x² + 1', 'f(x) = x + 1', 'f(x) = x²+ x'],
        correct: 'f(x) = x² + 1',
        explanation: 'A function is even if f(-x) = f(x). For f(x) = x² + 1: f(-x) = (-x)² + 1 = x² + 1 = f(x).',
        difficulty: 'easy',
        topic: 'Function Symmetry'
      },
      // Medium Questions (10)
      {
        id: 'math-11-1-11',
        question: 'If f(x) = 2x + 3 and g(x) = x², what is (f∘g)(x)?',
        options: ['2x² + 3', '2x + 3x²', '(2x + 3)²', '2(x + 3)²'],
        correct: '2x² + 3',
        explanation: '(f∘g)(x) = f(g(x)) = f(x²) = 2(x²) + 3 = 2x² + 3',
        difficulty: 'medium',
        topic: 'Function Composition'
      },
      {
        id: 'math-11-1-12',
        question: 'What is the inverse of f(x) = 2x - 6?',
        options: ['f⁻¹(x) = (x + 6)/2', 'f⁻¹(x) = (x - 6)/2', 'f⁻¹(x) = 2x + 6', 'f⁻¹(x) = x/2 + 3'],
        correct: 'f⁻¹(x) = (x + 6)/2',
        explanation: 'Let y = 2x - 6, then x = 2y - 6. Solving for y: x + 6 = 2y, so y = (x + 6)/2.',
        difficulty: 'medium',
        topic: 'Inverse Functions'
      },
      {
        id: 'math-11-1-13',
        question: 'If g(x) = x + 1 and h(x) = x - 1, what is (g∘h)(x)?',
        options: ['x', '2x', 'x²', 'x + 2'],
        correct: 'x',
        explanation: '(g∘h)(x) = g(h(x)) = g(x - 1) = (x - 1) + 1 = x.',
        difficulty: 'medium',
        topic: 'Function Composition'
      },
      {
        id: 'math-11-1-14',
        question: 'What is the domain of f(x) = √(4 - x²)?',
        options: ['[-2, 2]', '(-2, 2)', '[0, 2]', '(-∞, ∞)'],
        correct: '[-2, 2]',
        explanation: 'For the square root to be defined: 4 - x² ≥ 0, so x² ≤ 4, which gives -2 ≤ x ≤ 2.',
        difficulty: 'medium',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-15',
        question: 'If f(x) = x² - 4x + 3, what is the vertex form?',
        options: ['f(x) = (x - 2)² - 1', 'f(x) = (x - 2)² + 1', 'f(x) = (x + 2)² - 1', 'f(x) = (x - 1)² - 2'],
        correct: 'f(x) = (x - 2)² - 1',
        explanation: 'Complete the square: f(x) = x² - 4x + 3 = (x - 2)² - 4 + 3 = (x - 2)² - 1.',
        difficulty: 'medium',
        topic: 'Quadratic Functions'
      },
      {
        id: 'math-11-1-16',
        question: 'What is the range of f(x) = -x² + 4?',
        options: ['(-∞, 4]', '[4, ∞)', '[0, 4]', '(-∞, ∞)'],
        correct: '(-∞, 4]',
        explanation: 'Since the parabola opens downward with vertex at (0, 4), the maximum value is 4.',
        difficulty: 'medium',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-17',
        question: 'If f(x) = 3x + 1 and f(a) = 10, what is a?',
        options: ['3', '4', '9', '11'],
        correct: '3',
        explanation: 'f(a) = 3a + 1 = 10, so 3a = 9, therefore a = 3.',
        difficulty: 'medium',
        topic: 'Function Evaluation'
      },
      {
        id: 'math-11-1-18',
        question: 'What is the domain of f(x) = 1/(x² - 9)?',
        options: ['x ≠ ±3', 'x ≠ 3', 'x ≠ -3', 'All real numbers'],
        correct: 'x ≠ ±3',
        explanation: 'The denominator cannot be zero: x² - 9 ≠ 0, so x ≠ ±3.',
        difficulty: 'medium',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-19',
        question: 'If f(x) = |x - 3|, what is f(1) + f(5)?',
        options: ['2', '4', '6', '8'],
        correct: '4',
        explanation: 'f(1) = |1 - 3| = |-2| = 2, f(5) = |5 - 3| = |2| = 2, so f(1) + f(5) = 4.',
        difficulty: 'medium',
        topic: 'Absolute Value Functions'
      },
      {
        id: 'math-11-1-20',
        question: 'What is the inverse of f(x) = x³?',
        options: ['f⁻¹(x) = ∛x', 'f⁻¹(x) = x^(1/3)', 'f⁻¹(x) = x³', 'Both A and B'],
        correct: 'Both A and B',
        explanation: 'The inverse of f(x) = x³ is f⁻¹(x) = ∛x = x^(1/3).',
        difficulty: 'medium',
        topic: 'Inverse Functions'
      },
      // Hard Questions (10)
      {
        id: 'math-11-1-21',
        question: 'If f(x) = (x² - 1)/(x + 1) for x ≠ -1, what is the simplified form?',
        options: ['x - 1', 'x + 1', 'x² - 1', '(x - 1)/(x + 1)'],
        correct: 'x - 1',
        explanation: 'Factor numerator: (x² - 1) = (x - 1)(x + 1). Cancel (x + 1): f(x) = x - 1 for x ≠ -1.',
        difficulty: 'hard',
        topic: 'Rational Functions'
      },
      {
        id: 'math-11-1-22',
        question: 'If f(g(x)) = 2x + 1 and g(x) = x - 3, what is f(x)?',
        options: ['f(x) = 2x + 7', 'f(x) = 2x - 5', 'f(x) = 2x + 1', 'f(x) = x + 4'],
        correct: 'f(x) = 2x + 7',
        explanation: 'Let u = g(x) = x - 3, so x = u + 3. Then f(u) = 2(u + 3) + 1 = 2u + 7, so f(x) = 2x + 7.',
        difficulty: 'hard',
        topic: 'Function Composition'
      },
      {
        id: 'math-11-1-23',
        question: 'What is the domain of f(x) = ln(x² - 4)?',
        options: ['x ∈ (-∞, -2) ∪ (2, ∞)', 'x ∈ [-2, 2]', 'x ∈ (-2, 2)', 'x ∈ (-∞, ∞)'],
        correct: 'x ∈ (-∞, -2) ∪ (2, ∞)',
        explanation: 'For ln to be defined, x² - 4 > 0, so x² > 4, which gives x < -2 or x > 2.',
        difficulty: 'hard',
        topic: 'Logarithmic Functions'
      },
      {
        id: 'math-11-1-24',
        question: 'If f(x) = (ax + b)/(cx + d) and f(f(x)) = x, what condition must be satisfied?',
        options: ['a + d = 0', 'ad - bc = -1', 'a = d and b = c = 0', 'ad + bc = 0'],
        correct: 'a + d = 0',
        explanation: 'For f(f(x)) = x (involution), the function must satisfy a + d = 0.',
        difficulty: 'hard',
        topic: 'Function Properties'
      },
      {
        id: 'math-11-1-25',
        question: 'What is the range of f(x) = 1/(x² + 1)?',
        options: ['(0, 1]', '[0, 1]', '(0, 1)', '[1, ∞)'],
        correct: '(0, 1]',
        explanation: 'Since x² + 1 ≥ 1 for all real x, we have 1/(x² + 1) ≤ 1. As x → ∞, f(x) → 0, so range is (0, 1].',
        difficulty: 'hard',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-26',
        question: 'If f(x) = x/(x-1) and g(x) = 1/x, what is (f∘g)(x)?',
        options: ['1/(1-x)', 'x/(x-1)', '1/(x-1)', 'x/(1-x)'],
        correct: '1/(1-x)',
        explanation: '(f∘g)(x) = f(g(x)) = f(1/x) = (1/x)/((1/x) - 1) = (1/x)/(1-x)/x = 1/(1-x).',
        difficulty: 'hard',
        topic: 'Function Composition'
      },
      {
        id: 'math-11-1-27',
        question: 'What is the inverse of f(x) = (2x + 1)/(x - 3)?',
        options: ['f⁻¹(x) = (3x + 1)/(x - 2)', 'f⁻¹(x) = (x - 1)/(2x + 3)', 'f⁻¹(x) = (2x - 1)/(x + 3)', 'f⁻¹(x) = (x + 1)/(2x - 3)'],
        correct: 'f⁻¹(x) = (3x + 1)/(x - 2)',
        explanation: 'Let y = (2x + 1)/(x - 3). Solve for x: y(x - 3) = 2x + 1, yx - 3y = 2x + 1, x(y - 2) = 3y + 1, x = (3y + 1)/(y - 2).',
        difficulty: 'hard',
        topic: 'Inverse Functions'
      },
      {
        id: 'math-11-1-28',
        question: 'If f(x) = x² - 2x + 1, for what values of x is f(x) = f(2x)?',
        options: ['x = 0, x = 1', 'x = 0, x = 3', 'x = 1, x = 3', 'x = 0, x = 2'],
        correct: 'x = 0, x = 3',
        explanation: 'f(x) = (x-1)², f(2x) = (2x-1)². Setting equal: (x-1)² = (2x-1)², so x-1 = ±(2x-1). This gives x = 0 or x = 3.',
        difficulty: 'hard',
        topic: 'Function Equations'
      },
      {
        id: 'math-11-1-29',
        question: 'What is the maximum value of f(x) = sin(x) + cos(x)?',
        options: ['1', '√2', '2', '√3'],
        correct: '√2',
        explanation: 'f(x) = sin(x) + cos(x) = √2 sin(x + π/4). Maximum value is √2.',
        difficulty: 'hard',
        topic: 'Trigonometric Functions'
      },
      {
        id: 'math-11-1-30',
        question: 'If f(x) = e^x and g(x) = ln(x), what is (f∘g)(x) for x > 0?',
        options: ['x', 'e^x', 'ln(x)', '1'],
        correct: 'x',
        explanation: '(f∘g)(x) = f(g(x)) = f(ln(x)) = e^(ln(x)) = x for x > 0.',
        difficulty: 'hard',
        topic: 'Exponential and Logarithmic Functions'
      }
    ]
  }
];