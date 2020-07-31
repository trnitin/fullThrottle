import React from 'react';
import { Navbar } from 'react-bootstrap'
import Classes from './navbar.module.css';

const navbar = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" className={Classes.navbar} sticky="top">
            <Navbar.Brand style={{ color: 'white' }}>FullThrottle</Navbar.Brand>
        </Navbar>
    )
}

export default navbar
