import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa('Maria Zeferina',
                        '33333333333333',
                        new Date(1972, 8, 29),
                        '99999999999999',
                        'Rua das Corridas',
                        165,
                        55)

pessoa.cadastroPessoa(pessoa)