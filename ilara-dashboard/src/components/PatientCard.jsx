/* eslint-disable react/prop-types */
import { MdSettings } from 'react-icons/md';
import styled from 'styled-components';
import { VscHeart } from 'react-icons/vsc';
import { MdAutoGraph, MdOutlineWaterDrop } from 'react-icons/md';

const PatientCard = ({ avatar, assigned, name, cycle }) => {
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
        <div>
          <h6>Vital Status</h6>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '150px' }}>
            <div>
              <VscHeart />
              <MdOutlineWaterDrop />
              <VscHeart />
              <MdAutoGraph />
            </div>

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
    font-size: 14px;
    margin: 10px;
  }
  span {
    font-weight: bold;
  }
`;
