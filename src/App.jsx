import React from "react";
import {BrowserRouter as Router,Routes, Link} from "react-router-dom";
import './App.css'

/*The BrowserRouter is used as the router for the application. It provides a way to declare the navigation structure.*/
/*The Routes component is used to define the different routes in the application.*/
/*There are several page components imported,
 such as Home, Properties, ErrorPage, ResultPage, SearchPage, SingleProperties, and ContactForm.*/

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
// import Properties from "./components/Properties.jsx";
// import ErrorPage from "./pages/ErrorPage";

// import ContactForm from "./pages/ContactForm.jsx";

import Navbar from './components/Navbar';
import {Route} from 'react-router-dom';
import Signup from "./components/signup";
import Login from "./components/login";
import Product from "./components/Product";



function App() {


    return (
        <>
            <Router>
                <div className={"main"}>
                    <Navbar/>
                    <Routes>

                        {/*Inside the Routes component, each Route is mapped to a specific URL path and associated
                    with a corresponding page component*/}
                        {/*his part of the route defines the URL path that the route will match.*/}
                        {/*<Switch>*/}
                        <Route exact path={'/'} element={<Home/>}  />
                    {/*    /!*<Route exact path={'/rooms'} element={<Room/>} />*!/*/}
                    {/*    /!*<Route  path={'/rooms/:tenure'} element={<SingleProperties/>} />*!/*/}
                    {/*    /!*The :tenure syntax in the path indicates a URL parameter. It means that the part of the URL after /rooms/*/}
                    {/*is a variable called tenure that can take different values.*!/*/}

                    {/*    <Route  path={'/errorPage'} element={<ErrorPage />} />*/}
                        {/*<Route  path={'/searchPage'} element={ <SearchPage />} />*/}
                        <Route  path={'/signup'} element={<Signup />} />
                        <Route  path={'/product'} element={<Product/>} />

                        <Route  path={'/login'} element={<Login />} />

                        {/*</Switch>*/}
                    </Routes>
                </div>

            </Router>
        </>

    )
}

/*The App component is then exported as the default export for use in other parts of the application.*/

export default App
