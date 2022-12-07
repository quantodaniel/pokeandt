import { NavLink } from "react-router-dom";
import useSearch from "src/hooks/useSearch";
import usePokemonStore from "src/store/pokemon";
import Logo from "../atoms/Logo";
import SearchInput from "../molecules/SearchInput";

const Sidebar = () => {
  const pokemons = usePokemonStore((state) => state.pokemons);
  const { onSearch, onSelect } = useSearch(pokemons);

  return (
    <aside className="p-4 bg-slate-100 drop-shadow-lg h-screen w-full gap-6 flex flex-col">
      <div className="flex justify-center">
        <div className="w-14">
          <Logo />
        </div>
      </div>

      <div>
        <div className="flex justify-around">
          <NavLink to="/search/bulbasaur">Pokemons</NavLink>
          <NavLink to="/search/bulbasaur">Favorites</NavLink>
        </div>

        <SearchInput onSearch={onSearch} onSelect={onSelect} items={pokemons} />
      </div>

      <ul>
        <li>
          <NavLink to="/search/bulbasaur">bulbasaur</NavLink>
        </li>
        <li>
          <NavLink to="/search/venusaur">venusaur</NavLink>
        </li>
      </ul>

      <h1>{pokemons.length}</h1>
    </aside>
  );
};

export default Sidebar;
