class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    inserir(Cliente: Cliente): void {
        this.clientes.push(Cliente);
    }

    remover(cpf: number): void {
        const ClienteARemover = this.pesquisar(cpf);
        if (ClienteARemover) {
            const indiceCliente = this.clientes.indexOf(ClienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf: number): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

}
