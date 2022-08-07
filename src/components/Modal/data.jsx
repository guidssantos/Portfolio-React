import sistema from '../../assets/projects/sistema-de-chamados.png';
import poke from '../../assets/projects/pokedex.png';
import bookflix from '../../assets/projects/bookflix.png';
import agencia from '../../assets/projects/agencia.png';

const data = {
    carData:[
        {
            id: 1,
            imgSrc: sistema,
            video: <iframe src="https://streamable.com/e/ijvhpl?autoplay=1&loop=0" width="100%" height="100%" allowfullscreen='true' allow="autoplay"></iframe>, 
            title: 'Sistema de Chamados',
            desc:`Nesse projeto usei a biblioteca ReactJs e firebase para facilitar o desenvolvimento da aplicação web e nele utilizei diversas ferramentas como: 
            Criar um sistema de login com e-mail e senha utilizando firebase junto com o Context API, criar rotas de navegação com react-router-dom privando se o 
            usuário logou ou não, criação e reutilização de components, utilização de Effect Hook (useState, useEffect), estilização de alertas com toastify e diversas outras coisas!`,
            proje:'https://sistema-de-chamados.vercel.app/dashboard',
            repo: 'https://github.com/guidssantos/Sistema-de-Chamados'        
        },
        {
            id: 2,
            imgSrc: poke,
            video: <iframe src="https://streamable.com/e/satybo?autoplay=1&loop-0" width="100%" height="100%"  allowfullscreen='true' allow="autoplay"></iframe>,
            title: 'Pokedex',
            desc:`Sou uma pessoa que gosta bastante da franquia pokemon e neste projeto realizei a criação de uma pokedex que podemos filtrar a quantidade
            de pokemons que aparecerá na tela para a gente, nele utilizei HTML, CSS, Javascript e utilizei a API do PokeApi, nesse projeto aprendi a
            consumir a api do pokeapi e utilizar alguns conceitos em javascript`,
            proje:'https://guidssantos.github.io/Pokedex/',
            repo: 'https://github.com/guidssantos/Pokedex' 
        },
        {
            id: 3,
            imgSrc: agencia,
            video: <iframe src="https://streamable.com/e/gqxeop?autoplay=1&loop=0" width="100%" height="100%"  allowfullscreen allow="autoplay"></iframe>,
            title: 'Agência Bold',
            desc:`Esse projeto realizei durante um curso de HTML, CSS e Javascript da Danki Code e nele utilizamos também a biblioteca jQuery onde fiz 
            um slick slider carrousel na parte de 'depoimentos', aprendi bastante conceitos de responsividade, sobre a seleção de classe em javascript e
            sobre como adicionar eventos em javascript `,
            proje:'https://guidssantos.github.io/Agencia/',
            repo: 'https://github.com/guidssantos/Agencia' 
        }
    ],
};

export default data;