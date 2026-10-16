1-Por que existe uma tabela so pra guardar quantidade por material e deposito? Que problema ela resolve? Em que ela se parece com a tabela matricula da escola?

R: Essa tabela ajuda a organizar o banco e como se tratra de uma tabela com pk composta ela ajuda a garantir que cod_Material e cod_Estoque nunca vão se reptir juntos e podemos ter uma quantidade para cada material e estoque, A tabela matricula possuia dois Id igual essa tabela

2-Na coluna material_id dessa tabela, que valor fica guardado e de onde ele vem?

R: o valor guardado e o cod do material e ele vem atraves da tabela material utilizando a referencia fk

3- Tenta inserir uma movimentacao com um material_id que nao existe. Cola o erro que o banco devolveu e explica quem impediu.

R: java.lang.IllegalArgumentException: Estoque não encontrado para o material e depósito informados. A aplicação do serviço impediu e retornou erro 500

4-Por que o codigo do material tem UNIQUE? O que um indice tem a ver com isso e pra que mais ele serve?

R: delcarei o cod material como pk que garante que a pk nunca se repita

5- Por que a chave primaria da tabela de estoque tem duas colunas? Daria pra ser so uma?

R: As duas colunas são Uma chave pk composta, Daria porem teria que mudar minha pk para id_estoque e colocar cod_material e cod_estoque como fk e unique

6-Na movimentacao, por que a chave estrangeira pro estoque precisa de duas colunas?

R:Porque essas duas colunas representam uma fk que referecia uma tabela com uma chave composta

7-O que o JPA fez por voce? Qual classe virou qual tabela, e o que @ManyToOne significa la no banco?

R: Me ajudou a criar clases representado a tabelas, Usei cada entidade para representar cada classe. @ManyToOne ele reprseta as cardinalidades

8-Sobre a parte 4. O que eh cada linha do texto que voce mandou? O que eh a primeira linha que voltou? Nessa historia toda, onde esta o TCP e onde esta o HTTP? O que eh a porta 8080?

R:Http protoclo de requisão. Tcp envia os Dados servidor/cliente e a porta 8080 e o ponto de comunicação

9-Tira a linha vazia do final e roda de novo. O que aconteceu e por que?

R: pelo oq entendi "+ "\r\n";" representa o fim da requisição, sem ela o servidor fica esperando e não devolve nada