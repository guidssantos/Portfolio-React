import styled from "styled-components";

export const ContainerContact = styled.div`
    padding: 10em 0 1em 0;
    margin: auto;
    max-width: 1100px;
    width: 100%;
    height: 100%;
`

export const ContactTitle = styled.div`
    font-size: 34px;
    text-align: center;
    margin-bottom: 2em;
`

export const ContactGrid = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 0;
    

        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        li:hover{
            transform:scale(110%);
            transition: .5s;      
        }

        a{
            color: white;
            margin-top: 1em;
        }

        a:last-child p {
            font-size: 1rem;
            font-weight: 500;
            color: #909090;
        }

        p{
            margin: 0;
        }

        div{
            display: flex;
            justify-content:  center;
            align-items: center;
            background-color: #F7F7F7;
            border-radius: 50%;
            padding: 1rem;
        }


        img{
            width: 32px;
            height: 32px;
        }

        @media (max-width: 425px) {
            &{
                flex-direction: column;
            }
    }  
`

export const Footer = styled.footer`
    padding-top: 5em;

        div{
            text-align: left;
        }

        p{
            color: #909090;
        }

        @media (max-width: 425px) {
            p{
                text-align: center;
            }
    }  

`