
package br.com.lucas.almoxarifado.controller;


import br.com.lucas.almoxarifado.entity.Estoque;
import br.com.lucas.almoxarifado.repository.DepositoRepository;
import br.com.lucas.almoxarifado.repository.EstoqueRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EstoqueController {

    private final EstoqueRepository estoqueRepository;;

    public EstoqueController(EstoqueRepository estoqueRepository) {
        this.estoqueRepository = estoqueRepository;

    }

    @GetMapping("/materiais/{codigo}/estoque")
    public ResponseEntity<List<Estoque>> retornaMaterial(
            @PathVariable("codigo") String codigo) {
        List<Estoque>list = estoqueRepository.findByEstoqueIdCodMaterial(codigo);
        return   ResponseEntity.ok(list);
    };


    @GetMapping("/depositos/{codigo}/estoque")
    public  ResponseEntity<List<Estoque>> retornaDeposito(
            @PathVariable("codigo") String codigo){
        List<Estoque>list = estoqueRepository.findByEstoqueIdCodDeposito(codigo);
        return ResponseEntity.ok(list);
    }


}