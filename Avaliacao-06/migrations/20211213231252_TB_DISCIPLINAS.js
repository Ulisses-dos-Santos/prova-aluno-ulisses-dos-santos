
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_DISCIPLINAS', table => {
        table.increments('id_dis').primary()
        table.string('nome_disciplina').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_DISCIPLINAS')
};

knex.select().from('TB_DISCIPLINAS').timeout(1000)

knex('TB_DISCIPLINAS').insert({nome_disciplina: 'Fisica'})

knex('TB_DISCIPLINA')
  .where('nome_disciplina', false)
  .del()