import React from "react"
import Main from "./components/main";
import Navbar from "./components/navbar";
import './reactFacts.css'

function ReactFacts(){

    const [darkMode, setDarkMode]= React.useState(false)

    function toggleDarkMode(){

        setDarkMode(prevMode => !prevMode);
    }

    return (
        <div className="container">
            <Navbar 
                darkmode={darkMode}
                changeMode= {toggleDarkMode}
            />

            <Main 
                darkmode={darkMode}
            />
        </div>
    );
}

export default ReactFacts;