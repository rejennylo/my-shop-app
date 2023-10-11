import { useContext } from 'react';
import CartInfo from './components/CartInfo';
import ProductContainer from './components/ProductContainer';
import { CartContext } from './CartContext';

export default function Cart() {
  const { totalAmount } = useContext(CartContext);

  return (
    <section className='cart-container col col-lg-5 col-sm-12'>
      <h3 className='cart-title'>購物籃</h3>
      <section className='product-list col col-12"'>
        <ProductContainer />
      </section>
      <CartInfo classN='shipping' text='運費' price='免運'/>
      <CartInfo classN='total' text='小計' price={'$' + totalAmount}/>
    </section>
  )
}