---
title: Site Pessoal
update: 2021-02-14 15:45:16
date: 2020-04-17
categories: 
    - [pt-br, projects]
tags:
    - react
---

<a target="_blank" rel="noopener noreferrer" href="https://github.com/AbraaoM/abraaom.github.io">Repositório Github</a>

<h2>Motivação</h2>
    <p>Como desenvolvedor é importante possuir um website pessoal para 
        publicação de trabalhos e projetos interessantes para que outros 
        desenvolvedores, potenciais empregadores e clientes possam se 
        inspirar ou checar a compatibilidade com um projeto. </p>
    <p>No mundo de desenvolvimento é muito comum ter dúvidas sobre 
        tecnologias e problemas a serem resolvidos, é sempre um alívio 
        encontrar um post de alguém que já teve o mesmo problema e 
        conseguiu resolver ou uma descrição prática do uso de alguma 
        tecnologia interessante, pra que isso seja possível é necessário 
        que alguém publique esses posts e toda a comunidade tem algo a 
        oferecer nesse campo. A criação de um arquivo pessoal também me 
        atrai muito pensando que ele poderá me ser útil no futuro, e se 
        vai ser útil pra mim pode ser útil pra mais alguém.</p>
    <h2>Ferramentas utilizadas</h2>
    <a target="_blank" rel="noopener noreferrer" href="https://pt-br.reactjs.org/">
    <h3>ReactJS</h3>
    </a>
        <p>O ReactJS ou apenas React é "uma biblioteca javascript para 
        criar interfaces de usuário"[1]. Com ela é possível criar o 
        front-end de uma aplicação web de forma simples, pode ser portada 
        para outras plataformas de forma simples por conta do React Native, 
        que utiliza estruturas muito parecidas. Existem diversos componentes 
        que podem ser instalados e utilizados dentro do projeto, como o 
        react-icons e react-gh-pages, que foram utilizados neste projeto. </p>
    <a target="_blank" rel="noopener noreferrer" href="https://pages.github.com/">
    <h3>Github Pages</h3>
    </a>
        <p>O Github possui uma solução bem simples de ser utilizada para a 
        hospedagem gratuita de páginas estáticas [2], a partir de um 
        repositório github existente é possível habilitar a função nas 
        configurações do repositório criar uma página HTML e rapidamente 
        a página estará no ar em um domínio característico pessoal, mas 
        também é possível vincular um domínio próprio. Também é possível 
        criar uma página pessoal de forma equivalente, mas o nome do 
        repositório deve seguir um padrão específico.</p>   
    <h2>Metodogia</h2>
    <p>O projeto foi desenvolvido utilizando o Ubuntu 19.10, portanto 
        todos os exemplos de instalação e comandos serão feitos nesse 
        contexto, podendo haver diferenças em outros sistemas.</p>
    <h3>Requisitos</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup">
        <h4>Git</h4>
        </a>
        ```
        sudo apt install git
        ```
        <p>Caso seja o primeiro acesso será necessário configurar o git:</p>
        ```
        git config --global user.name "abraao"
        git config --global user.email abraaol.moreira@outlook.com
        ```
        <h4>React</h4>
        <p>O React tem como requisitos o Node e npm, que podem ser 
            baixados no <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/">
            site oficial</a>, é recomendável utilizar a versão 
            LTS atualizada.</p>
        <p>Utilizando o gerenciador de versões <a target="_blank" rel="noopener noreferrer" href="https://asdf-vm.com/#/">
            asdf</a>:[5][6]</p>
            ```
                asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git
                bash ~/.asdf/plugins/nodejs/bin/import-release-team-keyring 
                asdf plugin install nodejs 12.16.1 
                asdf global nodejs 12.16.1 
                asdf reshim
            ```
        <p>Para a criação do projeto react instalei o pacote create-react-app:</p>
            ```
            npm i -g create-react-app
            ```
    <h3>Início do projeto</h3>
        <p>Criei um repositório vazio no github com o meu nome de usuário 
        seguido pelo domínio do github (abraaom.github.io) seguindo as 
        instruções disponíveis no site oficial. [2]</p>
        <p>Clonei o repositório utilizando o comando:</p>
        ```
        git clone https://github.com/AbraaoM/abraaom.github.io.git
        ```
        <p>Criei um projeto react dentro da pasta clonada do github:</p>
        ```
        create-react-app .
        ```
    <h3>Publicação no <a href="https://github.com/gitname/react-gh-pages">gh-pages</a> </h3>
        <p>É necessário instalar no projeto um componente que irá fazer a 
        publicação do projeto no github pages, que não possui suporte 
        nativo ao react.</p>
        ```
        npm i react-gh-pages --save-dev
        ```
        <p>Também foi necessário inserir algumas linhas de configuração 
        no arquivo package.json:</p>
        <p>No início do arquivo:</p>
        ```
        "homepage": "http://abraaom.github.io/react-gh-pages"
        ```
        <p>Na seção scripts:</p>
        <div className="code-container">
        ```    
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build"
        ```
        </div>
        <img src="{% asset_path package.png %}" alt="Exemplo de arquivo Package"/>
        <p>Para publicar o projeto é necessário apenas o seguinte comando:</p>
        ```
            npm run deploy
        ```
        <p>Depois desse passos, já deve existir um novo branch (gh-pages) 
        no repositório github, como se trata de um site pessoal ele 
        ainda não está publicado, porque as configurações devem ser 
        feitas na branch master, basta criar uma nova branch vazia, 
        nomeá-la de "master" e fazer um merge entre os dois branchs, 
        em alguns segundos o "hello world" padrão do react deve ser publicado 
        e poderá ser acessado pelo domínio abraaom.github.io.</p>
    <h2>Criação do site</h2>
    <p>Para criar o site foram utilizados ícones que pertencem a biblioteca 
        de componentes <a href="https://react-icons.netlify.com/#/">
        react-icons</a>, que disponibiliza ícones de diversos pacotes 
        conhecidos de forma simplificada.</p>
        ```
        npm i react-icons
        ```
    <p>Para a criação de menus responsivos e aproveitamento de classes 
        utilizei a biblioteca que interliga de forma simplificada o projeto 
        ao Bootstrap 4, <a href="https://react-bootstrap.github.io/">
        react-bootstrap</a>.</p>
        ```
        npm install react-bootstrap bootstrap
        ```
        <p>Com este pacote instalado é possível utilizar o bootstrap 
        diretamente dentro do JSX importando classes e utilizando tags, 
        mas também é possível utilizar os componentes presentes na 
        documentação do bootstrap 4. </p>
    <p>Para fazer as rotas entre as páginas do site utilizei o 
        componente <a href="https://reacttraining.com/react-router/web/guides/quick-start">
        react-router-dom</a>.</p>
        ```
        npm i react-router-dom
        ```
        <p>Por meio de um arquivo routes gerencio todas as rotas dentro do projeto.
        Normalmente de usa a classe BrowserRouter para se fazer esse gerenciamento, 
        entretanto o react-gh-pages não lida bem com está classe,  para 
        contornar o problema utilizei a classe HashRouter, que apresenta 
        praticamente o mesmo resultado.</p>
    <h3>Publicação do site</h3>
        <p>Depois de tudo pronto, basta utilizar o comando:</p>
        ```
        npm run deploy
        ```
        <p>Ir até o github e fazer o merge da nova branch gh-pages na master, 
        em poucos segundos a página deve ser publicada no domínio 
        abraaom.github.io.</p>
        <h4>Domínio próprio</h4>
        <p>Com o domínio comprado é necessário a configuração de DNS:</p>
        <Table responsive className="tabela">
            <thead>
            <tr>
                <th>NOME</th>
                <th>TIPO</th>
                <th>VALOR</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>@</td>
                <td>A</td>
                <td>185.199.108.153</td>
            </tr>
            <tr>
                <td>@</td>
                <td>A</td>
                <td>185.199.109.153</td>
            </tr>
            <tr>
                <td>@</td>
                <td>A</td>
                <td>185.199.110.153</td>
            </tr>
            <tr>
                <td>@</td>
                <td>A</td>
                <td>185.199.111.153</td>
            </tr>
            <tr>
                <td>www</td>
                <td>CNAME</td>
                <td>abraaom.github.com</td>
            </tr>
            </tbody>
        </Table>
        <p>A forma como esta configuração irá variar a depender do local 
            de compra do domínio, como comprei este na hostgator o 
            procedimento é enviar um chamado por meio do suporte 
            requisitando a configuração seguindo um modelo disponibilizado. 
            Os domínios variarão, mas os IPs são padrão do github pages.</p>
        <p>Agora dentro do repositório, na branch master, é necessário 
            criar um arquivo nomeado CNAME que contêm o domínio próprio 
            (abraaomoreira.com), se tudo tiver corrido bem e os prazos de 
            alteração do DNS já tiverem sido cumpridos em alguns minutos o 
            site será exibido no novo domínio. </p>
    <h2>Resultados</h2>
    <p>O site foi pensado para ser o mais simples e claro possível, 
        tanto para facilitar e agilizar o desenvolvimento, sem que haja perda 
        na harmonia visual.</p>
    <h3>Apresentação</h3>
        <img src="{% asset_path apresentacao.png %}" alt="Exemplificação da tela de apresentação"/>      
        <p>Esta página contêm uma breve apresentação sobre o dono do site 
        com as principais informações de contato e conhecimentos.</p>
    <h3>Mais sobre</h3>
        <img src="{% asset_path sobre.png %}" alt="Exemplificação da tela Sobre"/>
        <p>Esta página apresenta informações mais detalhadas sobre o dono so site, 
        incluindo tragetória acadêmica.
        </p>
    <h3>Lista de projetos</h3>
        <img src="{% asset_path projetos.png %}" alt="Exemplificação da tela de projetos"/>    
        <p>Esta página apresenta uma listagem cronológica estática de páginas de projetos realizados,
        foi feita uma modelagem de post para cada linguagem de programação 
        facilitando a publicação.</p>  
    <h3>Projeto</h3>
        <img src="{% asset_path projeto-post.png %}" alt="Exemplificação da página de um projeto"/>      
        <p>Cada projeto possui uma página detalhando os principais processos 
        utilizados para o desenvolvimento e o seu funcionamento, as páginas possuem
            estilização comum.</p>
    <h2>Referências</h2>
    <a target="_blank" rel="noopener noreferrer" href="https://pt-br.reactjs.org/">
    [1] Site Oficial React
    </a><br/>
    <a target="_blank" rel="noopener noreferrer" href="https://pages.github.com/">
    [2] Site oficial Github Pages
    </a><br/>
    <a target="_blank" rel="noopener noreferrer" href="https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup">
    [3] Getting Started Git
    </a><br/>
    <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/">
    [4] Site oficial Node
    </a><br/>
    <a target="_blank" rel="noopener noreferrer" href="https://asdf-vm.com/#/">
    [5] Site oficial asdf
    </a><br/>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/asdf-vm/asdf-nodejs">
    [6] Plugin node para asdf
    </a><br/>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/gitname/react-gh-pages">
    [7] Repositório gh-pages
    </a><br/>
    <a target="_blank" rel="noopener noreferrer" href="https://react-icons.netlify.com/#/">
    [8] React-icons
    </a><br/>
    <a target="_blank" rel="noopener noreferrer" href="https://react-bootstrap.github.io/">
    [9] React-bootstrap
    </a><br/>
    <a target="_blank" rel="noopener noreferrer" href="https://reacttraining.com/react-router/web/guides/quick-start">
    [10] React-router-dom
    </a>