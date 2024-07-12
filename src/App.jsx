import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./components/Home";

import Nav from "./components/Nav";
import ContactButton from "./components/ContactButton";


/* 
import { About, Services, Technology, Articles, Faqs, Contact, Login } from "./index"; */
import About from "./components/About";
import Services from "./components/Services";
import Technology from "./components/Technology";
import Articles from "./components/Articles";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Login from "./components/Login";


/* import Institues from "./components/Institutes" */
function App() {
  return (
    <>
      
  {/*     <div className="relative z-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
     
        </Routes>
      </div> */}
   <div className="relative z-20">
      <Nav />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/technology" element={<Technology/>}></Route>
        <Route path="/articles" element={<Articles/>}></Route>
        <Route path="/faqs" element={<Faqs/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </div>
      
     
    </>
  );
}

export default App;
