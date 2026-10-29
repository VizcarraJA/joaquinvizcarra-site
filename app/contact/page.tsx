import { LinkArrow } from "@/app/components/LinkArrow";
import { createPageMetadata } from "@/lib/metadata";
import { profile } from "@/lib/site-data";

export const metadata = createPageMetadata(
  "Contact",
  "Contact Joaquin A. Vizcarra for research collaborations, academic opportunities, and speaking invitations on Parkinson’s disease and clinical AI.",
  "/contact"
);

export default function ContactPage() {
  return (
    <div className="container page-shell">
      <header className="page-heading">
        <p className="eyebrow">Contact</p>
        <h1>Let’s connect.</h1>
        <p className="page-intro">
          For research collaborations, academic opportunities, and speaking
          invitations, email is the best way to reach me.
        </p>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
      </header>

      <section className="editorial-section split-layout" aria-labelledby="affiliation-heading">
        <div>
          <p className="section-label">Based in Cincinnati</p>
          <h2 className="section-heading" id="affiliation-heading">{profile.institution}</h2>
          <p className="body-copy">
            Assistant Professor, Department of Biostatistics, Health Informatics,
            and Data Sciences. Secondary appointment in Neurology and
            Rehabilitation Medicine.
          </p>
        </div>
        <div>
          <p className="section-label">Elsewhere</p>
          <ul className="profile-links">
            <li><a className="text-link" href={profile.links.uc} target="_blank" rel="noreferrer">University profile <LinkArrow /></a></li>
            <li><a className="text-link" href={profile.links.scholar} target="_blank" rel="noreferrer">Google Scholar <LinkArrow /></a></li>
            <li><a className="text-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <LinkArrow /></a></li>
            <li><a className="text-link" href={profile.links.orcid} target="_blank" rel="noreferrer">ORCID <LinkArrow /></a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
