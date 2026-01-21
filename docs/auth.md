# User Authentication

This project implements a basic user authentication feature using
a REST API endpoint.

## Endpoint
POST /api/auth/login

## Request Body
{
  "username": "student",
  "password": "password123"
}

## Successful Response
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "student"
  }
}

## Error Responses
- 400 Bad Request: Missing or invalid input
- 401 Unauthorized: Invalid username or password
