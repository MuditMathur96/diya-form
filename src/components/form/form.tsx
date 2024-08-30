import React, { ReactNode } from 'react'



function Form({children,...props}: any) {
  return (
    <div 
    className='w-full flex justify-center p-2'>
        <form
        className='w-full max-w-[600px]
        flex flex-col items-center 
        gap-2'
        {...props}>
            {children}
        </form>
    </div>
  )
}

export default Form