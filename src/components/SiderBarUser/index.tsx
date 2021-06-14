/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

import { SideBarContainer, Content } from './styles';

const SideBarUser: React.FC = () => {
  return (
    <SideBarContainer>
      <h4>Menu</h4>
      <Content>
        <Link to="/">
          {' '}
          <FaHome size={19} /> Home
        </Link>
        <Link to="/">
          <FaShoppingCart size={20} /> Carrinho
        </Link>
      </Content>
    </SideBarContainer>
  );
};

export default SideBarUser;
