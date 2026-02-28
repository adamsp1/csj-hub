import { Source } from '@/lib/types';

export const sources: Source[] = [
  {
    id: '1',
    title: 'Cynical Theories',
    author: 'Helen Pluckrose & James Lindsay',
    type: 'book',
    description: 'An overview of the evolution of postmodern thought and its application in social justice scholarship.',
    topicIds: ['1'],
    thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/41aH9fL3a2L._SX331_BO1,204,203,200_.jpg'
  },
  {
    id: '2',
    title: 'The Madness of Crowds',
    author: 'Douglas Murray',
    type: 'book',
    description: 'An examination of the key battlegrounds in the new culture wars: gay rights, feminism, race, and trans rights.',
    topicIds: ['1', '2'],
    thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/41jAY1-4prL._SX329_BO1,204,203,200_.jpg'
  },
  {
    id: '3',
    title: 'What Is Critical Race Theory and Why Is It Under Attack?',
    author: 'Stephen Sawchuk',
    type: 'article',
    url: 'https://www.edweek.org/leadership/what-is-critical-race-theory-and-why-is-it-under-attack/2021/05',
    description: 'An article from Education Week explaining the core tenets of CRT.',
    topicIds: ['2'],
  },
  {
    id: '4',
    title: 'A Critical Introduction to Critical Race Theory | Erec Smith',
    author: 'Triggernometry',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=gPRj0j6A5rI',
    description: 'A YouTube video discussing CRT with Erec Smith.',
    topicIds: ['2'],
  }
];
