import React from "react";
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import About from "./about/About.jsx";
import Hw34 from "./hw34/hw34.jsx";
import Page404 from '../pages/page404/Page404.jsx';
import { Route, Routes } from "react-router-dom";
import './app.style.css';
import Main from "../pages/main/Main.jsx";

export default function App() {

    // ---------------------------------------------------------------------------------
    return <div>
        <Header />
        <Routes>
            <Route path='/' element={ <Main />} />

            <Route path='/about' element={ <About /> } />

            <Route path='/hotels' element={
                <div>
                    <p>
                        Page with hotels will be here soon
                    </p>
                </div>
                }
            />

            <Route path='/hw34' element={ <Hw34 /> } />

            <Route path="*" element={ <Page404 /> } />
        </Routes>
        <Footer />
    </div>
}
