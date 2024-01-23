// This component composes the footer - it shows the current year automatically

import React from "react";

const d = new Date();
let year = d.getFullYear();

export default function date(){
    return(
        <footer id="footer">
            <p>  - JC. It's {year} </p>
        </footer>   
    )
}

