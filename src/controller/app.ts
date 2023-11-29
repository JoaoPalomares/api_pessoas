import express from "express";
import cors from 'cors';
import { Veiculos } from "../model/Veiculos";
import { inicializarVeiculos, listarVeiculos, persistirVeiculos} from "./bancoDeDados";

// Inicializa uma lista de pessoas
inicializarVeiculos();

// Cria o servidor express
const app = express();
// Define a porta que o servidor vai escutar as requisições
const port: number = 3001;

// Habilitando o uso de JSON no servidor express
app.use(express.json());

// Habilitando o uso do CORS para garantir a segurança das requisições
app.use(cors());

// Primeira rota, a rota principal do servidor
app.get('/', (req, res) => {
    console.log('Recebi sua requisição');

    res.send({ mensagem: "Estou devolvendo a resposta para sua requisição" });
});

// Rota para consultar veiculos
app.get('/veiculos', (req, res) => {
    const listaDeVeiculos = listarVeiculos();

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
    const { marca, modelo, versao, placa, combustivel, eixos, peso } = req.body;

    // Criando um novo objeto do tipo Pessoa com as informações recuperadas da requisição
    const veiculo = new Veiculos(marca, modelo, versao, placa, combustivel, eixos, peso);

    // Apenas imprimindo as informações do objeto no console do servidor
    console.log(veiculo);

    // Chamando a função para persistir (salvar) os dados da pessoa no banco de dados
    persistirVeiculos(veiculo);

    // Resposta que o servidor irá enviar ao front-end (A resposta será estrutura em um JSON)
    res.json({ mensagem: "Veículo cadastrado com sucesso" });
})