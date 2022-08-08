
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #000310;
        color: white;
        font: 14px 'Quicksand', sans-serif;
    }

    body::-webkit-scrollbar {
        width: 12px;              
      }
      
      body::-webkit-scrollbar-track {
        background: #001342;        
      }
      
      body::-webkit-scrollbar-thumb {
        background-color: #4B56A7;   
        border-radius:10px;   
        
      }
    
    &:focus{
        outline: 0;
    }

    a{
        text-decoration:none;
    }

    li, ul{
        list-style: none;
    }

    button, a{
        cursor: pointer;
    }

    html{
        scroll-behavior: smooth;
    }

    
 `

 export default GlobalStyle