"use client";

import { useEffect, useState } from "react";
import { links, navItems } from "@/lib/content";
import { Icon } from "./icon";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Stronger pill background after scrolling.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section in the middle of the screen.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of navItems) {
      const section = document.getElementById(id);
      if (section) spy.observe(section);
    }
    return () => spy.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "scrolled" : undefined}>
      <div className="pnav">
        <a className="brand" href="#top" aria-label="Mergio home">
          <span className="brand-mark">
            <Icon name="flake" size={14} />
          </span>
          Mergio
        </a>
        <span className="sep" aria-hidden="true" />
        <nav className="nav-links" aria-label="Main">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeId === id ? "active" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <span className="sep" aria-hidden="true" />
        <ThemeToggle />
        <a className="nav-cta" href={links.register}>
          <Icon name="github" size={15} />
          Register
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      <nav
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobileMenu"
        aria-label="Mobile"
      >
        {navItems.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a href="#maintainers" onClick={closeMenu}>
          Submit a project
        </a>
      </nav>
    </header>
  );
}
