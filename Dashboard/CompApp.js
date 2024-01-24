// CompApp.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompMenu from './CompMenu';
import CompGraph from './CompGraph';
import CompTable from './CompTable';
import CompPie from './CompPie';
import Dashboard from './CompDashboard';
import './CompApp.css'


const App = () => {
    return (<>

        <button className="top-right-button" onClick={() => console.log('Button Clicked')}>
            <img
                src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/Rectangle%2010.png"
                alt="Button Image"
                className="button-image"
            />
            <div className="caption-container">
                <p className="caption-text">John Doe</p>
            </div>
        </button>

        <Router>
            <div style={{ display: 'flex' }}>
                {/* Fixed sidebar with links */}
                <div style={{ width: '200px', padding: '20px' }}>
                    <CompMenu />
                </div>

                {/* Content area */}
                <div style={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path="/table" element={<Dashboard />} />
                        <Route path="/dashboard/table" element={<CompTable />} />
                        <Route path="/dashboard/pie-chart" element={<CompPie />} />
                        <Route path="/dashboard/graph" element={<CompGraph />} />
                        {/* ... (other routes) ... */}
                    </Routes>
                </div>
            </div>
        </Router>
    </>
    );
};

export default App;
