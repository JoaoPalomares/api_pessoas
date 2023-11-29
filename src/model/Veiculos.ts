export class Veiculos {

    // atributos da classe
    private marca: string;
    private modelo: string;
    private versao: string;
    private placa: string;
    private combustivel: string;
    private eixos: number;
    private peso: number;

    //método construtor
    public constructor(_marca: string, _modelo: string, _versao: string, _placa: string, _combustivel: string, _eixos: number, _peso: number) {
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
    public getMarca() {
        return this.marca;
    }

    /**
     * Atribui o parâmetro ao atributo nome
     * 
     * @param _marca : nome do veículo
     */
    public setMarca(_marca: string) {
        this.marca = _marca;
    }

    /**
     * Retorna a Modelo do veículo
     * 
     * @returns modelo : modelo do veiculo
     */
    public getModelo() {
        return this.modelo;
    }

    public setModelo(_modelo: string) {
        this.modelo = _modelo;
    }

    public getVersao() {
        return this.versao;
    }

    public setVersao(_versao: string) {
        this.versao = _versao;
    }

    public getPlaca() {
        return this.placa;
    }

    public setPlaca(_placa: string) {
        this.placa = _placa;
    }

    public getCombustivel() {
        return this.combustivel;
    }

    public setCombustivel(_combustivel: string) {
        this.combustivel = _combustivel;
    }

    public getEixos() {
        return this.eixos;
    }

    public setEixos(_eixos: number) {
        this.eixos = _eixos;
    }

    public getPeso() {
        return this.peso;
    }

    /**
     * Atribui peso ao veiculo
     * 
     * @param _peso
     *  peso do veículo
     */
    public setPeso(_peso: number) {
        this.peso = _peso;
    }

    public mostraVeiculos() {
        console.log(`Marca: ${this.marca}
        Modelo: ${this.modelo}
        Versão: ${this.versao}
        Placa: ${this.placa}
        Combustível: ${this.combustivel}
        Eixos: ${this.eixos}
        Peso: ${this.peso}`);
    }
}