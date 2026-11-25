export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'frequency',
    question: 'How often should we schedule cleaning?',
    answer:
      'Most NYC commercial accounts start at one weekly visit of at least two hours, then scale to multiple days based on traffic, restrooms, and after-hours access. You can choose “I’m not sure yet” on the quote form.',
  },
  {
    id: 'after-hours',
    question: 'Can you clean after we close?',
    answer:
      'Yes. Recurring programs can run daytime, evening, or overnight so service fits your building’s hours and freight-elevator rules.',
  },
  {
    id: 'walkthrough',
    question: 'Do I need a walkthrough before quoting?',
    answer:
      'A walkthrough is optional but helpful for complex floors or security constraints. You can request one in step 2 of the quote form.',
  },
  {
    id: 'after-quote',
    question: 'What happens after I request a quote?',
    answer:
      'In this demo, your request stays in browser memory and shows a confirmation screen. In production, the team would follow up with a customized recurring plan.',
  },
];
