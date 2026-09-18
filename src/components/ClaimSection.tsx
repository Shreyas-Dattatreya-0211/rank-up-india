import { ChevronDown, Globe2, Link2, Send } from "lucide-react";
import { categories, type Category } from "../data/demoRankings";

type ClaimSectionProps = {
  category: Category | "";
  url: string;
  onUrlChange: (url: string) => void;
  onCategoryChange: (category: Category) => void;
};

export function ClaimSection({ category, url, onUrlChange, onCategoryChange }: ClaimSectionProps) {
  return (
    <section className="claim-panel" aria-labelledby="claim-heading">
      <div className="claim-copy">
        <span className="eyebrow"><span className="eyebrow-mark" /> FOR INDIA'S BUILDERS</span>
        <h1 id="claim-heading">Claim #1 in India<span className="headline-dot">.</span></h1>
        <p>Put your useful website, AI tool, or product in front of the people building what comes next.</p>
      </div>
      <form className="claim-form" onSubmit={(event) => event.preventDefault()}>
        <label className="field field-url">
          <Link2 size={17} />
          <span className="sr-only">Product URL or handle</span>
          <input value={url} onChange={(event) => onUrlChange(event.target.value)} placeholder="Your product URL or @handle" type="text" />
        </label>
        <label className="field field-select">
          <Globe2 size={17} />
          <span className="sr-only">Category</span>
          <select value={category} onChange={(event) => onCategoryChange(event.target.value as Category)}>
            <option value="">Choose a category</option>
            {categories.filter((item) => item !== "All").map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <ChevronDown className="select-chevron" size={16} />
        </label>
        <button className="claim-button" type="submit"><Send size={16} /> Claim rank</button>
      </form>
      <span className="claim-note">Free to submit · Reviewed by the community</span>
    </section>
  );
}
