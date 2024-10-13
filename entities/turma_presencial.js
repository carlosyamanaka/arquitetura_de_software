const Turma = require('./turma');

function TurmaPresencial(codigo, nota, frequencia) {
    let turmaObj = Turma(codigo, nota);

    let tp_frequencia = frequencia;
    return {
        ...turmaObj,
        getFrequencia: () => tp_frequencia,
        aprovado: () => turmaObj.aprovado() && tp_frequencia >= 75
    };
}

module.exports = TurmaPresencial;