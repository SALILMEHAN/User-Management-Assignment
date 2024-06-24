# **User-Management-Assignment**

## **Description**
This repository contains a **Node.js** application for managing users, complete with CRUD operations. It employs **Express** for routing, **Mongoose** for MongoDB interaction, and includes middleware for request handling.

## **Features**
- **User Authentication**: Register and log in users with hashed passwords.
- **CRUD Operations**: Create, read, update, and delete user information.
- **Error Handling**: Middleware for handling errors and validation.
- **Environment Configuration**: Utilizes environment variables for configuration.

## **Installation**
1. Clone the repository:
    ```sh
    git clone https://github.com/SALILMEHAN/User-Management-Assignment.git
    ```
2. Navigate to the project directory:
    ```sh
    cd User-Management-Assignment
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
        ```env
        MONGO_URI=your_mongodb_uri
        PORT=your_port
        ```

## **Usage**
1. Start the server:
    ```sh
    npm start
    ```
2. The server will run on the specified port. Use Postman or any API client to test the endpoints.

## **Project Structure**
.
├── config
│ └── config.js
├── controllers
│ └── userController.js
├── middleware
│ └── errorHandler.js
├── models
│ └── userModel.js
├── routes
│ └── userRoutes.js
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md


## **Endpoints**
- **POST** `/register` - Register a new user.
- **POST** `/login` - Log in an existing user.
- **GET** `/users` - Get a list of users.
- **GET** `/users/:id` - Get a specific user.
- **PUT** `/users/:id` - Update a user's information.
- **DELETE** `/users/:id` - Delete a user.

## **Deployment**
The project is deployed and accessible at [https://user-management-assignment.onrender.com](https://user-management-assignment.onrender.com). Users can interact with the API using tools like Postman, ThunderClient, etc., by using the following endpoints:

- **POST** `https://user-management-assignment.onrender.com/register` - Register a new user.
- **POST** `https://user-management-assignment.onrender.com/login` - Log in an existing user.
- **GET** `https://user-management-assignment.onrender.com/users` - Get a list of users.
- **GET** `https://user-management-assignment.onrender.com/users/:id` - Get a specific user.
- **PUT** `https://user-management-assignment.onrender.com/users/:id` - Update a user's information.
- **DELETE** `https://user-management-assignment.onrender.com/users/:id` - Delete a user.

## **Contributing**
1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m "Description of changes"
    ```
4. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
5. Create a pull request.

## **License**
This project is licensed under the **MIT License**.

---

Feel free to customize this template further according to your project's specific details.
