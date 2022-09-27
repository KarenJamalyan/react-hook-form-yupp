import React from 'react';
import * as s from './style';
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {


    return (
        <s.Nav>
            <Link to="/signin" style={{ textDecoration: 'none', marginRight: '20px' }}>
                <s.LinkItem> Sign in </s.LinkItem>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none', marginRight: '20px' }}>
                <s.LinkItem>Sing up</s.LinkItem>
            </Link>
        </s.Nav>
    )
}

export default Navbar;