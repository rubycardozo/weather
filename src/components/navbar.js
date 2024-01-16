import './styles.css';
import React, { useEffect, useState } from "react";

function Navbar(){
    return (
    <div>
        <nav className='navbar'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
            </ul>

        </nav>
    </div>
        )
}

export default Navbar