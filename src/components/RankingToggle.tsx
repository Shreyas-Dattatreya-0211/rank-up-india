import { Clock3, Flame } from "lucide-react";

type RankingToggleProps = {
  mode: "allTime" | "today";
  onChange: (mode: "allTime" | "today") => void;
};

export function RankingToggle({ mode, onChange }: RankingToggleProps) {
  return (
    <div className="ranking-toggle" role="group" aria-label="Ranking period">
      <button className={mode === "allTime" ? "is-active" : ""} type="button" aria-pressed={mode === "allTime"} onClick={() => onChange("allTime")}>
        <Clock3 size={15} /> All-time
      </button>
      <button className={mode === "today" ? "is-active" : ""} type="button" aria-pressed={mode === "today"} onClick={() => onChange("today")}>
        <Flame size={15} /> Today
      </button>
    </div>
  );
}
