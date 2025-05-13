"use client";
import React from 'react'
import { useEffect } from 'react';
import { useLayout } from "../layout.js";



function Home() {

    const { sideBarHidden, setSideBarHidden } = useLayout();

    useEffect (() => {
        setSideBarHidden(false);
    }, []);

  return (
    <div className='w-full h-full bg-gray-200'>
        <p className='text-blue-500 p-8 text-2xl'>Tus prestamos:</p>

        <div className='ml-8'>
            <div className='bg-gray-300 rounded-xl w-80 pb-3 mb-4'>
                <p className='text-center p-10'>Foto del producto prestado</p>
                <div className='bg-gray-400 mb-2'>
                    <p className='text-center p-2'>Nombre del producto prestado</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <a href='#' className='text-blue-500 text-center pb-4'>Ver información del prestamo</a>
            </div>
        </div>


    </div>
  )
}

export default Home