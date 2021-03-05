"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GruposSchema extends Schema {
  up() {
    this.create("grupos", (table) => {
      table.increments();
      table.timestamps();
      table.boolean("status").defaultTo(true);
      table.string("nome").notNullable();
    });
  }

  down() {
    this.drop("grupos");
  }
}

module.exports = GruposSchema;
