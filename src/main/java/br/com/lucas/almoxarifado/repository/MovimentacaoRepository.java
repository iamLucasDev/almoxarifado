package br.com.lucas.almoxarifado.repository;

import br.com.lucas.almoxarifado.entity.Movimentacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovimentacaoRepository extends JpaRepository<Movimentacao,Integer> {
}
