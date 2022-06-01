import express from "express";
import { queryGetId } from "../queryFunction/queryGet.mjs"
import {resPost} from "../queryFunction/queryPost.mjs"
import {resPut} from "../queryFunction/queryPut.mjs"
import { authors } from "../models/authors.mjs"
import {books} from "../models/books.mjs"



export const authorsRouter = express.Router();

authorsRouter.get('/', (req, res) => {
    res.json(authors);
}
);


authorsRouter.get('/:id', (req, res) => {
    queryGetId(req, res, authors)
})

authorsRouter.post('/', (req, res) => {  
resPost(req,res,authors)
})


authorsRouter.put('/:id', (req, res) => {
    resPut(req,res,authors)
});


authorsRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    const book = books.find(b=> b.authorId == id)
    if (book) {
        res.status(403).json({
            message: 'can not delet this Author'
        })
        return;
    }
    for (let i = 0; i < authors.length; i++) {
        if (authors[i].id == id) {
            authors.splice(i, 1)
            res.status(200).json();    
            return
        }
    }
    res.status(404).json({
        message: 'Author not found'
    })      
});