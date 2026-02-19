import { selectedTalks } from "@/lib/site-data";

export default function SpeakingPage() {
  return (
    <div className="article">
      <h1>Selected Talks</h1>
      <p>
        Invited lectures and plenary sessions focused on Parkinson's disease,
        movement disorders, and clinical applications of artificial intelligence.
      </p>

      <div className="postlist">
        {selectedTalks.map((talk) => (
          <article key={`${talk.title}-${talk.date}`} className="postitem">
            <strong>{talk.title}</strong>
            <div className="postmeta">{talk.venue}</div>
            <div className="postmeta">
              {talk.location} | {talk.date}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
