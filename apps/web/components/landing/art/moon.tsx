// Crescent moon with a halo, shown only in dark mode.
// Generated from mergio-home.html. Light-mode colours are swapped in globals.css by matching fill values, so keep them unchanged.
export function Moon() {
  return (
    <svg className="moon" viewBox="0 0 150 150" aria-hidden="true">
      <defs>
        <radialGradient id="moonHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#CFE2FF" stopOpacity=".22" />
          <stop offset=".45" stopColor="#9DBBEA" stopOpacity=".08" />
          <stop offset="1" stopColor="#9DBBEA" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="moonFace" cx="35%" cy="35%" r="75%">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".55" stopColor="#E9F1FB" />
          <stop offset="1" stopColor="#B9CCE3" />
        </radialGradient>
        <mask id="moonCut">
          <rect width="150" height="150" fill="#fff" />
          <circle id="moonShadow" cx="93" cy="62" r="34" fill="#000" />
        </mask>
        <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle id="moonHaloC" cx="75" cy="75" r="75" fill="url(#moonHalo)" />
      <g mask="url(#moonCut)" filter="url(#moonGlow)">
        <circle cx="75" cy="75" r="36" fill="url(#moonFace)" />
        <circle cx="58" cy="88" r="5" fill="#AFC2DA" opacity=".35" />
        <circle cx="50" cy="70" r="3" fill="#AFC2DA" opacity=".3" />
        <circle cx="66" cy="100" r="2.5" fill="#AFC2DA" opacity=".3" />
      </g>
    </svg>
  );
}
