/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

import { SideBarContainer, Content } from './styles';

export type CartItemType = {
  id: number;
  description: string;
  price: number;
  name: string;
  amount: number;
};

const SideBarUser: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <SideBarContainer>
      <h4>Menu</h4>
      <Content>
        <Link to="/">
          {' '}
          <FaHome size={19} /> Home
        </Link>
        <Link onClick={() => setCartOpen(true)}>
          <FaShoppingCart size={20} /> Carrinho
        </Link>
      </Content>
    </SideBarContainer>
  );
};

export default SideBarUser;
