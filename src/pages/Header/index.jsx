import NavList from './components/NavList';
import NavIcons from './components/NavIcons';
import logo from '../../assets/icons/logo.svg';

export default function Header() {
  return (
    <header className='site-header'>
      <div className='header-container mx-auto'>
        <nav className='navbar-menu'>
          <NavList />
          <NavIcons />
        </nav>
        <a className='header-logo-container'>
          <img src={logo} className='cursor-point' href='#' />
        </a>
      </div>
    </header>
  )
}