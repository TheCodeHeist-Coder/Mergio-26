import { footerLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <span>© Mergio · GDG on Campus KNIT Sultanpur</span>
        <nav className="foot-links" aria-label="Footer">
          {footerLinks.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
