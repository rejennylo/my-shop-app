import search from '../../../assets/icons/search.svg';
import cart from '../../../assets/icons/cart.svg';
import moon from '../../../assets/icons/moon.svg';

export default function NavIcons() {
  return (
    <ul className='nav-list site-action-list'>
      <li className='nav-item'>
        <img src={search} className='nav-icon cursor-point' alt='search' />
      </li>
      <li className='nav-item'>
        <img src={cart} className='nav-icon cursor-point' alt='cart' />
      </li>
      <li className='nav-item'>
        <img src={moon} className='nav-icon cursor-point' alt='moon' />
      </li>
    </ul>
  )
}