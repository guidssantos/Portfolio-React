
import email from '../../assets/contact/email.svg'
import phone from '../../assets/contact/phone.svg'
import linkedin from '../../assets/contact/linkedin.svg'
import github from '../../assets/contact/github.svg'
import { ContactGrid, ContactTitle, ContainerContact, Footer } from './styles'

export default function Contact(){

    return(
        <ContainerContact>
                        <ContactTitle>
                            <h1>Contatos</h1>
                        </ContactTitle>
                        <ContactGrid>
                            <li>
                                <a href='mailto:guilhermedssantos1@gmail.com' target='_blank'>
                                    <div>
                                        <img src={email}/>                               
                                    </div>
                                </a>    
                                <a href='mailto:guilhermedssantos1@gmail.com' target='_blank'>
                                    <p>E-mail</p>
                                </a>
                                <a href='mailto:guilhermedssantos1@gmail.com' target='_blank'>
                                    <p>guilhermedssantos1@gmail.com</p>
                                </a>
                            </li>
                            <li>
                                <a href='https://api.whatsapp.com/send?phone=5519984017361' target='_blank'>
                                    <div>
                                        <img src={phone}/>
                                    </div>
                                </a>
                                <a href='https://api.whatsapp.com/send?phone=5519984017361' target='_blank'>
                                    <p>Telefone</p>
                                </a>
                                <a href='https://api.whatsapp.com/send?phone=5519984017361' target='_blank'>
                                    <p>(19) 98401-7361</p>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/guidssantos/' target='_blank'> 
                                    <div>
                                        <img src={linkedin}/>                                   
                                    </div>
                                </a>
                                <a href='https://www.linkedin.com/in/guidssantos/' target='_blank'>
                                    <p>Linkedin</p>
                                </a>
                                <a href='https://www.linkedin.com/in/guidssantos/' target='_blank'>
                                    <p>@guidssantos</p>
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/guidssantos' target='_blank'>
                                    <div>
                                        <img src={github}/>                                   
                                    </div>
                                </a>
                                <a href='https://github.com/guidssantos' target='_blank'>
                                    <p>Github</p>
                                </a>
                                <a href='https://github.com/guidssantos' target='_blank'>
                                    <p>@guidssantos</p>
                                </a>
                            </li>
                        </ContactGrid>
                <Footer>
                    <div>
                        <p> © Guilherme 2022</p>
                    </div>
            </Footer>
            </ContainerContact>
    )
}