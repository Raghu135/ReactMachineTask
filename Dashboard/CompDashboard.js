//CompDashboard.js


import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CompTable from './CompTable';
import CompGraph from './CompGraph';
import CompPie from './CompPie';
import Footer from './CompFooter';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div id="clas_id">
      <div className="container mt-4">
        <h3 className="mb-4">Good Morning</h3>


        <div className="row mb-4">
          <div className="col-md-8">
            <Card style={{ height: '310px', width: '600px' }}>
              <Card.Body>
                <CompGraph />
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ height: '300px', width: '320px' }}>
              <Card.Body>
                <CompPie />
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Card>
              <Card.Body>
                <CompTable />
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/media.png" />
                <Card.Text>Joh Doe</Card.Text>
                <div className="d-flex justify-content-center mt-3">
                  <img
                    src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/facebook.png"
                    alt="Logo 1"
                    className="img-fluid mx-1"
                  />
                  <img
                    src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/instagram.png"
                    alt="Logo 2"
                    className="img-fluid mx-1"
                  />
                  <img
                    src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/twitter.png"
                    alt="Logo 3"
                    className="img-fluid mx-1"
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Include the Footer component for page switching */}
        <Footer currentPage={currentPage} goToPage={handlePageChange} />
      </div>
    </div>
  );
};

export default Dashboard;

