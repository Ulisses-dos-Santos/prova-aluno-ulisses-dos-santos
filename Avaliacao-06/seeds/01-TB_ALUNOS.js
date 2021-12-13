
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_ALUNOS').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_ALUNOS').insert([
        {id_al: 1, nome_aluno: 'Paulo'},
        {id_al: 2, nome_aluno: 'Pablo'},
        {id_al: 3, nome_aluno: 'Jhonas'}
      ]);
    });
};
