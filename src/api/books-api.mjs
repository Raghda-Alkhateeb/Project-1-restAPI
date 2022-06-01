import express from "express";
import { queryGetId } from "../queryFunction/queryGet.mjs"
import {resPost ,bookPost} from "../queryFunction/queryPost.mjs"
import {resPut} from "../queryFunction/queryPut.mjs"
import { authors } from "../models/authors.mjs"
import { books } from "../models/books.mjs"
import { paginatedResults } from "../queryFunction/queryGet.mjs"


export const booksRouter = express.Router();

booksRouter.get('/', paginatedResults(books), (req, res) => {
    res.json(res.paginatedResults);
});


booksRouter.get('/:id', (req, res) => {
    queryGetId(req, res, books)
})
booksRouter.post('/', (req, res) => {
    bookPost(req,res,authors)
    if( bookPost(req,res,authors)=="Ok"){
        resPost(req,res,books)
    }

})

booksRouter.put('/:id', (req, res) => {
    bookPost(req,res,authors)
    if( bookPost(req,res,authors)=="Ok"){
        resPut(req,res,books)
    }

})

booksRouter.put('/:id', (req, res) => {
    bookPost(req,res,authors)
    if( bookPost(req,res,authors)=="Ok"){
        resPut(req,res,books)
    }

})




