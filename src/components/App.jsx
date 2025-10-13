import React from "react";
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import About from "../pages/about/About.jsx";
import Hw34 from "../pages/hw34/Hw34.jsx";
import Page404 from '../pages/page404/Page404.jsx';
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main.jsx";
import Hotels from "../pages/hotels/Hotels.jsx";
import './app.style.css';

export default function App() {

    // ---------------------------------------------------------------------------------
    return <div>
        <Header />
        <Routes>
            <Route path='/' element={ <Main />} />

            <Route path='/about' element={ <About /> } />

            <Route path='/hotels' element={ <Hotels /> } />

            <Route path='/hw34' element={ <Hw34 /> } />

            <Route path="*" element={ <Page404 /> } />
        </Routes>
        <Footer />
    </div>
}
