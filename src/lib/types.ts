export interface Ideology {
  id: string;
  title: string;
  description: string;
  ideologyName?: string;
  ideologyImage?: string;
  mainConcepts?: string;
  coreTheoriesDescription?: string;
  politicalAgendas?: string;
}

export interface Critique {
  id: string;
  title: string;
  ideologyId: string;
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
  ideologyIds: string[];
  topicIds?: string[];
  thumbnailUrl?: string;
}
