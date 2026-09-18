import { useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  ExternalLink,
  Globe2,
  Menu,
  Moon,
  Search,
  Sun,
  Trophy,
  X,
} from "lucide-react";

type Mode = "allTime" | "today";

type Product = {
  rank: number;
  name: string;
  description: string;
  category: string;
  age: string;
  clicks: number;
  amount: number;
  logo: string;
};

const products: Product[] = [
  {
    rank: 1,
    name: "BuildAI",
    description: "Turn your ideas into useful AI-powered products.",
    category: "AI Agents",
    age: "3 days ago",
    clicks: 18420,
    amount: 15000,
    logo: "BA",
  },
  {
    rank: 2,
    name: "VibeCode",
    description: "Build websites and applications using natural language.",
    category: "Developer",
    age: "1 week ago",
    clicks: 14791,
    amount: 12500,
    logo: "VC",
  },
  {
    rank: 3,
    name: "LocalKart",
    description: "Discover useful businesses, services and products around you.",
    category: "Local Businesses",
    age: "2 weeks ago",
    clicks: 12165,
    amount: 10000,
    logo: "LK",
  },
  {
    rank: 4,
    name: "AutoFlow",
    description: "Automate repetitive business tasks without complicated setup.",
    category: "Automation",
    age: "2 weeks ago",
    clicks: 10865,
    amount: 8500,
    logo: "AF",
  },
  {
    rank: 5,
    name: "StudyStack",
    description: "Learning tools created to help students study smarter.",
    category: "Education",
    age: "3 weeks ago",
    clicks: 9635,
    amount: 7000,
    logo: "SS",
  },
  {
    rank: 6,
    name: "ResumeAI",
    description: "Create and improve professional resumes with AI.",
    category: "Productivity",
    age: "3 weeks ago",
    clicks: 8421,
    amount: 6000,
    logo: "RA",
  },
  {
    rank: 7,
    name: "MarketMint",
    description: "Simple marketing intelligence for growing businesses.",
    category: "Marketing",
    age: "1 month ago",
    clicks: 7214,
    amount: 5000,
    logo: "MM",
  },
];

const todayRanking = [
  { rank: 1, name: "BuildAI", amount: 500, logo: "BA" },
  { rank: 2, name: "Student AI Lab", amount: 400, logo: "SA" },
  { rank: 3, name: "LocalKart", amount: 300, logo: "LK" },
  { rank: 4, name: "VibeCode", amount: 250, logo: "VC" },
  { rank: 5, name: "AutoFlow", amount: 200, logo: "AF" },
  { rank: 6, name: "ResumeAI", amount: 150, logo: "RA" },
  { rank: 7, name: "StudyStack", amount: 100, logo: "SS" },
];

const categories = [
  "All",
  "AI",
  "AI Agents",
  "Startups",
  "Marketing",
  "Productivity",
  "SaaS",
  "Crypto",
  "Developer",
  "Education",
  "Design",
  "Other",
];

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function formatClicks(value: number) {
  return value.toLocaleString("en-IN");
}

