export interface Env {
  DB: D1Database;
  TRANSCRIPTS_BUCKET: R2Bucket;
  GENERATED_BUCKET: R2Bucket;
  TMA_VECTORS: VectorizeIndex;
  AI: Ai;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=UTF-8"
    }
  });

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return json({
        ok: true,
        message: "NAR Worker online",
        bindings: {
          d1: !!env.DB,
          r2Transcripts: !!env.TRANSCRIPTS_BUCKET,
          r2Generated: !!env.GENERATED_BUCKET,
          vectorize: !!env.TMA_VECTORS,
          ai: !!env.AI
        }
      });
    }

    return json({
      ok: false,
      error: "Not Found",
      hint: "Use /api/health to verify bindings."
    }, 404);
  }
};
