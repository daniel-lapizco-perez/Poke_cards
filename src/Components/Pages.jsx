import React from "react";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

const Pages = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="header/" element={<Header />}/>
                    <Route path="footer/" element={<Footer />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default Pages