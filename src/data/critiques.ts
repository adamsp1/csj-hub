import { Critique } from '@/lib/types';

export const critiques: Critique[] = [
  {
    id: '1',
    topicId: '1',
    title: 'Critique of Postmodernism',
    summary: 'A critique of the core tenets of postmodernist philosophy and its influence on contemporary social justice movements.',
    argument: 'This critique argues that postmodernism\'s rejection of objective truth and emphasis on power dynamics leads to a number of logical fallacies and ultimately undermines the goals of social justice.',
    evidence: ['Link to a paper', 'Another link'],
    counterpoints: ['Some counterpoints'],
    sourceIds: ['1', '2']
  },
  {
    id: '2',
    topicId: '2',
    title: 'Critique of Critical Race Theory',
    summary: 'An examination of the foundational assumptions of Critical Race Theory (CRT).',
    argument: 'This critique contends that CRT\'s focus on race as the primary lens for understanding social relations can lead to a new form of racism and division.',
    sourceIds: ['3']
  },
];
