
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Router, Route} from "react-router-dom";

import '../dist/index.css'
import Player from "./components/Player";
import Battle from "./components/Battle";
import {Fragment, useState} from "react";


class App extends React.Component{

    render(){

        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/battle' element={<Battle />} />

                </Routes>
            </BrowserRouter>
        );
    }

}


let rootElement = document.getElementById("myDiv")
let root = ReactDOM.createRoot(rootElement);

root.render(<App />);