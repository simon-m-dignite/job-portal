import React from 'react'

const CommonHeader = ({title}) => {
  return (
    <div className='w-full common-header flex items-center justify-center'>
      <h1 className='text-3xl text-white font-medium'>{title}</h1>
    </div>
  )
}

export default CommonHeader
