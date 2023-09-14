class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(Cliente) {
        this.clientes.push(Cliente);
    }
    remover(cpf) {
        const ClienteARemover = this.pesquisar(cpf);
        if (ClienteARemover) {
            const indiceCliente = this.clientes.indexOf(ClienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
