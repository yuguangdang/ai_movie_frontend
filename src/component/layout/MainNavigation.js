import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../image/logo.png";
import styles from "../../css/MainNavigation.module.css";

function MainNavigation() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <nav
        className={`${styles.nav} ${isNavActive ? styles.burgerNavActive : ""}`}
      >
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              onClick={toggleNav}
            >
              Create
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/videos"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              onClick={toggleNav}
            >
              Videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/price"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              onClick={toggleNav}
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              onClick={toggleNav}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleNav}>
        &#9776;
      </div>
    </header>
  );
}

export default MainNavigation;
