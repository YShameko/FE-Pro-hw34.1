import React from "react";
import './hw34.style.css';

export default () => {
    return <div>
        <h3> #FE-Pro-HW 34.1. Booking </h3>
        <p>
            З використанням стека: Create React App, React-router, React-final-form, MUI, Axios, Redux, Redux-first-history, Redux-saga, ENV, Eslint, Json-server.<br/>
            Самостійно зробити Booking додаток (можна підглядати з прикладу з уроку).<br/>
                                    <br/>
            Додаток повинен складатися як мінімум із 3х частин: <br/>
                                    <br/>
            1. "Main" сторінка <br/>
            2. "About" <br/>
            3. "Hotels" <br/>
                                    <br/>
            У полі"Destination" встановити список даних від сервера (дані прикріплено у файлі db.json). <br/>
                                    <br/>
            Після заповнення даних форми (можна додати валідацію на обов'язкові поля) та натискання кнопки "Send".  <br/>
            Потрібно надіслати запит на Json-server, за отриманням списку готелів. Дані форми надіслати в запит через payload. <br/>
            І після успішної відповіді, зробити редирект на сторінку hotels. Де вже потрібно відобразити всі готелі. <br/>
        </p>
    </div>
}