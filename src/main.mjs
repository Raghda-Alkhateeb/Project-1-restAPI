import express from "express";
import {apiRouter} from "./routers/api-router.mjs";
import swaggerUi from "swagger-ui-express";
import swagDocs from '../swagger.json' assert { type: 'json' };

const port=3000;
const app =express();
export const mainApiRouter =express.Router();
app.use(express.json());

app.use('/docs',swaggerUi.serve,swaggerUi.setup(swagDocs));



app.use('/api/v1', apiRouter);



app.listen(port,() => {

console.log(`server runing at http://localhost:${port}`);


});