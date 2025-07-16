
import { Chapter } from '../../types';

export const grade11GeographyChapters: Chapter[] = [
  {
    id: 'geo-11-1',
    name: 'Physical Geography',
    description: 'Study of Earth\'s physical features and processes',
    questions: [
      {
        id: 'geo-11-1-1',
        question: 'Which layer of the atmosphere contains most weather phenomena?',
        options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'],
        correct: 'Troposphere',
        explanation: 'The troposphere is the lowest layer where most weather occurs.',
        difficulty: 'easy'
      },
      {
        id: 'geo-11-1-2',
        question: 'What type of rock forms when magma cools and solidifies?',
        options: ['Sedimentary', 'Metamorphic', 'Igneous', 'Crystalline'],
        correct: 'Igneous',
        explanation: 'Igneous rocks form from the cooling and solidification of magma or lava.',
        difficulty: 'medium'
      },
      {
        id: 'geo-11-1-3',
        question: 'Which process is responsible for the formation of the Himalayas?',
        options: ['Volcanic activity', 'Plate collision', 'Erosion', 'Sedimentation'],
        correct: 'Plate collision',
        explanation: 'The Himalayas formed due to the collision between the Indian and Eurasian plates.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'geo-11-2',
    name: 'Climate and Weather',
    description: 'Understanding weather patterns and climate systems',
    questions: [
      {
        id: 'geo-11-2-1',
        question: 'What is the difference between weather and climate?',
        options: ['No difference', 'Weather is short-term, climate is long-term', 'Climate is short-term, weather is long-term', 'Weather is global, climate is local'],
        correct: 'Weather is short-term, climate is long-term',
        explanation: 'Weather refers to short-term atmospheric conditions, while climate is long-term patterns.',
        difficulty: 'easy'
      },
      {
        id: 'geo-11-2-2',
        question: 'Which factor most influences Ethiopia\'s climate?',
        options: ['Ocean currents', 'Altitude', 'Latitude', 'Wind patterns'],
        correct: 'Altitude',
        explanation: 'Ethiopia\'s varied altitude creates different climate zones from tropical to temperate.',
        difficulty: 'medium'
      },
      {
        id: 'geo-11-2-3',
        question: 'What causes the monsoon rains in Ethiopia?',
        options: ['Trade winds', 'Westerlies', 'Intertropical Convergence Zone (ITCZ)', 'Ocean currents'],
        correct: 'Intertropical Convergence Zone (ITCZ)',
        explanation: 'The seasonal movement of the ITCZ brings monsoon rains to Ethiopia.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'geo-11-3',
    name: 'Population and Settlement',
    description: 'Human geography: population distribution and settlement patterns',
    questions: [
      {
        id: 'geo-11-3-1',
        question: 'What is population density?',
        options: ['Total population', 'Population per unit area', 'Population growth rate', 'Urban population'],
        correct: 'Population per unit area',
        explanation: 'Population density measures the number of people per square kilometer or mile.',
        difficulty: 'easy'
      },
      {
        id: 'geo-11-3-2',
        question: 'Which factors influence population distribution?',
        options: ['Climate only', 'Physical features only', 'Economic opportunities only', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Population distribution is influenced by physical, economic, and social factors.',
        difficulty: 'medium'
      },
      {
        id: 'geo-11-3-3',
        question: 'What is urbanization?',
        options: ['Building cities', 'Movement from rural to urban areas', 'City planning', 'Industrial development'],
        correct: 'Movement from rural to urban areas',
        explanation: 'Urbanization refers to the increasing proportion of people living in urban areas.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'geo-11-4',
    name: 'Economic Geography',
    description: 'Spatial patterns of economic activities',
    questions: [
      {
        id: 'geo-11-4-1',
        question: 'What are the three main economic sectors?',
        options: ['Agriculture, Mining, Manufacturing', 'Primary, Secondary, Tertiary', 'Rural, Urban, Industrial', 'Local, National, International'],
        correct: 'Primary, Secondary, Tertiary',
        explanation: 'Economic activities are classified into primary (extraction), secondary (manufacturing), and tertiary (services).',
        difficulty: 'easy'
      },
      {
        id: 'geo-11-4-2',
        question: 'Which economic activity belongs to the primary sector?',
        options: ['Banking', 'Steel production', 'Fishing', 'Retail trade'],
        correct: 'Fishing',
        explanation: 'Fishing is a primary economic activity involving direct extraction from nature.',
        difficulty: 'medium'
      },
      {
        id: 'geo-11-4-3',
        question: 'What factors influence the location of industries?',
        options: ['Raw materials and markets', 'Transportation and labor', 'Energy and government policies', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Industrial location depends on multiple factors including resources, markets, transport, and policies.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'geo-11-5',
    name: 'Environmental Issues',
    description: 'Human impact on the environment and sustainability',
    questions: [
      {
        id: 'geo-11-5-1',
        question: 'What is deforestation?',
        options: ['Planting trees', 'Clearing forests', 'Forest management', 'Tree diseases'],
        correct: 'Clearing forests',
        explanation: 'Deforestation is the permanent removal of forests for other land uses.',
        difficulty: 'easy'
      },
      {
        id: 'geo-11-5-2',
        question: 'Which human activity contributes most to climate change?',
        options: ['Agriculture', 'Burning fossil fuels', 'Deforestation', 'Industrial processes'],
        correct: 'Burning fossil fuels',
        explanation: 'Burning fossil fuels is the largest source of greenhouse gas emissions.',
        difficulty: 'medium'
      },
      {
        id: 'geo-11-5-3',
        question: 'What is sustainable development?',
        options: ['Fast economic growth', 'Meeting present needs without compromising future generations', 'Industrial expansion', 'Urban development'],
        correct: 'Meeting present needs without compromising future generations',
        explanation: 'Sustainable development balances economic, social, and environmental needs.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'geo-11-6',
    name: 'Map Reading and GIS',
    description: 'Geographic information systems and cartographic skills',
    questions: [
      {
        id: 'geo-11-6-1',
        question: 'What does GIS stand for?',
        options: ['Global Information System', 'Geographic Information System', 'Geological Information System', 'Government Information System'],
        correct: 'Geographic Information System',
        explanation: 'GIS is a system for capturing, storing, analyzing, and managing geographic data.',
        difficulty: 'easy'
      },
      {
        id: 'geo-11-6-2',
        question: 'What is the purpose of contour lines on a topographic map?',
        options: ['Show political boundaries', 'Indicate elevation', 'Mark roads', 'Show climate zones'],
        correct: 'Indicate elevation',
        explanation: 'Contour lines connect points of equal elevation to show terrain relief.',
        difficulty: 'medium'
      },
      {
        id: 'geo-11-6-3',
        question: 'What is remote sensing?',
        options: ['Field surveys', 'Collecting data from a distance using satellites or aircraft', 'Laboratory analysis', 'Interview surveys'],
        correct: 'Collecting data from a distance using satellites or aircraft',
        explanation: 'Remote sensing gathers information about Earth\'s surface without direct contact.',
        difficulty: 'hard'
      }
    ]
  }
];
