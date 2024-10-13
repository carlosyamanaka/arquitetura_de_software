function Turma(codigo, nota) {
    let t_codigo = codigo,
        t_nota = nota;
    return {
        getCodigo: () => t_codigo,
        getNota: () => t_nota,
        aprovado: () => t_nota > 6
    };
}

module.exports = Turma;