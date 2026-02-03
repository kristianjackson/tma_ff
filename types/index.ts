export type CanonMode = "none" | "cameo" | "full";

export type GenerationRequest = {
  season: number;
  canonMode: CanonMode;
  fears: string[];
  episode?: string;
  length: "short" | "medium" | "long";
  prompt?: string;
};

export type GenerationResponse = {
  id: string;
  version: number;
  content: string;
};

export type IngestionStatus = "queued" | "processing" | "complete" | "failed";

export type TranscriptRecord = {
  id: string;
  episode: string;
  season: number;
  status: IngestionStatus;
  createdAt: string;
};
