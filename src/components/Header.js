import React from 'react';
import { Link } from 'react-router-dom';
import FormPopup from './FormPopup';
function Header() {
    return (
        <div className="header">
            <header>
                <nav className='navbar'>
                    <div className='navbar_logo'>
                        <Link className='navbar_logo link' to={'/'}>Logotype</Link>
                    </div>
                    <ul className='navbar_menu'>
                        <li className='navbar_news'><Link className='link' to={'/news'}>Новости</Link></li>
                        
                        <li className='navbar_enter'>
                            <FormPopup/>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default Header;