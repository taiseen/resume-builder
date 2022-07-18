import React from 'react'

const InputControl = ({ label, ...props }) => {

  return (
    <div className='flex flex-col'>

      {
        label &&
        <label htmlFor="" className='font-bold text-xl'> {label} </label>
      }

      <input
        type="text"
        {...props}
        className='outline-none px-3 py-2 text-xl border border-gray-400 rounded hover:border-gray-600 focus:border-[#239CE2]'
      />

    </div>
  )
}

export default InputControl