import usePokemonStore from "src/store/pokemon";
import { PokemonItem } from "src/types/pokemon";
import Button from "src/components/atoms/Button";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

type ButtonFavoriteProps = {
  id: PokemonItem["id"];
  isFavorite?: PokemonItem["isFavorite"];
  icon?: React.ReactNode;
};

const ButtonFavorite = (props: ButtonFavoriteProps) => {
  const { id, isFavorite, icon } = props;

  const toggleFavoriteById = usePokemonStore(
    (state) => state.toggleFavoriteById
  );

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleFavoriteById(id);
  };

  if (icon) {
    return (
      <button onClick={toggleFavorite}>
        {isFavorite ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    );
  }

  return (
    <Button onClick={toggleFavorite}>
      {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </Button>
  );
};

export default ButtonFavorite;
