import React, { useEffect, useState, useCallback } from "react";
import './app.style.css';
import axios from "axios";

export default function App() {
    componentDidMount() {
        axios.get('/db.json')
            .then(resp => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(resp.data), 3000);
                });
            })
            .then(data => {
                this.setState({
                    planList: data.plan
                });
            });
    }

    // ---------------------------------------------------------------------------------
    return <div className="block">

    </div>

}
