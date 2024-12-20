import React from 'react';
import Overview from './Overview';

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
          
          </div>
          <div className='sec-two'>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;