import { Veiculos } from "../model/Veiculos";

/**
 * Lista de veiculos que são armazenadas durante a execução do programa
 */
let bancoDadosVeiculos: Veiculos[] = [];

/**
 * Cadastra um veiculo na lista, simulando um banco de dados.
 * Os dados são armazenados somente durante tempo de execução
 * 
 * @param veiculos - Veiculo a ser inserida na lista
 * @returns Em caso de erro, é retornado os detalhes do erro a quem chamou esta função
 */
export function persistirVeiculos(veiculos: Veiculos) {
    //persistindo os dados
    try {
        bancoDadosVeiculos.push(veiculos);
    } catch {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}

/**
 * Lista todas as pessoas cadastradas
 * @returns Lista de pessoas cadastradas
 */
export function listarVeiculos() {
    return bancoDadosVeiculos;
}

/**
 * Método para inicializar o array com 5 pessoas.
 * Apenas para a aplicação não ter um array vazio
 */
export function inicializarVeiculos() {
    bancoDadosVeiculos.push(
        new Veiculos('Volkswagen','Polo', '1.0','MTG-1174','Flex', 2, 1054));
    
    bancoDadosVeiculos.push(
        new Veiculos('Lamborghini','Aventador','6.5','NDS-7960','Gasolina', 2, 1575));
    
    bancoDadosVeiculos.push(
        new Veiculos('Porsche', '911', '3.0','KBN-1474','Gasolina', 2, 1505));
    
    bancoDadosVeiculos.push(
        new Veiculos('Volvo','FH', '12.8' ,'HSW-0226','Diesel', 6, 9490));

    bancoDadosVeiculos.push(
        new Veiculos('Scania','R450', '6.0','MQO-6056','Diesel', 4, 9917));
}