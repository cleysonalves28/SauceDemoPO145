#language: pt
Funcionalidade: Login no SauceDemo
    Realizar o login no site www.saucedemo.com
    Esquema do Cenario: Login com Sucesso
        Dado que estou na pagina de login
        Quando preencho o "<usuario>" e a "<senha>"
        E clico em Login
        Entao vou para a pagina "<url>" e vejo "<titulo_secao>"
    Exemplos: 
    | usuario      | senha       | url       | titulo_secao |
    | standard_user| secret_sauce| inventory | Product      |
    | visual_user  | secret_sauce| inventory | Product      |

 
# (#Language: pt) - para deixar ele em portugues
       #   Scenario: Login com Sucesso
    #     Given que estou na pagina de Login
    #     When preencho o usuario e a senha 
    #     And clico em login
    #     Then vou para pagina Inventory

    #     #outra forma de realizar 

    #   Scenario: Login com Sucesso
    #     Given que estou na pagina de Login
    #     When preencho o usuario "standar_user" e a senha "secret_sauce"
    #     And clico em login
    #     Then vou para pagina Inventory 





