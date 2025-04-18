// src/components/HeaderComponent.js
import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-dark bg-dark'>
                    <a className='navbar-brand' href='/'>
                        Student Management System
                    </a>
                </nav>
            </header>
        </div>
    );
};
export default HeaderComponent;