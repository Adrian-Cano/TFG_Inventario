import React from 'react'

function Loader() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white z-50'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400'></div>
    </div>
  )
}

export default Loader