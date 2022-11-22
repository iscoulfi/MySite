import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="aboutme"> About me </NavLink>
      <NavLink to="skills"> Skills </NavLink>
      <NavLink to="contacts"> Contacts </NavLink>
    </nav>
  );
};

export default Menu;
