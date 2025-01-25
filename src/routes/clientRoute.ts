import express from "express";
import * as clientController from "../controllers/clientController";


const router = express.Router();

router.get('/clients', clientController.getClients)
router.post('/createclient', clientController.createClient)
router.put('/updateclient/:id', clientController.updateClient)
router.delete('/deleteclient/:id', clientController.deleteClient)
router.get('/clients/search', clientController.searchClient);


export default router