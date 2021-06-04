import React, { useState } from 'react';

import api from '../../services/api';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

interface IProducts {
  id: number;
  name: string;
  price: string;
  description: string;
  available: boolean;
}

interface IProps {
  product: IProducts;
  handleDelete: (id: number) => {};
  handleEditProduct: (product: IProducts) => void;
}

const Product: React.FC<IProps> = ({ product, handleDelete, handleEditProduct }: IProps) => {
  const [isAvailable, setIsAvailable] = useState(true);

  async function toggleAvailable(): Promise<void> {
    try {
      await api.put(`/products/${product.id}`, {
        ...product,
        available: !isAvailable,
      });

      setIsAvailable(!isAvailable);
    } catch (err) {
      console.log();
    }
  }

  function setEditingProduct(): void {
    handleEditProduct(product);
    console.log(product);
  }

  return (
    <Container available={isAvailable}>
      <header></header>
      <section className="body">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">
          R$ <b>{product.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => setEditingProduct()}
            data-testid={`edit-product-${product.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(product.id)}
            data-testid={`remove-product-${product.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Product;
