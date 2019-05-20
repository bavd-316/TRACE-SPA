import React from 'react';
import styles from './Header.css';

const NavBar = ({ page, active, onClick }) => {
	if (active) {
		return (
			<div className={styles.label} onClick={onClick}>
				<p className={styles.active}>{page.label}</p>
				<hr className={styles.active} />
			</div>
		);
	} else {
		return (
			<div className={styles.label} onClick={onClick}>
				<p>{page.label}</p>
				<hr />
			</div>
		);
	}
};

const Header = ({ pages, setActivePage, activePageIndex }) => (
	<div className={styles.header}>
		<p className={styles.logo}>
			NU <span>TRACE</span>
		</p>
		<div className={styles.navbar}>
			{pages.map((page, index) => (
				<NavBar
					key={`navbar-${page.label}`}
					page={page}
					active={index == activePageIndex}
					onClick={e => setActivePage(index)}
				/>
			))}
		</div>
	</div>
);

export default Header;
