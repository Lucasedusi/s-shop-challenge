import React from 'react';

// import { FiMail } from 'react-icons/fi';
import { Container, Form } from './styles';

import Logo from '../../assets/logo.png';

const HeaderShop: React.FC = () => (
  <Container>
    <header>
      <img src={Logo} alt="Shop Seventh" />
        <Form onSubmit={() => {}}>
          <input onChange={() => {}} placeholder="Buscar..." />
          <button type="submit">Pesquisar</button>
        </Form>
    </header>
  </Container>
);

export default HeaderShop;
