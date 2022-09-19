import logo from './logo.svg';
import './App.css';
import { Menu } from './menu';

import { Wall } from './sample';
import { Main } from './index1';
import { Hello } from './hello';
import { League } from './league';
import { Card } from './card';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { Fruit } from './fruit';
import { Review } from './Review';
import { Heart } from './reviewpage';



function App() {

  return (
    <div>
    
{           
          <BrowserRouter>
        <Routes>
            <Route path='/' element={<Hello/>}/>
            <Route path='/about' element={<League/>}/>
            <Route path='/clear' element={<Card/>}/>
            <Route path='/card' element={<Main/>}/>
            <Route path='/fruit' element={<Fruit/>}/>
            <Route path='/review' element={<Review/>}/>
            <Route path='/feedback' element={<Heart/>}/>
            </Routes></BrowserRouter>
       }
      
     </div> 

    
  );
};

export default App;
