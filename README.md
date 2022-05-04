# GRAND HOTEL RESILIA - API 
## Instalação das Dependências do projeto:
  **Node.JS**
- Programa necessário para inicialização do projeto;
- Download: [link](https://nodejs.org/en/). Baixar a versão LTS do sistema operacional utilizado pelo usuário;
- Após download, checar no terminal de seu computar a verdsão instalada, através do comando:
```
node -v
```
***
- Agora será necessário instalar as dependências do projeto. Abra o terminal no seu editor de código, e execute o seguinte:
```
npm install
```
***
## Execução do projeto:
- Depois de instalar todas as dependências, execute o banco de dados, acessando a pasta infra pelo terminal do seu editor de código e execute:
```
node create-and-populate.js
```
- Assim, já é possível executar o projeto e o servidor local já estará rodando:
```
npm start
```

***
## Rotas do projeto:
- O projeto foi feito utilizando o padrão de **_API Rest_**, que consiste em rotas divididas em duas partes: um método HTTP e um caminho para um recurso que será usado. Para os métodos de HTTP, utilizou-se o **_CRUD_**.
### Create - **POST**:
- Para consultar as rotas, usa-se uma ferramenta para consulta de requisições, da qual indicamos o [Insomnia](https://insomnia.rest/), onde você pode consultar a API por esse e outros métodos. Nessa demonstração, estamos rodando o método POST e informando a URL **_localhost:port/address_**.
- É necessário verificar anter se o seu servidor está rodando, caso contrário não será possível testar qualquer método. Depois de especificar a requisição, abra o **_body_** da mesma e escolha a opção **_JSON_** para inserir os dados que você quiser a partir das colunas existentes no banco. Após isso, clique em **_Send_** para mandar essa requisição:

![rotapost](https://user-images.githubusercontent.com/95878600/166620427-083b9470-be46-430b-8d1b-525dd5a302bc.jpg)

***
### Read - **GET**:
1. **GET/path**
- Com o servidor rodando e sua ferramenta escolhida aberta, você seleciona o método GET e ao lado a URL para a requisição, sendo ela: **_localhost:port/address_**. Ao clicar no botão **_Send_** ele retornará todos os dados da API:
![rotagetgeral](https://user-images.githubusercontent.com/95878600/166620491-5bb7812d-c735-48f1-8bf0-906ca2100745.png)

2. **GET/path/id**
- Não muito diferente da requisição acima, o método também será o GET porém depois do caminho será aplicado o **_ID_** de um registro, para o caso de precisar verificar algum registro específico. Com o método GET selecionado e a URL digitada, após ela você adiciona **_/1_** (Em nossa api o ID será gerado pelo UUID, copie o ID exibido no método anterior):
![rotagetind](https://user-images.githubusercontent.com/95878600/166620512-972aa91f-1d5d-428d-ad62-40bfd76e8226.png)

***
### Update - **PUT**:
- Nesta API foi utilizada somente requisições PUT para atualizações. Ao lado da URL você precisará informar também um **_ID_**, para servir de referência a qual dado será modificado:
![rotaput](https://user-images.githubusercontent.com/95878600/166620533-90ede9c6-4f62-4e86-b1db-273428f2ac06.png)

***
### Delete - **DELETE**:
- O método DELETE tem a função de remover algum recurso que foi especificado, no caso das nossa requisições ele irá deletar o **_ID_** informado após a URL passada:
![rotadelete](https://user-images.githubusercontent.com/95878600/166620543-a041816d-38c5-4c75-a155-d3a73d428f3f.png)

***
### Observação:

Se você preferir, pode importar para o Insomnia o arquivo "Insomnia_2021-12-03.json", que está na pasta root/principal. Ele contém as rotas já prontas de cada entidade para teste no próprio Insomnia.

***
## Considerações finais:
- Na nossa API, para popular o banco, você deve seguir uma ordem de cadastro de entidades caso você use um programa externo para isso(Insomnia ou Postman), pois certas entidades precisam de chaves estrangeiras já prontas. A ordem é:
- 1: Address
- 2: User (Copiar a chave primaria de address(ID) e colar na chave estrangeira de users(id_address)).
- 3: Event
- 4: Experience
- 5: Staff
- 6: Room
- 7: Booking (Copiar, respectivamente, as chaves primarias users(ID) e rooms(ID) e colar nas chaves estrangeiras de booking (id_user) e (id_room)).
- 8: Payment (Copiar, respectivamente, as chaves primarias users(ID), booking(ID), staff(ID) e colar nas chaves estrangeiras de payment (id_user), id_booking) e (id_staff)).

***


## Equipe de desenvolvedores:

- <a href = "https://www.linkedin.com/in/emmanuelgallibr/"> Emmanuel Galli </a>
- <a href = "https://www.linkedin.com/in/felipenascto/"> Felipe Nascimento </a>
- <a href = "https://www.linkedin.com/in/fernandapereiradasilva/"> Fernanda Pereira </a>
- <a href = "https://www.linkedin.com/in/mariana-fragali-pane-b0b686b7/"> Mariana Pane </a>
- <a href = "https://www.linkedin.com/in/milla-rany-aguiar-102244228/"> Milla Rany </a>
***
