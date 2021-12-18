/* eslint-disable react/prop-types */
import { MdSettings } from 'react-icons/md';
import styled from 'styled-components';
import { RiHeart3Fill } from 'react-icons/ri';
import { MdAutoGraph, MdOutlineWaterDrop } from 'react-icons/md';

const PatientCard = ({ avatar, assigned, name, cycle, pressure }) => {
  return (
    <Patient>
      <PatientData>
        <Img src={avatar} alt={name} />
        <PatientInfo>
          <p>Assigned on {assigned}</p>
          <span>{name}</span>
          <p>Cycle starts {cycle}</p>
        </PatientInfo>
      </PatientData>
      <div>
        <div className="vital">
          <h6>Vital Status</h6>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '150px' }}>
            <StyledIcons>
              <RiHeart3Fill color={pressure.toUpperCase() === 'IN RANGE' ? 'limegreen' : 'red'} />
              <MdOutlineWaterDrop />
              <RiHeart3Fill />
              <MdAutoGraph />
            </StyledIcons>

            <MdSettings className="setting" />
          </div>
        </div>
      </div>
    </Patient>
  );
};

export default PatientCard;

const Patient = styled.div`
  width: 100%;
  backgound-color: #f6f6f6;
  display: flex;
  justify-content: space-evenly;
  alight-atiems: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px 0;
  padding: 10px 0;
  align-self: center;
`;
const Img = styled.img`
  height: 50px;
  width: 47px;
  border-radius: 50%;
  margin-right: 10px;
`;
const PatientData = styled.div`
  display: flex;
  margin-right: 20px;
`;

const PatientInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
    margin: 2px;
  }
  span {
    font-weight: bold;
    color: #03045e;
  }
`;
const StyledIcons = styled.div`
  font-size: 20px;
`;
