
exports.up = function(knex) {
    return knex.schema.createTable("projects", function(table) {
      table.increments("id");
      table.string("name", 255);
      table.string("description", 255);
      table.string("frameworks", 255);
      table.string("namedLead", 255);
      table.string("channelName", 255);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("projects");
  };