// CompGraph.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CompGraph = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/graph')
      .then(response => setGraphData(response.data))
      .catch(error => console.error('Error fetching graph data:', error));
  }, []);

  return (
    <div>
      <LineChart width={400} height={300} data={graphData}>
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="rgba(75, 192, 192, 1)" fill="rgba(75, 192, 192, 0.2)" />
      </LineChart>
    </div>
  );
};

export default CompGraph;
