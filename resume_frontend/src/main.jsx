import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'

import About from './pages/About';
import Home from './pages/Home';
import Root from './pages/Root';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import GenerateResume from './pages/GenerateResume';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
   <BrowserRouter>
       <Routes>

         <Route path='/' element={<Root/>}>

           <Route path='home' element={<Home/>}/>
           <Route path='hbout' element={<About/>}/>
           <Route path='service' element={<Services/>}/>
           <Route path='contactus' element={<ContactUs/>} />
           <Route path='generate-Resume' element={<GenerateResume/>} />

         </Route>
       </Routes>      
    </BrowserRouter>
  </StrictMode>
)
