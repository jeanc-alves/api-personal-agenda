"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddGrupoOnContatoSchema extends Schema {
  up() {
    this.table("contatos", (table) => {
      table
        .integer("grupo_id")
        .unsigned()
        .references("id")
        .inTable("contatos")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
  }

  down() {
    this.table("contatos", (table) => {
      table.dropColumn("grupo_id");
      // reverse alternations
    });
  }
}

module.exports = AddGrupoOnContatoSchema;
