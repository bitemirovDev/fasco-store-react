'use client';
import useCartDrawer from '@/store/useCartDrawer';

// components
import MiniCartHeader from './CartDrawerHeader/CartDrawerHeader';
import MiniCartFooter from './CartDrawerFooter/CartDrawerFooter';
import MiniCartItemsList from './CartDrawerItemsList/CartDrawerItemsList';
import { Drawer } from '@mui/material';

// styles
import styles from './CartDrawer.module.scss';

export default function CartDrawer() {
  const cartDrawer = useCartDrawer();

  return (
    <Drawer
      open={cartDrawer.isOpen}
      anchor="right"
      onClose={cartDrawer.close}
      sx={{ transform: 'none' }}>
      <div className={styles['mini-shopping-cart']}>
        <MiniCartHeader />
        <MiniCartItemsList />
        <MiniCartFooter />
      </div>
    </Drawer>
  );
}
