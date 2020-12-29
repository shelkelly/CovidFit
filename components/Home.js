import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Fitness from "./pages/Fitness";
import About from "./pages/Nutrition";
import Blog from "./pages/Signup";
import Contact from "./pages/Signin";

class Home extends Component {
    state = {
      currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
      };

      renderPage = () => {
        if (this.state.currentPage === "Fitness") {
          return <Fitness />;
        } else if (this.state.currentPage === "Nutrition") {
          return <Nutrition />;
        } else if (this.state.currentPage === "Signup") {
          return <Singup />;
        }  else if (this.state.currentPage === "Sigin") {
            return <Sigin />;
        } else {
          return <Home />;
        }
      };
};

export default Home;