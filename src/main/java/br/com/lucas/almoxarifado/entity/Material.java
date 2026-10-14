package br.com.lucas.almoxarifado.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "material")

public class Material {

    @Id
    @Column(name = "cod_material")
    private String codMaterial;

    @Column(name = "nome_material")
    private  String nomeMaterial;

    @Column(name = "descricao_material")
    private  String descricaoMaterial;

    @Column(name = "unidade_medida")
    private  String unidadeMedida;


    public Material(){

    }

    public Material(String codMaterial, String nomeMaterial, String descricaoMaterial, String unidadeMedida) {
        this.codMaterial = codMaterial;
        this.nomeMaterial = nomeMaterial;
        this.descricaoMaterial = descricaoMaterial;
        this.unidadeMedida = unidadeMedida;
    }

    public String getNomeMaterial() {
        return nomeMaterial;
    }

    public void setNomeMaterial(String nomeMaterial) {
        this.nomeMaterial = nomeMaterial;
    }

    public String getUnidadeMedida() {
        return unidadeMedida;
    }

    public void setUnidadeMedida(String unidadeMedida) {
        this.unidadeMedida = unidadeMedida;
    }

    public String getDescricaoMaterial() {
        return descricaoMaterial;
    }

    public void setDescricaoMaterial(String descricaoMaterial) {
        this.descricaoMaterial = descricaoMaterial;
    }

    public String getCodMaterial() {
        return codMaterial;
    }

    public void setCodMaterial(String codMaterial) {
        this.codMaterial = codMaterial;
    }
}
