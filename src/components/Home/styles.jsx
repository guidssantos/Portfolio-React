import styled from "styled-components";

export const Container = styled.div`
    max-width: 1100px;
    padding: 5em 2% 10em 2%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Perfil = styled.div`  
    flex: 0 0 auto;
    width: 50%;
    margin: 2em 3em 0 0;
        p{
            font-weight: 400;
            font-size: 16px;        
        }

        h1{         
            font-weight: 700;
            font-size: 28px;   
            margin: 0;     
        }       
        h2{
            font-weight: 700;
            font-size: 38px;
            margin: 0em 0 .5em 0;
        }
        @media (max-width: 768px) {
            h2{
                text-align: center;
            }
            
            &{
                width: 100%;
                margin: 0;
                text-align:center;
            }
    }   
`

export const PerfilImage = styled.div`
    margin: 2em 0 em 0;

    img{
        width: 100%;
        height: 100%;
        border-radius: 10%;
        border: 0;
        flex: 0 0 auto
}
    @media (max-width: 768px) {
        img{
            display:none;
        }
}    
`

export const ButtonHome = styled.button`
    position: relative;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;
    border-radius: 0.8em;
    border: .1px solid #8e2de2;
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: ghostwhite;
    overflow: hidden;
    margin-top: 5em;
    
    &::before,
    &::after{

        
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }  

    &::before{
        content: "";
        background: #000;
        width: 120%;
        left: -10%;
        transform: skew(30deg);
        transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);             
    }

    &:hover::before{
        transform: translate3d(100%, 0, 0);         
    }

    &:active{
        transform: scale(0.95);
        
    }
            span{
                position: relative;
                z-index: 10;
                transition: color 0.4s;
                display: inline-flex;
                align-items: center;
                padding: 0.8em 1.2em 0.8em 1.05em;               
            }
                svg{
                    width: 1.2em;
                    height: 1.2em;
                    margin-right: 0.5em;
                }
`