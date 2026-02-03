# Magnus Institute — North American Repository (NAR)

An American-branch inspired fan fiction generator for *The Magnus Archives*.

This project ingests transcripts from all 200 episodes and uses Cloudflare-native infrastructure (Workers, D1, R2, Vectorize, Workers AI) to generate new archival statements set in the United States.

The system preserves the tone, cadence, and structural feel of the original series while allowing:

- Season-aware storytelling
- Canon character toggles
- Fear selection (manual or randomized)
- Episode-specific contextual grounding
- Iterative revision and regeneration
- A searchable catalog of generated works

## Architecture

This project is fully Cloudflare-native and designed to run on the Workers Free plan.

### Frontend

- Cloudflare Pages
- React + TypeScript
- Tailwind CSS
- Modern admin dashboard + generation interface

### Backend

- Cloudflare Workers (REST API)
- D1 (relational metadata storage)
- R2 (transcripts + generated outputs)
- Vectorize (semantic retrieval via embeddings)
- Workers AI (LLM + embeddings)

## Core Features

### Transcript Ingestion

- Upload single or multiple transcripts
- Track ingestion status
- Chunk + embed into Vectorize
- Status dashboard

### Generation Controls

- Select season (1–5)
- Canon mode:
  - None
  - Cameo
  - Full integration
- Fear selection:
  - Manual selection
  - Randomized (with optional lock)
- Episode filter:
  - All episodes
  - Specific episode grounding
- Output length selection

### Iterative Revision

- Suggest edits
- Regenerate new version
- Maintain version history

### Library

- Searchable catalog
- Metadata-driven filtering
- Version tracking

## Development Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure Cloudflare resources**

   You must manually create:

   - D1 database (`tma_db`)
   - R2 buckets:
     - `tma-transcripts`
     - `tma-generated`
   - Vectorize index (`tma_vectors`)
   - Enable Workers AI

   After creating them, update `wrangler.toml` with the appropriate bindings.

   **Vectorize setup details**

   - **Index name:** `tma_vectors`
   - **Dimensions:** match your embedding model output (for Workers AI `@cf/baai/bge-base-en-v1.5`, use `768`)
   - **Distance metric:** cosine
   - **Schema (metadata fields to store alongside vectors):**
     - `episode`: string (e.g., `MAG_001`)
     - `season`: number (1–5)
     - `chunk_index`: number
     - `source`: string (`transcript` or `generated`)
     - `statement_id`: string (UUID or D1 row id)
   - **Recommended metadata payload:** store `episode`, `season`, `chunk_index`, `source`, and `statement_id` on every vector so you can filter by season/episode when retrieving context.

3. **Run locally**

   ```bash
   npm run dev
   ```

   Note: Workers AI calls during local development count against daily limits.

4. **Deploy**

   ```bash
   npm run deploy
   ```

   Or connect the repository to Cloudflare Pages for automatic deploys.

## Project Structure

```
/app                → React Router frontend
/api                → Worker API routes
/migrations         → D1 schema
/lib                → Shared utilities (AI, chunking, retrieval)
/types              → Shared types
wrangler.toml       → Worker configuration
```

## Design Philosophy

This project is designed around three principles:

- **Atmospheric fidelity**: The output should feel archival, restrained, and structured — not chaotic LLM horror.
- **Context-aware storytelling**: Generation is grounded in ingested transcript embeddings.
- **Iterative authorship**: Users collaborate with the model — not just prompt it.

## American Branch Setting

Primary archive branch:

- **Magnus Institute — North American Repository**
- **Location:** Chicago, Illinois
- **Archivist:** Dr. Maren Cole

Stories are generated using American geography, institutions, and cultural references unless otherwise configured.

## Roadmap

- Fear tagging at chunk-level
- Multi-user auth
- Streaming generation UI
- Fear analytics dashboard
- Public anthology mode
- Export formats (PDF, EPUB)
- Thematic arc continuity tracking

## Legal Note

This is a fan project inspired by *The Magnus Archives*.
All original source material remains property of its creators.

This system does not redistribute transcripts and is intended for transformative fan fiction generation only.

## Status

- Early-stage prototype
- Architecture stable
- Feature set expanding
