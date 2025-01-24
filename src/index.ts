import express from "express";
import cors from "cors";
import clientRoutes from "./routes/clientRoute";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', clientRoutes)

const PORT = 3002;


app.listen(PORT, () => {
    console.log("http://localhost:3002")
})

