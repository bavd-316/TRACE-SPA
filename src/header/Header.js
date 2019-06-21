import React from 'react';
import styles from './Header.css';
import { generatePath, Link, matchPath, Route } from 'react-router-dom';

const NavItem = ({ location, match, path, relPath, label, ...props }) => {
	const grabFirstIfArray = p => (Array.isArray(p) ? p[0] || null : p || null);
	let linkPath = grabFirstIfArray(path);
	let isActive = false;
	if (!linkPath) {
		linkPath =
			path ||
			generatePath(grabFirstIfArray(relPath) || '/', match.params);
		isActive = matchPath(location.pathname, { exact: true, path: relPath });
	} else {
		isActive =
			location.pathname === path ||
			(Array.isArray(path) && path.includes(location.pathname));
	}
	return (
		<React.Fragment>
			<Link className={styles.label} to={linkPath}>
				<React.Fragment>
					<p className={isActive ? 'active' : ''}>{label}</p>
				</React.Fragment>
			</Link>
		</React.Fragment>
	);
};

const NavMultiItem = ({ page }) => {
	if (!(page.routes || []).length) {
		if (page.global) {
			return (
				<Route
					render={props => (
						<NavItem
							{...props}
							label={page.label}
							path={page.path}
						/>
					)}
				/>
			);
		} else {
			return (
				<Route
					path={page.path}
					render={props => (
						<NavItem
							{...props}
							relPath={page.path}
							label={page.label}
						/>
					)}
				/>
			);
		}
	} else {
		return (
			<Route
				path={page.path}
				render={props =>
					page.routes.map(route => (
						<NavItem
							{...props}
							label={route.label}
							relPath={route.path}
						/>
					))
				}
			/>
		);
	}
};

const NavBar = ({ pages }) => (
	<div className={styles.navbar}>
		{pages.map((page, index) => (
			<NavMultiItem key={`${index}`} page={page} />
		))}
	</div>
);

const Header = ({ pages }) => (
	<div className={styles.header}>
		<p className={styles.logo}>
			NU <span>TRACE</span>
		</p>
		<NavBar pages={pages} />
	</div>
);

export default Header;
