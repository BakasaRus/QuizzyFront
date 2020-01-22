import Home from "@/pages/Home";
import Attempt from "@/pages/Attempt";
import Registration from "@/pages/Registration";
import SignIn from "@/pages/SignIn";
import TestAdd from "@/pages/TestAdd";
import TestStats from "@/pages/TestStats";
import Tests from "@/pages/Tests";
import TestInfo from "@/pages/TestInfo";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/tests',
        name: 'tests',
        component: Tests
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
        name: 'attempt',
        component: Attempt
    },
    {
        path: '/test/:id/info',
        name: 'protocol',
        component: TestInfo
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