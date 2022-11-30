import{
    getAllBooks,
    getSingleBook,
    addBook,
    updateBook,
    deleteBook,
    addUser,
    getSearch
}from './../models/booksModel.js';

export const showBooks = (req, res) =>{
    getAllBooks((e, ress)=>{
        if(e){
            res.send(e);
        }else{
            res.json(ress);
        }
    })
}

export const showSingleBooks = (req, res) =>{
    getSingleBook(req.params.id, (e, ress) => {
        if(e){
            res.send(e);
        }else{
            res.json(ress);
        }
    })
}

export const addSingleBook = (req, res) =>{
    const data = req.body;
    addBook(data, (e, ress) =>{
        if(e){
            res.send(e);
        }else{
            res.json(ress);
        }
    })
}

export const updateSingleBook = (req,res) =>{
    const data= req.body;
    const id= req.params.id;
    updateBook(data, id, (e, ress)=>{
        if(e){
            res.send(e);
        }else{
            res.json(ress);
        }
    })
}

export const deleteSingleBook = (req, res) => {
    const id = req.params.id;
    deleteBook(id, (e, ress)=>{
        if(e){
            res.send(e);
        }else{
            res.json(ress);
        }
    })
}

export const addingUser = (req, res) => {
    const data = req.body;
    addUser(data, (e, ress)=>{
        if(e){
            res.send(e);
        }else{
            res.json(ress);
        }
    })
}

export const getAllSearch = (req, res) => {
    const data = req.body;
    getSearch(data, (e, ress) => {
        if(e){
            res.send(e);
        }else{
            res.json(ress);
        }
    })
}