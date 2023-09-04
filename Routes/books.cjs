const Router = require ('express')
const booksController = require ('../Controllers/BooksController.cjs')
const router = Router.Router()
const authMiddleWare = require('../MiddleWares/auth.cjs')

router.post('/api/books'  , booksController.addNewBook ) // Admin Only
router.get('/api/books' , authMiddleWare , booksController.getAllBooks )
router.get('/api/books/:id' , authMiddleWare , booksController.getOneBook )
router.put('/api/books/:id' , authMiddleWare , booksController.updateBook ) // Admin Only
router.delete('/api/books/:id' , authMiddleWare , booksController.deleteBook ) // Admin Only


module.exports = router