import React from "react";


function NavTabs() {


    return (
        <nav className="navbar">
              <a href="/fitness" className="navbar-brand">
                Fitness
                </a>
                <a 
                href="/nutrition" className="navbar-brand">
                Nutrition
                </a>
                <a 
                href="/signin" className="navbar-brand">
                Sign in
                </a>
                <a 
                href="/signup" className="navbar-brand">
                Sign up
                </a>
    </nav>

    );

}

export default NavTabs;