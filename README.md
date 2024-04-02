# Social-Network-API
<<<<<<< HEAD
Welcome to the Social Network API! This API provides endpoints to manage users and their associated thoughts and friends within a social network platform.


# Features
Create, read, update, and delete users
Retrieve all users or a single user by ID with associated thoughts and friends
Create, read, update, and delete thoughts
Interact with user thoughts by adding and removing reactions
Connect with other users by adding and removing friends


# Installation
To run the Social Network API locally, follow these steps:

Clone this repository to your local machine:


git clone https://github.com/your-username/Social-Network-API.git
Navigate to the project directory:


cd Social-Network-API
Install dependencies using npm:


npm install
Set up your MongoDB database and configure the connection string in config/connection.js.

Start the server:


npm start
You're now ready to use the Social Network API!

# Usage

Once the server is running, you can send HTTP requests to the provided endpoints using a tool like Postman or curl. Below are examples of some common requests:

Retrieve all users:


GET /api/users
Retrieve a single user by ID with populated thoughts and friends:


GET /api/users/:userId
Create a new user:


POST /api/users
Request body:


{
  "username": "example_user",
  "email": "user@example.com"
}

Update a user by ID:


PUT /api/users/:userId
Request body:


{
  "username": "updated_username"
}

Delete a user by ID:


DELETE /api/users/:userId
For detailed documentation on all available endpoints, refer to the Endpoints section below.

Endpoints

The following endpoints are available:

GET /api/users: Retrieve all users.
GET /api/users/:userId: Retrieve a single user by ID with populated thoughts and friends.
POST /api/users: Create a new user.
PUT /api/users/:userId: Update a user by ID.
DELETE /api/users/:userId: Delete a user by ID.
For detailed documentation on request and response formats for each endpoint, please refer to the source code or API documentation.

# Technologies Used

Node.js
Express.js
MongoDB
Mongoose


# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

# License

This project is licensed under the MIT License.

# links


=======

# Description
This app is a social network API that allows users to share their thoughts, react to friends’ thoughts, and create a friend list. This app uses mongodb and express for the dependencies. You can use insomina to test 
the API calls

# Usage 

It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. 

# future development

Get all the API routes running correctly

# Link

https://github.com/jbatcheller32/Social-Network-API
>>>>>>> f3c3b9e482b1fca3f471765ce9cf01f54e3df2d8
