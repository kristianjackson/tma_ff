const Root = () => (
  <main className="mx-auto grid max-w-5xl gap-8 px-6 py-12">
    <header className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-brass">
        Magnus Institute — North American Repository
      </p>
      <h1 className="text-4xl font-semibold">Statement Generator</h1>
      <p className="max-w-xl text-sm text-slate-300">
        Generate archival statements grounded in ingested transcripts, tuned to
        the tone of the original series.
      </p>
      <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-400">
        <span className="rounded-full border border-slate-800 px-3 py-1">
          Season-aware storytelling
        </span>
        <span className="rounded-full border border-slate-800 px-3 py-1">
          Canon toggles
        </span>
        <span className="rounded-full border border-slate-800 px-3 py-1">
          Fear selection
        </span>
      </div>
    </header>

    <section className="grid gap-4 md:grid-cols-3">
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
        <h2 className="text-lg font-semibold">Ingestion</h2>
        <p className="mt-2 text-sm text-slate-400">
          Upload transcripts, monitor chunking, and track Vectorize embeddings.
        </p>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
        <h2 className="text-lg font-semibold">Generation</h2>
        <p className="mt-2 text-sm text-slate-400">
          Tune seasons, canon presence, fears, and grounding per statement.
        </p>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
        <h2 className="text-lg font-semibold">Library</h2>
        <p className="mt-2 text-sm text-slate-400">
          Search, filter, and review versioned statements with metadata.
        </p>
  <main className="page">
    <header className="hero">
      <p className="eyebrow">Magnus Institute — North American Repository</p>
      <h1>Statement Generator</h1>
      <p className="subtitle">
        Generate archival statements grounded in ingested transcripts, tuned to
        the tone of the original series.
      </p>
    </header>

    <section className="panel-grid">
      <div className="panel">
        <h2>Ingestion</h2>
        <p>Track transcript uploads, chunking, and Vectorize status.</p>
      </div>
      <div className="panel">
        <h2>Generation</h2>
        <p>Choose season, canon mode, fears, and grounding.</p>
      </div>
      <div className="panel">
        <h2>Library</h2>
        <p>Search and filter generated statements with metadata.</p>
      </div>
    </section>
  </main>
);

export default Root;
