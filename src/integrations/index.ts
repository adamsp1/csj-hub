import { ideologies } from '@/data/ideologies';
import { critiques } from '@/data/critiques';
import { sources } from '@/data/sources';
import { glossary } from '@/data/glossary';

const data = {
  ideologies,
  critiques,
  sources,
  glossary,
};

type Collection = keyof typeof data;

export const BaseCrudService = {
  async getAll<T>(collection: Collection): Promise<T[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data[collection] as T[]);
      }, 500);
    });
  },

  async getById<T>(collection: Collection, id: string): Promise<T | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = (data[collection] as any[]).find((item) => item.id === id);
        resolve(result || null);
      }, 500);
    });
  },
};
