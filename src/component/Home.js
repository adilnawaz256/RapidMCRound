import React from 'react'
import Dashboard from '../page/Dashboard'
import Timesheet from '../page/Timesheet'

const Home = () => {
  return (
    <div className='home'>
    <Dashboard/>
    <Timesheet/>
    </div>
  )
}

export default Home