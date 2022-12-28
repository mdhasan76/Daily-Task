import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
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
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    Add Task
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    My Task
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    Complate Task
                </NavLink>
            </Navbar.Collapse>

            <div className="flex">
                <Button><Link to="/login">Login</Link></Button>
                <Navbar.Toggle />
            </div>
        </Navbar>
    );
};

export default Header;