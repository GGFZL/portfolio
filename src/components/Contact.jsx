import React from 'react'

const Contact = () => {
  return (
    <div id = "contact" className='bg-matBlack text-myColorDarker2 w-full p-4 pt-16'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

            <div className='pb-8 flex justify-center flex-col items-center'>
                <p className='text-4xl border-b-4 border-myColorDarker1 pb-2 inline'>Contact</p>
                <p className='py-4 text-2xl'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/zaxdpwda" method="POST" className='flex flex-col w-full md:w-3/4'>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    className='p-2 bg-transparent border-2 border-myColorDarker2 rounded:md text-myColor focus:outline-none' 
                    />
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="Enter your email" 
                    className='my-4 p-2 bg-transparent border-2 border-myColorDarker2 rounded:md text-myColor focus:outline-none' 
                    />
                    <textarea 
                    name="message" 
                    rows="10"
                    placeholder='Enter your message'
                    className='p-2 bg-transparent border-2 border-myColorDarker2 rounded-md text-myColor focus:outline-none'>
                    </textarea>
                    <button className='bg-gradient-to-r from-myColorDarker3 via-myColor to-myColorDarker3 text-black transition hover:bg-gradient-to-r hover:from-myColorDarker3 hover:to-myColorDarker3 px-6 py-3 my-8 mx-auto flex items-center rounded-md'>Submit</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Contact