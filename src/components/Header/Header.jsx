
import { AnimBorder, ContainerHeader, HeaderBg, Logo, MenuHeader, MobileIcon} from './styles';
import {FaBars} from 'react-icons/fa'


export default function Header({ toggle }){
    const name = '< Guilherme />';

    return(
        <HeaderBg>
            <ContainerHeader>
                <Logo>
                    <AnimBorder className='nav-link' href='/' >
                        {name}
                    </AnimBorder>
                </Logo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <MenuHeader>
                    <li>
                        <AnimBorder className='nav-link' href='#about_me'> Sobre Mim </AnimBorder>
                    </li>
                    <li>
                        <AnimBorder className='nav-link' href='#skills'> Habilidades </AnimBorder>
                    </li>
                    <li>
                        <AnimBorder className='nav-link' href='#projects'>  Projetos </AnimBorder>
                    </li>
                    <li>
                        <AnimBorder className='nav-link' href='#contact'> Contato </AnimBorder>
                    </li>
                </MenuHeader>
                
            </ContainerHeader>
            
            
        </HeaderBg>
    )
}
 