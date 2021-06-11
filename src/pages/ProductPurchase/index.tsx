import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { HeaderShop } from '../../components';

import { ProductsContainer, GeneralContainer } from './styles';

interface IProducts {
  id: number;
  name: string;
  price: string;
  description: string;
}

const Dashboard: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <>
      <HeaderShop />

      <GeneralContainer>
        <h1>Painel de compras</h1>
        <ProductsContainer data-testid="foods-list">
          <table>
            <tr>
              <th>Nome do Produto</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>

            <tr>
              <td>Lucas Eduardo</td>
              <td>4</td>
              <td>R$ 21.90</td>
            </tr>
          </table>
        </ProductsContainer>
      </GeneralContainer>
    </>
  );
};

export default Dashboard;
