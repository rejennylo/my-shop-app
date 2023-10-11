import { useState, createContext } from 'react';
import { products } from '../../data';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  // 商品數量
  const [counts,setCounts] = useState([]);
  // 總金額
  const [totalAmount, setTotalAmount] = useState(0);

  // 商品數量增加
  const handleCountAdd = (productId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: ( prevCounts[productId] || 0 ) + 1,
    }));
  };

  // 商品數量減少
  const handleCountMinu = (productId) => {
    if (counts[productId] > 0) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };

  // 當商品數量更新時，更新總金額
  const handleTotalAmountChange = (newTotalAmount) => {
    setTotalAmount(newTotalAmount);
  };

  return (
    <CartContext.Provider value={{
      products,
      counts,
      totalAmount,
      handleCountAdd,
      handleCountMinu,
      handleTotalAmountChange
    }}>
      {children}
    </CartContext.Provider>
  )
}