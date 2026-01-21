# API Endpoints

This feature adds REST-style API endpoints to the project to demonstrate
basic API structure and routing.

## Users Endpoints

GET /api/users  
Returns all users.

GET /api/users/:id  
Returns a user by id.

POST /api/users  
Request body:
{
  "username": "example"
}
Creates a new user.

## Health Endpoint

GET /api/health  
Returns server health status, uptime, and a timestamp.
