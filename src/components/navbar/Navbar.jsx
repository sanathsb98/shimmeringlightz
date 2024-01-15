import React from 'react';
import '../navbar/Navbar.css';
import logo from '/src/images/logo.svg';

const Navbar = () => {
    return (
        <div className='navbar-space'>
            <div className='navbar-content'>
                <div className='navbar-left'>
                    <img className='shimmering-logo' src={logo} width='100px' height='100px' />
                </div>
                <div className='navbar-right'>
                    <div className='navbar-tab'>about</div>
                    <div className='navbar-tab'>services</div>
                    <div className='navbar-tab'>product</div>
                    <div className='navbar-tab'>contact</div>
                    <div className='burger-menu'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M6.25 20H33.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.25 10H33.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.25 30H33.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar