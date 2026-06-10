"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span
          className={`theme-toggle-thumb ${theme === "light" ? "light" : ""}`}
        />
        <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true">
          ☀
        </span>
        <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true">
          ☾
        </span>
      </span>
    </button>
  );
}
