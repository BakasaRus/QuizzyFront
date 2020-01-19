import Home from "@/pages/Home";
import TestInfo from "@/pages/TestInfo";
import Attempt from "@/pages/Attempt";
import Registration from "@/pages/Registration";
import SignIn from "@/pages/SignIn";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/test/:id',
        name: 'test-info',
        component: TestInfo
    },
    {
        path: '/attempt/:id',
        name: 'attempt',
        component: Attempt
    },
    {
        path: '/register',
        name: 'register',
        component: Registration
    },
    {
        path: '/signin',
        name: 'sign-in',
        component: SignIn
    }
];

export default routes;