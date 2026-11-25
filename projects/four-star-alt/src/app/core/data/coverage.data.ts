import { ZipCoverage } from '../models';

/**
 * Illustrative NYC ZIP coverage for demo previews only.
 * Not a live routing or dispatch dataset.
 */
export const SAMPLE_COVERAGE: ZipCoverage[] = [
  {
    zip: '10010',
    borough: 'Manhattan',
    status: 'covered',
    note: 'Flatiron / Gramercy sample — regularly serviced commercial corridors.',
  },
  {
    zip: '10001',
    borough: 'Manhattan',
    status: 'covered',
    note: 'Midtown South / Chelsea sample coverage.',
  },
  {
    zip: '10016',
    borough: 'Manhattan',
    status: 'covered',
    note: 'Murray Hill / Midtown East sample coverage.',
  },
  {
    zip: '10019',
    borough: 'Manhattan',
    status: 'covered',
    note: 'Midtown West sample coverage.',
  },
  {
    zip: '10005',
    borough: 'Manhattan',
    status: 'covered',
    note: 'Financial District sample coverage.',
  },
  {
    zip: '11201',
    borough: 'Brooklyn',
    status: 'covered',
    note: 'Downtown Brooklyn / DUMBO sample coverage.',
  },
  {
    zip: '11211',
    borough: 'Brooklyn',
    status: 'covered',
    note: 'Williamsburg sample coverage.',
  },
  {
    zip: '11106',
    borough: 'Queens',
    status: 'limited',
    note: 'Astoria sample — limited illustrative availability.',
  },
  {
    zip: '10451',
    borough: 'Bronx',
    status: 'limited',
    note: 'South Bronx sample — limited illustrative availability.',
  },
  {
    zip: '07030',
    borough: 'Outside NYC',
    status: 'outside',
    note: 'Outside demo NYC sample set — still accept quote for conversation.',
  },
];

export function lookupCoverage(zip: string): ZipCoverage | null {
  const normalized = zip.trim();
  if (!/^\d{5}$/.test(normalized)) {
    return null;
  }
  return (
    SAMPLE_COVERAGE.find((entry) => entry.zip === normalized) ?? {
      zip: normalized,
      borough: 'NYC metro (unlisted)',
      status: 'limited',
      note: 'ZIP not in the sample table — treat as illustrative “check with team” for this demo.',
    }
  );
}
