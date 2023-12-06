"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Veiculos_1 = require("../model/Veiculos");
const bancoDeDados_1 = require("./bancoDeDados");
// Inicializa uma lista de pessoas
(0, bancoDeDados_1.inicializarVeiculos)();
// Cria o servidor express
const app = (0, express_1.default)();
// Define a porta que o servidor vai escutar as requisições
const port = 3001;
// Habilitando o uso de JSON no servidor express
app.use(express_1.default.json());
// Habilitando o uso do CORS para garantir a segurança das requisições
app.use((0, cors_1.default)());
// Primeira rota, a rota principal do servidor
app.get('/', (req, res) => {
    console.log('Recebi sua requisição');
    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});
// Rota para consultar veiculos
app.get('/veiculos', (req, res) => {
    const listaDeVeiculos = (0, bancoDeDados_1.listarVeiculos)();
    console.log(`Retornando a lista dos veículos cadastrados`);
    res.json(listaDeVeiculos);
});
// Servidor sendo executado
app.listen(port, () => {
    console.log(`Servidor express ouvindo no endereço http://localhost:${port}/`);
});
// Rota para cadastrar uma pessoa
app.post('/cadastrar', (req, res) => {
    // Recuperando as informações JSON que vieram no corpo (body) da requisição (req) e desestruturando essa informação para cada atributo
    const { marca, modelo, ano_fabricacao, placa, cor, combustivel, eixos, peso, tipo_veiculo } = req.body;
    // Criando um novo objeto do tipo Pessoa com as informações recuperadas da requisição
    const veiculo = new Veiculos_1.Veiculos(marca, modelo, ano_fabricacao, placa, cor, combustivel, eixos, peso, tipo_veiculo);
    // Apenas imprimindo as informações do objeto no console do servidor
    console.log(veiculo);
    // Chamando a função para persistir (salvar) os dados da pessoa no banco de dados
    (0, bancoDeDados_1.persistirVeiculos)(veiculo);
    // Resposta que o servidor irá enviar ao front-end (A resposta será estrutura em um JSON)
    res.json({ mensagem: "Veículo cadastrado com sucesso" });
});
//# sourceMappingURL=app.js.map