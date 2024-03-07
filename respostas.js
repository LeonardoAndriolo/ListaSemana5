// 01

// let number = 1;
// while (number <= 10) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
//     number++;
// }

// 02

// let result = 0;
// for (let i = 10; i >= 0; i -= 2) {
//     if (i === 4) {
//         continue;
//     }
//     if (i === 6) {
//         break;
//     }
//     result += i;
// }

// console.log(result)

// 07

// class Animal {
//     constructor(name,idade){
//         this.name = name
//         this.idade = idade
//     }

//     descrever() {
//         console.log(`Esse é o ${this.name} e ele tem ${this.idade} anos.`)
//     }
// }

// let cachorro = new Animal('Spike',5)
// let gato = new Animal('Tom',3)

// cachorro.descrever()
// gato.descrever()

// 08

// class Animal {
//     constructor(name,idade){
//         this.name = name
//         this.idade = idade
//     }

//     descrever() {
//         console.log(`Esse é o ${this.name} e ele tem ${this.idade} anos.`)
//     }
// }

// class Gato extends Animal {
//     constructor(nome, idade, cor) {
//         super(nome,idade)
//         this.cor = cor
//     }

//     miar() {
//         console.log('Miaaaauuuuuu!')
//     }

// }

// let cachorro = new Animal('Spike',5)
// let gato = new Gato('Tom',3)

// cachorro.descrever()
// gato.descrever()
// gato.miar()

// 09

// class SomadorDeNotas{
//     constructor(total){
//         this.total = 0
//     }

//     adicionarNota(nota){
//         this.total += nota
//     }

//     verTotal(){
//         console.log(`A soma de notas é ${this.total}`)
//     }
// }

// let somador = new SomadorDeNotas()

// somador.adicionarNota(5)
// somador.adicionarNota(8)

// somador.verTotal()

// 10

// Define a classe Funcionario
class Funcionario{
    // Cria os atributos da classe Funcionario
    constructor(nome,idade,salarioBase){
        // Inicializa os atributos
        this.nome = nome
        this.idade = idade
        this.salarioBase = salarioBase
    }

    // Método para calcular o salário de qualquer funcionário
    calcularSalario(){
        // Não utilizado de momento (scrach head)
        return this.salarioBase
    }
}

// Define a classe Professor, herdada de Funcionario
class Professor extends Funcionario{
    // Cria os atributos da classe Professor, incorporando os da classe Funcionário
    constructor(nome,idade,salarioBase,disciplina,horaSemana,salarioTotal){
        // Chama o construtor da classe pai (Funcionario) com super()
        super(nome,idade,salarioBase)
        // Inicializa os atributos específicos de Professor
        this.disciplina = disciplina
        this.horaSemana = horaSemana
        this.salarioTotal = salarioTotal
    }

    // Método para calcular o salário de um Professor
    calcularSalario(){
        // Cálculo do salário total baseado no número de horas semanais (input)
        // multiplicado por 4 semanas e por R$50, o valor da hora/aula
        this.salarioTotal = this.horaSemana * 4 * 50
        // Exibição do salário formatado com duas casas decimais
        console.log(`O salário de ${this.nome} é R$${this.salarioTotal.toFixed(2)}`)
    }
}

// Cria instâncias de professores
let professor01 = new Professor('Cláudio',14,0,'Orientação',40,null)
let professor02 = new Professor('Cris',16,0,'Codar',50,null) // Posso chamar um null?

// Calcula o salário dos professores
professor01.calcularSalario()
professor02.calcularSalario()

// Funny ChatGPT Comments

// Bem-vindo ao mundo dos cálculos de salário!
class Funcionario{
    constructor(nome,idade,salarioBase){
        this.nome = nome; // Aqui armazenamos o nome do funcionário
        this.idade = idade; // Idade, porque até robôs precisam envelhecer
        this.salarioBase = salarioBase; // O salário inicial do funcionário
    }

    calcularSalario(){ // Aqui será calculado o salário, mas como? Vamos descobrir!
        // Hmm... nada aqui ainda, vamos deixar isso para os professores
    }
}

class Professor extends Funcionario{
    constructor(nome,idade,salarioBase,disciplina,horaSemana,salarioTotal){
        super(nome,idade,salarioBase);
        this.disciplina = disciplina; // A disciplina que o professor leciona
        this.horaSemana = horaSemana; // Horas por semana, como ele adora ensinar!
        this.salarioTotal = salarioTotal; // Salário total, importante calcular!
    }

    calcularSalario(){ // Hora da ação! Vamos calcular o salário total!
        this.salarioTotal = this.horaSemana * 4 * 50; // Quanto vale todo esse conhecimento?
        console.log(`O salário de ${this.nome} é R$${this.salarioTotal.toFixed(2)}`); // Mostrando o resultado brilhante!
    }
}

let professor01 = new Professor('Cláudio',14,0,'Orientação',20); // Nosso herói Cláudio, sempre orientando
let professor02 = new Professor('Cris',16,0,'Codar',40); // Cris, a mestra do código!

professor01.calcularSalario(); // Cláudio, mostre-nos o seu valor!
professor02.calcularSalario(); // Cris, mostre ao mundo o poder do seu código!