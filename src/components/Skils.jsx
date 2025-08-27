import React from 'react'
import SkillCard from './SkillCard';

import { 
  FaPython, FaJs, FaReact, FaGithub, FaFigma, FaGitAlt
} from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiMysql, SiSqlite, SiCss3} from "react-icons/si";


const skillItem = [
  {
    imgSrc: <FaPython className="text-yellow-400 text-5xl animate-pulse" />,
    label: "Python",
    desc: "Linguagem"
  },
  {
    imgSrc: <SiDjango className="text-green-600 text-5xl animate-pulse" />,
    label: "Django",
    desc: "Python Framework"
  },
  {
    imgSrc: <FaJs className="text-yellow-400 text-5xl animate-pulse" />,
    label: "JavaScript",
    desc: "Linguagem"
  },
  {
    imgSrc: <FaReact className="text-cyan-400 text-5xl animate-pulse" />,
    label: "React",
    desc: "Biblioteca JS"
  },
  {
    imgSrc: <FaReact className="text-indigo-400 text-5xl animate-pulse" />,
    label: "React Native",
    desc: "Framework JS"
  },
  {
    imgSrc: <SiCss3 className="text-blue-400 text-5xl animate-pulse" />,
    label: "CSS",
    desc: "Estilização"
  },
  {
    imgSrc: <SiTailwindcss className="text-sky-400 text-5xl animate-pulse" />,
    label: "TailwindCSS",
    desc: "Framework"
  },
  {
    imgSrc: <SiMysql className="text-blue-400 text-5xl animate-pulse" />,
    label: "MySQL",
    desc: "Banco de dados"
  },
  {
    imgSrc: <SiSqlite className="text-gray-400 text-5xl animate-pulse" />,
    label: "SQLite",
    desc: "Banco de dados"
  },
  {
    imgSrc: <FaFigma className="text-pink-500 text-5xl animate-pulse" />,
    label: "Figma",
    desc: "Ferramenta de design"
  },
  {
    imgSrc: <FaGithub className="text-white text-5xl animate-pulse" />,
    label: "GitHub",
    desc: "Versionamento"
  },
  {
    imgSrc: <FaGitAlt className="text-white text-5xl animate-pulse" />,
    label: "Git",
    desc: "Versionamento"
  },
];

const Skills = () => {
  return (
    <section id="hardSkills" className="section">
      <div className="container lg:pt-10">
        <h2 className="headline-2">Linguagens & Ferramentas</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Descubra as ferramentas e tecnologias poderosas que uso para criar sites e aplicativos e sistemas.
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
