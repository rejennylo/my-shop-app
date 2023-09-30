import Header from './pages/Header';
import Register from './pages/Register';
import Cart from './pages/Cart';

export default function App() {
  return (
    <>
    <Header />
    <main className='site-main'>
      <div className='main-container'>
        <section className='register-container col col-lg-6 col-sm-12'>
          <h2 className='register-title col col-12'>結帳</h2>
          <Register />
        </section>
          <Cart />
      </div>
    </main>
    </>
  )
}
