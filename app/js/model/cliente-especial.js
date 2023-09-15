class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = [];
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
