
import React from 'react'
import Header from './Header'
import Boxes from './Boxes'
import SearchTimesheet from './SearchTimesheet'

const Timesheet = () => {
  return (
    <div className='timesheet'>
        <Header/>
        <Boxes/>
        <SearchTimesheet/>
    </div>
  )
}

export default Timesheet