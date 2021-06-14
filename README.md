# Seventh Shop

Este documento descreve os passos para execução do projeto acima.

## Navegue até o diretório do projeto.

No diretório do projeto, você pode executar:

### `yarn install`

Este comanda fará a instalação de todas as dependências do projeto.

### json-server server.json -p 3333

Este comando executará uma FAKE API, onde estarão contidos os produtos cadastrados.

### `yarn start`

Este comando executará a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

### `Rotas`

Na rota raiz http://localhost:3000/ funcionará com tela inicial para o usuário efetuar suas respectivas compras
Na rota http://localhost:3000/dashboard funcionará como painel administrativo para Criação, edição, e exclusão de produtos
Na rota http://localhost:3000/purchase funcionará como painel administrativo para visualização das compras realizadas pelos os usuário