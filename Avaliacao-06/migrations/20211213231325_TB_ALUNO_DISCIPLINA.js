
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ALUNO_DISCIPLINA', table => {
        table.integer('alunos_id').unsigned()
        table.integer('disciplinas_id').unsigned()
        table.foreign('alunos_id').references('TB_ALUNOS.id_al')
        table.foreign('disciplinas_id').references('TB_DISCIPLINAS.id_dis')
        table.integer('notas')
        table.integer('periodo')
        table.primary(['alunos_id', 'disciplinas_id'])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNO_DISCIPLINA')
};

knex.select().from('TB_ALUNO_DISCIPLINA').timeout(1000)

knex('TB_ALUNO_DISCIPLINA').insert({alunos_id: 2, disciplinas_id: 3, notas: 2, periodo: 2})

