Feature: Soma de dois números através da linha de comando.

    Como um usuário do programa
    Eu quero inserir dois números pela linha de comando
    Para que eu possa ver o resultado da soma desses dois números

Scenario: Solicitação do primeiro número

    Given que eu tenho o programa aberto na linha de comando
    When o programa for iniciado
    Then ele deve solicitar que eu insira o primeiro número

Scenario: Solicitação do segundo número

    Given que eu inseri o primeiro número
    When o primeiro número for aceito pelo programa
    Then ele deve solicitar que eu insira o segundo número

Scenario: Exibição do resultado da soma

    Given que eu inseri o segundo número
    When o segundo número for aceito pelo programa
    Then ele deve calcular a soma dos dois números e exibir o resultado na tela