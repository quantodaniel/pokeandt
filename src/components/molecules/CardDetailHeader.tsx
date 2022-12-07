import { Pokemon } from "pokenode-ts";
import { extractIdFromUrl } from "src/utils";

type CardDetailHeaderProps = {
  details: Pokemon;
};

const CardDetailHeader = (props: CardDetailHeaderProps) => {
  const { details } = props;

  return (
    <div className="flex flex-col p-4 gap-2 col-span-5">
      <p className="text-3xl text-gray-400 font-bold">
        #{extractIdFromUrl(details?.species?.url)}
      </p>
      <p className="text-5xl font-bold -mt-4">{details.name}</p>

      <p>{details.types?.map((data) => data.type.name).join(", ")}</p>
      <p>{details.abilities?.map((data) => data.ability.name).join(", ")}</p>
    </div>
  );
};

export default CardDetailHeader;
