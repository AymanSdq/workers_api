import { Request , Response } from "express-serve-static-core";
import * as clientServices from "../services/clientServices";

export const getClients = async (req : Request , res: Response) => {

    try {
        const clients = await clientServices.getClients();
        res.status(200).json(clients);
        console.log(clients)
    } catch (error) {
        console.log("Error Fetching Data : " , error);
        res.status(500).json({ message : "Internal Server Error"})
    }
} 


export const createClient = async( req: Request, res: Response) => {

    try {
        const clientData = req.body
        
        const newClient = await clientServices.createClient(clientData);

        res.status(202).json({data : newClient})

    } catch (error) {
        res.status(500).json({Error : error})
    }
}


export const updateClient = async ( req : Request , res: Response) => {

    try {
        const getClientId = parseInt(req.params.id, 10);
        const clientData = req.body;
        
        if(isNaN(getClientId)){
            res.status(404).send("UserId Not found!");
            return
        }

        const updateClient = await clientServices.updateClient(clientData, getClientId)
        

        if (updateClient) {
            res.status(200).json({
                message: "Client updated successfully",
                data: updateClient,
            });
        } else {
            res.status(404).json({ message: "Client not found" });
        }

    } catch (error) {
        res.status(500).json({Error : error})
    }
}


export const deleteClient = async(req : Request, res : Response) => {

    try {
        const getIdClient = parseInt( req.params.id , 10);

        if(isNaN(getIdClient)){
            res.status(404).send("UserId Not found!");
            return;
        }

        const deleteClient = await clientServices.deleteClient(getIdClient);

        if (!deleteClient) {
            res.status(200).json({
                message: "Client Deleted successfully",
            });
        } else {
            res.status(404).json({ message: "Client not found" });
        }

    } catch (error) {
        res.status(500).json({Error : error})
    }
}

export const searchClient = async( req : Request, res : Response ) => {

    try {
        const searchTerm = req.query.searchItem as string;

        if (!searchTerm) {
            res.status(400).json({ message: 'Query parameter searchItem is required' });
            return;
        }

        const clients = await clientServices.searchClient(searchTerm);
        res.status(202).json(clients)
    } catch (error) {
        res.status(500).json({Error : error})
    }
}