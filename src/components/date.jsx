// This component composes the footer - it shows the current year automatically

import React from "react";

const d = new Date();
let year = d.getFullYear();

export default function date(){
    return(
        <footer className="text-center" id="footer">
            <p>  JC - {year} © </p>
        </footer>   
    )
}

