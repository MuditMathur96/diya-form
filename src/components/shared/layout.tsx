import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

function Layout({children}: Props) {
  return (
    <div
    className='h-screen w-screen
    flex flex-col gap-4 
    '>
        
            <nav
            className='
            flex items-center justify-center
            border h-16 bg-slate-100 w-full'
            >
               <p
               className='
               bg-clip-text
               bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400
               font-bold text-xl'
               >FireForm</p> 
            </nav>
       
        <div 
        className='w-full h-[calc(100vh-64px)]'
        >
            {children}
        </div>
    </div>
  )
}

export default Layout