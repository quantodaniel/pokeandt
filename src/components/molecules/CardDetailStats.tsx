import { PokemonStat } from "pokenode-ts";

type CardDetailStatsProps = {
  stats: PokemonStat[];
};

const CardDetailStats = (props: CardDetailStatsProps) => {
  const { stats } = props;

  return (
    <div className="flex flex-col shadow rounded p-4 gap-2 from-slate-50 to-slate-100 bg-gradient-to-br">
      {stats.map((stat) => {
        return (
          <div key={stat.stat.name} className="flex items-center gap-2">
            <span className="w-40 text-sm text-end">{stat.stat.name}</span>
            <div className="flex flex-1">
              <span className="w-10 text-center bg-gray-100 text-sm">
                {stat.base_stat}
              </span>
              <div className="border h-4 flex-1 flex">
                <div
                  className="bg-green-400 flex"
                  style={{ width: `${(stat.base_stat / 250) * 100}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardDetailStats;
