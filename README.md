![2023-07-07_16h53_34-_online-video-cutter com_](https://github.com/danibenfica/movieList-dnc/assets/103818625/36094827-3d54-47cd-af60-0ea456832ac4)

## Projeto Movie List

Este é um site de busca de filmes construído com React. 
Ele permite que os usuários pesquisem filmes e visualizem informações detalhadas sobre um filme específico.

Para acessa-lo diretamente online, clique [aqui!](https://movie-list-dnc-six.vercel.app/)

### Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
src
├── API
│   └── MovieService.js
├── components
│   └── MovieCard
│       └── MovieCard.js
├── views
│   ├── Home
│   │   └── Home.js
│   └── MovieDetail
│       └── MovieDetail.js
└── App.js
```

- Pasta `API`: Contém o arquivo de serviço `MovieService.js` responsável por fazer requisições à API para obter dados de filmes.
- Pasta `components`: Contém o componente `MovieCard` usado para exibir informações sobre filmes.
- Pasta `views`: Contém as principais páginas do aplicativo, `Home` e `MovieDetail`.
- Arquivo `App.js`: O componente raiz do aplicativo.

### Dependências

Este projeto utiliza as seguintes dependências:

- React: Biblioteca JavaScript para construir interfaces de usuário.
- react-router-dom: Biblioteca para implementar o roteamento em um aplicativo React.

### Como Executar o Projeto

Para executar o Movie List, siga estas etapas:

1. Clone o projeto do GitHub.
2. Navegue até o diretório do projeto.
3. Instale as dependências executando o comando `npm install` ou `yarn install`.
4. Inicie o servidor de desenvolvimento com o comando `npm start` ou `yarn start`.
5. O aplicativo será aberto no seu navegador padrão em `http://localhost:3000`.

### MovieService

O arquivo `MovieService.js` na pasta `API` contém funções para interagir com a API de filmes.

#### Funções

- `getMovies`: Obtém uma lista de filmes populares da API.
- `searchMovies`: Pesquisa filmes com base em uma string de pesquisa.
- `getMovieDetails`: Obtém informações detalhadas sobre um filme específico.

### Página Home

O componente `Home` está localizado na pasta `views/Home`. Ele exibe uma lista de filmes e permite que os usuários pesquisem filmes.

#### Props

- `searchValueProp`: O valor de pesquisa inserido pelo usuário.

#### State

- `movies`: Uma array de objetos de filmes obtidos da API.

#### Funções

- `getMovies`: Obtém filmes populares da API e atualiza o estado `movies`.
- `getMoviesSearch`: Obtém filmes com base na string de pesquisa e atualiza o estado `movies`.

#### useEffect

```jsx
useEffect(() => {
  getMovies();
}, []);
```

- O primeiro `useEffect` é chamado uma vez quando o componente é montado.
- Ele chama a função `getMovies` para buscar filmes populares.

```jsx
useEffect(() => {
  if (searchValueProp) {
    getMoviesSearch(searchValueProp);
  }
  if (searchValueProp === "") {
    getMovies();
  }
}, [searchValueProp]);
```

- O segundo `useEffect` é acionado sempre que a prop `searchValueProp` muda.
- Ele chama a função `getMoviesSearch` se um valor de pesquisa for fornecido ou chama `getMovies` se o valor de pesquisa estiver vazio.

#### Renderização

O componente renderiza uma lista de componentes `MovieCard` com base no estado `movies`.

### Componente MovieCard

O componente `MovieCard` está localizado na pasta `components/MovieCard`. Ele exibe informações básicas sobre um filme.

#### Props

- `movieProp`: O objeto de filme contendo informações sobre o filme.

### Página MovieDetail

O componente `MovieDetail` está localizado na pasta `views/MovieDetail`. Ele exibe informações detalhadas sobre um filme específico.

#### State

- `movie`: O objeto de filme obtido da API.

#### Funções

- `getMovie`: Obtém informações detalhadas sobre o filme especificado pelo parâmetro `id` e atualiza o estado `movie`.

#### useEffect

```jsx
useEffect(() => {
  getMovie();
}, []);
```

- O primeiro `useEffect` é chamado uma vez quando o componente é montado.
-  Ele chama a função `getMovie` para obter informações detalhadas sobre o filme especificado no parâmetro da URL.

```jsx
useEffect(() => {
  console.log(movie);
});
```

- O segundo `useEffect` registra o objeto `movie` sempre que ele mudar.

#### Renderização

O componente renderiza informações detalhadas sobre o filme, incluindo o título, imagem, orçamento,
idioma original, popularidade e sinopse. Também inclui um botão "Voltar" para navegar de volta à página inicial.

### Conclusão

Aqui estou com mais um projeto que aprendi em aula. React é um pouquinho difícil no início, mas acredito que, com o tempo,
irei entendendo cada vez mais cada pedacinho de código. E é isso que é gratificante na programação!🌟
