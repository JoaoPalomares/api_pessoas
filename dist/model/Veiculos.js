"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculos = void 0;
class Veiculos {
    //método construtor
    constructor(_marca, _modelo, _ano_fabricacao, _placa, _cor, _combustivel, _eixos, _peso, _tipo_veiculo) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.ano_fabricacao = _ano_fabricacao;
        this.placa = _placa;
        this.cor = _cor;
        this.combustivel = _combustivel;
        this.eixos = _eixos;
        this.peso = _peso;
        this.tipo_veiculo = _tipo_veiculo;
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
    getAnoFabricacao() {
        return this.ano_fabricacao;
    }
    setVersao(_ano_fabricacao) {
        this.ano_fabricacao = _ano_fabricacao;
    }
    getPlaca() {
        return this.placa;
    }
    setPlaca(_placa) {
        this.placa = _placa;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
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
    getTipoVeiculo() {
        return this.tipo_veiculo;
    }
    setTipoVeiculo(_tipo_veiculo) {
        this.tipo_veiculo = _tipo_veiculo;
    }
    mostraVeiculos() {
        console.log(`Marca: ${this.marca}
        Modelo: ${this.modelo}
        Ano Fabricação: ${this.ano_fabricacao}
        Placa: ${this.placa}
        Cor: ${this.cor}
        Combustível: ${this.combustivel}
        Eixos: ${this.eixos}
        Peso: ${this.peso};
        Tipo de Veículo: ${this.tipo_veiculo};`);
    }
}
exports.Veiculos = Veiculos;
//# sourceMappingURL=Veiculos.js.map