INSERT INTO deposito (cod_deposito, nome)
VALUES ('D-01', 'Deposito Norte');
INSERT INTO deposito (cod_deposito, nome)
VALUES ('D-02','Deposito Sul');
INSERT INTO deposito (cod_deposito, nome)
VALUES('D-03','Deposito Leste');


INSERT INTO  material (cod_material,  nome_material,descricao_material, unidade_medida)
VALUES ('M-100','parafuso','Sua principal função é unir, fixar ou sustentar duas ou mais peças de maneira desmontável.' ||
                           '','UN');

INSERT INTO  material (cod_material,  nome_material,descricao_material, unidade_medida)
VALUES ('M-101','Rolamento','reduzir o atrito e guiar o movimento rotativo entre um eixo e outras partes de uma máquina.','UN');

INSERT INTO  material (cod_material,  nome_material,descricao_material, unidade_medida)
VALUES ('M-102','Oleo','é uma substância líquida viscosa usada para reduzir o atrito, controlar a temperatura, limpar e proteger as peças internas do motor.','L');

INSERT INTO  material (cod_material,  nome_material,descricao_material, unidade_medida)
VALUES ('M-103','Pneu','é feita por meio de códigos gravados em sua lateral que indicam suas medidas, tipo de construção, capacidade de carga e velocidade máxima','UN');

INSERT INTO  material (cod_material,  nome_material,descricao_material, unidade_medida)
VALUES ('M-104','Ferro','O ferro é um elemento químico metálico de símbolo Fe e número atômico 26.','KG');


INSERT INTO estoque (cod_material,cod_deposito,qtd_estoque)
VALUES ('M-100','D-01',500);

INSERT INTO estoque (cod_material,cod_deposito,qtd_estoque)
VALUES ('M-100','D-02',30);


INSERT INTO estoque (cod_material,cod_deposito,qtd_estoque)
VALUES ('M-100','D-03',10);


INSERT INTO estoque (cod_material,cod_deposito,qtd_estoque)
VALUES ('M-101','D-03',90);

INSERT INTO estoque (cod_material,cod_deposito,qtd_estoque)
VALUES ('M-102','D-02',90);

INSERT INTO estoque (cod_material,cod_deposito,qtd_estoque)
VALUES ('M-102','D-01',40);

INSERT INTO estoque (cod_material,cod_deposito,qtd_estoque)
VALUES ('M-103','D-03',40);

INSERT INTO estoque (cod_material,cod_deposito,qtd_estoque)
VALUES ('M-104','D-03',100);





INSERT INTO movimentacao(id_movimentacao,cod_material,cod_deposito,tipo_movimentacao,qtd_movimentacao,data_hora)
VALUES (9,'M-100','D-01','SAIDA',2,'2026-10-13 16:30:00');