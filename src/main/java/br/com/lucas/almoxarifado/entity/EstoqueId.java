package br.com.lucas.almoxarifado.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import org.hibernate.annotations.JoinColumnOrFormula;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class EstoqueId implements Serializable {

    @Column(name = "cod_material")
    private String codMaterial;
    @Column(name = "cod_deposito")
    private  String codDeposito;


    public EstoqueId() {
    }

    public EstoqueId(String codMaterial, String codDeposito) {
        this.codMaterial = codMaterial;
        this.codDeposito = codDeposito;
    }

    public String getCodMaterial() {
        return codMaterial;
    }

    public void setCodMaterial(String codMaterial) {
        this.codMaterial = codMaterial;
    }

    public String getCodDeposito() {
        return codDeposito;
    }

    public void setCodDeposito(String codDeposito) {
        this.codDeposito = codDeposito;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        EstoqueId estoqueId = (EstoqueId) o;
        return Objects.equals(codMaterial, estoqueId.codMaterial) && Objects.equals(codDeposito, estoqueId.codDeposito);
    }

    @Override
    public int hashCode() {
        return Objects.hash(codMaterial, codDeposito);
    }
}
