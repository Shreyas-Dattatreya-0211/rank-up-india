import { Bot, BriefcaseBusiness, Code2, Globe2, Palette, Rocket, Sparkles, WalletCards, WandSparkles } from "lucide-react";
import { categories, type Category } from "../data/demoRankings";

const categoryIcons = {
  All: Globe2,
  AI: Sparkles,
  "AI Agents": Bot,
  Startups: Rocket,
  Marketing: WandSparkles,
  Productivity: BriefcaseBusiness,
  Developer: Code2,
  Design: Palette,
  Education: Sparkles,
  Business: BriefcaseBusiness,
  Finance: WalletCards,
  Other: Globe2,
};

type CategoryNavProps = {
  selected: Category;
  onSelect: (category: Category) => void;
};

export function CategoryNav({ selected, onSelect }: CategoryNavProps) {
  return (
    <nav className="category-nav-wrap" id="categories" aria-label="Browse categories">
      <div className="category-nav-inner">
        {categories.map((category) => {
          const Icon = categoryIcons[category];
          return (
            <button className={`category-pill${selected === category ? " is-active" : ""}`} key={category} type="button" aria-pressed={selected === category} onClick={() => onSelect(category)}>
              <Icon size={15} strokeWidth={2.2} />
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
