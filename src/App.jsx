import { useState } from 'react'
import './App.css'
import Landing from "./landing"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Getdata from "./getdata";




function App() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route index element={<Landing />} />
                    <Route path="/data" element={<Getdata/>} />
                </Routes>
        </BrowserRouter>

    )
}

export default App
