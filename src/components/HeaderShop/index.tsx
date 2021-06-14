import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/logo.png';

const HeaderShop: React.FC = () => (
  <Container>
    <header>
      <img src={Logo} alt="Shop Seventh" />
    </header>
  </Container>
);

export default HeaderShop;
