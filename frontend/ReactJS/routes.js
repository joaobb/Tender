import {
    Login
} from './src/view'

const routes = [
    {
        path: "/",
        name: "Tender",
        icon: "",
        component: "",
    },
    {
        path: "/login",
        name: "Entrar",
        icon: "",
        component: Login,
    },
    {
        path: "/register",
        name: "Cadastro",
        icon: "",
        component: "",
    },
    {
        path: "/account",
        name: "Perfil",
        icon: "",
        component: "",
        sidebar: true,
    },
    {
        path: "/dashboard",
        name: "Tender",
        icon: "",
        component: "",
        sidebar: true,
    },
    {
        path: "/about",
        name: "Sobre o Tender",
        icon: "",
        component: "",
        sidebar: true,
    },
    {
        path: "/about",
        name: "Sobre",
        icon: "",
        component: "",
        sidebar: true,
    },
    {
        path: "/meal",
        name: "Prato",
        icon: "",
        component: "",
        sidebar: true,
    },
    {
        path: "/meal/:id",
        name: "Prato",
        icon: "",
        component: "",
        sidebar: true,
    },
    {
        path: "/meal/edit/:id",
        name: "Editar prato",
        icon: "",
        component: "",
        sidebar: true,
        adminOnly: true
    },
    {
        path: "/meal/new",
        name: "Novo prato",
        icon: "",
        component: "",
        sidebar: true,
        adminOnly: true
    },
]