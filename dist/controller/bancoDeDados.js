"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicializarVeiculos = exports.listarVeiculos = exports.persistirVeiculos = void 0;
const Veiculos_1 = require("../model/Veiculos");
/**
 * Lista de veiculos que são armazenadas durante a execução do programa
 */
let bancoDadosVeiculos = [];
/**
 * Cadastra um veiculo na lista, simulando um banco de dados.
 * Os dados são armazenados somente durante tempo de execução
 *
 * @param veiculos - Veiculo a ser inserida na lista
 * @returns Em caso de erro, é retornado os detalhes do erro a quem chamou esta função
 */
function persistirVeiculos(veiculos) {
    //persistindo os dados
    try {
        bancoDadosVeiculos.push(veiculos);
    }
    catch (_a) {
        return `Erro ao persistir os dados\n ${Error}`;
    }
}
exports.persistirVeiculos = persistirVeiculos;
/**
 * Lista todas as pessoas cadastradas
 * @returns Lista de pessoas cadastradas
 */
function listarVeiculos() {
    return bancoDadosVeiculos;
}
exports.listarVeiculos = listarVeiculos;
/**
 * Método para inicializar o array com 5 pessoas.
 * Apenas para a aplicação não ter um array vazio
 */
function inicializarVeiculos() {
    bancoDadosVeiculos.push(new Veiculos_1.Veiculos('Volkswagen', 'Polo', 2002, 'MTG-1174', 'prata', 'Flex', 2, 1054, 'leve'));
    bancoDadosVeiculos.push(new Veiculos_1.Veiculos('Lamborghini', 'Aventador', 2014, 'NDS-7960', 'amarelo', 'Gasolina', 2, 1575, 'leve'));
    bancoDadosVeiculos.push(new Veiculos_1.Veiculos('Porsche', '911', 2012, 'azul', 'KBN-1474', 'Gasolina', 2, 1505, 'leve'));
    bancoDadosVeiculos.push(new Veiculos_1.Veiculos('Volvo', 'FH', 2015, 'HSW-0226', 'rosa', 'Diesel', 6, 9490, 'pesado'));
    bancoDadosVeiculos.push(new Veiculos_1.Veiculos('Scania', 'R450', 2017, 'MQO-6056', 'preto', 'Diesel', 4, 9917, 'pesado'));
}
exports.inicializarVeiculos = inicializarVeiculos;
//# sourceMappingURL=bancoDeDados.js.map