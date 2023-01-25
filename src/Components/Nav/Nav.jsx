// Components & Assets
import Logo from '../../assets/react-logo.png'
import { Link, NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="navigation-bar">
      <Link to='/' id="logo"> <img src='/logo192.png' alt=""/> </Link>
      <Link to='/burgers' > BURGER SHOP </Link>
    </nav>
  )
}

export default Nav