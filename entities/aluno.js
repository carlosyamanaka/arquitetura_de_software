function Aluno(nome, login) {
    let a_nome = nome,
        a_login = login;
    return {
        getNome: () => a_nome,
        getLogin: () => a_login
    };
}

module.exports = Aluno;