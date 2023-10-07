import { useState } from 'react';
import CartInfo from './components/CartInfo';
import ProductContainer from './components/ProductContainer';

export default function Cart() {
  // 商品數量
  const [counts,setCounts] = useState([])
  
  const handleCountAdd = (productId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: ( prevCounts[productId] || 0 ) + 1,
    }))
  };
  
  const handleCountMinu = (productId) => {
    if (counts[productId] > 0) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }))
    }
  };
  
  // 總金額
  const [totalAmount, setTotalAmount] = useState(0)

  // 當商品數量更新時，更新總金額
  const handleTotalAmountChange = (newTotalAmount) => {
    setTotalAmount(newTotalAmount);
  };

  return (
    <section className='cart-container col col-lg-5 col-sm-12'>
      <h3 className='cart-title'>購物籃</h3>
      <section className='product-list col col-12"'>
        <ProductContainer 
        counts={counts}
        handleCountMinu={handleCountMinu}
        handleCountAdd={handleCountAdd}
        handleTotalAmountChange={handleTotalAmountChange}
        />
      </section>
      <CartInfo classN='shipping' text='運費' price='免運'/>
      <CartInfo classN='total' text='小計' price={'$' + totalAmount}/>
    </section>
  )
};