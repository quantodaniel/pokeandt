import Logo from "src/components/atoms/Logo";
import HomeSearch from "src/components/organisms/HomeSearch";

const Home = () => {
  return (
    <main className="container h-screen mx-auto flex flex-col items-center">
      <div className="h-2/4 flex justify-center items-center">
        <Logo />
      </div>

      <HomeSearch />
    </main>
  );
};

export default Home;
