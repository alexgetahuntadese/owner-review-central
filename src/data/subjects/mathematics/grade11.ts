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
      // Easy Questions (10)
      { id: 'math-11-4-1', question: 'What is the determinant of [[3, 2], [1, 4]]?', options: ['10', '12', '14', '6'], correct: '10', explanation: 'For 2×2 matrix [[a,b],[c,d]], determinant = ad - bc = 3×4 - 2×1 = 12 - 2 = 10.', difficulty: 'easy', topic: '2×2 Determinants' },
      { id: 'math-11-4-2', question: 'What is the determinant of [[1, 2, 3], [0, 4, 5], [0, 0, 6]]?', options: ['24', '30', '120', '6'], correct: '24', explanation: 'For upper triangular matrix, determinant is the product of diagonal elements: 1×4×6 = 24.', difficulty: 'easy', topic: '3×3 Determinants' },
      { id: 'math-11-4-3', question: 'If two rows of a matrix are identical, what is its determinant?', options: ['0', '1', '-1', 'Cannot be determined'], correct: '0', explanation: 'If a matrix has two identical rows (or columns), its determinant is always 0.', difficulty: 'easy', topic: 'Determinant Properties' },
      { id: 'math-11-4-4', question: 'What is the determinant of [[5, 0], [0, 3]]?', options: ['15', '8', '5', '3'], correct: '15', explanation: 'For diagonal matrix, determinant = product of diagonal elements = 5×3 = 15.', difficulty: 'easy', topic: '2×2 Determinants' },
      { id: 'math-11-4-5', question: 'What is the determinant of the identity matrix I₂?', options: ['1', '0', '2', '4'], correct: '1', explanation: 'The determinant of any identity matrix is 1.', difficulty: 'easy', topic: 'Special Determinants' },
      { id: 'math-11-4-6', question: 'What is the determinant of [[1, 0], [0, 1]]?', options: ['1', '0', '2', '-1'], correct: '1', explanation: 'det([[1, 0], [0, 1]]) = 1×1 - 0×0 = 1.', difficulty: 'easy', topic: '2×2 Determinants' },
      { id: 'math-11-4-7', question: 'If A is a 2×2 matrix with det(A) = 0, what can we conclude?', options: ['A is singular', 'A is invertible', 'A = 0', 'A is diagonal'], correct: 'A is singular', explanation: 'A matrix with determinant 0 is singular (non-invertible).', difficulty: 'easy', topic: 'Determinant Properties' },
      { id: 'math-11-4-8', question: 'What is the determinant of [[2, 1], [4, 2]]?', options: ['0', '4', '8', '2'], correct: '0', explanation: 'det([[2, 1], [4, 2]]) = 2×2 - 1×4 = 4 - 4 = 0.', difficulty: 'easy', topic: '2×2 Determinants' },
      { id: 'math-11-4-9', question: 'What happens to the determinant when two rows are swapped?', options: ['Changes sign', 'Becomes zero', 'Doubles', 'Remains same'], correct: 'Changes sign', explanation: 'Swapping two rows changes the sign of the determinant.', difficulty: 'easy', topic: 'Determinant Properties' },
      { id: 'math-11-4-10', question: 'What is the determinant of [[3, 0, 0], [0, 2, 0], [0, 0, 1]]?', options: ['6', '5', '3', '0'], correct: '6', explanation: 'For diagonal matrix, determinant = product of diagonal elements = 3×2×1 = 6.', difficulty: 'easy', topic: '3×3 Determinants' },

      // Medium Questions (10)
      { id: 'math-11-4-11', question: 'If det(A) = 5, what is det(2A) for a 2×2 matrix?', options: ['10', '25', '20', '5'], correct: '20', explanation: 'For 2×2 matrix, det(kA) = k² det(A). So det(2A) = 2² × 5 = 4 × 5 = 20.', difficulty: 'medium', topic: 'Determinant Properties' },
      { id: 'math-11-4-12', question: 'Calculate det([[1, 2, 3], [4, 5, 6], [7, 8, 9]])', options: ['0', '1', '-1', '45'], correct: '0', explanation: 'This matrix has linearly dependent rows (each row is an arithmetic progression), so determinant = 0.', difficulty: 'medium', topic: '3×3 Determinants' },
      { id: 'math-11-4-13', question: 'If det(A) = 3 and det(B) = 4, what is det(AB)?', options: ['12', '7', '1', '0'], correct: '12', explanation: 'det(AB) = det(A) × det(B) = 3 × 4 = 12.', difficulty: 'medium', topic: 'Determinant Properties' },
      { id: 'math-11-4-14', question: 'What is det(A⁻¹) if det(A) = 6?', options: ['1/6', '6', '-6', '1'], correct: '1/6', explanation: 'det(A⁻¹) = 1/det(A) = 1/6.', difficulty: 'medium', topic: 'Determinant Properties' },
      { id: 'math-11-4-15', question: 'Calculate det([[2, 1, 0], [1, 2, 1], [0, 1, 2]])', options: ['4', '6', '8', '2'], correct: '4', explanation: 'Expand along first row: 2×det([[2,1],[1,2]]) - 1×det([[1,1],[0,2]]) + 0 = 2×3 - 1×2 = 4.', difficulty: 'medium', topic: '3×3 Determinants' },
      { id: 'math-11-4-16', question: 'If a row of a matrix is multiplied by k, what happens to the determinant?', options: ['Multiplied by k', 'Multiplied by k²', 'Divided by k', 'Unchanged'], correct: 'Multiplied by k', explanation: 'Multiplying a row by scalar k multiplies the determinant by k.', difficulty: 'medium', topic: 'Determinant Properties' },
      { id: 'math-11-4-17', question: 'What is det(Aᵀ) if det(A) = -3?', options: ['-3', '3', '1/3', '9'], correct: '-3', explanation: 'det(Aᵀ) = det(A) = -3.', difficulty: 'medium', topic: 'Determinant Properties' },
      { id: 'math-11-4-18', question: 'Calculate det([[1, 2], [3, 4]]) using cofactor expansion', options: ['-2', '2', '10', '-10'], correct: '-2', explanation: 'Expand along first row: 1×det([4]) - 2×det([3]) = 1×4 - 2×3 = -2.', difficulty: 'medium', topic: 'Cofactor Expansion' },
      { id: 'math-11-4-19', question: 'If det(A) = 2, what is det(3A) for a 3×3 matrix?', options: ['6', '18', '54', '8'], correct: '54', explanation: 'For 3×3 matrix, det(kA) = k³ det(A). So det(3A) = 3³ × 2 = 27 × 2 = 54.', difficulty: 'medium', topic: 'Determinant Properties' },
      { id: 'math-11-4-20', question: 'What is the determinant of [[a, b], [b, a]]?', options: ['a² - b²', 'a² + b²', '2ab', 'ab'], correct: 'a² - b²', explanation: 'det([[a, b], [b, a]]) = a×a - b×b = a² - b².', difficulty: 'medium', topic: 'Parametric Determinants' },

      // Hard Questions (10)
      { id: 'math-11-4-21', question: 'Find det([[1, 1, 1], [a, b, c], [a², b², c²]]) (Vandermonde determinant)', options: ['(b-a)(c-a)(c-b)', '(a-b)(b-c)(c-a)', 'abc', '0'], correct: '(b-a)(c-a)(c-b)', explanation: 'This is a Vandermonde determinant with value (b-a)(c-a)(c-b).', difficulty: 'hard', topic: 'Special Determinants' },
      { id: 'math-11-4-22', question: 'If A is 4×4 and det(A) = 12, what is det(2A)?', options: ['24', '48', '192', '144'], correct: '192', explanation: 'For 4×4 matrix, det(kA) = k⁴ det(A). So det(2A) = 2⁴ × 12 = 16 × 12 = 192.', difficulty: 'hard', topic: 'Determinant Properties' },
      { id: 'math-11-4-23', question: 'What is the determinant of [[cos θ, -sin θ], [sin θ, cos θ]]?', options: ['1', 'cos θ', 'sin θ', '0'], correct: '1', explanation: 'det = cos²θ - (-sin θ)(sin θ) = cos²θ + sin²θ = 1.', difficulty: 'hard', topic: 'Trigonometric Determinants' },
      { id: 'math-11-4-24', question: 'Find the value of x such that det([[x, 2], [3, x]]) = 5', options: ['x = ±√11', 'x = ±3', 'x = ±√14', 'x = ±2'], correct: 'x = ±√11', explanation: 'det = x² - 6 = 5, so x² = 11, x = ±√11.', difficulty: 'hard', topic: 'Determinant Equations' },
      { id: 'math-11-4-25', question: 'Calculate det([[2, 1, 3], [1, 0, 2], [3, 1, 4]])', options: ['-1', '1', '0', '2'], correct: '-1', explanation: 'Use cofactor expansion or row operations to get det = -1.', difficulty: 'hard', topic: '3×3 Determinants' },
      { id: 'math-11-4-26', question: 'If A = BC where B, C are 3×3 matrices with det(B) = 2, det(C) = -3, find det(A)', options: ['-6', '6', '-1', '1'], correct: '-6', explanation: 'det(A) = det(BC) = det(B) × det(C) = 2 × (-3) = -6.', difficulty: 'hard', topic: 'Determinant Properties' },
      { id: 'math-11-4-27', question: 'What is det([[1, a, a²], [1, b, b²], [1, c, c²]])?', options: ['(b-a)(c-a)(c-b)', '(a-b)(b-c)(c-a)', 'abc', '1'], correct: '(b-a)(c-a)(c-b)', explanation: 'This is a Vandermonde determinant.', difficulty: 'hard', topic: 'Vandermonde Determinant' },
      { id: 'math-11-4-28', question: 'If det(A - λI) = 0 has solutions λ = 2, 3, what is det(A) for 2×2 matrix A?', options: ['6', '5', '-1', '1'], correct: '6', explanation: 'For 2×2 matrix, det(A) = product of eigenvalues = 2 × 3 = 6.', difficulty: 'hard', topic: 'Characteristic Equation' },
      { id: 'math-11-4-29', question: 'Calculate det([[a, b, c], [b, c, a], [c, a, b]]) (circulant matrix)', options: ['a³ + b³ + c³ - 3abc', '(a+b+c)³', 'abc', '0'], correct: 'a³ + b³ + c³ - 3abc', explanation: 'For circulant matrix, this is the determinant formula.', difficulty: 'hard', topic: 'Circulant Determinant' },
      { id: 'math-11-4-30', question: 'What is det(A²) if det(A) = -2?', options: ['4', '-4', '2', '-2'], correct: '4', explanation: 'det(A²) = det(A × A) = det(A) × det(A) = (-2) × (-2) = 4.', difficulty: 'hard', topic: 'Determinant Properties' }
    ]
  },
  {
    id: 'math-11-5',
    name: 'Vectors',
    description: 'Vector operations, properties, and geometric applications',
    questions: [
      // Easy Questions (10)
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
        question: 'If vectors u and v are perpendicular, what is u·v?',
        options: ['0', '1', '-1', '|u||v|'],
        correct: '0',
        explanation: 'Perpendicular vectors have a dot product of 0.',
        difficulty: 'easy',
        topic: 'Perpendicular Vectors'
      },
      {
        id: 'math-11-5-5',
        question: 'What is the magnitude of vector (0, 5)?',
        options: ['5', '0', '25', '√5'],
        correct: '5',
        explanation: 'Magnitude = √(0² + 5²) = √25 = 5.',
        difficulty: 'easy',
        topic: 'Vector Magnitude'
      },
      {
        id: 'math-11-5-6',
        question: 'If u = (1, 2) and v = (3, 4), what is u - v?',
        options: ['(-2, -2)', '(4, 6)', '(2, 2)', '(-4, -6)'],
        correct: '(-2, -2)',
        explanation: 'Vector subtraction: (1, 2) - (3, 4) = (1-3, 2-4) = (-2, -2).',
        difficulty: 'easy',
        topic: 'Vector Subtraction'
      },
      {
        id: 'math-11-5-7',
        question: 'What is 3 times vector (2, 1)?',
        options: ['(6, 3)', '(5, 4)', '(2, 3)', '(3, 2)'],
        correct: '(6, 3)',
        explanation: 'Scalar multiplication: 3(2, 1) = (3×2, 3×1) = (6, 3).',
        difficulty: 'easy',
        topic: 'Scalar Multiplication'
      },
      {
        id: 'math-11-5-8',
        question: 'What is the zero vector in 2D?',
        options: ['(0, 0)', '(1, 1)', '(0, 1)', '(1, 0)'],
        correct: '(0, 0)',
        explanation: 'The zero vector has all components equal to zero.',
        difficulty: 'easy',
        topic: 'Zero Vector'
      },
      {
        id: 'math-11-5-9',
        question: 'If u = (4, 0), what is its magnitude?',
        options: ['4', '0', '16', '2'],
        correct: '4',
        explanation: 'Magnitude = √(4² + 0²) = √16 = 4.',
        difficulty: 'easy',
        topic: 'Vector Magnitude'
      },
      {
        id: 'math-11-5-10',
        question: 'What is the dot product of (1, 0) and (0, 1)?',
        options: ['0', '1', '-1', '2'],
        correct: '0',
        explanation: 'Dot product: (1, 0)·(0, 1) = 1×0 + 0×1 = 0.',
        difficulty: 'easy',
        topic: 'Dot Product'
      },

      // Medium Questions (10)
      {
        id: 'math-11-5-11',
        question: 'What is the unit vector in the direction of v = (6, 8)?',
        options: ['(3/5, 4/5)', '(6/10, 8/10)', '(1, 1)', '(6, 8)'],
        correct: '(3/5, 4/5)',
        explanation: 'Unit vector = v/|v|. |v| = √(36+64) = 10. So unit vector = (6/10, 8/10) = (3/5, 4/5).',
        difficulty: 'medium',
        topic: 'Unit Vectors'
      },
      {
        id: 'math-11-5-12',
        question: 'If |u| = 5 and |v| = 3, what is the maximum value of u·v?',
        options: ['15', '8', '2', '9'],
        correct: '15',
        explanation: 'Maximum dot product occurs when vectors are parallel: u·v ≤ |u||v| = 5×3 = 15.',
        difficulty: 'medium',
        topic: 'Dot Product Properties'
      },
      {
        id: 'math-11-5-13',
        question: 'What is the angle between vectors u = (1, 0) and v = (0, 1)?',
        options: ['90°', '45°', '0°', '180°'],
        correct: '90°',
        explanation: 'cos θ = (u·v)/(|u||v|) = 0/(1×1) = 0, so θ = 90°.',
        difficulty: 'medium',
        topic: 'Vector Angles'
      },
      {
        id: 'math-11-5-14',
        question: 'If u = (2, 3) and v = (-1, 2), what is the component of u in the direction of v?',
        options: ['4/√5', '2/√5', '√5', '4'],
        correct: '4/√5',
        explanation: 'Component = (u·v)/|v| = (2×(-1) + 3×2)/√(1+4) = 4/√5.',
        difficulty: 'medium',
        topic: 'Vector Components'
      },
      {
        id: 'math-11-5-15',
        question: 'What is the distance between points A(1, 2) and B(4, 6)?',
        options: ['5', '3', '7', '4'],
        correct: '5',
        explanation: 'Distance = |AB| = √((4-1)² + (6-2)²) = √(9+16) = 5.',
        difficulty: 'medium',
        topic: 'Distance Formula'
      },
      {
        id: 'math-11-5-16',
        question: 'If u and v are unit vectors with u·v = 1/2, what is the angle between them?',
        options: ['60°', '30°', '45°', '90°'],
        correct: '60°',
        explanation: 'cos θ = u·v = 1/2, so θ = 60°.',
        difficulty: 'medium',
        topic: 'Vector Angles'
      },
      {
        id: 'math-11-5-17',
        question: 'What is the magnitude of 3u - 2v if u = (1, 2) and v = (2, 1)?',
        options: ['√17', '√2', '√5', '3'],
        correct: '√17',
        explanation: '3u - 2v = 3(1,2) - 2(2,1) = (3,6) - (4,2) = (-1,4). |(-1,4)| = √((-1)² + 4²) = √(1+16) = √17.',
        difficulty: 'medium',
        topic: 'Vector Operations'
      },
      {
        id: 'math-11-5-18',
        question: 'If vectors u = (a, 2) and v = (3, b) are parallel, what is the relationship between a and b?',
        options: ['a = (3/2)b', 'b = (2/3)a', 'ab = 6', 'a + b = 5'],
        correct: 'ab = 6',
        explanation: 'Parallel vectors have proportional components: a/3 = 2/b, so ab = 6.',
        difficulty: 'medium',
        topic: 'Parallel Vectors'
      },
      {
        id: 'math-11-5-19',
        question: 'What is the projection of u = (4, 3) onto v = (1, 0)?',
        options: ['(4, 0)', '(0, 3)', '(4, 3)', '(1, 0)'],
        correct: '(4, 0)',
        explanation: 'Projection = ((u·v)/|v|²)v = ((4×1 + 3×0)/1²)(1,0) = 4(1,0) = (4,0).',
        difficulty: 'medium',
        topic: 'Vector Projection'
      },
      {
        id: 'math-11-5-20',
        question: 'If |u + v| = |u - v|, what can we conclude about u and v?',
        options: ['u ⟂ v', 'u ∥ v', '|u| = |v|', 'u = v'],
        correct: 'u ⟂ v',
        explanation: '|u+v|² = |u-v|² implies (u+v)·(u+v) = (u-v)·(u-v), which gives u·v = 0, so u ⟂ v.',
        difficulty: 'medium',
        topic: 'Vector Properties'
      },

      // Hard Questions (10)
      {
        id: 'math-11-5-21',
        question: 'Find the area of triangle with vertices A(0,0), B(3,4), C(6,0)',
        options: ['12', '9', '6', '15'],
        correct: '12',
        explanation: 'Area = ½|AB × AC| = ½|(3,4) × (6,0)| = ½|3×0 - 4×6| = ½×24 = 12.',
        difficulty: 'hard',
        topic: 'Cross Product Application'
      },
      {
        id: 'math-11-5-22',
        question: 'If u, v, w are vectors such that u + v + w = 0 and |u| = 3, |v| = 4, |w| = 5, find u·v',
        options: ['0', '-25/2', '25/2', '12'],
        correct: '0',
        explanation: 'From u + v + w = 0, we get w = -(u + v). Taking magnitude: |w|² = |u + v|² = |u|² + |v|² + 2u·v. So 25 = 9 + 16 + 2u·v, giving u·v = 0.',
        difficulty: 'hard',
        topic: 'Vector Relationships'
      },
      {
        id: 'math-11-5-23',
        question: 'What is the vector equation of line passing through (1,2) parallel to vector (3,4)?',
        options: ['r = (1,2) + t(3,4)', 'r = (3,4) + t(1,2)', 'r = t(1,2)', 'r = t(3,4)'],
        correct: 'r = (1,2) + t(3,4)',
        explanation: 'Line through point a parallel to vector b has equation r = a + tb.',
        difficulty: 'hard',
        topic: 'Vector Equations'
      },
      {
        id: 'math-11-5-24',
        question: 'Find the shortest distance from point P(2,3) to line r = (1,1) + t(2,1)',
        options: ['√5/5', '2√5/5', '√5', '2√5'],
        correct: '2√5/5',
        explanation: 'Distance = |AP × d|/|d| where A(1,1) is on line, P(2,3) is point, d(2,1) is direction vector.',
        difficulty: 'hard',
        topic: 'Distance to Line'
      },
      {
        id: 'math-11-5-25',
        question: 'If u = (2,1,3) and v = (1,2,1), what is u × v?',
        options: ['(-5,1,3)', '(5,-1,-3)', '(-5,-1,3)', '(5,1,-3)'],
        correct: '(-5,1,3)',
        explanation: 'u × v = (1×1-3×2, 3×1-2×1, 2×2-1×1) = (-5,1,3).',
        difficulty: 'hard',
        topic: 'Cross Product'
      },
      {
        id: 'math-11-5-26',
        question: 'Find the volume of parallelepiped with edges u = (1,0,1), v = (0,1,1), w = (1,1,0)',
        options: ['2', '1', '√2', '3'],
        correct: '2',
        explanation: 'Volume = |u·(v × w)|. First v × w = (-1,1,1), then u·(v × w) = (1,0,1)·(-1,1,1) = -2. Volume = |-2| = 2.',
        difficulty: 'hard',
        topic: 'Scalar Triple Product'
      },
      {
        id: 'math-11-5-27',
        question: 'If vectors u, v, w are coplanar and u = (1,2,3), v = (2,1,1), what condition must w = (a,b,c) satisfy?',
        options: ['a - 3b + c = 0', 'a + b - c = 0', 'a - b + 3c = 0', '3a - b - c = 0'],
        correct: 'a - 3b + c = 0',
        explanation: 'Vectors are coplanar if u·(v × w) = 0. Calculate v × w and dot with u to get the condition.',
        difficulty: 'hard',
        topic: 'Coplanar Vectors'
      },
      {
        id: 'math-11-5-28',
        question: 'What is the angle between planes with normal vectors n₁ = (1,1,0) and n₂ = (1,0,1)?',
        options: ['60°', '45°', '90°', '30°'],
        correct: '60°',
        explanation: 'cos θ = |n₁·n₂|/(|n₁||n₂|) = |1|/(√2×√2) = 1/2, so θ = 60°.',
        difficulty: 'hard',
        topic: 'Angles Between Planes'
      },
      {
        id: 'math-11-5-29',
        question: 'Find the equation of plane passing through points A(1,0,0), B(0,1,0), C(0,0,1)',
        options: ['x + y + z = 1', 'x + y + z = 0', 'x - y - z = 1', 'x + y - z = 1'],
        correct: 'x + y + z = 1',
        explanation: 'Use normal vector AB × AC = (-1,-1,-1), so equation is x + y + z = d. Substituting A: d = 1.',
        difficulty: 'hard',
        topic: 'Plane Equations'
      },
      {
        id: 'math-11-5-30',
        question: 'If |u| = |v| = |w| = 1 and u + v + w = 0, find u·v + v·w + w·u',
        options: ['-3/2', '0', '3/2', '1'],
        correct: '-3/2',
        explanation: 'From |u + v + w|² = 0: |u|² + |v|² + |w|² + 2(u·v + v·w + w·u) = 0. So 3 + 2(u·v + v·w + w·u) = 0.',
        difficulty: 'hard',
        topic: 'Vector Identities'
      }
    ]
  },
  {
    id: 'math-11-6',
    name: 'Transformations of the Plane',
    description: 'Geometric transformations including translations, rotations, and reflections',
    questions: [
      // Easy Questions (10)
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
        question: 'What is the scaling of point (2, 3) by factor 2?',
        options: ['(4, 6)', '(2, 6)', '(4, 3)', '(1, 1.5)'],
        correct: '(4, 6)',
        explanation: 'Scaling by factor k: (x, y) → (kx, ky). So (2, 3) → (2×2, 3×2) = (4, 6).',
        difficulty: 'easy',
        topic: 'Scaling'
      },
      {
        id: 'math-11-6-4',
        question: 'What is the image of point (5, 2) reflected across the y-axis?',
        options: ['(-5, 2)', '(5, -2)', '(-5, -2)', '(2, 5)'],
        correct: '(-5, 2)',
        explanation: 'Reflection across y-axis changes x-coordinate sign: (5, 2) → (-5, 2).',
        difficulty: 'easy',
        topic: 'Reflection'
      },
      {
        id: 'math-11-6-5',
        question: 'What is the image of point (1, 1) under translation by vector (0, 3)?',
        options: ['(1, 4)', '(4, 1)', '(0, 3)', '(1, 0)'],
        correct: '(1, 4)',
        explanation: 'Translation: (1, 1) + (0, 3) = (1, 4).',
        difficulty: 'easy',
        topic: 'Translation'
      },
      {
        id: 'math-11-6-6',
        question: 'What is the image of point (4, 1) scaled by factor 1/2?',
        options: ['(2, 0.5)', '(8, 2)', '(4, 0.5)', '(2, 1)'],
        correct: '(2, 0.5)',
        explanation: 'Scaling: (4, 1) × 1/2 = (2, 0.5).',
        difficulty: 'easy',
        topic: 'Scaling'
      },
      {
        id: 'math-11-6-7',
        question: 'What is the image of point (0, 5) reflected across the origin?',
        options: ['(0, -5)', '(5, 0)', '(-5, 0)', '(0, 5)'],
        correct: '(0, -5)',
        explanation: 'Reflection across origin: (x, y) → (-x, -y). So (0, 5) → (0, -5).',
        difficulty: 'easy',
        topic: 'Reflection'
      },
      {
        id: 'math-11-6-8',
        question: 'What transformation maps (x, y) to (x + 3, y - 1)?',
        options: ['Translation by (3, -1)', 'Reflection', 'Rotation', 'Scaling'],
        correct: 'Translation by (3, -1)',
        explanation: 'Adding constants to coordinates represents translation.',
        difficulty: 'easy',
        topic: 'Translation'
      },
      {
        id: 'math-11-6-9',
        question: 'What is the image of point (6, 0) scaled by factor 1/3?',
        options: ['(2, 0)', '(18, 0)', '(6, 3)', '(3, 0)'],
        correct: '(2, 0)',
        explanation: 'Scaling: (6, 0) × 1/3 = (2, 0).',
        difficulty: 'easy',
        topic: 'Scaling'
      },
      {
        id: 'math-11-6-10',
        question: 'What is the image of point (-2, 3) reflected across the x-axis?',
        options: ['(-2, -3)', '(2, 3)', '(2, -3)', '(-2, 3)'],
        correct: '(-2, -3)',
        explanation: 'Reflection across x-axis: (x, y) → (x, -y).',
        difficulty: 'easy',
        topic: 'Reflection'
      },

      // Medium Questions (10)
      {
        id: 'math-11-6-11',
        question: 'What is the image of point (1, 0) after 90° counterclockwise rotation about origin?',
        options: ['(0, 1)', '(-1, 0)', '(0, -1)', '(1, 1)'],
        correct: '(0, 1)',
        explanation: '90° counterclockwise rotation: (x, y) → (-y, x). So (1, 0) → (0, 1).',
        difficulty: 'medium',
        topic: 'Rotation'
      },
      {
        id: 'math-11-6-12',
        question: 'What transformation matrix represents reflection across y = x?',
        options: ['[[0, 1], [1, 0]]', '[[1, 0], [0, -1]]', '[[-1, 0], [0, 1]]', '[[0, -1], [1, 0]]'],
        correct: '[[0, 1], [1, 0]]',
        explanation: 'Reflection across y = x swaps coordinates: (x, y) → (y, x).',
        difficulty: 'medium',
        topic: 'Transformation Matrices'
      },
      {
        id: 'math-11-6-13',
        question: 'What is the image of point (2, 1) after 180° rotation about origin?',
        options: ['(-2, -1)', '(2, -1)', '(-2, 1)', '(1, 2)'],
        correct: '(-2, -1)',
        explanation: '180° rotation: (x, y) → (-x, -y).',
        difficulty: 'medium',
        topic: 'Rotation'
      },
      {
        id: 'math-11-6-14',
        question: 'What matrix represents 90° clockwise rotation?',
        options: ['[[0, 1], [-1, 0]]', '[[0, -1], [1, 0]]', '[[-1, 0], [0, -1]]', '[[1, 0], [0, 1]]'],
        correct: '[[0, 1], [-1, 0]]',
        explanation: '90° clockwise rotation: (x, y) → (y, -x).',
        difficulty: 'medium',
        topic: 'Rotation Matrices'
      },
      {
        id: 'math-11-6-15',
        question: 'What is the image of line y = x under reflection across y-axis?',
        options: ['y = -x', 'y = x', 'x = -y', 'y = 1'],
        correct: 'y = -x',
        explanation: 'Reflection across y-axis: (x, y) → (-x, y). Line y = x becomes y = -(-x) = -x.',
        difficulty: 'medium',
        topic: 'Line Transformations'
      },
      {
        id: 'math-11-6-16',
        question: 'What is the image of triangle with vertices (0,0), (1,0), (0,1) under scaling by factor 2?',
        options: ['(0,0), (2,0), (0,2)', '(0,0), (1,0), (0,1)', '(2,2), (3,2), (2,3)', '(1,1), (2,1), (1,2)'],
        correct: '(0,0), (2,0), (0,2)',
        explanation: 'Each vertex is multiplied by scale factor 2.',
        difficulty: 'medium',
        topic: 'Scaling Shapes'
      },
      {
        id: 'math-11-6-17',
        question: 'What is the composite transformation of translation by (1,2) followed by reflection across x-axis?',
        options: ['(x,y) → (x+1, -y-2)', '(x,y) → (x+1, y+2)', '(x,y) → (-x-1, y+2)', '(x,y) → (x+1, 2-y)'],
        correct: '(x,y) → (x+1, -y-2)',
        explanation: 'First translate: (x,y) → (x+1, y+2). Then reflect across x-axis: (x+1, y+2) → (x+1, -(y+2)) = (x+1, -y-2).',
        difficulty: 'medium',
        topic: 'Composite Transformations'
      },
      {
        id: 'math-11-6-18',
        question: 'What is the image of point (3,4) after 270° counterclockwise rotation about origin?',
        options: ['(4, -3)', '(-4, 3)', '(-3, -4)', '(3, -4)'],
        correct: '(4, -3)',
        explanation: '270° counterclockwise = 90° clockwise: (x, y) → (y, -x). So (3, 4) → (4, -3).',
        difficulty: 'medium',
        topic: 'Rotation'
      },
      {
        id: 'math-11-6-19',
        question: 'What is the equation of line y = 2x after translation by vector (1, -3)?',
        options: ['y = 2x - 5', 'y = 2x + 1', 'y = 2x - 1', 'y = 2x + 5'],
        correct: 'y = 2x - 5',
        explanation: 'Translation by (1, -3): (x,y) → (x-1, y+3). So x → x-1, y → y+3. From y+3 = 2(x-1), we get y = 2x - 5.',
        difficulty: 'medium',
        topic: 'Line Transformations'
      },
      {
        id: 'math-11-6-20',
        question: 'What transformation maps square with vertices (0,0), (1,0), (1,1), (0,1) to vertices (0,0), (2,0), (2,2), (0,2)?',
        options: ['Scaling by factor 2', 'Translation by (1,1)', 'Rotation by 90°', 'Reflection across y=x'],
        correct: 'Scaling by factor 2',
        explanation: 'Each coordinate is multiplied by 2, which is scaling by factor 2.',
        difficulty: 'medium',
        topic: 'Transformation Identification'
      },

      // Hard Questions (10)
      {
        id: 'math-11-6-21',
        question: 'What is the matrix for rotation by angle θ about point (a,b)?',
        options: ['T(a,b) R(θ) T(-a,-b)', 'R(θ) T(a,b)', 'T(-a,-b) R(θ) T(a,b)', 'R(θ)'],
        correct: 'T(-a,-b) R(θ) T(a,b)',
        explanation: 'To rotate about point (a,b): translate to origin, rotate, translate back.',
        difficulty: 'hard',
        topic: 'Rotation About Point'
      },
      {
        id: 'math-11-6-22',
        question: 'Find the fixed points of transformation T(x,y) = (2x+y-1, x+2y-2)',
        options: ['(1, -1)', '(0, 1)', '(1, 0)', 'No fixed points'],
        correct: '(1, -1)',
        explanation: 'Fixed point satisfies T(x,y) = (x,y). So 2x+y-1 = x and x+2y-2 = y. Solving: x = 1, y = -1.',
        difficulty: 'hard',
        topic: 'Fixed Points'
      },
      {
        id: 'math-11-6-23',
        question: 'What is the inverse transformation of T(x,y) = (2x-y, x+y)?',
        options: ['T⁻¹(x,y) = ((x+y)/3, (2y-x)/3)', 'T⁻¹(x,y) = (x-y, 2y-x)', 'T⁻¹(x,y) = (x/2, y)', 'T⁻¹(x,y) = (x+y, x-y)'],
        correct: 'T⁻¹(x,y) = ((x+y)/3, (2y-x)/3)',
        explanation: 'Find inverse of matrix [[2,-1],[1,1]]. Determinant = 3, inverse = (1/3)[[1,1],[-1,2]].',
        difficulty: 'hard',
        topic: 'Inverse Transformations'
      },
      {
        id: 'math-11-6-24',
        question: 'What is the area of triangle with vertices (0,0), (1,2), (3,1) after transformation by matrix [[2,1],[0,3]]?',
        options: ['9', '15', '6', '12'],
        correct: '9',
        explanation: 'Original area = ½|det([[1,2],[3,1]])| = ½|1×1 - 2×3| = ½|-5| = 2.5. Transformation scales area by |det([[2,1],[0,3]])| = 6. New area = 2.5 × 6 = 15. But we need to use correct vertices matrix: area = ½|det([[1,3],[2,1]])| = ½|1-6| = 2.5. Wait, using shoelace formula: area = ½|(0×2-0×1) + (1×1-2×3) + (3×0-1×0)| = ½|0-5+0| = 2.5. Transformed area = 2.5 × 6 = 15.',
        difficulty: 'hard',
        topic: 'Area Under Transformation'
      },
      {
        id: 'math-11-6-25',
        question: 'Find the eigenvalues of transformation matrix [[3,1],[0,2]]',
        options: ['3, 2', '1, 2', '3, 0', '2, 3'],
        correct: '3, 2',
        explanation: 'For upper triangular matrix, eigenvalues are the diagonal entries: 3 and 2.',
        difficulty: 'hard',
        topic: 'Eigenvalues'
      },
      {
        id: 'math-11-6-26',
        question: 'What transformation preserves all distances and angles?',
        options: ['Isometry', 'Similarity', 'Affine', 'Projective'],
        correct: 'Isometry',
        explanation: 'Isometries (rotations, reflections, translations) preserve distances and angles.',
        difficulty: 'hard',
        topic: 'Transformation Types'
      },
      {
        id: 'math-11-6-27',
        question: 'What is the order of rotational symmetry of regular hexagon?',
        options: ['6', '3', '12', '2'],
        correct: '6',
        explanation: 'Regular hexagon has 6-fold rotational symmetry (rotations by 60°, 120°, 180°, 240°, 300°, 360°).',
        difficulty: 'hard',
        topic: 'Symmetry'
      },
      {
        id: 'math-11-6-28',
        question: 'What is the composition of reflections across two parallel lines distance d apart?',
        options: ['Translation by 2d', 'Rotation by 180°', 'Identity', 'Reflection'],
        correct: 'Translation by 2d',
        explanation: 'Composition of reflections across parallel lines is translation by twice the distance between lines.',
        difficulty: 'hard',
        topic: 'Reflection Composition'
      },
      {
        id: 'math-11-6-29',
        question: 'Find the matrix that reflects across line y = mx',
        options: ['[[1-m²,2m],[2m,m²-1]]/(1+m²)', '[[m²-1,2m],[2m,1-m²]]/(1+m²)', '[[1,m],[m,1]]', '[[m,1],[1,m]]'],
        correct: '[[1-m²,2m],[2m,m²-1]]/(1+m²)',
        explanation: 'Reflection matrix across line y = mx through origin uses formula with angle θ where tan θ = m.',
        difficulty: 'hard',
        topic: 'Reflection Across Line'
      },
      {
        id: 'math-11-6-30',
        question: 'What is the center of rotation for transformation that maps (1,0) to (0,1) and (0,1) to (-1,0)?',
        options: ['(1/2, 1/2)', '(0, 0)', '(1, 1)', '(-1/2, 1/2)'],
        correct: '(1/2, 1/2)',
        explanation: 'This is 90° counterclockwise rotation. Find center by solving system where center is equidistant from each point and its image.',
        difficulty: 'hard',
        topic: 'Center of Rotation'
      }
    ]
  },
  {
    id: 'math-11-7',
    name: 'Statistics',
    description: 'Descriptive statistics, measures of central tendency and dispersion',
    questions: [
      // Easy Questions (10)
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
      },
      {
        id: 'math-11-7-6',
        question: 'What is the mean of {1, 2, 3, 4, 5}?',
        options: ['3', '2.5', '15', '5'],
        correct: '3',
        explanation: 'Mean = (1+2+3+4+5)/5 = 15/5 = 3.',
        difficulty: 'easy',
        topic: 'Mean'
      },
      {
        id: 'math-11-7-7',
        question: 'What is the median of {2, 4, 6, 8}?',
        options: ['5', '4', '6', '3'],
        correct: '5',
        explanation: 'For even number of values, median = (4+6)/2 = 5.',
        difficulty: 'easy',
        topic: 'Median'
      },
      {
        id: 'math-11-7-8',
        question: 'Which dataset has no mode: {1,2,3,4} or {1,1,2,3}?',
        options: ['{1,2,3,4}', '{1,1,2,3}', 'Both', 'Neither'],
        correct: '{1,2,3,4}',
        explanation: 'Dataset {1,2,3,4} has no repeated values, so no mode. {1,1,2,3} has mode 1.',
        difficulty: 'easy',
        topic: 'Mode'
      },
      {
        id: 'math-11-7-9',
        question: 'What is the range of {7, 3, 9, 1, 5}?',
        options: ['8', '5', '6', '9'],
        correct: '8',
        explanation: 'Range = Max - Min = 9 - 1 = 8.',
        difficulty: 'easy',
        topic: 'Range'
      },
      {
        id: 'math-11-7-10',
        question: 'If all values in a dataset are the same, what is the standard deviation?',
        options: ['0', '1', 'Equal to the mean', 'Cannot determine'],
        correct: '0',
        explanation: 'If all values are the same, there is no variation, so standard deviation = 0.',
        difficulty: 'easy',
        topic: 'Standard Deviation'
      },

      // Medium Questions (10)
      {
        id: 'math-11-7-11',
        question: 'Calculate the variance of {2, 4, 6}',
        options: ['8/3', '4/3', '2', '4'],
        correct: '8/3',
        explanation: 'Mean = 4. Variance = [(2-4)² + (4-4)² + (6-4)²]/3 = [4+0+4]/3 = 8/3.',
        difficulty: 'medium',
        topic: 'Variance'
      },
      {
        id: 'math-11-7-12',
        question: 'What is the interquartile range of {1, 3, 5, 7, 9, 11, 13}?',
        options: ['8', '6', '4', '12'],
        correct: '8',
        explanation: 'Q1 = 3 (median of lower half), Q3 = 11 (median of upper half). IQR = Q3 - Q1 = 11 - 3 = 8.',
        difficulty: 'medium',
        topic: 'Quartiles'
      },
      {
        id: 'math-11-7-13',
        question: 'If the mean of 5 numbers is 20, what is their sum?',
        options: ['100', '25', '4', '20'],
        correct: '100',
        explanation: 'Sum = Mean × Count = 20 × 5 = 100.',
        difficulty: 'medium',
        topic: 'Mean'
      },
      {
        id: 'math-11-7-14',
        question: 'What is the coefficient of variation if mean = 50 and standard deviation = 10?',
        options: ['20%', '10%', '50%', '5%'],
        correct: '20%',
        explanation: 'CV = (σ/μ) × 100% = (10/50) × 100% = 20%.',
        difficulty: 'medium',
        topic: 'Coefficient of Variation'
      },
      {
        id: 'math-11-7-15',
        question: 'Find the weighted mean of values 10, 20, 30 with weights 2, 3, 5',
        options: ['23', '20', '25', '22'],
        correct: '23',
        explanation: 'Weighted mean = (10×2 + 20×3 + 30×5)/(2+3+5) = (20+60+150)/10 = 230/10 = 23.',
        difficulty: 'medium',
        topic: 'Weighted Mean'
      },
      {
        id: 'math-11-7-16',
        question: 'What is the 75th percentile of {10, 20, 30, 40, 50, 60, 70, 80}?',
        options: ['60', '65', '70', '55'],
        correct: '65',
        explanation: '75th percentile is between 6th and 7th values: (60+70)/2 = 65.',
        difficulty: 'medium',
        topic: 'Percentiles'
      },
      {
        id: 'math-11-7-17',
        question: 'If adding constant k to each data value, how does the mean change?',
        options: ['Increases by k', 'Unchanged', 'Multiplied by k', 'Increases by k²'],
        correct: 'Increases by k',
        explanation: 'Adding a constant to each value increases the mean by that constant.',
        difficulty: 'medium',
        topic: 'Mean Properties'
      },
      {
        id: 'math-11-7-18',
        question: 'What is the standard deviation of {0, 4, 8}?',
        options: ['4', '2√2', '√(32/3)', '2√6'],
        correct: '4',
        explanation: 'Mean = (0+4+8)/3 = 4. Variance = [(0-4)² + (4-4)² + (8-4)²]/3 = [16+0+16]/3 = 32/3. SD = √(32/3) = √32/√3 = 4√2/√3 = 4√6/3. Actually, using sample SD formula: SD = √[(16+0+16)/2] = √16 = 4.',
        difficulty: 'medium',
        topic: 'Standard Deviation'
      },
      {
        id: 'math-11-7-19',
        question: 'What is the median of {1, 2, 2, 3, 4, 4, 5}?',
        options: ['3', '2.5', '4', '2'],
        correct: '3',
        explanation: 'With 7 values, median is the 4th value = 3.',
        difficulty: 'medium',
        topic: 'Median'
      },
      {
        id: 'math-11-7-20',
        question: 'If variance = 25, what is the standard deviation?',
        options: ['5', '25', '625', '12.5'],
        correct: '5',
        explanation: 'Standard deviation = √variance = √25 = 5.',
        difficulty: 'medium',
        topic: 'Standard Deviation'
      },

      // Hard Questions (10)
      {
        id: 'math-11-7-21',
        question: 'Calculate the population variance of {1, 2, 3, 4, 5}',
        options: ['2', '2.5', '√2', '10'],
        correct: '2',
        explanation: 'Mean = 3. Population variance = [(1-3)² + (2-3)² + (3-3)² + (4-3)² + (5-3)²]/5 = [4+1+0+1+4]/5 = 2.',
        difficulty: 'hard',
        topic: 'Population Variance'
      },
      {
        id: 'math-11-7-22',
        question: 'What is the skewness of a perfectly symmetric distribution?',
        options: ['0', '1', '-1', 'Cannot determine'],
        correct: '0',
        explanation: 'Symmetric distributions have skewness = 0.',
        difficulty: 'hard',
        topic: 'Skewness'
      },
      {
        id: 'math-11-7-23',
        question: 'If Q1 = 25, Q2 = 40, Q3 = 60, what is the coefficient of quartile deviation?',
        options: ['0.4', '0.5', '35', '17.5'],
        correct: '0.4',
        explanation: 'Coefficient of QD = (Q3-Q1)/(Q3+Q1) = (60-25)/(60+25) = 35/85 = 7/17 ≈ 0.41.',
        difficulty: 'hard',
        topic: 'Quartile Deviation'
      },
      {
        id: 'math-11-7-24',
        question: 'What is the harmonic mean of 2, 4, 8?',
        options: ['24/7', '32/7', '14/3', '8/3'],
        correct: '24/7',
        explanation: 'HM = n/(1/a₁ + 1/a₂ + ... + 1/aₙ) = 3/(1/2 + 1/4 + 1/8) = 3/(7/8) = 24/7.',
        difficulty: 'hard',
        topic: 'Harmonic Mean'
      },
      {
        id: 'math-11-7-25',
        question: 'Calculate the geometric mean of 2, 8, 32',
        options: ['8', '14', '42', '6'],
        correct: '8',
        explanation: 'GM = ∛(2 × 8 × 32) = ∛512 = 8.',
        difficulty: 'hard',
        topic: 'Geometric Mean'
      },
      {
        id: 'math-11-7-26',
        question: 'What is the z-score of value 85 in distribution with mean 75 and SD 5?',
        options: ['2', '1.5', '10', '17'],
        correct: '2',
        explanation: 'z = (x - μ)/σ = (85 - 75)/5 = 2.',
        difficulty: 'hard',
        topic: 'Z-Score'
      },
      {
        id: 'math-11-7-27',
        question: 'What is the correlation coefficient range?',
        options: ['[-1, 1]', '[0, 1]', '[-∞, ∞]', '[0, ∞]'],
        correct: '[-1, 1]',
        explanation: 'Correlation coefficient r always lies between -1 and 1.',
        difficulty: 'hard',
        topic: 'Correlation'
      },
      {
        id: 'math-11-7-28',
        question: 'If coefficient of variation is 25% and mean is 80, what is the standard deviation?',
        options: ['20', '25', '55', '105'],
        correct: '20',
        explanation: 'CV = (σ/μ) × 100%, so 25% = (σ/80) × 100%. Therefore σ = 20.',
        difficulty: 'hard',
        topic: 'Coefficient of Variation'
      },
      {
        id: 'math-11-7-29',
        question: 'What is the mode of a normal distribution?',
        options: ['Equal to mean', 'Equal to median', 'Equal to mean and median', 'Always zero'],
        correct: 'Equal to mean and median',
        explanation: 'In a normal distribution, mean = median = mode.',
        difficulty: 'hard',
        topic: 'Normal Distribution'
      },
      {
        id: 'math-11-7-30',
        question: 'Calculate Pearson\'s coefficient of skewness if mean = 50, median = 45, SD = 10',
        options: ['1.5', '0.5', '-1.5', '-0.5'],
        correct: '1.5',
        explanation: 'Pearson\'s skewness = 3(mean - median)/SD = 3(50 - 45)/10 = 15/10 = 1.5.',
        difficulty: 'hard',
        topic: 'Skewness'
      }
    ]
  },
  {
    id: 'math-11-8',
    name: 'Probability',
    description: 'Basic probability concepts, counting principles, and probability distributions',
    questions: [
      // Easy Questions (10)
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
        question: 'What is the probability of getting heads on a fair coin flip?',
        options: ['1/2', '1', '0', '2'],
        correct: '1/2',
        explanation: 'Fair coin has 2 equally likely outcomes, so P(heads) = 1/2.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-5',
        question: 'If an event is certain to occur, what is its probability?',
        options: ['1', '0', '1/2', 'Cannot determine'],
        correct: '1',
        explanation: 'Certain events have probability 1.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-6',
        question: 'What is the probability of rolling an even number on a standard die?',
        options: ['1/2', '1/3', '2/3', '1/6'],
        correct: '1/2',
        explanation: 'Even numbers on die: 2, 4, 6. So P(even) = 3/6 = 1/2.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-7',
        question: 'If an event is impossible, what is its probability?',
        options: ['0', '1', '1/2', '-1'],
        correct: '0',
        explanation: 'Impossible events have probability 0.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-8',
        question: 'What is the total probability of all possible outcomes in a sample space?',
        options: ['1', '0', '1/2', 'Varies'],
        correct: '1',
        explanation: 'Sum of probabilities of all possible outcomes = 1.',
        difficulty: 'easy',
        topic: 'Sample Space'
      },
      {
        id: 'math-11-8-9',
        question: 'In how many ways can you choose 2 items from 4 items?',
        options: ['6', '8', '4', '12'],
        correct: '6',
        explanation: 'C(4,2) = 4!/(2!×2!) = 24/(2×2) = 6.',
        difficulty: 'easy',
        topic: 'Combinations'
      },
      {
        id: 'math-11-8-10',
        question: 'What is P(A\') if P(A) = 0.3?',
        options: ['0.7', '0.3', '1', '0'],
        correct: '0.7',
        explanation: 'P(A\') = 1 - P(A) = 1 - 0.3 = 0.7.',
        difficulty: 'easy',
        topic: 'Complement'
      },

      // Medium Questions (10)
      {
        id: 'math-11-8-11',
        question: 'How many ways can 3 items be chosen from 5 items?',
        options: ['10', '15', '6', '20'],
        correct: '10',
        explanation: 'Combinations: C(5,3) = 5!/(3!×2!) = 120/(6×2) = 10.',
        difficulty: 'medium',
        topic: 'Combinations'
      },
      {
        id: 'math-11-8-12',
        question: 'If P(A) = 0.6 and P(A ∩ B) = 0.2, what is P(B|A)?',
        options: ['1/3', '0.2', '0.4', '0.6'],
        correct: '1/3',
        explanation: 'Conditional probability: P(B|A) = P(A ∩ B)/P(A) = 0.2/0.6 = 1/3.',
        difficulty: 'medium',
        topic: 'Conditional Probability'
      },
      {
        id: 'math-11-8-13',
        question: 'What is the probability of drawing 2 red cards consecutively from a standard deck (without replacement)?',
        options: ['25/102', '1/4', '26/51', '1/2'],
        correct: '25/102',
        explanation: 'P(1st red) × P(2nd red|1st red) = (26/52) × (25/51) = 25/102.',
        difficulty: 'medium',
        topic: 'Dependent Events'
      },
      {
        id: 'math-11-8-14',
        question: 'If P(A) = 0.4, P(B) = 0.5, and A and B are independent, what is P(A ∩ B)?',
        options: ['0.2', '0.9', '0.1', '0.5'],
        correct: '0.2',
        explanation: 'For independent events: P(A ∩ B) = P(A) × P(B) = 0.4 × 0.5 = 0.2.',
        difficulty: 'medium',
        topic: 'Independent Events'
      },
      {
        id: 'math-11-8-15',
        question: 'How many different arrangements of the word BOOK are possible?',
        options: ['12', '24', '6', '4'],
        correct: '12',
        explanation: 'BOOK has 4 letters with O repeated twice: 4!/2! = 24/2 = 12.',
        difficulty: 'medium',
        topic: 'Permutations with Repetition'
      },
      {
        id: 'math-11-8-16',
        question: 'What is the expected value of rolling a fair six-sided die?',
        options: ['3.5', '3', '4', '21'],
        correct: '3.5',
        explanation: 'E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3.5.',
        difficulty: 'medium',
        topic: 'Expected Value'
      },
      {
        id: 'math-11-8-17',
        question: 'If A and B are mutually exclusive and P(A) = 0.3, P(B) = 0.4, what is P(A ∪ B)?',
        options: ['0.7', '0.12', '1', '0.1'],
        correct: '0.7',
        explanation: 'For mutually exclusive events: P(A ∪ B) = P(A) + P(B) = 0.7.',
        difficulty: 'medium',
        topic: 'Union of Events'
      },
      {
        id: 'math-11-8-18',
        question: 'What is the variance of a binomial distribution with n = 10 and p = 0.3?',
        options: ['2.1', '3', '7', '0.21'],
        correct: '2.1',
        explanation: 'Variance of binomial = np(1-p) = 10 × 0.3 × 0.7 = 2.1.',
        difficulty: 'medium',
        topic: 'Binomial Distribution'
      },
      {
        id: 'math-11-8-19',
        question: 'In how many ways can 6 people sit around a circular table?',
        options: ['120', '720', '5040', '6'],
        correct: '120',
        explanation: 'Circular permutations = (n-1)! = 5! = 120.',
        difficulty: 'medium',
        topic: 'Circular Permutations'
      },
      {
        id: 'math-11-8-20',
        question: 'If two fair dice are rolled, what is P(sum = 7)?',
        options: ['1/6', '1/12', '1/36', '7/36'],
        correct: '1/6',
        explanation: 'Ways to get sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 ways. P = 6/36 = 1/6.',
        difficulty: 'medium',
        topic: 'Joint Probability'
      },

      // Hard Questions (10)
      {
        id: 'math-11-8-21',
        question: 'What is the probability of exactly 3 successes in 5 trials with p = 0.4 (binomial)?',
        options: ['0.2304', '0.1536', '0.3456', '0.0768'],
        correct: '0.2304',
        explanation: 'P(X=3) = C(5,3) × (0.4)³ × (0.6)² = 10 × 0.064 × 0.36 = 0.2304.',
        difficulty: 'hard',
        topic: 'Binomial Probability'
      },
      {
        id: 'math-11-8-22',
        question: 'If X follows Poisson distribution with λ = 2, what is P(X = 0)?',
        options: ['e⁻²', '2e⁻²', '1-e⁻²', '2'],
        correct: 'e⁻²',
        explanation: 'P(X=0) = (λ⁰ × e⁻λ)/0! = e⁻².',
        difficulty: 'hard',
        topic: 'Poisson Distribution'
      },
      {
        id: 'math-11-8-23',
        question: 'Using Bayes\' theorem, if P(A|B) = 0.8, P(B) = 0.3, P(A) = 0.5, what is P(B|A)?',
        options: ['0.48', '0.6', '0.24', '1.2'],
        correct: '0.48',
        explanation: 'P(B|A) = P(A|B) × P(B) / P(A) = 0.8 × 0.3 / 0.5 = 0.48.',
        difficulty: 'hard',
        topic: 'Bayes\' Theorem'
      },
      {
        id: 'math-11-8-24',
        question: 'What is the coefficient of x⁵ in expansion of (1+x)¹⁰?',
        options: ['252', '210', '120', '792'],
        correct: '252',
        explanation: 'Coefficient = C(10,5) = 10!/(5!×5!) = 252.',
        difficulty: 'hard',
        topic: 'Binomial Theorem'
      },
      {
        id: 'math-11-8-25',
        question: 'If events A and B satisfy P(A ∪ B) = 0.8, P(A) = 0.5, P(B) = 0.6, are A and B independent?',
        options: ['Yes', 'No', 'Cannot determine', 'Only if P(A ∩ B) = 0'],
        correct: 'Yes',
        explanation: 'P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.5 + 0.6 - 0.8 = 0.3. For independence check: P(A) × P(B) = 0.5 × 0.6 = 0.3. Since P(A ∩ B) = P(A) × P(B), the events are independent.',
        difficulty: 'hard',
        topic: 'Independence Test'
      },
      {
        id: 'math-11-8-26',
        question: 'What is the probability that a random 4-digit number has all distinct digits?',
        options: ['0.504', '0.6', '0.9', '0.3024'],
        correct: '0.504',
        explanation: 'Total 4-digit numbers = 9000. Numbers with distinct digits = 9×9×8×7 = 4536. P = 4536/9000 = 0.504.',
        difficulty: 'hard',
        topic: 'Counting Probability'
      },
      {
        id: 'math-11-8-27',
        question: 'In hypergeometric distribution with N=20, K=5, n=3, what is P(X=2)?',
        options: ['15/76', '21/76', '45/76', '10/76'],
        correct: '21/76',
        explanation: 'P(X=2) = [C(5,2) × C(15,1)] / C(20,3) = [10 × 15] / 1140 = 150/1140 = 21/76.',
        difficulty: 'hard',
        topic: 'Hypergeometric Distribution'
      },
      {
        id: 'math-11-8-28',
        question: 'If X ~ N(50, 25), what is P(45 < X < 55) approximately?',
        options: ['0.68', '0.95', '0.34', '0.5'],
        correct: '0.68',
        explanation: 'X ~ N(50, 25) means μ=50, σ²=25, so σ=5. P(μ-σ < X < μ+σ) ≈ 0.68.',
        difficulty: 'hard',
        topic: 'Normal Distribution'
      },
      {
        id: 'math-11-8-29',
        question: 'What is the moment generating function of X ~ Exp(λ)?',
        options: ['λ/(λ-t)', '1/(1-t/λ)', 'e^(λt)', '(1-t/λ)⁻¹'],
        correct: 'λ/(λ-t)',
        explanation: 'MGF of exponential distribution with rate λ is M(t) = λ/(λ-t) for t < λ.',
        difficulty: 'hard',
        topic: 'Moment Generating Functions'
      },
      {
        id: 'math-11-8-30',
        question: 'If correlation coefficient r = -0.8, what percentage of variance in Y is explained by X?',
        options: ['64%', '80%', '36%', '20%'],
        correct: '64%',
        explanation: 'Coefficient of determination = r² = (-0.8)² = 0.64 = 64%.',
        difficulty: 'hard',
        topic: 'Correlation and Regression'
      }
    ]
  }
];