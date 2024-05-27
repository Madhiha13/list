import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinalList from './Component/List/FinalList';
import DataEntry from './Component/DataEntry/DataEntry';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FinalList />} />
                <Route path="/data-entry" element={<DataEntry />} />
            </Routes>
        </Router>
    );
};

export default App;
