import { Chapter } from '../../types';

export const grade11MathematicsChapters: Chapter[] = [
  {
    id: 'math-11-1',
    name: 'Relations and Functions',
    description: 'Understanding relations and functions, their properties and applications',
    questions: [
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
        question: 'If f(x) = 2x + 3 and g(x) = x², what is (f∘g)(x)?',
        options: ['2x² + 3', '2x + 3x²', '(2x + 3)²', '2(x + 3)²'],
        correct: '2x² + 3',
        explanation: '(f∘g)(x) = f(g(x)) = f(x²) = 2(x²) + 3 = 2x² + 3',
        difficulty: 'medium',
        topic: 'Function Composition'
      }
    ]
  },
  {
    id: 'math-11-2',
    name: 'Rational Expression and Rational Functions',
    description: 'Working with rational expressions, equations, and functions',
    questions: [
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
        question: 'Solve: 1/x + 1/(x+1) = 2/3',
        options: ['x = 1/2', 'x = 2', 'x = 1/2 or x = -3/2', 'x = 3/2'],
        correct: 'x = 1/2 or x = -3/2',
        explanation: 'Multiply by common denominator 3x(x+1): 3(x+1) + 3x = 2x(x+1), which gives 2x² - 4x - 3 = 0.',
        difficulty: 'medium',
        topic: 'Rational Equations'
      },
      {
        id: 'math-11-2-4',
        question: 'Find the vertical asymptote of f(x) = (x+1)/(x-2)',
        options: ['x = -1', 'x = 2', 'x = 1', 'x = -2'],
        correct: 'x = 2',
        explanation: 'Vertical asymptotes occur where the denominator is zero and numerator is non-zero.',
        difficulty: 'medium',
        topic: 'Asymptotes'
      },
      {
        id: 'math-11-2-5',
        question: 'What is the horizontal asymptote of f(x) = (3x² + 1)/(x² - 4)?',
        options: ['y = 0', 'y = 1', 'y = 3', 'y = -4'],
        correct: 'y = 3',
        explanation: 'For rational functions where degrees are equal, the horizontal asymptote is the ratio of leading coefficients: 3/1 = 3.',
        difficulty: 'hard',
        topic: 'Asymptotes'
      }
    ]
  },
  {
    id: 'math-11-3',
    name: 'Matrices',
    description: 'Matrix operations, properties, and applications',
    questions: [
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
        question: 'If A = [[2, 1], [3, 4]] and B = [[1, 0], [2, 1]], what is AB?',
        options: ['[[4, 1], [11, 4]]', '[[2, 0], [6, 4]]', '[[3, 1], [5, 5]]', '[[2, 1], [6, 4]]'],
        correct: '[[4, 1], [11, 4]]',
        explanation: 'Matrix multiplication: (2×1+1×2, 2×0+1×1), (3×1+4×2, 3×0+4×1) = (4, 1), (11, 4).',
        difficulty: 'medium',
        topic: 'Matrix Multiplication'
      },
      {
        id: 'math-11-3-5',
        question: 'What is the inverse of [[1, 2], [3, 4]]?',
        options: ['Matrix [[-2, 1], [3/2, -1/2]]', 'Matrix [[4, -2], [-3, 1]]', 'Matrix [[-1/2, 1/2], [3/4, -1/4]]', 'Matrix [[1/4, -1/2], [-3/4, 1/2]]'],
        correct: 'Matrix [[-2, 1], [3/2, -1/2]]',
        explanation: 'For 2×2 matrix [[a,b],[c,d]], inverse is (1/det)[[d,-b],[-c,a]]. Det = 1×4-2×3 = -2.',
        difficulty: 'hard',
        topic: 'Matrix Inverse'
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
        question: 'If det(A) = 5, what is det(2A)?',
        options: ['10', '25', '20', '5'],
        correct: '20',
        explanation: 'For 2×2 matrix, det(kA) = k² det(A). So det(2A) = 2² × 5 = 4 × 5 = 20.',
        difficulty: 'medium',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-3',
        question: 'What is the determinant of [[1, 2, 3], [0, 4, 5], [0, 0, 6]]?',
        options: ['24', '30', '120', '6'],
        correct: '24',
        explanation: 'For upper triangular matrix, determinant is the product of diagonal elements: 1×4×6 = 24.',
        difficulty: 'easy',
        topic: '3×3 Determinants'
      },
      {
        id: 'math-11-4-4',
        question: 'If two rows of a matrix are identical, what is its determinant?',
        options: ['0', '1', '-1', 'Cannot be determined'],
        correct: '0',
        explanation: 'If a matrix has two identical rows (or columns), its determinant is always 0.',
        difficulty: 'easy',
        topic: 'Determinant Properties'
      },
      {
        id: 'math-11-4-5',
        question: 'Calculate det([[1, 2, 3], [4, 5, 6], [7, 8, 9]])',
        options: ['0', '1', '-1', '45'],
        correct: '0',
        explanation: 'This matrix has linearly dependent rows (each row is an arithmetic progression), so determinant = 0.',
        difficulty: 'medium',
        topic: '3×3 Determinants'
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