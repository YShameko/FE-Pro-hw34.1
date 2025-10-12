import React from "react";
import { Link } from "react-router-dom";
import './page404.style.css';

export default () => {
    return <div>
        Oops, you did it again... :( <br/>
        You have entered a wrong path, I don't have any page associated with it. <br/>
        Shall we try to return to the main page? <br/>
        <Link to='/'> main page </Link>
    </div>

}