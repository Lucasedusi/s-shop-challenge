/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';

import Modal from '../Modal';
import Input from '../Input';

interface IProducts {
  id: number;
  name: string;
  price: string;
  description: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateProduct: (product: Omit<IProducts, 'id'>) => void;
  editingProduct: IProducts;
}

interface IEditProductData {
  name: string;
  price: string;
  description: string;
}

const ModalEditProduct: React.FC<IModalProps> = ({ isOpen, setIsOpen, editingProduct, handleUpdateProduct }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditProductData) => {
      handleUpdateProduct(data);

      setIsOpen();
    },
    [handleUpdateProduct, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingProduct}>
        <h1>Editar Produto</h1>
        <Input required name="name" placeholder="Nome do produto" />
        <Input required name="price" placeholder="Preço" />

        <Input name="description" placeholder="Descrição" />
        
        <button type="submit" data-testid="edit-product-button">
          <div className="text">Editar Produto</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditProduct;
