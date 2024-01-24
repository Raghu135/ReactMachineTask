// // CompPie.js


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const CompPie = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/pie-chart')
      .then(response => setPieChartData(response.data))
      .catch(error => console.error('Error fetching pie chart data:', error));
  }, []);

  //  shades of green for the pie chart
  const greenColors = ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9'];

  return (
    <div>
      <PieChart width={300} height={200}>
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="label"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={greenColors[index % greenColors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="middle">
          {pieChartData.map((entry, index) => (
            <div key={`legend-${index}`} style={{ color: greenColors[index % greenColors.length] }}>
              {entry.label}
            </div>
          ))}
        </Legend>
      </PieChart>
    </div>
  );
};

export default CompPie;




