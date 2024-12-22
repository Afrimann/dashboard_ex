import React from 'react'
import Overview from './Overview'
import ProductEarningCard from './ProductEarningsCard'
import { SlArrowDown } from 'react-icons/sl'
import Image from 'next/image'
import Comments from './Comments'

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className='font-bold text-[35px]'>Dashboard</h1>
      <div className='wrapper'>
        <div className='first-col'>
          <div className='overview'>
            <Overview />
          </div>
          <div className='chart'>
            <div className='flex justify-between w-full'>
              <h2 className='font-semibold text-[20px]'>Total Income</h2>
              <SlArrowDown className='font-bold cursor-pointer' />
            </div>
            <div className='mt-3 charted-data'>
              <Image
                src='/chart.png'
                alt='chart'
                width={500}
                height={500} 
                className='object-contain'
              />
            </div>
          </div>
        </div>
        <div className='second-col'>
          <div className='sec-one'>
            <h1 className='font-semibold text-[25px]'>Popular Products</h1>
            <div className='product-earn'>
              <span className='flex justify-between'>
                <h2 className='font-semibold text-[#868686]'>Products</h2>
                <h2 className='font-semibold text-[#868686]'>Earnings</h2>
              </span>

              {/* top product display */}
              <div className='top-products'>
                <ProductEarningCard />
              </div>
            </div>
          </div>
          <div className='sec-two'>
            <h2 className='font-semibold text-[25px]'>Comments</h2>
            <div className=''>
              <div className='w-full'>
                <span className='flex justify-between border-[#EFEFEF] mt-4 border-b-2'>
                  <h2 className='mb-3 font-semibold text-[#868686]'>
                    Messages
                  </h2>
                  <h2 className='font-semibold text-[#868686]'>Date</h2>
                </span>
                <div className='w-full comments'>
                  <div className='mx-auto max-w-[60%] font-semibold text-[#86868652] text-center italic'>

                      <Comments />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
