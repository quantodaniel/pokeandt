import usePokemonStore from "src/store/pokemon";
import Logo from "../atoms/Logo";
import SearchInputByType from "../molecules/SearchInputByType";
import SidebarCard from "../molecules/SidebarCard";

const Sidebar = () => {
  const favorites = usePokemonStore((state) => state.favorites);

  return (
    <aside className="p-4 bg-slate-100 drop-shadow-lg h-screen w-full gap-6 flex flex-col">
      <div className="flex justify-center">
        <div className="w-14">
          <Logo />
        </div>
      </div>

      <SearchInputByType />

      <div className="flex flex-1 flex-col gap-2 overflow-auto">
        {favorites?.map((pokemon) => (
          <SidebarCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
