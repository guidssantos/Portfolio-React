
    import styled from "styled-components";

    export const ContainerSkills = styled.div`
    margin: auto;
    padding: 5em 0;
    max-width: 600px;
    width: 100%;
    height: 100%;
    `

    export const SkillsTitle = styled.div`
    margin-top: 1em;
    font-size: 34px;
    text-align: center;
    margin-bottom: 2em;
    `

    export const SkillsGrid = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 19px;

        li{
            background-color: #909090;
            border-radius: 10%;
            padding: 5px;
        }

        li:hover{
            background-color: white;
            transition: .6s;
        }

        img{
            width: 100px;
            height: 100px;
        }
        p{
            font-size: 22px;
            color: #909090;
            text-align: center;
            height: 50px;
        }
        @media (max-width: 425px) {
            &{
                padding: 0;
            }
            img{
                width: 80px;
                height: 80px
            }
    }  
    `
