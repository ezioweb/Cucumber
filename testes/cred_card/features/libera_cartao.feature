Feature: Solicitação de cartão de crédito
  Verificação de limite para saber se o cliente pode ter cartão de crédito

  # Scenario: O cliente não pode ter cartão
  #   Given O limite está zerado
  #   When o cliente solicita um cartão de crédito
  #   Then um aviso mostra a mensagem: "Sem limite para solicitação"

# Scenario: O cliente pode ter cartão
#     Given O limite está liberado
#     When o cliente solicita um cartão de crédito
#     Then um aviso mostra a mensagem: "Cartão solicitado"

Scenario Outline: O cliente pode ter cartão
    Given O limite está "<status>"
    When o cliente solicita um cartão de crédito
    Then Seu cartão foi "<answer>"

  Examples:
    | status                | answer     |
    | liberado              | solicitado |
    | Zerado                | negado     |
    | qualquer outro dado!  | negado     |