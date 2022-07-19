const InputControl = ({ label, ...props }) => {

  return (
    <div className='flex flex-col w-full '>

      {
        label &&
        <label htmlFor="" className='font-bold text-xl'> {label} </label>
      }

      <input
        type="text"
        {...props} // this props take place - as a placeholder - for all other necessary attributes 
        className='w-full px-3 py-2 text-xl border rounded outline-none
        border-gray-400 
        hover:border-gray-600 
        focus:border-custom-blue'
      />

    </div>
  )
}

export default InputControl