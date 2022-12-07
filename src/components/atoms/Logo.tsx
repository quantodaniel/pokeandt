import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/logo192.png" alt="PokeAndT" data-testid="logo-image" />
    </Link>
  );
};

export default Logo;
