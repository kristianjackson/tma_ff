const Root = () => (
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
