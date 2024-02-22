import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1B4242] flex justify-center items-center pt-20 p-4'>
      <form method='POST' action='https://getform.io/f/17723c4e-4852-480f-be5d-1439bef2c83e' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-white text-[#9EC8B9]'>Contact</p>
          <p className='text-white py-4'>Submit the form below or reach me by email at kgarcia7814@gmail.com!</p>
        </div>
        <input className='bg-[#E0E7E9] p-2' type ='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#E0E7E9]' type ='email' placeholder='Email' name='email' />
        <textarea className='bg-[#E0E7E9] p-2' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#9EC8B9] hover:border-none hover:text-[#354649] font-bold px-4 py-3 my-8 mx-auto flex items-center'> Let's Connect!</button>
      </form>
    </div>
  )
}

export default Contact