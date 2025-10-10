import React from "react";
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import { Route, Routes, Link } from "react-router-dom";
import './app.style.css';
import axios from "axios";

export default function App() {
    // componentDidMount() {
    //     axios.get('/db.json')
    //         .then(resp => {
    //             return new Promise(resolve => {
    //                 setTimeout(() => resolve(resp.data), 3000);
    //             });
    //         })
    //         .then(data => {
    //             this.setState({
    //                 planList: data.plan
    //             });
    //         });
    // }

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

            <Route path='/about' element={
                <div>
                    About page
                </div>
                } 
            />

            <Route path='/hotels' element={
                <div>
                    <p>
                        Page with hotels will be here soon
                    </p>
                </div>
                }
            />

            <Route path='/hw34' element={
                <div>
                    <pre>
                        #FE-Pro-HW 34.1. Booking

                        З використанням стека: Create React App, React-router, React-final-form, MUI, Axios, Redux, Redux-first-history, Redux-saga, ENV, Eslint, Json-server.
                        Самостійно зробити Booking додаток (можна підглядати з прикладу з уроку).

                        Додаток повинен складатися як мінімум із 3х частин:

                        1. "Main" сторінка
                        2. "About"
                        3. "Hotels"

                        У полі"Destination" встановити список даних від сервера (дані прикріплено у файлі db.json).

                        Після заповнення даних форми (можна додати валідацію на обов'язкові поля) та натискання кнопки "Send". 
                        Потрібно надіслати запит на Json-server, за отриманням списку готелів. Дані форми надіслати в запит через payload. 
                        І після успішної відповіді, зробити редирект на сторінку hotels. Де вже потрібно відобразити всі готелі.
                    </pre>
                </div>
                }
            />

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
