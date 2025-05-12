"use client";

import React, { useState } from 'react'

function aulas() {

    const [mostrarModal, setMostrarModal] = useState(false);
    const horasCentro = ["8:15", "9:10", "10:05", "11:00", "11:25", "12:20", "13:15", "14:10"];

  return (
    <div className='w-full h-full bg-gray-200'>
        <div className='items-center p-5 w-full flex flex-col'>
            <p className='text-blue-500 text-center text-xl font-bold'>Reserva de aulas</p>
            <button className='p-5 rounded-xl bg-blue-500 text-white w-max mt-8' onClick={() => setMostrarModal(true)}>Reservar un aula</button>
        </div>

        <div className='w-full pl-8'>
            <p className='text-blue-500 font-bold'>Aulas ocupadas: </p>
        </div>

        <div className='flex flex-col justify-center p-8'>
            <div className='bg-white rounded-xl p-6 border border-gray-300 w-max border-r-8 border-r-red-600'>
                <p className='font-bold text-xs'>16/5/2025</p>
                <p className='font-bold pt-2'>Salón de actos / 9:25 - 10:05</p>
                <p className='text-xs text-gray-500 pt-4'>Nombre e inicial del primer apellido del profesor que ha reservado</p>
            </div>
        </div>


        {/* Modal */}
        {mostrarModal && (
            <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                <div className='bg-white rounded-xl p-9 shadow-lg w-max'>
                    <div className='text-center'>
                        <h2 className='text-xl text-blue-500 font-bold mb-4'>Formulario de reserva</h2>
                        <hr />
                    </div>
                    <div className='pt-5'>
                        <label>Fecha: </label>
                        <input type="date"/>
                    </div>
                    <div className='pt-5'>
                        <label>Hora a la que desea reservar: De </label>
                        <select>
                            <option value="">- Selecciona una hora -</option>
                            {horasCentro.map((hora, index) => (
                                <option key={index} value={hora}>
                                    {hora}
                                </option>
                            ))}
                        </select>
                        <label> a </label>
                        <select>
                            <option value="">- Selecciona una hora -</option>
                            {horasCentro.map((hora, index) => (
                                <option key={index} value={hora}>
                                    {hora}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='pt-5'>
                        <label>Aula que desea reservar: Desplegable con las aulas libres a la hora y día asignado</label>
                    </div>
                    <div className='flex p-3 items-center justify-center mt-8'>
                        <button className='bg-white border border-gray-400 rounded-xl p-4 m-6 text-center' onClick={() => {setMostrarModal(false)}}>Cerrar</button>
                        <button className='bg-blue-500 rounded-xl p-4 text-center text-white'>Reservar</button>                        
                    </div>
                </div>
            </div>
        )}

    </div>
  )
}

export default aulas