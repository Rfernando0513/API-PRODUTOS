class Produto {
    constructor({ name, preco, tamanho}) {
        this.name = name;
        this.preco = preco;
        this.tamanho = preco;
    }

    isValid(){
        return this.name && this.preco && this.tamanho;
    }
}

module.exports = Produto;