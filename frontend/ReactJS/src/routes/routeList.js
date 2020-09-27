import Access from '../view/Access';
import SwipeArea from '../view/SwipeArea';
export const privateRouteList = [
	{
		path: '/',
		component: SwipeArea,
		exact: true,
		title: 'Menu',
	},
];

export const publicRouteList = [
	{
		path: '/',
		component: Access,
		exact: true,
		title: 'Sign In',
	},
	{
		path: '/register',
		component: Access,
		exact: true,
		title: 'Sign Up',
	},
];
