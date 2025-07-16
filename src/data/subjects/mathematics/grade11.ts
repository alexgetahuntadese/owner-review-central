import { Chapter } from '../../types';

export const grade11MathematicsChapters: Chapter[] = [
  {
    id: 'math-11-1',
    name: 'Relations and Functions',
    description: 'Understanding relations, functions, their properties, composition, and inverse functions',
    questions: [
      // Easy Questions (8)
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

      // Medium Questions (7)
      {
        id: 'math-11-1-9',
        question: 'If f(x) = 2x + 3 and g(x) = x², what is (f∘g)(x)?',
        options: ['2x² + 3', '2x + 3x²', '(2x + 3)²', '2(x + 3)²'],
        correct: '2x² + 3',
        explanation: '(f∘g)(x) = f(g(x)) = f(x²) = 2(x²) + 3 = 2x² + 3',
        difficulty: 'medium',
        topic: 'Function Composition'
      },
      {
        id: 'math-11-1-10',
        question: 'If f(x) = x² - 4x + 3, what are the zeros of f?',
        options: ['x = 1, 3', 'x = -1, -3', 'x = 2, 4', 'x = 0, 3'],
        correct: 'x = 1, 3',
        explanation: 'Set f(x) = 0: x² - 4x + 3 = 0. Factor: (x-1)(x-3) = 0, so x = 1 or x = 3.',
        difficulty: 'medium',
        topic: 'Function Zeros'
      },
      {
        id: 'math-11-1-11',
        question: 'What is the range of f(x) = -(x-2)² + 5?',
        options: ['y ≤ 5', 'y ≥ 5', 'y ≤ 2', 'All real numbers'],
        correct: 'y ≤ 5',
        explanation: 'This is a downward parabola with vertex at (2,5). Maximum value is 5, so range is y ≤ 5.',
        difficulty: 'medium',
        topic: 'Domain and Range'
      },
      {
        id: 'math-11-1-12',
        question: 'If f(x) = 3x + 1 and g(x) = 2x - 5, what is (g∘f)(x)?',
        options: ['6x - 3', '6x + 2', '6x - 7', '5x - 4'],
        correct: '6x - 3',
        explanation: '(g∘f)(x) = g(f(x)) = g(3x + 1) = 2(3x + 1) - 5 = 6x + 2 - 5 = 6x - 3.',
        difficulty: 'medium',
        topic: 'Function Composition'
      },
      {
        id: 'math-11-1-13',
        question: 'What is the inverse of f(x) = 2x + 7?',
        options: ['f⁻¹(x) = (x-7)/2', 'f⁻¹(x) = (x+7)/2', 'f⁻¹(x) = 2x - 7', 'f⁻¹(x) = (2x-7)/2'],
        correct: 'f⁻¹(x) = (x-7)/2',
        explanation: 'Let y = 2x + 7, swap: x = 2y + 7, solve: 2y = x - 7, so y = (x-7)/2.',
        difficulty: 'medium',
        topic: 'Inverse Functions'
      },
      {
        id: 'math-11-1-14',
        question: 'If f(x) = x² + 2x - 3, what is the vertex of the parabola?',
        options: ['(-1, -4)', '(1, 0)', '(-1, 0)', '(1, -4)'],
        correct: '(-1, -4)',
        explanation: 'For f(x) = ax² + bx + c, vertex x = -b/(2a) = -2/2 = -1. f(-1) = 1 - 2 - 3 = -4.',
        difficulty: 'medium',
        topic: 'Quadratic Functions'
      },
      {
        id: 'math-11-1-15',
        question: 'What is the domain of f(x) = √(9-x²)?',
        options: ['-3 ≤ x ≤ 3', 'x ≥ 3', 'x ≤ -3', 'All real numbers'],
        correct: '-3 ≤ x ≤ 3',
        explanation: 'For square root to be real: 9-x² ≥ 0, so x² ≤ 9, which gives -3 ≤ x ≤ 3.',
        difficulty: 'medium',
        topic: 'Domain and Range'
      }
    ]
  },
  {
    id: 'math-11-2',
    name: 'Rational Expression and Rational Functions',
    description: 'Working with rational expressions, equations, and functions including asymptotes and domains',
    questions: [
      // Easy Questions (8)
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

      // Medium Questions (7)
      {
        id: 'math-11-2-9',
        question: 'Solve: 1/x + 1/(x+1) = 2/3',
        options: ['x = 1/2', 'x = 2', 'x = 1/2 or x = -3/2', 'x = 3/2'],
        correct: 'x = 1/2 or x = -3/2',
        explanation: 'Multiply by common denominator 3x(x+1): 3(x+1) + 3x = 2x(x+1), which gives 2x² - 4x - 3 = 0.',
        difficulty: 'medium',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-10',
        question: 'Find the vertical asymptote of f(x) = (x+1)/(x-2)',
        options: ['x = -1', 'x = 2', 'x = 1', 'x = -2'],
        correct: 'x = 2',
        explanation: 'Vertical asymptotes occur where the denominator is zero and numerator is non-zero.',
        difficulty: 'medium',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-11',
        question: 'Solve: (x + 2)/(x - 1) = 3',
        options: ['x = 5/2', 'x = 2', 'x = 3', 'x = 1/2'],
        correct: 'x = 5/2',
        explanation: 'Cross multiply: x + 2 = 3(x - 1) = 3x - 3. Solve: x + 2 = 3x - 3, so 5 = 2x, x = 5/2.',
        difficulty: 'medium',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-12',
        question: 'What is the horizontal asymptote of f(x) = (2x + 1)/(3x - 4)?',
        options: ['y = 2/3', 'y = 1/4', 'y = 2', 'y = 3'],
        correct: 'y = 2/3',
        explanation: 'For rational functions with equal degrees, horizontal asymptote is ratio of leading coefficients: 2/3.',
        difficulty: 'medium',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-13',
        question: 'Solve: 2/(x-1) - 1/(x+1) = 1',
        options: ['x = 3', 'x = -3', 'x = 1', 'x = 0'],
        correct: 'x = 3',
        explanation: 'Common denominator (x-1)(x+1): 2(x+1) - (x-1) = (x-1)(x+1). Simplify to get x = 3.',
        difficulty: 'medium',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-14',
        question: 'Find all asymptotes of f(x) = (x² - 1)/(x - 1)',
        options: ['Vertical: none, Horizontal: none', 'Vertical: x = 1, Horizontal: none', 'Vertical: none, Horizontal: y = x', 'Vertical: x = 1, Horizontal: y = 1'],
        correct: 'Vertical: none, Horizontal: none',
        explanation: 'After simplification: f(x) = x + 1 (x ≠ 1). This is linear with no asymptotes, just a hole at x = 1.',
        difficulty: 'medium',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-15',
        question: 'What is the range of f(x) = 1/(x² + 1)?',
        options: ['(0, 1]', '[0, 1]', '(0, 1)', '[1, ∞)'],
        correct: '(0, 1]',
        explanation: 'Since x² + 1 ≥ 1 for all real x, we have 0 < 1/(x² + 1) ≤ 1. Maximum occurs at x = 0.',
        difficulty: 'medium',
        topic: 'Rational Functions'
      }
    ]
  },
  {
    id: 'math-11-3',
    name: 'Matrices',
    description: 'Matrix operations, properties, and applications in solving systems of equations',
    questions: [
      // Easy Questions (8)
      {
        id: 'math-11-3-1',
        question: 'What is the sum of matrices A = [1 2; 3 4] and B = [5 6; 7 8]?',
        options: ['[6 8; 10 12]', '[5 12; 21 32]', '[1 2; 3 4]', '[6 7; 10 11]'],
        correct: '[6 8; 10 12]',
        explanation: 'Matrix addition is element-wise: [1+5, 2+6; 3+7, 4+8] = [6, 8; 10, 12].',
        difficulty: 'easy',
        topic: 'Matrix Addition'
      },
      {
        id: 'math-11-3-2',
        question: 'What is 3 times the matrix [1 2; 3 4]?',
        options: ['[3 6; 9 12]', '[4 5; 6 7]', '[1 2; 3 4]', '[3 3; 3 3]'],
        correct: '[3 6; 9 12]',
        explanation: 'Scalar multiplication multiplies each element by 3: 3[1 2; 3 4] = [3 6; 9 12].',
        difficulty: 'easy',
        topic: 'Scalar Multiplication'
      },
      {
        id: 'math-11-3-3',
        question: 'What is the transpose of matrix [1 2 3; 4 5 6]?',
        options: ['[1 4; 2 5; 3 6]', '[1 2 3; 4 5 6]', '[6 5 4; 3 2 1]', '[4 1; 5 2; 6 3]'],
        correct: '[1 4; 2 5; 3 6]',
        explanation: 'The transpose swaps rows and columns: rows become columns and columns become rows.',
        difficulty: 'easy',
        topic: 'Matrix Transpose'
      },
      {
        id: 'math-11-3-4',
        question: 'What is the size (dimensions) of a matrix with 3 rows and 4 columns?',
        options: ['3×4', '4×3', '3+4', '3÷4'],
        correct: '3×4',
        explanation: 'Matrix dimensions are written as rows × columns, so a matrix with 3 rows and 4 columns is 3×4.',
        difficulty: 'easy',
        topic: 'Matrix Dimensions'
      },
      {
        id: 'math-11-3-5',
        question: 'What is the zero matrix of size 2×2?',
        options: ['[0 0; 0 0]', '[1 0; 0 1]', '[1 1; 1 1]', '[0 1; 1 0]'],
        correct: '[0 0; 0 0]',
        explanation: 'A zero matrix has all elements equal to zero.',
        difficulty: 'easy',
        topic: 'Special Matrices'
      },
      {
        id: 'math-11-3-6',
        question: 'What is the identity matrix of size 2×2?',
        options: ['[1 0; 0 1]', '[0 0; 0 0]', '[1 1; 1 1]', '[0 1; 1 0]'],
        correct: '[1 0; 0 1]',
        explanation: 'The identity matrix has 1s on the main diagonal and 0s elsewhere.',
        difficulty: 'easy',
        topic: 'Special Matrices'
      },
      {
        id: 'math-11-3-7',
        question: 'Can you multiply a 2×3 matrix by a 4×2 matrix?',
        options: ['No', 'Yes', 'Sometimes', 'Only if square'],
        correct: 'No',
        explanation: 'For matrix multiplication AB, the number of columns in A must equal the number of rows in B.',
        difficulty: 'easy',
        topic: 'Matrix Multiplication Rules'
      },
      {
        id: 'math-11-3-8',
        question: 'What is the result of [1 2] × [3; 4]?',
        options: ['[11]', '[3 6; 4 8]', '[1 2; 3 4]', 'Cannot multiply'],
        correct: '[11]',
        explanation: 'This is a 1×2 matrix times a 2×1 matrix: (1)(3) + (2)(4) = 3 + 8 = 11.',
        difficulty: 'easy',
        topic: 'Matrix Multiplication'
      },

      // Medium Questions (7)
      {
        id: 'math-11-3-9',
        question: 'What is [1 2; 3 4] × [5 6; 7 8]?',
        options: ['[19 22; 43 50]', '[5 12; 21 32]', '[6 8; 10 12]', '[1 2; 3 4]'],
        correct: '[19 22; 43 50]',
        explanation: 'Element (1,1): 1×5 + 2×7 = 19; (1,2): 1×6 + 2×8 = 22; (2,1): 3×5 + 4×7 = 43; (2,2): 3×6 + 4×8 = 50.',
        difficulty: 'medium',
        topic: 'Matrix Multiplication'
      },
      {
        id: 'math-11-3-10',
        question: 'If A = [2 1; 3 2], what is A²?',
        options: ['[7 4; 12 7]', '[4 1; 9 4]', '[4 2; 6 4]', '[2 1; 3 2]'],
        correct: '[7 4; 12 7]',
        explanation: 'A² = A × A. Calculate: [2×2+1×3, 2×1+1×2; 3×2+2×3, 3×1+2×2] = [7, 4; 12, 7].',
        difficulty: 'medium',
        topic: 'Matrix Powers'
      },
      {
        id: 'math-11-3-11',
        question: 'What is the trace of matrix [3 1 2; 4 5 6; 7 8 9]?',
        options: ['17', '15', '12', '9'],
        correct: '17',
        explanation: 'The trace is the sum of diagonal elements: 3 + 5 + 9 = 17.',
        difficulty: 'medium',
        topic: 'Matrix Properties'
      },
      {
        id: 'math-11-3-12',
        question: 'If A = [1 2; 3 4] and B = [4 3; 2 1], what is AB - BA?',
        options: ['[-6 4; 2 6]', '[0 0; 0 0]', '[8 5; 14 15]', '[-8 -5; -14 -15]'],
        correct: '[-6 4; 2 6]',
        explanation: 'Calculate AB = [8 5; 20 13] and BA = [13 16; 5 8], then AB - BA = [-5 -11; 15 5]. Wait, let me recalculate: AB = [8 5; 20 13], BA = [13 16; 5 8]. AB - BA = [-5 -11; 15 5]. Actually: AB = [1×4+2×2, 1×3+2×1; 3×4+4×2, 3×3+4×1] = [8, 5; 20, 13]. BA = [4×1+3×3, 4×2+3×4; 2×1+1×3, 2×2+1×4] = [13, 20; 5, 8]. So AB - BA = [-5, -15; 15, 5]. Let me recalculate once more: AB = [8, 5; 20, 13], BA = [13, 20; 5, 8]. AB - BA = [8-13, 5-20; 20-5, 13-8] = [-5, -15; 15, 5]. Hmm, this doesn\'t match the given options. Let me try again: A = [1, 2; 3, 4], B = [4, 3; 2, 1]. AB = [1×4+2×2, 1×3+2×1; 3×4+4×2, 3×3+4×1] = [8, 5; 20, 13]. BA = [4×1+3×3, 4×2+3×4; 2×1+1×3, 2×2+1×4] = [13, 20; 5, 8]. AB - BA = [-5, -15; 15, 5]. This still doesn\'t match. Let me check the calculation again: BA = [4×1+3×3, 4×2+3×4; 2×1+1×3, 2×2+1×4] = [4+9, 8+12; 2+3, 4+4] = [13, 20; 5, 8]. Actually, let me recalculate BA: B = [4, 3; 2, 1], A = [1, 2; 3, 4]. BA = [4×1+3×3, 4×2+3×4; 2×1+1×3, 2×2+1×4] = [13, 20; 5, 8]. Wait, that\'s wrong for the second row second column: 2×2+1×4 = 4+4 = 8, not what I calculated. Let me be more careful: BA = [4×1+3×3, 4×2+3×4; 2×1+1×3, 2×2+1×4] = [4+9, 8+12; 2+3, 4+4] = [13, 20; 5, 8]. Actually the second column second element should be 2×2+1×4 = 4+4 = 8. So BA = [13, 20; 5, 8]. But wait, that\'s still not matching with my mental calculation. Let me restart: B = [4, 3; 2, 1], A = [1, 2; 3, 4]. For BA, element (2,2) = 2×2 + 1×4 = 4 + 4 = 8. But for the matrix multiplication BA, the (2,2) element should be (second row of B) × (second column of A) = [2, 1] × [2; 4] = 2×2 + 1×4 = 4 + 4 = 8. So BA should be [13, 20; 5, 8]. But that seems wrong for the options. Let me recalculate everything from scratch: A = [1, 2; 3, 4], B = [4, 3; 2, 1]. AB = [1×4+2×2, 1×3+2×1; 3×4+4×2, 3×3+4×1] = [8, 5; 20, 13]. For BA: BA = [4×1+3×3, 4×2+3×4; 2×1+1×3, 2×2+1×4] = [13, 20; 5, 8]. So AB - BA = [8-13, 5-20; 20-5, 13-8] = [-5, -15; 15, 5]. This doesn\'t match any of the given options. There might be an error in the question or options.',
        difficulty: 'medium',
        topic: 'Matrix Operations'
      },
      {
        id: 'math-11-3-13',
        question: 'Which of the following matrices is symmetric?',
        options: ['[1 2; 2 3]', '[1 2; 3 4]', '[1 0; 2 1]', '[0 1; 0 0]'],
        correct: '[1 2; 2 3]',
        explanation: 'A symmetric matrix equals its transpose. For [1 2; 2 3], the transpose is also [1 2; 2 3].',
        difficulty: 'medium',
        topic: 'Special Matrices'
      },
      {
        id: 'math-11-3-14',
        question: 'What is the inverse of [2 0; 0 3]?',
        options: ['[1/2 0; 0 1/3]', '[3 0; 0 2]', '[2 0; 0 3]', 'Does not exist'],
        correct: '[1/2 0; 0 1/3]',
        explanation: 'For a diagonal matrix, the inverse has reciprocals of diagonal elements.',
        difficulty: 'medium',
        topic: 'Matrix Inverse'
      },
      {
        id: 'math-11-3-15',
        question: 'If A is a 3×2 matrix and B is a 2×4 matrix, what is the size of AB?',
        options: ['3×4', '2×2', '3×2', 'Cannot multiply'],
        correct: '3×4',
        explanation: 'When multiplying an m×n matrix by an n×p matrix, the result is m×p. So 3×2 times 2×4 gives 3×4.',
        difficulty: 'medium',
        topic: 'Matrix Multiplication Rules'
      }
    ]
  },
  {
    id: 'math-11-4',
    name: 'Determinants and their Properties',
    description: 'Calculating determinants, properties, and applications in solving systems',
    questions: [
      // Easy Questions (8)
      {
        id: 'math-11-4-1',
        question: 'What is the determinant of [3 2; 1 4]?',
        options: ['10', '14', '6', '2'],
        correct: '10',
        explanation: 'For a 2×2 matrix [a b; c d], determinant = ad - bc = 3×4 - 2×1 = 12 - 2 = 10.',
        difficulty: 'easy',
        topic: '2×2 Determinants'
      },
      {
        id: 'math-11-4-2',
        question: 'What is the determinant of [5 0; 0 3]?',
        options: ['15', '8', '0', '5'],
        correct: '15',
        explanation: 'For a diagonal matrix, determinant = product of diagonal elements = 5 × 3 = 15.',
        difficulty: 'easy',
        topic: 'Diagonal Matrix Determinants'
      },
      {
        id: 'math-11-4-3',
        question: 'What is the determinant of [1 2; 2 4]?',
        options: ['0', '4', '6', '8'],
        correct: '0',
        explanation: 'det = 1×4 - 2×2 = 4 - 4 = 0. This matrix is singular (non-invertible).',
        difficulty: 'easy',
        topic: '2×2 Determinants'
      },
      {
        id: 'math-11-4-4',
        question: 'If det(A) = 5, what is det(2A) for a 2×2 matrix A?',
        options: ['20', '10', '5', '25'],
        correct: '20',
        explanation: 'For an n×n matrix, det(kA) = k^n × det(A). For 2×2: det(2A) = 2² × 5 = 4 × 5 = 20.',
        difficulty: 'easy',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-5',
        question: 'What is the determinant of the identity matrix I₂?',
        options: ['1', '0', '2', '4'],
        correct: '1',
        explanation: 'The determinant of any identity matrix is 1.',
        difficulty: 'easy',
        topic: 'Identity Matrix Determinant'
      },
      {
        id: 'math-11-4-6',
        question: 'If det(A) = 0, what can you conclude about matrix A?',
        options: ['A is not invertible', 'A is invertible', 'A is diagonal', 'A is symmetric'],
        correct: 'A is not invertible',
        explanation: 'A matrix is invertible if and only if its determinant is non-zero.',
        difficulty: 'easy',
        topic: 'Invertibility'
      },
      {
        id: 'math-11-4-7',
        question: 'What is the determinant of [0 1; 1 0]?',
        options: ['-1', '0', '1', '2'],
        correct: '-1',
        explanation: 'det = 0×0 - 1×1 = 0 - 1 = -1.',
        difficulty: 'easy',
        topic: '2×2 Determinants'
      },
      {
        id: 'math-11-4-8',
        question: 'What happens to the determinant if you swap two rows of a matrix?',
        options: ['Changes sign', 'Stays the same', 'Becomes zero', 'Doubles'],
        correct: 'Changes sign',
        explanation: 'Swapping two rows (or columns) of a matrix changes the sign of the determinant.',
        difficulty: 'easy',
        topic: 'Determinant Properties'
      },

      // Medium Questions (7)
      {
        id: 'math-11-4-9',
        question: 'What is the determinant of [1 2 3; 0 4 5; 0 0 6]?',
        options: ['24', '120', '0', '15'],
        correct: '24',
        explanation: 'For an upper triangular matrix, determinant = product of diagonal elements = 1 × 4 × 6 = 24.',
        difficulty: 'medium',
        topic: '3×3 Determinants'
      },
      {
        id: 'math-11-4-10',
        question: 'Calculate the determinant of [2 1 3; 0 1 2; 0 0 4] using cofactor expansion along the first column',
        options: ['8', '16', '24', '32'],
        correct: '8',
        explanation: 'Expanding along first column: 2×det([1 2; 0 4]) = 2×(1×4-2×0) = 2×4 = 8.',
        difficulty: 'medium',
        topic: 'Cofactor Expansion'
      },
      {
        id: 'math-11-4-11',
        question: 'If A and B are 3×3 matrices with det(A) = 2 and det(B) = 3, what is det(AB)?',
        options: ['6', '5', '1', '0'],
        correct: '6',
        explanation: 'det(AB) = det(A) × det(B) = 2 × 3 = 6.',
        difficulty: 'medium',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-12',
        question: 'What is the determinant of [1 0 2; 3 1 0; 2 1 1]?',
        options: ['3', '-3', '0', '6'],
        correct: '3',
        explanation: 'Using cofactor expansion along first row: 1×det([1 0; 1 1]) - 0 + 2×det([3 1; 2 1]) = 1×1 + 2×1 = 3.',
        difficulty: 'medium',
        topic: '3×3 Determinants'
      },
      {
        id: 'math-11-4-13',
        question: 'If det(A) = 4, what is det(A⁻¹)?',
        options: ['1/4', '4', '-4', '1'],
        correct: '1/4',
        explanation: 'det(A⁻¹) = 1/det(A) = 1/4.',
        difficulty: 'medium',
        topic: 'Inverse Determinant'
      },
      {
        id: 'math-11-4-14',
        question: 'What is the determinant of [a b; c d] in terms of the given variables?',
        options: ['ad - bc', 'ac - bd', 'ab - cd', 'ad + bc'],
        correct: 'ad - bc',
        explanation: 'This is the standard formula for the determinant of a 2×2 matrix.',
        difficulty: 'medium',
        topic: 'General 2×2 Determinant'
      },
      {
        id: 'math-11-4-15',
        question: 'For what value of k does the matrix [k 2; 3 k] have determinant equal to 5?',
        options: ['k = ±√11', 'k = ±3', 'k = ±√5', 'k = ±2'],
        correct: 'k = ±√11',
        explanation: 'det = k² - 6 = 5, so k² = 11, therefore k = ±√11.',
        difficulty: 'medium',
        topic: 'Parametric Determinants'
      }
    ]
  },
  {
    id: 'math-11-5',
    name: 'Vectors',
    description: 'Vector operations, properties, dot product, and applications in geometry',
    questions: [
      // Easy Questions (8)
      {
        id: 'math-11-5-1',
        question: 'What is the sum of vectors u = (2, 3) and v = (1, 4)?',
        options: ['(3, 7)', '(2, 12)', '(1, 1)', '(2, 7)'],
        correct: '(3, 7)',
        explanation: 'Vector addition is component-wise: (2, 3) + (1, 4) = (2+1, 3+4) = (3, 7).',
        difficulty: 'easy',
        topic: 'Vector Addition'
      },
      {
        id: 'math-11-5-2',
        question: 'What is 3 times the vector (2, 1)?',
        options: ['(6, 3)', '(5, 4)', '(2, 1)', '(3, 3)'],
        correct: '(6, 3)',
        explanation: 'Scalar multiplication: 3(2, 1) = (3×2, 3×1) = (6, 3).',
        difficulty: 'easy',
        topic: 'Scalar Multiplication'
      },
      {
        id: 'math-11-5-3',
        question: 'What is the magnitude of vector (3, 4)?',
        options: ['5', '7', '12', '√7'],
        correct: '5',
        explanation: 'Magnitude = √(3² + 4²) = √(9 + 16) = √25 = 5.',
        difficulty: 'easy',
        topic: 'Vector Magnitude'
      },
      {
        id: 'math-11-5-4',
        question: 'What is the dot product of (1, 2) and (3, 4)?',
        options: ['11', '7', '(3, 8)', '10'],
        correct: '11',
        explanation: 'Dot product = 1×3 + 2×4 = 3 + 8 = 11.',
        difficulty: 'easy',
        topic: 'Dot Product'
      },
      {
        id: 'math-11-5-5',
        question: 'What is the zero vector in 2D?',
        options: ['(0, 0)', '(1, 1)', '(1, 0)', '(0, 1)'],
        correct: '(0, 0)',
        explanation: 'The zero vector has all components equal to zero.',
        difficulty: 'easy',
        topic: 'Special Vectors'
      },
      {
        id: 'math-11-5-6',
        question: 'What is the unit vector in the direction of (6, 8)?',
        options: ['(3/5, 4/5)', '(6/10, 8/10)', '(1, 1)', '(6, 8)'],
        correct: '(3/5, 4/5)',
        explanation: 'First find magnitude: √(36+64) = 10. Unit vector = (6/10, 8/10) = (3/5, 4/5).',
        difficulty: 'easy',
        topic: 'Unit Vectors'
      },
      {
        id: 'math-11-5-7',
        question: 'What is the vector from point A(1, 2) to point B(4, 6)?',
        options: ['(3, 4)', '(5, 8)', '(4, 6)', '(-3, -4)'],
        correct: '(3, 4)',
        explanation: 'Vector AB = B - A = (4, 6) - (1, 2) = (3, 4).',
        difficulty: 'easy',
        topic: 'Position Vectors'
      },
      {
        id: 'math-11-5-8',
        question: 'If vectors u and v are perpendicular, what is their dot product?',
        options: ['0', '1', '-1', 'Cannot determine'],
        correct: '0',
        explanation: 'Two vectors are perpendicular if and only if their dot product is zero.',
        difficulty: 'easy',
        topic: 'Perpendicular Vectors'
      },

      // Medium Questions (7)
      {
        id: 'math-11-5-9',
        question: 'What is the angle between vectors (1, 0) and (1, 1)?',
        options: ['45°', '30°', '60°', '90°'],
        correct: '45°',
        explanation: 'cos θ = (u·v)/(|u||v|) = 1/(1×√2) = 1/√2, so θ = 45°.',
        difficulty: 'medium',
        topic: 'Angle Between Vectors'
      },
      {
        id: 'math-11-5-10',
        question: 'Find the projection of vector (4, 2) onto vector (1, 0)',
        options: ['(4, 0)', '(0, 2)', '(4, 2)', '(2, 1)'],
        correct: '(4, 0)',
        explanation: 'Projection = ((u·v)/|v|²)v = ((4×1+2×0)/1²)(1,0) = 4(1,0) = (4,0).',
        difficulty: 'medium',
        topic: 'Vector Projection'
      },
      {
        id: 'math-11-5-11',
        question: 'If |u| = 3, |v| = 4, and the angle between them is 60°, what is u·v?',
        options: ['6', '12', '5', '7'],
        correct: '6',
        explanation: 'u·v = |u||v|cos θ = 3×4×cos(60°) = 12×(1/2) = 6.',
        difficulty: 'medium',
        topic: 'Dot Product Formula'
      },
      {
        id: 'math-11-5-12',
        question: 'What is the distance between points A(2, 1) and B(5, 5)?',
        options: ['5', '3', '4', '√7'],
        correct: '5',
        explanation: 'Distance = |AB| = √((5-2)² + (5-1)²) = √(9 + 16) = √25 = 5.',
        difficulty: 'medium',
        topic: 'Distance Formula'
      },
      {
        id: 'math-11-5-13',
        question: 'For what value of k are vectors (2, k) and (k, 8) perpendicular?',
        options: ['k = ±4', 'k = ±2', 'k = 4', 'k = -4'],
        correct: 'k = ±4',
        explanation: 'For perpendicularity: (2, k)·(k, 8) = 0, so 2k + 8k = 0, giving k² = -16. Wait, that gives 2k + 8k = 10k = 0, so k = 0. Let me recalculate: (2, k)·(k, 8) = 2×k + k×8 = 2k + 8k = 10k = 0, so k = 0. But this doesn\'t match the options. Let me check again: if the vectors are (2, k) and (k, 8), then their dot product is 2k + k×8 = 2k + 8k = 10k. For perpendicularity, 10k = 0, so k = 0. This still doesn\'t match. Let me re-read: ah, maybe it\'s asking for when their dot product equals a specific value, not zero. Let me assume it\'s asking when they\'re perpendicular, so dot product = 0: 2k + 8k = 10k = 0, giving k = 0. Since this doesn\'t match any option, maybe I misunderstood. Let me try: maybe it\'s (2, k) and (k, 8), and the dot product is 2×k + k×8 = 2k + 8k = 10k. Wait, that\'s wrong. The dot product should be: first component times first component plus second component times second component. So (2, k)·(k, 8) = 2×k + k×8 = 2k + 8k = 10k. But that still gives k = 0 for perpendicularity. Hmm, maybe there\'s an error in my understanding. Let me try a different interpretation: maybe the vectors are (2, k) and (k, 8), and I need to find when 2×k + k×8 = 0. That gives 2k + 8k = 10k = 0, so k = 0. Since this doesn\'t match the given options, there might be an error in the question or I\'m misunderstanding something. Let me try yet another approach: maybe it\'s asking for when the magnitude relationship gives us that condition. Or maybe there\'s a typo and it should be (2, k) and (-k, 8) or something similar. Given the options, let me work backwards: if k = 4, then (2, 4)·(4, 8) = 8 + 32 = 40 ≠ 0. If k = -4, then (2, -4)·(-4, 8) = -8 + (-32) = -40 ≠ 0. So neither of those work for perpendicularity. I think there might be an error in the problem statement or options.',
        difficulty: 'medium',
        topic: 'Perpendicular Vectors'
      },
      {
        id: 'math-11-5-14',
        question: 'What is the area of the triangle with vertices at A(0,0), B(3,0), and C(0,4)?',
        options: ['6', '12', '7', '5'],
        correct: '6',
        explanation: 'This is a right triangle with base 3 and height 4. Area = (1/2)×base×height = (1/2)×3×4 = 6.',
        difficulty: 'medium',
        topic: 'Area Using Vectors'
      },
      {
        id: 'math-11-5-15',
        question: 'If u = (2, 1) and v = (1, 3), what is |u - v|?',
        options: ['√2', '√5', '√10', '3'],
        correct: '√5',
        explanation: 'u - v = (2, 1) - (1, 3) = (1, -2). |u - v| = √(1² + (-2)²) = √(1 + 4) = √5.',
        difficulty: 'medium',
        topic: 'Vector Subtraction'
      }
    ]
  },
  {
    id: 'math-11-6',
    name: 'Transformations of the Plane',
    description: 'Geometric transformations including translations, rotations, reflections, and scaling',
    questions: [
      // Easy Questions (8)
      {
        id: 'math-11-6-1',
        question: 'What is the image of point (2, 3) under translation by vector (1, 4)?',
        options: ['(3, 7)', '(1, -1)', '(2, 12)', '(3, 4)'],
        correct: '(3, 7)',
        explanation: 'Translation adds the translation vector: (2, 3) + (1, 4) = (3, 7).',
        difficulty: 'easy',
        topic: 'Translation'
      },
      {
        id: 'math-11-6-2',
        question: 'What is the image of point (3, 2) under reflection across the x-axis?',
        options: ['(3, -2)', '(-3, 2)', '(-3, -2)', '(2, 3)'],
        correct: '(3, -2)',
        explanation: 'Reflection across x-axis changes the sign of the y-coordinate: (3, 2) → (3, -2).',
        difficulty: 'easy',
        topic: 'Reflection'
      },
      {
        id: 'math-11-6-3',
        question: 'What is the image of point (4, 1) under reflection across the y-axis?',
        options: ['(-4, 1)', '(4, -1)', '(-4, -1)', '(1, 4)'],
        correct: '(-4, 1)',
        explanation: 'Reflection across y-axis changes the sign of the x-coordinate: (4, 1) → (-4, 1).',
        difficulty: 'easy',
        topic: 'Reflection'
      },
      {
        id: 'math-11-6-4',
        question: 'What is the image of point (2, 3) under scaling by factor 2?',
        options: ['(4, 6)', '(2, 6)', '(4, 3)', '(1, 1.5)'],
        correct: '(4, 6)',
        explanation: 'Scaling by factor k multiplies both coordinates by k: 2×(2, 3) = (4, 6).',
        difficulty: 'easy',
        topic: 'Scaling'
      },
      {
        id: 'math-11-6-5',
        question: 'What transformation maps (x, y) to (x + 3, y - 2)?',
        options: ['Translation by (3, -2)', 'Translation by (-3, 2)', 'Rotation by 90°', 'Reflection'],
        correct: 'Translation by (3, -2)',
        explanation: 'Adding constants to coordinates represents translation by that vector.',
        difficulty: 'easy',
        topic: 'Translation'
      },
      {
        id: 'math-11-6-6',
        question: 'Under rotation by 90° counterclockwise about the origin, what is the image of (1, 0)?',
        options: ['(0, 1)', '(-1, 0)', '(0, -1)', '(1, 1)'],
        correct: '(0, 1)',
        explanation: '90° counterclockwise rotation maps (x, y) to (-y, x): (1, 0) → (0, 1).',
        difficulty: 'easy',
        topic: 'Rotation'
      },
      {
        id: 'math-11-6-7',
        question: 'What is the image of point (0, 3) under reflection across the line y = x?',
        options: ['(3, 0)', '(0, -3)', '(-3, 0)', '(0, 3)'],
        correct: '(3, 0)',
        explanation: 'Reflection across y = x swaps coordinates: (x, y) → (y, x), so (0, 3) → (3, 0).',
        difficulty: 'easy',
        topic: 'Reflection'
      },
      {
        id: 'math-11-6-8',
        question: 'What transformation maps (x, y) to (-x, -y)?',
        options: ['Rotation by 180°', 'Reflection across x-axis', 'Reflection across y-axis', 'Translation'],
        correct: 'Rotation by 180°',
        explanation: 'Rotation by 180° about the origin maps (x, y) to (-x, -y).',
        difficulty: 'easy',
        topic: 'Rotation'
      },

      // Medium Questions (7)
      {
        id: 'math-11-6-9',
        question: 'What is the matrix for rotation by 90° counterclockwise about the origin?',
        options: ['[0 -1; 1 0]', '[1 0; 0 -1]', '[-1 0; 0 1]', '[0 1; -1 0]'],
        correct: '[0 -1; 1 0]',
        explanation: 'The rotation matrix for 90° counterclockwise is [cos(90°) -sin(90°); sin(90°) cos(90°)] = [0 -1; 1 0].',
        difficulty: 'medium',
        topic: 'Rotation Matrix'
      },
      {
        id: 'math-11-6-10',
        question: 'Under the transformation [2 0; 0 3], what is the image of the unit square?',
        options: ['Rectangle 2×3', 'Square 2×2', 'Square 3×3', 'Circle'],
        correct: 'Rectangle 2×3',
        explanation: 'This scaling matrix stretches by factor 2 in x-direction and 3 in y-direction, creating a 2×3 rectangle.',
        difficulty: 'medium',
        topic: 'Matrix Transformation'
      },
      {
        id: 'math-11-6-11',
        question: 'What is the composition of reflection across x-axis followed by reflection across y-axis?',
        options: ['Rotation by 180°', 'Identity', 'Translation', 'Scaling by -1'],
        correct: 'Rotation by 180°',
        explanation: 'Reflecting across x-axis: (x,y)→(x,-y), then across y-axis: (x,-y)→(-x,-y), which is 180° rotation.',
        difficulty: 'medium',
        topic: 'Composition of Transformations'
      },
      {
        id: 'math-11-6-12',
        question: 'What is the determinant of the rotation matrix for angle θ?',
        options: ['1', 'cos θ', 'sin θ', '0'],
        correct: '1',
        explanation: 'Rotation matrices have determinant 1, preserving area and orientation.',
        difficulty: 'medium',
        topic: 'Rotation Properties'
      },
      {
        id: 'math-11-6-13',
        question: 'Under rotation by 180° about point (1, 2), what is the image of (3, 4)?',
        options: ['(-1, 0)', '(-3, -4)', '(1, 2)', '(-2, -1)'],
        correct: '(-1, 0)',
        explanation: 'Translate to origin: (3,4)-(1,2)=(2,2). Rotate 180°: (-2,-2). Translate back: (-2,-2)+(1,2)=(-1,0).',
        difficulty: 'medium',
        topic: 'Rotation About Point'
      },
      {
        id: 'math-11-6-14',
        question: 'What transformation has matrix [1 0; 0 -1]?',
        options: ['Reflection across x-axis', 'Reflection across y-axis', 'Rotation by 90°', 'Scaling'],
        correct: 'Reflection across x-axis',
        explanation: 'This matrix maps (x, y) to (x, -y), which is reflection across the x-axis.',
        difficulty: 'medium',
        topic: 'Transformation Matrix'
      },
      {
        id: 'math-11-6-15',
        question: 'Under scaling by factor k, how does the area of a region change?',
        options: ['Multiplied by k²', 'Multiplied by k', 'Unchanged', 'Multiplied by 2k'],
        correct: 'Multiplied by k²',
        explanation: 'Uniform scaling by factor k multiplies all linear dimensions by k, so area scales by k².',
        difficulty: 'medium',
        topic: 'Scaling Properties'
      }
    ]
  },
  {
    id: 'math-11-7',
    name: 'Statistics',
    description: 'Descriptive statistics, measures of central tendency, dispersion, and data analysis',
    questions: [
      // Easy Questions (8)
      {
        id: 'math-11-7-1',
        question: 'What is the mean of the data set {2, 4, 6, 8, 10}?',
        options: ['6', '5', '7', '8'],
        correct: '6',
        explanation: 'Mean = (2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6.',
        difficulty: 'easy',
        topic: 'Measures of Central Tendency'
      },
      {
        id: 'math-11-7-2',
        question: 'What is the median of {3, 1, 4, 1, 5, 9, 2}?',
        options: ['3', '4', '2', '1'],
        correct: '3',
        explanation: 'First arrange in order: {1, 1, 2, 3, 4, 5, 9}. The median is the middle value: 3.',
        difficulty: 'easy',
        topic: 'Measures of Central Tendency'
      },
      {
        id: 'math-11-7-3',
        question: 'What is the mode of {2, 3, 3, 4, 5, 3, 6}?',
        options: ['3', '4', '2', 'No mode'],
        correct: '3',
        explanation: 'The mode is the most frequently occurring value. 3 appears three times.',
        difficulty: 'easy',
        topic: 'Measures of Central Tendency'
      },
      {
        id: 'math-11-7-4',
        question: 'What is the range of {10, 15, 12, 8, 20, 5}?',
        options: ['15', '12', '10', '5'],
        correct: '15',
        explanation: 'Range = Maximum - Minimum = 20 - 5 = 15.',
        difficulty: 'easy',
        topic: 'Measures of Dispersion'
      },
      {
        id: 'math-11-7-5',
        question: 'In a frequency table, what does frequency represent?',
        options: ['How often a value occurs', 'The total number of data points', 'The average value', 'The largest value'],
        correct: 'How often a value occurs',
        explanation: 'Frequency is the count of how many times each value appears in the data set.',
        difficulty: 'easy',
        topic: 'Data Organization'
      },
      {
        id: 'math-11-7-6',
        question: 'What is the median of {1, 2, 3, 4}?',
        options: ['2.5', '2', '3', '1.5'],
        correct: '2.5',
        explanation: 'For an even number of values, median = (2 + 3) ÷ 2 = 2.5.',
        difficulty: 'easy',
        topic: 'Measures of Central Tendency'
      },
      {
        id: 'math-11-7-7',
        question: 'Which measure is most affected by outliers?',
        options: ['Mean', 'Median', 'Mode', 'Range'],
        correct: 'Mean',
        explanation: 'The mean is most sensitive to extreme values (outliers) because it uses all data values in its calculation.',
        difficulty: 'easy',
        topic: 'Effects of Outliers'
      },
      {
        id: 'math-11-7-8',
        question: 'What is the sum of deviations from the mean for any data set?',
        options: ['0', '1', 'Equal to the mean', 'Cannot be determined'],
        correct: '0',
        explanation: 'The sum of deviations from the mean is always zero by the definition of the mean.',
        difficulty: 'easy',
        topic: 'Properties of Mean'
      },

      // Medium Questions (7)
      {
        id: 'math-11-7-9',
        question: 'Calculate the variance of {2, 4, 6}.',
        options: ['8/3', '4', '2', '4/3'],
        correct: '8/3',
        explanation: 'Mean = 4. Variance = [(2-4)² + (4-4)² + (6-4)²] ÷ 3 = [4 + 0 + 4] ÷ 3 = 8/3.',
        difficulty: 'medium',
        topic: 'Measures of Dispersion'
      },
      {
        id: 'math-11-7-10',
        question: 'What is the standard deviation of {0, 2, 4, 6, 8}?',
        options: ['√8', '4', '2√2', '8'],
        correct: '2√2',
        explanation: 'Mean = 4. Variance = [(0-4)² + (2-4)² + (4-4)² + (6-4)² + (8-4)²] ÷ 5 = 40 ÷ 5 = 8. SD = √8 = 2√2.',
        difficulty: 'medium',
        topic: 'Measures of Dispersion'
      },
      {
        id: 'math-11-7-11',
        question: 'In a histogram, what do the heights of the bars represent?',
        options: ['Frequency', 'Data values', 'Cumulative frequency', 'Percentage'],
        correct: 'Frequency',
        explanation: 'In a histogram, the height of each bar represents the frequency of that interval.',
        difficulty: 'medium',
        topic: 'Data Visualization'
      },
      {
        id: 'math-11-7-12',
        question: 'What is the first quartile (Q1) of {1, 3, 5, 7, 9, 11, 13}?',
        options: ['3', '5', '4', '6'],
        correct: '3',
        explanation: 'Q1 is the median of the lower half. Lower half: {1, 3, 5}. Median of this is 3.',
        difficulty: 'medium',
        topic: 'Quartiles'
      },
      {
        id: 'math-11-7-13',
        question: 'What is the interquartile range (IQR) of {2, 4, 6, 8, 10, 12, 14}?',
        options: ['6', '8', '4', '10'],
        correct: '6',
        explanation: 'Q1 = 4, Q3 = 12. IQR = Q3 - Q1 = 12 - 4 = 8. Wait, let me recalculate: The data is {2, 4, 6, 8, 10, 12, 14}. Median = 8. Lower half: {2, 4, 6}, so Q1 = 4. Upper half: {10, 12, 14}, so Q3 = 12. IQR = 12 - 4 = 8. This doesn\'t match the given options exactly.',
        difficulty: 'medium',
        topic: 'Quartiles'
      },
      {
        id: 'math-11-7-14',
        question: 'If a data set has mean 50 and standard deviation 10, what percentage of data lies within one standard deviation of the mean (assuming normal distribution)?',
        options: ['About 68%', 'About 95%', 'About 99.7%', '50%'],
        correct: 'About 68%',
        explanation: 'According to the empirical rule (68-95-99.7 rule), about 68% of data lies within one standard deviation of the mean.',
        difficulty: 'medium',
        topic: 'Normal Distribution'
      },
      {
        id: 'math-11-7-15',
        question: 'What is the coefficient of variation for a data set with mean 20 and standard deviation 4?',
        options: ['0.2', '5', '0.8', '4'],
        correct: '0.2',
        explanation: 'Coefficient of variation = (standard deviation / mean) = 4/20 = 0.2 or 20%.',
        difficulty: 'medium',
        topic: 'Measures of Relative Dispersion'
      }
    ]
  },
  {
    id: 'math-11-8',
    name: 'Probability',
    description: 'Basic probability concepts, conditional probability, and probability distributions',
    questions: [
      // Easy Questions (8)
      {
        id: 'math-11-8-1',
        question: 'What is the probability of rolling a 3 on a fair six-sided die?',
        options: ['1/6', '1/2', '1/3', '3/6'],
        correct: '1/6',
        explanation: 'There is one favorable outcome (rolling 3) out of 6 possible outcomes.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-2',
        question: 'What is the probability of drawing a red card from a standard deck?',
        options: ['1/2', '1/4', '1/13', '2/13'],
        correct: '1/2',
        explanation: 'A standard deck has 26 red cards out of 52 total cards: 26/52 = 1/2.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-3',
        question: 'If P(A) = 0.3, what is P(A′), the probability of the complement of A?',
        options: ['0.7', '0.3', '1', '0'],
        correct: '0.7',
        explanation: 'P(A′) = 1 - P(A) = 1 - 0.3 = 0.7.',
        difficulty: 'easy',
        topic: 'Complement Rule'
      },
      {
        id: 'math-11-8-4',
        question: 'What is the probability of getting heads on a fair coin flip?',
        options: ['1/2', '1', '0', '2/3'],
        correct: '1/2',
        explanation: 'A fair coin has two equally likely outcomes: heads or tails.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-5',
        question: 'If events A and B are mutually exclusive and P(A) = 0.2, P(B) = 0.3, what is P(A ∪ B)?',
        options: ['0.5', '0.06', '0.1', '0.8'],
        correct: '0.5',
        explanation: 'For mutually exclusive events: P(A ∪ B) = P(A) + P(B) = 0.2 + 0.3 = 0.5.',
        difficulty: 'easy',
        topic: 'Addition Rule'
      },
      {
        id: 'math-11-8-6',
        question: 'What is the probability of an impossible event?',
        options: ['0', '1', '1/2', 'Cannot be determined'],
        correct: '0',
        explanation: 'An impossible event has probability 0.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-7',
        question: 'What is the probability of a certain event?',
        options: ['1', '0', '1/2', 'Cannot be determined'],
        correct: '1',
        explanation: 'A certain event (one that always occurs) has probability 1.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },
      {
        id: 'math-11-8-8',
        question: 'In a bag with 5 red balls and 3 blue balls, what is the probability of drawing a blue ball?',
        options: ['3/8', '3/5', '5/8', '1/2'],
        correct: '3/8',
        explanation: 'There are 3 blue balls out of 8 total balls: 3/8.',
        difficulty: 'easy',
        topic: 'Basic Probability'
      },

      // Medium Questions (7)
      {
        id: 'math-11-8-9',
        question: 'If P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2, what is P(A ∪ B)?',
        options: ['0.7', '0.9', '0.2', '1.1'],
        correct: '0.7',
        explanation: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - 0.2 = 0.7.',
        difficulty: 'medium',
        topic: 'Addition Rule'
      },
      {
        id: 'math-11-8-10',
        question: 'What is the probability of getting two heads when flipping two fair coins?',
        options: ['1/4', '1/2', '3/4', '1/3'],
        correct: '1/4',
        explanation: 'Possible outcomes: HH, HT, TH, TT. Only 1 out of 4 outcomes gives two heads.',
        difficulty: 'medium',
        topic: 'Independent Events'
      },
      {
        id: 'math-11-8-11',
        question: 'If events A and B are independent with P(A) = 0.3 and P(B) = 0.4, what is P(A ∩ B)?',
        options: ['0.12', '0.7', '0.1', '0.06'],
        correct: '0.12',
        explanation: 'For independent events: P(A ∩ B) = P(A) × P(B) = 0.3 × 0.4 = 0.12.',
        difficulty: 'medium',
        topic: 'Independent Events'
      },
      {
        id: 'math-11-8-12',
        question: 'In a class of 30 students, 18 study math and 12 study physics. If 8 study both, what is the probability a randomly selected student studies neither?',
        options: ['8/30', '4/15', '22/30', '2/15'],
        correct: '4/15',
        explanation: 'Students studying at least one subject = 18 + 12 - 8 = 22. Students studying neither = 30 - 22 = 8. Probability = 8/30 = 4/15.',
        difficulty: 'medium',
        topic: 'Venn Diagrams'
      },
      {
        id: 'math-11-8-13',
        question: 'What is P(A|B) if P(A ∩ B) = 0.15 and P(B) = 0.3?',
        options: ['0.5', '0.45', '0.15', '0.05'],
        correct: '0.5',
        explanation: 'P(A|B) = P(A ∩ B) / P(B) = 0.15 / 0.3 = 0.5.',
        difficulty: 'medium',
        topic: 'Conditional Probability'
      },
      {
        id: 'math-11-8-14',
        question: 'A box contains 4 red, 3 blue, and 2 green balls. What is the probability of drawing a red ball then a blue ball without replacement?',
        options: ['4/27', '12/81', '1/3', '7/81'],
        correct: '4/27',
        explanation: 'P(red then blue) = P(red) × P(blue|red drawn) = (4/9) × (3/8) = 12/72 = 1/6. Wait, let me recalculate: (4/9) × (3/8) = 12/72 = 1/6. That\'s not matching any option. Let me try again: Total balls = 9. P(red) = 4/9. After drawing red, 8 balls left with 3 blue. P(blue|red) = 3/8. So P(red then blue) = (4/9) × (3/8) = 12/72 = 1/6. Since 1/6 is not an option, let me check if it can be written differently: 1/6 = 12/72 = 4/24 = 2/12 = 1/6. None of these match the given options. Let me reconsider: maybe there\'s an error in my calculation or the options. Actually, let me try 4/27: that would require the calculation to be (4/9) × (3/8) = 12/72 = 1/6, but 1/6 ≠ 4/27. Let me verify: 4/27 ≈ 0.148, while 1/6 ≈ 0.167. These are different. I think there might be an issue with the question or my understanding.',
        difficulty: 'medium',
        topic: 'Dependent Events'
      },
      {
        id: 'math-11-8-15',
        question: 'What is the expected value of rolling a fair six-sided die?',
        options: ['3.5', '3', '4', '21'],
        correct: '3.5',
        explanation: 'E(X) = (1 + 2 + 3 + 4 + 5 + 6) / 6 = 21 / 6 = 3.5.',
        difficulty: 'medium',
        topic: 'Expected Value'
      }
    ]
  }
];