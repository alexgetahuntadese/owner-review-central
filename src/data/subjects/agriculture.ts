import { Chapter } from '../types';
import { grade12AgricultureChapters } from './agriculture/grade12';

export const agricultureChapters: Chapter[] = [
  {
    id: 'crop_production',
    name: 'Crop Production and Management',
    description: 'Cultivation techniques, soil management, and crop care',
    questions: [
      // Easy Questions (10)
      {
        id: 'crop_easy_1',
        question: 'What is agriculture?',
        options: ['Only animal farming', 'Science and practice of farming', 'Industrial production', 'Food processing'],
        correct: 'Science and practice of farming',
        explanation: 'Agriculture is the science and practice of farming, including cultivation of plants and livestock.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_2',
        question: 'What are the main requirements for plant growth?',
        options: ['Only water', 'Sunlight, water, air, nutrients, suitable temperature', 'Only sunlight', 'Only soil'],
        correct: 'Sunlight, water, air, nutrients, suitable temperature',
        explanation: 'Plants need sunlight, water, air (carbon dioxide), nutrients, and suitable temperature to grow properly.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_3',
        question: 'What is soil?',
        options: ['Rock only', 'Mixture of minerals, organic matter, water, and air', 'Water only', 'Sand only'],
        correct: 'Mixture of minerals, organic matter, water, and air',
        explanation: 'Soil is a complex mixture of minerals, organic matter, water, and air that supports plant growth.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_4',
        question: 'What is photosynthesis?',
        options: ['Plant respiration', 'Process where plants make food using sunlight', 'Plant reproduction', 'Plant movement'],
        correct: 'Process where plants make food using sunlight',
        explanation: 'Photosynthesis is the process by which plants use sunlight, carbon dioxide, and water to make glucose.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_5',
        question: 'What are the primary nutrients plants need?',
        options: ['Nitrogen, Phosphorus, Potassium', 'Only nitrogen', 'Only phosphorus', 'Only potassium'],
        correct: 'Nitrogen, Phosphorus, Potassium',
        explanation: 'The three primary nutrients (NPK) that plants need are Nitrogen, Phosphorus, and Potassium.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_6',
        question: 'What is irrigation?',
        options: ['Harvesting crops', 'Supplying water to crops artificially', 'Applying fertilizer', 'Controlling pests'],
        correct: 'Supplying water to crops artificially',
        explanation: 'Irrigation is the artificial application of water to crops when natural rainfall is insufficient.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_7',
        question: 'What is a seed?',
        options: ['Fruit', 'Embryonic plant with stored food', 'Root', 'Leaf'],
        correct: 'Embryonic plant with stored food',
        explanation: 'A seed contains an embryonic plant and stored food (endosperm) needed for germination.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_8',
        question: 'What is germination?',
        options: ['Plant death', 'Process of seed sprouting into a plant', 'Flower formation', 'Fruit ripening'],
        correct: 'Process of seed sprouting into a plant',
        explanation: 'Germination is the process by which a seed develops into a new plant.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_9',
        question: 'What is harvesting?',
        options: ['Planting seeds', 'Gathering mature crops', 'Watering plants', 'Applying fertilizer'],
        correct: 'Gathering mature crops',
        explanation: 'Harvesting is the process of gathering mature crops from the field.',
        difficulty: 'easy'
      },
      {
        id: 'crop_easy_10',
        question: 'What is fertilizer?',
        options: ['Water for plants', 'Substance that provides nutrients to plants', 'Tool for farming', 'Type of seed'],
        correct: 'Substance that provides nutrients to plants',
        explanation: 'Fertilizer is a substance that provides essential nutrients to plants for healthy growth.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'crop_med_1',
        question: 'What is crop rotation?',
        options: ['Rotating crops during day', 'Growing different crops in sequence on same land', 'Moving crops to different locations', 'Harvesting at different times'],
        correct: 'Growing different crops in sequence on same land',
        explanation: 'Crop rotation involves growing different crops in a planned sequence on the same land to maintain soil fertility.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_2',
        question: 'What is the difference between organic and inorganic fertilizers?',
        options: ['No difference', 'Organic: from living materials, Inorganic: from minerals', 'Only price differs', 'Only color differs'],
        correct: 'Organic: from living materials, Inorganic: from minerals',
        explanation: 'Organic fertilizers come from living materials (compost, manure), while inorganic come from minerals.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_3',
        question: 'What is integrated pest management (IPM)?',
        options: ['Using only pesticides', 'Combining multiple pest control methods', 'Ignoring pests', 'Using only biological control'],
        correct: 'Combining multiple pest control methods',
        explanation: 'IPM combines biological, cultural, physical, and chemical methods to control pests sustainably.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_4',
        question: 'What is soil pH and why is it important?',
        options: ['Soil color measurement', 'Measure of soil acidity/alkalinity affecting nutrient availability', 'Soil temperature', 'Soil moisture'],
        correct: 'Measure of soil acidity/alkalinity affecting nutrient availability',
        explanation: 'Soil pH measures acidity or alkalinity and affects how plants can absorb nutrients from soil.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_5',
        question: 'What is intercropping?',
        options: ['Growing one crop only', 'Growing two or more crops together', 'Growing crops indoors', 'Growing crops in water'],
        correct: 'Growing two or more crops together',
        explanation: 'Intercropping involves growing two or more crops simultaneously in the same field.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_6',
        question: 'What are cover crops?',
        options: ['Crops grown for sale', 'Crops grown to protect and improve soil', 'Crops grown in greenhouses', 'Crops grown for animals only'],
        correct: 'Crops grown to protect and improve soil',
        explanation: 'Cover crops are grown primarily to protect soil from erosion and improve soil health.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_7',
        question: 'What is soil erosion?',
        options: ['Soil formation', 'Loss of topsoil due to wind or water', 'Soil improvement', 'Soil testing'],
        correct: 'Loss of topsoil due to wind or water',
        explanation: 'Soil erosion is the process where topsoil is worn away by wind, water, or other factors.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_8',
        question: 'What is the growing season?',
        options: ['Year-round period', 'Period when crops can grow due to favorable conditions', 'Winter only', 'Summer only'],
        correct: 'Period when crops can grow due to favorable conditions',
        explanation: 'The growing season is the period when temperature and moisture conditions allow crop growth.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_9',
        question: 'What is plant breeding?',
        options: ['Animal care', 'Science of improving plant varieties', 'Soil preparation', 'Harvest timing'],
        correct: 'Science of improving plant varieties',
        explanation: 'Plant breeding is the science of changing plant traits to produce desired characteristics.',
        difficulty: 'medium'
      },
      {
        id: 'crop_med_10',
        question: 'What is sustainable agriculture?',
        options: ['Short-term farming', 'Farming that maintains productivity while protecting environment', 'Only organic farming', 'Only traditional farming'],
        correct: 'Farming that maintains productivity while protecting environment',
        explanation: 'Sustainable agriculture maintains productivity while preserving environmental and social resources.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'crop_hard_1',
        question: 'What is precision agriculture?',
        options: ['Manual farming only', 'Technology-based farming using GPS and sensors', 'Traditional farming', 'Small-scale farming'],
        correct: 'Technology-based farming using GPS and sensors',
        explanation: 'Precision agriculture uses GPS, sensors, and data analysis to optimize field-level management.',
        difficulty: 'hard'
      },
      {
        id: 'crop_hard_2',
        question: 'What is hydroponics?',
        options: ['Soil-based growing', 'Growing plants in nutrient solution without soil', 'Outdoor farming only', 'Traditional agriculture'],
        correct: 'Growing plants in nutrient solution without soil',
        explanation: 'Hydroponics is a method of growing plants using mineral nutrient solutions in water without soil.',
        difficulty: 'hard'
      },
      {
        id: 'crop_hard_3',
        question: 'What is allelopathy?',
        options: ['Plant friendship', 'Chemical inhibition of one plant by another', 'Plant cooperation', 'Plant reproduction'],
        correct: 'Chemical inhibition of one plant by another',
        explanation: 'Allelopathy occurs when one plant releases chemicals that inhibit the growth of nearby plants.',
        difficulty: 'hard'
      },
      {
        id: 'crop_hard_4',
        question: 'What is nitrogen fixation?',
        options: ['Applying nitrogen fertilizer', 'Converting atmospheric nitrogen to ammonia', 'Removing nitrogen from soil', 'Measuring nitrogen levels'],
        correct: 'Converting atmospheric nitrogen to ammonia',
        explanation: 'Nitrogen fixation is the process of converting atmospheric nitrogen into ammonia or related compounds.',
        difficulty: 'hard'
      },
      {
        id: 'crop_hard_5',
        question: 'What is agroforestry?',
        options: ['Only tree farming', 'Integrating trees with crops and/or livestock', 'Forest destruction', 'Urban farming'],
        correct: 'Integrating trees with crops and/or livestock',
        explanation: 'Agroforestry is a land management system that integrates trees with crops and/or livestock.',
        difficulty: 'hard'
      },
      {
        id: 'crop_hard_6',
        question: 'What is vernalization?',
        options: ['Plant disease', 'Cold treatment to induce flowering', 'Heat treatment', 'Chemical treatment'],
        correct: 'Cold treatment to induce flowering',
        explanation: 'Vernalization is the process of inducing flowering in plants through cold treatment.',
        difficulty: 'hard'
      },
      {
        id: 'crop_hard_7',
        question: 'What is mycorrhiza?',
        options: ['Plant disease', 'Beneficial fungal-root association', 'Type of fertilizer', 'Irrigation method'],
        correct: 'Beneficial fungal-root association',
        explanation: 'Mycorrhiza is a beneficial symbiotic association between fungi and plant roots.',
        difficulty: 'hard'
      },
      {
        id: 'crop_hard_8',
        question: 'What is photoperiodism?',
        options: ['Plant photosynthesis rate', 'Plant response to day length', 'Light intensity measurement', 'Plant color change'],
        correct: 'Plant response to day length',
        explanation: 'Photoperiodism is the physiological reaction of organisms to the length of day and night.',
        difficulty: 'hard'
      },
      {
        id: 'crop_hard_9',
        question: 'What is genetic modification in plants?',
        options: ['Natural breeding only', 'Altering plant DNA using biotechnology', 'Traditional selection', 'Physical plant changes'],
        correct: 'Altering plant DNA using biotechnology',
        explanation: 'Genetic modification involves directly altering plant DNA using biotechnology techniques.',
        difficulty: 'hard'
      },
      {
        id: 'crop_hard_10',
        question: 'What is soil microbiome?',
        options: ['Soil particles only', 'Community of microorganisms in soil', 'Soil minerals only', 'Soil water content'],
        correct: 'Community of microorganisms in soil',
        explanation: 'The soil microbiome consists of the diverse community of microorganisms living in soil.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_livestock_management',
    name: 'Grade 11: Livestock Production and Management',
    description: 'Animal husbandry, breeding, and livestock care',
    questions: [
      // Easy Questions (10)
      {
        id: 'g11_livestock_easy_1',
        question: 'What is livestock?',
        options: ['Wild animals', 'Domesticated animals raised for food and other products', 'Pet animals', 'Zoo animals'],
        correct: 'Domesticated animals raised for food and other products',
        explanation: 'Livestock refers to domesticated animals raised in agriculture for food, fiber, and labor.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_2',
        question: 'What is animal husbandry?',
        options: ['Hunting animals', 'Science of breeding and caring for animals', 'Animal entertainment', 'Animal research only'],
        correct: 'Science of breeding and caring for animals',
        explanation: 'Animal husbandry is the branch of agriculture concerned with breeding and caring for farm animals.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_3',
        question: 'What are the main types of livestock?',
        options: ['Only cattle', 'Cattle, sheep, goats, pigs, poultry', 'Only chickens', 'Only goats'],
        correct: 'Cattle, sheep, goats, pigs, poultry',
        explanation: 'The main livestock include cattle, sheep, goats, pigs, and poultry (chickens, ducks, etc.).',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_4',
        question: 'What is feed?',
        options: ['Water only', 'Food given to livestock', 'Medicine for animals', 'Shelter for animals'],
        correct: 'Food given to livestock',
        explanation: 'Feed refers to food given to livestock to provide them with necessary nutrients.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_5',
        question: 'What is pasture?',
        options: ['Animal shelter', 'Grassland where animals graze', 'Water source', 'Animal medicine'],
        correct: 'Grassland where animals graze',
        explanation: 'Pasture is land covered with grass suitable for grazing by livestock.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_6',
        question: 'What is breeding in livestock?',
        options: ['Feeding animals', 'Selecting animals to reproduce', 'Housing animals', 'Treating sick animals'],
        correct: 'Selecting animals to reproduce',
        explanation: 'Breeding involves selecting and mating animals to produce offspring with desired traits.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_7',
        question: 'What is vaccination in animals?',
        options: ['Feeding schedule', 'Giving medicine to prevent diseases', 'Housing improvement', 'Exercise routine'],
        correct: 'Giving medicine to prevent diseases',
        explanation: 'Vaccination involves giving animals vaccines to prevent infectious diseases.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_8',
        question: 'What is weaning?',
        options: ['Animal birth', 'Separating young animals from their mothers', 'Animal death', 'Animal breeding'],
        correct: 'Separating young animals from their mothers',
        explanation: 'Weaning is the process of separating young animals from their mothers and transitioning them to solid food.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_9',
        question: 'What is gestation period?',
        options: ['Feeding time', 'Time from conception to birth', 'Milking time', 'Exercise period'],
        correct: 'Time from conception to birth',
        explanation: 'Gestation period is the time from conception until birth of the offspring.',
        difficulty: 'easy'
      },
      {
        id: 'g11_livestock_easy_10',
        question: 'What is milking?',
        options: ['Feeding cattle', 'Extracting milk from dairy animals', 'Cleaning animals', 'Exercising animals'],
        correct: 'Extracting milk from dairy animals',
        explanation: 'Milking is the process of extracting milk from dairy animals like cows, goats, or sheep.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g11_livestock_med_1',
        question: 'What is artificial insemination?',
        options: ['Natural breeding', 'Manually introducing sperm into female reproductive tract', 'Feeding technique', 'Housing method'],
        correct: 'Manually introducing sperm into female reproductive tract',
        explanation: 'Artificial insemination is the deliberate introduction of sperm into the female reproductive tract.',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_2',
        question: 'What is the difference between intensive and extensive livestock systems?',
        options: ['No difference', 'Intensive: high input/small area, Extensive: low input/large area', 'Only size differs', 'Only animals differ'],
        correct: 'Intensive: high input/small area, Extensive: low input/large area',
        explanation: 'Intensive systems use high inputs on small areas; extensive systems use low inputs on large areas.',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_3',
        question: 'What is feed conversion ratio?',
        options: ['Feed quality measure', 'Amount of feed needed per unit of animal product', 'Feed cost calculation', 'Feed storage method'],
        correct: 'Amount of feed needed per unit of animal product',
        explanation: 'Feed conversion ratio measures how efficiently animals convert feed into desired products (meat, milk, eggs).',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_4',
        question: 'What is estrus cycle?',
        options: ['Male fertility cycle', 'Female reproductive cycle', 'Feeding cycle', 'Growth cycle'],
        correct: 'Female reproductive cycle',
        explanation: 'The estrus cycle is the recurring reproductive cycle in female mammals.',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_5',
        question: 'What is quarantine in livestock management?',
        options: ['Regular feeding', 'Isolating new or sick animals', 'Exercise routine', 'Breeding practice'],
        correct: 'Isolating new or sick animals',
        explanation: 'Quarantine involves isolating animals to prevent disease spread to the main herd.',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_6',
        question: 'What is colostrum?',
        options: ['Regular milk', 'First milk after birth rich in antibodies', 'Animal feed', 'Water supplement'],
        correct: 'First milk after birth rich in antibodies',
        explanation: 'Colostrum is the first milk produced after birth, rich in antibodies and nutrients.',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_7',
        question: 'What is castration?',
        options: ['Animal feeding', 'Removing male reproductive organs', 'Animal housing', 'Animal exercise'],
        correct: 'Removing male reproductive organs',
        explanation: 'Castration is the removal or destruction of male reproductive organs, often done to manage behavior and meat quality.',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_8',
        question: 'What is rotational grazing?',
        options: ['Continuous grazing', 'Moving animals between different pastures', 'Indoor feeding only', 'Single pasture use'],
        correct: 'Moving animals between different pastures',
        explanation: 'Rotational grazing involves systematically moving animals between different pasture areas.',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_9',
        question: 'What is animal welfare?',
        options: ['Animal profit only', 'Physical and mental well-being of animals', 'Animal productivity only', 'Animal housing only'],
        correct: 'Physical and mental well-being of animals',
        explanation: 'Animal welfare refers to the physical and mental well-being of animals in human care.',
        difficulty: 'medium'
      },
      {
        id: 'g11_livestock_med_10',
        question: 'What is biosecurity in livestock?',
        options: ['Animal insurance', 'Measures to prevent disease introduction and spread', 'Financial security', 'Feed security'],
        correct: 'Measures to prevent disease introduction and spread',
        explanation: 'Biosecurity involves practices designed to prevent introduction and spread of diseases in livestock.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g11_livestock_hard_1',
        question: 'What is embryo transfer in livestock?',
        options: ['Natural breeding', 'Moving embryos from donor to recipient females', 'Feeding technique', 'Housing method'],
        correct: 'Moving embryos from donor to recipient females',
        explanation: 'Embryo transfer involves collecting embryos from genetically superior females and transferring them to recipients.',
        difficulty: 'hard'
      },
      {
        id: 'g11_livestock_hard_2',
        question: 'What is heterosis in animal breeding?',
        options: ['Inbreeding effect', 'Hybrid vigor from crossbreeding', 'Genetic defect', 'Pure breeding'],
        correct: 'Hybrid vigor from crossbreeding',
        explanation: 'Heterosis is the improved performance of crossbred animals compared to their parents.',
        difficulty: 'hard'
      },
      {
        id: 'g11_livestock_hard_3',
        question: 'What is genomic selection?',
        options: ['Visual selection', 'Using DNA markers for breeding decisions', 'Random selection', 'Age-based selection'],
        correct: 'Using DNA markers for breeding decisions',
        explanation: 'Genomic selection uses DNA markers across the genome to predict breeding values.',
        difficulty: 'hard'
      },
      {
        id: 'g11_livestock_hard_4',
        question: 'What is metabolizable energy in animal nutrition?',
        options: ['Total energy in feed', 'Energy available for animal metabolism', 'Energy for maintenance only', 'Energy for growth only'],
        correct: 'Energy available for animal metabolism',
        explanation: 'Metabolizable energy is the portion of feed energy available for animal metabolic processes.',
        difficulty: 'hard'
      },
      {
        id: 'g11_livestock_hard_5',
        question: 'What is rumen in ruminants?',
        options: ['Small intestine', 'First stomach chamber for fermentation', 'Large intestine', 'Liver'],
        correct: 'First stomach chamber for fermentation',
        explanation: 'The rumen is the largest stomach chamber in ruminants where microbial fermentation occurs.',
        difficulty: 'hard'
      },
      {
        id: 'g11_livestock_hard_6',
        question: 'What is parthenogenesis?',
        options: ['Normal reproduction', 'Development of embryo without fertilization', 'Artificial insemination', 'Natural breeding'],
        correct: 'Development of embryo without fertilization',
        explanation: 'Parthenogenesis is a form of reproduction where embryos develop without fertilization.',
        difficulty: 'hard'
      },
      {
        id: 'g11_livestock_hard_7',
        question: 'What is epigenetics in animal breeding?',
        options: ['Gene mutations', 'Heritable changes not involving DNA sequence changes', 'Genetic engineering', 'Chromosome abnormalities'],
        correct: 'Heritable changes not involving DNA sequence changes',
        explanation: 'Epigenetics involves heritable changes in gene expression without changes to DNA sequence.',
        difficulty: 'hard'
      },
      {
        id: 'g11_livestock_hard_8',
        question: 'What is precision livestock farming?',
        options: ['Traditional farming', 'Using technology to monitor individual animals', 'Manual observation only', 'Group management only'],
        correct: 'Using technology to monitor individual animals',
        explanation: 'Precision livestock farming uses technology to monitor and manage individual animals automatically.',
        difficulty: 'hard'
      },
      {
        id: 'g11_livestock_hard_9',
        question: 'What is zoonosis?',
        options: ['Animal behavior', 'Disease transmissible between animals and humans', 'Animal nutrition', 'Animal reproduction'],
        correct: 'Disease transmissible between animals and humans',
        explanation: 'Zoonosis refers to infectious diseases that can be transmitted between animals and humans.',
        difficulty: 'hard'
      },
      {
        id: 'g11_livestock_hard_10',
        question: 'What is telomere length in animal aging?',
        options: ['Muscle length', 'DNA protective caps indicating cellular age', 'Bone length', 'Hair length'],
        correct: 'DNA protective caps indicating cellular age',
        explanation: 'Telomeres are protective DNA caps that shorten with age and can indicate cellular aging in animals.',
        difficulty: 'hard'
      }
    ]
  },

  // Add all Grade 12 chapters
  ...grade12AgricultureChapters
];
