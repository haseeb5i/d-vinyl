const STEPS = [
  {
    n: "01",
    tag: "Discovery",
    title: "Consultation",
    desc: "We start with a conversation. Your vehicle, your business, your goals — and a walkaround in our facility so you can see what's possible. No-pressure, written quote.",
    list: ["On-site or virtual consult", "Material & finish samples", "Written estimate", "Timeline locked"],
  },
  {
    n: "02",
    tag: "Design",
    title: "Creation",
    desc: "Our in-house design team builds layouts, mocks them on your actual vehicle templates and revises until you sign off. Then we print in-house on premium cast films.",
    list: ["Custom layout & mockups", "Proofs on vehicle templates", "Revisions until approved", "Latex print on premium cast"],
  },
  {
    n: "03",
    tag: "Execution",
    title: "Installation",
    desc: "Certified installers in a climate-controlled bay. Parts are disassembled where needed for paint-like edges. We deliver clean, photograph the result, and walk you through care.",
    list: ["Climate-controlled bay", "Certified installers", "Edge tucks & part removal", "Care guide + warranty"],
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="section">
        <div className="section__header" data-reveal>
          <div>
            <div className="eyebrow"><span className="dot" />How We Work · 03 Steps</div>
            <h2 className="section__title">
              From <span className="sky">Brief</span><br />
              To <span className="accent">Bay To Road.</span>
            </h2>
          </div>
          <p className="section__desc">
            Same team, same building, start to finish. No subcontractors, no handoffs.
            Every project moves through three clean stages — and you get a real human
            on every one of them.
          </p>
        </div>

        <div className="proc-grid" data-reveal-stagger>
          {STEPS.map((s) => (
            <div key={s.n} className="proc-col">
              <div className="proc-col__num">{s.n}</div>
              <div className="proc-col__tag">Step · {s.tag}</div>
              <div className="proc-col__title">{s.title}</div>
              <p className="proc-col__desc">{s.desc}</p>
              <ul className="proc-col__list">
                {s.list.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
