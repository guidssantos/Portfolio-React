import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './styles'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={toggle} href='#about_me'>
                    Sobre Mim
                </SidebarLink>
                <SidebarLink onClick={toggle} href='#skills'>
                    Habilidades
                </SidebarLink>
                <SidebarLink onClick={toggle} href='#projects'>
                    Projetos
                </SidebarLink>
                <SidebarLink onClick={toggle} href='#contact'>
                    Contato
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar