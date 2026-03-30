import { researchThemes } from "@/lib/site-data";

export default function ResearchPage() {
  return (
    <div className="article">
      <h1>Research</h1>

      <p>
        My research program uses clinical bioinformatics and technology-driven
        methods to improve care for people with Parkinson's disease.
      </p>

      <h2>Core Areas</h2>
      <ul className="list">
        {researchThemes.map((theme) => (
          <li key={theme.title}>{theme.title} — {theme.body}</li>
        ))}
      </ul>

      <h2>Current Projects</h2>
      <ul className="list">
        <li>
          Longitudinal analysis of fall frequency, risk factors, and outcomes in
          Parkinson's disease
        </li>
        <li>
          Natural language processing for automated extraction of falls and
          progression markers from electronic health records
        </li>
        <li>
          Translation of technology-enabled outcomes into practical clinical and
          trial workflows
        </li>
      </ul>

      <h2>Training and Support</h2>
      <p>
        This work is supported by NIH T32 training in Neuroengineering and Medicine,
        alongside graduate training in Translational Research with a concentration in
        bioinformatics.
      </p>
    </div>
  );
}
