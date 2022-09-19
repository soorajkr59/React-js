import React from "react";
import img from './csk.jpg';
import img1 from './rcb.jpg';
import { Nav } from "./Nav";

export function League()
{
    return(
        <div>
            <Nav/>
        <div className="le-back1">
            <div>
            <h1 className="le-text">Super Over League</h1>
            <img src={img} className="le-photo1"/>
            <img src={img1} className="le-photo2"/>
            </div>
        </div>
        </div>
    );
    
    
}