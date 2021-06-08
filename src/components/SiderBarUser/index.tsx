import React from 'react';
import { Link } from 'react-router-dom';

import { SideBarContainer, Content } from './styles';

const SideBarUser: React.FC = () => {
  return (
    <SideBarContainer>
      <h4>Menu</h4>
      <Content>
        <Link to="/product-user">Home</Link>
        <Link to="/">Carrinho</Link>
      </Content>
    </SideBarContainer>
  );
};

export default SideBarUser;
