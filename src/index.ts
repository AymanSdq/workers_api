import express from "express";
import cors from "cors";
import { Request , Response  } from "express-serve-static-core";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3002;

app.get("/", (request :Request , response : Response) => {
    response.status(200).send('<h1>Hello and Welcome</h1>')
})

app.listen(PORT, () => {
    console.log("http://localhost:3002")
})

