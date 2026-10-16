package br.com.lucas.almoxarifado.repository;

import br.com.lucas.almoxarifado.entity.Material;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialRepository extends  JpaRepository <Material,String>{
}
