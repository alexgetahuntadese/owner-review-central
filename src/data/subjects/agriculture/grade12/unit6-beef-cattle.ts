
import { Chapter } from '../../../types';

export const unit6BeefCattle: Chapter = {
  id: 'agri-12-6',
  name: 'Unit 6: Beef Cattle Production and Management',
  description: 'Production systems and management practices for beef cattle',
  questions: [
    // Easy Questions (10)
    {
      id: 'beef_easy_1',
      question: 'What is the primary purpose of beef cattle production?',
      options: ['Milk production', 'Meat production', 'Wool production', 'Work animals'],
      correct: 'Meat production',
      explanation: 'Beef cattle are primarily raised for meat production.',
      difficulty: 'easy'
    },
    {
      id: 'beef_easy_2',
      question: 'What is a bull?',
      options: ['Female cattle', 'Male breeding cattle', 'Young cattle', 'Castrated male'],
      correct: 'Male breeding cattle',
      explanation: 'A bull is an intact (uncastrated) male cattle used for breeding.',
      difficulty: 'easy'
    },
    {
      id: 'beef_easy_3',
      question: 'What is a steer?',
      options: ['Female cattle', 'Male breeding cattle', 'Castrated male cattle', 'Young cattle'],
      correct: 'Castrated male cattle',
      explanation: 'A steer is a castrated male cattle, typically raised for meat production.',
      difficulty: 'easy'
    },
    {
      id: 'beef_easy_4',
      question: 'What is pasture-based cattle production?',
      options: ['Indoor farming only', 'Raising cattle on grassland', 'Factory farming', 'Urban farming'],
      correct: 'Raising cattle on grassland',
      explanation: 'Pasture-based production involves raising cattle primarily on grassland and pastures.',
      difficulty: 'easy'
    },
    {
      id: 'beef_easy_5',
      question: 'What is weaning in cattle production?',
      options: ['Birth process', 'Separating calves from mothers', 'Breeding process', 'Feeding process'],
      correct: 'Separating calves from mothers',
      explanation: 'Weaning is the process of separating calves from their mothers to stop nursing.',
      difficulty: 'easy'
    },
    {
      id: 'beef_easy_6',
      question: 'What is the gestation period of cattle?',
      options: ['6 months', '9 months', '12 months', '15 months'],
      correct: '9 months',
      explanation: 'The gestation period of cattle is approximately 9 months (280-285 days).',
      difficulty: 'easy'
    },
    {
      id: 'beef_easy_7',
      question: 'What is castration in cattle?',
      options: ['Breeding process', 'Removing reproductive organs from males', 'Feeding method', 'Housing system'],
      correct: 'Removing reproductive organs from males',
      explanation: 'Castration is the removal of testicles from male cattle to prevent breeding and improve meat quality.',
      difficulty: 'easy'
    },
    {
      id: 'beef_easy_8',
      question: 'What is the main component of cattle diet?',
      options: ['Meat', 'Grass and forage', 'Fish', 'Fruits only'],
      correct: 'Grass and forage',
      explanation: 'Cattle are ruminants and their diet consists primarily of grass and other forages.',
      difficulty: 'easy'
    },
    {
      id: 'beef_easy_9',
      question: 'What is a feedlot?',
      options: ['Grazing area', 'Intensive feeding facility', 'Water source', 'Breeding facility'],
      correct: 'Intensive feeding facility',
      explanation: 'A feedlot is a confined area where cattle are fed high-energy diets for rapid weight gain.',
      difficulty: 'easy'
    },
    {
      id: 'beef_easy_10',
      question: 'What is body condition scoring?',
      options: ['Weighing cattle', 'Assessing fat cover and body condition', 'Measuring height', 'Counting cattle'],
      correct: 'Assessing fat cover and body condition',
      explanation: 'Body condition scoring is a visual and tactile assessment of fat cover and body condition in cattle.',
      difficulty: 'easy'
    },

    // Medium Questions (10)
    {
      id: 'beef_med_1',
      question: 'What is crossbreeding in beef cattle?',
      options: ['Inbreeding', 'Mating animals of different breeds', 'Artificial insemination', 'Natural breeding only'],
      correct: 'Mating animals of different breeds',
      explanation: 'Crossbreeding involves mating cattle from different breeds to combine desirable traits.',
      difficulty: 'medium'
    },
    {
      id: 'beef_med_2',
      question: 'What is heterosis in cattle breeding?',
      options: ['Genetic defect', 'Hybrid vigor from crossbreeding', 'Disease resistance', 'Growth hormone'],
      correct: 'Hybrid vigor from crossbreeding',
      explanation: 'Heterosis (hybrid vigor) is the improved performance of crossbred animals compared to their parents.',
      difficulty: 'medium'
    },
    {
      id: 'beef_med_3',
      question: 'What is rotational grazing?',
      options: ['Feeding in barns', 'Moving cattle between pastures systematically', 'Continuous grazing', 'Indoor feeding only'],
      correct: 'Moving cattle between pastures systematically',
      explanation: 'Rotational grazing involves moving cattle between different pastures to optimize grass growth and utilization.',
      difficulty: 'medium'
    },
    {
      id: 'beef_med_4',
      question: 'What is marbling in beef?',
      options: ['External fat', 'Intramuscular fat distribution', 'Muscle size', 'Bone density'],
      correct: 'Intramuscular fat distribution',
      explanation: 'Marbling refers to the distribution of intramuscular fat that affects meat quality and tenderness.',
      difficulty: 'medium'
    },
    {
      id: 'beef_med_5',
      question: 'What is artificial insemination (AI) in cattle?',
      options: ['Natural breeding', 'Manual sperm introduction', 'Surgical procedure', 'Hormone treatment'],
      correct: 'Manual sperm introduction',
      explanation: 'AI involves manually introducing sperm into the female reproductive tract to achieve pregnancy.',
      difficulty: 'medium'
    },
    {
      id: 'beef_med_6',
      question: 'What is compensatory growth in cattle?',
      options: ['Normal growth', 'Rapid growth after period of restriction', 'Slow growth', 'Genetic growth'],
      correct: 'Rapid growth after period of restriction',
      explanation: 'Compensatory growth is the rapid weight gain that occurs when cattle are re-fed after a period of nutritional restriction.',
      difficulty: 'medium'
    },
    {
      id: 'beef_med_7',
      question: 'What is backgrounding in beef production?',
      options: ['Final fattening', 'Growing cattle on forage before feedlot', 'Breeding phase', 'Calving period'],
      correct: 'Growing cattle on forage before feedlot',
      explanation: 'Backgrounding is the phase where weaned calves are grown on forage before entering the feedlot.',
      difficulty: 'medium'
    },
    {
      id: 'beef_med_8',
      question: 'What is the purpose of growth implants in cattle?',
      options: ['Disease prevention', 'Improving growth rate and feed efficiency', 'Reproduction improvement', 'Milk production'],
      correct: 'Improving growth rate and feed efficiency',
      explanation: 'Growth implants contain hormones that improve growth rate and feed efficiency in beef cattle.',
      difficulty: 'medium'
    },
    {
      id: 'beef_med_9',
      question: 'What is carcass grading?',
      options: ['Live animal grading', 'Evaluating meat quality after slaughter', 'Breeding evaluation', 'Health assessment'],
      correct: 'Evaluating meat quality after slaughter',
      explanation: 'Carcass grading evaluates meat quality factors like marbling, maturity, and yield after slaughter.',
      difficulty: 'medium'
    },
    {
      id: 'beef_med_10',
      question: 'What is estrus synchronization?',
      options: ['Random breeding', 'Coordinating breeding cycles', 'Individual breeding', 'Natural cycling'],
      correct: 'Coordinating breeding cycles',
      explanation: 'Estrus synchronization uses hormones to coordinate breeding cycles in groups of cattle.',
      difficulty: 'medium'
    },

    // Hard Questions (10)
    {
      id: 'beef_hard_1',
      question: 'What is genomic selection in beef cattle breeding?',
      options: ['Visual selection', 'Using genome-wide markers for selection', 'Random breeding', 'Traditional methods'],
      correct: 'Using genome-wide markers for selection',
      explanation: 'Genomic selection uses genome-wide molecular markers to predict breeding values for genetic improvement.',
      difficulty: 'hard'
    },
    {
      id: 'beef_hard_2',
      question: 'What is embryo transfer technology?',
      options: ['Natural breeding', 'Transferring embryos between animals', 'Artificial insemination', 'Hormone treatment'],
      correct: 'Transferring embryos between animals',
      explanation: 'Embryo transfer involves collecting embryos from superior females and transferring them to recipient cows.',
      difficulty: 'hard'
    },
    {
      id: 'beef_hard_3',
      question: 'What is nutrigenomics in cattle nutrition?',
      options: ['Basic nutrition', 'Study of gene-nutrition interactions', 'Feed analysis only', 'Weight measurement'],
      correct: 'Study of gene-nutrition interactions',
      explanation: 'Nutrigenomics studies how nutrition affects gene expression and how genetics influences nutritional requirements.',
      difficulty: 'hard'
    },
    {
      id: 'beef_hard_4',
      question: 'What is precision livestock farming?',
      options: ['Traditional farming', 'Technology-based individual animal monitoring', 'Manual observation', 'Basic record keeping'],
      correct: 'Technology-based individual animal monitoring',
      explanation: 'Precision livestock farming uses sensors and technology to monitor individual animals continuously.',
      difficulty: 'hard'
    },
    {
      id: 'beef_hard_5',
      question: 'What is MOET (Multiple Ovulation Embryo Transfer)?',
      options: ['Single embryo transfer', 'Producing multiple embryos per donor', 'Natural breeding', 'Feed supplementation'],
      correct: 'Producing multiple embryos per donor',
      explanation: 'MOET involves hormonally inducing multiple ovulations to produce many embryos from superior females.',
      difficulty: 'hard'
    },
    {
      id: 'beef_hard_6',
      question: 'What is metabolomics in beef cattle research?',
      options: ['Basic metabolism study', 'Comprehensive metabolite analysis', 'Weight measurement', 'Feed analysis'],
      correct: 'Comprehensive metabolite analysis',
      explanation: 'Metabolomics analyzes all metabolites to understand cattle physiology, health, and production.',
      difficulty: 'hard'
    },
    {
      id: 'beef_hard_7',
      question: 'What is gene editing application in cattle breeding?',
      options: ['Traditional breeding', 'Precise genetic modifications', 'Natural selection', 'Random mutations'],
      correct: 'Precise genetic modifications',
      explanation: 'Gene editing technologies like CRISPR allow precise modifications to cattle genomes for desired traits.',
      difficulty: 'hard'
    },
    {
      id: 'beef_hard_8',
      question: 'What is systems biology approach in cattle production?',
      options: ['Single trait focus', 'Integrated multi-level biological analysis', 'Traditional methods', 'Simple observations'],
      correct: 'Integrated multi-level biological analysis',
      explanation: 'Systems biology integrates genomics, proteomics, and metabolomics for comprehensive understanding.',
      difficulty: 'hard'
    },
    {
      id: 'beef_hard_9',
      question: 'What is epigenetic inheritance in cattle?',
      options: ['DNA sequence inheritance', 'Heritable expression changes without DNA changes', 'Physical trait inheritance', 'Environmental effects only'],
      correct: 'Heritable expression changes without DNA changes',
      explanation: 'Epigenetic inheritance involves heritable changes in gene expression without DNA sequence changes.',
      difficulty: 'hard'
    },
    {
      id: 'beef_hard_10',
      question: 'What is blockchain application in beef traceability?',
      options: ['Traditional record keeping', 'Digital supply chain tracking', 'Basic identification', 'Manual documentation'],
      correct: 'Digital supply chain tracking',
      explanation: 'Blockchain technology provides transparent, immutable records of beef products from farm to consumer.',
      difficulty: 'hard'
    }
  ]
};
