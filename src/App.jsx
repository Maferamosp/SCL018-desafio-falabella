import React from 'react';
import { Route, Routes } from "react-router-dom";
import AsideMenu from './components/layout_figma_imgs/AsideMenu';
import Profile from './components/Profile';
import AddEvent from './components/AddEvent';
import BasicInformation from './components/BasicInformation';
import HeaderPrimary from './components/layout_figma_imgs/HeaderPrimary';
import HeaderSecondary from './components/layout_figma_imgs/HeaderSecondary';
import MenuProfile from './components/layout_figma_imgs/MenuProfile';

const App = () => {
    return (
        <div className='container'>
            <HeaderPrimary />
            <HeaderSecondary />
            <MenuProfile />
            <AsideMenu />
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/basicInformation" element={<BasicInformation />} />
                <Route path="/addEvent" element={<AddEvent />} />
            </Routes>
        </div>
    );
}

export default App;
