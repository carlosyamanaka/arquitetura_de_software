const Aluno = require('./entities/aluno');
const TurmaPresencial = require('./entities/turma_presencial');

let p = Aluno('Carlos', 'Carlos');
let t = TurmaPresencial('Mat01', 8, 80);

console.log(`Aluno: ${p.getNome()}, Login: ${p.getLogin()}`);
console.log(`Código da Turma: ${t.getCodigo()}`);
console.log(`Nota: ${t.getNota()}`);
console.log(`Frequência: ${t.getFrequencia()}`);
console.log(`Aprovado: ${t.aprovado() ? 'Sim' : 'Não'}`);
