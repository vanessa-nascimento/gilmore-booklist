import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    descricao: { type: String },
    paginas: { type: Number }
}, { versionKey: false });

const book = mongoose.model("livros", bookSchema);

export default book;