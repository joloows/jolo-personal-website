import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactComponent as GitHubLogo } from "src/assets/github.svg";
import { ReactComponent as DropdownIcon } from "src/assets/dropdown.svg";
import styles from "src/assets/styles/Navbar.module.css";
import ToggleThemeSlider from "./ToggleThemeSlider";

const menuList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

function MenuItems({ menus }) {
  return menus.map((menu, key) => {
    let style = `${styles.link} ${styles.link_padding} ${
      menu.title === "About" ? styles.wrapper_1 : styles.wrapper_2
    }`;
    return (
      <NavLink key={key} to={menu.url} className={style}>
        {menu.title}
      </NavLink>
    );
  });
}

function DropdownMenuItems({ menus }) {
  return menus.map((menu, key) => {
    let style = styles.dropdown_menu_item;
    return (
      <>
        <motion.li key={key} className={style}>
          <NavLink to={menu.url} className={styles.link}>
            {menu.title}
          </NavLink>
        </motion.li>
      </>
    );
  });
}

const arrows = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  invisible: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ToggleThemeSlider />
      <a
        className={styles.github}
        href="https://github.com/joloows"
        target="_blank"
      >
        <GitHubLogo className={styles.github_logo} />
      </a>

      {/* default for desktops */}
      <div className={`${styles.link_margin} ${styles.default}`}>
        <MenuItems menus={menuList} />
      </div>

      {/* dropdown menu for phones and tablets */}
      <motion.div
        className={styles.dropdown_menu_trigger}
        initial={"closed"}
        onClick={() => {
          setOpen(!open);
        }}
        animate={open ? "open" : "closed"}
        variants={{
          open: { rotate: 0 },
          closed: { rotate: 180 },
        }}
        transition={{ duration: 0.2 }}
        // style={{  }}
      >
        <DropdownIcon className={styles.dropdown_menu_trigger_icon} />
      </motion.div>

      <motion.div
        initial={false}
        animate={open ? "visible" : "invisible"}
        className={styles.active}
      >
        <motion.div
          variants={arrows}
          className={styles.dropdown_menu_arrow}
        ></motion.div>
        <motion.div
          variants={arrows}
          className={styles.dropdown_menu_arrow_border}
        ></motion.div>
      </motion.div>

      <motion.div
        initial={false}
        animate={open ? "active" : "inactive"}
        variants={{
          active: {
            clipPath: "inset(0 0 0 0 round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
          inactive: {
            clipPath: "inset(0 0 100% 0 round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className={styles.dropdown_menu}
      >
        <motion.ul className={styles.list}>
          <DropdownMenuItems menus={menuList} />
        </motion.ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
