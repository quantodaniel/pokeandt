import { ReactSearchAutocomplete } from "react-search-autocomplete";
import SearchResultRow from "src/components/molecules/SearchResultRow";
import { PokemonItem } from "src/types/pokemon";

type SearchInputProps = {
  items: PokemonItem[];
  onSearch?: (value: string) => void;
  onSelect?: (pokemon: PokemonItem) => void;
};

const SearchInput = (props: SearchInputProps) => {
  const { onSelect, onSearch, items } = props;

  return (
    <div className="search-input">
      <ReactSearchAutocomplete
        items={items}
        formatResult={SearchResultRow}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="Search"
        showNoResults={false}
        showIcon={false}
        styling={{
          hoverBackgroundColor: "transparent",
          boxShadow: "none",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default SearchInput;
