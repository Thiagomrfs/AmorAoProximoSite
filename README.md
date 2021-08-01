# Amor ao Próximo
-------------------------------------------------------------------------------------
Uma aplicação web desenvolvida para a instituição Amor ao Próximo durante a disciplina de Projeto Integrado I.  
  
  
## Tabela de items
    1. Equipe - CJ3-T  
    2. Sobre a aplicação
    3. Requisitos funcionais 
        3.1. RF0001: Realizar pagamento  
        3.2. RF0002: Cadastro de ações 
        3.3. RF0003: Remoção e edição de ações 
        3.4. RF0004: Postagem de Atualizações
        3.5. RF0005: Visualização das ações
        3.6. RF0006: Cadastro nas ações
        3.7. RF0007: Voluntariado
    4. Como instalar
        3.1. Dependências
        3.2. Como iniciar o servidor


## 1. Equipe - CJ3-T
- Caio Vinicius
- Thiago Marinho
- João Lucas
- Júlio César Luz
- Jeremias Oliveira

## 2. Sobre a aplicação
Essa é uma aplicação web desenvolvida durante a disciplina de Projeto Integrado I, componente curricular do terceiro semestre do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará. 

A equipe CJ3-T, juntamente com a [Instituição Amor Ao Próximo](https://www.instagram.com/oficialamoraoproximo/), desenvolveu essa aplicação web com o intuito de dar visibilidade para a instituição e incentivar doações, assim como agregar as ações que a instituição realiza como também novidades sobre a Amor Ao Próximo no geral.

A apicação consiste de um website que conta com um infográfico interativo, no qual o usuário pode inserir um valor para simular o impacto que a sua doação fará para pessoas necessitadas através de uma representação de uma cesta básica que se preencherá de acordo com o valor fornecido.

> Ex: uma cesta básica custa, em média, R$30,00. Supondo que o usuário informe que deseja doar R$15,00, o infográfico será preenchido em 50%.

Além do infográfico, haverá uma sessão com um pouco da história da instituição, uma sessão com todas as ações que a instituição está realizando separadas por 4 categorias (Educação, Esporte, Cultura e Comida na mesa), uma sessão que agrega novidades sobre a instituição e finalmente uma que abrange a área de voluntariado.

## 3. Requisitos funcionais
Os requisitos funcionais para a aplicação são:
    
> RF0001: Realizar pagamento. Como doador (usuário), posso acessar a área de doação, optativamente posso interagir com o infográfico, preencher meus dados ou selecionar outra forma de pagamento para realizar a doação.
    
> RF0002: Cadastro de ações. Como líder (administrador), posso acessar a área de administração de ações, fornecer informações sobre a ação e cadastrá-la no sistema para que a ação possa ser visualizada pelos usuários.

> RF0003: Remoção e edição de ações. Como líder (administrador), posso acessar a área de administração de ações, editá-la e/ou finalizar as atividades para aquela ação de modo que ela não apareça mais no catálogo.

> RF0004: Postar Atualizações. Como líder (administrador), posso fornecer atualizações sobre o andamento das ações criando atualizações que serão dispostas no site para que os interessados possam acompanhar o andamento das ações sendo desenvolvidas.

> RF0005: Visualização das ações. Como beneficiário (usuário), posso escolher uma ação e ver detalhes sobre para que eu decida se irei me cadastrar.

> RF0006: Cadastro nas ações. Como beneficiário (usuário), posso acessar a lista de ações, escolher uma ação que me interesse, ver detalhes sobre ela, e, caso me interesse, fornecer alguns dados de identificação e me cadastrar na ação para que eu possa participar da ação.

> RF0007: Voluntariado. Como usuário, posso acessar a lista de ações, escolher uma ação que me interesse, ver detalhes sobre ela, e, caso me interesse, fornecer meus dados e me voluntariar para auxiliar a ação.

a disposição dos requisitos no projeto é a seguinte:

#### 3.1. RF0001: Realizar pagamento
> ainda não implementado

#### 3.2. RF0002: Cadastro de ações
Com o auxílio da área do administrador provida pelo framework Django, o administrador do sistema pode cadastrar ações. É apenas necessário que ele forneça as informações sobre a ação a ser realizada.

##### Arquivos relacionados:

    /actions/ : pasta contendo todas as operações relacionadas às ações.
    
    /actions/models.py : model relacionado ao objeto ação, é o que dá a forma ao banco de dados (tendo em mente que estamos tratando o esquema Model-View-Template).
    
    /actions/views.py : a view principal, ela que receberá a requisição do cliente e retornará o template juntamente com o contexto da aplicação.
    
    db.sqlite3 : arquivo de banco de dados onde serão armazenadas as ações.

#### 3.3. RF0003: Remoção e edição de ações


#### 3.4. RF0004: Postar Atualizações


#### 3.5. RF0005: Visualização das ações
> implementação em andamento

#### 3.6. RF0006: Cadastro nas ações
> ainda não implementado

#### 3.7. RF0007: Voluntariado
> ainda não implementado

## 4. Como instalar

#### 4.1. Dependências

#### 4.2. Como iniciar o servidor
