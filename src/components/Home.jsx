import React from 'react';
import MyImage from '../assets/images/myImage.jpg';

const Home = () => {
  return (
    <div id = "home" className='text-myColorDarker1 min-h-screen w-full bg-matBlack flex justify-center items-center'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center h-full pt-20'>
            <div className='flex flex-col h-full justify-center md:items-start items-center md:w-4/5 px-4'>
                <div className='w-full'>
                    <h2 className='font-bold text-5xl sm:text-5xl mb-5 md:mt-0 text-center md:text-start pt-7'>I'm Mladen Bajkić,</h2>
                </div>
                <p className='text-2xl text-center md:text-left py-3'>
                Enthusiastic software developer eager to expertise in full-stack development to dynamic projects. Committed to staying current with emerging technologies. I have a passion for continuous self-improvement and thrive on learning new skills and concepts. I enjoy challenging problems and working on innovative solutions, always aiming to expand my knowledge and capabilities.
                </p>
                <div className='text-center md:text-left mt-5'>
                    <a href="/Resume_Mladen_Bajkić.pdf" download>
                    <button className='w-fit py-3 px-6 flex rounded-full bg-gradient-to-r from-myColorDarker3 via-myColor to-myColorDarker3 text-black transition hover:bg-gradient-to-r hover:from-myColorDarker3 hover:to-myColorDarker3'>
                        Download Resume
                    </button>
                    </a>
                </div>
            </div>
            <div className='w-3/5 md:w-3/5 justify-center flex mt-5'>
                <img src={MyImage} alt="profile" className='rounded-2xl mx-auto md:mx-0 w-full lg:w-3/5 md:w-4/5 md:h-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Home;
