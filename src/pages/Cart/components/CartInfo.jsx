export default function CartInfo({classN, text, price}) {
  return (
    <section className={'cart-info ' + classN + ' col col-12'}>
      <div className='text'>{text}</div>
      <div className='price'>{price}</div>
    </section>
  )
}