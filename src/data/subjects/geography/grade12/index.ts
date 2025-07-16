
import { Chapter } from '../../../types';
import { unit1PhysicalGeography } from './unit1-physical-geography';
import { unit2ClimateSoil } from './unit2-climate-soil';
import { unit3PopulationSettlement } from './unit3-population-settlement';
import { unit4EconomicGeography } from './unit4-economic-geography';
import { unit5TransportCommunication } from './unit5-transport-communication';
import { unit6TourismRecreation } from './unit6-tourism-recreation';
import { unit7EnvironmentalIssues } from './unit7-environmental-issues';
import { unit8RegionalGeography } from './unit8-regional-geography';

export const grade12EthiopianGeographyChapters: Chapter[] = [
  {
    id: 'geo-12-1-physical-geography',
    name: 'Unit 1: Physical Geography of Ethiopia',
    description: 'Landforms, geological structure, and physical features of Ethiopia',
    questions: unit1PhysicalGeography
  },
  {
    id: 'geo-12-2-climate-soil',
    name: 'Unit 2: Climate and Soil Resources',
    description: 'Climate patterns, weather systems, and soil types in Ethiopia',
    questions: unit2ClimateSoil
  },
  {
    id: 'geo-12-3-population-settlement',
    name: 'Unit 3: Population and Settlement',
    description: 'Population distribution, demographics, and settlement patterns',
    questions: unit3PopulationSettlement
  },
  {
    id: 'geo-12-4-economic-geography',
    name: 'Unit 4: Economic Geography',
    description: 'Agriculture, industry, and economic development in Ethiopia',
    questions: unit4EconomicGeography
  },
  {
    id: 'geo-12-5-transport-communication',
    name: 'Unit 5: Transport and Communication',
    description: 'Transportation networks and communication systems',
    questions: unit5TransportCommunication
  },
  {
    id: 'geo-12-6-tourism-recreation',
    name: 'Unit 6: Tourism and Recreation',
    description: 'Tourist attractions, cultural sites, and recreational resources',
    questions: unit6TourismRecreation
  },
  {
    id: 'geo-12-7-environmental-issues',
    name: 'Unit 7: Environmental Issues',
    description: 'Environmental challenges, conservation, and sustainability',
    questions: unit7EnvironmentalIssues
  },
  {
    id: 'geo-12-8-regional-geography',
    name: 'Unit 8: Regional Geography',
    description: 'Regional characteristics and development patterns across Ethiopia',
    questions: unit8RegionalGeography
  }
];
