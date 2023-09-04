const bookModel = require ('../Models/Books.Schema.cjs') 




exports.getAllBooks = async function(req,res){
    try {
        const Books =  await bookModel.find()
        return res.json({"message": "Done" , data:Books})
    }catch (err){ 
        return res.status(400).send({message: err})
    }
} 
exports.getOneBook = async function(req,res){
    try {
        const Book =  await bookModel.find({_id:req.params.id})
        if(Book.length === 0) {
            return res.json({"message": "Book Not Found" , data:Book})
        }else{
            return res.json({"message": "Done" , data:Book})
        }
    }catch (err){ 
        return res.status(400).send({message: err})
    }
} 
exports.addNewBook = async function(req,res){
    try {
        if (req.user.role==="Admin"){
            const createdBook = await bookModel.create(req.body)
            return res.json({message: "Book Added Sucessfully", data:createdBook })
        }else{
            return res.status(403).send({message: " You Don't Have the Right Permssion"})
        }
    }catch (err){ 
        return res.status(400).send({message: err})
    }
} 
exports.deleteBook = async function(req,res){
    try {
        if (req.user.role==="Admin"){
            await bookModel.findOneAndDelete(req.params.id)
            return res.json({message: "Book Deleted ", data:[] })
        }else{
            return res.status(403).send({message: " You Don't Have the Right Permssion"})
        }
    }catch (err){ 
        return res.status(400).send({message: err})
    }
} 
exports.updateBook = async function(req,res){
    try {
        if (req.user.role==="Admin"){
            await bookModel.findOneAndUpdate(req.params.id , req.body)
            return res.json({message: "Book Updated ", data:[] })
        }else{
            return res.status(403).send({message: " You Don't Have the Right Permssion"})
        }
        
    }catch (err){ 
        return res.status(400).send({message: err})
    }
} 



