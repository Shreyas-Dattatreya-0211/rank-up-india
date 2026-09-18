import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { formatCount, formatINR, type Ranking } from "../data/demoRankings";

type RankingCardProps = {
  ranking: Ranking;
};

export function RankingCard({ ranking }: RankingCardProps) {
  return (
    <article className={`ranking-card${ranking.rank === 1 ? " is-top" : ""}`}>
      <div className="rank-number">#{ranking.rank.toString().padStart(2, "0")}</div>
      <div className="product-mark" style={{ backgroundColor: ranking.accent }}>{ranking.name.slice(0, 1)}</div>
      <div className="ranking-details">
        <div className="ranking-title-row">
          <h3>{ranking.name}</h3>
          <span className="category-label">{ranking.category}</span>
        </div>
        <p>{ranking.description}</p>
        <div className="ranking-meta"><span>{ranking.age}</span><span className="meta-dot">·</span><span><MousePointer2 size={12} /> {formatCount(ranking.clicks)} clicks</span></div>
      </div>
      <div className="ranking-value"><span>value</span><strong>{formatINR(ranking.value)}</strong></div>
      <a className="open-product" href={ranking.url} target="_blank" rel="noreferrer" aria-label={`Visit ${ranking.name}`}><ArrowUpRight size={17} /></a>
    </article>
  );
}
