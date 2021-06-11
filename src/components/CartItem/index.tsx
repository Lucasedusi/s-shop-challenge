import { CartItemType } from '../../pages/Shop';
import { Wrapper, Content, CartInformation, CartButtons, ButtonLess, ButtonPlus } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <Content>
      <h3>{item.name}</h3>
      <CartInformation>
        <p>Preço: R${item.price}</p>
        <p>Total: R${(item.amount * item.price).toFixed(2)}</p>
      </CartInformation>
      <CartButtons>
        <ButtonLess onClick={() => removeFromCart(item.id)}>
          <FiMinus size={30} />{' '}
        </ButtonLess>
        <p>{item.amount}</p>

        <ButtonPlus onClick={() => addToCart(item)}>
          <FiPlus size={30} />
        </ButtonPlus>
      </CartButtons>
    </Content>
  </Wrapper>
);

export default CartItem;
