import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface ICreateProductData {
  name: string;
  price: number;
  description: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddProduct: (product: Omit<IProducts, 'id'>) => void;
}

const ModalAddProduct: React.FC<IModalProps> = ({ isOpen, setIsOpen, handleAddProduct }) => {
  const formRef = useRef<FormHandles>(null);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const handleSubmit = useCallback(
    async (data: ICreateProductData) => {
      handleAddProduct(data);

      setIsOpen();
    },
    [handleAddProduct, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Produto</h1>
        <Input required name="name" placeholder="Nome do produto" />
        <Input required name="price" placeholder="Preço" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="add-product-button">
          <p className="text">Adicionar Produto</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddProduct;
