import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="ms-auto">
                        <img
                            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572-768x591.png"
                            alt=""
                            className="logo"
                        />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse rightConner" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>
                                    Home
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to={"/signup"}>
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/product"}>
                                    add blog
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
