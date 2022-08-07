
import perfil from '../../assets/perfil.png'
import { Container } from '../Home/styles'

import { AboutBg, AboutImg, AboutText } from './styles'

export default function About(){

return(
    <AboutBg>
        <Container>
            <AboutImg>
                <img src={perfil} />
            </AboutImg>
            <AboutText>
                <h1>Sobre Mim</h1>
                <p>Atualmente estou cursando <strong>Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá </strong> no método EAD, 
                realizei diversos cursos com ênfase no front-end pelas plataformas Coursera, Udemy, Danki Code e Dio.
                Por conta dos cursos realizados tenho conhecimento sólido em <strong>HTML, CSS, Javascript, ReactJs, SASS, Styled Components, Tailwind CSS, Bootstrap, Git</strong> entre outras tecnologias.
                <br/> Sou estagiario de <strong>desenvolvimento web</strong> pela empresa <strong>VOLL Pilates Group</strong> onde desenvolvo e realizo manutenção em sites, auxilio no gerenciamento das hospedagens e realizo atendimento de suporte técnico.</p>
            </AboutText>                
        </Container>
    </AboutBg>
)

}