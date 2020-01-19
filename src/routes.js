import Home from "@/pages/Home";
import TestInfo from "@/pages/TestInfo";
import Attempt from "@/pages/Attempt";
import Registration from "@/pages/Registration";
import SignIn from "@/pages/SignIn";
import TestAdd from "@/pages/TestAdd";
import TestStats from "@/pages/TestStats";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/test/new',
        name: 'test-add',
        component: TestAdd
    },
    {
        path: '/test/:id/stats',
        name: 'test-stats',
        component: TestStats
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