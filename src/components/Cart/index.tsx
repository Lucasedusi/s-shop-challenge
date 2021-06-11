import CartItem from '../CartItem';
import { CartItemType } from '../../pages/Shop';
import { Wrapper, HeaderCart, BodyCart } from './styles';

import Input from '../Input';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((confirm: number, item) => confirm + item.amount * item.price, 0);

  return (
    <Wrapper>
      <HeaderCart>
        <h2>Carrinho</h2>
      </HeaderCart>
      <BodyCart>
        {cartItems.length === 0 ? <p>Nenhum item no carrinho</p> : null}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
        ))}
        <h2>Total: R${calculateTotal(cartItems).toFixed(2)}</h2>

        <input required name="nome" placeholder="Nome Completo" />
        <button type="submit">Finalizar Comprar</button>
      </BodyCart>
    </Wrapper>
  );
};

export default Cart;
