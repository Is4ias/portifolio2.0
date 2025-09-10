import React from "react"
import { Briefcase, MapPin, Calendar, Linkedin } from "lucide-react"
import { FaFigma, FaFileExcel } from "react-icons/fa";  // Figma e Excel
import { SiPostgresql } from "react-icons/si";
import SkillCard from "./SkillCard";

export default function ExperienciaProfissional() {

  const skills = [
    {
      imgSrc: <FaFigma className="text-red-400 text-5xl animate-pulse" />,
      label: "Figma",
      desc: "Ferramenta de design UI/UX"
    },
    {
      imgSrc: <FaFileExcel className="text-green-600 text-5xl animate-pulse" />,
      label: "Excel",
      desc: "Planilhas e análise de dados"
    },
    {
      imgSrc: <SiPostgresql className="text-blue-500 text-5xl animate-pulse" />,
      label: "PostgreSQL",
      desc: "Banco de dados relacional"
    },
    {
      imgSrc: <FaFigma className="text-red-400 text-5xl animate-pulse" />,
      label: "Figma",
      desc: "Ferramenta de design UI/UX"
    },
  ]


  return (
    <section 
      id="experience" 
      className="container with-header bg-zinc-900 w-full min-h-screen text-white">
      <div className="max-w-6xl mx-auto md:pt-20">
          <h2 className="headline-2 text-2xl md:text-3xl font-bold mb-2">
            Experiência Profissional
          </h2>
          <p className="text-zinc-400 mb-10 font-extralight">
            Minha jornada profissional e as experiências que moldaram minha carreira
          </p>
        
        

        <div className="bg-zinc-800/40 rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-sky-600 p-6">
            <h3 className="text-xl font-extralight max-w-[22ch] md:max-w-[35ch]">MINISTÉRIO DO MEIO AMBIENTE E MUDANÇA DO CLIMA</h3>
            <p className="text-sm">Estágio em Desenvolvimento de Sistemas</p>
            <div className="flex gap-4 text-sm text-gray-300 mt-2">
              <div className="flex items-center gap-1">
                <Calendar/> 7 Meses de experiência
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} /> Brasília, DF
              </div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-sky-400">
                PRINCIPAIS RESPONSABILIDADES
              </h4>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">ETL e Processamento de Dados: </strong>{" "}
                  Extração, transformação e carga de dados ambientais para análises estratégicas
                </li>

                <li>
                  <strong className="text-white">Dashboards Interativos: </strong>{" "}
                  Desenvolvimento de painéis de controle para visualização de dados em tempo real
                </li>
                <li>
                  <strong className="text-white">Testes e Qualidade: </strong>
                  Implementação de testes de software e validação de dados para garantir qualidade
                </li>
                <li>
                  <strong className="text-while">Análise de Dados: </strong>{" "}
                  Análise estatística e visualização de dados ambientais para tomada de decisões
                </li>
                <li>
                  <strong className="text-while">Trabalho em equipe: </strong>
                  Colaboração em reuniões de equipe para alinhar entregas e compartilhar soluções
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sky-400">
                TECNOLOGIAS UTILIZADAS
              </h4>

              <div className="grid gap-3">
                {skills.map(({ imgSrc, label, desc}, index) => (
                  <SkillCard
                    key={index}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
                    classes="reveal-up"
                  />
                ))}

              </div>
              
              <div className="mt-6">
                <a 
                  target="_blank"
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7280589547514531840/" 
                  className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 
                  px-4 py-2 rounded-2xl text-white text-sm transition no-underline font-light"
                  >
                    <Linkedin size={16} /> Ver publicaçao no LinkedIn
                  </a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}