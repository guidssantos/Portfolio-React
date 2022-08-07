import styled from "styled-components"


export const ContainerProjects = styled.div`
    padding: 5em 0;
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
    height: 100%;
`

export const ProjectsTitle = styled.div`
    margin-bottom: 1em;
    text-align: center;
    font-size: 34px;
`

export const ProjectsGrid = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 15em;
    

        li{
            margin-right: 2em;
            margin-bottom: 1em;
            width: 25%
            
            
        }

        li:hover{
            transform:scale(110%);
            z-index: 99;
            transition: .5s;
            
        }

        li::before{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.65);
        }


        img{
            object-fit: cover;
            border-radius: 20px;
            width: 100%;
            height: 100%;
            border-bottom: 3px solid #4a00e0;
        }
        @media (max-width: 768px) {
            &{
                flex-direction: row;
            }
            li{
                width: 50%;
            }
        }
        @media (max-width: 425px) {
            li{
                width: 100%;
            }
    }  
`

export const ProjectsDetails = styled.div`
    position: absolute;
    width: 100%;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

        p{
            color: #f9f9f9;
            font-size: 1.4rem;
            font-weight: 500;
        }
        @media (max-width: 768px) {
            p{
                font-size: .8rem;
            }
        }
          
`



export const Cover = styled.li`
    position: relative;
`