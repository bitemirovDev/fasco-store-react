import styles from './CartDrawerItemsList.module.scss';
import CartDrawerItem from '../CartDrawerItem/CartDrawerItem';

export default function CartDrawerItemsList() {
  return (
    <div className={styles.list}>
      <CartDrawerItem
        id={1}
        img={'/img/products/aape-2/205915130-1-green.avif'}
        name={'Aape sdhgjjh skdjfhjkg ksdfhgk'}
        size={'M'}
        quantity={1}
        price={30}
      />
      <CartDrawerItem
        id={2}
        img={'/img/products/aape-3/205914431-1-white.avif'}
        name={'Aape h123h =djjghdjkfk'}
        size={'S'}
        quantity={3}
        price={83.2}
      />
    </div>
  );
}
