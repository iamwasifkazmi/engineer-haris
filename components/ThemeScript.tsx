import { THEME_STORAGE_KEY } from "@/lib/theme";

export default function ThemeScript() {
  const script = `(function(){try{var k="${THEME_STORAGE_KEY}";var t=localStorage.getItem(k);var d=t==="light"||t==="dark"?t:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",d)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