function App() {
  const [mode, setMode] = useState<Mode>("allTime");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [url, setUrl] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }

    return products.filter(
      (product) =>
        product.category === selectedCategory ||
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory]);

  const highestAmount =
    products.length > 0 ? products[0].amount : 0;

  return (
    <div className="rank-app">
      {/* HEADER */}
      <header className="top-header">
        <div className="header-container">
          <a href="#" className="brand">
            <img
              src="/RankupLogo.jpg"
              alt="Rank Up India"
              className="brand-image"
            />
          </a>

          <div className="live-counter">
            <span className="online-dot" />
            <strong>24 online</strong>
            <span>•</span>
            <span>1,284 visitors today</span>
            <span className="stats-arrow">stats →</span>
          </div>

          <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
            <a href="#daily" onClick={() => setMenuOpen(false)}>
              Daily
            </a>

            <a href="#categories" onClick={() => setMenuOpen(false)}>
              Categories
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#rules" onClick={() => setMenuOpen(false)}>
              Rules
            </a>
          </nav>

          <div className="header-tools">
            <button
              className="icon-button"
              aria-label="Search"
              type="button"
            >
              <Search size={19} />
            </button>

            <button
              className="icon-button"
              aria-label="Toggle theme"
              type="button"
              onClick={() => setDark((value) => !value)}
            >
              {dark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button
              className="mobile-menu-button"
              type="button"
              aria-label="Menu"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {/* CATEGORY NAVIGATION */}
      <div className="category-bar" id="categories">
        <div className="category-container">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-nav active"
                  : "category-nav"
              }
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              {category === "All" && <Globe2 size={15} />}
              {category !== "All" && <span className="category-symbol">◈</span>}
              {category}
            </button>
          ))}

          <button className="category-nav explore-button" type="button">
            Explore
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <main>
        {/* MAIN CLAIM AREA */}
        <section className="claim-section">
          <div className="mode-switch">
            <button
              className={mode === "allTime" ? "mode active" : "mode"}
              onClick={() => setMode("allTime")}
              type="button"
            >
              <Trophy size={15} />
              All-time
            </button>

            <button
              className={mode === "today" ? "mode active" : "mode"}
              onClick={() => setMode("today")}
              type="button"
            >
              <span className="today-dot" />
              Today
            </button>
          </div>

          <h1>
            Claim #1 for{" "}
            <span>{formatINR(highestAmount)}</span>
            <b>+</b>
          </h1>

          <p className="claim-subtitle">
            Put your website in front of India's builders.
          </p>

          <div className="claim-form">
            <div className="url-input">
              <Globe2 size={18} />
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                placeholder="Your product URL or @handle"
                type="text"
              />
            </div>

            <div className="category-select-wrapper">
              <button
                className="category-select"
                type="button"
                onClick={() => setCategoryOpen((value) => !value)}
              >
                <span>
                  {selectedCategory === "All"
                    ? "Choose a category"
                    : selectedCategory}
                </span>
                <ChevronDown size={17} />
              </button>

              {categoryOpen && (
                <div className="category-dropdown">
                  {categories
                    .filter((item) => item !== "All")
                    .map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category);
                          setCategoryOpen(false);
                        }}
                      >
                        {category}
                      </button>
                    ))}
                </div>
              )}
            </div>

            <button className="claim-button" type="button">
              Claim rank
            </button>
          </div>
        </section>

        {/* CONTENT */}
        <section className="content-container">
          <div className="leaderboard-column">
            <div className="leaderboard-heading">
              <div>
                <span className="section-kicker">
                  {mode === "today" ? "TODAY'S LEADERBOARD" : "ALL-TIME LEADERBOARD"}
                </span>

                <h2>
                  {mode === "today"
                    ? "What's ranking today"
                    : "India's top builders"}
                </h2>
              </div>

              <button className="see-all-button" type="button">
                See all →
              </button>
            </div>

            <div className="products-list">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.rank}>
                  <div className="rank">
                    #{product.rank}
                  </div>

                  <div className="product-logo">
                    {product.logo}
                  </div>

                  <div className="product-details">
                    <div className="product-name-row">
                      <h3>{product.name}</h3>

                      <span className="product-category">
                        {product.category}
                      </span>
                    </div>

                    <p>{product.description}</p>

                    <div className="product-meta">
                      <span>◉ {product.category}</span>
                      <span>•</span>
                      <span>{product.age}</span>
                      <span>•</span>
                      <span>
                        {formatClicks(product.clicks)} clicks
                      </span>
                      <span>•</span>
                      <span className="details-link">
                        see details
                      </span>
                    </div>
                  </div>

                  <div className="product-price">
                    {formatINR(product.amount)}
                  </div>

                  <button
                    className="product-open"
                    aria-label={`Open ${product.name}`}
                    type="button"
                  >
                    <ExternalLink size={17} />
                  </button>
                </article>
              ))}

              {filteredProducts.length === 0 && (
                <div className="empty-state">
                  No products found in this category yet.
                </div>
              )}
            </div>
          </div>

          {/* TODAY SIDEBAR */}
          <aside className="today-sidebar" id="daily">
            <div className="sidebar-heading">
              <div>
                <span className="live-dot" />
                Today's ranking
              </div>

              <button type="button">See all →</button>
            </div>

            <div className="today-list">
              {todayRanking.map((item) => (
                <div className="today-item" key={item.rank}>
                  <span className="today-rank">
                    #{item.rank}
                  </span>

                  <div className="today-logo">
                    {item.logo}
                  </div>

                  <span className="today-name">
                    {item.name}
                  </span>

                  <strong>
                    {formatINR(item.amount)}
                  </strong>
                </div>
              ))}
            </div>

            <div className="sidebar-note">
              Rankings reset every 24 hours.
            </div>
          </aside>
        </section>

        {/* ABOUT */}
        <section className="information-section" id="about">
          <div className="info-container">
            <div>
              <span className="section-kicker">RANK UP INDIA</span>
              <h2>Show India what you built.</h2>
            </div>

            <p>
              Rank Up India is a public discovery platform for AI tools,
              startups, websites, apps, businesses and useful products
              created by builders across India.
            </p>
          </div>
        </section>

        {/* RULES */}
        <section className="rules-section" id="rules">
          <div className="rules-container">
            <div>
              <span className="section-kicker">HOW IT WORKS</span>
              <h2>Three ways to get discovered.</h2>
            </div>

            <div className="rules-grid">
              <div className="rule-card">
                <span>01</span>
                <h3>All-time</h3>
                <p>
                  Paid ranking positions for builders who want
                  prominent long-term visibility.
                </p>
              </div>

              <div className="rule-card">
                <span>02</span>
                <h3>Free</h3>
                <p>
                  Community-driven discovery for students,
                  new builders and early-stage projects.
                </p>
              </div>

              <div className="rule-card">
                <span>03</span>
                <h3>Today</h3>
                <p>
                  A daily ranking based on activity during the
                  current 24-hour period.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <img
              src="/RankupLogo.png"
              alt="Rank Up India"
              className="footer-logo"
            />
            <p>India's public leaderboard for builders.</p>
          </div>

          <div className="footer-links">
            <a href="#daily">Daily</a>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>
            <a href="#rules">Rules</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

          <div className="copyright">
            © 2026 Rank Up India
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;