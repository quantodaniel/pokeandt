import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

type SearchInputProps = {
  onSearch?: (item: any) => void;
};

const SearchInput = (props: SearchInputProps) => {
  const { onSearch } = props;

  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: "Bulbasaur",
    },
    {
      id: 2,
      name: "venusaur",
    },
  ];

  const onSelect = (item) => {
    navigate(`/search/pokemon/${item.name.toLowerCase()}`);
  };

  const formatResult = (item) => {
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`;

    return (
      <div className="flex items-center cursor-pointer">
        <div>
          <img src={src} alt={item.name} />
        </div>
        <div>
          <h1 className="text-xl capitalize">{item.name}</h1>
        </div>
      </div>
    );
  };

  return (
    <ReactSearchAutocomplete
      items={items}
      formatResult={formatResult}
      fuseOptions={{ keys: ["name"], shouldSort: true }}
      onSelect={onSelect}
      onSearch={onSearch}
      placeholder="Search"
      showNoResults={false}
      showIcon={false}
      styling={{
        hoverBackgroundColor: "#f5f5f5",
        boxShadow: "none",
      }}
    />
  );
};

export default SearchInput;
