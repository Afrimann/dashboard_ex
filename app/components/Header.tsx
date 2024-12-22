'use client'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import { CustomButton } from '.'
import { FaHamburger } from 'react-icons/fa'

interface Props {
  showSideMenu: () => void
}
const Header = ({ showSideMenu }: Props) => {
  const createFunction = () => {
    console.log('create function disabled')
  }

  return (
    <header className='header'>
      <nav className='navbar'>
        <Image
          src='/logo.png'
          alt='logo'
          width={50}
          height={50}
          priority={true}
          objectFit='contain'
        />

        {/* search container */}
        <div className='search__container'>
          <div className='search'>
            <FaSearch />
            <span>Search</span>
          </div>
        </div>

        {/* account and user profile */}
        <div className='account'>
          <CustomButton
            text={`Create`}
            event={createFunction}
            styles='bg-[#00237C] text-white px-5 py-2 rounded-lg font-bold'
          />
          <Image
            src='/openicon.png'
            alt='open'
            width={20}
            height={20}
            objectFit='contain'
            priority={true}
          />
          <Image
            src='/editicon.png'
            alt='edit'
            width={20}
            height={20}
            objectFit='contain'
            priority={true}
          />

          {/* user profile picture */}
          {/* for now let's use a static profile image since i haven't figured out how to fetch the  image data. */}
          <Image
            src='/propic.png'
            alt='user profile'
            width={30}
            height={30}
            priority={true}
            objectFit='contain'
          />
        </div>
        <div
          className='sideMenuIcon'
          id='side-menu-icon'
          onClick={showSideMenu}
        >
          <FaHamburger className='w-8 h-8 cursor-pointer' />
        </div>
      </nav>
    </header>
  )
}

export default Header
