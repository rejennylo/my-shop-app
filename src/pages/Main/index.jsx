import Register from '../Register';
import Cart from '../Cart';
import { CartProvider } from '../Cart/CartContext';
import { FormProvider } from '../Register/FormDataContext';

export default function Main(){
  return (
    <FormProvider>
      <CartProvider>
        <main className='site-main'>
          <div className='main-container'>
            <section className='register-container col col-lg-6 col-sm-12'>
              <h2 className='register-title col col-12'>結帳</h2>
              <Register />
            </section>
              <Cart />
          </div>
        </main>
      </CartProvider>
    </FormProvider>
  )
}