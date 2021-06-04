import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Modal from '../../components/Modal';
import ModalAddProduct from '../../components/ModalAddProduct';
import ModalEditProduct from '../../components/ModalEditProduct';

import { Container, ContentPrimary, Title } from './styles';

interface IProduct {
  id: number;
  nome: string;
  price: string;
  description: string;
  available: string;
}

const ProductAdmin: React.FC = () => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [editingProduct, setEditingProduct] = useState<IProduct[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadProducts(): Promise<void> {}

    loadProducts();
  }, []);

  async function handleAddProduct(product: Omit<IProduct, 'id' | 'available'>): Promise<void> {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateProduct(product: Omit<IProduct, 'id' | 'availeble'>): Promise<void> {}

  async function handleDeleteProduct(id: number): Promise<void> {}

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditModal(product: IProduct): void {}

  return (
    <>
      <Container>
        <ContentPrimary>
          <Title>Produtos</Title>
          <button className="btn btn-success">Adicionar Produto</button>
        </ContentPrimary>
      </Container>
    </>
  );
};

export default ProductAdmin;
