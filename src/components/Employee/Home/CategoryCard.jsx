import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../../../styles/styles'
import { TiArrowRight } from 'react-icons/ti'

const CategoryCard = () => {
  return (
    <div className='bg-gray-100 py-6 flex flex-col items-center gap-y-3 rounded-lg group hover:bg-green-600 transition-all duration-300'>
      <h4 className='text-lg font-medium group-hover:text-white'>Human Resource</h4>
      <p className={`${styles.textSm}`}>90 Jobs Available</p>
      <Link to="/" className={`flex items-center text-green-600 group-hover:text-white`}>Explore Jobs <TiArrowRight className="text-xl"/></Link>
    </div>
  )
}

export default CategoryCard
