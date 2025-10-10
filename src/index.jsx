import './style.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App.jsx';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './redux/store';

const rootEl = document.getElementById('main');
const root = ReactDOM.createRoot(rootEl);

root.render(<HashRouter>
    {/* <Provider store={store}> */}
        <App />
    {/* </Provider> */}
</HashRouter>
);

// ============================================================================================================
