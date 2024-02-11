import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from '../../assets/countrycode.json';

const Chart = () => {
  return (
    <LineChart
      width={800}
      height={400}
      data={data.learner.gradient_booster.model.trees[0].nodes} // Replace this with your specific data
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;