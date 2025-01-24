import { Request , Response } from "express-serve-static-core";
import * as clientServices from "../services/clientServices";

export const getClients = async (req : Request , res: Response) => {

    try {
        const clients = await clientServices.getClients();
        res.status(200).send(clients);
        console.log(clients)
    } catch (error) {
        console.log("Error Fetching Data : " , error);
        res.status(500).json({ message : "Internal Server Error"})
    }
} 