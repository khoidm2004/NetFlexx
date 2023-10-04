import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";
import MovieDetail from "../MovieDetail/MovieDetail";

export default function Route1() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route exact path="/MovieDetail/:id" element={<MovieDetail/>}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}