/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SidebarItems from './SidebarItems';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import docImage from '../assets/doc.png';
const SidebarParent = styled.div`
  a {
    text-decoration: none;
  }

  & > div {
    width: 15vw;
    height: 90vh;
    position: absolute;
    bottom: 0;
    @media (max-width: 1010px) {
      width: 2vw;
    }
  }

  .behind-the-scenes {
    width: 15vw;
    @media (max-width: 1010px) {
      width: 2vw;
    }
  }
  @media (max-width: 1010px) {
    width: 2vw;
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.active ? '#03045E' : '')};
  margin: 4px 12px;
  border-radius: 4px;
  span {
    color: ${(props) => (props.active ? 'white' : 'black')};
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;

const SideItemName = styled.span`
  padding: 15px;
  @media (max-width: 1010px) {
    display: none;
  }
`;
const SideItemIcon = styled.span`
  padding: 15px;
  @media (max-width: 1010px) {
    padding: 0;
  }
`;
const Image = styled.img`
  @media (max-width: 1010px) {
    display: none;
  }
`;

const Sidebar = (props, { defaultActive }) => {
  const location = props.history.location;
  const lastActiveIndexString = localStorage.getItem('lastActiveIndex');
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

  const changeActiveIndex = (newIndex) => {
    localStorage.setItem('lastActiveIndex', newIndex);
    setActiveIndex(newIndex);
  };

  const getPath = (path) => {
    if (path.charAt(0) !== '/') {
      return '/' + path;
    }
    return path;
  };

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(
      (item) => getPath(item.route) === getPath(location.pathname)
    );
    changeActiveIndex(activeItem);
  }, [location]);

  return (
    <>
      <SidebarParent>
        <div style={{ position: 'fixed', zIndex: 999, top: '17vh' }}>
          {SidebarItems.map((item, index) => {
            return (
              <Link to={item.route}>
                <SidebarItem key={item.name} active={index === activeIndex}>
                  <SideItemIcon>{item.icon}</SideItemIcon>
                  <SideItemName>{item.name}</SideItemName>
                </SidebarItem>
              </Link>
            );
          })}
          <Image src={docImage} alt="doc image" className="side-image" />
        </div>
        <div className="behind-the-scenes" />
      </SidebarParent>
    </>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  history: PropTypes.string,
  location: PropTypes.string
};
