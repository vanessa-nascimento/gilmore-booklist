import book from "../models/Book.js";

class BookController {
    static async bookList (req, res) {
        try {
            const bookList = await book.find({})
              res.status(200).json(bookList);
        } catch (erro) {
            res.status(500).json(
                { message: `Falha na requisição - ${error.message}` }
            );
        }
    }

    static async bookId (req, res) {
        try {
            const bookFound = await book.findById(req.params.id)
              res.status(200).json(bookFound);
        } catch (erro) {
            res.status(500).json(
                { message: `Falha na requisição do livro - ${error.message}` }
            );
        }
    }

    static async bookCreate (req, res) {
        try {
            const newBook = await book.create(req.body)
            res.status(201).json({
                message: "Criado com sucesso!",
                livro: newBook
            });

        } catch (error) {
            res.status(500).json({
                message: `Falha ao cadastrar livro - ${error.message}`
            })
        }
    }

    static async bookUpdate (req, res) {
        try {
            await book.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({
                message: "Livro atualizado."
            });
        } catch (erro) {
            res.status(500).json(
                { message: `Falha na atualização do livro - ${error.message}` }
            );
        }
    }

    static async bookDelete (req, res) {
        try {
            await book.findByIdAndDelete(req.params.id)
            res.status(200).json({
                message: "Livro deletado."
            });
        } catch (erro) {
            res.status(500).json(
                { message: `Falha ao deletar o livro - ${error.message}` }
            );
        }
    }

}

export default BookController;