import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Menu = ({ t }) => {
  const [menuActive, setMenuActive] = useState(false);

  const onButtonClick = () => setMenuActive(menuActive ? false : 'isActive');
  return (
    <nav>
      <div className={`menu ${menuActive}`}>
        <NavLink to="/" onClick={onButtonClick}>
          {t('home')}
        </NavLink>
        <NavLink to="aboutme" onClick={onButtonClick}>
          {t('aboutme')}
        </NavLink>
        <NavLink to="skills" onClick={onButtonClick}>
          {t('skills')}
        </NavLink>
        <NavLink to="contacts" onClick={onButtonClick}>
          {t('contacts')}
        </NavLink>
      </div>
      <AiOutlineMenu className="icon" onClick={onButtonClick} size={30} />
    </nav>
  );
};

export default Menu;
