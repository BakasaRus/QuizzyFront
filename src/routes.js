import Home from "@/pages/Home";
import TestInfo from "@/pages/TestInfo";

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
    }
];

export default routes;