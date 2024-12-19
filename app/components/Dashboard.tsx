import React from 'react';
import Overview from './Overview';

const Dashboard: React.FC = () => {
  return (
    <div className='w-full h-full'>
      <h1 className='font-bold text-[35px]'>Dashboard</h1>
      <div className='wrapper'>
        <div className='first-col'>
          <div className='overview'>
            <Overview />
          </div>
          <div className='chart'></div>
        </div>
        <div className='second-col'></div>
      </div>

    </div>
  );
};

export default Dashboard;