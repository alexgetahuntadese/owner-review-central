import { Chapter } from '../types';

export const economicsChapters: Chapter[] = [
  {
    id: 'microeconomics',
    name: 'Microeconomics',
    description: 'Individual economic behavior, markets, and pricing',
    questions: [
      // Easy Questions (10)
      {
        id: 'micro_easy_1',
        question: 'What is economics?',
        options: ['Study of money only', 'Study of scarcity and choice', 'Study of business only', 'Study of government'],
        correct: 'Study of scarcity and choice',
        explanation: 'Economics is the study of how societies allocate scarce resources to satisfy unlimited wants.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_2',
        question: 'What is scarcity?',
        options: ['Having too much', 'Limited resources relative to wants', 'No resources available', 'Unlimited resources'],
        correct: 'Limited resources relative to wants',
        explanation: 'Scarcity means resources are limited compared to people\'s unlimited wants and needs.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_3',
        question: 'What is opportunity cost?',
        options: ['Money spent', 'Best alternative forgone', 'Total cost', 'No cost'],
        correct: 'Best alternative forgone',
        explanation: 'Opportunity cost is the value of the best alternative that must be given up when making a choice.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_4',
        question: 'What is demand?',
        options: ['Supply of goods', 'Willingness and ability to buy', 'Price of goods', 'Production capacity'],
        correct: 'Willingness and ability to buy',
        explanation: 'Demand is the willingness and ability of consumers to purchase goods and services at various prices.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_5',
        question: 'What is supply?',
        options: ['Consumer wants', 'Willingness and ability to sell', 'Market price', 'Consumer demand'],
        correct: 'Willingness and ability to sell',
        explanation: 'Supply is the willingness and ability of producers to offer goods and services at various prices.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_6',
        question: 'What happens to demand when price increases?',
        options: ['Demand increases', 'Demand decreases', 'No change', 'Supply changes'],
        correct: 'Demand decreases',
        explanation: 'According to the law of demand, as price increases, quantity demanded decreases, all else equal.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_7',
        question: 'What happens to supply when price increases?',
        options: ['Supply decreases', 'Supply increases', 'No change', 'Demand changes'],
        correct: 'Supply increases',
        explanation: 'According to the law of supply, as price increases, quantity supplied increases, all else equal.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_8',
        question: 'What is a market?',
        options: ['Physical building only', 'Place where buyers and sellers interact', 'Government institution', 'Bank'],
        correct: 'Place where buyers and sellers interact',
        explanation: 'A market is any place or mechanism where buyers and sellers come together to exchange goods and services.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_9',
        question: 'What is price?',
        options: ['Cost of production', 'Value of good or service in exchange', 'Government decision', 'Random number'],
        correct: 'Value of good or service in exchange',
        explanation: 'Price is the value of a good or service expressed in terms of money or other goods.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_10',
        question: 'What are factors of production?',
        options: ['Only money', 'Land, labor, capital, entrepreneurship', 'Only machines', 'Only workers'],
        correct: 'Land, labor, capital, entrepreneurship',
        explanation: 'The four factors of production are land, labor, capital, and entrepreneurship.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'micro_med_1',
        question: 'What is market equilibrium?',
        options: ['High prices', 'Point where supply equals demand', 'Low prices', 'No trading'],
        correct: 'Point where supply equals demand',
        explanation: 'Market equilibrium occurs where the quantity supplied equals the quantity demanded.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_2',
        question: 'What is price elasticity of demand?',
        options: ['Fixed prices', 'Responsiveness of demand to price changes', 'Supply changes', 'Government control'],
        correct: 'Responsiveness of demand to price changes',
        explanation: 'Price elasticity of demand measures how responsive quantity demanded is to changes in price.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_3',
        question: 'What makes demand elastic?',
        options: ['No substitutes', 'Many substitutes available', 'Necessity good', 'Inelastic supply'],
        correct: 'Many substitutes available',
        explanation: 'Demand is more elastic when there are many substitute goods available.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_4',
        question: 'What is marginal utility?',
        options: ['Total satisfaction', 'Additional satisfaction from one more unit', 'Average satisfaction', 'No satisfaction'],
        correct: 'Additional satisfaction from one more unit',
        explanation: 'Marginal utility is the additional satisfaction gained from consuming one more unit of a good.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_5',
        question: 'What is the law of diminishing marginal utility?',
        options: ['Utility always increases', 'Additional utility decreases with more consumption', 'Utility stays constant', 'Utility becomes negative'],
        correct: 'Additional utility decreases with more consumption',
        explanation: 'The law states that marginal utility decreases as more units of a good are consumed.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_6',
        question: 'What are normal goods?',
        options: ['Goods with falling demand when income rises', 'Goods with rising demand when income rises', 'Goods with constant demand', 'Free goods'],
        correct: 'Goods with rising demand when income rises',
        explanation: 'Normal goods have a positive income elasticity - demand increases as income increases.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_7',
        question: 'What are inferior goods?',
        options: ['High-quality goods', 'Goods with falling demand when income rises', 'Expensive goods', 'Luxury goods'],
        correct: 'Goods with falling demand when income rises',
        explanation: 'Inferior goods have negative income elasticity - demand decreases as income increases.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_8',
        question: 'What is consumer surplus?',
        options: ['Producer profit', 'Difference between willingness to pay and actual price', 'Total spending', 'Market price'],
        correct: 'Difference between willingness to pay and actual price',
        explanation: 'Consumer surplus is the difference between what consumers are willing to pay and what they actually pay.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_9',
        question: 'What is producer surplus?',
        options: ['Consumer benefit', 'Difference between price received and minimum acceptable price', 'Total revenue', 'Fixed costs'],
        correct: 'Difference between price received and minimum acceptable price',
        explanation: 'Producer surplus is the difference between the price received and the minimum price acceptable to producers.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_10',
        question: 'What shifts the demand curve?',
        options: ['Price changes', 'Income, preferences, related goods prices', 'Supply changes', 'Production costs'],
        correct: 'Income, preferences, related goods prices',
        explanation: 'Demand curve shifts are caused by changes in income, preferences, prices of related goods, expectations, etc.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'micro_hard_1',
        question: 'What is perfect competition?',
        options: ['Few large firms', 'Many firms, identical products, perfect information', 'One dominant firm', 'Government control'],
        correct: 'Many firms, identical products, perfect information',
        explanation: 'Perfect competition features many firms, homogeneous products, perfect information, and free entry/exit.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_2',
        question: 'What is monopoly?',
        options: ['Many competing firms', 'Single seller with no close substitutes', 'Government ownership', 'Perfect competition'],
        correct: 'Single seller with no close substitutes',
        explanation: 'A monopoly is a market structure with a single seller that faces no close substitute products.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_3',
        question: 'What is price discrimination?',
        options: ['Same price for all', 'Charging different prices for same product', 'Cost-based pricing', 'Free goods'],
        correct: 'Charging different prices for same product',
        explanation: 'Price discrimination involves charging different prices to different customers for the same product.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_4',
        question: 'What is marginal cost?',
        options: ['Total cost', 'Additional cost of producing one more unit', 'Average cost', 'Fixed cost'],
        correct: 'Additional cost of producing one more unit',
        explanation: 'Marginal cost is the additional cost incurred from producing one more unit of output.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_5',
        question: 'What is the profit-maximizing condition for firms?',
        options: ['MC = 0', 'MR = MC', 'TR = TC', 'AR = AC'],
        correct: 'MR = MC',
        explanation: 'Firms maximize profit where marginal revenue equals marginal cost (MR = MC).',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_6',
        question: 'What is deadweight loss?',
        options: ['Producer gain', 'Loss of economic efficiency', 'Consumer gain', 'Government revenue'],
        correct: 'Loss of economic efficiency',
        explanation: 'Deadweight loss is the reduction in economic efficiency that can occur when equilibrium is not achieved.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_7',
        question: 'What is externality?',
        options: ['Internal cost', 'Cost or benefit affecting third parties', 'Market price', 'Producer cost'],
        correct: 'Cost or benefit affecting third parties',
        explanation: 'An externality is a cost or benefit that affects parties who did not choose to incur that cost or benefit.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_8',
        question: 'What is the Coase theorem?',
        options: ['Government must intervene', 'Private parties can solve externalities with clear property rights', 'Markets always fail', 'Regulation is always needed'],
        correct: 'Private parties can solve externalities with clear property rights',
        explanation: 'The Coase theorem states that private parties can negotiate solutions to externality problems if property rights are well-defined.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_9',
        question: 'What is game theory?',
        options: ['Entertainment economics', 'Study of strategic decision-making', 'Market analysis only', 'Price theory'],
        correct: 'Study of strategic decision-making',
        explanation: 'Game theory analyzes strategic decision-making when the outcome depends on the actions of multiple decision-makers.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_10',
        question: 'What is the Nash equilibrium?',
        options: ['No strategy needed', 'Point where no player wants to change strategy', 'Always cooperative', 'Government intervention'],
        correct: 'Point where no player wants to change strategy',
        explanation: 'Nash equilibrium is a situation where no player can improve their payoff by unilaterally changing their strategy.',
        difficulty: 'hard'
      }
    ]
  },

  // Grade 12 Units based on New Curriculum
  {
    id: 'grade12_fundamental_macroeconomics',
    name: 'Unit 1: Fundamental Concepts of Macroeconomics',
    description: 'Basic macroeconomic principles and concepts',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_fund_macro_easy_1',
        question: 'What is macroeconomics?',
        options: ['Study of individual firms', 'Study of the economy as a whole', 'Study of markets only', 'Study of prices only'],
        correct: 'Study of the economy as a whole',
        explanation: 'Macroeconomics studies the economy as a whole, including national income, employment, and overall economic performance.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fund_macro_easy_2',
        question: 'What is GDP?',
        options: ['Government debt', 'Gross Domestic Product', 'Growth development plan', 'General domestic policy'],
        correct: 'Gross Domestic Product',
        explanation: 'GDP (Gross Domestic Product) is the total value of all goods and services produced in a country during a specific period.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fund_macro_easy_3',
        question: 'What is the difference between nominal and real GDP?',
        options: ['No difference', 'Nominal uses current prices, real uses constant prices', 'Only calculation method differs', 'Only time period differs'],
        correct: 'Nominal uses current prices, real uses constant prices',
        explanation: 'Nominal GDP uses current prices; real GDP uses constant prices to account for inflation.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fund_macro_easy_4',
        question: 'What is national income?',
        options: ['Government revenue', 'Total income earned by a nations residents', 'Foreign aid received', 'Tax collections'],
        correct: 'Total income earned by a nations residents',
        explanation: 'National income is the total income earned by all residents of a country from economic activities.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fund_macro_easy_5',
        question: 'What is economic growth?',
        options: ['Population growth', 'Increase in countrys production of goods and services', 'Price increases', 'Government expansion'],
        correct: 'Increase in countrys production of goods and services',
        explanation: 'Economic growth is the increase in a country\'s production of goods and services over time.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fund_macro_easy_6',
        question: 'What is the business cycle?',
        options: ['Daily business operations', 'Fluctuations in economic activity over time', 'Company profits', 'Market hours'],
        correct: 'Fluctuations in economic activity over time',
        explanation: 'The business cycle refers to the fluctuations in economic activity, including periods of expansion and contraction.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fund_macro_easy_7',
        question: 'What is unemployment?',
        options: ['Everyone working', 'People willing and able to work but cannot find jobs', 'Retirement', 'Vacation time'],
        correct: 'People willing and able to work but cannot find jobs',
        explanation: 'Unemployment refers to people who are willing and able to work but cannot find employment.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fund_macro_easy_8',
        question: 'What is inflation?',
        options: ['Falling prices', 'Rising general price level', 'Constant prices', 'Zero prices'],
        correct: 'Rising general price level',
        explanation: 'Inflation is a sustained increase in the general price level of goods and services in an economy.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fund_macro_easy_9',
        question: 'What are the main economic indicators?',
        options: ['Only GDP', 'GDP, inflation, unemployment, interest rates', 'Only population', 'Only government spending'],
        correct: 'GDP, inflation, unemployment, interest rates',
        explanation: 'Key economic indicators include GDP, inflation rate, unemployment rate, and interest rates.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fund_macro_easy_10',
        question: 'What is a recession?',
        options: ['Economic growth', 'Economic decline for two consecutive quarters', 'Stable economy', 'Government spending'],
        correct: 'Economic decline for two consecutive quarters',
        explanation: 'A recession is typically defined as two consecutive quarters of negative economic growth.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_fund_macro_med_1',
        question: 'What are the components of GDP by expenditure approach?',
        options: ['Only consumption', 'Consumption, investment, government spending, net exports', 'Only government spending', 'Only exports'],
        correct: 'Consumption, investment, government spending, net exports',
        explanation: 'GDP = C + I + G + (X - M), where C is consumption, I is investment, G is government spending, and (X-M) is net exports.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fund_macro_med_2',
        question: 'What is the circular flow of income?',
        options: ['One-way flow', 'Flow of money between households and firms', 'Government control', 'International trade only'],
        correct: 'Flow of money between households and firms',
        explanation: 'The circular flow shows how money moves between households, firms, and government in an economy.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fund_macro_med_3',
        question: 'What is the multiplier effect?',
        options: ['No effect', 'Initial spending creates larger total increase in economic activity', 'Decreasing effect', 'One-to-one effect'],
        correct: 'Initial spending creates larger total increase in economic activity',
        explanation: 'The multiplier effect shows how initial spending can create a larger overall increase in economic activity.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fund_macro_med_4',
        question: 'What is the difference between stock and flow variables?',
        options: ['No difference', 'Stock measured at point in time, flow measured over period', 'Only measurement units differ', 'Only calculation methods differ'],
        correct: 'Stock measured at point in time, flow measured over period',
        explanation: 'Stock variables are measured at a specific point in time, while flow variables are measured over a period of time.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fund_macro_med_5',
        question: 'What is the savings-investment identity?',
        options: ['Savings always exceed investment', 'In equilibrium, savings equal investment', 'Investment always exceeds savings', 'No relationship exists'],
        correct: 'In equilibrium, savings equal investment',
        explanation: 'In macroeconomic equilibrium, total savings in the economy must equal total investment.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fund_macro_med_6',
        question: 'What is potential output?',
        options: ['Minimum output', 'Maximum sustainable output at full employment', 'Current output', 'Government target'],
        correct: 'Maximum sustainable output at full employment',
        explanation: 'Potential output is the maximum level of output an economy can sustain when operating at full employment.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fund_macro_med_7',
        question: 'What is the output gap?',
        options: ['Export-import difference', 'Difference between actual and potential output', 'Government deficit', 'Inflation rate'],
        correct: 'Difference between actual and potential output',
        explanation: 'The output gap measures the difference between actual economic output and potential output.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fund_macro_med_8',
        question: 'What is the natural rate of unemployment?',
        options: ['Zero unemployment', 'Unemployment rate when economy is at full employment', 'Maximum unemployment', 'Minimum unemployment'],
        correct: 'Unemployment rate when economy is at full employment',
        explanation: 'The natural rate of unemployment is the unemployment rate that exists when the economy is at full employment.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fund_macro_med_9',
        question: 'What is stagflation?',
        options: ['Growth with inflation', 'Stagnant growth with inflation', 'Deflation with growth', 'Normal economic condition'],
        correct: 'Stagnant growth with inflation',
        explanation: 'Stagflation is the combination of stagnant economic growth and rising inflation.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fund_macro_med_10',
        question: 'What is the velocity of money?',
        options: ['Speed of transactions', 'Rate at which money changes hands', 'Interest rate', 'Exchange rate'],
        correct: 'Rate at which money changes hands',
        explanation: 'Velocity of money measures how quickly money circulates through the economy.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_fund_macro_hard_1',
        question: 'What is the IS-LM model?',
        options: ['Trade model', 'Model showing relationship between interest rates and output', 'Labor market model', 'Price determination model'],
        correct: 'Model showing relationship between interest rates and output',
        explanation: 'The IS-LM model shows the relationship between interest rates and real output in the goods and money markets.',
        difficulty: 'hard'
      },
      {
        id: 'g12_fund_macro_hard_2',
        question: 'What is the Solow growth model?',
        options: ['Trade model', 'Long-run economic growth model based on capital accumulation', 'Short-run fluctuation model', 'Labor market model'],
        correct: 'Long-run economic growth model based on capital accumulation',
        explanation: 'The Solow model explains long-run economic growth through capital accumulation, labor growth, and technological progress.',
        difficulty: 'hard'
      },
      {
        id: 'g12_fund_macro_hard_3',
        question: 'What is the Golden Rule of capital accumulation?',
        options: ['Maximum consumption today', 'Capital level that maximizes consumption per worker', 'Minimum capital stock', 'Government investment rule'],
        correct: 'Capital level that maximizes consumption per worker',
        explanation: 'The Golden Rule identifies the optimal capital stock that maximizes consumption per worker in steady state.',
        difficulty: 'hard'
      },
      {
        id: 'g12_fund_macro_hard_4',
        question: 'What is the Ramsey model?',
        options: ['Static model', 'Dynamic model of optimal consumption and saving', 'Trade model', 'Government model'],
        correct: 'Dynamic model of optimal consumption and saving',
        explanation: 'The Ramsey model analyzes optimal consumption and saving decisions over time by forward-looking agents.',
        difficulty: 'hard'
      },
      {
        id: 'g12_fund_macro_hard_5',
        question: 'What is real business cycle theory?',
        options: ['Demand-driven cycles', 'Business cycles caused by technology shocks', 'Government-caused cycles', 'Monetary cycles only'],
        correct: 'Business cycles caused by technology shocks',
        explanation: 'Real business cycle theory explains economic fluctuations as responses to real shocks, particularly technology shocks.',
        difficulty: 'hard'
      },
      {
        id: 'g12_fund_macro_hard_6',
        question: 'What is the Lucas critique?',
        options: ['Policy always works', 'Economic relationships change when policy changes', 'Models are always correct', 'Data is always reliable'],
        correct: 'Economic relationships change when policy changes',
        explanation: 'The Lucas critique argues that econometric models fail when used for policy analysis because relationships change with policy.',
        difficulty: 'hard'
      },
      {
        id: 'g12_fund_macro_hard_7',
        question: 'What is the consumption function in lifecycle theory?',
        options: ['Income determines consumption', 'Consumption based on lifetime wealth', 'Only current income matters', 'Random consumption'],
        correct: 'Consumption based on lifetime wealth',
        explanation: 'Lifecycle theory suggests consumption decisions are based on expected lifetime income, not just current income.',
        difficulty: 'hard'
      },
      {
        id: 'g12_fund_macro_hard_8',
        question: 'What is hysteresis in macroeconomics?',
        options: ['No lasting effects', 'Temporary shocks have permanent effects', 'Only short-term effects', 'Cyclical patterns'],
        correct: 'Temporary shocks have permanent effects',
        explanation: 'Hysteresis refers to situations where temporary economic shocks have permanent effects on economic variables.',
        difficulty: 'hard'
      },
      {
        id: 'g12_fund_macro_hard_9',
        question: 'What is the time inconsistency problem?',
        options: ['Time measurement issues', 'Optimal policy today may not be optimal tomorrow', 'Clock synchronization', 'Data timing problems'],
        correct: 'Optimal policy today may not be optimal tomorrow',
        explanation: 'Time inconsistency occurs when a policy that is optimal to announce today becomes suboptimal to implement later.',
        difficulty: 'hard'
      },
      {
        id: 'g12_fund_macro_hard_10',
        question: 'What is the Taylor rule?',
        options: ['Fiscal policy rule', 'Monetary policy rule for setting interest rates', 'Trade policy rule', 'Labor market rule'],
        correct: 'Monetary policy rule for setting interest rates',
        explanation: 'The Taylor rule provides guidance for central banks on how to adjust interest rates based on inflation and output.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_aggregate_demand_supply',
    name: 'Unit 2: Aggregate Demand and Aggregate Supply Analysis',
    description: 'Analysis of economy-wide demand and supply',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_ad_as_easy_1',
        question: 'What is aggregate demand?',
        options: ['Individual demand', 'Total demand for goods and services in economy', 'Supply of goods', 'Market price'],
        correct: 'Total demand for goods and services in economy',
        explanation: 'Aggregate demand is the total demand for all goods and services in an economy at different price levels.',
        difficulty: 'easy'
      },
      {
        id: 'g12_ad_as_easy_2',
        question: 'What is aggregate supply?',
        options: ['Individual supply', 'Total supply of goods and services in economy', 'Demand for goods', 'Market equilibrium'],
        correct: 'Total supply of goods and services in economy',
        explanation: 'Aggregate supply is the total supply of goods and services available in an economy at different price levels.',
        difficulty: 'easy'
      },
      {
        id: 'g12_ad_as_easy_3',
        question: 'What causes the aggregate demand curve to slope downward?',
        options: ['Higher prices increase purchasing power', 'Higher prices decrease real wealth and spending', 'Supply increases', 'Government policy'],
        correct: 'Higher prices decrease real wealth and spending',
        explanation: 'The AD curve slopes downward because higher prices reduce real wealth, making people spend less.',
        difficulty: 'easy'
      },
      {
        id: 'g12_ad_as_easy_4',
        question: 'What are the components of aggregate demand?',
        options: ['Only consumption', 'Consumption, investment, government spending, net exports', 'Only investment', 'Only government spending'],
        correct: 'Consumption, investment, government spending, net exports',
        explanation: 'AD = C + I + G + (X-M), consisting of consumption, investment, government spending, and net exports.',
        difficulty: 'easy'
      },
      {
        id: 'g12_ad_as_easy_5',
        question: 'What shifts the aggregate demand curve to the right?',
        options: ['Decreased consumer confidence', 'Increased government spending', 'Higher taxes', 'Reduced investment'],
        correct: 'Increased government spending',
        explanation: 'Factors that increase spending, like increased government expenditure, shift AD curve to the right.',
        difficulty: 'easy'
      },
      {
        id: 'g12_ad_as_easy_6',
        question: 'What is the short-run aggregate supply curve?',
        options: ['Vertical line', 'Upward sloping curve', 'Horizontal line', 'Downward sloping curve'],
        correct: 'Upward sloping curve',
        explanation: 'The short-run AS curve slopes upward because firms can increase output by paying higher wages.',
        difficulty: 'easy'
      },
      {
        id: 'g12_ad_as_easy_7',
        question: 'What is the long-run aggregate supply curve?',
        options: ['Upward sloping', 'Vertical line at potential output', 'Horizontal line', 'Downward sloping'],
        correct: 'Vertical line at potential output',
        explanation: 'The long-run AS curve is vertical at potential output because prices and wages are fully flexible.',
        difficulty: 'easy'
      },
      {
        id: 'g12_ad_as_easy_8',
        question: 'What happens at macroeconomic equilibrium?',
        options: ['AD exceeds AS', 'AS exceeds AD', 'AD equals AS', 'No relationship'],
        correct: 'AD equals AS',
        explanation: 'Macroeconomic equilibrium occurs where aggregate demand equals aggregate supply.',
        difficulty: 'easy'
      },
      {
        id: 'g12_ad_as_easy_9',
        question: 'What causes demand-pull inflation?',
        options: ['Rising costs', 'Excessive aggregate demand', 'Falling supply', 'Government intervention'],
        correct: 'Excessive aggregate demand',
        explanation: 'Demand-pull inflation occurs when aggregate demand exceeds aggregate supply, pulling prices up.',
        difficulty: 'easy'
      },
      {
        id: 'g12_ad_as_easy_10',
        question: 'What causes cost-push inflation?',
        options: ['Increased demand', 'Increased production costs', 'Decreased demand', 'Government policy'],
        correct: 'Increased production costs',
        explanation: 'Cost-push inflation occurs when rising production costs force businesses to increase prices.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_ad_as_med_1',
        question: 'What is the wealth effect in aggregate demand?',
        options: ['No effect on spending', 'Higher prices reduce real wealth and consumption', 'Higher prices increase wealth', 'Only affects investment'],
        correct: 'Higher prices reduce real wealth and consumption',
        explanation: 'The wealth effect shows that higher price levels reduce the real value of wealth, decreasing consumption.',
        difficulty: 'medium'
      },
      {
        id: 'g12_ad_as_med_2',
        question: 'What is the interest rate effect in aggregate demand?',
        options: ['Interest rates dont affect AD', 'Higher prices lead to higher interest rates, reducing investment', 'Lower prices increase interest rates', 'Only affects government spending'],
        correct: 'Higher prices lead to higher interest rates, reducing investment',
        explanation: 'Higher prices increase money demand, raising interest rates and reducing interest-sensitive spending.',
        difficulty: 'medium'
      },
      {
        id: 'g12_ad_as_med_3',
        question: 'What is the international trade effect in aggregate demand?',
        options: ['No international impact', 'Higher domestic prices reduce net exports', 'Higher prices increase exports', 'Only affects imports'],
        correct: 'Higher domestic prices reduce net exports',
        explanation: 'Higher domestic prices make exports less competitive and imports more attractive, reducing net exports.',
        difficulty: 'medium'
      },
      {
        id: 'g12_ad_as_med_4',
        question: 'What shifts the short-run aggregate supply curve?',
        options: ['Only demand changes', 'Changes in input prices, productivity, expectations', 'Only government policy', 'Only monetary policy'],
        correct: 'Changes in input prices, productivity, expectations',
        explanation: 'SRAS shifts due to changes in input costs, productivity, and firms\' price expectations.',
        difficulty: 'medium'
      },
      {
        id: 'g12_ad_as_med_5',
        question: 'What shifts the long-run aggregate supply curve?',
        options: ['Price level changes', 'Changes in productive capacity and technology', 'Monetary policy', 'Short-term shocks'],
        correct: 'Changes in productive capacity and technology',
        explanation: 'LRAS shifts when the economys productive capacity changes due to technology, resources, or institutions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_ad_as_med_6',
        question: 'What is a supply shock?',
        options: ['Demand increase', 'Sudden change in production costs or availability', 'Government spending change', 'Consumer preference change'],
        correct: 'Sudden change in production costs or availability',
        explanation: 'A supply shock is an unexpected event that changes production costs or the availability of key inputs.',
        difficulty: 'medium'
      },
      {
        id: 'g12_ad_as_med_7',
        question: 'What happens with a positive demand shock?',
        options: ['Output and prices both fall', 'Output and prices both rise', 'Output rises, prices fall', 'Output falls, prices rise'],
        correct: 'Output and prices both rise',
        explanation: 'A positive demand shock shifts AD right, increasing both equilibrium output and price level.',
        difficulty: 'medium'
      },
      {
        id: 'g12_ad_as_med_8',
        question: 'What happens with a negative supply shock?',
        options: ['Output and prices both fall', 'Output falls, prices rise', 'Output and prices both rise', 'Output rises, prices fall'],
        correct: 'Output falls, prices rise',
        explanation: 'A negative supply shock shifts AS left, decreasing output while increasing the price level.',
        difficulty: 'medium'
      },
      {
        id: 'g12_ad_as_med_9',
        question: 'What is the self-correcting mechanism?',
        options: ['Government intervention needed', 'Economy automatically returns to long-run equilibrium', 'No adjustment occurs', 'Only monetary policy works'],
        correct: 'Economy automatically returns to long-run equilibrium',
        explanation: 'The self-correcting mechanism shows how wage and price adjustments return the economy to potential output.',
        difficulty: 'medium'
      },
      {
        id: 'g12_ad_as_med_10',
        question: 'What is the difference between short-run and long-run equilibrium?',
        options: ['No difference', 'Short-run may have unemployment, long-run at full employment', 'Only time frame differs', 'Only price levels differ'],
        correct: 'Short-run may have unemployment, long-run at full employment',
        explanation: 'Short-run equilibrium can occur away from full employment; long-run equilibrium occurs at potential output.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_ad_as_hard_1',
        question: 'What is the sticky wage model of aggregate supply?',
        options: ['Wages adjust immediately', 'Wages are slow to adjust to economic conditions', 'Wages are always flexible', 'No wage considerations'],
        correct: 'Wages are slow to adjust to economic conditions',
        explanation: 'The sticky wage model explains upward-sloping SRAS because nominal wages adjust slowly to economic conditions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_ad_as_hard_2',
        question: 'What is the sticky price model of aggregate supply?',
        options: ['All prices adjust instantly', 'Some firms are slow to adjust their prices', 'Prices never change', 'Only wages matter'],
        correct: 'Some firms are slow to adjust their prices',
        explanation: 'The sticky price model shows that some firms adjust prices slowly, creating an upward-sloping SRAS curve.',
        difficulty: 'hard'
      },
      {
        id: 'g12_ad_as_hard_3',
        question: 'What is the imperfect information model of aggregate supply?',
        options: ['Perfect information always', 'Firms mistake price level changes for relative price changes', 'No information needed', 'Only consumers matter'],
        correct: 'Firms mistake price level changes for relative price changes',
        explanation: 'When firms misperceive general price increases as relative price increases, they increase output.',
        difficulty: 'hard'
      },
      {
        id: 'g12_ad_as_hard_4',
        question: 'What is the liquidity trap in AD-AS analysis?',
        options: ['High interest rates', 'Monetary policy becomes ineffective at very low interest rates', 'Fiscal policy fails', 'No economic impact'],
        correct: 'Monetary policy becomes ineffective at very low interest rates',
        explanation: 'In a liquidity trap, further monetary expansion cannot stimulate aggregate demand because interest rates are near zero.',
        difficulty: 'hard'
      },
      {
        id: 'g12_ad_as_hard_5',
        question: 'What is hysteresis in the labor market?',
        options: ['No lasting unemployment effects', 'Temporary unemployment becomes permanent', 'Only short-term effects', 'Immediate adjustment'],
        correct: 'Temporary unemployment becomes permanent',
        explanation: 'Hysteresis occurs when temporary unemployment leads to permanent increases in the natural rate of unemployment.',
        difficulty: 'hard'
      },
      {
        id: 'g12_ad_as_hard_6',
        question: 'What is the accelerationist Phillips curve?',
        options: ['Permanent inflation-unemployment tradeoff', 'No long-run tradeoff between inflation and unemployment', 'Inflation always accelerates', 'Unemployment always rises'],
        correct: 'No long-run tradeoff between inflation and unemployment',
        explanation: 'The accelerationist Phillips curve shows no long-run tradeoff; attempts to keep unemployment below natural rate accelerate inflation.',
        difficulty: 'hard'
      },
      {
        id: 'g12_ad_as_hard_7',
        question: 'What is rational expectations in AD-AS analysis?',
        options: ['People are irrational', 'People form expectations using all available information efficiently', 'Only past data matters', 'Expectations dont matter'],
        correct: 'People form expectations using all available information efficiently',
        explanation: 'Rational expectations theory assumes people use all available information to form unbiased forecasts of future variables.',
        difficulty: 'hard'
      },
      {
        id: 'g12_ad_as_hard_8',
        question: 'What is the New Keynesian Phillips curve?',
        options: ['Same as original Phillips curve', 'Forward-looking inflation expectations with price stickiness', 'Backward-looking only', 'No expectations'],
        correct: 'Forward-looking inflation expectations with price stickiness',
        explanation: 'The New Keynesian Phillips curve incorporates forward-looking expectations and explains why inflation responds gradually to economic conditions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_ad_as_hard_9',
        question: 'What is the Lucas supply curve?',
        options: ['Always vertical', 'Output responds to unexpected price changes', 'Always horizontal', 'No price effects'],
        correct: 'Output responds to unexpected price changes',
        explanation: 'The Lucas supply curve shows that output responds only to unexpected changes in the price level, not anticipated changes.',
        difficulty: 'hard'
      },
      {
        id: 'g12_ad_as_hard_10',
        question: 'What is the policy ineffectiveness proposition?',
        options: ['All policies work', 'Systematic monetary policy cannot affect real variables', 'Only fiscal policy works', 'Random policies work best'],
        correct: 'Systematic monetary policy cannot affect real variables',
        explanation: 'Under rational expectations and flexible prices, systematic monetary policy cannot affect real output or employment.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_market_failure_consumer_protection',
    name: 'Unit 3: Market Failure and Consumer Protection',
    description: 'Market failures and consumer protection mechanisms',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_market_fail_easy_1',
        question: 'What is market failure?',
        options: ['Markets working perfectly', 'Markets failing to allocate resources efficiently', 'Government success', 'Price controls'],
        correct: 'Markets failing to allocate resources efficiently',
        explanation: 'Market failure occurs when markets fail to allocate resources efficiently, leading to welfare loss.',
        difficulty: 'easy'
      },
      {
        id: 'g12_market_fail_easy_2',
        question: 'What is an externality?',
        options: ['Internal cost', 'Cost or benefit affecting third parties', 'Market price', 'Producer cost'],
        correct: 'Cost or benefit affecting third parties',
        explanation: 'An externality is a cost or benefit that affects parties who did not choose to incur that cost or benefit.',
        difficulty: 'easy'
      },
      {
        id: 'g12_market_fail_easy_3',
        question: 'What is a public good?',
        options: ['Privately owned good', 'Non-excludable and non-rivalrous good', 'Government building', 'Expensive good'],
        correct: 'Non-excludable and non-rivalrous good',
        explanation: 'Public goods are non-excludable (cannot prevent use) and non-rivalrous (one persons use doesnt reduce availability).',
        difficulty: 'easy'
      },
      {
        id: 'g12_market_fail_easy_4',
        question: 'What is asymmetric information?',
        options: ['Perfect information', 'One party has more information than the other', 'No information available', 'Government information'],
        correct: 'One party has more information than the other',
        explanation: 'Asymmetric information occurs when one party in a transaction has more or better information than the other.',
        difficulty: 'easy'
      },
      {
        id: 'g12_market_fail_easy_5',
        question: 'What is consumer protection?',
        options: ['Protecting producers', 'Safeguarding consumer rights and interests', 'Government revenue', 'Market regulation'],
        correct: 'Safeguarding consumer rights and interests',
        explanation: 'Consumer protection involves measures to safeguard consumer rights and protect them from unfair practices.',
        difficulty: 'easy'
      },
      {
        id: 'g12_market_fail_easy_6',
        question: 'What is a negative externality?',
        options: ['Positive impact on others', 'Harmful effect on third parties', 'No external effect', 'Government benefit'],
        correct: 'Harmful effect on third parties',
        explanation: 'A negative externality imposes costs on third parties who are not involved in the economic transaction.',
        difficulty: 'easy'
      },
      {
        id: 'g12_market_fail_easy_7',
        question: 'What is a positive externality?',
        options: ['Harmful effect on others', 'Beneficial effect on third parties', 'No external effect', 'Private benefit only'],
        correct: 'Beneficial effect on third parties',
        explanation: 'A positive externality provides benefits to third parties who are not involved in the economic transaction.',
        difficulty: 'easy'
      },
      {
        id: 'g12_market_fail_easy_8',
        question: 'What is monopoly power?',
        options: ['Perfect competition', 'Ability to set prices above marginal cost', 'Government control', 'Price taking behavior'],
        correct: 'Ability to set prices above marginal cost',
        explanation: 'Monopoly power is the ability of a firm to set prices above marginal cost and earn economic profits.',
        difficulty: 'easy'
      },
      {
        id: 'g12_market_fail_easy_9',
        question: 'What is moral hazard?',
        options: ['Ethical behavior', 'Increased risk-taking due to protection from consequences', 'Legal obligation', 'Social responsibility'],
        correct: 'Increased risk-taking due to protection from consequences',
        explanation: 'Moral hazard occurs when parties take greater risks because they are protected from consequences.',
        difficulty: 'easy'
      },
      {
        id: 'g12_market_fail_easy_10',
        question: 'What is adverse selection?',
        options: ['Good selection process', 'High-risk individuals more likely to purchase insurance', 'Random selection', 'Perfect selection'],
        correct: 'High-risk individuals more likely to purchase insurance',
        explanation: 'Adverse selection occurs when high-risk individuals are more likely to seek insurance, driving up costs.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_market_fail_med_1',
        question: 'What is the Coase theorem?',
        options: ['Government must intervene', 'Private parties can solve externalities with clear property rights', 'Markets always fail', 'Regulation is always needed'],
        correct: 'Private parties can solve externalities with clear property rights',
        explanation: 'The Coase theorem states that private parties can negotiate solutions to externality problems if property rights are well-defined.',
        difficulty: 'medium'
      },
      {
        id: 'g12_market_fail_med_2',
        question: 'What is the free rider problem?',
        options: ['Everyone pays', 'People benefit without contributing', 'No benefits available', 'Excessive payment'],
        correct: 'People benefit without contributing',
        explanation: 'The free rider problem occurs when people can benefit from goods or services without paying for them.',
        difficulty: 'medium'
      },
      {
        id: 'g12_market_fail_med_3',
        question: 'What is deadweight loss from monopoly?',
        options: ['Consumer gain', 'Loss of economic efficiency due to underproduction', 'Producer loss only', 'No efficiency loss'],
        correct: 'Loss of economic efficiency due to underproduction',
        explanation: 'Monopoly deadweight loss occurs because monopolists produce less than the socially optimal quantity.',
        difficulty: 'medium'
      },
      {
        id: 'g12_market_fail_med_4',
        question: 'What is price discrimination?',
        options: ['Same price for all', 'Charging different prices for same product', 'Cost-based pricing', 'Free goods'],
        correct: 'Charging different prices for same product',
        explanation: 'Price discrimination involves charging different prices to different customers for the same product.',
        difficulty: 'medium'
      },
      {
        id: 'g12_market_fail_med_5',
        question: 'What is a Pigouvian tax?',
        options: ['Income tax', 'Tax on activities that create negative externalities', 'Sales tax', 'Property tax'],
        correct: 'Tax on activities that create negative externalities',
        explanation: 'A Pigouvian tax is imposed on activities that generate negative externalities to internalize the social cost.',
        difficulty: 'medium'
      },
      {
        id: 'g12_market_fail_med_6',
        question: 'What is a common resource?',
        options: ['Private good', 'Rivalrous but non-excludable good', 'Public good', 'Club good'],
        correct: 'Rivalrous but non-excludable good',
        explanation: 'Common resources are rivalrous (use by one reduces availability) but non-excludable (hard to prevent access).',
        difficulty: 'medium'
      },
      {
        id: 'g12_market_fail_med_7',
        question: 'What is the tragedy of the commons?',
        options: ['Efficient resource use', 'Overuse of common resources', 'Underuse of resources', 'Optimal allocation'],
        correct: 'Overuse of common resources',
        explanation: 'The tragedy of the commons occurs when individuals overuse shared resources, leading to depletion.',
        difficulty: 'medium'
      },
      {
        id: 'g12_market_fail_med_8',
        question: 'What is regulatory capture?',
        options: ['Effective regulation', 'Regulators serving industry interests instead of public', 'Consumer protection', 'Government efficiency'],
        correct: 'Regulators serving industry interests instead of public',
        explanation: 'Regulatory capture occurs when regulatory agencies are dominated by the industries they are supposed to regulate.',
        difficulty: 'medium'
      },
      {
        id: 'g12_market_fail_med_9',
        question: 'What is network externality?',
        options: ['No network effects', 'Value increases with number of users', 'Decreasing value', 'Constant value'],
        correct: 'Value increases with number of users',
        explanation: 'Network externality occurs when a products value increases as more people use it.',
        difficulty: 'medium'
      },
      {
        id: 'g12_market_fail_med_10',
        question: 'What is information asymmetry in insurance markets?',
        options: ['Perfect information', 'Insurers know less about individual risk than customers', 'No information needed', 'Government has all information'],
        correct: 'Insurers know less about individual risk than customers',
        explanation: 'In insurance markets, customers typically know more about their own risk levels than insurers do.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_market_fail_hard_1',
        question: 'What is the revelation principle in mechanism design?',
        options: ['Hide information', 'Any mechanism can be replaced by truth-revealing mechanism', 'Lie for better outcomes', 'No revelation needed'],
        correct: 'Any mechanism can be replaced by truth-revealing mechanism',
        explanation: 'The revelation principle states that any mechanism can be replaced by an equivalent direct mechanism where truth-telling is optimal.',
        difficulty: 'hard'
      },
      {
        id: 'g12_market_fail_hard_2',
        question: 'What is the Vickrey auction?',
        options: ['First price auction', 'Second price sealed bid auction', 'Open ascending auction', 'Dutch auction'],
        correct: 'Second price sealed bid auction',
        explanation: 'A Vickrey auction is a second-price sealed-bid auction where the highest bidder wins but pays the second-highest bid.',
        difficulty: 'hard'
      },
      {
        id: 'g12_market_fail_hard_3',
        question: 'What is the Rothschild-Stiglitz model?',
        options: ['Perfect competition model', 'Insurance market equilibrium with adverse selection', 'Monopoly model', 'Public goods model'],
        correct: 'Insurance market equilibrium with adverse selection',
        explanation: 'The Rothschild-Stiglitz model analyzes competitive equilibrium in insurance markets with adverse selection.',
        difficulty: 'hard'
      },
      {
        id: 'g12_market_fail_hard_4',
        question: 'What is a separating equilibrium?',
        options: ['Pooling of types', 'Different types choose different contracts', 'No equilibrium', 'Perfect information'],
        correct: 'Different types choose different contracts',
        explanation: 'In a separating equilibrium, different types of agents choose different contracts, revealing their private information.',
        difficulty: 'hard'
      },
      {
        id: 'g12_market_fail_hard_5',
        question: 'What is a pooling equilibrium?',
        options: ['Types separate completely', 'All types choose the same contract', 'No contracts offered', 'Perfect discrimination'],
        correct: 'All types choose the same contract',
        explanation: 'In a pooling equilibrium, all types choose the same contract, hiding their private information.',
        difficulty: 'hard'
      },
      {
        id: 'g12_market_fail_hard_6',
        question: 'What is the lemons market?',
        options: ['High quality market', 'Market where quality uncertainty leads to market unraveling', 'Perfect information market', 'Government market'],
        correct: 'Market where quality uncertainty leads to market unraveling',
        explanation: 'The lemons market, described by Akerlof, shows how quality uncertainty can cause market failure.',
        difficulty: 'hard'
      },
      {
        id: 'g12_market_fail_hard_7',
        question: 'What is signaling in economics?',
        options: ['No information transmission', 'Informed party credibly communicates private information', 'Random behavior', 'Government communication'],
        correct: 'Informed party credibly communicates private information',
        explanation: 'Signaling occurs when an informed party takes observable actions to credibly communicate private information.',
        difficulty: 'hard'
      },
      {
        id: 'g12_market_fail_hard_8',
        question: 'What is screening in economics?',
        options: ['Movie screening', 'Uninformed party induces informed party to reveal information', 'Random selection', 'No information exchange'],
        correct: 'Uninformed party induces informed party to reveal information',
        explanation: 'Screening occurs when an uninformed party designs mechanisms to induce informed parties to reveal their private information.',
        difficulty: 'hard'
      },
      {
        id: 'g12_market_fail_hard_9',
        question: 'What is the principal-agent problem?',
        options: ['Perfect alignment of interests', 'Conflict between principal and agent due to information asymmetry', 'No relationship issues', 'Government intervention'],
        correct: 'Conflict between principal and agent due to information asymmetry',
        explanation: 'The principal-agent problem arises when an agent acts on behalf of a principal but their interests may not align.',
        difficulty: 'hard'
      },
      {
        id: 'g12_market_fail_hard_10',
        question: 'What is the incentive compatibility constraint?',
        options: ['No constraints needed', 'Agents must prefer truth-telling to lying', 'Any behavior acceptable', 'Government mandated behavior'],
        correct: 'Agents must prefer truth-telling to lying',
        explanation: 'Incentive compatibility ensures that agents find it optimal to reveal their true type or take desired actions.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_macroeconomic_policy_instruments',
    name: 'Unit 4: Macroeconomic Policy Instruments',
    description: 'Fiscal and monetary policy tools',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_macro_policy_easy_1',
        question: 'What is fiscal policy?',
        options: ['Monetary policy', 'Government spending and taxation policy', 'Trade policy', 'Labor policy'],
        correct: 'Government spending and taxation policy',
        explanation: 'Fiscal policy involves government decisions about spending and taxation to influence the economy.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_policy_easy_2',
        question: 'What is monetary policy?',
        options: ['Government spending', 'Central bank control of money supply and interest rates', 'Tax policy', 'Trade policy'],
        correct: 'Central bank control of money supply and interest rates',
        explanation: 'Monetary policy involves central bank actions to control the money supply and interest rates.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_policy_easy_3',
        question: 'What is expansionary fiscal policy?',
        options: ['Reducing government spending', 'Increasing spending or reducing taxes', 'Balancing budget', 'Raising taxes'],
        correct: 'Increasing spending or reducing taxes',
        explanation: 'Expansionary fiscal policy involves increasing government spending or reducing taxes to stimulate economic growth.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_policy_easy_4',
        question: 'What is contractionary fiscal policy?',
        options: ['Increasing spending', 'Reducing spending or increasing taxes', 'Printing money', 'Lowering interest rates'],
        correct: 'Reducing spending or increasing taxes',
        explanation: 'Contractionary fiscal policy involves reducing government spending or increasing taxes to cool down the economy.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_policy_easy_5',
        question: 'What is expansionary monetary policy?',
        options: ['Raising interest rates', 'Lowering interest rates or increasing money supply', 'Reducing money supply', 'Government spending'],
        correct: 'Lowering interest rates or increasing money supply',
        explanation: 'Expansionary monetary policy involves lowering interest rates or increasing money supply to stimulate economic activity.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_policy_easy_6',
        question: 'What is contractionary monetary policy?',
        options: ['Lowering interest rates', 'Raising interest rates or reducing money supply', 'Increasing money supply', 'Government borrowing'],
        correct: 'Raising interest rates or reducing money supply',
        explanation: 'Contractionary monetary policy involves raising interest rates or reducing money supply to combat inflation.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_policy_easy_7',
        question: 'What is the central bank?',
        options: ['Commercial bank', 'Government bank responsible for monetary policy', 'Investment bank', 'Credit union'],
        correct: 'Government bank responsible for monetary policy',
        explanation: 'The central bank is the government institution responsible for implementing monetary policy and regulating the banking system.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_policy_easy_8',
        question: 'What is the discount rate?',
        options: ['Consumer loan rate', 'Interest rate central bank charges commercial banks', 'Savings account rate', 'Credit card rate'],
        correct: 'Interest rate central bank charges commercial banks',
        explanation: 'The discount rate is the interest rate the central bank charges when lending money to commercial banks.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_policy_easy_9',
        question: 'What are reserve requirements?',
        options: ['Government savings', 'Minimum reserves banks must hold', 'Maximum lending limit', 'Interest rate ceiling'],
        correct: 'Minimum reserves banks must hold',
        explanation: 'Reserve requirements are the minimum amount of reserves that banks must hold against their deposits.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_policy_easy_10',
        question: 'What is open market operations?',
        options: ['Stock market trading', 'Central bank buying/selling government securities', 'Foreign exchange trading', 'Real estate transactions'],
        correct: 'Central bank buying/selling government securities',
        explanation: 'Open market operations involve the central bank buying or selling government securities to influence money supply.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_macro_policy_med_1',
        question: 'What is automatic stabilizer?',
        options: ['Manual intervention', 'Economic policy that automatically adjusts to economic conditions', 'Fixed policy', 'No policy'],
        correct: 'Economic policy that automatically adjusts to economic conditions',
        explanation: 'Automatic stabilizers like unemployment benefits automatically adjust to economic conditions without new legislation.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_policy_med_2',
        question: 'What is crowding out?',
        options: ['Government spending increases private investment', 'Government spending reduces private investment', 'No effect on investment', 'Increased exports'],
        correct: 'Government spending reduces private investment',
        explanation: 'Crowding out occurs when government borrowing leads to higher interest rates, reducing private investment.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_policy_med_3',
        question: 'What is the transmission mechanism of monetary policy?',
        options: ['Direct government control', 'How monetary policy affects economic activity through various channels', 'Automatic adjustment', 'No transmission needed'],
        correct: 'How monetary policy affects economic activity through various channels',
        explanation: 'The transmission mechanism describes how changes in monetary policy affect economic variables like output and employment.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_policy_med_4',
        question: 'What is the liquidity trap?',
        options: ['High interest rates', 'Monetary policy becomes ineffective at very low interest rates', 'Banking crisis', 'Currency devaluation'],
        correct: 'Monetary policy becomes ineffective at very low interest rates',
        explanation: 'A liquidity trap occurs when monetary policy becomes ineffective because interest rates are near zero.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_policy_med_5',
        question: 'What is quantitative easing?',
        options: ['Raising interest rates', 'Central bank buying government bonds to increase money supply', 'Fiscal expansion', 'Trade liberalization'],
        correct: 'Central bank buying government bonds to increase money supply',
        explanation: 'Quantitative easing involves central banks purchasing government bonds to inject money into the economy.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_policy_med_6',
        question: 'What is the policy lag?',
        options: ['Immediate policy effect', 'Time delay between policy implementation and economic impact', 'No time consideration', 'Instant results'],
        correct: 'Time delay between policy implementation and economic impact',
        explanation: 'Policy lag refers to the time delay between when a policy is implemented and when its effects are felt in the economy.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_policy_med_7',
        question: 'What is the recognition lag?',
        options: ['Immediate recognition', 'Time to recognize that policy action is needed', 'Implementation time', 'Effect time'],
        correct: 'Time to recognize that policy action is needed',
        explanation: 'Recognition lag is the time it takes for policymakers to recognize that the economy needs policy intervention.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_policy_med_8',
        question: 'What is the implementation lag?',
        options: ['Recognition time', 'Time to implement policy after deciding on it', 'Effect time', 'No delay'],
        correct: 'Time to implement policy after deciding on it',
        explanation: 'Implementation lag is the time between deciding on a policy and actually implementing it.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_policy_med_9',
        question: 'What is the impact lag?',
        options: ['Decision time', 'Implementation time', 'Time for policy to affect the economy', 'Recognition time'],
        correct: 'Time for policy to affect the economy',
        explanation: 'Impact lag is the time between policy implementation and when the policy actually affects economic variables.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_policy_med_10',
        question: 'What is the fiscal multiplier?',
        options: ['No multiplier effect', 'Change in output per unit change in government spending', 'Tax rate', 'Interest rate effect'],
        correct: 'Change in output per unit change in government spending',
        explanation: 'The fiscal multiplier measures how much economic output changes in response to changes in government spending.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_macro_policy_hard_1',
        question: 'What is the Taylor rule?',
        options: ['Fiscal policy rule', 'Monetary policy rule for setting interest rates', 'Trade policy rule', 'Labor market rule'],
        correct: 'Monetary policy rule for setting interest rates',
        explanation: 'The Taylor rule provides guidance for central banks on how to adjust interest rates based on inflation and output.',
        difficulty: 'hard'
      },
      {
        id: 'g12_macro_policy_hard_2',
        question: 'What is the zero lower bound problem?',
        options: ['High inflation problem', 'Cannot lower nominal interest rates below zero', 'Exchange rate problem', 'Budget deficit problem'],
        correct: 'Cannot lower nominal interest rates below zero',
        explanation: 'The zero lower bound problem occurs when nominal interest rates cannot be lowered below zero, limiting monetary policy.',
        difficulty: 'hard'
      },
      {
        id: 'g12_macro_policy_hard_3',
        question: 'What is forward guidance?',
        options: ['Past policy announcements', 'Central bank communication about future policy intentions', 'Random policy', 'No communication'],
        correct: 'Central bank communication about future policy intentions',
        explanation: 'Forward guidance is central bank communication about the likely future path of monetary policy.',
        difficulty: 'hard'
      },
      {
        id: 'g12_macro_policy_hard_4',
        question: 'What is the time inconsistency problem in monetary policy?',
        options: ['Time measurement issues', 'Optimal policy today may not be optimal tomorrow', 'Clock synchronization', 'Data timing problems'],
        correct: 'Optimal policy today may not be optimal tomorrow',
        explanation: 'Time inconsistency occurs when a policy that is optimal to announce today becomes suboptimal to implement later.',
        difficulty: 'hard'
      },
      {
        id: 'g12_macro_policy_hard_5',
        question: 'What is central bank independence?',
        options: ['Complete government control', 'Central bank autonomy in monetary policy decisions', 'No accountability', 'Private ownership'],
        correct: 'Central bank autonomy in monetary policy decisions',
        explanation: 'Central bank independence refers to the autonomy of central banks to make monetary policy decisions without political interference.',
        difficulty: 'hard'
      },
      {
        id: 'g12_macro_policy_hard_6',
        question: 'What is inflation targeting?',
        options: ['No inflation goal', 'Monetary policy regime with explicit inflation rate target', 'Maximum inflation', 'Variable targets'],
        correct: 'Monetary policy regime with explicit inflation rate target',
        explanation: 'Inflation targeting is a monetary policy strategy where the central bank sets and announces a specific inflation target.',
        difficulty: 'hard'
      },
      {
        id: 'g12_macro_policy_hard_7',
        question: 'What is the Ricardian equivalence?',
        options: ['Tax increases equal spending increases', 'Government debt financing equivalent to tax financing', 'No fiscal effects', 'Only spending matters'],
        correct: 'Government debt financing equivalent to tax financing',
        explanation: 'Ricardian equivalence suggests that government deficit spending has no effect on aggregate demand because people save more in anticipation of future taxes.',
        difficulty: 'hard'
      },
      {
        id: 'g12_macro_policy_hard_8',
        question: 'What is the fiscal theory of the price level?',
        options: ['Monetary theory only', 'Fiscal policy determines price level independently of monetary policy', 'No price level theory', 'Only real variables matter'],
        correct: 'Fiscal policy determines price level independently of monetary policy',
        explanation: 'The fiscal theory of the price level argues that fiscal policy can determine the price level even when monetary policy is passive.',
        difficulty: 'hard'
      },
      {
        id: 'g12_macro_policy_hard_9',
        question: 'What is helicopter money?',
        options: ['Monetary policy tool', 'Direct money transfers to public by central bank', 'Government spending', 'Tax cuts'],
        correct: 'Direct money transfers to public by central bank',
        explanation: 'Helicopter money refers to direct money transfers from the central bank to the public, bypassing traditional monetary policy channels.',
        difficulty: 'hard'
      },
      {
        id: 'g12_macro_policy_hard_10',
        question: 'What is yield curve control?',
        options: ['Market-determined yields', 'Central bank targeting specific yield curve shape', 'No yield management', 'Private control'],
        correct: 'Central bank targeting specific yield curve shape',
        explanation: 'Yield curve control involves the central bank targeting specific interest rates along the yield curve through bond purchases.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_tax_theory_practice',
    name: 'Unit 5: Tax Theory and Practice',
    description: 'Taxation principles and implementation',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_tax_easy_1',
        question: 'What is a tax?',
        options: ['Voluntary payment', 'Compulsory payment to government', 'Gift to government', 'Loan to government'],
        correct: 'Compulsory payment to government',
        explanation: 'A tax is a compulsory financial charge imposed by government on individuals or entities to fund public expenditures.',
        difficulty: 'easy'
      },
      {
        id: 'g12_tax_easy_2',
        question: 'What is income tax?',
        options: ['Tax on property', 'Tax on earned income', 'Tax on sales', 'Tax on imports'],
        correct: 'Tax on earned income',
        explanation: 'Income tax is a tax imposed on individuals or entities based on their earned income or profits.',
        difficulty: 'easy'
      },
      {
        id: 'g12_tax_easy_3',
        question: 'What is a sales tax?',
        options: ['Tax on income', 'Tax on purchase of goods and services', 'Tax on property', 'Tax on wealth'],
        correct: 'Tax on purchase of goods and services',
        explanation: 'Sales tax is a consumption tax imposed on the sale of goods and services.',
        difficulty: 'easy'
      },
      {
        id: 'g12_tax_easy_4',
        question: 'What is a progressive tax?',
        options: ['Same rate for everyone', 'Higher rates for higher incomes', 'Lower rates for higher incomes', 'No tax rates'],
        correct: 'Higher rates for higher incomes',
        explanation: 'A progressive tax system applies higher tax rates to individuals with higher incomes.',
        difficulty: 'easy'
      },
      {
        id: 'g12_tax_easy_5',
        question: 'What is a regressive tax?',
        options: ['Higher rates for higher incomes', 'Lower rates for higher incomes', 'Same rate for everyone', 'No tax'],
        correct: 'Lower rates for higher incomes',
        explanation: 'A regressive tax takes a larger percentage of income from low-income earners than from high-income earners.',
        difficulty: 'easy'
      },
      {
        id: 'g12_tax_easy_6',
        question: 'What is a proportional tax?',
        options: ['Different rates for different incomes', 'Same rate for all income levels', 'No tax rate', 'Variable rates'],
        correct: 'Same rate for all income levels',
        explanation: 'A proportional tax applies the same tax rate to all taxpayers regardless of income level.',
        difficulty: 'easy'
      },
      {
        id: 'g12_tax_easy_7',
        question: 'What is tax evasion?',
        options: ['Legal tax reduction', 'Illegal avoidance of paying taxes', 'Government policy', 'Tax incentive'],
        correct: 'Illegal avoidance of paying taxes',
        explanation: 'Tax evasion is the illegal practice of not paying taxes owed to the government.',
        difficulty: 'easy'
      },
      {
        id: 'g12_tax_easy_8',
        question: 'What is tax avoidance?',
        options: ['Illegal non-payment', 'Legal reduction of tax liability', 'Government subsidy', 'Tax penalty'],
        correct: 'Legal reduction of tax liability',
        explanation: 'Tax avoidance is the legal practice of minimizing tax liability through legitimate means.',
        difficulty: 'easy'
      },
      {
        id: 'g12_tax_easy_9',
        question: 'What is VAT?',
        options: ['Income tax', 'Value Added Tax on goods and services', 'Property tax', 'Wealth tax'],
        correct: 'Value Added Tax on goods and services',
        explanation: 'VAT (Value Added Tax) is a consumption tax levied on the value added to goods and services at each stage of production.',
        difficulty: 'easy'
      },
      {
        id: 'g12_tax_easy_10',
        question: 'What is the tax base?',
        options: ['Tax rate', 'Income, property, or activity subject to tax', 'Government building', 'Tax collection'],
        correct: 'Income, property, or activity subject to tax',
        explanation: 'The tax base is the total amount of income, property, or economic activity subject to taxation.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_tax_med_1',
        question: 'What is the marginal tax rate?',
        options: ['Average tax rate', 'Tax rate on the last dollar of income', 'Total tax rate', 'Minimum tax rate'],
        correct: 'Tax rate on the last dollar of income',
        explanation: 'The marginal tax rate is the percentage of tax applied to the last dollar of taxable income.',
        difficulty: 'medium'
      },
      {
        id: 'g12_tax_med_2',
        question: 'What is the average tax rate?',
        options: ['Marginal tax rate', 'Total taxes divided by total income', 'Maximum tax rate', 'Minimum tax rate'],
        correct: 'Total taxes divided by total income',
        explanation: 'The average tax rate is the total amount of taxes paid divided by total taxable income.',
        difficulty: 'medium'
      },
      {
        id: 'g12_tax_med_3',
        question: 'What is tax incidence?',
        options: ['Tax collection', 'Who ultimately bears the burden of a tax', 'Tax rate', 'Tax evasion'],
        correct: 'Who ultimately bears the burden of a tax',
        explanation: 'Tax incidence refers to the analysis of who ultimately bears the economic burden of a tax.',
        difficulty: 'medium'
      },
      {
        id: 'g12_tax_med_4',
        question: 'What is deadweight loss from taxation?',
        options: ['Tax revenue', 'Economic efficiency loss due to distorted behavior', 'Government gain', 'No loss'],
        correct: 'Economic efficiency loss due to distorted behavior',
        explanation: 'Deadweight loss occurs when taxes distort economic behavior and reduce overall economic efficiency.',
        difficulty: 'medium'
      },
      {
        id: 'g12_tax_med_5',
        question: 'What is tax shifting?',
        options: ['Moving tax offices', 'Transferring tax burden to others', 'Changing tax rates', 'Collecting taxes'],
        correct: 'Transferring tax burden to others',
        explanation: 'Tax shifting occurs when the person or entity legally required to pay a tax transfers the burden to someone else.',
        difficulty: 'medium'
      },
      {
        id: 'g12_tax_med_6',
        question: 'What is the Laffer curve?',
        options: ['Demand curve', 'Relationship between tax rates and tax revenue', 'Supply curve', 'Cost curve'],
        correct: 'Relationship between tax rates and tax revenue',
        explanation: 'The Laffer curve shows that there is an optimal tax rate that maximizes government revenue.',
        difficulty: 'medium'
      },
      {
        id: 'g12_tax_med_7',
        question: 'What is horizontal equity in taxation?',
        options: ['Different treatment for equals', 'Equal treatment of equals', 'Vertical treatment', 'No equity principle'],
        correct: 'Equal treatment of equals',
        explanation: 'Horizontal equity requires that individuals in similar circumstances should be treated equally by the tax system.',
        difficulty: 'medium'
      },
      {
        id: 'g12_tax_med_8',
        question: 'What is vertical equity in taxation?',
        options: ['Equal treatment for all', 'Appropriate different treatment based on ability to pay', 'No different treatment', 'Random treatment'],
        correct: 'Appropriate different treatment based on ability to pay',
        explanation: 'Vertical equity suggests that individuals with greater ability to pay should bear a larger tax burden.',
        difficulty: 'medium'
      },
      {
        id: 'g12_tax_med_9',
        question: 'What is the benefit principle of taxation?',
        options: ['Everyone pays equally', 'Those who benefit more should pay more', 'No payment needed', 'Random payment'],
        correct: 'Those who benefit more should pay more',
        explanation: 'The benefit principle suggests that individuals should pay taxes in proportion to the benefits they receive from government services.',
        difficulty: 'medium'
      },
      {
        id: 'g12_tax_med_10',
        question: 'What is the ability-to-pay principle?',
        options: ['Everyone pays the same', 'Those with greater ability should pay more', 'No payment required', 'Voluntary payment'],
        correct: 'Those with greater ability should pay more',
        explanation: 'The ability-to-pay principle suggests that tax burden should be distributed according to individuals\' capacity to bear it.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_tax_hard_1',
        question: 'What is the Ramsey rule for optimal taxation?',
        options: ['Tax all goods equally', 'Tax goods with inelastic demand more heavily', 'No taxation needed', 'Tax randomly'],
        correct: 'Tax goods with inelastic demand more heavily',
        explanation: 'The Ramsey rule states that to minimize deadweight loss, goods with lower price elasticity should be taxed more heavily.',
        difficulty: 'hard'
      },
      {
        id: 'g12_tax_hard_2',
        question: 'What is the inverse elasticity rule?',
        options: ['Direct relationship', 'Tax rates inversely related to price elasticity', 'No relationship', 'Positive relationship'],
        correct: 'Tax rates inversely related to price elasticity',
        explanation: 'The inverse elasticity rule suggests that optimal tax rates should be inversely related to price elasticity of demand.',
        difficulty: 'hard'
      },
      {
        id: 'g12_tax_hard_3',
        question: 'What is the Mirrlees model of optimal income taxation?',
        options: ['Flat tax model', 'Model considering information asymmetries in income taxation', 'No income tax model', 'Simple proportional tax'],
        correct: 'Model considering information asymmetries in income taxation',
        explanation: 'The Mirrlees model analyzes optimal income tax design when the government cannot observe individual abilities.',
        difficulty: 'hard'
      },
      {
        id: 'g12_tax_hard_4',
        question: 'What is tax capitalization?',
        options: ['Tax collection method', 'Tax effects incorporated into asset prices', 'Government investment', 'Tax avoidance'],
        correct: 'Tax effects incorporated into asset prices',
        explanation: 'Tax capitalization occurs when the effects of taxes are reflected in the prices of assets, particularly real estate.',
        difficulty: 'hard'
      },
      {
        id: 'g12_tax_hard_5',
        question: 'What is the excess burden of taxation?',
        options: ['Tax revenue collected', 'Welfare loss beyond tax revenue raised', 'Government spending', 'Tax administration cost'],
        correct: 'Welfare loss beyond tax revenue raised',
        explanation: 'Excess burden is the loss in economic welfare that exceeds the amount of tax revenue collected by the government.',
        difficulty: 'hard'
      },
      {
        id: 'g12_tax_hard_6',
        question: 'What is tax competition?',
        options: ['Cooperation between jurisdictions', 'Jurisdictions competing for tax base through lower rates', 'No competition', 'Tax harmonization'],
        correct: 'Jurisdictions competing for tax base through lower rates',
        explanation: 'Tax competition occurs when jurisdictions compete for mobile tax bases by setting lower tax rates.',
        difficulty: 'hard'
      },
      {
        id: 'g12_tax_hard_7',
        question: 'What is the Tiebout model?',
        options: ['Central government model', 'Local public goods provision through residential mobility', 'International trade model', 'Labor market model'],
        correct: 'Local public goods provision through residential mobility',
        explanation: 'The Tiebout model suggests that people vote with their feet by moving to jurisdictions that best match their preferences for public goods and taxes.',
        difficulty: 'hard'
      },
      {
        id: 'g12_tax_hard_8',
        question: 'What is the Chamley-Judd result?',
        options: ['High capital taxes optimal', 'Zero capital tax in long run is optimal', 'Progressive capital taxation', 'Random capital taxation'],
        correct: 'Zero capital tax in long run is optimal',
        explanation: 'The Chamley-Judd result shows that in the long run, the optimal tax rate on capital income is zero.',
        difficulty: 'hard'
      },
      {
        id: 'g12_tax_hard_9',
        question: 'What is the double taxation problem?',
        options: ['Paying taxes twice on same income', 'No taxation problem', 'Single taxation only', 'Tax reduction'],
        correct: 'Paying taxes twice on same income',
        explanation: 'Double taxation occurs when the same income is taxed twice, often seen with corporate profits taxed at both corporate and personal levels.',
        difficulty: 'hard'
      },
      {
        id: 'g12_tax_hard_10',
        question: 'What is tax expenditure?',
        options: ['Government spending', 'Revenue loss from tax preferences', 'Tax collection cost', 'Administrative expense'],
        correct: 'Revenue loss from tax preferences',
        explanation: 'Tax expenditures are revenues forgone due to preferential tax treatment, effectively equivalent to government spending.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_poverty_inequality',
    name: 'Unit 6: Poverty and Inequality',
    description: 'Analysis of poverty and income inequality',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_poverty_easy_1',
        question: 'What is poverty?',
        options: ['Middle income', 'Lack of basic necessities for decent living', 'Wealth accumulation', 'Economic growth'],
        correct: 'Lack of basic necessities for decent living',
        explanation: 'Poverty is the condition where people lack basic necessities like food, shelter, healthcare, and education.',
        difficulty: 'easy'
      },
      {
        id: 'g12_poverty_easy_2',
        question: 'What is income inequality?',
        options: ['Equal income distribution', 'Unequal distribution of income in society', 'High average income', 'Low average income'],
        correct: 'Unequal distribution of income in society',
        explanation: 'Income inequality refers to the uneven distribution of income across individuals or groups in society.',
        difficulty: 'easy'
      },
      {
        id: 'g12_poverty_easy_3',
        question: 'What is absolute poverty?',
        options: ['Relative to others', 'Fixed standard of basic needs not met', 'High income level', 'Government definition'],
        correct: 'Fixed standard of basic needs not met',
        explanation: 'Absolute poverty is measured against a fixed standard of basic needs required for survival.',
        difficulty: 'easy'
      },
      {
        id: 'g12_poverty_easy_4',
        question: 'What is relative poverty?',
        options: ['Fixed poverty line', 'Poverty relative to others in society', 'No poverty measurement', 'Government assistance'],
        correct: 'Poverty relative to others in society',
        explanation: 'Relative poverty is measured in comparison to the living standards of others in the same society.',
        difficulty: 'easy'
      },
      {
        id: 'g12_poverty_easy_5',
        question: 'What is the poverty line?',
        options: ['Maximum income allowed', 'Minimum income needed for basic living', 'Average income', 'Median income'],
        correct: 'Minimum income needed for basic living',
        explanation: 'The poverty line is the minimum level of income deemed necessary to achieve an adequate standard of living.',
        difficulty: 'easy'
      },
      {
        id: 'g12_poverty_easy_6',
        question: 'What causes poverty?',
        options: ['Only personal choices', 'Multiple factors including lack of education, unemployment, discrimination', 'Only government policies', 'Only economic factors'],
        correct: 'Multiple factors including lack of education, unemployment, discrimination',
        explanation: 'Poverty results from complex interactions of factors including lack of education, unemployment, discrimination, and structural issues.',
        difficulty: 'easy'
      },
      {
        id: 'g12_poverty_easy_7',
        question: 'What is social welfare?',
        options: ['Private charity only', 'Government programs to help disadvantaged people', 'Corporate benefits', 'Personal savings'],
        correct: 'Government programs to help disadvantaged people',
        explanation: 'Social welfare refers to government programs designed to help disadvantaged and vulnerable members of society.',
        difficulty: 'easy'
      },
      {
        id: 'g12_poverty_easy_8',
        question: 'What is unemployment insurance?',
        options: ['Health insurance', 'Income support for unemployed workers', 'Life insurance', 'Property insurance'],
        correct: 'Income support for unemployed workers',
        explanation: 'Unemployment insurance provides temporary income support to workers who have lost their jobs.',
        difficulty: 'easy'
      },
      {
        id: 'g12_poverty_easy_9',
        question: 'What is food security?',
        options: ['Food storage', 'Access to sufficient, safe, nutritious food', 'Food production', 'Food distribution'],
        correct: 'Access to sufficient, safe, nutritious food',
        explanation: 'Food security exists when all people have access to sufficient, safe, and nutritious food at all times.',
        difficulty: 'easy'
      },
      {
        id: 'g12_poverty_easy_10',
        question: 'What is the minimum wage?',
        options: ['Maximum wage allowed', 'Lowest wage legally payable to workers', 'Average wage', 'Desired wage'],
        correct: 'Lowest wage legally payable to workers',
        explanation: 'Minimum wage is the lowest wage that employers are legally required to pay their workers.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_poverty_med_1',
        question: 'What is the Gini coefficient?',
        options: ['Poverty measure', 'Measure of income inequality', 'Economic growth indicator', 'Unemployment rate'],
        correct: 'Measure of income inequality',
        explanation: 'The Gini coefficient is a statistical measure of income inequality, ranging from 0 (perfect equality) to 1 (perfect inequality).',
        difficulty: 'medium'
      },
      {
        id: 'g12_poverty_med_2',
        question: 'What is the poverty gap?',
        options: ['Number of poor people', 'Shortfall of income below poverty line', 'Poverty duration', 'Poverty causes'],
        correct: 'Shortfall of income below poverty line',
        explanation: 'The poverty gap measures the average shortfall of incomes of the poor from the poverty line.',
        difficulty: 'medium'
      },
      {
        id: 'g12_poverty_med_3',
        question: 'What is the poverty trap?',
        options: ['Easy escape from poverty', 'Self-reinforcing cycle keeping people poor', 'Government policy', 'Wealth accumulation'],
        correct: 'Self-reinforcing cycle keeping people poor',
        explanation: 'A poverty trap is a self-reinforcing mechanism that causes poverty to persist across generations.',
        difficulty: 'medium'
      },
      {
        id: 'g12_poverty_med_4',
        question: 'What is intergenerational mobility?',
        options: ['Moving locations', 'Movement between social classes across generations', 'Job changes', 'Educational movement'],
        correct: 'Movement between social classes across generations',
        explanation: 'Intergenerational mobility refers to changes in social status between different generations of families.',
        difficulty: 'medium'
      },
      {
        id: 'g12_poverty_med_5',
        question: 'What is conditional cash transfer?',
        options: ['Unconditional money', 'Cash payments tied to specific behaviors', 'Loan programs', 'Tax refunds'],
        correct: 'Cash payments tied to specific behaviors',
        explanation: 'Conditional cash transfers provide money to poor families contingent on meeting certain requirements like school attendance.',
        difficulty: 'medium'
      },
      {
        id: 'g12_poverty_med_6',
        question: 'What is universal basic income?',
        options: ['Conditional income support', 'Unconditional regular payment to all citizens', 'Employment insurance', 'Pension system'],
        correct: 'Unconditional regular payment to all citizens',
        explanation: 'Universal basic income is a social security system where all citizens receive regular, unconditional payments from the government.',
        difficulty: 'medium'
      },
      {
        id: 'g12_poverty_med_7',
        question: 'What is the capability approach to poverty?',
        options: ['Income focus only', 'Focus on what people can do and be', 'Wealth measurement', 'Consumption analysis'],
        correct: 'Focus on what people can do and be',
        explanation: 'The capability approach, developed by Amartya Sen, focuses on expanding people\'s capabilities and freedoms rather than just income.',
        difficulty: 'medium'
      },
      {
        id: 'g12_poverty_med_8',
        question: 'What is the Lorenz curve?',
        options: ['Poverty line', 'Graphical representation of income distribution', 'Growth curve', 'Unemployment curve'],
        correct: 'Graphical representation of income distribution',
        explanation: 'The Lorenz curve graphically represents the distribution of income or wealth within a population.',
        difficulty: 'medium'
      },
      {
        id: 'g12_poverty_med_9',
        question: 'What is social mobility?',
        options: ['Physical movement', 'Movement between social classes or economic levels', 'Population migration', 'Job rotation'],
        correct: 'Movement between social classes or economic levels',
        explanation: 'Social mobility refers to the movement of individuals or groups between different social strata in society.',
        difficulty: 'medium'
      },
      {
        id: 'g12_poverty_med_10',
        question: 'What is multidimensional poverty?',
        options: ['Only income poverty', 'Poverty measured across multiple dimensions', 'Single indicator', 'Wealth only'],
        correct: 'Poverty measured across multiple dimensions',
        explanation: 'Multidimensional poverty considers various aspects of deprivation including health, education, and living standards.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_poverty_hard_1',
        question: 'What is the Sen index?',
        options: ['Simple headcount ratio', 'Poverty measure combining incidence, depth, and inequality', 'Growth measure', 'Employment index'],
        correct: 'Poverty measure combining incidence, depth, and inequality',
        explanation: 'The Sen index is a poverty measure that incorporates poverty incidence, depth, and income distribution among the poor.',
        difficulty: 'hard'
      },
      {
        id: 'g12_poverty_hard_2',
        question: 'What is the Foster-Greer-Thorbecke (FGT) index?',
        options: ['Employment measure', 'Parametric family of poverty measures', 'Growth indicator', 'Inequality measure only'],
        correct: 'Parametric family of poverty measures',
        explanation: 'The FGT index is a parametric family of poverty measures that can capture poverty incidence, depth, and severity.',
        difficulty: 'hard'
      },
      {
        id: 'g12_poverty_hard_3',
        question: 'What is poverty severity index?',
        options: ['Headcount ratio', 'Measure emphasizing poorest of the poor', 'Average poverty', 'Poverty duration'],
        correct: 'Measure emphasizing poorest of the poor',
        explanation: 'The poverty severity index gives greater weight to the poorest individuals, emphasizing the depth of poverty.',
        difficulty: 'hard'
      },
      {
        id: 'g12_poverty_hard_4',
        question: 'What is the Rawlsian approach to inequality?',
        options: ['Maximize average welfare', 'Maximize welfare of worst-off individuals', 'Ignore inequality', 'Equal outcomes for all'],
        correct: 'Maximize welfare of worst-off individuals',
        explanation: 'The Rawlsian approach, based on John Rawls\' theory, focuses on maximizing the welfare of the worst-off members of society.',
        difficulty: 'hard'
      },
      {
        id: 'g12_poverty_hard_5',
        question: 'What is the Kuznets curve?',
        options: ['Income increases with inequality', 'Inequality first rises then falls with development', 'Constant inequality', 'Decreasing inequality always'],
        correct: 'Inequality first rises then falls with development',
        explanation: 'The Kuznets curve hypothesizes that inequality initially increases with economic development, then decreases.',
        difficulty: 'hard'
      },
      {
        id: 'g12_poverty_hard_6',
        question: 'What is the Great Gatsby curve?',
        options: ['No relationship', 'Positive relationship between inequality and low mobility', 'Negative relationship only', 'Random relationship'],
        correct: 'Positive relationship between inequality and low mobility',
        explanation: 'The Great Gatsby curve shows the positive correlation between income inequality and low intergenerational mobility.',
        difficulty: 'hard'
      },
      {
        id: 'g12_poverty_hard_7',
        question: 'What is targeting in social programs?',
        options: ['Universal coverage', 'Directing benefits to specific groups', 'Random distribution', 'No selection criteria'],
        correct: 'Directing benefits to specific groups',
        explanation: 'Targeting involves directing social program benefits to specific groups, typically those most in need.',
        difficulty: 'hard'
      },
      {
        id: 'g12_poverty_hard_8',
        question: 'What is the welfare trap?',
        options: ['High work incentives', 'Disincentive to work due to benefit loss', 'Encourages employment', 'No effect on work'],
        correct: 'Disincentive to work due to benefit loss',
        explanation: 'The welfare trap occurs when the reduction in benefits from working creates a disincentive to seek employment.',
        difficulty: 'hard'
      },
      {
        id: 'g12_poverty_hard_9',
        question: 'What is the poverty elasticity of growth?',
        options: ['No relationship', 'Responsiveness of poverty to economic growth', 'Constant poverty', 'Growth measurement'],
        correct: 'Responsiveness of poverty to economic growth',
        explanation: 'Poverty elasticity of growth measures how responsive poverty reduction is to changes in economic growth.',
        difficulty: 'hard'
      },
      {
        id: 'g12_poverty_hard_10',
        question: 'What is social exclusion?',
        options: ['Economic inclusion', 'Marginalization from social, economic, and political life', 'Full participation', 'Elite membership'],
        correct: 'Marginalization from social, economic, and political life',
        explanation: 'Social exclusion refers to the process by which individuals or groups are marginalized and prevented from full participation in society.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_macroeconomic_reforms_ethiopia',
    name: 'Unit 7: Macroeconomic Reforms in Ethiopia',
    description: 'Economic reforms and policies in Ethiopia',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_eth_reform_easy_1',
        question: 'When did Ethiopia begin major economic reforms?',
        options: ['1960s', '1980s', '1990s', '2000s'],
        correct: '1990s',
        explanation: 'Ethiopia began major economic reforms in the 1990s following the change in government in 1991.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_reform_easy_2',
        question: 'What was Ethiopia\'s economic system before 1991?',
        options: ['Market economy', 'Socialist command economy', 'Mixed economy', 'Capitalist economy'],
        correct: 'Socialist command economy',
        explanation: 'Before 1991, Ethiopia operated under a socialist command economy with extensive government control.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_reform_easy_3',
        question: 'What is privatization?',
        options: ['Government ownership', 'Transfer of ownership from public to private sector', 'Nationalization', 'State control'],
        correct: 'Transfer of ownership from public to private sector',
        explanation: 'Privatization involves transferring ownership of government enterprises to private individuals or companies.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_reform_easy_4',
        question: 'What is liberalization?',
        options: ['Increased government control', 'Reduction of government restrictions on economic activity', 'Nationalization of industries', 'Central planning'],
        correct: 'Reduction of government restrictions on economic activity',
        explanation: 'Liberalization involves reducing government restrictions and controls on economic activities and markets.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_reform_easy_5',
        question: 'What is the Ethiopian birr?',
        options: ['Trade agreement', 'National currency of Ethiopia', 'Development plan', 'Economic indicator'],
        correct: 'National currency of Ethiopia',
        explanation: 'The Ethiopian birr is the official currency of Ethiopia.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_reform_easy_6',
        question: 'What is agricultural development-led industrialization (ADLI)?',
        options: ['Industry first strategy', 'Development strategy prioritizing agriculture', 'Service sector focus', 'Import substitution'],
        correct: 'Development strategy prioritizing agriculture',
        explanation: 'ADLI is Ethiopia\'s development strategy that prioritizes agricultural development as a foundation for industrialization.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_reform_easy_7',
        question: 'What is devaluation?',
        options: ['Currency appreciation', 'Reduction in currency value', 'Fixed exchange rate', 'Currency stability'],
        correct: 'Reduction in currency value',
        explanation: 'Devaluation is the deliberate downward adjustment of a country\'s currency value relative to other currencies.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_reform_easy_8',
        question: 'What is structural adjustment?',
        options: ['Building repairs', 'Economic policy reforms required by international lenders', 'Social programs', 'Educational reforms'],
        correct: 'Economic policy reforms required by international lenders',
        explanation: 'Structural adjustment programs involve economic policy reforms typically required by the World Bank and IMF.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_reform_easy_9',
        question: 'What is foreign direct investment (FDI)?',
        options: ['Domestic investment', 'Investment by foreign entities in domestic economy', 'Government spending', 'Local business investment'],
        correct: 'Investment by foreign entities in domestic economy',
        explanation: 'FDI involves foreign investors making long-term investments in domestic businesses or assets.',
        difficulty: 'easy'
      },
      {
        id: 'g12_eth_reform_easy_10',
        question: 'What is import substitution?',
        options: ['Promoting imports', 'Replacing imports with domestic production', 'Export promotion', 'Trade liberalization'],
        correct: 'Replacing imports with domestic production',
        explanation: 'Import substitution involves developing domestic industries to replace imported goods.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_eth_reform_med_1',
        question: 'What was the Derg economic policy?',
        options: ['Free market policy', 'Socialist economic policy with state control', 'Mixed economy', 'Export-oriented policy'],
        correct: 'Socialist economic policy with state control',
        explanation: 'The Derg regime (1974-1991) implemented socialist economic policies with extensive state control over the economy.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_reform_med_2',
        question: 'What is the Growth and Transformation Plan (GTP)?',
        options: ['Foreign aid program', 'Ethiopia\'s national development plan', 'Trade agreement', 'Educational curriculum'],
        correct: 'Ethiopia\'s national development plan',
        explanation: 'The GTP is Ethiopia\'s medium-term development plan aimed at achieving rapid and sustainable economic growth.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_reform_med_3',
        question: 'What is financial sector reform?',
        options: ['Government control increase', 'Modernization and liberalization of banking system', 'Closure of banks', 'Nationalization of finance'],
        correct: 'Modernization and liberalization of banking system',
        explanation: 'Financial sector reform involves modernizing and liberalizing the banking and financial system to improve efficiency.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_reform_med_4',
        question: 'What is trade liberalization?',
        options: ['Increased trade barriers', 'Reduction of trade barriers and restrictions', 'Trade prohibition', 'Bilateral trade only'],
        correct: 'Reduction of trade barriers and restrictions',
        explanation: 'Trade liberalization involves reducing tariffs, quotas, and other barriers to international trade.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_reform_med_5',
        question: 'What is the role of the National Bank of Ethiopia?',
        options: ['Commercial banking only', 'Central banking and monetary policy', 'Development financing', 'International trade'],
        correct: 'Central banking and monetary policy',
        explanation: 'The National Bank of Ethiopia serves as the central bank, responsible for monetary policy and banking regulation.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_reform_med_6',
        question: 'What is the Productive Safety Net Program (PSNP)?',
        options: ['Industrial policy', 'Social protection program for food insecure households', 'Trade program', 'Education initiative'],
        correct: 'Social protection program for food insecure households',
        explanation: 'The PSNP is Ethiopia\'s social protection program providing support to chronically food insecure households.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_reform_med_7',
        question: 'What is the developmental state model?',
        options: ['Minimal government role', 'Active government role in promoting development', 'Free market approach', 'Foreign dependency'],
        correct: 'Active government role in promoting development',
        explanation: 'The developmental state model emphasizes an active government role in directing and promoting economic development.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_reform_med_8',
        question: 'What is exchange rate reform?',
        options: ['Fixed exchange rate', 'Moving toward more flexible exchange rate system', 'Currency elimination', 'Barter system'],
        correct: 'Moving toward more flexible exchange rate system',
        explanation: 'Exchange rate reform in Ethiopia involved moving from a fixed to a more flexible exchange rate system.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_reform_med_9',
        question: 'What is industrial park development?',
        options: ['Agricultural expansion', 'Designated areas for manufacturing industries', 'Service sector hubs', 'Residential development'],
        correct: 'Designated areas for manufacturing industries',
        explanation: 'Industrial parks are designated areas developed to attract manufacturing industries and promote industrial development.',
        difficulty: 'medium'
      },
      {
        id: 'g12_eth_reform_med_10',
        question: 'What is the Ethiopian Commodity Exchange (ECX)?',
        options: ['Stock market', 'Platform for trading agricultural commodities', 'Currency exchange', 'Government agency'],
        correct: 'Platform for trading agricultural commodities',
        explanation: 'The ECX is a marketplace where agricultural commodities are traded in a transparent and efficient manner.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_eth_reform_hard_1',
        question: 'What is the challenge of dual exchange rate system?',
        options: ['No challenges', 'Creates distortions and rent-seeking behavior', 'Improves efficiency', 'Reduces corruption'],
        correct: 'Creates distortions and rent-seeking behavior',
        explanation: 'Dual exchange rate systems create market distortions, arbitrage opportunities, and rent-seeking behavior.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_reform_hard_2',
        question: 'What is the Dutch disease phenomenon?',
        options: ['Medical condition', 'Economic problem from natural resource boom', 'Agricultural disease', 'Industrial expansion'],
        correct: 'Economic problem from natural resource boom',
        explanation: 'Dutch disease occurs when natural resource booms lead to currency appreciation and decline in other tradable sectors.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_reform_hard_3',
        question: 'What is the binding constraint to growth in Ethiopia?',
        options: ['Abundant resources', 'Infrastructure and foreign exchange shortages', 'Excess capacity', 'Too much investment'],
        correct: 'Infrastructure and foreign exchange shortages',
        explanation: 'Ethiopia faces binding constraints from inadequate infrastructure and foreign exchange shortages limiting growth.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_reform_hard_4',
        question: 'What is the sequencing problem in reforms?',
        options: ['No sequence needed', 'Order of implementing reforms affects outcomes', 'All reforms at once', 'Random implementation'],
        correct: 'Order of implementing reforms affects outcomes',
        explanation: 'The sequencing of reforms is crucial as the order of implementation can significantly affect the success of reform programs.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_reform_hard_5',
        question: 'What is the political economy of reforms?',
        options: ['Only economic factors', 'Interaction between political and economic factors in reform process', 'Only political factors', 'No interaction'],
        correct: 'Interaction between political and economic factors in reform process',
        explanation: 'Political economy analysis examines how political factors influence economic reform processes and outcomes.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_reform_hard_6',
        question: 'What is the Washington Consensus critique?',
        options: ['Fully successful model', 'One-size-fits-all approach ignoring country specifics', 'Perfect policy framework', 'No criticism exists'],
        correct: 'One-size-fits-all approach ignoring country specifics',
        explanation: 'Critics argue the Washington Consensus applied uniform policies without considering country-specific circumstances.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_reform_hard_7',
        question: 'What is gradualism vs. shock therapy in reforms?',
        options: ['Same approach', 'Gradual vs. rapid implementation of reforms', 'Only gradual works', 'Only shock therapy works'],
        correct: 'Gradual vs. rapid implementation of reforms',
        explanation: 'This refers to the debate between implementing reforms gradually over time versus rapid, comprehensive reform implementation.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_reform_hard_8',
        question: 'What is the J-curve effect in reforms?',
        options: ['Immediate improvement', 'Initial worsening before improvement', 'Continuous decline', 'No change'],
        correct: 'Initial worsening before improvement',
        explanation: 'The J-curve effect describes how economic conditions may initially worsen after reforms before improving in the long run.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_reform_hard_9',
        question: 'What is institutional reform?',
        options: ['Physical infrastructure', 'Changes in rules, laws, and governance structures', 'Building construction', 'Technology adoption'],
        correct: 'Changes in rules, laws, and governance structures',
        explanation: 'Institutional reform involves changing the formal and informal rules, laws, and governance structures that guide economic activity.',
        difficulty: 'hard'
      },
      {
        id: 'g12_eth_reform_hard_10',
        question: 'What is the middle-income trap relevance to Ethiopia?',
        options: ['Not applicable', 'Risk of stagnating before reaching high-income status', 'Already achieved', 'No such concept'],
        correct: 'Risk of stagnating before reaching high-income status',
        explanation: 'The middle-income trap concept is relevant as Ethiopia aims to avoid stagnating at middle-income levels and continue progressing.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_economy_environment_climate',
    name: 'Unit 8: Economy, Environment and Climate Change',
    description: 'Economic aspects of environmental and climate issues',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_env_climate_easy_1',
        question: 'What is environmental economics?',
        options: ['Study of animals only', 'Study of economic impacts of environmental policies', 'Study of weather', 'Study of plants only'],
        correct: 'Study of economic impacts of environmental policies',
        explanation: 'Environmental economics studies the economic impacts of environmental policies and the economic value of the environment.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_climate_easy_2',
        question: 'What is climate change?',
        options: ['Daily weather changes', 'Long-term changes in global climate patterns', 'Seasonal variations', 'Local temperature changes'],
        correct: 'Long-term changes in global climate patterns',
        explanation: 'Climate change refers to long-term shifts in global or regional climate patterns, primarily due to human activities.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_climate_easy_3',
        question: 'What are greenhouse gases?',
        options: ['Gases in greenhouses', 'Gases that trap heat in atmosphere', 'Oxygen and nitrogen', 'Gases that cool atmosphere'],
        correct: 'Gases that trap heat in atmosphere',
        explanation: 'Greenhouse gases like CO2 and methane trap heat in the atmosphere, contributing to global warming.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_climate_easy_4',
        question: 'What is sustainable development?',
        options: ['Short-term growth', 'Development meeting present needs without compromising future', 'Industrial development only', 'Urban development'],
        correct: 'Development meeting present needs without compromising future',
        explanation: 'Sustainable development meets current needs while preserving resources and environment for future generations.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_climate_easy_5',
        question: 'What is pollution?',
        options: ['Clean environment', 'Introduction of harmful substances into environment', 'Natural processes', 'Economic growth'],
        correct: 'Introduction of harmful substances into environment',
        explanation: 'Pollution is the introduction of contaminants into the environment that cause adverse changes.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_climate_easy_6',
        question: 'What is renewable energy?',
        options: ['Fossil fuels', 'Energy from sources that naturally replenish', 'Nuclear energy only', 'Non-renewable sources'],
        correct: 'Energy from sources that naturally replenish',
        explanation: 'Renewable energy comes from sources that naturally replenish, like solar, wind, and hydroelectric power.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_climate_easy_7',
        question: 'What is deforestation?',
        options: ['Planting trees', 'Clearing of forests', 'Forest management', 'Tree growth'],
        correct: 'Clearing of forests',
        explanation: 'Deforestation is the clearing or removal of forests, often for agriculture or development.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_climate_easy_8',
        question: 'What is carbon footprint?',
        options: ['Physical footprint', 'Amount of greenhouse gases produced by activities', 'Size of carbon', 'Walking pattern'],
        correct: 'Amount of greenhouse gases produced by activities',
        explanation: 'Carbon footprint measures the total greenhouse gas emissions caused by individual, organization, or activity.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_climate_easy_9',
        question: 'What is green economy?',
        options: ['Economy focused only on agriculture', 'Economy that improves human well-being while reducing environmental risks', 'Economy using green money', 'Forest-based economy'],
        correct: 'Economy that improves human well-being while reducing environmental risks',
        explanation: 'Green economy aims to improve human well-being and social equity while reducing environmental risks and scarcities.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_climate_easy_10',
        question: 'What is biodiversity?',
        options: ['One species only', 'Variety of life on Earth', 'Human population', 'Economic diversity'],
        correct: 'Variety of life on Earth',
        explanation: 'Biodiversity refers to the variety of life on Earth, including diversity within species, between species, and ecosystems.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_env_climate_med_1',
        question: 'What is the carbon tax?',
        options: ['Tax on income', 'Tax on carbon dioxide emissions', 'Tax on trees', 'Tax on green energy'],
        correct: 'Tax on carbon dioxide emissions',
        explanation: 'Carbon tax is a tax levied on the carbon content of fossil fuels to reduce greenhouse gas emissions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_climate_med_2',
        question: 'What is cap-and-trade system?',
        options: ['Fixed pollution limits', 'Market-based approach to controlling pollution', 'No pollution control', 'Government ownership'],
        correct: 'Market-based approach to controlling pollution',
        explanation: 'Cap-and-trade sets a limit on emissions and allows companies to trade emission allowances.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_climate_med_3',
        question: 'What is the Kuznets environmental curve?',
        options: ['Income increases with pollution', 'Pollution first rises then falls with income', 'Constant pollution', 'Decreasing pollution always'],
        correct: 'Pollution first rises then falls with income',
        explanation: 'The environmental Kuznets curve suggests pollution initially increases with income then decreases as countries develop.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_climate_med_4',
        question: 'What is ecosystem services valuation?',
        options: ['No economic value', 'Assigning economic value to ecosystem benefits', 'Only aesthetic value', 'Physical measurement only'],
        correct: 'Assigning economic value to ecosystem benefits',
        explanation: 'Ecosystem services valuation assigns economic value to benefits that ecosystems provide to humans.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_climate_med_5',
        question: 'What is environmental externality?',
        options: ['Internal environmental cost', 'Environmental cost imposed on third parties', 'No external effects', 'Environmental benefits only'],
        correct: 'Environmental cost imposed on third parties',
        explanation: 'Environmental externality occurs when environmental costs or benefits affect parties not involved in the economic transaction.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_climate_med_6',
        question: 'What is the tragedy of the commons in environmental context?',
        options: ['Efficient resource use', 'Overexploitation of shared environmental resources', 'Underuse of resources', 'Optimal allocation'],
        correct: 'Overexploitation of shared environmental resources',
        explanation: 'The tragedy of the commons occurs when shared environmental resources are overexploited because no one owns them.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_climate_med_7',
        question: 'What is adaptation in climate change?',
        options: ['Preventing climate change', 'Adjusting to climate change impacts', 'Ignoring climate change', 'Causing climate change'],
        correct: 'Adjusting to climate change impacts',
        explanation: 'Climate adaptation involves adjusting natural or human systems to respond to actual or expected climate change impacts.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_climate_med_8',
        question: 'What is mitigation in climate change?',
        options: ['Adapting to climate change', 'Reducing greenhouse gas emissions', 'Ignoring climate change', 'Accelerating climate change'],
        correct: 'Reducing greenhouse gas emissions',
        explanation: 'Climate mitigation involves reducing greenhouse gas emissions to limit the magnitude of climate change.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_climate_med_9',
        question: 'What is green growth?',
        options: ['Growth without environmental considerations', 'Economic growth while reducing environmental degradation', 'Only environmental protection', 'No economic growth'],
        correct: 'Economic growth while reducing environmental degradation',
        explanation: 'Green growth aims to achieve economic growth while reducing environmental degradation and resource use.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_climate_med_10',
        question: 'What is Payment for Ecosystem Services (PES)?',
        options: ['No payment needed', 'Economic incentives for conservation', 'Punishment for conservation', 'Government control only'],
        correct: 'Economic incentives for conservation',
        explanation: 'PES provides economic incentives to landowners and communities for protecting and restoring ecosystems.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_env_climate_hard_1',
        question: 'What is the social cost of carbon?',
        options: ['Private carbon cost', 'Economic damage from one additional ton of CO2', 'No social impact', 'Carbon market price'],
        correct: 'Economic damage from one additional ton of CO2',
        explanation: 'The social cost of carbon estimates the economic damage caused by emitting one additional ton of CO2.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_climate_hard_2',
        question: 'What is the double dividend hypothesis?',
        options: ['Two types of pollution', 'Environmental taxes provide environmental and economic benefits', 'Only environmental benefits', 'No benefits'],
        correct: 'Environmental taxes provide environmental and economic benefits',
        explanation: 'The double dividend hypothesis suggests environmental taxes can both improve the environment and reduce economic distortions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_climate_hard_3',
        question: 'What is the Porter hypothesis?',
        options: ['Regulation always hurts competitiveness', 'Well-designed environmental regulation can trigger innovation', 'No relationship exists', 'Only costs matter'],
        correct: 'Well-designed environmental regulation can trigger innovation',
        explanation: 'The Porter hypothesis suggests that properly designed environmental regulations can trigger innovation that fully offsets compliance costs.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_climate_hard_4',
        question: 'What is the precautionary principle?',
        options: ['Wait for certainty', 'Take preventive action despite scientific uncertainty', 'Ignore uncertainty', 'No action needed'],
        correct: 'Take preventive action despite scientific uncertainty',
        explanation: 'The precautionary principle advocates taking preventive action when facing potential environmental harm despite scientific uncertainty.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_climate_hard_5',
        question: 'What is discounting in environmental economics?',
        options: ['Price reductions', 'Reducing weight of future environmental benefits', 'Environmental destruction', 'Ignoring present costs'],
        correct: 'Reducing weight of future environmental benefits',
        explanation: 'Discounting in environmental economics involves weighing future environmental benefits and costs less than present ones.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_climate_hard_6',
        question: 'What is environmental justice?',
        options: ['Only economic considerations', 'Fair treatment regardless of background in environmental decisions', 'Only environmental factors', 'Ignoring social factors'],
        correct: 'Fair treatment regardless of background in environmental decisions',
        explanation: 'Environmental justice ensures fair treatment of all people regardless of race, income, or background in environmental decisions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_climate_hard_7',
        question: 'What is the Stern Review conclusion?',
        options: ['No action needed', 'Benefits of early climate action outweigh costs', 'Climate change not serious', 'Only adaptation needed'],
        correct: 'Benefits of early climate action outweigh costs',
        explanation: 'The Stern Review concluded that the benefits of early action on climate change far outweigh the economic costs of inaction.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_climate_hard_8',
        question: 'What is tipping point in climate systems?',
        options: ['Gradual change only', 'Threshold leading to irreversible changes', 'No change possible', 'Reversible changes only'],
        correct: 'Threshold leading to irreversible changes',
        explanation: 'Tipping points are thresholds in climate systems beyond which changes become self-reinforcing and irreversible.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_climate_hard_9',
        question: 'What is the carbon leakage problem?',
        options: ['No leakage exists', 'Emissions increase elsewhere when reduced locally', 'Perfect emission control', 'Only local effects'],
        correct: 'Emissions increase elsewhere when reduced locally',
        explanation: 'Carbon leakage occurs when emission reductions in one region lead to emission increases in other regions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_climate_hard_10',
        question: 'What is intergenerational equity in climate change?',
        options: ['Only current generation matters', 'Fair distribution of climate costs across generations', 'Future generations dont matter', 'No equity considerations'],
        correct: 'Fair distribution of climate costs across generations',
        explanation: 'Intergenerational equity addresses fair distribution of climate change costs and benefits between current and future generations.',
        difficulty: 'hard'
      }
    ]
  }
];
