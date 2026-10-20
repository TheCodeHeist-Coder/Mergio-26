import type { CSSProperties, ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  children,
  style,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div className="section-head reveal" style={style}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
