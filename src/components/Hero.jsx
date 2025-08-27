import React from 'react'
import FotoPessoal from '../assets/AdobeExpress.png'
import { ButtonPrimary, ButtonOutline } from './Button'
import FotoPequena from '../assets/isaiasChatGPT.png'
import Curriculo from '../assets/public/curriculo/curriculo-isaias-BACKEND.pdf'


const Hero = () => {
  return (
    <section 
        id='home'
        className='pt-28 lg:pt-32'
    >
        <div className='container lg:grid lg:grid-cols-2 
        items-center lg:gap-10'>
            <div>
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img
                            src={FotoPequena}
                            width={40}
                            height={40}
                            alt='Isaías Ribeiro'
                            className='img-cover'
                        />
                    </figure>
                    
                    <div className="flex items-center gap-1.5
                     text-zinc-400 text-sm tracking-wide">
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 rounded-full  bg-emerald-400 animate-ping'></span>
                        </span>
                        Disponível para trabalho
                    </div>
                </div>

                <h1 className='lg:text-3xl font-extralight tracking-widest
                 text-gray-300 uppercase md:text-2x1'>
                   <span className='text-zinc-300'>ISAÍAS RIBEIRO</span>
                </h1>

                <h2 className='headline-1 max-w-[10ch] sm:max-w-[20ch]
                lg:max-w-[10ch] mt-8 mb-8 lg:mb-10 md:text-2xl'>
                    Transformando dados em soluções e ideias em realidade!
                </h2>

                <div className='flex justify-center mt-6 md:justify-start'>
                    <ButtonPrimary
                        href={Curriculo}
                        target='_blank'
                        label="Download CV"
                        icon="download"
                    />
                </div>
            </div>

            <div className='hidden lg:block'>
                <figure className='w-full max-w-[480px] ml-auto 
                bg-gradient-to-t via-sky-400/40 to-80% 
                rounded-[60px] overflow-hidden'>
                    <img
                        src={FotoPessoal}
                        width={656}
                        height={700} 
                        alt='Isaías Ribeiro'
                        className='w-full'
                    />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero