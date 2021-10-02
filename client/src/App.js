import React from "react";
import Navbar from "./components/nav/navbar";
import Landing from "./components/landing/landing"
import Footer from "./components/footer/footer";


function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Landing></Landing>
            <Footer></Footer>
        </div>
    )
}

export default App;