
    import styled from "styled-components";

    export const AboutBg = styled.div`
    width: 100%;
    height: 100%;
    `

    export const AboutImg = styled.div`
    margin-right: 3em;
        img{
            border-radius: 10%;
            box-shadow: 0px .5px 1.5px 0px #1B2430;
        }
        @media (max-width: 768px) {
            display:none;
        }
    `

    export const AboutText = styled.div`
    h1{
        font-size: 34px;
        margin-bottom: 1em;
    }

    p{
        color: #909090;
        font-size: clamp(16px, 1vw, 18px);
        line-height: 2em;
        letter-spacing: 0.03rem;
    }
    @media (max-width: 768px) {
        h1{
            text-align: center;
        }
        p{
            text-align: center;
            font-size: 100%;
            max-width: 600px;
        }
    }
    @media (max-width: 425px) {
        p{
            letter-spacing: 0.04rem;
        }
    }

    
    `