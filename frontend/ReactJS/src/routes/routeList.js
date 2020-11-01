import Access from '../view/Access';
import SwipeArea from '../view/SwipeArea';
import RecipeForm from '../view/Recipes/RecipeForm';
import Swipe from '../view/SwipeArea/index';

export const privateRouteList = [
	{
		path: '/',
		component: SwipeArea,
		exact: true,
		title: 'Menu',
	},
	{
		path: '/swipe',
		component: Swipe,
		exact: true,
		title: 'Menu',
	},
	{
		path: '/recipes/new',
		component: RecipeForm,
		exact: true,
		title: 'New Recipe',
	},
	{
		path: '/recipes/:recipeID/edit',
		component: RecipeForm,
		exact: true,
		title: 'Edit Recipe',
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
