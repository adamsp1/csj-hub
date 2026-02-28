import { Topic } from '@/lib/types';

export const topics: Topic[] = [
  {
    id: '1',
    title: 'Postmodernism',
    description: 'A philosophical movement characterized by skepticism toward grand narratives and the questioning of objective reality.',
    keyConcepts: ['Deconstruction', 'Power-Knowledge', 'Metanarratives'],
    claims: [
      'There is no objective truth, only competing interpretations.',
      'All knowledge is a product of power.',
      'Language shapes our understanding of reality.'
    ]
  },
  {
    id: '2',
    title: 'Critical Race Theory',
    description: 'A theoretical framework in the social sciences that examines society and culture as they relate to categorizations of race, law, and power.',
    keyConcepts: ['Systemic Racism', 'Intersectionality', 'White Privilege'],
    claims: [
      'Racism is a social construct, and it is not merely the product of individual bias or prejudice, but also something embedded in legal systems and policies.',
      'Race is a proxy for power.',
      'The experiences of people of color are central to understanding racism.'
    ]
  },
];
