import React from 'react'
import { styles } from '../../../styles/styles'

const Counts = () => {
  return (
    <div className={`w-full ${styles.paddingHorizontal} py-6 lg:py-12`}>
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-3 md:col-span-1 flex flex-col gap-y-2 items-center justify-center p-6">
            <h1 className='text-4xl font-semibold'>1548K+</h1>
            <p className={`${styles.textSm} uppercase`}>Job Fulfilment</p>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col gap-y-2 items-center justify-center p-6">
            <h1 className='text-4xl font-semibold'>25K+</h1>
            <p className={`${styles.textSm} uppercase`}>BRANCHES</p>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col gap-y-2 items-center justify-center p-6">
            <h1 className='text-4xl font-semibold'>9K+</h1>
            <p className={`${styles.textSm} uppercase`}>YEARS EXPERIENCE</p>
        </div>
      </div>
    </div>
  )
}

export default Counts
