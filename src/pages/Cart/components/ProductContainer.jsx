import { products } from '../../../data'
import plus from '../../../assets/icons/plus.svg'
import minus from '../../../assets/icons/minus.svg'

export default function ProductContainer() {
  let productsList = products.map(product => (
    <div className='product-container col col-12"' key={product.id} id={product.id}>
      <img className='img-container' src={product.img}/>
      <div className='product-info'>
        <div className='product-name'>{product.name}</div>
        <div className='product-control-container'>
          <div className="product-control">
            <img className="product-action minus" src={minus} />
            <span className="product-count">{product.quantity}</span>
            <img className="product-action minus" src={plus} />
          </div>
        </div>
        <div className='price'>${product.price}</div>
      </div>
    </div>
  ))
  return (
    <>
    {productsList}
    </>
  )
}