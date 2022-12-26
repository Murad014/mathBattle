
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Router, Route} from "react-router-dom";

import '../dist/index.css'
import '../dist/newgame.css'

import Battle from "./components/Battle";
import NewGame from './components/NewGame';


class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/battle' element={<Battle />} />
                    <Route path='*' element={<NewGame />} />
                </Routes>
            </BrowserRouter>
        );
    }
}


let rootElement = document.getElementById("myDiv")
let root = ReactDOM.createRoot(rootElement);

root.render(<App />);