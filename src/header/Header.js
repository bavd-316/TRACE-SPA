import React from 'react';
import styles from './Header.css';

const NavBar = ({ page }) => {
	if (page.active) {
		return (
			<div className={styles.label}>
				<p className={styles.active}>{page.label}</p>
				<hr className={styles.active} />
			</div>
		);
	} else {
		return (
			<div className={styles.label}>
				<p>{page.label}</p>
				<hr />
			</div>
		);
	}
};

const Header = ({ title, pages }) => (
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

export default Header;
