import React from 'react';
import Landing from './Pages/Landing/Landing';
import Refresh from './Pages/Refresh/Refresh';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Intro from "./Pages/Intro/Intro";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<Intro/>}/>
                    <Route path="/landingPage"  element={<Landing/>}/>
                    <Route path="/refresh"  element={<Refresh/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
