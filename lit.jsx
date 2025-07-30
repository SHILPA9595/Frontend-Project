import React, { useState } from "react";
import './lit.css';

function Lit() {

    const [darkMode , setDarkMode ] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return(
        <div className={darkMode ? 'app dark' : 'app light'}>
            <h1>{darkMode ? 'Dark Mode': 'Light Mode'}</h1>
            <button onClick={toggleTheme}>
                Toggle to {darkMode ? 'Light': 'Dark'} Mode
            </button>
        </div>
    );
}

export default Lit;