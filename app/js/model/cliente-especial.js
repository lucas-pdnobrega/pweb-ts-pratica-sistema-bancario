class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = [];
    }
    get nome() {
        return super.nome;
    }
    set nome(nome) {
        super.nome = nome;
    }
    get cpf() {
        return super.cpf;
    }
    set cpf(cpf) {
        super.cpf = cpf;
    }
    get conta() {
        return super.conta;
    }
    set conta(conta) {
        super.conta = conta;
    }
    get dependentes() {
        return this._dependentes;
    }
    inserir(cliente) {
        this._dependentes.push(cliente);
    }
    remover(cpf) {
        const ClienteARemover = this.pesquisar(cpf);
        if (ClienteARemover) {
            const idxCliente = this._dependentes.indexOf(ClienteARemover);
            if (idxCliente > -1) {
                this._dependentes.splice(idxCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this._dependentes.find(cliente => cliente.cpf == cpf);
    }
    toString() {
        return `Cliente Especial ${super.nome} | CPF ${super.cpf} | Conta ${super.conta} | Dependentes ${this.dependentes}`;
    }
}
