class Poupanca extends Conta {
    constructor(numero, saldo) {
        super(numero, saldo);
        this._dataAniversario = new Date();
    }
    get dataAniversario() {
        return this._dataAniversario;
    }
    set dataAniversario(value) {
        this._dataAniversario = value;
    }
    atualizarSaldoAniversario() {
        const hoje = new Date();
        if (hoje.getDay() === this.dataAniversario.getDay()) {
            this.creditar(this.saldo * 0.02);
        }
    }
}
