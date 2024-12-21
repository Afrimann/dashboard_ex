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
          <div className='sec-two'></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
