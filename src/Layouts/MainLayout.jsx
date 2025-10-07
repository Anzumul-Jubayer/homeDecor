import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar/>
            <div className='flex-1 max-w-screen-3xl mx-auto w-full px-4 lg:px-16 bg-gray-100'><Outlet></Outlet></div>
            <Footer/>
        </div>
    );
};

export default MainLayout;