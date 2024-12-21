'use client'
import React, { useEffect, useState } from 'react'
import { Header } from './components'
import SideMenu from './components/SideMenu'

import DynamicContent from './components/DynamicContent'

export default function Page () {
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
    <div className='w-full min-h-screen md:min-h-auto md:overflow-hidden overflow-x-hidden overflow-y-visible'>
      <Header showSideMenu={showSideMenu} />
      <main className='flex mainContent'>
        <div
          className={`fixed top-[6rem] left-0 h-screen bg-white w-[100%] md:w-[28%] transition-transform transform ${
            sideMenuVisible ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 z-[1000]`}
        >
          <SideMenu onMenuClick={handleMenuClick} active={active} />
        </div>
        <div className='flex-1 md:ml-[28%] contentArea'>
          <DynamicContent selectedMenu={selectedMenu} />
        </div>
      </main>
    </div>
  )
}
