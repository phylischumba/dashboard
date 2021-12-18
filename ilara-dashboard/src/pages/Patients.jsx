import React from 'react';
import MetaData from '../components/MetaData';
import PatientCard from '../components/PatientCard';
import { data } from '../data';
import styled from 'styled-components';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IoFilterSharp } from 'react-icons/io5';
import { MdOutlineShare } from 'react-icons/md';

function PatientsData() {
  return (
    <div className="app">
      <div style={{ width: '35%' }}>
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
      </div>

      <div style={{ backgroundColor: 'white', width: '58%', padding: '20px' }}>
        <MetaData />
      </div>
    </div>
  );
}

export default PatientsData;
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
