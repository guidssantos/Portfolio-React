
import styled from "styled-components";

export const HeaderBg = styled.header`
    border-bottom: 2px solid rgba(116, 132, 250, 0.644);
    width: 100%;
    height: 80px;
`

export const ContainerHeader = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`

export const AnimBorder = styled.a`
        &::after{
            content:'';
            display: block;
            width: 0;
            height: 1px;
            background: white;
            transition: width .5s;
        }
        
        &:hover::after{
            width: 100%;
        }
`

export const MenuHeader = styled.div`
    display: inline-flex;

        a{
            margin-right: 1em;
            font-size: 16px;
        }
        @media screen and (max-width: 768px){
            display:none;
        }

`

export const Logo = styled.div`
    font-size: 22px;
    font-weight: 700;

`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform:  translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

