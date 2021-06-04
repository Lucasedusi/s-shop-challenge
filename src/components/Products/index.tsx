import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

interface IProduct {
  id: number;
  name: string;
  price: string;
  description: string;
  available: boolean;
}

interface IProps {
  product: IProduct;
  handleDelete: (id: number) => {};
  handleEditProduct: (product: IProduct) => void;
}

const Product: React.FC<IProps> = ({
  product,
  handleDelete,
  handleEditProduct,
}: IProps) => {
  const [isAvailable, setIsAvailable] = useState(product.available);

  async function toggleAvailable(): Promise<void> {
    // TODO UPDATE STATUS (available)
  }

  function setEditingProduct(): void {
    // TODO - SET THE ID OF THE CURRENT ITEM TO THE EDITING PRODUCT AND OPEN MODAL
  }

  return (
    <Container available={isAvailable}>
      <header>
      </header>
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

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${product.id}`} className="switch">
            <input
              id={`available-switch-${product.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-product-${product.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};

export default Product;