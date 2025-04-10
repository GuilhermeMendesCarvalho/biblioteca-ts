// src/controllers/BookController.ts
import { Request, Response } from 'express';
import { livros } from '../models/livros';

let livros: livros[] = []; // Simulação de banco

export const listarLivros = (req: Request, res: Response) => {
  res.json(livros);
};

export const adicionarLivro = (req: Request, res: Response) => {
  const novoLivro: livros = req.body;
  novoLivro.nro = livros.length + 1;
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
};

export const buscarLivroPorId = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const livro = livros.find((l) => l.nro === id);
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
};

export const atualizarLivro = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = livros.findIndex((l) => l.nro === id);
  if (index !== -1) {
    livros[index] = { ...livros[index], ...req.body };
    res.json(livros[index]);
  } else {
    res.status(404).json({ mensagem: 'Livro não encontrado' });
  }
};

export const deletarLivro = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  livros = livros.filter((l) => l.nro !== id);
  res.status(204).send();
};
