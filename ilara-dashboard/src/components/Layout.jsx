/* eslint-disable react/prop-types */
import React from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';

function Layout(props) {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Sidebar history={props.history} />
        <div>
          <Nav />

          <div style={{ position: 'absolute', left: '15%', width: '85vw' }}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
