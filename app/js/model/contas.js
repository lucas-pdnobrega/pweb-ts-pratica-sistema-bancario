class Contas {
    constructor() {
        this.contas = new Array();
        const c1 = new Conta('1', 100);
        const c2 = new Conta('2', 200);
        this.contas.push(c1, c2);
    }
    inserir(conta) {
        this.contas.push(conta);
    }
    remover(numero) {
        const contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            const indiceConta = this.contas.indexOf(contaARemover);
            if (indiceConta > -1) {
                this.contas.splice(indiceConta, 1);
            }
        }
    }
    pesquisar(numero) {
        return this.contas.find(conta => conta.numero === numero);
    }
    listar() {
        return this.contas;
    }
}
