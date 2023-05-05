import { NavLink } from "react-router-dom";

import logo from "../../image/logo.png";
import styles from "../../css/Footer.module.css";

function MainNavigation() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.container}>
        <ul className={styles.list}>
          <li>
            <img className={styles.img} src={logo} alt="logo" />
          </li>
          <li>
            <NavLink
              to="/terms"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Terms of Use
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCAE7yUz6vNscwPr3ina7_DA"
              target="_blank"
              rel="noreferrer"
            >
              YouTube Channel
            </a>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr className={styles.hr}></hr>
      <div>
        <p>
          Copyright © 2023 Stary <span className={styles.span}>AI</span> by
          Yuguang Dang
        </p>
      </div>
    </footer>
  );
}

export default MainNavigation;
