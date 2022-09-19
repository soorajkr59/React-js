import React from "react";
import img from './back.png';
import { Nav } from "./Nav";
import img1 from './photo.png';
import img2 from './watch.jpg';
export function Main()
{
    return(
        <div>
            <Nav/>
        <div className="back1">
            <h3 className="head">Congratulations</h3>
            <div className="bg2">
        <img src={img1} className="photo"/>
        <h4 className="text">Kiran v</h4>
        <h6 className="text">Vishnu institution computer Education and technology</h6>
        <img src={img2} className="photo2"/>
            </div>
            </div>
                

                
        </div>
        
    );
};