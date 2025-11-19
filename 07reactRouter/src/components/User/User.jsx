import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
  const {userid} = useParams()
  return (
    <div className='text-white text-lg font-semi-bold bg-gray-700 py-2'>User: {userid}</div>
  )
}

export default User