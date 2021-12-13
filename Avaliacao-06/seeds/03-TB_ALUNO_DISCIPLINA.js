
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_ALUNO_DISCIPLINA').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_ALUNO_DISCIPLINA').insert([
        {alunos_id: 1, disciplinas_id: 2, notas: 10, periodo: 2},
        {alunos_id: 2, disciplinas_id: 1, notas: 5, periodo: 2},
        {alunos_id: 3, disciplinas_id: 3, notas: 8, periodo: 4}
      ]);
    });
};
