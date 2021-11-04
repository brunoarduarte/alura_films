const modelTable = require('./modelFilmsTable');

modelTable.sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log);
