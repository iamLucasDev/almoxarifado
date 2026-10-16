package br.com.lucas.almoxarifado.service;


import br.com.lucas.almoxarifado.entity.Estoque;
import br.com.lucas.almoxarifado.entity.EstoqueId;
import br.com.lucas.almoxarifado.entity.Movimentacao;
import br.com.lucas.almoxarifado.repository.EstoqueRepository;
import br.com.lucas.almoxarifado.repository.MovimentacaoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;


import java.util.Optional;


@Service
public class MovimentacaoService {

    private final MovimentacaoRepository movimentacaoRepository;
    private final EstoqueRepository estoqueRepository;

    public MovimentacaoService(MovimentacaoRepository movimentacaoRepository, EstoqueRepository estoqueRepository) {
        this.movimentacaoRepository = movimentacaoRepository;
        this.estoqueRepository = estoqueRepository;
    }
    @Transactional //serve para gerenciar transações de banco de dados de forma declarativa
    public Movimentacao registrarMovimentacao (Movimentacao movimentacao) {
        if (movimentacao.getQtdMovimentacao() == null ||
                movimentacao.getQtdMovimentacao() <= 0) {
            throw new IllegalArgumentException(
                    "A quantidade da movimentação deve ser maior que zero."
            );
        }else{
            if(movimentacao.getEstoque() == null || movimentacao.getEstoque().getEstoqueId() == null){
                throw new IllegalArgumentException(
                        "Estoque nulo."
                );
            }
            EstoqueId estoqueId = movimentacao.getEstoque().getEstoqueId();
            Optional<Estoque> estoqueEncontrado = estoqueRepository.findById(estoqueId);
            if(estoqueEncontrado.isEmpty()) {
                throw new IllegalArgumentException(
                        "Estoque não encontrado para o material e depósito informados.");
            }

            Estoque estoque = estoqueEncontrado.get();
            Integer saldoAtual = estoque.getQtdEstoque();
            if(saldoAtual == null){
                throw new IllegalArgumentException(
                        " Quantidade não informada");
            }

                if (movimentacao.getTipoMovimentacao() == null) {
                    throw new IllegalArgumentException(
                            "Tipo de entrada não informado");
                } else {

                    if (movimentacao.getTipoMovimentacao().equalsIgnoreCase("entrada")) {
                        Integer saldoNovo = saldoAtual + movimentacao.getQtdMovimentacao();
                        estoque.setQtdEstoque(saldoNovo);

                    } else if (movimentacao.getTipoMovimentacao().equalsIgnoreCase("Saida")) {
                        if (movimentacao.getQtdMovimentacao() > saldoAtual) {
                            throw new ResponseStatusException(
                                    HttpStatus.BAD_REQUEST,
                                    "Quantidade insuficiente para realizar a saída."
                            );
                        }
                         else {
                            Integer saldoNovo = saldoAtual - movimentacao.getQtdMovimentacao();
                            estoque.setQtdEstoque(saldoNovo);
                        }
                    } else {
                        throw new IllegalArgumentException(
                                "Tipo de Movimentação Invalida");
                    }
                }
                estoqueRepository.save(estoque);

                movimentacao.setEstoque(estoque);

                return movimentacaoRepository.save(movimentacao);
            }
        }
    }


