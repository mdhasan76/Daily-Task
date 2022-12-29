import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../route/AuthProvider';
import toast from 'react-hot-toast';
import logo from "../../assets/task.png"

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    const handlelogout = () => {
        logOut()
            .then(() => toast.success("Log out sucessful"))
            .catch(err => console.log(err))
    }
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Daily Task
                </span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/addtask"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    Add Task
                </NavLink>
                <NavLink
                    to="/mytask"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    My Task
                </NavLink>
                <NavLink
                    to="/complatetask"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    Complate Task
                </NavLink>
            </Navbar.Collapse>

            <div className="flex">
                {
                    user ? <Button onClick={handlelogout}>Logout</Button> : <Button><Link to="/login">Login</Link></Button>
                }
                <Navbar.Toggle />
            </div>
        </Navbar>
    );
};

export default Header;