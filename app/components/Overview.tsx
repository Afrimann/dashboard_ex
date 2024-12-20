'use client'

import userImages from '@/constants'
import { SlArrowDown } from 'react-icons/sl'
import Image from 'next/image'
import { useState } from 'react'

const Overview = () => {
  // this component is the content for the overview section of the dashboard
  const [isClicked, setIsCLicked] = useState(false)

  return (
    <div className='overview-container'>
      <div className='overview-heading'>
        <h1 className='text-[22px] text-black'>Overview</h1>
        <div className='relative flex items-center gap-3 bg-[#EFEFEF] p-0 rounded-lg overview-filter w-[130px] cursor-pointer'>
          {/* change this select usage to a normal div for flexibility */}
          <select
            name='filter'
            id='filter'
            className='p-2 w-full h-full'
            style={{
              appearance: 'none',
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#868686',
              zIndex: '100'
            }}
            // onClick={()=> setIsCLicked(true)}
            // onFocus={()=> setIsCLicked(true)}
            // onBlur={()=> setIsCLicked(false)}
          >
            <option value='all time' className=''>
              All time
            </option>
            <option value='month'>January</option>
            <option value='month'>February</option>
          </select>
          <label htmlFor='filter' style={{ zIndex: '10', cursor: 'pointer' }}>
            <SlArrowDown
              className={`top-[50%] right-2 absolute transform -translate-y-[50%] focus:rotate-180`}
            />
          </label>
        </div>
      </div>
      <div className='overview-content'>
        <div className='revenue-display'>
          <div className='company-customer'>
            <div>
              <h2 className='font-semibold text-[14px] text-black'>
                Customers
              </h2>
              <p className='bg-[#D6FFD0] px-3 rounded-full text-[#38CE20] text-[14px]'>
                8%
              </p>
            </div>
            <div>
              <h2 className='font-bold text-[25px]'>10.382</h2>
            </div>
          </div>
          <div className='revenue-income'>
            <div>
              <h1 className='font-semibold text-[14px] text-black'>Income</h1>
              <p className='bg-white px-3 rounded-full text-[14px] text-black'>
                3%
              </p>
            </div>
            <div className='font-bold text-[25px]'>$1,384,328.00</div>
          </div>
        </div>
        <div className='people'>
          <div className='people-heading'>
            <h2 className='text-[12px] text-black'>
              Welcome to our new{' '}
              <span className='font-bold'>online experience</span>
            </h2>

            <div className='people-display'>
              {userImages.map(user => (
                <div key={user.id} className='people-image'>
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={50}
                    height={50}
                    className='rounded-full'
                  />
                  <span className='text-[13px]'>{user.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
