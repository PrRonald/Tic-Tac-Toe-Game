import React from "react";
import { infoContext } from "../App";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Theme(){

    const {theme, setTheme} = React.useContext(infoContext);

    function onClicked(){
        const root = document.documentElement;
        const backgraundColor = theme ? 'whithe': 'rgb(75, 91, 91)'; 
        root.style.setProperty('--main-color', backgraundColor);
        setTheme(!theme);
    }

    return(
        <button className="button-themes" onClick={onClicked}>
            { theme ? <MdDarkMode />: <CiLight /> }
            </button>
    );
}

export {Theme};