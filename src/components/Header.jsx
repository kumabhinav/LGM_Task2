import { Link } from 'react-router-dom';
import '../css/defaults.css';


function Header() {
  return (
    <header>
      <div className='container'>
        <Link to='/' className='brand'>
     Zippy
        </Link>
        <nav>
          <Link to='/users'>GET USERS</Link>
          <Link to='/users'>More info</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
