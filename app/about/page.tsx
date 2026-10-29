import { LinkArrow } from "@/app/components/LinkArrow";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { leadershipRoles, profile, training } from "@/lib/site-data";

export const metadata = createPageMetadata(
  "About",
  "Joaquin A. Vizcarra is a movement disorders neurologist and Assistant Professor at the University of Cincinnati, studying Parkinson’s disease through clinical AI.",
  "/about"
);

export default function AboutPage() {
  return (
    <div className="container page-shell">
      <header className="page-heading">
        <p className="eyebrow">About</p>
        <h1>A clinician’s perspective.</h1>
        <p className="page-intro">
          I am a movement disorders neurologist studying how clinical data and
          artificial intelligence can improve care for people with Parkinson’s
          disease.
        </p>
      </header>

      <section className="editorial-section split-layout" aria-labelledby="background-heading">
        <div className="prose">
          <h2 id="background-heading" className="section-heading">Clinical questions first.</h2>
          <p>
            Parkinson’s disease is the clinical focus of my work. Clinical AI is
            the method: a way to study disease heterogeneity, learn from the
            clinical record, and examine how specialist expertise can reach more
            people.
          </p>
          <p>
            I am an Assistant Professor at the University of Cincinnati, with a
            primary appointment in Biostatistics, Health Informatics, and Data
            Sciences and a secondary appointment in Neurology and Rehabilitation
            Medicine. I lead Artificial Intelligence-Enabled Clinical Research
            within BHIDS.
          </p>
          <p>
            My training brings together clinical neurology, movement disorders,
            translational research, and bioinformatics. I trained in neurology at
            Emory University and in movement disorders at the University of
            Pennsylvania, where I also completed a Master of Science in
            Translational Research and NIH-supported training in neuroengineering
            and medicine.
          </p>
          <Link className="text-link" href="/research">Explore my research <LinkArrow /></Link>
        </div>
        <aside aria-label="Current appointment">
          <p className="section-label">Current appointment</p>
          <dl className="detail-list">
            <div className="detail-row">
              <dt>{profile.title}</dt>
              <dd>{profile.institution}</dd>
            </div>
            <div className="detail-row">
              <dt>Primary appointment</dt>
              <dd>{profile.primaryDepartment}</dd>
            </div>
            <div className="detail-row">
              <dt>Secondary appointment</dt>
              <dd>{profile.secondaryDepartment}</dd>
            </div>
            <div className="detail-row">
              <dt>Board certification</dt>
              <dd>Neurology, American Board of Psychiatry and Neurology</dd>
            </div>
          </dl>
          <a className="text-link" href={profile.links.uc} target="_blank" rel="noreferrer">
            University profile <LinkArrow />
          </a>
        </aside>
      </section>

      <section className="editorial-section split-layout" aria-labelledby="leadership-heading">
        <div>
          <p className="section-label">Leadership & service</p>
          <h2 id="leadership-heading" className="section-heading">Working across disciplines.</h2>
          <p className="body-copy">
            My work with the International Parkinson and Movement Disorder Society
            connects clinical research, digital measurement, and patient-centered
            technology development.
          </p>
        </div>
        <dl className="detail-list">
          {leadershipRoles.map((role) => (
            <div className="detail-row" key={`${role.title}-${role.organization}`}>
              <dt>{role.title}</dt>
              <dd>{role.organization}</dd>
              <dd className="subtle-note">{role.period}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="editorial-section split-layout" aria-labelledby="training-heading">
        <div>
          <p className="section-label">Background</p>
          <h2 id="training-heading" className="section-heading">Training & education.</h2>
        </div>
        <ol className="training-list">
          {training.map((item) => (
            <li className="training-item" key={`${item.title}-${item.institution}`}>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              <p className="subtle-note">{item.period}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="editorial-section split-layout" aria-labelledby="lab-heading">
        <div>
          <p className="section-label">Forthcoming</p>
          <h2 id="lab-heading" className="section-heading">Clinical Intelligence Lab.</h2>
        </div>
        <div className="prose">
          <p>
            I am developing the Clinical Intelligence Lab at the University of
            Cincinnati. Its planned focus brings together my work on access to
            Parkinson’s care, language-based phenotyping, and multimodal prediction.
          </p>
          <Link href="/contact" className="text-link">Get in touch <LinkArrow /></Link>
        </div>
      </section>
    </div>
  );
}
