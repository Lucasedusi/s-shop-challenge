/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';

import { HeaderShop, SideBarAdmin } from '../../components';
import { FiSearch } from 'react-icons/fi';

import { ProductsContainer, GeneralContainer, Form, Search } from './styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';

interface SalesType {
  name: string;
  totalItems: number;
  totalPrice: number;
}

const ProductPurchase: React.FC = () => {
  const [search, setSearch] = useState('');
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
        <SideBarAdmin />
        <ProductsContainer data-testid="foods-list">
          <Search>
            <h1>Compras</h1>
            <Form onSubmit={() => {}}>
              <input type="text" placeholder="Buscar compras..." onChange={(event) => setSearch(event.target.value)} />
              <button type="submit">
                <FiSearch size={18} />
              </button>
            </Form>
          </Search>
          <Breadcrumbs className="breadcrubs">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/purchase">Compras</Link>
          </Breadcrumbs>
          <table>
            <tr>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </table>
          {sales
            .filter((sale) => {
              if (search === '') {
                return sale;
              } else if (sale.name.toLowerCase().includes(search.toLowerCase())) {
                return sale;
              }
            })
            .map((sale) => (
              <table>
                <tr>
                  <td width="33%">{sale.name}</td>
                  <td width="33%">{sale.totalItems}</td>
                  <td width="33%">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sale.totalPrice)}</td>
                </tr>
              </table>
            ))}
        </ProductsContainer>
      </GeneralContainer>
    </>
  );
};

export default ProductPurchase;
