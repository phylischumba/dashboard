import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';

const data = [
  {
    name: 'Mon',
    result: 85
  },
  {
    name: 'Tues',
    result: 95
  },
  {
    name: 'Wed',
    result: 70
  },
  {
    name: 'Thur',
    result: 80
  },
  {
    name: 'Fri',
    result: 110
  },
  {
    name: 'Sat',
    result: 100
  },
  {
    name: 'Sun',
    result: 90
  }
];

const LineGraph = () => {
  return (
    <div style={{ borderBottom: '0.5px dotted #e3e6e8' }}>
      <StyledHeader>
        <span>History - Blood pressure</span>
        <span style={{ marginRight: '200px' }}>See Logs</span>
      </StyledHeader>
      <LineChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="result" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default LineGraph;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 30px 40px 30px 0;
  padding-bottom: 20px;
  border-bottom: 0.5px dotted #e3e6e8;
`;
