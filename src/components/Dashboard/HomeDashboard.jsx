import React from 'react'
import NavigationBar from '../Navigation/NavigationBar'

export default function HomeDashboard() {
  return (
    <>
      <NavigationBar />
      <p>home dashboard</p>
      <div>
        <form className='product-input'>
          <div className='product-div'>
            <input placeholder='Product Name' />
            <input placeholder='Product Type' />
            <input placeholder='Product name' />
          </div>
        </form>
      </div>
    </>
  )
}
