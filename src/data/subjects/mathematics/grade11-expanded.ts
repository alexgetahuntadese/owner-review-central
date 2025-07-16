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
        question: 'If f(x) = 3x + 2, what is f(0)?',
        options: ['0', '2', '3', '5'],
        correct: '2',
        explanation: 'f(0) = 3(0) + 2 = 0 + 2 = 2.',
        difficulty: 'easy',
        topic: 'Function Evaluation'
      },
      {
        id: 'math-11-1-4',
        question: 'What is the inverse of f(x) = x + 5?',
        options: ['f⁻¹(x) = x - 5', 'f⁻¹(x) = x + 5', 'f⁻¹(x) = 5 - x', 'f⁻¹(x) = 1/(x + 5)'],
        correct: 'f⁻¹(x) = x - 5',
        explanation: 'To find the inverse, replace f(x) with y, swap x and y, then solve for y: x = y + 5, so y = x - 5.',
        difficulty: 'easy',
        topic: 'Inverse Functions'
      },
      {
        id: 'math-11-1-5',
        question: 'What is the range of f(x) = x² + 1?',
        options: ['y ≥ 1', 'y ≥ 0', 'All real numbers', 'y ≤ 1'],
        correct: 'y ≥ 1',
        explanation: 'Since x² ≥ 0 for all real x, we have f(x) = x² + 1 ≥ 1.',
        difficulty: 'easy',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-6',
        question: 'Which function is even?',
        options: ['f(x) = x³', 'f(x) = x² + 1', 'f(x) = x + 1', 'f(x) = √x'],
        correct: 'f(x) = x² + 1',
        explanation: 'An even function satisfies f(-x) = f(x). For f(x) = x² + 1: f(-x) = (-x)² + 1 = x² + 1 = f(x).',
        difficulty: 'easy',
        topic: 'Function Types'
      },
      {
        id: 'math-11-1-7',
        question: 'If f(x) = 2x - 3, what is f(5)?',
        options: ['7', '10', '13', '5'],
        correct: '7',
        explanation: 'f(5) = 2(5) - 3 = 10 - 3 = 7.',
        difficulty: 'easy',
        topic: 'Function Evaluation'
      },
      {
        id: 'math-11-1-8',
        question: 'What is the domain of f(x) = 1/(x-3)?',
        options: ['x ≠ 3', 'x ≠ 0', 'x ≥ 3', 'All real numbers'],
        correct: 'x ≠ 3',
        explanation: 'The function is undefined when the denominator equals zero, so x ≠ 3.',
        difficulty: 'easy',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-9',
        question: 'Which function passes the horizontal line test?',
        options: ['f(x) = x²', 'f(x) = |x|', 'f(x) = x³', 'f(x) = sin(x)'],
        correct: 'f(x) = x³',
        explanation: 'The horizontal line test determines if a function is one-to-one. f(x) = x³ is strictly increasing.',
        difficulty: 'easy',
        topic: 'Function Types'
      },
      {
        id: 'math-11-1-10',
        question: 'If f(x) = x - 2, what is the inverse function?',
        options: ['f⁻¹(x) = x + 2', 'f⁻¹(x) = x - 2', 'f⁻¹(x) = 2 - x', 'f⁻¹(x) = 1/(x-2)'],
        correct: 'f⁻¹(x) = x + 2',
        explanation: 'To find inverse: y = x - 2, swap variables: x = y - 2, solve for y: y = x + 2.',
        difficulty: 'easy',
        topic: 'Inverse Functions'
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
        question: 'If f(x) = x² - 4x + 3, what are the zeros of f?',
        options: ['x = 1, 3', 'x = -1, -3', 'x = 2, 4', 'x = 0, 3'],
        correct: 'x = 1, 3',
        explanation: 'Set f(x) = 0: x² - 4x + 3 = 0. Factor: (x-1)(x-3) = 0, so x = 1 or x = 3.',
        difficulty: 'medium',
        topic: 'Function Zeros'
      },
      {
        id: 'math-11-1-13',
        question: 'What is the range of f(x) = -(x-2)² + 5?',
        options: ['y ≤ 5', 'y ≥ 5', 'y ≤ 2', 'All real numbers'],
        correct: 'y ≤ 5',
        explanation: 'This is a downward parabola with vertex at (2,5). Maximum value is 5, so range is y ≤ 5.',
        difficulty: 'medium',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-14',
        question: 'If f(x) = 3x + 1 and g(x) = 2x - 5, what is (g∘f)(x)?',
        options: ['6x - 3', '6x + 2', '6x - 7', '5x - 4'],
        correct: '6x - 3',
        explanation: '(g∘f)(x) = g(f(x)) = g(3x + 1) = 2(3x + 1) - 5 = 6x + 2 - 5 = 6x - 3.',
        difficulty: 'medium',
        topic: 'Function Composition'
      },
      {
        id: 'math-11-1-15',
        question: 'What is the inverse of f(x) = 2x + 7?',
        options: ['f⁻¹(x) = (x-7)/2', 'f⁻¹(x) = (x+7)/2', 'f⁻¹(x) = 2x - 7', 'f⁻¹(x) = (2x-7)/2'],
        correct: 'f⁻¹(x) = (x-7)/2',
        explanation: 'Let y = 2x + 7, swap: x = 2y + 7, solve: 2y = x - 7, so y = (x-7)/2.',
        difficulty: 'medium',
        topic: 'Inverse Functions'
      },
      {
        id: 'math-11-1-16',
        question: 'If f(x) = x² + 2x - 3, what is the vertex of the parabola?',
        options: ['(-1, -4)', '(1, 0)', '(-1, 0)', '(1, -4)'],
        correct: '(-1, -4)',
        explanation: 'For f(x) = ax² + bx + c, vertex x = -b/(2a) = -2/2 = -1. f(-1) = 1 - 2 - 3 = -4.',
        difficulty: 'medium',
        topic: 'Quadratic Functions'
      },
      {
        id: 'math-11-1-17',
        question: 'What is the domain of f(x) = √(9-x²)?',
        options: ['-3 ≤ x ≤ 3', 'x ≥ 3', 'x ≤ -3', 'All real numbers'],
        correct: '-3 ≤ x ≤ 3',
        explanation: 'For square root to be real: 9-x² ≥ 0, so x² ≤ 9, which gives -3 ≤ x ≤ 3.',
        difficulty: 'medium',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-18',
        question: 'If f(x) = |x - 2|, what is f(-1) + f(3)?',
        options: ['4', '3', '5', '2'],
        correct: '4',
        explanation: 'f(-1) = |-1 - 2| = |-3| = 3. f(3) = |3 - 2| = |1| = 1. Sum = 3 + 1 = 4.',
        difficulty: 'medium',
        topic: 'Absolute Value Functions'
      },
      {
        id: 'math-11-1-19',
        question: 'What is the period of f(x) = sin(2x)?',
        options: ['π', '2π', 'π/2', '4π'],
        correct: 'π',
        explanation: 'For f(x) = sin(kx), period = 2π/k = 2π/2 = π.',
        difficulty: 'medium',
        topic: 'Trigonometric Functions'
      },
      {
        id: 'math-11-1-20',
        question: 'If f(x) = e^x and g(x) = ln(x), what is (f∘g)(x) for x > 0?',
        options: ['x', 'e^(ln(x))', 'ln(e^x)', '1'],
        correct: 'x',
        explanation: '(f∘g)(x) = f(g(x)) = f(ln(x)) = e^(ln(x)) = x for x > 0.',
        difficulty: 'medium',
        topic: 'Exponential and Logarithmic Functions'
      },
      
      // Hard Questions (10)
      {
        id: 'math-11-1-21',
        question: 'If f(x) = (2x+1)/(x-3), what is f⁻¹(x)?',
        options: ['(3x+1)/(x-2)', '(x-3)/(2x+1)', '(3x-1)/(x+2)', '(x+3)/(2x-1)'],
        correct: '(3x+1)/(x-2)',
        explanation: 'Let y = (2x+1)/(x-3). Solve for x: y(x-3) = 2x+1, yx-3y = 2x+1, x(y-2) = 3y+1, x = (3y+1)/(y-2).',
        difficulty: 'hard',
        topic: 'Inverse Functions'
      },
      {
        id: 'math-11-1-22',
        question: 'What is the horizontal asymptote of f(x) = (3x²+2x)/(x²-1)?',
        options: ['y = 3', 'y = 0', 'y = 2', 'No horizontal asymptote'],
        correct: 'y = 3',
        explanation: 'For rational functions where numerator and denominator have same degree, horizontal asymptote is ratio of leading coefficients: 3/1 = 3.',
        difficulty: 'hard',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-1-23',
        question: 'If f(x) = x³ - 3x² + 2x, how many real zeros does f have?',
        options: ['3', '2', '1', '0'],
        correct: '3',
        explanation: 'Factor: f(x) = x(x² - 3x + 2) = x(x-1)(x-2). Zeros are x = 0, 1, 2.',
        difficulty: 'hard',
        topic: 'Polynomial Functions'
      },
      {
        id: 'math-11-1-24',
        question: 'What is the maximum value of f(x) = -2x² + 8x - 3?',
        options: ['5', '8', '3', '-3'],
        correct: '5',
        explanation: 'Vertex form: f(x) = -2(x-2)² + 5. Since coefficient of x² is negative, maximum is 5.',
        difficulty: 'hard',
        topic: 'Optimization'
      },
      {
        id: 'math-11-1-25',
        question: 'If f(x) = log₂(x+1), what is the domain of f⁻¹(x)?',
        options: ['All real numbers', 'x > 0', 'x > -1', 'x ≥ 0'],
        correct: 'All real numbers',
        explanation: 'f⁻¹(x) = 2^x - 1. Exponential functions are defined for all real numbers.',
        difficulty: 'hard',
        topic: 'Logarithmic Functions'
      },
      {
        id: 'math-11-1-26',
        question: 'For what values of k does f(x) = kx² + 4x + 1 have exactly one zero?',
        options: ['k = 4', 'k = 1', 'k = 0', 'k = -4'],
        correct: 'k = 4',
        explanation: 'For exactly one zero, discriminant = 0: b² - 4ac = 16 - 4k(1) = 0, so k = 4.',
        difficulty: 'hard',
        topic: 'Discriminant'
      },
      {
        id: 'math-11-1-27',
        question: 'What is the range of f(x) = 1/(x²+1)?',
        options: ['(0, 1]', '[0, 1]', '(0, 1)', '[1, ∞)'],
        correct: '(0, 1]',
        explanation: 'Since x²+1 ≥ 1 for all real x, we have 0 < 1/(x²+1) ≤ 1. Maximum occurs at x = 0.',
        difficulty: 'hard',
        topic: 'Rational Functions'
      },
      {
        id: 'math-11-1-28',
        question: 'If f(x) = √(x+3) and g(x) = x² - 3, what is the domain of (f∘g)(x)?',
        options: ['All real numbers', 'x ≥ 0', 'x ≥ √3', 'x ≥ -√3'],
        correct: 'All real numbers',
        explanation: '(f∘g)(x) = f(g(x)) = √(x²-3+3) = √(x²) = |x|, defined for all real x.',
        difficulty: 'hard',
        topic: 'Function Composition'
      },
      {
        id: 'math-11-1-29',
        question: 'What is the equation of the oblique asymptote of f(x) = (x³+1)/(x²-1)?',
        options: ['y = x', 'y = x + 1', 'y = x - 1', 'No oblique asymptote'],
        correct: 'y = x',
        explanation: 'Divide polynomials: (x³+1)/(x²-1) = x + (x+1)/(x²-1). As x→∞, the fraction approaches 0.',
        difficulty: 'hard',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-1-30',
        question: 'If f(x) = x² + ax + b and f(1) = 0, f(2) = 3, what is f(0)?',
        options: ['2', '-2', '3', '0'],
        correct: '2',
        explanation: 'f(1) = 1 + a + b = 0, f(2) = 4 + 2a + b = 3. Solving: a = -3, b = 2. So f(0) = b = 2.',
        difficulty: 'hard',
        topic: 'Function Determination'
      }
    ]
  },
  {
    id: 'math-11-2',
    name: 'Rational Expression and Rational Functions',
    description: 'Working with rational expressions, equations, and functions',
    questions: [
      // Easy Questions (10)
      {
        id: 'math-11-2-1',
        question: 'Simplify: (x² - 4)/(x + 2)',
        options: ['x - 2', 'x + 2', 'x² - 4', '(x - 2)(x + 2)'],
        correct: 'x - 2',
        explanation: 'Factor the numerator: x² - 4 = (x - 2)(x + 2). Cancel (x + 2): result is x - 2.',
        difficulty: 'easy',
        topic: 'Simplifying Rational Expressions'
      },
      {
        id: 'math-11-2-2',
        question: 'What is the domain of f(x) = 1/(x² - 9)?',
        options: ['x ≠ ±3', 'x ≠ 3', 'x ≠ -3', 'All real numbers'],
        correct: 'x ≠ ±3',
        explanation: 'The denominator cannot be zero: x² - 9 ≠ 0, so x ≠ ±3.',
        difficulty: 'easy',
        topic: 'Domain of Rational Functions'
      },
      {
        id: 'math-11-2-3',
        question: 'Simplify: (x² - 1)/(x - 1)',
        options: ['x + 1', 'x - 1', '1', 'x'],
        correct: 'x + 1',
        explanation: 'Factor: x² - 1 = (x - 1)(x + 1). Cancel (x - 1): result is x + 1.',
        difficulty: 'easy',
        topic: 'Simplifying Rational Expressions'
      },
      {
        id: 'math-11-2-4',
        question: 'What is the domain of f(x) = (x + 1)/(x - 5)?',
        options: ['x ≠ 5', 'x ≠ -1', 'x ≠ ±5', 'All real numbers'],
        correct: 'x ≠ 5',
        explanation: 'The function is undefined when x - 5 = 0, so x ≠ 5.',
        difficulty: 'easy',
        topic: 'Domain of Rational Functions'
      },
      {
        id: 'math-11-2-5',
        question: 'Simplify: (2x + 4)/(x + 2)',
        options: ['2', 'x + 2', '2x', '4'],
        correct: '2',
        explanation: 'Factor numerator: 2x + 4 = 2(x + 2). Cancel (x + 2): result is 2.',
        difficulty: 'easy',
        topic: 'Simplifying Rational Expressions'
      },
      {
        id: 'math-11-2-6',
        question: 'What is the vertical asymptote of f(x) = 1/(x + 3)?',
        options: ['x = -3', 'x = 3', 'x = 0', 'No vertical asymptote'],
        correct: 'x = -3',
        explanation: 'Vertical asymptote occurs where denominator equals zero: x + 3 = 0, so x = -3.',
        difficulty: 'easy',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-7',
        question: 'Simplify: (x² + 2x)/(x)',
        options: ['x + 2', 'x² + 2', '2x', 'x'],
        correct: 'x + 2',
        explanation: 'Factor numerator: x² + 2x = x(x + 2). Cancel x: result is x + 2.',
        difficulty: 'easy',
        topic: 'Simplifying Rational Expressions'
      },
      {
        id: 'math-11-2-8',
        question: 'What is the horizontal asymptote of f(x) = 5/(x + 1)?',
        options: ['y = 0', 'y = 5', 'y = 1', 'No horizontal asymptote'],
        correct: 'y = 0',
        explanation: 'For rational functions where degree of numerator < degree of denominator, horizontal asymptote is y = 0.',
        difficulty: 'easy',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-9',
        question: 'Simplify: (3x² - 12)/(x - 2)',
        options: ['3(x + 2)', '3x - 6', '3x + 6', '3(x - 2)'],
        correct: '3(x + 2)',
        explanation: 'Factor: 3x² - 12 = 3(x² - 4) = 3(x - 2)(x + 2). Cancel (x - 2): result is 3(x + 2).',
        difficulty: 'easy',
        topic: 'Simplifying Rational Expressions'
      },
      {
        id: 'math-11-2-10',
        question: 'What values make f(x) = (x - 1)/(x² - 4) undefined?',
        options: ['x = ±2', 'x = 1', 'x = ±1', 'x = 4'],
        correct: 'x = ±2',
        explanation: 'Function is undefined when denominator = 0: x² - 4 = 0, so x = ±2.',
        difficulty: 'easy',
        topic: 'Domain of Rational Functions'
      },
      
      // Medium Questions (10)
      {
        id: 'math-11-2-11',
        question: 'Solve: 1/x + 1/(x+1) = 2/3',
        options: ['x = 1/2', 'x = 2', 'x = 1/2 or x = -3/2', 'x = 3/2'],
        correct: 'x = 1/2 or x = -3/2',
        explanation: 'Multiply by common denominator 3x(x+1): 3(x+1) + 3x = 2x(x+1), which gives 2x² - 4x - 3 = 0.',
        difficulty: 'medium',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-12',
        question: 'Find the vertical asymptote of f(x) = (x+1)/(x-2)',
        options: ['x = -1', 'x = 2', 'x = 1', 'x = -2'],
        correct: 'x = 2',
        explanation: 'Vertical asymptotes occur where the denominator is zero and numerator is non-zero.',
        difficulty: 'medium',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-13',
        question: 'Solve: (x + 2)/(x - 1) = 3',
        options: ['x = 5/2', 'x = 2', 'x = 3', 'x = 1/2'],
        correct: 'x = 5/2',
        explanation: 'Cross multiply: x + 2 = 3(x - 1) = 3x - 3. Solve: x + 2 = 3x - 3, so 5 = 2x, x = 5/2.',
        difficulty: 'medium',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-14',
        question: 'What is the horizontal asymptote of f(x) = (2x + 1)/(3x - 4)?',
        options: ['y = 2/3', 'y = 1/4', 'y = 2', 'y = 3'],
        correct: 'y = 2/3',
        explanation: 'For rational functions with equal degrees, horizontal asymptote is ratio of leading coefficients: 2/3.',
        difficulty: 'medium',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-15',
        question: 'Solve: 2/(x-1) - 1/(x+1) = 1',
        options: ['x = 3', 'x = -3', 'x = 1', 'x = 0'],
        correct: 'x = 3',
        explanation: 'Common denominator (x-1)(x+1): 2(x+1) - (x-1) = (x-1)(x+1). Simplify to get x = 3.',
        difficulty: 'medium',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-16',
        question: 'Find all asymptotes of f(x) = (x² - 1)/(x - 1)',
        options: ['Vertical: none, Horizontal: y = x + 1', 'Vertical: x = 1, Horizontal: none', 'Vertical: none, Horizontal: none', 'Vertical: x = 1, Horizontal: y = 1'],
        correct: 'Vertical: none, Horizontal: none',
        explanation: 'Simplify: f(x) = (x-1)(x+1)/(x-1) = x+1 (with hole at x=1). Linear function has no asymptotes.',
        difficulty: 'medium',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-17',
        question: 'What is the domain of f(x) = √(x+2)/(x²-9)?',
        options: ['x ≥ -2, x ≠ ±3', 'x > -2', 'x ≠ ±3', 'x ≥ -2'],
        correct: 'x ≥ -2, x ≠ ±3',
        explanation: 'Need x + 2 ≥ 0 for square root and x² - 9 ≠ 0 for denominator.',
        difficulty: 'medium',
        topic: 'Domain of Rational Functions'
      },
      {
        id: 'math-11-2-18',
        question: 'Solve: x/(x-2) + 2 = 5/(x-2)',
        options: ['x = 3', 'x = 5', 'x = 1', 'No solution'],
        correct: 'x = 3',
        explanation: 'Multiply by (x-2): x + 2(x-2) = 5. Simplify: x + 2x - 4 = 5, so 3x = 9, x = 3.',
        difficulty: 'medium',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-19',
        question: 'Find the oblique asymptote of f(x) = (x² + 1)/(x)',
        options: ['y = x', 'y = x + 1', 'y = 1', 'No oblique asymptote'],
        correct: 'y = x',
        explanation: 'Divide: (x² + 1)/x = x + 1/x. As x→∞, 1/x→0, so oblique asymptote is y = x.',
        difficulty: 'medium',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-20',
        question: 'What is the range of f(x) = 1/(x² + 1)?',
        options: ['(0, 1]', '[0, 1]', '(0, 1)', '[1, ∞)'],
        correct: '(0, 1]',
        explanation: 'Since x² + 1 ≥ 1, we have 0 < 1/(x²+1) ≤ 1. Maximum is 1 when x = 0.',
        difficulty: 'medium',
        topic: 'Range of Rational Functions'
      },
      
      // Hard Questions (10)
      {
        id: 'math-11-2-21',
        question: 'What is the horizontal asymptote of f(x) = (3x² + 1)/(x² - 4)?',
        options: ['y = 0', 'y = 1', 'y = 3', 'y = -4'],
        correct: 'y = 3',
        explanation: 'For rational functions where degrees are equal, the horizontal asymptote is the ratio of leading coefficients: 3/1 = 3.',
        difficulty: 'hard',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-22',
        question: 'Solve: 1/(x-1) + 1/(x+1) = 4/(x²-1)',
        options: ['x = 2', 'x = 3', 'x = 0', 'No solution'],
        correct: 'No solution',
        explanation: 'Note x²-1 = (x-1)(x+1). Multiply by (x²-1): (x+1) + (x-1) = 4, so 2x = 4, x = 2. But check: denominator becomes 0.',
        difficulty: 'hard',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-23',
        question: 'Find the equation of all asymptotes for f(x) = (2x³ + x)/(x² - 4)',
        options: ['Vertical: x = ±2, Oblique: y = 2x', 'Vertical: x = 2, Horizontal: y = 2', 'Vertical: x = ±2, Horizontal: y = 0', 'Vertical: x = ±2, Oblique: y = x'],
        correct: 'Vertical: x = ±2, Oblique: y = 2x',
        explanation: 'Vertical asymptotes at x = ±2. Degree of numerator > denominator by 1, so oblique asymptote exists. Long division gives y = 2x.',
        difficulty: 'hard',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-24',
        question: 'For what value of k does f(x) = (x² + kx + 3)/(x + 1) have a horizontal asymptote?',
        options: ['k = 0', 'k = 1', 'k = -1', 'No value of k'],
        correct: 'No value of k',
        explanation: 'Since degree of numerator > degree of denominator, there is no horizontal asymptote for any value of k.',
        difficulty: 'hard',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-25',
        question: 'Solve: (x² - 4)/(x + 2) = x - 2',
        options: ['All real numbers except x = -2', 'x = 2', 'x = -2', 'No solution'],
        correct: 'All real numbers except x = -2',
        explanation: 'Simplify left side: (x-2)(x+2)/(x+2) = x-2. This equals right side for all x ≠ -2.',
        difficulty: 'hard',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-26',
        question: 'What is the inverse of f(x) = (2x + 1)/(x - 3)?',
        options: ['f⁻¹(x) = (3x + 1)/(x - 2)', 'f⁻¹(x) = (x - 3)/(2x + 1)', 'f⁻¹(x) = (2x - 1)/(x + 3)', 'f⁻¹(x) = (x + 3)/(2x - 1)'],
        correct: 'f⁻¹(x) = (3x + 1)/(x - 2)',
        explanation: 'Let y = (2x+1)/(x-3). Solve for x: y(x-3) = 2x+1, yx-3y = 2x+1, x(y-2) = 3y+1, x = (3y+1)/(y-2).',
        difficulty: 'hard',
        topic: 'Inverse of Rational Functions'
      },
      {
        id: 'math-11-2-27',
        question: 'Find the range of f(x) = (x + 1)/(x - 1)',
        options: ['All real numbers except y = 1', 'All real numbers except y = -1', 'y > 0', 'All real numbers'],
        correct: 'All real numbers except y = 1',
        explanation: 'Solve y = (x+1)/(x-1) for x: y(x-1) = x+1, yx-y = x+1, x(y-1) = y+1, x = (y+1)/(y-1). Undefined when y = 1.',
        difficulty: 'hard',
        topic: 'Range of Rational Functions'
      },
      {
        id: 'math-11-2-28',
        question: 'Solve: (x² - 5x + 6)/(x - 2) = (x - 3)/(1)',
        options: ['All real numbers except x = 2', 'x = 3', 'x = 2', 'No solution'],
        correct: 'All real numbers except x = 2',
        explanation: 'Factor numerator: (x-2)(x-3)/(x-2) = x-3. This equals the right side for all x ≠ 2.',
        difficulty: 'hard',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-29',
        question: 'What is the slant asymptote of f(x) = (x³ - 2x² + x + 1)/(x² + 1)?',
        options: ['y = x - 2', 'y = x + 2', 'y = x', 'y = x - 1'],
        correct: 'y = x - 2',
        explanation: 'Perform polynomial long division: (x³-2x²+x+1)/(x²+1) = x-2 + (3x+3)/(x²+1). Slant asymptote is y = x-2.',
        difficulty: 'hard',
        topic: 'Oblique Asymptotes'
      },
      {
        id: 'math-11-2-30',
        question: 'For what values of a does the equation (x+a)/(x-1) = 2 have no solution?',
        options: ['a = 2', 'a = -2', 'a = 1', 'a = -1'],
        correct: 'a = -2',
        explanation: 'Cross multiply: x + a = 2(x - 1) = 2x - 2. Solve: x + a = 2x - 2, so x = a + 2. No solution when x = 1, so a + 2 = 1, a = -1. Wait, check: when a = -2, x = 0 which is valid. Actually, no solution occurs when the equation becomes 0 = constant ≠ 0.',
        difficulty: 'hard',
        topic: 'Rational Equations'
      }
    ]
  },
  {
    id: 'math-11-3',
    name: 'Matrices',
    description: 'Matrix operations, properties, and applications',
    questions: [
      // Easy Questions (10)
      {
        id: 'math-11-3-1',
        question: 'What is the order of matrix [[1, 2, 3], [4, 5, 6]]?',
        options: ['2×3', '3×2', '2×2', '3×3'],
        correct: '2×3',
        explanation: 'The matrix has 2 rows and 3 columns, so its order is 2×3.',
        difficulty: 'easy',
        topic: 'Matrix Basics'
      },
      {
        id: 'math-11-3-2',
        question: 'If A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]], what is A + B?',
        options: ['[[6, 8], [10, 12]]', '[[5, 12], [21, 32]]', '[[6, 7], [8, 10]]', '[[1, 8], [15, 4]]'],
        correct: '[[6, 8], [10, 12]]',
        explanation: 'Matrix addition: add corresponding elements. (1+5, 2+6), (3+7, 4+8) = (6, 8), (10, 12).',
        difficulty: 'easy',
        topic: 'Matrix Addition'
      },
      {
        id: 'math-11-3-3',
        question: 'What is the transpose of [[1, 2, 3], [4, 5, 6]]?',
        options: ['[[1, 4], [2, 5], [3, 6]]', '[[1, 2, 3], [4, 5, 6]]', '[[4, 5, 6], [1, 2, 3]]', '[[6, 5, 4], [3, 2, 1]]'],
        correct: '[[1, 4], [2, 5], [3, 6]]',
        explanation: 'The transpose interchanges rows and columns.',
        difficulty: 'easy',
        topic: 'Matrix Transpose'
      },
      {
        id: 'math-11-3-4',
        question: 'What is the identity matrix of order 2?',
        options: ['[[1, 0], [0, 1]]', '[[0, 1], [1, 0]]', '[[1, 1], [1, 1]]', '[[0, 0], [0, 0]]'],
        correct: '[[1, 0], [0, 1]]',
        explanation: 'The identity matrix has 1s on the main diagonal and 0s elsewhere.',
        difficulty: 'easy',
        topic: 'Special Matrices'
      },
      {
        id: 'math-11-3-5',
        question: 'If A = [[2, 3], [1, 4]], what is 3A?',
        options: ['[[6, 9], [3, 12]]', '[[5, 6], [4, 7]]', '[[2, 3], [1, 4]]', '[[6, 3], [9, 12]]'],
        correct: '[[6, 9], [3, 12]]',
        explanation: 'Scalar multiplication: multiply each element by 3.',
        difficulty: 'easy',
        topic: 'Scalar Multiplication'
      },
      {
        id: 'math-11-3-6',
        question: 'What is the zero matrix of order 2×3?',
        options: ['[[0, 0, 0], [0, 0, 0]]', '[[1, 0, 0], [0, 1, 0]]', '[[0, 0], [0, 0], [0, 0]]', '[[1, 1, 1], [1, 1, 1]]'],
        correct: '[[0, 0, 0], [0, 0, 0]]',
        explanation: 'Zero matrix has all elements equal to 0.',
        difficulty: 'easy',
        topic: 'Special Matrices'
      },
      {
        id: 'math-11-3-7',
        question: 'If A = [[1, 2], [3, 4]] and B = [[2, 1], [1, 3]], what is A - B?',
        options: ['[[-1, 1], [2, 1]]', '[[3, 3], [4, 7]]', '[[-1, -1], [-2, -1]]', '[[1, 3], [2, 7]]'],
        correct: '[[-1, 1], [2, 1]]',
        explanation: 'Matrix subtraction: subtract corresponding elements. (1-2, 2-1), (3-1, 4-3) = (-1, 1), (2, 1).',
        difficulty: 'easy',
        topic: 'Matrix Subtraction'
      },
      {
        id: 'math-11-3-8',
        question: 'What is the order of the product AB if A is 2×3 and B is 3×4?',
        options: ['2×4', '3×3', '2×3', 'Cannot multiply'],
        correct: '2×4',
        explanation: 'Matrix multiplication: (m×n)(n×p) = m×p. So (2×3)(3×4) = 2×4.',
        difficulty: 'easy',
        topic: 'Matrix Multiplication Rules'
      },
      {
        id: 'math-11-3-9',
        question: 'Which matrices are equal: A = [[1, 2], [3, 4]] and B = [[1, 2], [3, 4]]?',
        options: ['A = B', 'A ≠ B', 'Cannot determine', 'A > B'],
        correct: 'A = B',
        explanation: 'Two matrices are equal if all corresponding elements are equal.',
        difficulty: 'easy',
        topic: 'Matrix Equality'
      },
      {
        id: 'math-11-3-10',
        question: 'What is the trace of matrix [[2, 3], [1, 5]]?',
        options: ['7', '5', '8', '10'],
        correct: '7',
        explanation: 'Trace is the sum of diagonal elements: 2 + 5 = 7.',
        difficulty: 'easy',
        topic: 'Matrix Trace'
      },

      // Medium Questions (10)
      {
        id: 'math-11-3-11',
        question: 'If A = [[2, 1], [3, 4]] and B = [[1, 0], [2, 1]], what is AB?',
        options: ['[[4, 1], [11, 4]]', '[[2, 0], [6, 4]]', '[[3, 1], [5, 5]]', '[[2, 1], [6, 4]]'],
        correct: '[[4, 1], [11, 4]]',
        explanation: 'Matrix multiplication: (2×1+1×2, 2×0+1×1), (3×1+4×2, 3×0+4×1) = (4, 1), (11, 4).',
        difficulty: 'medium',
        topic: 'Matrix Multiplication'
      },
      {
        id: 'math-11-3-12',
        question: 'If A = [[1, 2], [3, 4]], what is A²?',
        options: ['[[7, 10], [15, 22]]', '[[1, 4], [9, 16]]', '[[2, 4], [6, 8]]', '[[4, 6], [12, 16]]'],
        correct: '[[7, 10], [15, 22]]',
        explanation: 'A² = A·A. Calculate: [[1, 2], [3, 4]] × [[1, 2], [3, 4]] = [[7, 10], [15, 22]].',
        difficulty: 'medium',
        topic: 'Matrix Powers'
      },
      {
        id: 'math-11-3-13',
        question: 'What is the rank of matrix [[1, 2, 3], [2, 4, 6]]?',
        options: ['1', '2', '3', '0'],
        correct: '1',
        explanation: 'Second row is 2 times the first row, so they are linearly dependent. Rank = 1.',
        difficulty: 'medium',
        topic: 'Matrix Rank'
      },
      {
        id: 'math-11-3-14',
        question: 'If A is 3×2 and B is 2×4, what is the order of BA?',
        options: ['Cannot multiply', '3×4', '2×2', '4×3'],
        correct: 'Cannot multiply',
        explanation: 'For BA: B is 2×4 and A is 3×2. Inner dimensions (4 and 3) don\'t match.',
        difficulty: 'medium',
        topic: 'Matrix Multiplication Rules'
      },
      {
        id: 'math-11-3-15',
        question: 'What is (A + B)ᵀ if A = [[1, 2], [3, 4]] and B = [[2, 1], [1, 2]]?',
        options: ['[[3, 4], [3, 6]]', '[[3, 3], [4, 6]]', '[[6, 4], [3, 3]]', '[[3, 4], [6, 3]]'],
        correct: '[[3, 4], [3, 6]]',
        explanation: 'First: A + B = [[3, 3], [4, 6]]. Then transpose: [[3, 4], [3, 6]].',
        difficulty: 'medium',
        topic: 'Matrix Transpose Properties'
      },
      {
        id: 'math-11-3-16',
        question: 'If A = [[2, 0], [0, 3]], what is A⁻¹?',
        options: ['[[1/2, 0], [0, 1/3]]', '[[3, 0], [0, 2]]', '[[1/3, 0], [0, 1/2]]', '[[2, 0], [0, 3]]'],
        correct: '[[1/2, 0], [0, 1/3]]',
        explanation: 'For diagonal matrix, inverse has reciprocals on diagonal.',
        difficulty: 'medium',
        topic: 'Matrix Inverse'
      },
      {
        id: 'math-11-3-17',
        question: 'What is the determinant of [[1, 2], [3, 4]]?',
        options: ['-2', '2', '10', '-10'],
        correct: '-2',
        explanation: 'det([[a, b], [c, d]]) = ad - bc = 1×4 - 2×3 = 4 - 6 = -2.',
        difficulty: 'medium',
        topic: 'Determinant'
      },
      {
        id: 'math-11-3-18',
        question: 'If A and B are 2×2 matrices and AB = I, what is BA?',
        options: ['I', 'A', 'B', 'Cannot determine'],
        correct: 'I',
        explanation: 'If AB = I, then B = A⁻¹ and A = B⁻¹, so BA = A⁻¹A = I.',
        difficulty: 'medium',
        topic: 'Matrix Inverse Properties'
      },
      {
        id: 'math-11-3-19',
        question: 'What is the nullity of a 3×4 matrix with rank 2?',
        options: ['2', '1', '3', '4'],
        correct: '2',
        explanation: 'Nullity = number of columns - rank = 4 - 2 = 2.',
        difficulty: 'medium',
        topic: 'Rank-Nullity Theorem'
      },
      {
        id: 'math-11-3-20',
        question: 'If A = [[1, 1], [1, 1]], what is A²?',
        options: ['[[2, 2], [2, 2]]', '[[1, 1], [1, 1]]', '[[1, 2], [2, 1]]', '[[0, 0], [0, 0]]'],
        correct: '[[2, 2], [2, 2]]',
        explanation: 'A² = A·A = [[1, 1], [1, 1]] × [[1, 1], [1, 1]] = [[2, 2], [2, 2]].',
        difficulty: 'medium',
        topic: 'Matrix Powers'
      },

      // Hard Questions (10)
      {
        id: 'math-11-3-21',
        question: 'What is the inverse of [[1, 2], [3, 4]]?',
        options: ['Matrix [[-2, 1], [3/2, -1/2]]', 'Matrix [[4, -2], [-3, 1]]', 'Matrix [[-1/2, 1/2], [3/4, -1/4]]', 'Matrix [[1/4, -1/2], [-3/4, 1/2]]'],
        correct: 'Matrix [[-2, 1], [3/2, -1/2]]',
        explanation: 'For 2×2 matrix [[a,b],[c,d]], inverse is (1/det)[[d,-b],[-c,a]]. Det = 1×4-2×3 = -2.',
        difficulty: 'hard',
        topic: 'Matrix Inverse'
      },
      {
        id: 'math-11-3-22',
        question: 'What is the inverse of [[2, 1, 0], [1, 2, 1], [0, 1, 2]]?',
        options: ['[[3/4, -1/2, 1/4], [-1/2, 1, -1/2], [1/4, -1/2, 3/4]]', '[[1, 0, 0], [0, 1, 0], [0, 0, 1]]', '[[2, -1, 0], [-1, 2, -1], [0, -1, 2]]', 'Matrix has no inverse'],
        correct: '[[3/4, -1/2, 1/4], [-1/2, 1, -1/2], [1/4, -1/2, 3/4]]',
        explanation: 'This tridiagonal matrix has determinant 4. Use cofactor method or Gaussian elimination.',
        difficulty: 'hard',
        topic: '3×3 Matrix Inverse'
      },
      {
        id: 'math-11-3-23',
        question: 'For what value of k does [[1, 2], [k, 4]] have no inverse?',
        options: ['k = 2', 'k = 0', 'k = 4', 'k = 1'],
        correct: 'k = 2',
        explanation: 'Matrix has no inverse when determinant = 0: 1×4 - 2×k = 0, so 4 - 2k = 0, k = 2.',
        difficulty: 'hard',
        topic: 'Singular Matrices'
      },
      {
        id: 'math-11-3-24',
        question: 'If A³ = I for a 2×2 matrix A, what are the possible eigenvalues of A?',
        options: ['1, ω, ω²', '1, -1', '0, 1', '1, 2, 3'],
        correct: '1, ω, ω²',
        explanation: 'If A³ = I, then eigenvalues λ satisfy λ³ = 1. The cube roots of unity are 1, ω, ω².',
        difficulty: 'hard',
        topic: 'Eigenvalues'
      },
      {
        id: 'math-11-3-25',
        question: 'What is the rank of [[1, 2, 3], [2, 4, 6], [3, 6, 9]]?',
        options: ['1', '2', '3', '0'],
        correct: '1',
        explanation: 'All rows are scalar multiples of [1, 2, 3], so rank = 1.',
        difficulty: 'hard',
        topic: 'Matrix Rank'
      },
      {
        id: 'math-11-3-26',
        question: 'If A and B are n×n matrices and AB = BA, what can we conclude?',
        options: ['A and B commute', 'A = B', 'A = B⁻¹', 'A and B are diagonal'],
        correct: 'A and B commute',
        explanation: 'AB = BA means matrices A and B commute under multiplication.',
        difficulty: 'hard',
        topic: 'Matrix Commutativity'
      },
      {
        id: 'math-11-3-27',
        question: 'What is the characteristic polynomial of [[2, 1], [0, 3]]?',
        options: ['(λ-2)(λ-3)', 'λ² - 5λ + 6', 'λ² - 5λ + 5', '(λ-1)(λ-4)'],
        correct: '(λ-2)(λ-3)',
        explanation: 'For upper triangular matrix, characteristic polynomial is product of (λ - diagonal elements).',
        difficulty: 'hard',
        topic: 'Characteristic Polynomial'
      },
      {
        id: 'math-11-3-28',
        question: 'If A = [[1, 1], [0, 1]], what is A^n?',
        options: ['[[1, n], [0, 1]]', '[[n, n], [0, n]]', '[[1, 1], [0, 1]]', '[[n, 1], [0, 1]]'],
        correct: '[[1, n], [0, 1]]',
        explanation: 'By induction: A² = [[1, 2], [0, 1]], A³ = [[1, 3], [0, 1]], so A^n = [[1, n], [0, 1]].',
        difficulty: 'hard',
        topic: 'Matrix Powers'
      },
      {
        id: 'math-11-3-29',
        question: 'What is the minimal polynomial of [[2, 0], [0, 2]]?',
        options: ['λ - 2', '(λ - 2)²', 'λ² - 4λ + 4', 'λ + 2'],
        correct: 'λ - 2',
        explanation: 'For scalar matrix 2I, minimal polynomial is λ - 2 (not (λ - 2)²).',
        difficulty: 'hard',
        topic: 'Minimal Polynomial'
      },
      {
        id: 'math-11-3-30',
        question: 'If A is orthogonal, what is (A^T)A?',
        options: ['I', 'A', 'A^T', '0'],
        correct: 'I',
        explanation: 'For orthogonal matrix A, A^T = A⁻¹, so A^T·A = A⁻¹·A = I.',
        difficulty: 'hard',
        topic: 'Orthogonal Matrices'
      }
    ]
  },
  {
    id: 'math-11-4',
    name: 'Determinants and their Properties',
    description: 'Calculating determinants and understanding their properties',
    questions: [
      {
        id: 'math-11-4-1',
        question: 'What is the determinant of [[3, 2], [1, 4]]?',
        options: ['10', '12', '14', '6'],
        correct: '10',
        explanation: 'For 2×2 matrix [[a,b],[c,d]], determinant = ad - bc = 3×4 - 2×1 = 12 - 2 = 10.',
        difficulty: 'easy',
        topic: '2×2 Determinants'
      },
      {
        id: 'math-11-4-2',
        question: 'What is the determinant of [[1, 2, 3], [0, 4, 5], [0, 0, 6]]?',
        options: ['24', '30', '120', '6'],
        correct: '24',
        explanation: 'For upper triangular matrix, determinant is the product of diagonal elements: 1×4×6 = 24.',
        difficulty: 'easy',
        topic: '3×3 Determinants'
      },
      {
        id: 'math-11-4-3',
        question: 'If two rows of a matrix are identical, what is its determinant?',
        options: ['0', '1', '-1', 'Cannot be determined'],
        correct: '0',
        explanation: 'If a matrix has two identical rows (or columns), its determinant is always 0.',
        difficulty: 'easy',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-4',
        question: 'What is the determinant of [[5, 0], [0, 3]]?',
        options: ['15', '8', '5', '3'],
        correct: '15',
        explanation: 'For diagonal matrix, determinant = product of diagonal elements = 5×3 = 15.',
        difficulty: 'easy',
        topic: '2×2 Determinants'
      },
      {
        id: 'math-11-4-5',
        question: 'What is the determinant of the identity matrix I₂?',
        options: ['1', '0', '2', '4'],
        correct: '1',
        explanation: 'The determinant of any identity matrix is 1.',
        difficulty: 'easy',
        topic: 'Special Determinants'
      },
      {
        id: 'math-11-4-6',
        question: 'What is the determinant of [[1, 0], [0, 1]]?',
        options: ['1', '0', '2', '-1'],
        correct: '1',
        explanation: 'det([[1, 0], [0, 1]]) = 1×1 - 0×0 = 1.',
        difficulty: 'easy',
        topic: '2×2 Determinants'
      },
      {
        id: 'math-11-4-7',
        question: 'If A is a 2×2 matrix with det(A) = 0, what can we conclude?',
        options: ['A is singular', 'A is invertible', 'A = 0', 'A is diagonal'],
        correct: 'A is singular',
        explanation: 'A matrix with determinant 0 is singular (non-invertible).',
        difficulty: 'easy',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-8',
        question: 'What is the determinant of [[2, 1], [4, 2]]?',
        options: ['0', '4', '8', '2'],
        correct: '0',
        explanation: 'det([[2, 1], [4, 2]]) = 2×2 - 1×4 = 4 - 4 = 0.',
        difficulty: 'easy',
        topic: '2×2 Determinants'
      },
      {
        id: 'math-11-4-9',
        question: 'What happens to the determinant when two rows are swapped?',
        options: ['Changes sign', 'Becomes zero', 'Doubles', 'Remains same'],
        correct: 'Changes sign',
        explanation: 'Swapping two rows changes the sign of the determinant.',
        difficulty: 'easy',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-10',
        question: 'What is the determinant of [[3, 0, 0], [0, 2, 0], [0, 0, 1]]?',
        options: ['6', '5', '3', '0'],
        correct: '6',
        explanation: 'For diagonal matrix, determinant = product of diagonal elements = 3×2×1 = 6.',
        difficulty: 'easy',
        topic: '3×3 Determinants'
      },

      // Medium Questions (10)
      {
        id: 'math-11-4-11',
        question: 'If det(A) = 5, what is det(2A) for a 2×2 matrix?',
        options: ['10', '25', '20', '5'],
        correct: '20',
        explanation: 'For 2×2 matrix, det(kA) = k² det(A). So det(2A) = 2² × 5 = 4 × 5 = 20.',
        difficulty: 'medium',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-12',
        question: 'Calculate det([[1, 2, 3], [4, 5, 6], [7, 8, 9]])',
        options: ['0', '1', '-1', '45'],
        correct: '0',
        explanation: 'This matrix has linearly dependent rows (each row is an arithmetic progression), so determinant = 0.',
        difficulty: 'medium',
        topic: '3×3 Determinants'
      },
      {
        id: 'math-11-4-13',
        question: 'If det(A) = 3 and det(B) = 4, what is det(AB)?',
        options: ['12', '7', '1', '0'],
        correct: '12',
        explanation: 'det(AB) = det(A) × det(B) = 3 × 4 = 12.',
        difficulty: 'medium',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-14',
        question: 'What is det(A⁻¹) if det(A) = 6?',
        options: ['1/6', '6', '-6', '1'],
        correct: '1/6',
        explanation: 'det(A⁻¹) = 1/det(A) = 1/6.',
        difficulty: 'medium',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-15',
        question: 'Calculate det([[2, 1, 0], [1, 2, 1], [0, 1, 2]])',
        options: ['4', '6', '8', '2'],
        correct: '4',
        explanation: 'Expand along first row: 2×det([[2,1],[1,2]]) - 1×det([[1,1],[0,2]]) + 0 = 2×3 - 1×2 = 4.',
        difficulty: 'medium',
        topic: '3×3 Determinants'
      },
      {
        id: 'math-11-4-16',
        question: 'If a row of a matrix is multiplied by k, what happens to the determinant?',
        options: ['Multiplied by k', 'Multiplied by k²', 'Divided by k', 'Unchanged'],
        correct: 'Multiplied by k',
        explanation: 'Multiplying a row by scalar k multiplies the determinant by k.',
        difficulty: 'medium',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-17',
        question: 'What is det(Aᵀ) if det(A) = -3?',
        options: ['-3', '3', '1/3', '9'],
        correct: '-3',
        explanation: 'det(Aᵀ) = det(A) = -3.',
        difficulty: 'medium',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-18',
        question: 'Calculate det([[1, 2], [3, 4]]) using cofactor expansion',
        options: ['-2', '2', '10', '-10'],
        correct: '-2',
        explanation: 'Expand along first row: 1×det([4]) - 2×det([3]) = 1×4 - 2×3 = -2.',
        difficulty: 'medium',
        topic: 'Cofactor Expansion'
      },
      {
        id: 'math-11-4-19',
        question: 'If det(A) = 2, what is det(3A) for a 3×3 matrix?',
        options: ['6', '18', '54', '8'],
        correct: '54',
        explanation: 'For 3×3 matrix, det(kA) = k³ det(A). So det(3A) = 3³ × 2 = 27 × 2 = 54.',
        difficulty: 'medium',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-20',
        question: 'What is the determinant of [[a, b], [b, a]]?',
        options: ['a² - b²', 'a² + b²', '2ab', 'ab'],
        correct: 'a² - b²',
        explanation: 'det([[a, b], [b, a]]) = a×a - b×b = a² - b².',
        difficulty: 'medium',
        topic: 'Parametric Determinants'
      },

      // Hard Questions (10)
      {
        id: 'math-11-4-21',
        question: 'Calculate det([[1, 2, 3], [0, 1, 4], [0, 0, 2]]) using properties',
        options: ['2', '4', '8', '6'],
        correct: '2',
        explanation: 'Upper triangular matrix: determinant = product of diagonal = 1×1×2 = 2.',
        difficulty: 'hard',
        topic: '3×3 Determinants'
      },
      {
        id: 'math-11-4-22',
        question: 'Find det([[1, 1, 1], [a, b, c], [a², b², c²]]) (Vandermonde determinant)',
        options: ['(b-a)(c-a)(c-b)', '(a-b)(b-c)(c-a)', 'abc', '0'],
        correct: '(b-a)(c-a)(c-b)',
        explanation: 'This is a Vandermonde determinant with value (b-a)(c-a)(c-b).',
        difficulty: 'hard',
        topic: 'Special Determinants'
      },
      {
        id: 'math-11-4-23',
        question: 'If A is 4×4 and det(A) = 12, what is det(2A)?',
        options: ['24', '48', '192', '144'],
        correct: '192',
        explanation: 'For 4×4 matrix, det(kA) = k⁴ det(A). So det(2A) = 2⁴ × 12 = 16 × 12 = 192.',
        difficulty: 'hard',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-24',
        question: 'Calculate det([[2, 1, 3], [1, 0, 2], [3, 1, 4]])',
        options: ['-1', '1', '0', '2'],
        correct: '-1',
        explanation: 'Use cofactor expansion or row operations to get det = -1.',
        difficulty: 'hard',
        topic: '3×3 Determinants'
      },
      {
        id: 'math-11-4-25',
        question: 'What is the determinant of [[cos θ, -sin θ], [sin θ, cos θ]]?',
        options: ['1', 'cos θ', 'sin θ', '0'],
        correct: '1',
        explanation: 'det = cos²θ - (-sin θ)(sin θ) = cos²θ + sin²θ = 1.',
        difficulty: 'hard',
        topic: 'Trigonometric Determinants'
      },
      {
        id: 'math-11-4-26',
        question: 'If A = BC where B, C are 3×3 matrices with det(B) = 2, det(C) = -3, find det(A)',
        options: ['-6', '6', '-1', '1'],
        correct: '-6',
        explanation: 'det(A) = det(BC) = det(B) × det(C) = 2 × (-3) = -6.',
        difficulty: 'hard',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-27',
        question: 'Find the value of x such that det([[x, 2], [3, x]]) = 5',
        options: ['x = ±√11', 'x = ±3', 'x = ±√14', 'x = ±2'],
        correct: 'x = ±√11',
        explanation: 'det = x² - 6 = 5, so x² = 11, x = ±√11.',
        difficulty: 'hard',
        topic: 'Determinant Equations'
      },
      {
        id: 'math-11-4-28',
        question: 'What is det([[1, a, a²], [1, b, b²], [1, c, c²]])?',
        options: ['(b-a)(c-a)(c-b)', '(a-b)(b-c)(c-a)', 'abc', '1'],
        correct: '(b-a)(c-a)(c-b)',
        explanation: 'This is a Vandermonde determinant.',
        difficulty: 'hard',
        topic: 'Vandermonde Determinant'
      },
      {
        id: 'math-11-4-29',
        question: 'If det(A - λI) = 0 has solutions λ = 2, 3, what is det(A) for 2×2 matrix A?',
        options: ['6', '5', '-1', '1'],
        correct: '6',
        explanation: 'For 2×2 matrix, det(A) = product of eigenvalues = 2 × 3 = 6.',
        difficulty: 'hard',
        topic: 'Characteristic Equation'
      },
      {
        id: 'math-11-4-30',
        question: 'Calculate det([[a, b, c], [b, c, a], [c, a, b]]) (circulant matrix)',
        options: ['a³ + b³ + c³ - 3abc', '(a+b+c)(a²+b²+c²-ab-bc-ca)', 'abc', '0'],
        correct: 'a³ + b³ + c³ - 3abc',
        explanation: 'For circulant matrix, this is the determinant formula.',
        difficulty: 'hard',
        topic: 'Circulant Determinant'
      }
    ]
  },
  {
    id: 'math-11-5',
    name: 'Vectors',
    description: 'Vector operations, properties, and geometric applications',
    questions: [
      {
        id: 'math-11-5-1',
        question: 'What is the magnitude of vector v = (3, 4)?',
        options: ['5', '7', '√7', '12'],
        correct: '5',
        explanation: 'Magnitude = √(3² + 4²) = √(9 + 16) = √25 = 5.',
        difficulty: 'easy',
        topic: 'Vector Magnitude'
      },
      {
        id: 'math-11-5-2',
        question: 'If u = (2, 3) and v = (1, -1), what is u + v?',
        options: ['(3, 2)', '(1, 4)', '(2, -3)', '(3, -2)'],
        correct: '(3, 2)',
        explanation: 'Vector addition: (2, 3) + (1, -1) = (2+1, 3+(-1)) = (3, 2).',
        difficulty: 'easy',
        topic: 'Vector Addition'
      },
      {
        id: 'math-11-5-3',
        question: 'What is the dot product of u = (2, 3) and v = (4, 1)?',
        options: ['11', '8', '7', '5'],
        correct: '11',
        explanation: 'Dot product: u·v = 2×4 + 3×1 = 8 + 3 = 11.',
        difficulty: 'easy',
        topic: 'Dot Product'
      },
      {
        id: 'math-11-5-4',
        question: 'What is the unit vector in the direction of v = (6, 8)?',
        options: ['(3/5, 4/5)', '(6/10, 8/10)', '(1, 1)', '(6, 8)'],
        correct: '(3/5, 4/5)',
        explanation: 'Unit vector = v/|v|. |v| = √(36+64) = 10. So unit vector = (6/10, 8/10) = (3/5, 4/5).',
        difficulty: 'medium',
        topic: 'Unit Vectors'
      },
      {
        id: 'math-11-5-5',
        question: 'If vectors u and v are perpendicular, what is u·v?',
        options: ['0', '1', '-1', '|u||v|'],
        correct: '0',
        explanation: 'Perpendicular vectors have a dot product of 0.',
        difficulty: 'easy',
        topic: 'Perpendicular Vectors'
      }
    ]
  },
  {
    id: 'math-11-6',
    name: 'Transformations of the Plane',
    description: 'Geometric transformations including translations, rotations, and reflections',
    questions: [
      {
        id: 'math-11-6-1',
        question: 'What is the image of point (2, 3) under translation by vector (1, -2)?',
        options: ['(3, 1)', '(1, 5)', '(3, -1)', '(1, 1)'],
        correct: '(3, 1)',
        explanation: 'Translation: (2, 3) + (1, -2) = (2+1, 3+(-2)) = (3, 1).',
        difficulty: 'easy',
        topic: 'Translation'
      },
      {
        id: 'math-11-6-2',
        question: 'What is the image of point (3, 4) reflected across the x-axis?',
        options: ['(3, -4)', '(-3, 4)', '(-3, -4)', '(4, 3)'],
        correct: '(3, -4)',
        explanation: 'Reflection across x-axis changes y-coordinate sign: (3, 4) → (3, -4).',
        difficulty: 'easy',
        topic: 'Reflection'
      },
      {
        id: 'math-11-6-3',
        question: 'What is the image of point (1, 0) after 90° counterclockwise rotation about origin?',
        options: ['(0, 1)', '(-1, 0)', '(0, -1)', '(1, 1)'],
        correct: '(0, 1)',
        explanation: '90° counterclockwise rotation: (x, y) → (-y, x). So (1, 0) → (0, 1).',
        difficulty: 'medium',
        topic: 'Rotation'
      },
      {
        id: 'math-11-6-4',
        question: 'What is the scaling of point (2, 3) by factor 2?',
        options: ['(4, 6)', '(2, 6)', '(4, 3)', '(1, 1.5)'],
        correct: '(4, 6)',
        explanation: 'Scaling by factor k: (x, y) → (kx, ky). So (2, 3) → (2×2, 3×2) = (4, 6).',
        difficulty: 'easy',
        topic: 'Scaling'
      },
      {
        id: 'math-11-6-5',
        question: 'What transformation matrix represents reflection across y = x?',
        options: ['Matrix [[0, 1], [1, 0]]', 'Matrix [[1, 0], [0, -1]]', 'Matrix [[-1, 0], [0, 1]]', 'Matrix [[0, -1], [1, 0]]'],
        correct: 'Matrix [[0, 1], [1, 0]]',
        explanation: 'Reflection across y = x swaps coordinates: (x, y) → (y, x).',
        difficulty: 'medium',
        topic: 'Transformation Matrices'
      }
    ]
  },
  {
    id: 'math-11-7',
    name: 'Statistics',
    description: 'Descriptive statistics, measures of central tendency and dispersion',
    questions: [
      {
        id: 'math-11-7-1',
        question: 'What is the mean of {2, 4, 6, 8, 10}?',
        options: ['6', '5', '7', '8'],
        correct: '6',
        explanation: 'Mean = (2+4+6+8+10)/5 = 30/5 = 6.',
        difficulty: 'easy',
        topic: 'Mean'
      },
      {
        id: 'math-11-7-2',
        question: 'What is the median of {3, 1, 4, 1, 5, 9, 2}?',
        options: ['3', '4', '1', '5'],
        correct: '3',
        explanation: 'First sort: {1, 1, 2, 3, 4, 5, 9}. Middle value (4th position) is 3.',
        difficulty: 'easy',
        topic: 'Median'
      },
      {
        id: 'math-11-7-3',
        question: 'What is the mode of {2, 3, 3, 4, 5, 5, 5, 6}?',
        options: ['5', '3', '4', 'No mode'],
        correct: '5',
        explanation: 'Mode is the most frequent value. 5 appears 3 times, more than any other value.',
        difficulty: 'easy',
        topic: 'Mode'
      },
      {
        id: 'math-11-7-4',
        question: 'What is the range of {10, 15, 20, 25, 30}?',
        options: ['20', '15', '25', '30'],
        correct: '20',
        explanation: 'Range = Maximum - Minimum = 30 - 10 = 20.',
        difficulty: 'easy',
        topic: 'Range'
      },
      {
        id: 'math-11-7-5',
        question: 'If the variance of a dataset is 16, what is the standard deviation?',
        options: ['4', '8', '16', '256'],
        correct: '4',
        explanation: 'Standard deviation = √(variance) = √16 = 4.',
        difficulty: 'easy',
        topic: 'Standard Deviation'
      }
    ]
  },
  {
    id: 'math-11-8',
    name: 'Probability',
    description: 'Basic probability concepts, counting principles, and probability distributions',
    questions: [
      {
        id: 'math-11-8-1',
        question: 'What is the probability of rolling a 3 on a fair six-sided die?',
        options: ['1/6', '1/3', '1/2', '3/6'],
        correct: '1/6',
        explanation: 'There is 1 favorable outcome (rolling 3) out of 6 possible outcomes.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-2',
        question: 'If P(A) = 0.3 and P(B) = 0.4, what is P(A ∪ B) if A and B are mutually exclusive?',
        options: ['0.7', '0.12', '0.1', '0.4'],
        correct: '0.7',
        explanation: 'For mutually exclusive events: P(A ∪ B) = P(A) + P(B) = 0.3 + 0.4 = 0.7.',
        difficulty: 'easy',
        topic: 'Mutually Exclusive Events'
      },
      {
        id: 'math-11-8-3',
        question: 'How many ways can 5 people be arranged in a row?',
        options: ['120', '25', '10', '5'],
        correct: '120',
        explanation: 'Number of permutations = 5! = 5×4×3×2×1 = 120.',
        difficulty: 'easy',
        topic: 'Permutations'
      },
      {
        id: 'math-11-8-4',
        question: 'How many ways can 3 items be chosen from 5 items?',
        options: ['10', '15', '6', '20'],
        correct: '10',
        explanation: 'Combinations: C(5,3) = 5!/(3!×2!) = 120/(6×2) = 10.',
        difficulty: 'medium',
        topic: 'Combinations'
      },
      {
        id: 'math-11-8-5',
        question: 'If P(A) = 0.6 and P(A ∩ B) = 0.2, what is P(B|A)?',
        options: ['1/3', '0.2', '0.4', '0.6'],
        correct: '1/3',
        explanation: 'Conditional probability: P(B|A) = P(A ∩ B)/P(A) = 0.2/0.6 = 1/3.',
        difficulty: 'medium',
        topic: 'Conditional Probability'
      }
    ]
  }
];
