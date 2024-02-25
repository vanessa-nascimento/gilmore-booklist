import express from "express";
import connectDatabase from "./config/dbConnect.js";
import book from "./models/Book.js";

const connection = await connectDatabase();

connection.on("error", (erro) => {
    console.error("Erro de conexão:", erro);
});
  
connection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
})

const app = express();
app.use(express.json());

function getBook(id) {
    return books.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get('/', (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get('/livros', async (req, res) => {
    const bookList = await book.find({})
    res.status(200).json(bookList);
});

app.get('/livros/:id', (req, res) => {
    const index = getBook(req.params.id); 
    res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});

app.put('/livros/:id', (req, res) => {
    const index = getBook(req.params.id); 
    livros[index].titulo = req.body.titulo;

    res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => {
    const index = getBook(req.params.id); 
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!");
});

export default app;