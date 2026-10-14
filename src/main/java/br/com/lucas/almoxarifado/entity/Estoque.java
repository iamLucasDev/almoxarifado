package br.com.lucas.almoxarifado.entity;

import jakarta.persistence.*;

import java.io.Serializable;


@Entity
@Table(name  = "estoque")

public class Estoque implements Serializable {
      @EmbeddedId
      private EstoqueId estoqueId;


      @ManyToOne ///vários registros de estoque podem se relacionar com o mesmo material.
      @MapsId("codMaterial") //conecta esse relacionamento ao atributo correspondente dentro de EstoqueId.
      @JoinColumn(name = "cod_material",referencedColumnName = "cod_material") //indica a coluna usada no relacionamento
      private Material material;

      @ManyToOne
      @MapsId("codDeposito")
      @JoinColumn(name = "cod_deposito", referencedColumnName = "cod_deposito")
      private Deposito deposito;


      @Column(name = "qtd_estoque")
      private Integer qtdEstoque;
      public Estoque() {
      }

      public Integer getQtdEstoque() {
            return qtdEstoque;
      }

      public void setQtdEstoque(Integer qtdEstoque) {
            this.qtdEstoque = qtdEstoque;
      }

      public EstoqueId getEstoqueId() {
            return estoqueId;
      }

      public void setEstoqueId(EstoqueId estoqueId) {
            this.estoqueId = estoqueId;
      }

      public Material getMaterial() {
            return material;
      }

      public void setMaterial(Material material) {
            this.material = material;
      }

      public Deposito getDeposito() {
            return deposito;
      }

      public void setDeposito(Deposito deposito) {
            this.deposito = deposito;
      }
}
