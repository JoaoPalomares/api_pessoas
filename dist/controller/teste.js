"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Pessoas
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa('Gabriel', '521.535.110-46', new Date(2000, 9, 15), '(28) 2929-3317', 'Rua Número 1', 170, 70);
let pessoa2 = new Pessoa_1.Pessoa('Gael', '857.376.410-40', new Date(1960, 8, 14), '(13) 3017-5555', 'Rua Número 2', 160, 60);
let pessoa3 = new Pessoa_1.Pessoa('Guilherme', '183.279.290-03', new Date(1900, 8, 14), '(67) 2294-1728', 'Rua Número 3', 150, 50);
pessoa.mostraPessoa();
console.log('\n');
pessoa2.mostraPessoa();
console.log('\n');
pessoa3.mostraPessoa();
console.log('\n');
pessoa.falar();
pessoa.falarFrase("Eu sou ANGOLANO 👌");
pessoa.andar();
pessoa.andarRapido(37);
pessoa.comer();
pessoa.comerPrato("Strogonof");
console.log('\n');
pessoa2.falar();
pessoa2.falarFrase("Chama🤣🤣🤣");
pessoa2.andar();
pessoa2.andarRapido(27);
pessoa2.comer();
pessoa2.comerPrato("Hamburguer");
console.log('\n');
pessoa3.falar();
pessoa3.falarFrase("Vem pro fut, vem!!!Óh tá pegado, tá estralano fio!!");
pessoa3.andar();
pessoa3.andarRapido(17);
pessoa3.comer();
pessoa3.comerPrato("Pizza");
//Pessoas
//# sourceMappingURL=teste.js.map