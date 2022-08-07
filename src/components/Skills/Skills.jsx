

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
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                                <img id='html'  src={html}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}} >
                            <img id='css' src={css}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={js}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={react}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='Sass (pré-processador css) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={sass}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={styled}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={tailwind}/>
                            </li>
                            <li onMouseEnter={()=>{document.getElementById('text').innerHTML='Bootstrap é um framework CSS utilizado em aplicações front-end, ou seja, na camada de interface com o usuário para o desenvolvimento de aplicações adaptáveis à tela de qualquer dispositivo.'}} onMouseLeave={()=>{document.getElementById('text').innerHTML='Passe o cursor do mouse no card para ver a descrição!'}}>
                            <img src={bootstrap}/>
                            </li>
                            <p id='text'>Passe o cursor do mouse no card para ver a descrição!</p>
                        </SkillsGrid>  
                                       
            </ContainerSkills>
    )
    
}