import React from 'react';

import { Container, ContentPrimary, ContentSecond, Title } from './styles';

const ProductAdmin: React.FC = () => {
  return (
    <Container>
      <ContentPrimary>
        <Title>Produtos</Title>
        <button className="btn btn-success">Adicionar Produto</button>
      </ContentPrimary>

      <ContentSecond>
        <Title>Produtos</Title>
        <button className="btn btn-primary">Adicionar Produto</button>
      </ContentSecond>
    </Container>
  );
};

export default ProductAdmin;
