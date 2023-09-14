let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const clientes = new Clientes();

const cli1 = new Cliente('Natinho', 101, c1);
const cli2 = new Cliente('Lucas', 102, p1);
const cli3 = new Cliente('Lorem', 103, cb1);

clientes.inserir(cli1);
clientes.inserir(cli2);
clientes.inserir(cli3);

console.log(`Clientes : ${clientes.listar()}`);
console.log(`Cliente 101 : ${clientes.pesquisar(101)}`);
clientes.remover(103);
console.log(`Clientes após remoção de cliente 103 ${clientes.listar()}`);