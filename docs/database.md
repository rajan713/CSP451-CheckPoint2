# Database Connection

This feature adds a simple database connection layer to the project.
A local JSON file is used to simulate database behavior so that the
application can store and retrieve data without a real DB server.

## Database Module
File location: src/db/connection.js

Responsibilities:
- Initialize the database file if it does not exist
- Read data from the database
- Write updated data back to the database

## API Endpoints

GET /api/db/users  
Returns all users currently stored in the database.

POST /api/db/users  
Request body:
{
  "username": "example"
}

Adds a new user to the database.
