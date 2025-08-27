import React from "react"
import { Briefcase, MapPin, Calendar, Linkedin } from "lucide-react"

export default function ExperienciaProfissional() {
  return (
    <section id="experience" className=" bg-[#0f0f11] min-h-screen text-white py-16 px-6 lg:pt-40 mb-30 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-2">
          EXPERIENCIA PROFISSIONAL
        </h2>
        <p className="text-center text-gray-400 mb-10 font-extralight">
          Minha jornada profissional e as experiencias que moldaram minha carreira
        </p>

        <div className="bg-zinc-800/50 rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-sky-600 p-6">
            <h3 className="text-xl font-bold">MINISTÉRIO DO MEIO AMBIENTE E MUDANÇA DO CLIMA</h3>
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

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#26262b] p-4 rounded-xl text-center">
                  <span className="block text-gray-300 font-bold">Power BI</span>
                    <p className="text-sm text-gray-400">Insights</p>
                </div>
                <div className="bg-[#26262b] p-4 rounded-xl text-center">
                  <span className="block text-gray-300 font-bold">PostegreSQL</span>
                    <p className="text-sm text-gray-400">Banco de Dados</p>
                  
                </div>

                <div className="bg-[#26262b] p-4 rounded-xl text-center">
                  <span className="block text-gray-300 font-bold">Figma</span>
                    <p className="text-sm text-gray-400">Design & Prototipagem</p>
                </div>

                <div className="bg-[#26262b] p-4 rounded-xl text-center">
                  <span className="block text-gray-300 font-bold">Excel</span>
                    <p className="text-sm text-gray-400">Análise de Dados</p>
                </div>
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