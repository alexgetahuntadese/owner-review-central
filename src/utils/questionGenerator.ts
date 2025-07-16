
import { Question } from '@/data/types';

// Define the template structure
interface QuestionTemplate {
  template: string;
  generateOptions: (param?: any) => string[];
  explanation: string;
}

// Question templates for different subjects and difficulties
const questionTemplates = {
  mathematics: {
    functions: {
      easy: [
        {
          template: "What is f({x}) if f(x) = {equation}?",
          generateOptions: (correct: number) => [correct.toString(), (correct + 1).toString(), (correct - 1).toString(), (correct + 2).toString()],
          explanation: "Substitute x = {x} into the equation."
        },
        {
          template: "What is the domain of f(x) = 1/(x - {a})?",
          generateOptions: (a: number) => [`All real numbers except ${a}`, 'All real numbers', `Only x > ${a}`, `Only x < ${a}`],
          explanation: "Division by zero is undefined, so x cannot equal {a}."
        },
        {
          template: "What is the range of f(x) = x² + {c}?",
          generateOptions: (c: number) => [`y ≥ ${c}`, `y ≤ ${c}`, 'All real numbers', `y > ${c}`],
          explanation: "This is an upward parabola with vertex at (0, {c})."
        }
      ],
      medium: [
        {
          template: "If f(x) = {a}x + {b} and g(x) = x², what is (f ∘ g)({x})?",
          generateOptions: (result: number) => [result.toString(), (result + 5).toString(), (result - 5).toString(), (result * 2).toString()],
          explanation: "First find g({x}), then apply f to that result."
        },
        {
          template: "What is the inverse of f(x) = {a}x + {b}?",
          generateOptions: (a: number, b: number) => [
            `f⁻¹(x) = (x - ${b})/${a}`,
            `f⁻¹(x) = ${a}x - ${b}`,
            `f⁻¹(x) = (x + ${b})/${a}`,
            `f⁻¹(x) = x/${a} + ${b}`
          ],
          explanation: "To find the inverse, solve y = {a}x + {b} for x."
        }
      ],
      hard: [
        {
          template: "What is the limit of (x² - {a²})/(x - {a}) as x approaches {a}?",
          generateOptions: (a: number) => [(2 * a).toString(), a.toString(), '0', (a * a).toString()],
          explanation: "Factor the numerator and simplify before taking the limit."
        },
        {
          template: "If f(x) = ln(x² + {c}), what is f'(x)?",
          generateOptions: (c: number) => [
            `2x/(x² + ${c})`,
            `1/(x² + ${c})`,
            '2x',
            `ln(2x + ${c})`
          ],
          explanation: "Use the chain rule for differentiation."
        }
      ]
    }
  },
  physics: {
    mechanics: {
      easy: [
        {
          template: "A car travels {distance} meters in {time} seconds. What is its average speed?",
          generateOptions: (speed: number) => [speed.toString(), (speed + 5).toString(), (speed - 5).toString(), (speed * 2).toString()],
          explanation: "Speed = distance/time = {distance}/{time} = {result} m/s"
        },
        {
          template: "What is the acceleration of an object that changes velocity from {v1} m/s to {v2} m/s in {t} seconds?",
          generateOptions: (acc: number) => [acc.toString(), (acc + 1).toString(), (acc - 1).toString(), (acc * 2).toString()],
          explanation: "Acceleration = (final velocity - initial velocity)/time"
        },
        {
          template: "What is the kinetic energy of a {mass} kg object moving at {velocity} m/s?",
          generateOptions: (ke: number) => [ke.toString(), (ke + 50).toString(), (ke - 50).toString(), (ke * 2).toString()],
          explanation: "KE = ½mv² = ½ × {mass} × {velocity}² = {result} J"
        }
      ],
      medium: [
        {
          template: "A projectile is launched at {angle}° with initial velocity {v0} m/s. What is its range?",
          generateOptions: (range: number) => [range.toString(), (range + 10).toString(), (range - 10).toString(), (range * 1.5).toString()],
          explanation: "Range = v₀²sin(2θ)/g for projectile motion."
        },
        {
          template: "What is the centripetal force on a {mass} kg object moving in a circle of radius {radius} m at {speed} m/s?",
          generateOptions: (force: number) => [force.toString(), (force + 20).toString(), (force - 20).toString(), (force * 2).toString()],
          explanation: "Fc = mv²/r = {mass} × {speed}²/{radius} = {result} N"
        }
      ],
      hard: [
        {
          template: "Two objects collide elastically. Object 1 (m₁ = {m1} kg, v₁ = {v1} m/s) hits object 2 (m₂ = {m2} kg, v₂ = 0). What is v₁ after collision?",
          generateOptions: (v1f: number) => [v1f.toString(), (v1f + 1).toString(), (v1f - 1).toString(), (v1f * 2).toString()],
          explanation: "Use conservation of momentum and energy for elastic collisions."
        },
        {
          template: "What is the orbital period of a satellite at height h = {h}R above Earth's surface?",
          generateOptions: () => ["√8 times Earth period", "√2 times longer", "2 times longer", "3 times longer"],
          explanation: "Use Kepler's third law: T ∝ r^(3/2)"
        }
      ]
    }
  },
  chemistry: {
    atomic_structure: {
      easy: [
        {
          template: "How many electrons can the {shell} electron shell hold?",
          generateOptions: (electrons: number) => [electrons.toString(), (electrons + 2).toString(), (electrons - 2).toString(), (electrons * 2).toString()],
          explanation: "The {shell} shell can hold up to {electrons} electrons."
        },
        {
          template: "What is the atomic mass of an atom with {protons} protons and {neutrons} neutrons?",
          generateOptions: (mass: number) => [mass.toString(), (mass + 1).toString(), (mass - 1).toString(), (mass + 2).toString()],
          explanation: "Atomic mass = protons + neutrons = {protons} + {neutrons} = {mass}"
        },
        {
          template: "What is the charge of an ion with {protons} protons and {electrons} electrons?",
          generateOptions: (charge: string) => [charge, "+1", "-1", "0"],
          explanation: "Charge = protons - electrons = {protons} - {electrons} = {charge}"
        }
      ],
      medium: [
        {
          template: "What is the electron configuration of element with atomic number {z}?",
          generateOptions: (config: string) => [config, "1s² 2s² 2p⁴", "1s² 2s⁴", "1s² 2p⁶"],
          explanation: "Fill orbitals in order of increasing energy following Aufbau principle."
        },
        {
          template: "How many orbitals are in the {subshell} subshell?",
          generateOptions: (orbitals: number) => [orbitals.toString(), (orbitals + 1).toString(), (orbitals - 1).toString(), (orbitals * 2).toString()],
          explanation: "The {subshell} subshell contains {orbitals} orbitals."
        }
      ],
      hard: [
        {
          template: "What is the effective nuclear charge for a {orbital} electron in element Z = {z}?",
          generateOptions: (zeff: number) => [zeff.toString(), (zeff + 0.5).toString(), (zeff - 0.5).toString(), (zeff + 1).toString()],
          explanation: "Use Slater's rules to calculate effective nuclear charge."
        },
        {
          template: "How many unpaired electrons does element Z = {z} have in its ground state?",
          generateOptions: (unpaired: number) => [unpaired.toString(), (unpaired + 1).toString(), (unpaired - 1).toString(), (unpaired + 2).toString()],
          explanation: "Use Hund's rule to determine electron arrangement."
        }
      ]
    }
  },
  biology: {
    cell_biology: {
      easy: [
        {
          template: "Which organelle is responsible for {func} in the cell?",
          generateOptions: (correct: string) => [correct, "Nucleus", "Ribosome", "Cytoplasm"],
          explanation: "{correct} is responsible for {func} in cells."
        },
        {
          template: "What is the approximate size of a typical {cellType} cell?",
          generateOptions: (size: string) => [size, "0.1-1 μm", "100-1000 μm", "1-10 mm"],
          explanation: "{cellType} cells are typically {size} in diameter."
        }
      ],
      medium: [
        {
          template: "Which type of transport moves {substance} across the cell membrane?",
          generateOptions: (transport: string) => [transport, "Simple diffusion", "Facilitated diffusion", "Active transport"],
          explanation: "{substance} crosses membranes via {transport}."
        },
        {
          template: "In which phase of mitosis do chromosomes align at the {location}?",
          generateOptions: (phase: string) => [phase, "Prophase", "Anaphase", "Telophase"],
          explanation: "Chromosome alignment occurs during {phase}."
        }
      ],
      hard: [
        {
          template: "What is the function of {protein} in cellular {process}?",
          generateOptions: (func: string) => [func, "Energy production", "DNA replication", "Waste removal"],
          explanation: "{protein} plays a crucial role in {process}."
        },
        {
          template: "Which cytoskeletal element has a diameter of approximately {diameter} nm?",
          generateOptions: (element: string) => [element, "Microfilaments", "Intermediate filaments", "Microtubules"],
          explanation: "{element} have a characteristic diameter of {diameter} nm."
        }
      ]
    }
  },
  history: {
    ancient_ethiopia: {
      easy: [
        {
          template: "Which ancient Ethiopian kingdom was established around {year} CE?",
          generateOptions: (kingdom: string) => [kingdom, "Zagwe", "Solomonic", "Gondar"],
          explanation: "The {kingdom} kingdom was established around {year} CE."
        },
        {
          template: "What was the primary religion of ancient Ethiopia after the {century} century?",
          generateOptions: (religion: string) => [religion, "Islam", "Judaism", "Traditional beliefs"],
          explanation: "{religion} became the dominant religion after the {century} century."
        }
      ],
      medium: [
        {
          template: "Which ruler of {kingdom} was known for {achievement}?",
          generateOptions: (ruler: string) => [ruler, "King Ezana", "King Lalibela", "Queen Makeda"],
          explanation: "{ruler} of {kingdom} was famous for {achievement}."
        },
        {
          template: "What was the capital of the {dynasty} dynasty?",
          generateOptions: (capital: string) => [capital, "Axum", "Gondar", "Addis Ababa"],
          explanation: "{capital} served as the capital of the {dynasty} dynasty."
        }
      ],
      hard: [
        {
          template: "Which inscription from {period} provides evidence of {event}?",
          generateOptions: (inscription: string) => [inscription, "RIE 185", "RIE 270", "Adulis Inscription"],
          explanation: "The {inscription} inscription documents {event} during {period}."
        },
        {
          template: "What was the relationship between {kingdom1} and {kingdom2} during the {century} century?",
          generateOptions: (relationship: string) => [relationship, "Allied", "Neutral", "Tributary"],
          explanation: "{kingdom1} and {kingdom2} were {relationship} during the {century} century."
        }
      ]
    }
  }
};

