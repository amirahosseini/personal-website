import  React  from "react";
import reactDom from "react-dom";
import Navbar from "./Nav";
import './index.css'
import {useState} from 'react';
import Home from "./Home";
import{ BrowserRouter as Router ,Route , Switch } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { facoffe } from "@fortawesome/free-solid-svg-icons";
import Abouts from "./Abouts"
import Skills from "./skills";
const App = () => {
    return (
        <Router>
            <div className="bg-gray-100 h-screen">
                <Navbar />
                <Switch> 
                    <Route exact path="/"> 
                        <Home/>
                    </Route>
                    <Route  path="/Abouts">
                        <Abouts/>
                    </Route> 
                    <Route>
                        <Skills/>
                    </Route>
                 </Switch> 
            </div>
        </Router>
    );
}
reactDom.render(
    <App/>,
    document.querySelector('#root')
);
