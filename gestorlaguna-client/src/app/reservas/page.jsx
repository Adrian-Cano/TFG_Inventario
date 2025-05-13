"use client";
import React from 'react'
import { useEffect } from 'react';
import { useLayout } from "../layout.js";

function reservas() {
  const { sideBarHidden, setSideBarHidden } = useLayout();
  
      useEffect (() => {
          setSideBarHidden(false);
      }, []);
  
  return (
    <div className='w-full h-full bg-gray-200'>
      <p className='text-blue-500 p-8 text-2xl'>Tus reservas:</p>
      
      <div className='ml-8 pb-5'>
        <div className='bg-white rounded-xl w-90 h-90 mb-4 border border-gray-400 flex flex-col p-7 justify-between'>

          <div className='bg-white rounded-xl w-full border border-gray-300 p-2'>
            <p className='text-center'>Salón de actos / (9:10 - 10:05)</p>
          </div>

          <div className='bg-white rounded-xl w-full border border-gray-300 p-2'>
            <p className='text-center'>Otra reserva...</p>
          </div>

          <div className='bg-white rounded-xl w-full border border-gray-300 p-2'>
            <p className='text-center'>Otra reserva...</p>
          </div>

          <div className='bg-blue-500 text-white rounded-xl w-full border p-2'>
            <a className='text-center block' href='#'>Ver historial de reservas</a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default reservas