import React from "react";


function NavTabs() {
    return (
        <ul className="nav nav-tab">
          <li class="nav-item">
                <a 
                href="#fitness"
                onClick={() => PaymentResponse.handlePageChange("Fitness")}
                className = {PaymentResponse.currentPage === "Fitness" ? "nav-link active": "nav-link"}
                >
                Fitness
                </a>
          </li>
          <li class="nav-item">
                <a 
                href="#nutrition"
                onClick={() => PaymentResponse.handlePageChange("Nutrition")}
                className = {PaymentResponse.currentPage === "Nutrition" ? "nav-link active": "nav-link"}
                >
                Nutrition
                </a>
          </li> 
          <li class="nav-item">
                <a 
                href="#signin"
                onClick={() => PaymentResponse.handlePageChange("Signin")}
                className = {PaymentResponse.currentPage === "Signin" ? "nav-link active": "nav-link"}
                >
                Sign in
                </a>
          </li>
          <li class="nav-item">
                <a 
                href="#signup"
                onClick={() => PaymentResponse.handlePageChange("Signup")}
                className = {PaymentResponse.currentPage === "Signup" ? "nav-link active": "nav-link"}
                >
                Sign up
                </a>
          </li>       
    </ul>

    );

}

export default NavTabs;