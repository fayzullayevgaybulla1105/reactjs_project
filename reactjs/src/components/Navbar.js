import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
    return (
        <header>
            <nav>
                <a href="#">Logo</a>
                <ul>
                        <li> <NavLink exact to="/sign-in">SignIn</NavLink></li>
                        <li> <NavLink activeClassName='hello' to="/sign-up">SignUp</NavLink></li>
                        {/* <li> <NavLink activeStyle={{color: 'red', background: 'blue', padding: '10px 5px'}} to="/sign-up">SignUp</NavLink></li> */}
                </ul>
            </nav>
        </header>
    )
}

// <Link to=""> bu <a href="#"> -> o`rniga ishlatilyapti. 
// <NavLInk to=""/> link bosilganda maxsus 'active' degan classni qo`shib beradi.
// /sign-in/1222 -> yozilganda acive clasini qo`shilgan bo`ladi. Ushbu classni qo`shmaslik uchun <NavLink exact  /> yozish lozim
// <NavLink activeClassName='hello' /> -> o`zimiz class qo`shishimiz mumkin.
// <NavLink activeStyle={{color: 'red'}} /> -> css stellarini ham berishimiz mumkin. active bo`lgan holatda albatta. 