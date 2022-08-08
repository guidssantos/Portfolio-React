

import html from '../../assets/skills/html.svg'
import css from '../../assets/skills/css.svg'
import js from '../../assets/skills/js.svg'
import react from '../../assets/skills/react.svg'
import sass from '../../assets/skills/sass.svg'
import styled from '../../assets/skills/styled.svg'
import tailwind from '../../assets/skills/tailwind.svg'
import bootstrap from '../../assets/skills/bootstrap.svg'
import { ContainerSkills, SkillsGrid, SkillsTitle } from './styles'

export default function Skills(){

    return(
        <ContainerSkills>      
                        <SkillsTitle>
                            <h1>Habilidades</h1>
                        </SkillsTitle>
                        <SkillsGrid>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='HTML é uma linguagem de marcação utilizada para estruturar os elementos da página, como parágrafos, links, títulos, tabelas, imagens e até vídeos.'}}>
                                <img id='html'  src={html}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='CSS é uma linguagem de estilos utilizada para definir cores, fontes, tamanhos, posicionamento e qualquer outro valor estético para os elementos da página.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}} >
                            <img id='css' src={css}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='Javascript é uma linguagem de programação utilizada para deixar a página com mais movimento, podendo atualizar elementos dinamicamente e lidar melhor com dados enviados e recebidos na página.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={js}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={react}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='O SASS é uma linguagem de extensão do CSS, onde podemos criar variáveis, separar o CSS em módulos, criar funções entre outras coisas.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={sass}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='Styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={styled}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='Tailwind é um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={tailwind}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={bootstrap}/>
                            </li>
                            <p id='text'>Passe o cursor do mouse no card para ver a descrição!</p>
                        </SkillsGrid>  
                                       
            </ContainerSkills>
    )
    
}