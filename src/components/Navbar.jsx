import styles from "src/assets/styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as GitHubLogo } from "src/assets/github.svg";
import ToggleThemeSlider from "./ToggleThemeSlider";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ToggleThemeSlider />
      <a
        className={styles.github}
        href="https://github.com/joloows"
        target="_blank"
      >
        <GitHubLogo />
      </a>
      <div className={styles.link_margin}>
        <NavLink to="/" className={`${styles.link} ${styles.link_padding}`}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`${styles.link} ${styles.link_padding}`}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={`${styles.link} ${styles.link_padding}`}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
