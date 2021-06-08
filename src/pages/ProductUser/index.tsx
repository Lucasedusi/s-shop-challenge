import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';

import SideBarUser from '../../components/SiderBarUser';

import { ProductsContainer, GeneralContainer, Products, Button, Footer, FooterQtn } from './styles';

interface IProducts {
  id: number;
  name: string;
  price: string;
  description: string;
}

const ProductUser: React.FC = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [editingProduct, setEditingProduct] = useState<IProducts>({} as IProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditProduct(product: IProducts): void {
    setEditingProduct(product);
    toggleEditModal();
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <GeneralContainer>
        <SideBarUser />

        <ProductsContainer data-testid="foods-list">
          {products &&
            products.map((product) => (
              <Products>
                <p className="name">{product.name}</p>
                <p className="description">{product.description}</p>
                <p className="price">
                  R$ <b>{product.price}</b>
                </p>
                <Footer>
                  <FooterQtn>
                    <button>-</button>
                    <input name="compras" />
                    <button>+</button>
                  </FooterQtn>
                  <Button>Comprar</Button>
                </Footer>
              </Products>
            ))}
        </ProductsContainer>
      </GeneralContainer>
    </>
  );
};

export default ProductUser;