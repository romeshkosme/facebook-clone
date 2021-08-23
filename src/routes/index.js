import Login from '../component/Login/Login';
import Register from "../component/Register/Register";
import Dashboard from "../component/Dashboard/Dashboard";
import VerifyUser from '../component/VerifyUser/VerifyUser';

const authProtectedRoutes = [
    { path: "/dashboard", component: Dashboard },
]

const publicRoutes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/verify-user", component: VerifyUser },
]

export { authProtectedRoutes, publicRoutes };