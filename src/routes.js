import Home from "@/pages/Home";
import TestInfo from "@/pages/TestInfo";
import Attempt from "@/pages/Attempt";
import Registration from "@/pages/Registration";

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
    }
];

export default routes;