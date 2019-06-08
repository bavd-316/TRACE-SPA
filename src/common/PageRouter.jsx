import React from 'react';
import { Route, Switch } from 'react-router-dom';

const PageRouter = ({ routes, renderProps = {} }) => (
	<Switch>
		{routes.map((route, index) => {
			if ('component' in route) {
				const { component: Component, routes, ...rest } = route;
				return (
					<Route
						key={index}
						{...rest}
						render={props => (
							<Component {...props} routes={routes || []} />
						)}
					/>
				);
			} else {
				return (
					<Route
						key={index}
						{...route}
						render={props =>
							route.render({ props, ...renderProps })
						}
					/>
				);
			}
		})}
	</Switch>
);

export default PageRouter;
