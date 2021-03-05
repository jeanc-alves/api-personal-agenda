"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ContatoSchema extends Schema {
  up() {
    this.create("contatos", (table) => {
      table.increments();
      table.timestamps();

      table.string("nome").notNullable();
      table.boolean("status").defaultTo(false);
      table.string("endereco").notNullable();
      table.string("telefone").notNullable();
    });
  }

  down() {
    this.drop("contatos");
  }
}

module.exports = ContatoSchema;
