package br.com.lucas.almoxarifado.controller;


import br.com.lucas.almoxarifado.entity.Movimentacao;
import br.com.lucas.almoxarifado.service.MovimentacaoService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/movimentacoes")
public class MovimentacaoController {

    @Autowired //usada para fazer a injeção automática de dependências
    private MovimentacaoService movimentacaoService;

    @PostMapping
    public ResponseEntity<Movimentacao> criarMovimentacao(@RequestBody  Movimentacao movimentacao){
        movimentacaoService.registrarMovimentacao(movimentacao);

        return ResponseEntity.status(HttpStatus.CREATED).body(movimentacao);
    }

}
