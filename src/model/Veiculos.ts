export class Veiculos {

    // atributos da classe
    private marca: string;
    private modelo: string;
    private ano_fabricacao: number;
    private placa: string;
    private cor: string;
    private combustivel: string;
    private eixos: number;
    private peso: number;
    private tipo_veiculo: string;

    //método construtor
    public constructor(_marca: string, _modelo: string, _ano_fabricacao: number, _placa: string, _cor: string, _combustivel: string, _eixos: number, _peso: number, _tipo_veiculo: string) {
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

    public getAnoFabricacao() {
        return this.ano_fabricacao;
    }

    public setVersao(_ano_fabricacao: number) {
        this.ano_fabricacao = _ano_fabricacao;
    }

    public getPlaca() {
        return this.placa;
    }

    public setPlaca(_placa: string) {
        this.placa = _placa;
    }

    public getCor(){
        return this.cor;
    }

    public setCor(_cor: string){
        this.cor = _cor
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

    public getTipoVeiculo() {
        return this.tipo_veiculo;
    }

    public setTipoVeiculo(_tipo_veiculo: string) {
        this.tipo_veiculo = _tipo_veiculo;
    }

    public mostraVeiculos() {
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