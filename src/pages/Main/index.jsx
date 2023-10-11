import Register from '../Register';
import Cart from '../Cart';
import { CartProvider } from '../Cart/CartContext'

export default function Main(){
  return (
    <main className='site-main'>
      <div className='main-container'>
        <section className='register-container col col-lg-6 col-sm-12'>
          <h2 className='register-title col col-12'>結帳</h2>
          <Register />
        </section>
        <CartProvider>
          <Cart />
        </CartProvider>
      </div>
    </main>
  )
}