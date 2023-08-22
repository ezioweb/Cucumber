Feature: Soma
  Aplicação para somar 2 números inteiros

Scenario: Soma de Números Inteiros Positivos
    Given que o usuário inseriu o primeiro número inteiro como "5"
    And o usuário inseriu o segundo número inteiro como "3"
    When o usuário executar o comando de soma dos dois números
    Then o sistema deve calcular a soma como "8"

# Scenario: O cliente pode ter cartão
#     Given O limite está liberado
#     When o cliente solicita um cartão de crédito
#     Then um aviso mostra a mensagem: "Cartão solicitado"

# Scenario Outline: O cliente pode ter cartão
#     Given O limite está "<status>"
#     And 
#     When o cliente solicita um cartão de crédito
#     Then Seu cartão foi "<answer>"

#   Examples:
#     | status                | answer     |
#     | liberado              | solicitado |
#     | Zerado                | negado     |
#     | qualquer outro dado!  | negado     |