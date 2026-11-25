import { BoroughArea } from '../models';

/** Illustrative Manhattan ZIP sample list from the live site’s service-area style (demo only). */
export const MANHATTAN_ZIPS: string[] = [
  '10001', '10002', '10003', '10004', '10005', '10006', '10007', '10008', '10009', '10010',
  '10011', '10012', '10013', '10014', '10015', '10016', '10017', '10018', '10019', '10020',
  '10021', '10022', '10023', '10024', '10025', '10026', '10027', '10028', '10029', '10030',
  '10031', '10032', '10033', '10034', '10035', '10036', '10037', '10038', '10039', '10040',
];

export const BOROUGHS: BoroughArea[] = [
  {
    id: 'manhattan',
    name: 'Manhattan',
    summary:
      'Flatiron, Financial District, Midtown, Chelsea, Upper East Side, Lower West Side, and more commercial corridors.',
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    summary: 'Sample coverage notes for Williamsburg, DUMBO, and nearby commercial offices.',
  },
  {
    id: 'queens',
    name: 'Queens',
    summary: 'Sample focus on Astoria and growing commercial spaces.',
  },
  {
    id: 'bronx',
    name: 'The Bronx',
    summary: 'Sample coverage for Bronx commercial offices needing recurring service.',
  },
];
