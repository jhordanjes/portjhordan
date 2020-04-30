import React from 'react';
import Project from '../../Components/Project';
import Contact from '../../Components/Contact';
import Navbar from '../../Components/Navbar';
import About from '../../Components/About';

export default function Home(){
    return(
        <>
            <Navbar />
            <About />
            <Project />
            <Contact />
        </>
    )
}