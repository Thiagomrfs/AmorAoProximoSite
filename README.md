# Amor ao Próximo

Uma aplicação web desenvolvida para a instituição Amor ao Próximo durante a disciplina de Projeto Integrado I.  
  
  
## Tabela de items
    1. Equipe - C-J3T  
    2. Sobre a aplicação
    3. Requisitos funcionais
        3.1  RF0001: Interação com o infográfico
        3.1. RF0002: Cadastro de ações 
        3.2. RF0003: Remoção e edição de ações 
        3.3. RF0004: Postagem de Atualizações
        3.4. RF0005: Visualização das ações
        3.5. RF0006: Cadastro nas ações
        3.6. RF0007: Voluntariado
    4. Como instalar
        3.1. Dependências
        3.2. Como iniciar o servidor


## 1. Equipe - C-J3T
- Caio Vinicius
- Jeremias Oliveira
- João Lucas
- Júlio César Luz
- Thiago Marinho

## 2. Sobre a aplicação
Essa é uma aplicação web desenvolvida durante a disciplina de Projeto Integrado I, componente curricular do terceiro semestre do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará. 

A equipe C-J3T, juntamente com a [Instituição Amor Ao Próximo](https://www.instagram.com/oficialamoraoproximo/), desenvolveu essa aplicação web com o intuito de dar visibilidade para a instituição e incentivar doações, assim como agregar as ações que a instituição realiza como também novidades sobre a Amor Ao Próximo no geral.

A apicação consiste de um website que conta com um infográfico interativo, no qual o usuário pode inserir um valor para simular o impacto que a sua doação fará para pessoas necessitadas através de uma representação de uma cesta básica que se preencherá de acordo com o valor fornecido.

> Ex: uma cesta básica custa, em média, R$30,00. Supondo que o usuário informe que deseja doar R$15,00, o infográfico será preenchido em 50%.

Além do infográfico, haverá uma sessão com um pouco da história da instituição, uma sessão com todas as ações que a instituição está realizando separadas por 4 categorias (Educação, Esporte, Cultura e Comida na mesa), uma sessão que agrega novidades sobre a instituição e finalmente uma que abrange a área de voluntariado.

## 3. Requisitos funcionais
Os requisitos funcionais para a aplicação são:

> RF0001: Interação com o infográfico. Como usuário, posso interagir com o infográfico colocando o valor que quero doar e visualizando em porcentagem ou quantidade o impacto da minha doação.

> RF0002: Cadastro de ações. Como líder (administrador), posso acessar a área de administração de ações, fornecer informações sobre a ação e cadastrá-la no sistema para que a ação possa ser visualizada pelos usuários.

> RF0003: Remoção e edição de ações. Como líder (administrador), posso acessar a área de administração de ações, editá-la e/ou finalizar as atividades para aquela ação de modo que ela não apareça mais no catálogo.

> RF0004: Postar Atualizações. Como líder (administrador), posso fornecer atualizações sobre o andamento das ações criando atualizações que serão dispostas no site para que os interessados possam acompanhar o andamento das ações sendo desenvolvidas.

> RF0005: Visualização das ações. Como beneficiário (usuário), posso escolher uma ação e ver detalhes sobre para que eu decida se irei me cadastrar.

> RF0006: Cadastro nas ações. Como beneficiário (usuário), posso acessar a lista de ações, escolher uma ação que me interesse, ver detalhes sobre ela, e, caso me interesse, fornecer alguns dados de identificação e me cadastrar na ação para que eu possa participar da ação.

> RF0007: Voluntariado. Como usuário, posso acessar a lista de ações, escolher uma ação que me interesse, ver detalhes sobre ela, e, caso me interesse, fornecer meus dados e me voluntariar para auxiliar a ação.

a disposição dos requisitos no projeto é a seguinte:

#### 3.1. RF0001: Interação com o infográfico. 
A partir do valor de doação colocado, o infográfico demonstra a porcentagem ou quantidade do impacto de uma doação.

#### 3.2. RF0002: Cadastro de ações
Com o auxílio da área do administrador provida pelo framework Django, o administrador do sistema pode cadastrar ações. É apenas necessário que ele forneça as informações sobre a ação a ser realizada.

##### Arquivos relacionados:

    localhost:8000/admin : ambiente de administrador do Django.

    /actions/ : pasta contendo todas as operações relacionadas às ações.
    
    /actions/models.py : model relacionado ao objeto ação, é o que dá a forma ao banco de dados (tendo em mente que estamos tratando o esquema Model-View-Template).
    
    /actions/views.py : a view principal, ela que receberá a requisição do cliente e retornará o template juntamente com o contexto da aplicação.
    
    db.sqlite3 : arquivo de banco de dados onde serão armazenadas as ações.

    /static/css/main/sections.css : arquivo de estilização da página inicial. As estilizações para as ações estão sob o id #actions.

    /static/css/main/actionCard.css : arquivo de estilização dos cartões de ação.

    /static/js/actionsList.js : código para a criação e atualização do slider para a disposição dos cards para cada ação.

#### 3.3. RF0003: Remoção e edição de ações
Com o auxílio da área do administrador provida pelo framework Django, o administrador do sistema pode realizar alterações nas ações, assim como deletá-las.

##### Arquivos relacionados:

    localhost:8000/admin : ambiente de administrador do Django.

    /actions/ : pasta contendo todas as operações relacionadas às ações.

    /actions/models.py : model relacionado ao objeto ação, é o que dá a forma ao banco de dados (tendo em mente que estamos tratando o esquema Model-View-Template).

#### 3.4. RF0004: Postar Atualizações
Com o auxílio da área do administrador provida pelo framework Django, o administrador do sistema pode postar atualizões sobre ONG para que elas sejam dispostas na página inicial da aplicação.

##### Arquivos relacionados:

    localhost:8000/admin : ambiente de administrador do Django.

    /updates/ : pasta contendo todas as operações relacionadas aos updates

    /updates/models.py : model relacionado ao objeto update, é o que dá a forma ao banco de dados (tendo em mente que estamos tratando o esquema Model-View-Template).

    db.sqlite3 : arquivo de banco de dados onde serão armazenadas as ações.

    /media/updates/ : pasta destino das imagens de cada update.

    /static/css/main/sections.css : arquivo de estilização da página inicial. As estilizações para os updates estão sob o id #updates.


#### 3.5. RF0005: Visualização das ações
Após uma ação ser criada, os usuários podem adquirir mais informações sobre as mesmas ao clicar no card que à representa, cards esses divididos nas sub-categorias: Educação, Cultura, Esporte e Comida na Mesa, após o clique, um modal aparecerá contendo as informações: Título, Data de Início, data de Finalização, Descrição, Instrutor(a) e Requisitos, essas infrmações são providas por meio da área de administrador promovida pelo framework Django

##### Arquivos relacionados:

    localhost/8000/admin: ambiente de administrador do Django

    /static/js/modal.js : função que executa o modal

    /static/css/modal.css : arquivo de estilização do modal

#### 3.6. RF0006: Cadastro nas ações
> ainda não implementado

#### 3.7. RF0007: Voluntariado
> ainda não implementado

## 4. Como instalar

#### 4.1. Dependências

##### Python 3
A aplicação depende fortemente do [Python3](https://www.python.org/).

##### Django
Ao instalar o python, também será instalado o gerenciador de pacotes pip, utilizaremos ele para instalar o Django. Com o pip instalado apenas vá em algum terminal e digite o comando:

> pip install Django

##### Pillow
As atualizações possuem imagens em seu corpo, para lidarmos com imagens no Django é necessário a biblioteca pillow, que também pode ser instalada com o pip através do comando:

> pip install pillow

#### 4.2. Como iniciar o servidor
Primeiro, vamos preparar a o banco de dados. Para isso, na pasta do projeto, abra o terminal e digite o comando:

###### Windows:
> py manage.py makemigrations
###### Linux: 
> python3 manage.py makemigrations

logo em seguida iremos aplicar as mudanças no banco e efetivamente moldá-lo com:

###### Windows:
> py manage.py migrate
###### Linux: 
> python3 manage.py migrate

Bom, com o banco criado, vamos criar uma conta de administrador para que possamos acessar a área de administração do Django (o que nos dará acesso aos models). Para isso digite:

###### Windows:
> py manage.py createsuperuser
###### Linux: 
> python3 manage.py createsuperuser

*obs: esses dados serão usados para logarmos na área de administrador do Django, por isso anote-os ou faça uma forcinha para lembrar*

*obs2: o campo de senha **não irá aparecer** quando for preenchido, isso é uma medida de segurança, não se preocupe*

Finalmente, para iniciar o servidor, digite:

###### Windows:
> py manage.py runserver
###### Linux: 
> python3 manage.py runserver

Após isso você poderá acessar a aplicação no endereço *localhost:8000*.
