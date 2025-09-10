import ProjectCard from './projectCard';
import Cafe from '../assets/images/cafeWallpaper.jpg'
import cars from '../assets/images/carsApp.jpg';
import Cotacao from '../assets/images/CotacoesApp.jpg';
import FastAPI from '../assets/images/PythonFastAPI.jpg';
import Ecomerce from '../assets/images/ecomerce.jpg';
import ChatBot from '../assets/images/ChatBot.jpg';


const works = [
  {
    imgSrc: Cafe,
    title: 'Ribeiro`S - Full stack  App',
    tags: ['React Native','Desenvolvimento Moblie', 'API'],
    projectLink: 'https://musify-5al0.onrender.com/'
  },
  {
    imgSrc: Cotacao,
    title: 'Cotaçoes App',
    tags: ['Python', 'Streamlit', 'Pandas'],
    projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: cars,
    title: 'DriveUP',
    tags: ['Desenvolvimento Moblie', 'API'],
    projectLink: ''
  },
  {
    imgSrc: FastAPI,
    title: 'To-do-List',
    tags: ['Python', 'FastAPI', 'Swagger '],
    projectLink: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: Ecomerce,
    title: 'Compre Mais',
    tags: ['eCommerce', 'Django'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: ChatBot,
    title: 'Vivy - Agente pessoal de saúde',
    tags: ['Kotlin', 'SQL'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
  
];



const Work = () => {
  return (
    <section
      id='work'
      className='section'
      >
        <div className="container">
          <h2 className="headline-2 with-header mb-8 lg:pt-5 md:pt-8 reveal-up">
            Meus projetos
          </h2>

          <div className="grid gap-x-4 gap-y-5 
          grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, 
            key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"

              />
            ))}
          </div>
        </div>
      </section>
  )
}

export default Work