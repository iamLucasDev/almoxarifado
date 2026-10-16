package br.com.lucas.almoxarifado.repository;

import br.com.lucas.almoxarifado.entity.Movimentacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovimentacaoRepository extends JpaRepository<Movimentacao,Integer> {
}
