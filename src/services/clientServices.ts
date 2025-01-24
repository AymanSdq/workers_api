import { query } from '../db';

export const getClients = async() => {

    const getInfo = await query("SELECT * FROM clients_tb", [])
    
}