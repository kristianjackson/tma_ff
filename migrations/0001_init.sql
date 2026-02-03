-- Initial schema for transcripts and generated statements.

CREATE TABLE IF NOT EXISTS transcripts (
  id TEXT PRIMARY KEY,
  episode TEXT NOT NULL,
  season INTEGER NOT NULL,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS statements (
  id TEXT PRIMARY KEY,
  transcript_id TEXT,
  version INTEGER NOT NULL,
  content TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (transcript_id) REFERENCES transcripts(id)
);

CREATE TABLE IF NOT EXISTS statement_metadata (
  statement_id TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  PRIMARY KEY (statement_id, key),
  FOREIGN KEY (statement_id) REFERENCES statements(id)
);
