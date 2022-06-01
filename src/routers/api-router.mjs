
 import express from "express";
 import { authorsRouter } from "../api/authors-api.mjs";
 import { booksRouter } from "../api/books-api.mjs";
 import { borrowerRouter } from "../api/borrowers-api.mjs";

 export const apiRouter =express.Router();
 
 
 apiRouter.use((req,res,next)=>{
     console.log(`new request : ${req.url}`);
     next();
 
 });
 apiRouter.use('/books',booksRouter);
 apiRouter.use('/authors',authorsRouter);
 apiRouter.use('/borrowers',borrowerRouter);
 