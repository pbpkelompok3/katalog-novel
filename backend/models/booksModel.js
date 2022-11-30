import db from "./../config/db.js";
db.db;

// Semua buku
export const getAllBooks = (result) => {
    db.query("SELECT * FROM books", (e, res) => {
        if(e) throw e;
        result(null, res);
    })
}

// Satu buku
export const getSingleBook = (id, res) => {
    db.query('SELECT * FROM books WHERE id = ?', [id], (e, ress) =>{
        if(e) throw e;
        res(null, ress[0]);
    })
}

// Tambah buku
export const addBook = (data, res) => {
    db.query("INSERT INTO books SET?"),[data],(e, ress)=>{
        if(e) throw e;
        res(null,ress);
    }
}

// Edit buku
export const updateBook = (data, id, res) =>{
    db.query(
        "UPDATE product SET title = ?, author = ?, publisher = ?, year = ?, pages = ?, sinopsis = ?, img = ? WHERE id = ?",
        [data.title, data.author, data.publisher, data.year, data.pages, data.synopsis, data.img, id], (e, ress) =>{
                if(e) throw e;
                res(null, ress);
            }
        )
}

// Hapus buku
export const deleteBook = (id, res) =>{
    db.query("DELETE FROM books WHERE book_id = ?", [id], (e,ress) => {
        if (e) throw e;
        res(null,ress);
    })
}

// Tambah admin
export const addUser = (data, res) => {
    db.query("INSERT INTO users SET?"),[data], (e, ress) =>{
        if(e) throw e;
        res(null,ress);
    }
}


// Cari buku
export const getSearch = (data, res) => {
    db.query(
        "SELECT * FROM books WHERE EXISTS (SELECT * FROM books WHERE title LIKE %?%, author LIKE %?%, publisher LIKE %?%, year LIKE %?%, genre LIKE %?%)"), [data], (e, ress) =>{
            if(e) throw e;
            res(null,ress);
        }
}