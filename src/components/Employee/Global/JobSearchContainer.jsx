import React from 'react'
import { styles } from '../../../styles/styles'
import { BiSolidShoppingBag } from 'react-icons/bi'
import { MdOutlineLocationOn } from 'react-icons/md'

const JobSearchContainer = () => {
  return (
    <div className="bg-white rounded-lg h-auto lg:h-20 flex items-center px-3 w-96 lg:w-[60%] shadow mx-auto">
    <div className="w-full grid grid-cols-1 lg:grid-cols-4">
      <div className="h-16 border-b lg:border-b-0 flex items-center justify-start gap-3 lg:border-r px-2">
        <BiSolidShoppingBag className={`${styles.textGreen} text-2xl`} />
        <input
          type="text"
          placeholder="Search by keywords"
          className="text-sm text-gray-400 bg-transparent font-normal outline-none w-full"
        />
      </div>
      <div className="h-16 border-b lg:border-b-0 flex items-center justify-start gap-3 lg:border-r px-2">
        <MdOutlineLocationOn className={`${styles.textGreen} text-2xl`} />
        <input
          type="text"
          placeholder="Pakistan"
          className="text-sm text-gray-400 bg-transparent font-normal outline-none w-full"
        />
      </div>
      <div className="h-16 border-b lg:border-b-0 flex items-center justify-start gap-3 lg:border-r px-2">
        <BiSolidShoppingBag className={`${styles.textGreen} text-2xl`} />
        <input
          type="text"
          placeholder="Full Time"
          className="text-sm text-gray-400 bg-transparent font-normal outline-none w-full"
        />
      </div>
      <div className="py-2 lg:py-0 flex items-center">
        <button className={`w-full h-[60px] ${styles.bgGreen} text-white`}>
          Search
        </button>
      </div>
    </div>
  </div>
  )
}

export default JobSearchContainer
