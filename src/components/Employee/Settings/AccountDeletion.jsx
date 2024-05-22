import React from 'react'
import { styles } from '../../../styles/styles'

const AccountDeletion = () => {
  return (
    <div className={`${styles.paddingHorizontal} w-full pb-12`}>
      <div className="w-full border rounded-lg p-6 flex flex-col gap-3">
      <h1 className="text-lg font-semibold text-red-600">Delete Account :</h1>
      <p className="text-sm text-gray-500">Do you want to delete this account?</p>
      <div>
        <button className="px-4 py-2 rounded-lg text-white font-medium bg-red-600">Delete</button>
      </div>
      </div>
    </div>
  )
}

export default AccountDeletion
