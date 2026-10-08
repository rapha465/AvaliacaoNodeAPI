import express from "express";

import {
CriarFilmes,
ListarFilmes,
BuscarFilmesPorId,
AtualizarFilmes,
DeletarFilmes
} from "../controllers/FilmesController.js";

const Router = express.Router();

// CREATE
Router.post("/", CriarFilmes);

// READ - listar todos
Router.get("/", ListarFilmes);

// READ - buscar por ID
Router.get("/:id", BuscarFilmesPorId);

// UPDATE
Router.put("/:id", AtualizarFilmes);

// DELETE
Router.delete("/:id", DeletarFilmes);

export default Router;




