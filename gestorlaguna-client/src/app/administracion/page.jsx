"use client";
import React from 'react'
import { useEffect } from 'react';
import { useLayout } from '../layout';

function page() {

    const { sideBarHidden, setSideBarHidden } = useLayout();
    
    useEffect (() => {
        setSideBarHidden(false);
    }, []);

  return (
    <div className='bg-gray-200 flex items-center flex-col'>
        
        <div className='m-8 flex flex-col justify-center w-full'>
            <div className='justify-center p-5'>
                <h2 className='font-bold text-blue-500 text-center'>GESTIÓN DE PROFESORES</h2>
            </div>
            <table className='justify-center bg-white'>
                <tr className='bg-blue-500 text-white'>
                    <td>ID</td>
                    <td>Nombre completo</td>
                    <td>Acciones</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Hola</td>
                    <td>
                        <div className='p-2 flex'>                       
                            <button className='bg-orange-400 rounded-xl p-2 text-white'>Modificar</button>
                            <button className='bg-red-500 rounded-xl p-2 text-white ml-3'>Eliminar</button>
                        </div>
                    </td>
                </tr>
            </table>
            <div className='justify-center flex p-2 w-full'>
                <button className='rounded-xl bg-blue-500 text-white p-3 w-4xl'>Agregar profesor</button>
            </div>
        </div>


        
        <div className='m-3 flex flex-col justify-center w-full'>
            <div className='justify-center p-5'>
                <h2 className='font-bold text-blue-500 text-center'>GESTIÓN DE AULAS</h2>
            </div>
            <table className='justify-center bg-white'>
                <tr className='bg-blue-500 text-white'>
                    <td>ID</td>
                    <td>Nombre</td>
                    <td>Ocupada</td>
                    <td>Identificador</td>
                    <td>Acciones</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>
                        <div className='p-2 flex'>                       
                            <button className='bg-orange-400 rounded-xl p-2 text-white'>Modificar</button>
                            <button className='bg-red-500 rounded-xl p-2 text-white ml-3'>Eliminar</button>
                        </div>
                    </td>
                </tr>
            </table>
            <div className='justify-center flex p-2 w-full'>
                <button className='rounded-xl bg-blue-500 text-white p-3 w-4xl'>Agregar aula</button>
            </div>
        </div>    

        
        <div className='m-3 flex flex-col justify-center w-full'>
            <div className='justify-center p-5'>
                <h2 className='font-bold text-blue-500 text-center'>GESTIÓN DE PRODUCTO</h2>
            </div>
            <table className='justify-center bg-white'>
                <tr className='bg-blue-500 text-white'>
                    <td>ID</td>
                    <td>Nombre</td>
                    <td>Descripción</td>
                    <td>Acciones</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>
                        <div className='p-2 flex'>                       
                            <button className='bg-orange-400 rounded-xl p-2 text-white'>Modificar</button>
                            <button className='bg-red-500 rounded-xl p-2 text-white ml-3'>Eliminar</button>
                        </div>
                    </td>
                </tr>
            </table>
            <div className='justify-center flex p-2 w-full'>
                <button className='rounded-xl bg-blue-500 text-white p-3 w-4xl'>Agregar producto</button>
            </div>
        </div>

        
        <div className='m-3 flex flex-col justify-center w-full'>
            <div className='justify-center p-5'>
                <h2 className='font-bold text-blue-500 text-center'>GESTIÓN DE PRÉSTAMO</h2>
            </div>
            <table className='justify-center bg-white'>
                <tr className='bg-blue-500 text-white'>
                    <td>ID</td>
                    <td>ID profesor</td>
                    <td>ID producto</td>
                    <td>Descripción</td>
                    <td>Fecha límite del prestamo</td>
                    <td>Fecha del préstamo</td>
                    <td>Acciones</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>
                        <div className='p-2 flex'>                       
                            <button className='bg-orange-400 rounded-xl p-2 text-white'>Modificar</button>
                            <button className='bg-red-500 rounded-xl p-2 text-white ml-3'>Eliminar</button>
                        </div>
                    </td>
                </tr>
            </table>
            <div className='justify-center flex p-2 w-full'>
                <button className='rounded-xl bg-blue-500 text-white p-3 w-4xl'>Agregar préstamo</button>
            </div>
        </div>

        
        <div className='m-3 flex flex-col justify-center w-full'>
            <div className='justify-center p-5'>
                <h2 className='font-bold text-blue-500 text-center'>GESTIÓN DE LA RESERVA</h2>
            </div>
            <table className='justify-center bg-white'>
                <tr className='bg-blue-500 text-white'>
                    <td>ID</td>
                    <td>ID profesor</td>
                    <td>ID aula</td>
                    <td>Fecha</td>
                    <td>Fecha de la reserva</td>
                    <td>Descripción</td>
                    <td>Acciones</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>
                        <div className='p-2 flex'>                       
                            <button className='bg-orange-400 rounded-xl p-2 text-white'>Modificar</button>
                            <button className='bg-red-500 rounded-xl p-2 text-white ml-3'>Eliminar</button>
                        </div>
                    </td>
                </tr>
            </table>
            <div className='justify-center flex p-2 w-full'>
                <button className='rounded-xl bg-blue-500 text-white p-3 w-4xl'>Agregar reserva</button>
            </div>
        </div>    
    </div>
  )
}

export default page