import { useState, useEffect } from 'react';

import Item from '../../components/Item';
import Cart from '../../components/Cart';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';

import SideBarUser from '../../components/SiderBarUser';
import HeaderShop from '../../components/HeaderShop';

import { StyledButton, ProductsContainer, GeneralContainer } from './styles';

import api from '../../services/api';

export type CartItemType = {
  id: number;
  description: string;
  price: number;
  name: string;
  amount: number;
};

const Shop: React.FC = () => {
  const [products, setProducts] = useState<CartItemType[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  const getTotalItems = (items: CartItemType[]) => items.reduce((confirm: number, item) => confirm + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) => (item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item));
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((confirm, item) => {
        if (item.id === id) {
          if (item.amount === 1) return confirm;
          return [...confirm, { ...item, amount: item.amount - 1 }];
        } else {
          return [...confirm, item];
        }
      }, [] as CartItemType[]),
    );
  };

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <HeaderShop />

      <GeneralContainer>
        <SideBarUser />
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error"></Badge>
        </StyledButton>

        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
        </Drawer>
        <ProductsContainer>
          {products?.map((product) => (
            <Grid item key={product.id}>
              <Item item={product} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </ProductsContainer>
      </GeneralContainer>
    </>
  );
};

export default Shop;
