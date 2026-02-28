import { Ideology } from '@/lib/types';

/**
 * Ideologies dataset
 * Each ideology has:
 * - id: unique identifier
 * - title: short name for card display  
 * - description: brief summary for card
 * - ideologyName: full name for detail page
 * - ideologyImage: path to image (in public/images/)
 * - mainConcepts: comma-separated key concepts
 * - coreTheoriesDescription: detailed explanation
 * - politicalAgendas: discussion of political implications
 * 
 * To add a new ideology:
 * 1. Copy the template below
 * 2. Update all fields with your content
 * 3. Use the next available ID (increment by 1)
 * 4. Save the image in public/images/ and reference it
 */

export const ideologies: Ideology[] = [
  // Ideology 1: Postmodernism
  {
    id: '1',
    title: 'Postmodernism',
    description: 'A philosophical movement characterized by skepticism toward grand narratives and the questioning of objective reality.',
    ideologyName: 'Postmodernism',
    ideologyImage: '/images/postmodernism.svg',
    mainConcepts: 'Deconstruction, Power-Knowledge, Metanarratives, Simulacra and Simulation, Hyperreality.',
    coreTheoriesDescription: 'Postmodernism challenges the foundational assumptions of Western philosophy, arguing that there is no objective truth, only competing interpretations. It posits that all knowledge is a product of power dynamics and that language shapes our understanding of reality. Key thinkers include Jean-François Lyotard, Jacques Derrida, and Michel Foucault.',
    politicalAgendas: 'Postmodernism is often associated with left-wing and radical politics, as it provides a framework for critiquing existing power structures and social norms. However, it has also been criticized for leading to a relativistic and nihilistic worldview that can undermine the basis for political action.'
  },

  // Ideology 2: Critical Race Theory
  {
    id: '2',
    title: 'Critical Race Theory',
    description: 'A theoretical framework in the social sciences that examines society and culture as they relate to categorizations of race, law, and power.',
    ideologyName: 'Critical Race Theory',
    ideologyImage: '/images/crt.svg',
    mainConcepts: 'Systemic Racism, Intersectionality, White Privilege, Counter-storytelling, Interest Convergence.',
    coreTheoriesDescription: 'Critical Race Theory (CRT) is a framework that originated in the 1970s and 1980s with legal scholars like Derrick Bell, Kimberlé Crenshaw, and Richard Delgado. It argues that racism is not merely the product of individual bias or prejudice, but also something embedded in legal systems and policies. CRT scholars seek to challenge the traditional liberal approach to civil rights and to center the experiences of people of color.',
    politicalAgendas: 'The political agenda of CRT is to dismantle systemic racism and to create a more just and equitable society. This includes advocating for policies such as affirmative action, reparations, and curriculum changes in schools. CRT has been highly controversial, with critics arguing that it promotes division and is a form of "reverse racism."'
  },

  /*
   * TEMPLATE: Copy and paste this to add a new ideology
   * Remember to:
   * - Use unique IDs (1, 2, 3, ...)
   * - Create or add the image to public/images/
   * - Fill in all required fields
   */
  /*
  {
    id: '3',
    title: 'Ideology Name',
    description: 'Brief one-sentence description for the card.',
    ideologyName: 'Full Ideology Name',
    ideologyImage: '/images/filename.svg',
    mainConcepts: 'Concept 1, Concept 2, Concept 3, Concept 4, Concept 5.',
    coreTheoriesDescription: 'Detailed explanation of the core theories and key thinkers.',
    politicalAgendas: 'Discussion of the political implications and controversies.'
  },
  */
];
