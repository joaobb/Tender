import * as pages from '../pages';

export const privateRouteList = [
  {
    path: '/',
    component: pages.Swipe,
    exact: true,
    title: 'Menu',
  },
  {
    path: '/home',
    component: pages.Home,
    exact: true,
    title: 'Home',
  },
  {
    path: '/cookbook',
    component: pages.Recipes,
    exact: true,
    title: 'My CookBook',
  },
  {
    path: '/cookbook/:id',
    component: pages.Recipes,
    exact: true,
    title: 'My CookBook',
  },
  {
    path: '/cookbook/:id/edit',
    component: pages.Recipes,
    exact: true,
    title: 'Edit Recipe',
  },
];

export const publicRouteList = [
  {
    path: '/login',
    component: pages.Auth,
    exact: true,
    title: 'Sign In',
  },
  {
    path: '/register',
    component: pages.Auth,
    exact: true,
    title: 'Sign Up',
  },
];
