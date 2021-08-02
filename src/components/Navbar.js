import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () =>
    <div>
        <NavLink to="/" exact>
            Home
        </NavLink>
        <NavLink to="/login" exact>
            Login/Signup
        </NavLink>
        <NavLink to="/quizzes/new" exact>
            New Quiz
        </NavLink>
    </div>;

export default Navbar;