import Button from '@material-ui/core/Button';
import { CartItemType } from '../../pages/Shop';
import { Wrapper, Content } from './styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <Content>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h3 className="price">R${item.price}</h3>
    </Content>
    <Button className="btn-cart" onClick={() => handleAddToCart(item)}>Adicionar</Button>
  </Wrapper>
);

export default Item