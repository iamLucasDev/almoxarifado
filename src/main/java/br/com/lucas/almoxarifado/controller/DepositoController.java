package br.com.lucas.almoxarifado.controller;


import br.com.lucas.almoxarifado.entity.Deposito;
import br.com.lucas.almoxarifado.repository.DepositoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class DepositoController {
    private final DepositoRepository depositoRepository;

    public DepositoController(DepositoRepository depositoRepository) {
        this.depositoRepository = depositoRepository;
    }

    @GetMapping("/deposito")
    public ResponseEntity<List<Deposito>> retornaDeposito(){
        List<Deposito>list = depositoRepository.findAll();
        return ResponseEntity.ok(list);
    };
}
