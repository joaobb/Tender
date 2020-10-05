import Access from '../view/Access';
import SwipeArea from '../view/SwipeArea';
import NewRecipe from '../view/Recipes/NewRecipe';

export const privateRouteList = [
	{
		path: '/',
		component: SwipeArea,
		exact: true,
		title: 'Menu',
	},
	{
		path: '/recipes/new',
		component: NewRecipe,
		exact: true,
		title: 'New Recipe',
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
