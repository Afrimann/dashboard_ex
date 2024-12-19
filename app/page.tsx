'use client'
import React, { useEffect, useState } from 'react';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import { Header } from './components';
import SideMenu from './components/SideMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure correct imports
import DynamicContent from './components/DynamicContent';
import { session } from '@/utils';

export default function Page() {

  // const user = 'user'
  // manage active menu and dynamic rendering
  const [selectedMenu, setSelectedMenu] = useState('home')
  const [active, setActive] = useState('home')
  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu)
    setActive(menu)
    setSideMenuVisible(false)
  }
  // control sidebar visibility
  const [sideMenuVisible, setSideMenuVisible] = useState(false)

  // onresize, the sidebar should remain hidden
  useEffect(() => {
    setSideMenuVisible(false)
  }, [])
  const showSideMenu = () => setSideMenuVisible(!sideMenuVisible)

  return (
    <div className='h-screen w-full overflow-hidden'>
      <Header
        showSideMenu={showSideMenu}
      />
      <main className='mainContent flex'>
        <div className={`fixed top-0 left-0 h-full bg-white w-[100%] md:w-[28%] transition-transform transform ${sideMenuVisible ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative`}>

          <SideMenu
            onMenuClick={handleMenuClick}
            active={active}

          />
        </div>
        <div className='contentArea'>
          <DynamicContent
            selectedMenu={selectedMenu}
          />
        </div>
      </main>


    </div>
  );
}
