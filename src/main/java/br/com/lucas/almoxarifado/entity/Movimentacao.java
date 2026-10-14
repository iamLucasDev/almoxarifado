package br.com.lucas.almoxarifado.entity;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "movimentacao")

public class Movimentacao {
    @Id
    @Column(name = "id_movimentacao")
    private Integer idMovimentacao;

    @ManyToOne
    @JoinColumns({ //permite relacionar tabelas usando mais de uma coluna
            @JoinColumn(name = "cod_material", referencedColumnName = "cod_material"),
            @JoinColumn(name = "cod_deposito", referencedColumnName = "cod_deposito")
    })

    private Estoque estoque;

    @Column(name = "tipo_movimentacao")
    private String tipoMovimentacao;

    @Column(name = "qtd_movimentacao")
    private Integer qtdMovimentacao;

    @Column(name = "data_hora")
    private LocalDateTime dataHora;

    public Integer getIdMovimentacao() {
        return idMovimentacao;
    }

    public void setIdMovimentacao(Integer idMovimentacao) {
        this.idMovimentacao = idMovimentacao;
    }

    public Estoque estoque() {
        return estoque;
    }

    public void setEstoque(Estoque estoque) {
        this.estoque = estoque;
    }

    public Estoque getEstoque() {
        return estoque;
    }

    public String getTipoMovimentacao() {
        return tipoMovimentacao;
    }

    public void setTipoMovimentacao(String tipoMovimentacao) {
        this.tipoMovimentacao = tipoMovimentacao;
    }

    public Integer getQtdMovimentacao() {
        return qtdMovimentacao;
    }

    public void setQtdMovimentacao(Integer qtdMovimentacao) {
        this.qtdMovimentacao = qtdMovimentacao;
    }

    public LocalDateTime getDataHora() {
        return dataHora;
    }

    public void setDataHora(LocalDateTime dataHora) {
        this.dataHora = dataHora;
    }

    public Movimentacao() {
    }

    public Movimentacao(Integer idMovimentacao, Integer qtdMovimentacao, LocalDateTime dataHora, String tipoMovimentacao, Estoque codigosEstoque) {
        this.idMovimentacao = idMovimentacao;
        this.qtdMovimentacao = qtdMovimentacao;
        this.dataHora = dataHora;
        this.tipoMovimentacao = tipoMovimentacao;
        this.estoque = estoque;
    }
}
