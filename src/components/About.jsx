const aboutItems = [
    {
        label: 'Projetos concluídos',
        number: 10
    },
    {
        label: 'Messes de Experiencia',
        number: 7
    }
];


const About = () => {
  return (
    <section
    id="about"
    className='section'
    >
        <div className='container with-header mx-auto lg:pt-20'>
            <h2 className="headline-2">Sobre mim</h2>
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 mt-14 reveal-up'>
                <p className="text-zinc-300 mb-4 leading-relaxed text-sm md:text-base">
                    Sou um jovem profissional graduado em Análise de Desenvolvimento de Sistemas pela 
                    Universidade Estácio. Desde o início da minha jornada acadêmica, 
                    me apaixonei pelo mundo da programação e, ao longo dos anos direcionei 
                    meu foco para o desenvolvimento Backend, com uma forte afinidade por 
                    Python. Minha formação me proporcionou uma base sólida em lógica de 
                    programação, estruturas de dados e algoritmos, além de uma experiência 
                    prática em projetos acadêmicos e pessoais, onde pude aplicar e aprofundar
                    meus conhecimentos. Recentemente, desenvolvi também um grande 
                    interesse por tecnologias voltadas para o desenvolvimento mobile, e estou motivado a integrar essas 
                    habilidades ao meu perfil de desenvolvedor.
                </p>

                <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                    {aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2 gap-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    </section>
  )
}

export default About