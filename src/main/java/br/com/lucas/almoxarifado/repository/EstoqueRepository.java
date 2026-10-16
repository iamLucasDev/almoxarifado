package br.com.lucas.almoxarifado.repository;

import br.com.lucas.almoxarifado.entity.Estoque;
import br.com.lucas.almoxarifado.entity.EstoqueId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface EstoqueRepository extends JpaRepository <Estoque, EstoqueId> {
    List<Estoque> findByEstoqueIdCodMaterial(String codMaterial);
    List<Estoque>findByEstoqueIdCodDeposito(String codDeposito);
}
