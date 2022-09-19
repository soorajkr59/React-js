import React, { useState } from "react";
import img1 from './mango.jpg';
import img2 from './banana.jpg';
import { Nav } from "./Nav";

export function Fruit()
{
    const[count,setcount]=useState(0);
    const[x,setx]=useState(0);
    
    return(
        <div>
            <Nav/>
        <div className="fback">
            <div className="fback2">
                <h1 className="ftext">bob ate  {(count)} Bananas {(x)} Mangoes</h1>
                <img src={img1}  className="fimg"/>
                <img src={img2} className="fimg1"/>

                    <button onClick={()=>setcount(count+1)} className="fbtn1">Mango</button>
                    <button onClick={()=>setx(x+1)} className="fbtn2">Banana</button>
                 
            </div>
        </div>
        </div>
    );
};