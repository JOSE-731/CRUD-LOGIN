import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () =>{
    return(
        <div className="navbar navbar-dark bg-danger">
            <Link className = "navbar-brand" to="/">CRUD</Link>
        </div>
    )
}

export default Navbar;