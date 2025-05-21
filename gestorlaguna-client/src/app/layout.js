"use client";

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import fotoPerfil from "../../public/img/fotoPerfil.jpg"
import laguna from "../../public/img/laguna.jpg"
import Image from "next/image";
import "../styles/global.css"
import { createContext, useContext, useState, useEffect } from "react";
import Loader from "../../components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LayoutContext = createContext(null);

export const useLayout = () => useContext(LayoutContext);

export default function RootLayout({ children }) {

  const [cargando, setCargando] = useState(true);
  const [sideBarHidden, setSideBarHidden] = useState(true);
  const [modalSesionAbierto, setModalSesionAbierto] = useState(false);

  function abrirCerrarModal() {
    if(modalSesionAbierto)
      setModalSesionAbierto(false);
    else
      setModalSesionAbierto(true);
  }

  useEffect(() => {
    const ocultarLoader = () => {
      setTimeout(() => setCargando(false), 500);
    };

    if (document.readyState === 'complete') {
      ocultarLoader();
    } else {
      window.addEventListener("load", ocultarLoader);
      return () => window.removeEventListener("load", ocultarLoader);
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >

        <LayoutContext.Provider value={{ sideBarHidden, setSideBarHidden }}>
          
          {!sideBarHidden ? (
            <>

        <div className="p-5 flex justify-end">
          <p className="text-xl text-blue-500 pr-5 pt-2">Nombre y apellido del profesor</p>
          <Image 
            src={fotoPerfil}
            alt="Foto de perfil"
            className="rounded-4xl border-2 border-blue-400"
            width={50}
            height={50}
            onClick={() => abrirCerrarModal()}
          />
          <ChevronDownIcon className=" ml-2 w-9 h-10 text-blue-500" onClick={() => abrirCerrarModal()}/>

          {modalSesionAbierto && (
            <button className="bg-white rounded-xl p-3 border border-gray-300 absolute top-20">Cerrar sesión</button>
          )}

        </div>

        <div className="fixed top-0 left-0 h-full bg-blue-500 w-60">

          <div className="justify-center mt-10">
            <h1 className="text-white text-center">IES Laguna de Joatzel</h1>
          </div>

          <div className="justify-center">
            <p className="text-white text-sm mt-20 text-center">¿Qué quieres hacer hoy?</p>
          </div>

          <div className="flex-col mt-5 justify-center">
            <div className="seccion">
              <a href="/home">Mis préstamos</a>
            </div>
            <div className="seccion">
              <a href="/reservas">Mis reservas</a>
            </div>
            <div className="seccion">
              <a href="/productos">Ver productos</a>
            </div>
            <div className="seccion">
              <a href="/aulas">Aulas</a>
            </div>
            <div className="seccion border-b-2 border-white">
              <a href="/administracion">Administración</a>
            </div>
          </div>

        </div>

        <div className="pl-60">
          {children}
        </div>

        <div className="pl-60 p-5 flex items-center justify-between">
          <div className="flex-1 text-center">
            <p className="text-gray-500 text-xs underline">Página hecha por Marcos Pedroche y Adrián Cano - 2025</p>
          </div>
          <div className="flex items-center">
            <Image 
              src={laguna}
              alt="Logotipo del IES Laguna de Joatzel"
              className=""
              width={100}
              height={100}
            />
            <p className="text-blue-500 text-xl">IES Laguna de Joatzel</p>
          </div>
        </div>
         </>
        ):(
          <>
          {cargando && <Loader />}
          {!cargando &&
            <div className="min-h-screen">
              {children}
            </div>
          }
          </>
        )}


        </LayoutContext.Provider>

      </body>
    </html>
    );
}

