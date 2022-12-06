import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Home</h1>
        <Link to="/pokemon/bulbasaur">go to details</Link>
      </header>
    </div>
  );
};

export default Home;
