import { NavLink } from "react-router-dom";
import Logo from "../atoms/Logo";
import SearchInput from "../molecules/SearchInput";

const Sidebar = () => {
  return (
    <aside className="p-4 bg-slate-100 drop-shadow-lg h-screen w-full gap-6 flex flex-col">
      <div className="flex justify-center">
        <div className="w-14">
          <Logo />
        </div>
      </div>

      <div>
        <div className="flex justify-around">
          <NavLink to="/pokemon/bulbasaur">Pokemons</NavLink>
          <NavLink to="/pokemon/bulbasaur">Favorites</NavLink>
        </div>

        <SearchInput />
      </div>

      <ul>
        <li>
          <NavLink to="/pokemon/bulbasaur">bulbasaur</NavLink>
        </li>
        <li>
          <NavLink to="/pokemon/venusaur">venusaur</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
