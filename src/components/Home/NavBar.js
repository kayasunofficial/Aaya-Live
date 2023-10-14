import React from 'react';

export default function NavBar() {


    return (
        <>
            <div className='fixed-nav'>
                <section className='navbar'>
                    <div className='nav-menu'>
                        <img className='menu-icon' src="images/icons/menu.svg" alt="" />
                        <h1 className='logo'>Aaya</h1>
                    </div>
                    <div className="flex">
                        <i className="fa-regular fa-user"></i>
                        <i className="fa-brands fa-opencart"></i>
                    </div>
                </section>
                <div className="search">
                    <input type="text" placeholder='iphone 14 pro' />
                    <img className='search-icon' src="images/icons/search-icon.svg" alt="" />
                </div>
            </div>

        </>
    );
}
