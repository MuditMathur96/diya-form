import React from 'react';
import { InputProps } from '../../types';




function FormInput({error,...props}: InputProps) {
  return (
    <div
    className='flex flex-col w-full'
    >
        <input
        className='p-2 rounded-md' 
        {...props}
        />
    </div>
  )
}

export default FormInput