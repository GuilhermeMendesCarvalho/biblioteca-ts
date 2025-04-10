import express from 'express';
import bookRoutes from './routes/livrosRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', bookRoutes); // prefixo para as rotas

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
