import Login from '../component/Login/Login';
import Register from "../component/Register/Register";
import Dashboard from "../component/Dashboard/Dashboard";

const authProtectedRoutes = [
    { path: "/dashboard", component: Dashboard },
]

const publicRoutes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
]

export { authProtectedRoutes, publicRoutes };