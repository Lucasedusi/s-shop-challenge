import React from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface IProps {
  product: IProducts;
  handleDelete: (id: number) => {};
  handleEditProduct: (product: IProducts) => void;
}

const Product: React.FC<IProps> = ({ product, handleDelete, handleEditProduct }: IProps) => {
  function setEditingProduct(): void {
    handleEditProduct(product);
    console.log(product);
  }

  return (
    <Container>
      <section className="body">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">
          <b>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon-edit"
            onClick={() => setEditingProduct()}
            data-testid={`edit-product-${product.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon-delete"
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
