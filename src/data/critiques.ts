import { Critique } from '@/lib/types';

/**
 * Critiques dataset
 * Each critique is paired with an ideology via ideologyId
 * Display: Shows on the ideology's detail page
 * 
 * Fields:
 * - id: unique identifier
 * - ideologyId: links to an ideology (must match existing ideology.id)
 * - title: critique title
 * - summary: one-sentence summary
 * - argument: detailed argument
 * - evidence: array of evidence/sources
 * - counterpoints: array of counterarguments
 * - sourceIds: links to sources (optional, for related sources)
 * 
 * To add a new critique:
 * 1. Copy the template below
 * 2. Set ideologyId to the target ideology ID
 * 3. Fill in title, summary, argument, etc.
 * 4. Use the next available critique ID
 * 5. Save and rebuild
 */

export const critiques: Critique[] = [
  {
    id: '1',
    ideologyId: '1',
    title: 'Critique of Postmodernism',
    summary: 'A critique of the core tenets of postmodernist philosophy and its influence on contemporary social justice movements.',
    argument: 'This critique argues that postmodernism\'s rejection of objective truth and emphasis on power dynamics leads to a number of logical fallacies and ultimately undermines the goals of social justice.',
    evidence: ['Link to a paper', 'Another link'],
    counterpoints: ['Some counterpoints'],
    sourceIds: ['1', '2']
  },
  {
    id: '2',
    ideologyId: '2',
    title: 'Critique of Critical Race Theory',
    summary: 'An examination of the foundational assumptions of Critical Race Theory (CRT).',
    argument: 'This critique contends that CRT\'s focus on race as the primary lens for understanding social relations can lead to a new form of racism and division.',
    sourceIds: ['3']
  },

  /*
   * TEMPLATE: Copy and paste this to add a new critique
   * Remember to:
   * - Use the next available ID (3, 4, 5, ...)
   * - Set ideologyId to match an existing ideology ID
   * - Fill in all required fields
   */
  /*
  {
    id: '3',
    ideologyId: '1',
    title: 'Critique Title',
    summary: 'One-sentence summary.',
    argument: 'Detailed argument explaining the critique.',
    evidence: ['Link to a paper', 'Another link'],
    counterpoints: ['Counterpoint 1', 'Counterpoint 2'],
    sourceIds: ['1', '2']
  },
  */
];
