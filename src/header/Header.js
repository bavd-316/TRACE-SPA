import React from 'react';
import styles from './Header.css';
import { NavLink } from 'react-router-dom';

const NavBar = ({ page }) => (
	<React.Fragment>
		<NavLink
			className={styles.label}
			activeClassName={styles.active}
			exact={page.path === '/'}
			to={page.path}
		>
			<p>{page.label}</p>
		</NavLink>
	</React.Fragment>
);

const Header = ({ urlLocation, pages }) => (
	<div className={styles.header}>
		<p className={styles.logo}>
			NU <span>TRACE</span>
		</p>
		<div className={styles.navbar}>
			{pages.map(page => (
				<NavBar key={`navbar-${page.label}`} page={page} />
			))}
		</div>
	</div>
);

export default Header;
