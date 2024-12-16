import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

import Header from './components/Header';
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import WaterEvaluation from "./components/WaterEvaluation";
import Reports from "./components/Reports";
import AboutUs from "./components/AboutUs";


const App = () => {
    return (
        <div className="flex flex-col h-screen">
            <Router>
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/water-evaluation" element={<WaterEvaluation />} />
                        <Route path="/reports" element={<Reports />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
};
export default App;
