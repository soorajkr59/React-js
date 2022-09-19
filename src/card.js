import React from 'react';
import img1 from './data.jpg';
import img2 from './fullstack.png';
import img3 from './not.jpg';
import { Nav } from './Nav';
import img4 from './web.jpg';

 export function Card()
 {
    return(
        <div>
            <Nav/>
        <div className="card-bg">
            <h2 className="card-text">Learn 4.0 Technology</h2>
            <p className="card-text"> Industry 4.0 describes the growing trend towards automation and data exchange in technology and processes within the manufacturing industry,</p>
            <div className="card-1">
            <p clasName="para">Data science is the domain of study that deals with vast volumes of data</p>
                    <img src={img1} className="img"/>
                    
        </div>
            <div className="card-2">
            <p>If it is the general, everyday user, or an advanced, power</p>
            <img src={img2} className="img"/>
            
                

        
            
            </div>
            <div className="card-1">
            <p>A full stack web developer is a person who can develop both client and server </p>
                <img src={img3} className="img"/>
                
        </div>
            <div className="card-2">
            <p>Learn how developers have used the web to create amazing web experiences for their users. </p>
            <img src={img4} className="img"/>
            
        

        
            
            </div>
        </div>
        </div>
    );
 }