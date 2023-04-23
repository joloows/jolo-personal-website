import styles from "src/assets/styles/ToggleThemeSlider.module.css";

const setDark = () => {
  localStorage.setItem("theme", "dark");

  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

// messy code because of slider. setLight() and setDark() switched.
const toggleTheme = (e) => {
  if (e.target.checked) {
    setLight();
  } else {
    setDark();
  }
};

function ToggleThemeSlider() {
  return (
    <div className={styles.toggle_slider}>
      <label className={styles.slider_label}>
        <input
          className={styles.slider_input}
          type="checkbox"
          onChange={toggleTheme}
          defaultChecked={!defaultDark}
        />
        <span
          className={styles.slider_span}
          credit="Inspired by the design from Tim Silva"
          link="https://dribbble.com/shots/14199649-Dark-Light-Mode-Toggle-Switch-Pattern-A11y"
        ></span>
      </label>
    </div>
  );
}

export default ToggleThemeSlider;
