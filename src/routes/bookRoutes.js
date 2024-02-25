import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/livros", BookController.bookList)

routes.get("/livros/:id", BookController.bookId)

routes.post("/livros", BookController.bookCreate)

routes.put("/livros/:id", BookController.bookUpdate)

routes.delete("/livros/:id", BookController.bookDelete)


export default routes;