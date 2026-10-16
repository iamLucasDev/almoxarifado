package br.com.lucas.almoxarifado.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;


//ResponseEntity, para construir a resposta HTTP.
// Map, para montar um JSON com o campo message.
//ex.getReason(), para obter a mensagem que defini no MovimentacaoService.

@RestControllerAdvice
public class ApiExceptionHandler{
    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<Map<String,String>>trataErro(ResponseStatusException ex){

       String mensagem  = ex.getReason();

       Map<String,String> message = Map.of("message",mensagem);

        return ResponseEntity.status(ex.getStatusCode()).body(message);
    }
}
