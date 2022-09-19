import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "./Nav";

export function Heart()
{
    return(
        <div>
            <Nav/>
        <div className="re-pageback">
            <div className="re-pagediv">
                <h1 className="re-pageh1">Thank you for your Feedback</h1>
                <FontAwesomeIcon icon={faHeart} className="re-pageimg"/>
            </div>
        </div></div>
    );
}