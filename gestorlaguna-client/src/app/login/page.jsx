import React from 'react'

function login() {
  return (
    <div className='w-full h-full bg-gray-200 flex justify-center'>
        <div className='bg-gray-100 rounded-xl border-2 border-blue-500 w-max justify-center p-7 z-50'>
            <h2 className='text-blue-500 text-center text-2xl font-bold'>Iniciar sesión</h2>
            <hr className='text-gray-400 mt-3'/>
            <br />
            <div className='w-full p-3'>
                <label>Correo electrónico: </label><br></br>
                <input type="text" className='p-2 border border-blue-400 rounded-xl bg-white mt-3 w-100'/>
            </div>
            <div className='w-full p-3'>
                <label>Contraseña: </label><br></br>
                <input type="password" className='p-2 border border-blue-400 rounded-xl bg-white mt-3 w-100'/>
            </div>
            <button className='bg-blue-500 rounded-xl p-2 mt-15 text-white text-center w-full'>Enviar</button>
        </div>
    </div>
  )
}

export default login