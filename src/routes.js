import Home from "@/pages/Home";
import TestInfo from "@/pages/TestInfo";
import Attempt from "@/pages/Attempt";

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
    }
];

export default routes;