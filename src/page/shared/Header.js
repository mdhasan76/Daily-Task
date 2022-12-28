import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                <Navbar.Link
                    href="/navbars"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/">
                    Add Task
                </Navbar.Link>
                <Navbar.Link href="/">
                    My Task
                </Navbar.Link>
                <Navbar.Link href="/">
                    Complate Task
                </Navbar.Link>
            </Navbar.Collapse>
            
            <div className="flex">
            <Button><Link to="/login">Login</Link></Button>
                <Navbar.Toggle />
            </div>
        </Navbar>
    );
};

export default Header;