import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav 
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'navy', 
        padding: '10px'
      }}
    >
      <div style={{ color: 'white' }}>My Company</div>
      <div>
        <Link 
          to="/" 
          style={{ 
            margin: '0 10px', 
            color: 'white', 
            textDecoration: 'none' 
          }}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          style={{ 
            margin: '0 10px', 
            color: 'white', 
            textDecoration: 'none' 
          }}
        >
          About
        </Link>
        <Link 
          to="/services" 
          style={{ 
            margin: '0 10px', 
            color: 'white', 
            textDecoration: 'none' 
          }}
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          style={{ 
            margin: '0 10px', 
            color: 'white', 
            textDecoration: 'none' 
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
