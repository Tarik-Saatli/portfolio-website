import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='navigation'>
        <ul className='nav-container'>
          <li className='nav-logo'>
            <Link to='/'>Tarik Saatli</Link>
          </li>

          {/* Blijft zichtbaar */}
          <div className='nav-info'>
            <li>
              Currently available for <br /> internship
            </li>
            <li>
              Based in Den Haag <br />
              Netherlands
            </li>
          </div>

          {/* Hamburger */}
          <button className='nav-toggle' onClick={() => setOpen(!open)}>
            ☰
          </button>

          {/* Alleen deze wordt dropdown */}
          <div className={`nav-links ${open ? 'open' : ''}`}>
            <li>
              <Link to='/about' onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/projects' onClick={() => setOpen(false)}>
                Projects
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
