import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/about'>About</NavLink>
       <NavLink to="/posts">Posts</NavLink>
       <NavLink to='./contact'>Contact Us</NavLink>
       <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;