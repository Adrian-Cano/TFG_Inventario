"use client";
import React, { useState } from 'react'
import { useEffect} from 'react';
import { useLayout } from "../layout.js";


function productos() {

    
    const { sideBarHidden, setSideBarHidden } = useLayout();
    
        useEffect (() => {
            setSideBarHidden(false);
        }, []);
    
    const [ detallesAbierto, setDetallesAbierto ] = useState(false);
    const [ realizarPrestamoAbierto, setRealizarPrestamoAbierto ] = useState(false); 

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
                <button className='bg-white rounded-lg border border-gray-300 w-full p-0.5' onClick={() => setDetallesAbierto(true)}>Detalles</button>
                <button className='bg-blue-500 rounded-lg border border-gray-300 w-full mt-3 p-0.5 text-white' onClick={() => setRealizarPrestamoAbierto(true)}>Realizar préstamo</button> 
            </div>

            <div className='w-max h-max justify-center'>
                <div className='bg-gray-300 rounded-xl w-70 pb-3 mb-4'>
                    <p className='text-center p-10'>Foto del producto</p>
                    <div className='bg-gray-400 mb-2'>
                        <p className='text-center p-2'>Nombre del producto</p>
                    </div>
                </div>
                <button className='bg-white rounded-lg border border-gray-300 w-full p-0.5'>Detalles</button>
                <button className='bg-blue-500 rounded-lg border border-gray-300 w-full mt-3 p-0.5 text-white'>Realizar préstamo</button>  
            </div>
            
        </div>



        {/* DETALLES DE PRODUCTO */}

        {detallesAbierto && (
            <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                <div className='bg-white p-5 rounded-lg flex flex-col justify-center'>
                    <h2 className='text-blue-500 font-bold text-xl p-4 text-center'>Detalles del producto</h2>
                    <hr />
                    <div className='p-4'>
                        <p>ID del producto: 1</p>
                        <p>Nombre: blabla</p>
                        <p>Descripción detallada: dfghjkl,mnbvcdcvbnm,.mnbvcdvbnm,.,mnbvcvbnm,.,mnbvc</p>
                    </div>
                    <button className='rounded-lg border border-gray-300 p-5' onClick={() => setDetallesAbierto(false)}>Cerrar</button>
                </div>
            </div>
        )}


        {/* REALIZAR PRÉSTAMO */}

        {realizarPrestamoAbierto && (
            <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                <div className='bg-white p-5 rounded-lg flex flex-col justify-center'>
                    <h2 className='text-blue-500 font-bold text-xl p-4 text-center'>¿Desea realizar el préstamo?</h2>
                    <div className='p-4'>
                        <p className='text-center text-blue-500 text-lg'>Está a punto de registrar el préstamo del siguiente producto: </p> <br />
                        <p className='text-center'>Nombre: blabla</p>
                        <p className='text-center'>Descripción detallada: dfghjkl,mnbvcdcvbnm,.mnbvcdvbnm,.,mnbvcvbnm,.,mnbvc</p>
                    </div>
                    <br />
                    <p className='text-blue-500 text-lg'>Escriba la descripción del préstamo con toda la información del mismo (motivo, alumno, etc...)</p>
                    <textarea className='border border-gray-200 m-5 rounded-xl p-3'></textarea>
                    <button className='rounded-lg border border-gray-300 p-5' onClick={() => setRealizarPrestamoAbierto(false)}>Cancelar</button>
                    <button className='rounded-lg border border-gray-300 p-5 mt-2 bg-blue-500 text-white' onClick={() => setRealizarPrestamoAbierto(false)}>Realizar préstamo</button>
                </div>
            </div>
        )}


    </div>
  )
}

export default productos