# Clients API Documentation 🌟

Welcome to the **Clients API**! This API allows you to manage clients efficiently. You can perform CRUD operations, search for clients, and handle their details effectively.

---

## Features 🚀

- **Retrieve All Clients:** Fetch all client records.
- **Create a New Client:** Add a new client to the database.
- **Update a Client:** Modify an existing client’s details.
- **Delete a Client:** Remove a client from the database.
- **Search Clients:** Search for clients by name, email, or job.

---

## Base URL 🌐

`http://<your-domain-or-localhost>:<port>`

---

## Endpoints 📖

### 1. **Get All Clients**

**GET** `/clients`

- **Description:** Retrieves a list of all clients.
- **Response:**
  - **200 OK:** Returns a JSON array of all clients.
  - **500 Internal Server Error:** If an error occurs while fetching data.

---

### 2. **Create a New Client**

**POST** `/createclient`

- **Description:** Adds a new client.
- **Body Parameters:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "job": "Engineer",
    "rate": 4,
    "isactive": true
  }
  ```
- **Response:**
  - **202 Accepted:** Returns the created client object.
  - **500 Internal Server Error:** If an error occurs during client creation.

---

### 3. **Update a Client**

**PUT** `/updateclient/:id`

- **Description:** Updates a client’s details based on the provided ID.
- **Path Parameter:**
  - `id`: The ID of the client to be updated.
- **Body Parameters:**
  ```json
  {
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "job": "Developer",
    "rate": 5,
    "isactive": false
  }
  ```
- **Response:**
  - **200 OK:** Returns the updated client object.
  - **404 Not Found:** If the client ID does not exist.
  - **500 Internal Server Error:** If an error occurs during the update.

---

### 4. **Delete a Client**

**DELETE** `/deleteclient/:id`

- **Description:** Deletes a client based on the provided ID.
- **Path Parameter:**
  - `id`: The ID of the client to be deleted.
- **Response:**
  - **200 OK:** Confirmation of successful deletion.
  - **404 Not Found:** If the client ID does not exist.
  - **500 Internal Server Error:** If an error occurs during deletion.

---

### 5. **Search Clients**

**GET** `/clients/search?searchItem=<value>`

- **Description:** Searches for clients by name, email, or job.
- **Query Parameters:**
  - `searchItem`: The term to search for (e.g., name, email, or job title).
- **Response:**
  - **202 Accepted:** Returns matching client records.
  - **400 Bad Request:** If the search term is missing.
  - **500 Internal Server Error:** If an error occurs during the search.

---

## Example Responses 💬

### 1. **Get All Clients Response**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "job": "Engineer",
    "rate": 5,
    "isactive": true
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "job": "Designer",
    "rate": 4,
    "isactive": false
  }
]
```

### 2. **Search Clients Response**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "job": "Engineer",
    "rate": 5,
    "isactive": true
  }
]
```

---

## Error Handling 🛠️

- **400 Bad Request:** Indicates that the client request was invalid (e.g., missing query parameters).
- **404 Not Found:** Indicates that the requested resource does not exist.
- **500 Internal Server Error:** Indicates that something went wrong on the server.

---

## Installation & Setup ⚙️

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Database:**
   - Create a PostgreSQL database named `clients_db`.
   - Ensure you have a table `clients_tb` with the following schema:
     ```sql
     CREATE TABLE clients_tb (
         id SERIAL PRIMARY KEY,
         name VARCHAR(100),
         email VARCHAR(100),
         job VARCHAR(50),
         rate INT,
         isactive BOOLEAN
     );
     ```

4. **Start the Server:**
   ```bash
   npm run dev
   ```

5. **Access the API:**
   Open your browser or use Postman to make requests to the endpoints.

---

## Contact 📬

If you encounter any issues or have suggestions, feel free to open an issue or contact me at `sedqiayman02@gmail.com`. ✨

---

### Made with ❤️ by Ayman Sedqi.