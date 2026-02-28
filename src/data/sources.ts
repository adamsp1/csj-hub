import { Source } from '@/lib/types';

export const sources: Source[] = [
  {
    id: '1',
    title: 'Cynical Theories: How Activist Scholarship Made Everything about Race, Gender, and Identity―and Why This Harms Everybody',
    author: 'Helen Pluckrose & James Lindsay',
    type: 'book',
    url: 'https://www.amazon.com/Cynical-Theories-Scholarship-Everything-Identity_and/dp/1634312023',
    description: 'An overview of the evolution of postmodern thought and its application in social justice scholarship.',
    ideologyIds: ['1'],
    thumbnailUrl: 'https://m.media-amazon.com/images/I/51sA9XeCFwL._SL1000_.jpg'
  },
  {
    id: '2',
    title: 'The Madness of Crowds: Gender, Race and Identity',
    author: 'Douglas Murray',
    type: 'book',
    url: 'https://www.amazon.com/Madness-Crowds-Gender-Race-Identity/dp/1635579988',
    description: 'An examination of the key battlegrounds in the new culture wars: gay rights, feminism, race, and trans rights.',
    ideologyIds: ['1', '2'],
    thumbnailUrl: 'https://m.media-amazon.com/images/I/81xVz3oh2hL._SL1500_.jpg'
  },
  {
    id: '3',
    title: 'What Is Critical Race Theory and Why Is It Under Attack?',
    author: 'Stephen Sawchuk',
    type: 'article',
    url: 'https://www.edweek.org/leadership/what-is-critical-race-theory-and-why-is-it-under-attack/2021/05',
    description: 'An article from Education Week explaining the core tenets of CRT.',
    ideologyIds: ['2'],
  },
  {
    id: '4',
    title: 'The Ugly Truth About Critical Race Theory - Christopher Rufo',
    author: 'Triggernometry',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=PlF7AnjmaMI',
    description: 'A YouTube video discussing CRT with Christopher Rufo.',
    ideologyIds: ['2'],
  },

  {
    id: '5',
    title: 'The End of Race Politics: Arguments for a Colorblind America',
    author: 'Coleman Hughes',
    type: 'book',
    url: 'https://www.amazon.com/End-Race-Politics-Arguments-Colorblind/dp/0593332458',
    description: 'A case for colorblind principles in public policy and civic life, with critiques of race-based political frameworks.',
    ideologyIds: ['1', '2'],
    thumbnailUrl: 'https://covers3.booksamillion.com/covers/bam/0/59/333/245/0593332458_b.jpg'
  },
  {
    id: '6',
    title: 'Social Justice Fallacies',
    author: 'Thomas Sowell',
    type: 'book',
    url: 'https://www.amazon.com/Social-Justice-Fallacies-Thomas-Sowell/dp/1541603923',
    description: 'A critique of common claims made under the banner of social justice, focused on tradeoffs, incentives, and real-world outcomes.',
    ideologyIds: ['1', '2'],
    thumbnailUrl: 'https://www.hachettebookgroup.com/wp-content/uploads/2023/10/9781541603929.jpg'
  },
  {
    id: '7',
    title: 'Woke Racism: How a New Religion Has Betrayed Black America',
    author: 'John McWhorter',
    type: 'book',
    url: 'https://www.amazon.com/Woke-Racism-Religion-Betrayed-America/dp/0593423062',
    description: 'An argument that modern anti-racism functions like a secular religion, with unintended consequences for public discourse and policy.',
    ideologyIds: ['1', '2'],
    thumbnailUrl: 'https://www.publishersweekly.com/cover/9780593423066'
  }
];