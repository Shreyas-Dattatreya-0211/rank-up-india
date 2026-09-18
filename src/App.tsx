import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CategoryNav } from "./components/CategoryNav";
import { ClaimSection } from "./components/ClaimSection";
import { Header } from "./components/Header";
import { RankingCard } from "./components/RankingCard";
import { RankingToggle } from "./components/RankingToggle";
import { TodayRanking } from "./components/TodayRanking";
import { categories, rankings, todayRankings, type Category } from "./data/demoRankings";

function App() {
  const [mode, setMode] = useState<"allTime" | "today">("allTime");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [claimCategory, setClaimCategory] = useState<Category | "">("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const visibleRankings = useMemo(() => {
    const source = mode === "today" ? todayRankings : rankings;
    if (selectedCategory === "All") return source;
    return source.filter((ranking) => ranking.category === selectedCategory);
  }, [mode, selectedCategory]);

  return (
    <div className="rank-app" id="top">
      <Header
        dark={dark}
        menuOpen={menuOpen}
        searchOpen={searchOpen}
        onToggleTheme={() => setDark((value) => !value)}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onToggleSearch={() => setSearchOpen((value) => !value)}
      />
      {searchOpen && (
        <div className="search-drawer">
          <div className="search-drawer-inner">
            <Search size={18} />
            <input autoFocus placeholder="Search rankings, tools and builders" aria-label="Search rankings" />
            <span>ESC</span>
          </div>
        </div>
      )}
      <CategoryNav selected={selectedCategory} onSelect={setSelectedCategory} />

      <main>
        <div className="page-shell">
          <div className="hero-toolbar">
            <RankingToggle mode={mode} onChange={setMode} />
            <span className="demo-label">LIVE DEMO DATA</span>
          </div>
          <ClaimSection category={claimCategory} url={url} onUrlChange={setUrl} onCategoryChange={setClaimCategory} />

          <section className="content-grid" id="rankings">
            <div className="leaderboard-column">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">{mode === "today" ? "TODAY'S LEADERBOARD" : "ALL-TIME LEADERBOARD"}</span>
                  <h2>{mode === "today" ? "What's moving today" : "India's top builders"}</h2>
                </div>
                <span className="result-count">{visibleRankings.length} listed</span>
              </div>
              <div className="ranking-list">
                {visibleRankings.map((ranking) => (
                  <div id={`rank-${ranking.rank}`} key={ranking.rank}><RankingCard ranking={ranking} /></div>
                ))}
                {visibleRankings.length === 0 && <div className="empty-state">No projects are listed in this category yet.</div>}
              </div>
              {selectedCategory !== "All" && <button className="reset-button" type="button" onClick={() => setSelectedCategory("All")}>View all categories</button>}
            </div>
            <TodayRanking rankings={todayRankings} />
          </section>
        </div>

        <section className="about-band" id="about">
          <div className="wide-shell">
            <div><span className="eyebrow">RANK UP INDIA</span><h2>Useful things deserve to be found.</h2></div>
            <p>A public discovery platform for the websites, AI tools, startups, products, apps and digital projects being built across India.</p>
          </div>
        </section>
        <section className="rules-band" id="rules">
          <div className="wide-shell">
            <div className="section-heading"><div><span className="eyebrow">HOW IT WORKS</span><h2>Make your work visible.</h2></div></div>
            <div className="rules-grid">
              <div><span>01</span><h3>Submit</h3><p>Share a useful project with the community.</p></div>
              <div><span>02</span><h3>Get discovered</h3><p>Let India find the things you are building.</p></div>
              <div><span>03</span><h3>Rise up</h3><p>Earn attention through genuine community interest.</p></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wide-shell"><img src="/RankupLogo.png" alt="Rank Up India" /><span>Built for India's builders.</span><a href="#top">Back to top ↑</a></div>
      </footer>
      <span className="sr-only">Available categories: {categories.join(", ")}</span>
    </div>
  );
}

export default App;
