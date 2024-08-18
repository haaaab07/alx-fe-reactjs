import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
      <Link to="/" style={{ color: 'white', margin: '0 15px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 15px' }}>About</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 15px' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 15px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
