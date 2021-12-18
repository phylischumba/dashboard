import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import SearchBar from './Search';
import styled from 'styled-components';
import { VscBellDot } from 'react-icons/vsc';
import { MdChatBubble, MdKeyboardArrowDown } from 'react-icons/md';
import './componentStyles.css';

function Nav() {
  return (
    <NavBar style={{ width: '100vw', display: 'flex', zIndex: '999' }}>
      <div style={{ display: 'flex', marginLeft: '30px' }}>
        <NavItem>
          <FaBars />
        </NavItem>
        <NavItem>
          {' '}
          <img src={Logo} alt="logo" className="logo" />
        </NavItem>
        <NavItem>
          <h4>HealthX</h4>
        </NavItem>
      </div>
      <NavItem>
        <SearchBar />
      </NavItem>
      <div className="lastNav">
        <NavItem>
          <VscBellDot className="icon" />
        </NavItem>
        <NavItem>
          <MdChatBubble className="icon" />
        </NavItem>
        <NavItem className="profile">
          <img
            src="https://images.pexels.com/photos/8348965/pexels-photo-8348965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="avatar"
          />
          <h5>Dr. Grayson</h5>
          <MdKeyboardArrowDown />
        </NavItem>
      </div>
    </NavBar>
  );
}

const NavItem = styled.div`
  padding: 0 10px;
  align-self: center;
  z-index: 999;
  img {
    height: 43px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  height: 10vh;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

export default Nav;
