export default function AboutPage() {
  return (
    <div className="article">
      <h1>About</h1>

      <p>
        I am a board-certified neurologist and movement disorders specialist at the
        University of Pennsylvania, where I serve as an Instructor of Neurology.
      </p>

      <p>
        My work focuses on Parkinson's disease at the intersection of clinical care,
        bioinformatics, and artificial intelligence. I am particularly interested in
        whether predictive models and digital tools improve real decisions at the
        point of care.
      </p>

      <h2>Current Direction</h2>
      <ul className="list">
        <li>
          Developing clinically grounded fall risk prediction strategies in
          Parkinson's disease
        </li>
        <li>
          Building and validating natural language processing pipelines for
          extracting outcomes from electronic health records
        </li>
        <li>
          Advancing patient-centered digital outcome measurement for movement
          disorders research and trials
        </li>
      </ul>

      <h2>Approach</h2>
      <p>
        I prioritize clear clinical questions, transparent methods, and validation in
        realistic settings. My goal is not model novelty alone, but translation into
        tools that are useful, interpretable, and clinically responsible.
      </p>
    </div>
  );
}
