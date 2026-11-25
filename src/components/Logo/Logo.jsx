// Usage: <Logo /> follows the OS theme; or pass theme="light" | "dark"
const palette = {
  light: { bg: "#FFFFFF", ink: "#1a5a14", accent: "#f22b2b" },
  dark: { bg: "#0B1A2B", ink: "#ebfbea", accent: "#ff5050" },
};
const font = "'Poppins','Nunito','Segoe UI',system-ui,sans-serif";

export default function Logo({
  theme,
  width = 260,
  withBackground = false,
  ...props
}) {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const { bg, ink, accent } =
    palette[theme ?? (prefersDark ? "dark" : "light")];

  return (
    <svg
      viewBox="0 0 260 84"
      width={width}
      role="img"
      aria-label="ChaloJai – Let's go"
      {...props}
    >
      {withBackground && <rect width="260" height="84" rx="14" fill={bg} />}
      <g transform="translate(14 10)">
        <path
          d="M40 54 C40 54 24 40 24 27 A16 16 0 0 1 56 27 C56 40 40 54 40 54 Z M46 27 A6 6 0 1 0 34 27 A6 6 0 1 0 46 27 Z"
          fill={accent}
          fillRule="evenodd"
        />
        <path
          d="M4 60 C14 46 24 68 37 57"
          fill="none"
          stroke={ink}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="0.5 8"
        />
      </g>
      <text x="88" y="48" fontFamily={font} fontSize="30" letterSpacing="-0.5">
        <tspan fontWeight="600" fill={ink}>
          Chalo
        </tspan>
        <tspan fontWeight="800" fill={accent}>
          Jai
        </tspan>
      </text>
      <text
        x="90"
        y="67"
        fontFamily={font}
        fontSize="11.5"
        fontWeight="500"
        letterSpacing="1.2"
        fill={ink}
        fillOpacity="0.7"
      >
        Let's go explore
      </text>
    </svg>
  );
}
