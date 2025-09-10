import React from 'react'
import { ButtonPrimary } from './Button';
import Logo from '../assets/IsaiasR.png'


const Footer = () => {
  return (
    <footer className='section'>
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className='headline-1 mb-8 lg:max-w-[12ch] reveal-up'>
              Vamos trabalhar juntos hoje!
            </h2>

            <ButtonPrimary
              href="mailto:isaias02dev@gmail.com"
              label="Iniciar projeto"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a 
          href="/" 
          className="logo reveal-up"
          >
            <img
              src={Logo}
              width={40}
              height={40}
              alt='Logo'
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className='text-zinc-200'>Isaias Ribeiro S.de Sá</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer