import styles from "src/assets/styles/ToggleThemeSlider.module.css";

function ToggleThemeSlider() {
  return (
    <div className={styles.toggle_slider}>
      <label className={styles.slider_label}>
        <input className={styles.slider_input} type="checkbox" />
        <span className={styles.slider_span}></span>
      </label>
      {/* <a href="https://dribbble.com/shots/14199649-Dark-Light-Mode-Toggle-Switch-Pattern-A11y">
        Inspired by the design from Tim Silva
      </a> */}
    </div>
  );
}

export default ToggleThemeSlider;
