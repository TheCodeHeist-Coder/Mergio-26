// Snow-capped mountains behind the hero text.
// Generated from mergio-home.html. Light-mode colours are swapped in globals.css by matching fill values, so keep them unchanged.
export function Horizon() {
  return (
    <svg
      className="horizon"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="snowground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C9DBF0" stopOpacity=".16" />
          <stop offset=".5" stopColor="#C9DBF0" stopOpacity=".05" />
          <stop offset="1" stopColor="#0B0D12" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 170 L90 120 L170 150 L260 80 L350 135 L440 95 L540 150 L640 70 L730 125 L830 90 L930 145 L1030 60 L1130 120 L1230 85 L1330 140 L1440 100 V400 H0Z"
        fill="#15223A"
      />
      <path
        d="M260 80 L284 98 L272 96 L262 104 L250 95 L238 100Z M640 70 L666 90 L653 87 L642 96 L629 86 L616 91Z M1030 60 L1058 82 L1044 79 L1032 88 L1019 78 L1005 83Z M440 95 L460 110 L450 109 L441 115 L431 108 L422 111Z M1230 85 L1251 101 L1240 99 L1231 106 L1221 98 L1211 101Z M830 90 L849 104 L839 103 L831 109 L822 102 L813 105Z"
        fill="#DCEAFA"
        opacity=".35"
      />
      <path
        d="M0 230 C120 200 200 180 320 205 S520 240 640 210 S860 170 980 200 S1200 245 1320 215 1440 205 1440 205 V400 H0Z"
        fill="#101A2E"
      />
      <path
        d="M0 300 C220 285 420 305 720 292 S1220 282 1440 296 V400 H0Z"
        fill="url(#snowground)"
      />
    </svg>
  );
}
