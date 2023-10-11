import { useEffect, useContext } from 'react';
import plus from '../../../assets/icons/plus.svg';
import minus from '../../../assets/icons/minus.svg';
import { CartContext } from '../CartContext';

export default function ProductContainer() {
  const { 
    products,
    counts, 
    handleCountMinu, 
    handleCountAdd, 
    handleTotalAmountChange 
  } = useContext(CartContext);

  // 計算單品總金額
  const calculateProductTotal = (product) =>{
    return product.price * (counts[product.id] || 0);
  };
  // 計算全部商品總金額
  const updateTotalAmount = () => {
    const newTotalAmount = products.reduce(
      (total, product) => total + calculateProductTotal(product),
      0
    );
    handleTotalAmountChange(newTotalAmount);
  };

  // 當商品數量或金額改變時，觸發更新全部商品總金額
  useEffect(() => {
    updateTotalAmount();
  },[counts, handleTotalAmountChange]);

  const productsList = products.map(product => (
    <div className='product-container col col-12"' key={product.id} id={product.id}>
      <img className='img-container' src={product.img}/>
      <div className='product-info'>
        <div className='product-name'>{product.name}</div>
        <div className='product-control-container'>
          <div className="product-control">
            <img className="product-action minus" onClick={() => handleCountMinu(product.id)} src={minus} />
            <span className="product-count">{counts[product.id] || 0}</span>
            <img className="product-action minus" onClick={() => handleCountAdd(product.id)} src={plus} />
          </div>
        </div>
        <div className='price'>${calculateProductTotal(product)}</div>
      </div>
    </div>
  ));
  

  return (
    <>
    {productsList}
    </>
  )
}