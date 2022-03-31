import React, {useState} from 'react'
import styled from 'styled-components';
import {BiX}  from "react-icons/bi";

import {selectCarModels, selectSideMenuItems} from '../features/models/modelSlice';
import {useSelector} from 'react-redux';

import { Link } from 'react-router-dom';

const HeaderMenu = () => {
 
  const [closeButtonOpen, setCloseButtonOpen] = useState(false);
  const sideMenuItems = useSelector(selectSideMenuItems);
  const carModels = useSelector(selectCarModels);
  
  return (
    <MenuContainer>
      <a>
        <Link to ={'/'}>
          <img src="/images/logo.svg" height={20}/>
        </Link>
      </a>   
      
      <MenuCenter> 
        { 
            carModels && carModels.map ( (selectedCarModel, index) =>(
               <Link key ={index} to= { `/carModelSpec/${selectedCarModel}` }
               >{selectedCarModel}</Link>
          ) )
        }
      </MenuCenter> 

      <MenuRight>
          <Link to="">Shop</Link>
          <Link to="">Account</Link>
          <Link to="" onClick={() => setCloseButtonOpen(true)}>Menu</Link>
      </MenuRight>

      <SidebarMenu show={closeButtonOpen}>
        <CloseButtonWrapper >
          <CloseButton onClick={() => setCloseButtonOpen(false)} />
        </CloseButtonWrapper>
          { sideMenuItems && sideMenuItems.map ( (menuItem, index) =>(
               <li><Link key ={index} to={ `/carModelSpec/${menuItem}`}>{menuItem}</Link></li>
          ) )}
      </SidebarMenu>

    </MenuContainer>
  )
}

export default HeaderMenu;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;  // Taking the full width
  top:0;
  left:0;
  right:0;
  padding: 0 30px;
  min-height: 60px;
  z-index: 1;
`;

const MenuCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  a {
    font-weight: 600;
  }
  @media (max-width: 768px) {
        display: none;
    }
`;

const MenuRight = styled(MenuCenter)`
  @media (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
    }
`;

const SidebarMenu = styled.div`
  position: fixed;
  top: 0;
  bottom:0;
  right:  0;
  padding-top: 20px;
  list-style: none;
  background-color: #ffffff;
  width: 290px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding-left: 50px;
  gap: 17px;
    a {
      font-weight:500;
       color: #23262b;
    }
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.2s;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(BiX)`
padding-right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;