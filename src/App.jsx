import React from "react";
import {BrowserRouter as Router,Routes, Link} from "react-router-dom";
import './App.css'



import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";


import Navbar from './components/Navbar';
import {Route} from 'react-router-dom';
import Signup from "./components/signup";
import Login from "./components/login";
import Post from "./components/Post";


function App() {
    return (
        <>
            <Router>
                <div className={"main"}>
                    <Navbar/>
                    <Routes>
                        <Route exact path={'/'} element={<Home/>}  />
                        <Route  path={'/signup'} element={<Signup />} />
                        <Route  path={'/product'} element={<Post/>} />

                        <Route  path={'/login'} element={<Login />} />
                    </Routes>
                </div>

            </Router>
        </>

    )
}


export default App
