import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddTask from "../addTask/AddTask";
import ComplateTask from "../complateTask/ComplateTask";
// import Home from "../home/Home";
import Login from "../login/Login";
import MyTask from "../myTask/MyTask";
import Register from "../register/Register";
import PrivateRoute from "../../route/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <AddTask />
            },
            {
                path: "/addtask",
                element: <AddTask />
            },
            {
                path: "/mytask",
                element: <PrivateRoute><MyTask /></PrivateRoute>
            },
            {
                path: "/complatetask",
                element: <PrivateRoute><ComplateTask /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    },
    {
        path: "/*",
        element: <p className="h-screen flex items-center justify-center text-4xl">Sorry page not found</p>
    }
])