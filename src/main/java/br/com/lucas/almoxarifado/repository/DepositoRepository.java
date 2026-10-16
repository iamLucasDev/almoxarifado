package br.com.lucas.almoxarifado.repository;

import br.com.lucas.almoxarifado.entity.Deposito;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepositoRepository extends JpaRepository<Deposito,String> {
}
