/* eslint-disable react/prop-types */
import styled from 'styled-components';
const Vitals = ({ name, assigned, value, status, icon, color }) => {
  return (
    <Vital>
      <div>
        {icon} <span>{name}</span>
      </div>
      <Assigned>Assined {assigned} days ago</Assigned>
      <Value style={{ color: color }}>{value}</Value>
      <Assigned>{status}</Assigned>
    </Vital>
  );
};

export default Vitals;

const Vital = styled.div`
  p {
    margin: 2px;
  }
  margin-top: 10px;
  padding: 0 30px;
  border-right: 0.5px dotted #e3e6e8;
`;
const Assigned = styled.p`
  color: gray;
  font-size: 11px;
`;
const Value = styled.p`
  font-size: 16px;
  font-weight: 800;
`;
