import { NavLink, Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/meals">Meals</NavLink>
      </nav>
    </>
  );
};

export default HeaderComponent;
