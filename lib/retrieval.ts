export type RetrievalFilter = {
  season?: number;
  episode?: string;
  source?: "transcript" | "generated";
};

export type RetrievalMatch = {
  id: string;
  score: number;
  metadata?: Record<string, unknown>;
};

export const buildVectorizeFilter = (filter: RetrievalFilter) => {
  const clauses: Record<string, unknown> = {};

  if (filter.season !== undefined) {
    clauses.season = filter.season;
  }

  if (filter.episode) {
    clauses.episode = filter.episode;
  }

  if (filter.source) {
    clauses.source = filter.source;
  }

  return Object.keys(clauses).length > 0 ? clauses : undefined;
};
