import React from "react";
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import About from "./about/About.jsx";
import Hw34 from "./hw34/hw34.jsx";
import { Route, Routes, Link } from "react-router-dom";
import './app.style.css';

export default function App() {

    // ---------------------------------------------------------------------------------
    return <div>
        <Header />
        <Routes>
            <Route path='/' element={
                <div>
                    Main page
                </div>
                }
            />

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

            <Route path="*" element={
                    <div>
                        Oops, you did it again... :( <br/>
                        You have entered a wrong path, I don't have any page associated with it. <br/>
                        Shall we try to return to the main page? <br/>
                        <Link to='/'> main page </Link>
                    </div>
                } 
            />
        </Routes>
        <Footer />
    </div>
}
