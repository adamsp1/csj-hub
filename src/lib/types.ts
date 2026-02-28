export interface Topic {
  id: string;
  title: string;
  description: string;
  keyConcepts?: string[];
  claims?: string[];
}

export interface Critique {
  id: string;
  title: string;
  topicId: string;
  summary: string;
  argument: string;
  evidence?: string[];
  counterpoints?: string[];
  sourceIds?: string[];
}

export type SourceType = "book" | "article" | "video" | "podcast" | "website";

export interface Source {
  id: string;
  title: string;
  author: string;
  type: SourceType;
  url?: string;
  description: string;
  topicIds: string[];
  thumbnailUrl?: string;
}
