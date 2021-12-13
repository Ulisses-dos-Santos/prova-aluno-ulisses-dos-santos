
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_DISCIPLINAS').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_DISCIPLINAS').insert([
        {id_dis: 1, nome_disciplina: 'Geografia'},
        {id_dis: 2, nome_disciplina: 'Historia'},
        {id_dis: 3, nome_disciplina: 'Matematica'}
      ]);
    });
};
