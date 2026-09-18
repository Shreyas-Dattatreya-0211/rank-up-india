import { ArrowUpRight } from "lucide-react";
import { formatINR, type Ranking } from "../data/demoRankings";

type TodayRankingProps = { rankings: Ranking[] };

export function TodayRanking({ rankings }: TodayRankingProps) {
  return (
    <aside className="today-panel" id="daily" aria-labelledby="today-heading">
      <div className="panel-heading"><div><span className="live-label"><span className="online-dot" /> LIVE</span><h2 id="today-heading">Today's ranking</h2></div><a href="#rankings">See all <ArrowUpRight size={14} /></a></div>
      <div className="today-list">
        {rankings.map((ranking) => <a className="today-row" href={`#rank-${ranking.rank}`} key={ranking.rank}><span className="today-rank">#{ranking.rank}</span><span className="small-product-mark" style={{ backgroundColor: ranking.accent }}>{ranking.name.slice(0, 1)}</span><span className="today-name">{ranking.name}</span><strong>{formatINR(ranking.value)}</strong></a>)}
      </div>
      <p className="panel-footnote">Rankings reset every 24 hours.</p>
    </aside>
  );
}
