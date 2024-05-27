import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const PersonalInfo = () => {
  return (
    <div id="personalInfo" className='about w-full bg-matBlack pb-16'>

        <div className='max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full text-myColorDarker2'>
            <div className='flex flex-col md:flex-row justify-between items-center px-7'>

                <div className='mb-8 md:mb-0 sm:text-center md:text-start'>
                    <p className='text-4xl border-b-4 border-myColorDarker2 inline md:ml-0'>Additional Information</p>
                    <ul className='list-disc ml-7 mt-10 sm:text-start'>
                        <li className='text-2xl'>Education: Visoka ICT Skola Beograd</li>
                        <li className='text-2xl mt-4'>Email: <span className='text-myColorDarker2'>mladenbajkic1@gmail.com</span></li>
                    </ul>
                </div>

                <div className='md:mb-8 sm:mb-0 md:pr-5 sm:p-0'>
                    <p className='text-4xl border-b-4 border-myColorDarker1 inline'>Additional links</p>
                    <ul className='ml-5 mt-10 flex flex-row justify-around'>
                        <li className='text-2xl'><a target ="_blank" href="https://github.com/GGFZL"><FaGithub className='inline text-myColorDarker2 hover:text-myColor' size={42} /></a></li>
                        <li className='text-2xl'><a target ="_blank" href="https://www.linkedin.com/in/mladen-bajki%C4%87-b54359264/"><FaLinkedin className='inline text-myColorDarker2 hover:text-myColor' size={42} /></a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PersonalInfo;
