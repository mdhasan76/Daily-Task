import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddTask from "../addTask/AddTask";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path:"/addtask",
                element: <AddTask/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    }
])