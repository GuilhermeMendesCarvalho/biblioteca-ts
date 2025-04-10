// src/routes/bookRoutes.ts
import express from 'express';
import {
  listarLivros,
  adicionarLivro,
  buscarLivroPorId,
  atualizarLivro,
  deletarLivro
} from '../controllers/livrosControllers';

const router = express.Router();

router.get('/livros', listarLivros);
router.post('/livros', adicionarLivro);
router.get('/livros/:id', buscarLivroPorId);
router.put('/livros/:id', atualizarLivro);
router.delete('/livros/:id', deletarLivro);

export default router;
