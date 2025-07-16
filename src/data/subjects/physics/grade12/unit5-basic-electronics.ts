
import { Question } from '../../../types';

export const unit5BasicElectronics: Question[] = [
  // Easy Questions (10)
  {
    id: 'phys-12-elec-1',
    question: 'What is a semiconductor?',
    options: ['Perfect conductor', 'Perfect insulator', 'Material with controllable conductivity', 'Magnetic material'],
    correct: 'Material with controllable conductivity',
    explanation: 'Semiconductors have electrical conductivity between conductors and insulators, and can be controlled.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-elec-2',
    question: 'What are the two main types of semiconductors?',
    options: ['Metal and plastic', 'P-type and N-type', 'Positive and negative', 'Hot and cold'],
    correct: 'P-type and N-type',
    explanation: 'P-type (positive) and N-type (negative) semiconductors are created by doping with different impurities.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-elec-3',
    question: 'What is a diode?',
    options: ['Two-terminal device that allows current in one direction', 'Three-terminal amplifier', 'Energy storage device', 'Resistive element'],
    correct: 'Two-terminal device that allows current in one direction',
    explanation: 'A diode is a P-N junction that allows current flow in only one direction.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-elec-4',
    question: 'What is forward bias in a diode?',
    options: ['Reverse voltage applied', 'No voltage applied', 'Positive voltage on P-side, negative on N-side', 'AC voltage applied'],
    correct: 'Positive voltage on P-side, negative on N-side',
    explanation: 'Forward bias occurs when P-side is positive and N-side is negative, allowing current flow.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-elec-5',
    question: 'What is a transistor?',
    options: ['Two-terminal device', 'Three-terminal semiconductor device', 'Energy source', 'Magnetic component'],
    correct: 'Three-terminal semiconductor device',
    explanation: 'A transistor is a three-terminal semiconductor device used for amplification and switching.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-elec-6',
    question: 'What are the two main types of transistors?',
    options: ['Big and small', 'BJT and FET', 'AC and DC', 'Digital and analog'],
    correct: 'BJT and FET',
    explanation: 'BJT (Bipolar Junction Transistor) and FET (Field Effect Transistor) are the main types.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-elec-7',
    question: 'What are the three terminals of a BJT?',
    options: ['Input, output, ground', 'Emitter, base, collector', 'Source, gate, drain', 'Anode, cathode, grid'],
    correct: 'Emitter, base, collector',
    explanation: 'BJT has three terminals: emitter, base, and collector.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-elec-8',
    question: 'What is an integrated circuit (IC)?',
    options: ['Single large transistor', 'Multiple electronic components on one chip', 'External circuit board', 'Power supply unit'],
    correct: 'Multiple electronic components on one chip',
    explanation: 'An IC contains multiple electronic components (transistors, resistors, etc.) fabricated on a single chip.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-elec-9',
    question: 'What is digital electronics?',
    options: ['Electronics with displays', 'Electronics using discrete voltage levels', 'Electronics with numbers', 'Electronics for computers only'],
    correct: 'Electronics using discrete voltage levels',
    explanation: 'Digital electronics uses discrete voltage levels (typically 0 and 1) to represent information.',
    difficulty: 'easy'
  },
  {
    id: 'phys-12-elec-10',
    question: 'What is the basic principle of binary system?',
    options: ['Base 10', 'Base 2 (0 and 1)', 'Base 8', 'Base 16'],
    correct: 'Base 2 (0 and 1)',
    explanation: 'Binary system uses base 2 with only two digits: 0 and 1.',
    difficulty: 'easy'
  },

  // Medium Questions (10)
  {
    id: 'phys-12-elec-med-1',
    question: 'What is the knee voltage of a silicon diode?',
    options: ['0.3 V', '0.7 V', '1.0 V', '1.4 V'],
    correct: '0.7 V',
    explanation: 'Silicon diodes have a forward voltage drop of approximately 0.7 V when conducting.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-elec-med-2',
    question: 'What is the main function of a transistor in amplification?',
    options: ['Increase voltage only', 'Increase current only', 'Control large current with small current', 'Reduce noise'],
    correct: 'Control large current with small current',
    explanation: 'In amplification, a small base current controls a larger collector current in a BJT.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-elec-med-3',
    question: 'What is the current gain (β) of a BJT?',
    options: ['Ic/Ib', 'Ib/Ic', 'Ie/Ib', 'Ib/Ie'],
    correct: 'Ic/Ib',
    explanation: 'Current gain β = Ic/Ib where Ic is collector current and Ib is base current.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-elec-med-4',
    question: 'What is a logic gate?',
    options: ['Physical gate', 'Electronic circuit performing logical operations', 'Computer program', 'Memory device'],
    correct: 'Electronic circuit performing logical operations',
    explanation: 'Logic gates are electronic circuits that perform basic logical operations on binary inputs.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-elec-med-5',
    question: 'What is the output of an AND gate when both inputs are 1?',
    options: ['0', '1', 'Undefined', 'Variable'],
    correct: '1',
    explanation: 'AND gate output is 1 only when both inputs are 1.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-elec-med-6',
    question: 'What is the output of an OR gate when both inputs are 0?',
    options: ['0', '1', 'Undefined', 'Variable'],
    correct: '0',
    explanation: 'OR gate output is 0 only when both inputs are 0.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-elec-med-7',
    question: 'What does a NOT gate do?',
    options: ['Amplifies signal', 'Inverts the input', 'Delays signal', 'Stores data'],
    correct: 'Inverts the input',
    explanation: 'NOT gate (inverter) produces the opposite of its input: 0→1, 1→0.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-elec-med-8',
    question: 'What is the difference between analog and digital signals?',
    options: ['No difference', 'Analog is continuous, digital is discrete', 'Analog is faster', 'Digital is louder'],
    correct: 'Analog is continuous, digital is discrete',
    explanation: 'Analog signals have continuous values, while digital signals have discrete levels.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-elec-med-9',
    question: 'What is an operational amplifier (op-amp)?',
    options: ['Digital circuit', 'High-gain differential amplifier', 'Memory device', 'Power supply'],
    correct: 'High-gain differential amplifier',
    explanation: 'Op-amp is a high-gain voltage amplifier with differential inputs.',
    difficulty: 'medium'
  },
  {
    id: 'phys-12-elec-med-10',
    question: 'What is the main advantage of digital over analog systems?',
    options: ['Higher speed', 'Lower cost', 'Better noise immunity', 'Simpler circuits'],
    correct: 'Better noise immunity',
    explanation: 'Digital systems are less susceptible to noise because they use discrete voltage levels.',
    difficulty: 'medium'
  },

  // Hard Questions (10)
  {
    id: 'phys-12-elec-hard-1',
    question: 'What is the relationship between emitter, base, and collector currents in a BJT?',
    options: ['Ie = Ib + Ic', 'Ic = Ib + Ie', 'Ib = Ic + Ie', 'Ie = Ib - Ic'],
    correct: 'Ie = Ib + Ic',
    explanation: 'By Kirchhoff\'s current law: Ie = Ib + Ic in a BJT.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-elec-hard-2',
    question: 'What is the input impedance of an ideal op-amp?',
    options: ['Zero', 'Low', 'Infinite', '50 Ω'],
    correct: 'Infinite',
    explanation: 'Ideal op-amp has infinite input impedance, meaning no current flows into inputs.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-elec-hard-3',
    question: 'What is De Morgan\'s theorem?',
    options: ['(A+B)\' = A\'⋅B\'', 'A+B = A⋅B', 'A⋅B = A+B', '(A⋅B)\' = A\'+B\''],
    correct: '(A+B)\' = A\'⋅B\'',
    explanation: 'De Morgan\'s theorem: (A+B)\' = A\'⋅B\' and (A⋅B)\' = A\'+B\'',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-elec-hard-4',
    question: 'What is the gain-bandwidth product of an op-amp?',
    options: ['Variable parameter', 'Constant for a given op-amp', 'Always unity', 'Frequency dependent'],
    correct: 'Constant for a given op-amp',
    explanation: 'Gain-bandwidth product is a constant characteristic of an op-amp.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-elec-hard-5',
    question: 'What is a flip-flop in digital electronics?',
    options: ['Combinational circuit', 'Sequential circuit with memory', 'Analog circuit', 'Power circuit'],
    correct: 'Sequential circuit with memory',
    explanation: 'Flip-flops are sequential circuits that can store one bit of information.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-elec-hard-6',
    question: 'What is the threshold voltage of a MOSFET?',
    options: ['Voltage to turn on the device', 'Maximum operating voltage', 'Breakdown voltage', 'Supply voltage'],
    correct: 'Voltage to turn on the device',
    explanation: 'Threshold voltage is the minimum gate voltage needed to create a conducting channel in MOSFET.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-elec-hard-7',
    question: 'What is negative feedback in amplifiers?',
    options: ['Output fed back in phase with input', 'Output fed back out of phase with input', 'No feedback', 'Random feedback'],
    correct: 'Output fed back out of phase with input',
    explanation: 'Negative feedback feeds output back to input out of phase, reducing gain but improving stability.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-elec-hard-8',
    question: 'What is the main advantage of CMOS technology?',
    options: ['High speed', 'Low power consumption', 'High voltage capability', 'Simple manufacturing'],
    correct: 'Low power consumption',
    explanation: 'CMOS (Complementary Metal-Oxide-Semiconductor) has very low static power consumption.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-elec-hard-9',
    question: 'What is a Schmitt trigger?',
    options: ['Analog amplifier', 'Circuit with hysteresis', 'Digital memory', 'Power regulator'],
    correct: 'Circuit with hysteresis',
    explanation: 'Schmitt trigger is a comparator circuit with hysteresis, providing noise immunity.',
    difficulty: 'hard'
  },
  {
    id: 'phys-12-elec-hard-10',
    question: 'What is the purpose of a pull-up resistor in digital circuits?',
    options: ['Increase current', 'Define logic high when input is floating', 'Reduce voltage', 'Provide timing'],
    correct: 'Define logic high when input is floating',
    explanation: 'Pull-up resistors ensure a defined logic high state when digital inputs are not actively driven.',
    difficulty: 'hard'
  }
];
