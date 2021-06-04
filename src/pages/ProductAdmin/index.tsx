import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Product from '../../components/Products';
import ModalAddProduct from '../../components/ModalAddProduct';
import ModalEditProduct from '../../components/ModalEditProduct';

import { ProductsContainer } from './styles';

interface IProducts {
  id: number;
  name: string;
  price: string;
  description: string;
  available: boolean;
}

const ProductAdmin: React.FC = () => {
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

  async function handleAddProduct(product: Omit<IProducts, 'id' | 'available'>): Promise<void> {
    try {
      const response = await api.post('/products', {
        ...product,
        available: true,
      });

      setProducts([...products, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateProduct(product: Omit<IProducts, 'id' | 'available'>): Promise<void> {
    try {
      const response = await api.put(`/products/${editingProduct.id}`, {
        ...editingProduct,
        ...product,
      });

      setProducts(
        products.map((mappedProduct) =>
          mappedProduct.id === editingProduct.id ? { ...response.data } : mappedProduct,
        ),
      );
    } catch (err) {}
  }

  async function handleDeleteProduct(id: number): Promise<void> {
    try {
      await api.delete(`/products/${id}`);

      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {}
  }

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
      <ModalAddProduct isOpen={modalOpen} setIsOpen={toggleModal} handleAddProduct={handleAddProduct} />
      <ModalEditProduct
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingProduct={editingProduct}
        handleUpdateProduct={handleUpdateProduct}
      />
      <ProductsContainer data-testid="foods-list">
        {products &&
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleDelete={handleDeleteProduct}
              handleEditProduct={handleEditProduct}
            />
          ))}
      </ProductsContainer>
    </>
  );
};

export default ProductAdmin;
