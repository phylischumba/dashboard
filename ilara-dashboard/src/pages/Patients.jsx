import React from 'react';
import MetaData from '../components/MetaData';
import PatientCard from '../components/PatientCard';
import { data } from '../data';
import styled from 'styled-components';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IoFilterSharp } from 'react-icons/io5';
import { MdOutlineShare } from 'react-icons/md';
import ClickedPatientCard from '../components/ClickedPatient';
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: white;
    border: 1px solid gray;
    padding: 6px 10px;
    margin-right: 5px;
    font-size: 12px;
    cursor: pointer;
  }
`;
const FirstDiv = styled.div`
  width: 35%;
  @media (max-width: 1010px) {
    width: 90%;
  }
`;
const MetaDataDiv = styled.div`
  background-color: white;
  width: 58%;
  padding: 20px;
  @media (max-width: 1008px) {
    width: 90%;
  }
`;

const PatientsData = () => {
  return (
    <div className="app">
      <FirstDiv>
        <Header>
          <h3>Patients</h3>
          <div>
            <button type="button">
              <RiCheckboxBlankCircleFill color="limegreen" className="header-icons" />
              In range
            </button>
            <button type="button">
              <RiCheckboxBlankCircleFill color="red" className="header-icons" />
              Out range
            </button>
            <button type="button">
              Export <MdOutlineShare className="header-icons" />
            </button>
            <button type="button">
              Filter <IoFilterSharp className="header-icons" />
            </button>
          </div>
        </Header>
        <div style={{ backgroundColor: 'white' }}>
          <ClickedPatientCard
            avatar="https://images.pexels.com/photos/8348965/pexels-photo-8348965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            assigned="Nov 29, 19"
            name="Erica Rodriges"
            cycle="31st"
            pressure="in range"
          />
          {data.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <PatientCard
              avatar={item.avatar}
              assigned={item.assigned}
              name={item.name}
              cycle={item.cycle}
              pressure={item.pressure}
            />
          ))}
        </div>
      </FirstDiv>

      <MetaDataDiv>
        <MetaData />
      </MetaDataDiv>
    </div>
  );
};

export default PatientsData;
