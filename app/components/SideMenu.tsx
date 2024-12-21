'use client'
import { SlArrowDown } from 'react-icons/sl'
import { IoHomeSharp } from 'react-icons/io5'
import { AiOutlineProduct } from 'react-icons/ai'
import { MdPeopleOutline } from 'react-icons/md'
import { AiOutlineShop } from 'react-icons/ai'
import { GiMoneyStack } from 'react-icons/gi'
import { FcAdvertising } from 'react-icons/fc'
import { CiSettings } from 'react-icons/ci'
import { IoIosLogOut } from 'react-icons/io'

interface SideMenuProps {
  onMenuClick: (menu: string) => void
  active: string
}
export default function SideMenu ({ onMenuClick, active }: SideMenuProps) {
  // the menu items
  return (
    <div className='_'>
      <ul>
        <li
          onClick={() => onMenuClick('home')}
          className={`${active === 'home' ? 'active' : ''}`}
        >
          <div className='displayIcon'>
            <IoHomeSharp className='w-10 h-10' />
          </div>
          <div className='menu'>
            <span>Home</span>
            <span className='dropDownIcon'>
              <SlArrowDown />
            </span>
          </div>
        </li>
        <li
          onClick={() => onMenuClick('products')}
          className={`${active === 'products' ? 'active' : ''}`}
        >
          <div className='displayIcon'>
            <AiOutlineProduct className='w-10 h-10' />
          </div>
          <div className='menu'>
            <span>Products</span>
            <span className='dropDownIcon'>
              <SlArrowDown />
            </span>
          </div>
        </li>
        <li
          onClick={() => onMenuClick('customers')}
          className={`${active === 'customers' ? 'active' : ''}`}
        >
          <div className='displayIcon'>
            <MdPeopleOutline className='w-10 h-10' />
          </div>
          <div className='menu'>
            <span>Customers</span>
            <span className='dropDownIcon'>
              <SlArrowDown />
            </span>
          </div>
        </li>
        <li
          onClick={() => onMenuClick('shop')}
          className={`${active === 'shop' ? 'active' : ''}`}
        >
          <div className='displayIcon'>
            <AiOutlineShop className='w-10 h-10' />
          </div>
          <div className='menu'>
            <span>Shop</span>
            <span className='dropDownIcon'>
              <SlArrowDown />
            </span>
          </div>
        </li>
        <li
          onClick={() => onMenuClick('income')}
          className={`${active === 'income' ? 'active' : ''}`}
        >
          <div className='displayIcon'>
            <GiMoneyStack className='w-10 h-10' />
          </div>
          <div className='menu'>
            <span>Income</span>
            <span className='dropDownIcon'>
              <SlArrowDown />
            </span>
          </div>
        </li>
        <li
          onClick={() => onMenuClick('promote')}
          className={`${active === 'promote' ? 'active' : ''}`}
        >
          <div className='displayIcon'>
            <FcAdvertising className='w-10 h-10' />
          </div>
          <div className='menu'>
            <span>Promote</span>
            <span className='dropDownIcon'>
              <SlArrowDown />
            </span>
          </div>
        </li>
      </ul>

      <span className='border-[#000000] mx-auto border w-[60%]'></span>
      <ul>
        <li
          onClick={() => onMenuClick('settings')}
          className={`${active === 'settings' ? 'active' : ''}`}
        >
          <div className='displayIcon'>
            <CiSettings className='w-10 h-10' />
          </div>
          <div className='menu'>
            <span>Settings</span>
            <span className='dropDownIcon'>
              <SlArrowDown />
            </span>
          </div>
        </li>
        <li
          onClick={() => onMenuClick('log-out')}
          className={`${active === 'log-out' ? 'active' : ''}`}
        >
          <div className='displayIcon'>
            <IoIosLogOut className='w-10 h-10' />
          </div>
          <div className='menu'>
            <span>Log out</span>
            <span className='dropDownIcon'>
              <SlArrowDown />
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}
