A) 1. Setting Up Express:

I created an Express application using express().
Configured the server to listen on port 3000.

2. Defining User Data:

I have a userArray that contains user data that I placed for demonstration of this project.

3. Handling Requests:

GET: Responds with a welcome message or a predefined message.
POST: Accepts user data from the request body and sends it back in the response.
PUT: Accepts user ID as a parameter and user data from the body, then returns the updated data (logic to update the userArray is missing).
DELETE: Accepts user ID as a parameter and sends a message (logic to delete from the userArray is missing).

4. Repetitions:

There are redundant route definitions and multiple app.post handlers, which could be simplified."# project-3" 

(Endpoints)

B) 1. **GET `/`**
   - **Description**: Returns a welcome message.
   - **Response**:
     ```json
     {
       "msg": "This is the message"
     }
     ```

2. **POST `/`**

   - **Description**: Accepts user data in the request body and returns it with a message.
   - **Request Body**:
     ```json
     {
       "firstName": "John",
       "lastName": "Doe"
     }
     ```
   - **Response**:
     ```json
     {
       "msg": "This is the message from POST",
       "firstName": "John",
       "lastName": "Doe"
     }
     ```

3. **PUT `/:id`**

   - **Description**: Updates user information based on the provided `id` parameter.
   - **Request Parameters**:
     - `id`: ID of the user to be updated.
   - **Request Body**:
     ```json
     {
       "firstName": "UpdatedFirstName",
       "lastName": "UpdatedLastName"
     }
     ```
   - **Response**:

     ```json
     {
       "msg": "This the message from PUT",
       "userId": "1",
       "firstName": "UpdatedFirstName",
       "lastName": "UpdatedLastName"
     }
     ```

4. **DELETE `/:id`**
   - **Description**: Deletes a user based on the provided `id` parameter.
   - **Request Parameters**:
     - `id`: ID of the user to be deleted.
   - **Response**:
     ```json
     {
       "msg": "This the message from DELETE"
     }
     ```