// Random number generators
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomChoice = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

// Generate random values for different types
const generateRandomValues = () => ({
  number: randomInt(1, 20),
  smallNumber: randomInt(1, 10),
  largeNumber: randomInt(10, 100),
  angle: randomChoice([30, 45, 60, 90]),
  mass: randomChoice([1, 2, 5, 10, 20, 50]),
  velocity: randomChoice([5, 10, 15, 20, 25, 30]),
  distance: randomChoice([10, 20, 50, 100, 200]),
  time: randomChoice([2, 5, 10, 20]),
  element: randomChoice(['Carbon', 'Nitrogen', 'Oxygen', 'Sodium']),
  organelle: randomChoice(['Mitochondria', 'Nucleus', 'Ribosome', 'Chloroplast']),
  kingdom: randomChoice(['Axum', 'Zagwe', 'Solomonic']),
  ruler: randomChoice(['King Ezana', 'King Lalibela', 'Queen Makeda'])
});

// Generate a single question
export const generateQuestion = (
  subject: string,
  chapterId: string,
  difficulty: 'easy' | 'medium' | 'hard',
  questionIndex: number
): Question => {
  const templates = questionTemplates[subject as keyof typeof questionTemplates]?.[chapterId]?.[difficulty] as QuestionTemplate[];
  
  if (!templates || templates.length === 0) {
    // Fallback generic question
    return {
      id: `generated_${subject}_${chapterId}_${difficulty}_${questionIndex}`,
      question: `What is a key concept in ${chapterId}?`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: 'Option A',
      explanation: 'This is a generated question for practice.',
      difficulty
    };
  }

  const template = randomChoice(templates);
  const values = generateRandomValues();
  
  // Replace placeholders in template
  let question = template.template;
  let explanation = template.explanation;
  
  // Replace common placeholders
  Object.entries(values).forEach(([key, value]) => {
    const placeholder = `{${key}}`;
    question = question.replace(new RegExp(placeholder, 'g'), value.toString());
    explanation = explanation.replace(new RegExp(placeholder, 'g'), value.toString());
  });

  // Generate specific values based on question type
  let correctAnswer: string;
  let options: string[];

  if (question.includes('f(')) {
    // Function evaluation question
    const x = values.smallNumber;
    const a = values.smallNumber;
    const b = values.smallNumber;
    const result = a * x + b;
    
    question = question.replace('{x}', x.toString()).replace('{equation}', `${a}x + ${b}`);
    explanation = explanation.replace('{x}', x.toString());
    
    options = template.generateOptions(result);
    correctAnswer = result.toString();
  } else if (question.includes('speed') || question.includes('acceleration')) {
    // Physics calculation
    const result = values.distance / values.time;
    options = template.generateOptions(result);
    correctAnswer = result.toString();
  } else {
    // Default case
    options = template.generateOptions(values.number);
    correctAnswer = options[0];
  }

  return {
    id: `generated_${subject}_${chapterId}_${difficulty}_${questionIndex}_${Date.now()}`,
    question,
    options,
    correct: correctAnswer,
    explanation,
    difficulty
  };
};

// Generate multiple questions for a chapter
export const generateQuestionsForChapter = (
  subject: string,
  chapterId: string,
  difficulty: 'easy' | 'medium' | 'hard',
  count: number = 10
): Question[] => {
  const questions: Question[] = [];
  
  for (let i = 0; i < count; i++) {
    questions.push(generateQuestion(subject, chapterId, difficulty, i));
  }
  
  return questions;
};

// Generate questions for all difficulties
export const generateAllQuestionsForChapter = (
  subject: string,
  chapterId: string
): Question[] => {
  const allQuestions: Question[] = [];
  
  const difficulties: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard'];
  
  difficulties.forEach(difficulty => {
    allQuestions.push(...generateQuestionsForChapter(subject, chapterId, difficulty, 10));
  });
  
  return allQuestions;
};
