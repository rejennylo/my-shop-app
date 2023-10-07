import Register from '../Register';
import Cart from '../Cart';

export default function Main(){
  return (
  <main className='site-main'>
    <div className='main-container'>
      <section className='register-container col col-lg-6 col-sm-12'>
        <h2 className='register-title col col-12'>結帳</h2>
        <Register />
      </section>
        <Cart />
    </div>
  </main>
  )
}