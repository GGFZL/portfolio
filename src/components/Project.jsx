import React from 'react';
import touche from '../assets/images/toucheJS.png';
import gym from '../assets/images/gymBootstrap.png';
import gameShop from '../assets/images/success-js-shop.png';
import mobileShop from '../assets/images/php.png';

const Project = () => {

    const projects = [
        {
            id: 1,
            src: touche,
            link : 'https://toucherestaurant.netlify.app/',
            gitLink : 'https://github.com/GGFZL/touche-restorant'
        },
        {
            id: 2,
            src: gym,
            link : 'https://distracted-kilby-aa3c89.netlify.app/',
            gitLink : 'https://github.com/GGFZL/gym-spirit'
        },
        {
            id: 3,
            src: gameShop,
            link : 'https://successgaming.netlify.app/',
            gitLink : 'https://github.com/GGFZL/success-gaming'
        },
        {
            id: 4,
            src: mobileShop,
            link : 'https://signal-sphere.000webhostapp.com/',
            gitLink : 'https://github.com/GGFZL/shop-phones'
        }
    ]

    return (
        <div id="projects" className='w-full bg-matBlack text-myColorDarker2'>
            <div className='max-w-7xl p-4 mx-auto flex flex-col justify-center w-full'>

                <div className='pb-8 mb-5 flex justify-center'>
                    <p className='text-4xl border-b-4 border-myColorDarker1 pb-2 inline'>Projects</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 sm:px-0'>
                    {
                        projects.map(({ id, src, link, gitLink}) => (
                            <div key={id} className='shadow-md shadow-myColor rounded-lg'>
                                <img 
                                    src={src}
                                    alt="projectImage" 
                                    className='rounded-md' />
                                <div className='flex items-center justify-center'>
                                <a 
                                    href={link}
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='w-1/2 px-6 py-3 m-3 hover:text-myColor text-center'>
                                    Visit
                                </a>
                                <a 
                                    href={gitLink}
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='w-1/2 px-6 py-3 m-3 hover:text-myColor text-center'>
                                    Code
                                </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;
