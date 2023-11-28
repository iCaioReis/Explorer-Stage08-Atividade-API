const path = require("path") 
//Utilizado para construir diretórios de forma automética independente do sistema operacional

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    useNullAsDefault: true
  },
};
