import { links, stripFacts } from "@/lib/content";
import { FinalScene } from "./art/final-scene";
import { Icon } from "./icon";

export function FinalCta() {
  return (
    <section className="final" id="register">
      <FinalScene />
      <div className="wrap">
        <h2 className="reveal">Ready to make your first merge?</h2>
        <p className="reveal">
          Registrations open soon. Sign in with GitHub to get notified when
          Mergio begins.
        </p>
        <div className="hero-cta reveal">
          <a className="btn btn-primary" href={links.githubSignIn}>
            <Icon name="github" size={18} />
            Register with GitHub
          </a>
          <a className="btn btn-ghost" href={links.discord}>
            Join our Discord
          </a>
        </div>
      </div>
    </section>
  );
}

export function OrganiserStrip() {
  return (
    <section className="strip" aria-label="Organiser">
      <div className="wrap">
        <span className="logo-slot">[GDG on Campus KNIT Sultanpur logo]</span>
        <div className="strip-facts">
          {stripFacts.map(({ value, label }) => (
            <div key={value}>
              <b>{value}</b>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
