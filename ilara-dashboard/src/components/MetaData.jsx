/* eslint-disable react/prop-types */
import styled from 'styled-components';
import {
  MdAccessTimeFilled,
  MdVideocam,
  MdOutlineChat,
  MdOutlineSettings,
  MdAutoGraph,
  MdWaterDrop
} from 'react-icons/md';
import Vitals from './Vitals';
import './componentStyles.css';
import Line from './Line';
import { FaHeart } from 'react-icons/fa';

const Img = styled.img`
  height: 50px;
  width: 47px;
  border-radius: 50%;
  margin-right: 10px;
`;
const PatientInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 2px;
  }
`;
const VitalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 0.5px solid #e3e6e8;
`;

const FirstData = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px dotted #e3e6e8;
`;
const StyledIconDiv = styled.div`
  border: 1px solid navy;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ActionIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`;
const StyledButton = styled.button`
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MetaData = () => {
  return (
    <div>
      <FirstData>
        <PatientInfo>
          <Img
            src="https://images.pexels.com/photos/8348965/pexels-photo-8348965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="John Doe "
          />
          <div>
            <span className="time">
              <MdAccessTimeFilled />
              22hrs spent
            </span>
            <span className="logs">
              <a style={{ textDecoration: 'none', color: '#03045e' }} href="#">
                See time logs
              </a>
            </span>
            <p style={{ color: '#03045e' }}>John Doe</p>
            <p style={{ color: 'gray' }}>23years | Female</p>
          </div>
        </PatientInfo>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ActionIcons>
            <StyledIconDiv>
              <MdOutlineChat />
            </StyledIconDiv>
            <StyledIconDiv>
              <MdVideocam style={{ fontSize: '20px' }} />
            </StyledIconDiv>
            <StyledButton>View Logs</StyledButton>
            <StyledButton>
              Assign <MdOutlineSettings />
            </StyledButton>
          </ActionIcons>

          <p style={{ textAlign: 'center', fontSize: '14px' }}>Assigned on Nov 23, 19</p>
        </div>
      </FirstData>
      <VitalDiv>
        <Vitals
          name="Blood Preesure"
          assigned="7"
          value="130/80"
          status="5hrs ago"
          icon={<FaHeart style={{ color: 'red' }} />}
          color="red"
        />
        <Vitals
          name="Heart Beat"
          assigned="7"
          value="76"
          status="5hrs ago"
          icon={<MdAutoGraph style={{ color: 'green' }} />}
          color="green"
        />
        <Vitals
          name="Weight"
          assigned="7"
          value="67"
          status="Waiting"
          icon={<FaHeart style={{ color: 'gray' }} />}
          color="gray"
        />
        <Vitals
          name="Blood Glucose"
          assigned="7"
          value="90"
          status="Waiting"
          icon={<MdWaterDrop style={{ color: 'green' }} />}
          color="green"
        />
      </VitalDiv>
      <Line />
      <Line />
    </div>
  );
};
export default MetaData;
