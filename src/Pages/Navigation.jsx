import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <nav className='navigation'>
                <ul>
                    <li><Link to="/">Tarik Saatli</Link></li>

                    <div className='nav-info'>
                        <li>Currently available for <br /> internship</li>
                        <li>Based in Den Haag <br />Netherlands</li>
                    </div>
                    <div className='nav-links'>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </div>

                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Navigation;