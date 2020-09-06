import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// Delete: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro -> request.body
// Route Params: Identificar qual recurso eu quero atualizar ou deletar -> request.params
// Query Params: Paginação, filtros, ordenação -> request.query

app.use(routes);

//localhost:3333
app.listen(3333);