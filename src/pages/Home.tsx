import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/components/atoms/Button";
import Logo from "src/components/atoms/Logo";
import SearchInput from "src/components/molecules/SearchInput";

const Home = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const onSearch = (item: any) => {
    setSearchValue(item);
  };

  const onSearchFavorite = () => {
    navigate("/favorites/pokemon/");
  };

  const onSearchByLucky = () => {
    navigate("/search/pokemon/");
  };

  const onSearchByText = () => {
    if (!searchValue) onSearchByLucky();
    navigate(`/search/pokemon/${searchValue}`);
  };

  return (
    <main className="container h-screen mx-auto flex flex-col justify-center items-center gap-6">
      <div className="-mt-20 mb-10">
        <Logo />
      </div>

      <div className="w-2/4">
        <SearchInput onSearch={onSearch} />
      </div>

      <div className="flex justify-between w-96">
        <Button onClick={onSearchByText}>Search</Button>
        <Button onClick={onSearchByLucky}>Feeling Lucky</Button>
        <Button onClick={onSearchFavorite}>Favorites</Button>
      </div>
    </main>
  );
};

export default Home;
