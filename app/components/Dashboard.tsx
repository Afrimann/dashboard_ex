import React from 'react'
import Overview from './Overview'
import ProductEarningCard from './ProductEarningsCard'

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className='font-bold text-[35px]'>Dashboard</h1>
      <div className='wrapper'>
        <div className='first-col'>
          <div className='overview'>
            <Overview />
          </div>
          <div className='chart'></div>
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
                  <h2 className='mb-3 font-semibold text-[#868686]'>Messages</h2>
                  <h2 className='font-semibold text-[#868686]'>Date</h2>
                </span>
                <div className='w-full comments'>
                  <p className='mx-auto max-w-[60%] font-semibold text-[#86868652] text-center italic'>
                    you don't have any comment yet.
                  </p>
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
