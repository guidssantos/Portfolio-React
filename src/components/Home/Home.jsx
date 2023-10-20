
import {Container, ButtonHome, Perfil, PerfilImage} from './styles'
import gif from '../../assets/home.gif'
import TypewriterComponent from 'typewriter-effect'


export default function Home(){

    return(
        <Container>           
                    <Perfil>
                        <p> Olá, eu sou </p>
                        <h1> Guilherme dos Santos</h1>
                        <h2> <TypewriterComponent options={{
                            strings: [' Desenvolvedor Front-End'],
                            autoStart: true,
                            loop: true,
                            }}/>  
                        </h2>                        
                        <ButtonHome>                      
                        <a href='https://drive.google.com/u/1/uc?id=1SZg6m_tCWU3bhPH2HelXPIFblByfktnO&export=download'><span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="currentColor"></path></svg> Baixar Curriculo </span></a>
                        </ButtonHome>
                    </Perfil> 
                    <PerfilImage >
                        <img src={gif} />
                    </PerfilImage>
        </Container>
    )
}