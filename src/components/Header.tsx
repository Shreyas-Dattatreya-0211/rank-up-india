import { Menu, Search, X } from "lucide-react";
import { demoAnalytics } from "../data/demoRankings";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  dark: boolean;
  menuOpen: boolean;
  searchOpen: boolean;
  onToggleTheme: () => void;
  onToggleMenu: () => void;
  onToggleSearch: () => void;
};

export function Header({
  dark,
  menuOpen,
  searchOpen,
  onToggleTheme,
  onToggleMenu,
  onToggleSearch,
}: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Rank Up India home">
          <img src="/RankupLogo.png" alt="Rank Up India" />
        </a>

        <div className="live-stats" aria-label="Demo visitor statistics">
          <span className="online-dot" />
          <strong>{demoAnalytics.onlineNow} online</strong>
          <span className="stat-separator">·</span>
          <span>{demoAnalytics.visitorsToday.toLocaleString("en-IN")} visitors today</span>
          <a href="#daily">stats <span aria-hidden="true">→</span></a>
        </div>

        <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          <a href="#daily" onClick={onToggleMenu}>Daily</a>
          <a href="#categories" onClick={onToggleMenu}>Categories</a>
          <a href="#about" onClick={onToggleMenu}>About</a>
          <a href="#rules" onClick={onToggleMenu}>Rules</a>
        </nav>

        <div className="header-actions">
          <button className={`icon-button${searchOpen ? " is-active" : ""}`} aria-label="Search" title="Search" type="button" onClick={onToggleSearch}>
            <Search size={18} />
          </button>
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <button className="menu-button icon-button" aria-label={menuOpen ? "Close menu" : "Open menu"} type="button" onClick={onToggleMenu}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
