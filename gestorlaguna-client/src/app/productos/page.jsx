import React from 'react'

function productos() {
  return (
    <div className='w-full h-full bg-gray-200'>
        <div className='justify-center p-5'>
            <h1 className='text-blue-500 text-center text-xl font-bold'>Material prestable</h1>
        </div>

        <div className='flex p-10 justify-around'>

            <div className='w-max h-max justify-center'>
                <div className='bg-gray-300 rounded-xl w-70 pb-3 mb-4'>
                    <p className='text-center p-10'>Foto del producto</p>
                    <div className='bg-gray-400 mb-2'>
                        <p className='text-center p-2'>Nombre del producto</p>
                    </div>
                </div>
                <div className='bg-white rounded-lg border border-gray-300 w-full p-0.5'>
                    <a className='block text-center' href='#'>Detalles</a>
                </div>
                <div className='bg-blue-500 rounded-lg border border-gray-300 w-full mt-3 p-0.5'>
                    <a className='block text-center text-white' href='#'>Realizar préstamo</a>
                </div>
            </div>

            <div className='w-max h-max justify-center'>
                <div className='bg-gray-300 rounded-xl w-70 pb-3 mb-4'>
                    <p className='text-center p-10'>Foto del producto</p>
                    <div className='bg-gray-400 mb-2'>
                        <p className='text-center p-2'>Nombre del producto</p>
                    </div>
                </div>
                <div className='bg-white rounded-lg border border-gray-300 w-full p-0.5'>
                    <a className='block text-center' href='#'>Detalles</a>
                </div>
                <div className='bg-blue-500 rounded-lg border border-gray-300 w-full mt-3 p-0.5'>
                    <a className='block text-center text-white' href='#'>Realizar préstamo</a>
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default productos