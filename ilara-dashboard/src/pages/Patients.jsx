import React from 'react';
// import MetaData from '../components/MetaData';
import PatientCard from '../components/PatientCard';
import { data } from '../data';

function Page1() {
  console.log('fdsa');
  return (
    <div className="app" style={{ flexDirection: 'column' }}>
      <div style={{ width: '30%', backgroundColor: 'white' }}>
        <h2>Patients</h2>{' '}
        {data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <PatientCard
            avatar={item.avatar}
            assigned={item.assigned}
            name={item.name}
            cycle={item.cycle}
          />
        ))}
      </div>
      <div style={{ backgroundColor: 'white', width: '62%', padding: '20px' }}>
        {/* <MetaData /> */}
      </div>
    </div>
  );
}

export default Page1;
