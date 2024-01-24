// CompTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/table')
      .then(response => setTableData(response.data))
      .catch(error => console.error('Error fetching table data:', error));
  }, []);

  return (
    <div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Quantity</th>
            <th style={tableHeaderStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr key={item.id} style={tableRowStyle}>
              <td style={tableCellStyle}>{item.id}</td>
              <td style={{ ...tableCellStyle, borderRight: '1px solid #ddd' }}>{item.name}</td>
              <td style={{ ...tableCellStyle, borderRight: '1px solid #ddd' }}>{item.quantity}</td>
              <td style={tableCellStyle}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  borderBottom: '2px solid #ddd',
  padding: '10px',
  textAlign: 'left',
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
};

export default CompTable;
