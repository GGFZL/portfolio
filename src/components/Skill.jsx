import React from 'react';
import html from '../assets/skillImages/html.png';
import css from '../assets/skillImages/css.png';
import javascript from '../assets/skillImages/javascript.png';
import tailwind from '../assets/skillImages/tailwind.png';
import react from '../assets/skillImages/react.png';
import php from '../assets/skillImages/php.png';
import csharp from '../assets/skillImages/csharp.png';
import mysql from '../assets/skillImages/mysql.png';
import github from '../assets/skillImages/github.png';

const Skill = () => {

    const skills = [
        {
            id : 1,
            src : html,
            title : 'html'
        },
        {
            id : 2,
            src : css,
            title : 'css'
        },
        {
            id : 3,
            src : javascript,
            title : 'javascript'
        },
        {
            id : 4,
            src : tailwind,
            title : 'tailwind'
        },
        {
            id : 5,
            src : react,
            title : 'react'
        },
        {
            id : 6,
            src : php,
            title : 'php'
        },
        {
            id : 7,
            src : csharp,
            title : 'csharp'
        },
        {
            id : 8,
            src : mysql,
            title : 'mysql'
        },
        {
            id : 9,
            src : github,
            title : 'github'
        }
    ]

  return (
    <div id = "skills" className='bg-matBlack w-full'>
        <div className='max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full text-myColorDarker2'>

            <div className='flex justify-center'>
                <p className='text-4xl border-b-4 border-myColorDarker1 pb-2 inline'>Skills</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    skills.map(({id,src,title}) => (
                        <div key={id} className='shadow-md shadow-myColor py-2 rounded-lg'>
                            <img src={src} alt={title} className='w-20 mx-auto ' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Skill