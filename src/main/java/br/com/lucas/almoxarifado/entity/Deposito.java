package br.com.lucas.almoxarifado.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "deposito")

   public class Deposito {

    @Id
    @Column(name = "cod_deposito")
    private String codDeposito;

    @Column(name = "nome", nullable = false)// nullable == not null
    private String nome;

 public Deposito(){

 };

 public Deposito(String codDeposito, String nome) {
  this.codDeposito = codDeposito;
  this.nome = nome;
 }

 public String getCodDeposito() {
  return codDeposito;
 }

 public void setCodDeposito(String codDeposito) {
  this.codDeposito = codDeposito;
 }

 public String getNome() {
  return nome;
 }

 public void setNome(String nome) {
  this.nome = nome;
 }
}