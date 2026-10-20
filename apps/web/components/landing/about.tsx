import { about } from "@/lib/content";

export function About() {
  return (
    <section className="section" id="about">
      <div className="aurora soft" aria-hidden="true" />
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">About Mergio</span>
          <p className="statement">
            <strong>Mergio is a month-long open-source program</strong> by GDG
            on Campus KNIT Sultanpur. This winter, students from any college
            pick a real project, solve issues with help from mentors, and{" "}
            <strong>see every merged pull request count.</strong>
          </p>
        </div>

        <div className="offer">
          <p className="offer-label reveal">
            <span className="eyebrow">What you get</span>
            Everything you need to go from your first issue to your first merge.
          </p>
          <ol className="offer-list reveal">
            {about.offers.map((offer, i) => (
              <li key={offer.title}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{offer.title}</h3>
                <p>{offer.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="roles reveal">
          {about.roles.map((role) => (
            <div key={role.who} className="role">
              <span className="who">{role.who}</span>
              <h3>{role.title}</h3>
              <p>{role.body}</p>
              <a href={role.href}>
                {role.cta} <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
