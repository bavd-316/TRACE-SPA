import React from "react";
import styles from "./Header.css";

let NavBar = ({ page }) => (
  <div className={styles.label}>
    <p className={page.active && styles.active}>{page.label}</p>
    <hr className={page.active && styles.active} />
  </div>
);

let Header = ({ title, pages }) => {
  return (
    <div className={styles.header}>
      <p className={styles.logo}>
        NU <span>TRACE</span>
      </p>
      {title && <h2 className={styles.title} />}
      <div className={styles.navbar}>
        {pages.map(page => (
          <NavBar page={page} />
        ))}
      </div>
    </div>
  );
};

export default Header;
