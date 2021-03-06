/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import Item from '../../components/Item';
import Cart from '../../components/Cart';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';

import { FiSearch } from 'react-icons/fi';

import SideBarUser from '../../components/SiderBarUser';
import HeaderShop from '../../components/HeaderShop';

import { StyledButton, ProductsContainer, GeneralContainer, Form, Search } from './styles';

import api from '../../services/api';

export type CartItemType = {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
};

const Shop: React.FC = () => {
  const [search, setSearch] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState<CartItemType[]>();
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const storageProducts = localStorage.getItem('@Shop:cart');

    if (storageProducts) {
      return JSON.parse(storageProducts);
    }

    return [];
  });

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  // Contagem dos itens do carrinho
  const getTotalItems = (items: CartItemType[]) => items.reduce((confirm: number, item) => confirm + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // Verificar se o item já está adicionado ao carrinho?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) => (item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item));
      }
      // Primeira vez que o item é adicionado
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  useEffect(() => {
    localStorage.setItem('@Shop:cart', JSON.stringify(cartItems));
  }, [cartItems]);

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

  return (
    <>
      <HeaderShop />

      <Search>
        <Form onSubmit={() => {}}>
          <input type="text" placeholder="Buscar produto..." onChange={(event) => setSearch(event.target.value)} />
          <button type="submit">
            <FiSearch size={18} />
          </button>
        </Form>
      </Search>

      <GeneralContainer>
        <SideBarUser />
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error"></Badge>
        </StyledButton>

        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart
            setCartOpen={setCartOpen}
            setCartItems={setCartItems}
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>

        <ProductsContainer>
          {products
            ?.filter((product) => {
              if (search === '') {
                return product;
              } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
                return product;
              }
            })
            .map((product) => (
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
