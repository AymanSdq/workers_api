import { query } from '../db';

export const getClients = async() => {

    const getInfo = await query("SELECT * FROM clients_tb;", [])
    return getInfo.rows;
}

interface clientData {
    name : string,
    email : string,
    job : string,
    rate : number,
    isactive : boolean
}

export const createClient = async(clientData : clientData) => {
    const { name, email , job, rate, isactive} = clientData;

    const createCl = await query(`
        INSERT INTO clients_tb (name, email, job, rate, isactive)
        VALUES ($1, $2, $3, $4, $5) RETURNING *
        `, [name, email, job, rate, isactive])

    return createCl.rows[0]
}

export const updateClient = async(clientData : clientData, clientId : number) => {

    const { name, email , job, rate, isactive} = clientData;
    
    const updateCl = await query(`
        UPDATE clients_tb SET name =$1, email =$2, job =$3, rate =$4, isactive=$5
        WHERE id =$6 RETURNING *`,
        [name, email, job, rate, isactive, clientId]
    )

    return updateCl.rows[0];
}

export const deleteClient = async(clientId : number) => {
    
    const deleteCl = await query(`
        DELETE FROM clients_tb WHERE id = $1
        `, [clientId]);

    return deleteCl.rows[0];
}

export const searchClient = async(searchTerm: string) => {

    const searchingClient = await query(`
        SELECT * FROM clients_tb WHERE name ILIKE $1 OR email ILIKE $1 OR job ILIKE $1`,
    [`%${searchTerm}%`]);
    return searchingClient.rows;

}   