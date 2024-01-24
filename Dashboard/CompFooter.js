// CompFooter.js

import React, { useState } from 'react';
import './CompFooter.css';

const Footer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="footer-container">
      <button className="circular-button" onClick={() => goToPage(1)}>
        <img src='https://static.thenounproject.com/png/4763792-200.png' style={{ height: "30px" }} />
      </button>
      <span style={{ margin: '0 10px' }}>{currentPage}</span>
      <button className="circular-button" onClick={() => goToPage(2)}>2</button>
      <button className="circular-button" onClick={() => goToPage(3)}>3</button>
      <button className="circular-button" onClick={() => goToPage(1)}>
        <img src='https://png.pngtree.com/element_our/20190531/ourmid/pngtree-cartoon-arrow-pointing-to-the-right-image_1287315.jpg' style={{ height: "28px" }} />
      </button>
    </div>
  );
};

export default Footer;
