/* eslint-disable no-self-assign */
import { useState, useEffect } from 'react';
import CartItem from '../CartItem';
import { CartItemType } from '../../pages/Shop';
import { Wrapper, HeaderCart, BodyCart } from './styles';

interface Props {
  setCartOpen: (isOpen: boolean) => void;
  setCartItems: (cartItems: CartItemType[]) => void;
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ setCartOpen, setCartItems, cartItems, addToCart, removeFromCart }) => {
  const [inputValid, setInputValid] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    name && setInputValid(true);
    !name && setInputValid(false);
  }, [name]);

  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((confirm: number, item) => confirm + item.amount * item.price, 0);

  const addSales = (sale: {}) => {
    const sales = localStorage.getItem('@shop:sales') || '[]';

    const newSales = JSON.parse(sales);
    newSales.push(sale);

    localStorage.setItem('@shop:sales', JSON.stringify(newSales));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const totalItems = cartItems.reduce((confirm: number, item) => confirm + item.amount, 0);
    const totalPrice = calculateTotal(cartItems).toFixed(2);
    const sale = { name, totalItems, totalPrice };

    addSales(sale);

    setCartOpen(false);
    setCartItems([]);
    localStorage.removeItem('@Shop:cart');
  };

  return (
    <Wrapper>
      <HeaderCart>
        <h2>Carrinho</h2>
      </HeaderCart>
      <BodyCart onSubmit={handleSubmit} isDisabled={inputValid}>
        {cartItems.length === 0 ? <p>Nenhum item no carrinho</p> : null}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
        ))}
        <h2>Total: R${calculateTotal(cartItems).toFixed(2)}</h2>
        <input
          required
          name="name"
          placeholder="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" disabled={!inputValid}>
          {!inputValid ? 'Digite seu nome' : 'Finalizar Comprar'}
        </button>
      </BodyCart>
    </Wrapper>
  );
};

export default Cart;
