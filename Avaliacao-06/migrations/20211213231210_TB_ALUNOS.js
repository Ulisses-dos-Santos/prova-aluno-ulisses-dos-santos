exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ALUNOS', table => {
        table.increments('id_al').primary()
        table.string('nome_aluno').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNOS')
};

knex.select().from('TB_ALUNOS').timeout(1000)

knex('TB_ALUNOS').insert({nome_aluno: 'Ana'})

knex('TB_ALUNOS')
  .where('nome_aluno', false)
  .del()