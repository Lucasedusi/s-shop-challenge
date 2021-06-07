import React from 'react';
import { Link } from 'react-router-dom';

import { SideBarContainer, Content } from './styles';

const SideBarAdmin: React.FC = () => {
  return (
    <SideBarContainer>
      <h4>Menu</h4>
      <Content>
        <Link to="/">Produtos</Link>
        <Link to="/purchase">Compras</Link>
      </Content>
    </SideBarContainer>
  );
};

export default SideBarAdmin;
