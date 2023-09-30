import { navItems } from '../../../data'

export default function NavList() {
  let liNavItem = navItems.map(item => (
    <li className='nav-item' key={item.id}>
      <a className='nav-link' href='#'>{item.name}</a>
    </li>
  ))
  return (
    <ul className='nav-list site-menu-list mr-auto'>
      {liNavItem}
    </ul>
  )
}