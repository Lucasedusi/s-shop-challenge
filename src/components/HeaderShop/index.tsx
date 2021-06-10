import React from 'react';

// import { FiMail } from 'react-icons/fi';
import { Container, Form } from './styles';

import Logo from '../../assets/logo.png';

const HeaderShop: React.FC = () => (
  <Container>
    <header>
      <img src={Logo} alt="Shop Seventh" />
    </header>
  </Container>
);

export default HeaderShop;
