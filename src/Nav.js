import React from "react";
import {Link} from 'react-router-dom';

 export function Nav()
 {
    return(
        <div className="t-menu">
            <ul>
                
                <Link to='/'><li>Hello</li></Link>
              <Link to='/about'><li>league</li></Link>
               <Link to='/clear'><li>Tec card</li></Link>
               <Link to='/card'><li>Card</li></Link>
               <Link to='/fruit'><li>Fruit</li></Link>
               <Link to='/review'><li>Review</li></Link>
             
            </ul>
        </div>
    );
 };