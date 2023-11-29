"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculos = void 0;
class Veiculos {
    //método construtor
    constructor(_marca, _modelo, _versao, _placa, _combustivel, _eixos, _peso) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.versao = _versao;
        this.placa = _placa;
        this.combustivel = _combustivel;
        this.eixos = _eixos;
        this.peso = _peso;
    }
    // métodos GETTERS and SETTERS
    /**
     * Retorna o marca do veiculo
     *
     * @returns marca : marca do veículo
     */
    getMarca() {
        return this.marca;
    }
    /**
     * Atribui o parâmetro ao atributo nome
     *
     * @param _marca : nome do veículo
     */
    setMarca(_marca) {
        this.marca = _marca;
    }
    /**
     * Retorna a Modelo do veículo
     *
     * @returns modelo : modelo do veiculo
     */
    getModelo() {
        return this.modelo;
    }
    setModelo(_modelo) {
        this.modelo = _modelo;
    }
    getVersao() {
        return this.versao;
    }
    setVersao(_versao) {
        this.versao = _versao;
    }
    getPlaca() {
        return this.placa;
    }
    setPlaca(_placa) {
        this.placa = _placa;
    }
    getCombustivel() {
        return this.combustivel;
    }
    setCombustivel(_combustivel) {
        this.combustivel = _combustivel;
    }
    getEixos() {
        return this.eixos;
    }
    setEixos(_eixos) {
        this.eixos = _eixos;
    }
    getPeso() {
        return this.peso;
    }
    /**
     * Atribui peso ao veiculo
     *
     * @param _peso
     *  peso do veículo
     */
    setPeso(_peso) {
        this.peso = _peso;
    }
    mostraVeiculos() {
        console.log(`Marca: ${this.marca}
        Modelo: ${this.modelo}
        Versão: ${this.versao}
        Placa: ${this.placa}
        Combustível: ${this.combustivel}
        Eixos: ${this.eixos}
        Peso: ${this.peso}`);
    }
}
exports.Veiculos = Veiculos;
//# sourceMappingURL=Veiculos.js.map