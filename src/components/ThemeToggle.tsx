import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  dark: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  return (
    <button
      className="icon-button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
      onClick={onToggle}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
