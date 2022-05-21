import React from 'react';
import ReactDom from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from "./components/dropdown/dropdown";

const handleCountrySelect = (countryId) => {
    console.log(countryId);
}

const App = () => {
    return (
        <div>
            <Dropdown handleCountrySelect={handleCountrySelect}/>
            <lin
        </div>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />)
