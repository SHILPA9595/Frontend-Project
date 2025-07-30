import React, { useState } from "react";
import "./background.css";

function Background() {
    const [ lightMode , setlightMode ] = useState(false);
   const toggleTheme = () => {
    setlightMode(!lightMode);
   };
   return(
    <div className= {lightMode ? 'app dark': 'app light'}>
        <button onClick={toggleTheme}>
            {lightMode ? '🌙':'☀️'}
        </button>
    </div>
   );
}
export default Background;