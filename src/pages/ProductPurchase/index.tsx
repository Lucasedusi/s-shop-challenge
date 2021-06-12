import React, { useEffect, useState } from 'react';

import { HeaderShop } from '../../components';

import { ProductsContainer, GeneralContainer } from './styles';

export type SalesType = {
  name: string;
  totalItems: number;
  totalPrice: number;
};

const Dashboard: React.FC = () => {
  const [sales, setSales] = useState([] as SalesType[]);

  useEffect(() => {
    async function loadSales(): Promise<void> {
      const storageSales = localStorage.getItem('@shop:sales') || '[]';

      const sales = JSON.parse(storageSales);
      setSales(sales);
    }

    loadSales();
  }, []);

  return (
    <>
      <HeaderShop />

      <GeneralContainer>
        <h1>Painel de compras</h1>
        <ProductsContainer data-testid="foods-list">
          {' '}
          {sales.map((sale) => (
            <ul key={JSON.stringify(sale)}>
              <li>{sale.name}</li>
              <li>{sale.totalItems}</li>
              <li>{sale.totalPrice}</li>
            </ul>
          ))}
        </ProductsContainer>
      </GeneralContainer>
    </>
  );
};

export default Dashboard;

// <table>
//             <tr>
//               <th>{cartItems.name}</th>
//               <th>Quantidade</th>
//               <th>Total</th>
//             </tr>

//             <tr>
//               <td></td>
//               <td></td>
//               <td></td>
//             </tr>
//           </table>
