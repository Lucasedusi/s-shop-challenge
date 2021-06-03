import React from 'react';

import { Container, ContentPrimary, Title } from './styles';

const ProductAdmin: React.FC = () => {
  return (
    <Container>
      <ContentPrimary>
        <Title>Produtos</Title>
        <button className="btn btn-success">Adicionar Produto</button>
      </ContentPrimary>
    </Container>
  );
};

export default ProductAdmin;
