import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import useMedia from '../../Hooks/useMedia';

// SVG's
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';

import styles from '../../styles/modules/User/UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);

  // Will hide the mobile menu when the user gets redirected to the selected page
  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobile_btn} ${
            mobileMenu && styles.mobile_btn_active
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
          type="button"
        />
      )}

      <nav
        className={`${mobile ? styles.nav_mobile : styles.nav} ${
          mobileMenu && styles.nav_mobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/post">
          <AddFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button type="button" onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
