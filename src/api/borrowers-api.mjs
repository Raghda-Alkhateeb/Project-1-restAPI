
 import express from "express";
import { queryGetId } from "../queryFunction/queryGet.mjs"
import {resPost} from "../queryFunction/queryPost.mjs"
import {resPut} from "../queryFunction/queryPut.mjs"
import { borrowers } from "../models/borrowers.mjs"
import {books} from "../models/books.mjs"



export const borrowerRouter = express.Router();

borrowerRouter.get('/', (req, res) => {
    res.json(borrowers);
});

borrowerRouter.get('/:id', (req, res) => {
    queryGetId(req, res, borrowers)
})
borrowerRouter.post('/', (req, res) => {  
resPost(req,res,borrowers)
})



borrowerRouter.put('/:id', (req, res) => {
resPut(req,res,borrowers)
});

borrowerRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < borrowers.length; i++) {
        if (borrowers[i].id == id) {
            borrowers.splice(i, 1)
            res.status(200).json(borrowers);    
            return
        }
    }
    res.status(404).json({
        message: 'Borrower not found'
    })      
});
    
    