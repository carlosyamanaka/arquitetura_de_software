function aluno(nome, login) {
    let a_nome = nome,
        a_login = login;
    return {
        getNome: () => a_nome,
        getLogin: () => a_login
    };
}

function turma(codigo, nota) {
    let t_codigo = codigo,
        t_nota = nota;
    return {
        getCodigo: () => t_codigo,
        getNota: () => t_nota,
        aprovado: () => t_nota > 6
    };
}

function turma_presencial(codigo, nota, frequencia) {
    let turmaObj = turma(codigo, nota);

    let tp_frequencia = frequencia;
    return {
        ...turmaObj,
        getFrequencia: () => tp_frequencia,
        aprovado: () => turmaObj.aprovado() && tp_frequencia >= 75
    };
}

let p = aluno('Carlos', 'Carlos');
let t = turma_presencial('Mat01', 8, 80);

console.log(`Aluno: ${p.getNome()}, Login: ${p.getLogin()}`);
console.log(`Código da Turma: ${t.getCodigo()}`);
console.log(`Nota: ${t.getNota()}`);
console.log(`Frequência: ${t.getFrequencia()}`);
console.log(`Aprovado: ${t.aprovado() ? 'Sim' : 'Não'}`);
