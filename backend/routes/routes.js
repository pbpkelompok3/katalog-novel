// import express
import express from "express";

// import functions from controllers
import{
    showBooks,
    showSingleBooks,
    addSingleBook,
    updateSingleBook,
    deleteSingleBook,
    addingUser,
    getAllSearch
} from './../controllers/books.js';

// init express router
const router = express.Router();

// get all product
router.get("/home", showBooks);

router.get("/home/:id", showSingleBooks);

router.post("/home", addSingleBook);

router.put('/home/:id', updateSingleBook);

router.delete('/home/:id', deleteSingleBook);

router.post('/login', addingUser);

router.get('/home?:s', getAllSearch);

//export default router
export default router;