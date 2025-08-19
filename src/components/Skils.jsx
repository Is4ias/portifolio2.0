import React from 'react'
import SkillCard from './SkillCard';

// Importando todas as imagens da pasta src/assets/images
import Python from '../assets/images/python.svg';
import Django from '../assets/images/django.svg';
import CSS3 from '../assets/images/css3.png';
import JavaScript from '../assets/images/js.png'; // <-- Adicionado
import TailwindCSS from '../assets/images/tailwindcss.svg';
import ReactJS from '../assets/images/react.svg';
import ReactNative from '../assets/images/react-native.svg';
import Figma from '../assets/images/figma.png';

const skillItem = [
  {
    imgSrc: Python,
    label: 'Python',
    desc: 'Linguagem'
  },
  {
    imgSrc: Django,
    label: 'Django',
    desc: 'Python Framework'
  },
  {
    imgSrc: CSS3,
    label: 'CSS',
    desc: 'Linguagem de estilização'
  },
  {
    imgSrc: JavaScript,
    label: 'JavaScript',
    desc: 'Linguagem'
  },
  {
    imgSrc: ReactJS,
    label: 'React',
    desc: 'Biblioteca JS'
  },
  {
    imgSrc: ReactNative,
    label: 'React Native',
    desc: 'Framework JS'
  },
  {
    imgSrc: TailwindCSS,
    label: 'TailwindCSS',
    desc: 'Framework'
  },
  {
    imgSrc: Figma,
    label: 'Figma',
    desc: 'Ferramenta de design'
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Linguagens & Ferramentas</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Descubra as ferramentas e tecnologias poderosas que uso para criar sites e aplicativos.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, index) => (
            <SkillCard
              key={index}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
