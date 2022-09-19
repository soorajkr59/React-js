import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile,faFaceSadCry,faFaceSadTear} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { Nav } from "./Nav";
export function Review()
{
    return(
        <div>
            <Nav/>
        <div className="re-back">
                <div className="re-div">
                    <h2 className="re-h2">How Satisfied are you with our customer support perfomance</h2>
                    <Link to='/feedback'><FontAwesomeIcon icon={faSmile} className="re-img"/></Link>
                    <Link to='/feedback'><FontAwesomeIcon icon={faFaceSadTear} className="re-img"/></Link>
                    <Link to='/feedback'><FontAwesomeIcon icon={faFaceSadCry} className="re-img"/></Link>
                    <span className="re-span">
                    <h2 className="re-align1" onClick="Heart">Happy</h2>
                    <h2 className="re-align2">Poor</h2>
                    <h2 className="re-align3">Sad</h2>
                        </span>
                </div>
                
        </div></div>
    );
    
}